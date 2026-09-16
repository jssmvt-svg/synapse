---
name: Atomic library seeds
description: Why long official-content seeds must be atomic and allowed to finish before restarting the app.
---

Seed each subject inside one database transaction, and do not restart the workflow while a long content seed is still progressing.

**Why:** The official library seed can take several minutes through the Supabase transaction pooler. A previous non-transactional run disabled all chapters first and was interrupted after reactivating only a prefix, leaving students with 7 courses and no laboratories.

**How to apply:** Keep all deactivate-and-upsert operations for one subject on the same checked-out client and commit only after the whole subject succeeds. If a workflow restart occurs during a seed, wait for rollback/commit and check for stale transactions before restarting again.