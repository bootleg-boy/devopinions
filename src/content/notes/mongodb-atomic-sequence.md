---
title: "MongoDB Atomic Sequence Generator — The findAndModify Pattern"
description: "Quick note on why findAndModify with $inc is the right tool for generating sequential IDs in MongoDB without race conditions."
date: 2026-05-10
tags: ["mongodb", "concurrency", "til"]
topic: "mongodb"
---

Hit a race condition at work — two orders submitted within milliseconds got the same order ID. Classic.

The root cause: we were generating IDs by `count(*) + 1` then writing. Between read and write, another process could read the same count. Two writes, same ID, conflict.

## The fix

MongoDB's `findAndModify` (or `findOneAndUpdate` in newer drivers) does the increment-and-return atomically on the server. Race condition impossible — it's the whole point of the operation.

```javascript
const result = await db.collection('counters').findOneAndUpdate(
  { _id: 'orderId' },
  { $inc: { seq: 1 } },
  { returnDocument: 'after', upsert: true }
);
const nextOrderId = result.value.seq;
```

Key bits:
- `upsert: true` — creates the counter doc on first call
- `returnDocument: 'after'` — gives you the incremented value, not the pre-increment one
- The whole operation is one round trip and one server-side atomic write

## Why not a UUID?

For internal IDs, UUIDs would work. But these orders are customer-facing — they need to be short, sequential, human-readable for support calls. "Your order #1402" beats "Your order #a4f8-9c2e-..."

## Performance note

The counter document becomes a write hotspot. For low-volume order systems, fine. For high-throughput cases you'd shard counters (e.g. one per region) and merge, but that's overkill until you measure it.
