---
title: "2D DXF Cutting Plan Renderer — End-to-End Pipeline"
description: "End-to-end DXF-to-canvas pipeline: ASP.NET ingestion, Azure Service Bus messaging, Functions processing, CosmosDB persistence, Canvas rendering."
date: 2025-09-01
stack: ["ASP.NET", "Azure Service Bus", "Azure Functions", "CosmosDB", "Canvas API", "Angular"]
impact: "End-to-end DXF rendering replacing manual review"
featured: true
---

## The problem

Customers were uploading DXF files (CAD cutting plans) and waiting for someone on the team to open them in AutoCAD, review the geometry, and reply. Hours of turnaround, manual bottleneck, no scaling.

The goal: ingest a DXF, parse the geometry server-side, render it interactively in the browser within seconds.

## The architecture

```
Browser  →  ASP.NET API  →  Azure Service Bus  →  Azure Function  →  CosmosDB
                                                                          ↓
                                                              Angular  ←  REST
                                                                 ↓
                                                            Canvas / SVG
```

Why each piece earned its place:

### ASP.NET ingestion
Handles upload, validates the file, drops the parse job on the queue. Returns instantly — the user doesn't wait for parsing.

### Azure Service Bus
Decouples upload from parse. Bursty traffic (someone uploads 50 files at once) doesn't take down the API. Built-in retries handle parse failures without losing data.

### Azure Function
Pure parse worker. Receives a message, reads the DXF from blob storage, walks the entity tree, normalises geometry into a coordinate system the renderer understands, writes the result to Cosmos.

### CosmosDB
Stores the parsed geometry as JSON. Indexed by file ID. Fast point reads when the browser fetches the result.

### Angular + Canvas
Receives the geometry, renders it on a `<canvas>` for performance with pan/zoom, falls back to SVG for export and accessibility.

## Trade-offs I'd make again

**Async by default.** The temptation was to parse inline in the API request — simpler, fewer moving parts. But a single 10MB DXF would block a request thread for seconds. Async with Service Bus added two components but kept the API responsive under any load.

**Canvas over pure SVG.** SVG was tempting for accessibility, but DXFs can contain thousands of entities. The DOM cost of SVG at that scale tanked frame rate. Canvas renders smoothly with 50,000 lines; SVG started chugging at 2,000.

**CosmosDB over relational.** Geometry is a graph. Forcing it into rows and joins would have meant either denormalising into a JSON blob anyway, or building a join layer that no one would want to maintain. Document-native was the right shape.

## What I'd do differently

WebGL for rendering, when I revisit. Canvas held up but I can see the ceiling — interactive plans with thousands of cuts start to feel sluggish on pan. WebGL via something like PixiJS would push that ceiling much higher without changing the data layer at all.
