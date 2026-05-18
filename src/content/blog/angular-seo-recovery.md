---
title: "How I Got 1,000+ Angular SPA Pages Indexed Without SSR"
description: "A live Angular SPA had every product page invisible to Google. How I fixed it with prerendering and hydration — no SSR infrastructure required."
date: 2026-05-16
tags: ["angular", "seo", "prerendering", "googlebot"]
draft: false
---

The site looked fine. Pages loaded fast, Lighthouse scores were green, the product catalog was live. Then someone Googled one of our 1,000+ products and found nothing — not just a low ranking, *nothing*. Google's index for the entire product range: zero pages.

This is the post-mortem.

## The symptom

Search Console showed all product URLs as "Discovered — currently not indexed." Googlebot had crawled them, then walked away. The pages existed. They just weren't being kept.

## The cause: a 4MB crawl budget problem

The site was a standard Angular SPA. Every product page was the same shell, populated by JavaScript after a Firebase fetch. Googlebot does run JavaScript — but it doesn't run *yours* on its own schedule. It defers, queues, and frequently gives up if rendering is expensive.

Our pages were 4MB. Big bundle, hydration cost, image-heavy. Googlebot was timing out before content existed in the DOM.

## Why I didn't reach for SSR

The textbook answer is server-side rendering: ship Angular Universal, render on the server, send HTML to the crawler. But SSR brings its own tax — a Node runtime in production, cold-start latency, deployment complexity, state-transfer bugs.

We didn't need a server-rendered page on every request. We needed a *crawlable* page on Google's request. Those are different problems.

## The fix: prerender at build time

Angular's built-in prerendering generates static HTML at build time for known routes. The browser still gets the SPA experience — hydration takes over after first paint — but the crawler gets pure HTML, no JavaScript required.

```bash
ng build --prerender
```

This wasn't quite enough on its own. Two more pieces:

- **Route discovery** — the build needed a list of product slugs. A pre-build step pulled the product index from Firebase and wrote it to `routes.txt`, which Angular's prerenderer consumed.
- **Hydration mismatch** — Angular needs to know the prerendered DOM matches what it would render client-side, or it tears down and rebuilds (defeating the point). Turning on hydration via `provideClientHydration()` fixed this.

## The result

Within three weeks of deploy: all 1,000+ product pages indexed. Search traffic recovered. No SSR infrastructure. No Node runtime in production. The site stayed a static deploy — just with the right HTML at the right URLs.

## What I'd tell past me

The instinct is to reach for the big tool — SSR, Next.js, full migration. The right move was smaller: figure out what the crawler actually needed, give it exactly that, leave everything else untouched.

Crawlable HTML at build time. Hydration to keep the SPA experience. That was the whole fix.
