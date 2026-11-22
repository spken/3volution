/**
 * PLACEHOLDER: SumUp online payments (not built yet).
 *
 * Planned flow (verify against the SumUp API docs when implementing):
 *  1. Client POSTs what is being paid for (e.g. voucher, pre-order, reservation deposit).
 *     Prices are looked up server-side, never taken from the request body.
 *  2. This handler creates a checkout: POST https://api.sumup.com/v0.1/checkouts
 *     (Bearer SUMUP_API_KEY; merchant_code SUMUP_MERCHANT_CODE; currency "CHF";
 *     unique checkout_reference; return_url = /api/payments/sumup/webhook).
 *  3. Responds with the checkout id; the page mounts the SumUp Card Widget with it
 *     (or redirects to SumUp's hosted checkout).
 *  4. Final status arrives via the webhook route.
 *
 * Env: SUMUP_API_KEY, SUMUP_MERCHANT_CODE (see .env.example). Server-only, never NEXT_PUBLIC_.
 */
export async function POST() {
  return Response.json(
    { error: "not_implemented", message: "Online payments via SumUp are not available yet." },
    { status: 501, headers: { "Cache-Control": "no-store" } },
  );
}
