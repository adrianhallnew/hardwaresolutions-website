/**
 * In-memory sliding-window rate limiter — architecture.md §8.
 * 5 requests / 10 minutes per IP. No Redis/Vercel KV: this is the only
 * rate-limited endpoint on the site and traffic is low, so a dependency
 * for shared cross-instance state isn't justified.
 *
 * Known limitation: state resets on cold start and isn't shared across
 * concurrent serverless instances — acceptable for a brochure site's
 * contact form (worst case, a determined spammer gets a few extra
 * attempts across instances, not unlimited attempts).
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const attempts = new Map<string, number[]>();

export function checkRateLimit(ip: string): { allowed: boolean } {
  const now = Date.now();
  const timestamps = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS) {
    attempts.set(ip, timestamps);
    return { allowed: false };
  }

  timestamps.push(now);
  attempts.set(ip, timestamps);
  return { allowed: true };
}
