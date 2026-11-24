/* in-memory sliding window: the VPS runs one process, one replica, so one map sees every request */
const WINDOW_MS = 60_000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

/* drop keys whose newest hit left the window, so the map never outgrows a minute of traffic */
function sweep(now: number) {
  for (const [key, timestamps] of hits) {
    if (now - (timestamps.at(-1) ?? 0) >= WINDOW_MS) hits.delete(key);
  }
}

export function checkRateLimit(key: string): boolean {
  const now = Date.now();
  sweep(now);
  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}
