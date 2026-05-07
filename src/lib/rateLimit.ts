/**
 * Tiny in-memory token-bucket rate limiter, keyed by an arbitrary id (typically
 * client IP). The bucket refills linearly over `windowMs`.
 *
 * NOTE: This is process-local. On Vercel's serverless runtime each cold
 * invocation starts fresh, so this is best-effort throttling — it stops trivial
 * abuse from a hot lambda but is not a substitute for an edge rate-limiter.
 */

type Bucket = { tokens: number; lastRefill: number };

const buckets = new Map<string, Bucket>();

export type RateLimitResult = { allowed: boolean; retryAfterSeconds: number };

export function rateLimit(
  id: string,
  capacity: number,
  windowMs: number,
): RateLimitResult {
  const now = Date.now();
  const refillRate = capacity / windowMs; // tokens per ms
  const existing = buckets.get(id);
  const bucket: Bucket = existing ?? { tokens: capacity, lastRefill: now };

  const elapsed = now - bucket.lastRefill;
  bucket.tokens = Math.min(capacity, bucket.tokens + elapsed * refillRate);
  bucket.lastRefill = now;

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    buckets.set(id, bucket);
    return { allowed: true, retryAfterSeconds: 0 };
  }

  buckets.set(id, bucket);
  const tokensNeeded = 1 - bucket.tokens;
  const retryAfterMs = Math.ceil(tokensNeeded / refillRate);
  return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)) };
}
