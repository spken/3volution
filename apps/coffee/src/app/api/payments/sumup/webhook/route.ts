/**
 * PLACEHOLDER: SumUp checkout status webhook (not built yet).
 *
 * SumUp calls the checkout's return_url when its status changes. The payload only
 * identifies the checkout, so the real status must be re-fetched from
 * GET https://api.sumup.com/v0.1/checkouts/{id} before acting on it. Never trust
 * the webhook body alone. Must respond quickly with 2xx and be idempotent (retries).
 */
export async function POST() {
  return Response.json(
    { error: "not_implemented" },
    { status: 501, headers: { "Cache-Control": "no-store" } },
  );
}
