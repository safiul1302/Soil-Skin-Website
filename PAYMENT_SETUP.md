# Online payment setup for Soil & Skin

Cash on Delivery remains available. The online option stays disabled until merchant onboarding and verification are complete.

## Merchant setup

1. Apply for a live SSLCOMMERZ merchant account for the company that will receive customer payments. Ask SSLCOMMERZ which bKash, Nagad, cards, DBBL, and bank channels are enabled on **your** merchant account. The available channels are chosen on its hosted page; the site does not promise a particular channel.
2. Confirm the merchant settlement bank account directly in the merchant portal. Do not put bank account details or the store password in source code, screenshots, or public pages.
3. Configure the IPN URL in the merchant portal: `https://soil-and-skin-group.enamulh99.chatgpt.site/api/payment/ipn`.
4. Add the store ID and store password as server-side Site secrets named `SSLCOMMERZ_STORE_ID` and `SSLCOMMERZ_STORE_PASSWORD`. Set `SSLCOMMERZ_MODE=live`. Leave `SSLCOMMERZ_LIVE_ENABLED` unset during setup.
5. Before enabling the public checkout, test a real small payment, provider validation, risk review, duplicate callback, failed/cancelled return, admin payment status, and reconciliation against the merchant dashboard. Refund any live test according to the provider's process.
6. After those tests pass, set `SSLCOMMERZ_LIVE_ENABLED=true`. The online option then appears on checkout. To pause new online orders, unset it or set it to `false`. Keep the other credentials configured until all pending notifications have been reconciled.

The customer is redirected to the provider's hosted checkout. The Site never collects card numbers. A return to the Site does not itself prove payment: the server validates the provider's transaction ID, amount, currency, and validation ID. Risky payments stay under review. Cash on Delivery orders remain unpaid until collected.

If an online session starts but the customer does not finish payment, the order remains pending and stock is reserved. The admin must review and cancel it, restoring stock, before confirming another sale. Paid online orders need the provider's refund process; changing order status does not issue a refund.

Official integration reference: https://developer.sslcommerz.com/doc/v4/
