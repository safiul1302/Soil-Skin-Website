# Soil & Skin marketing setup

The website publishes the integration code with all optional marketing services off until their accounts and server secrets are configured. Open `/admin/marketing` to enter public IDs and see setup status. Never paste API tokens into the Admin text fields or a public chat.

## Analytics and Meta

1. In Google Analytics, create a GA4 web data stream for the production domain. Paste its `G-...` measurement ID in Admin → Analytics & marketing.
2. In Meta Events Manager, create a Pixel for the same domain. Paste its numeric Pixel ID in Admin.
3. If approved for Conversions API, configure `META_CAPI_ACCESS_TOKEN` as a **server secret**. The site sends consented Cash on Delivery purchases after order placement and consented online purchases only after gateway verification. Meta browser Pixel and server events use the order UUID as the shared event ID. Do a test purchase in Meta Events Manager to check event matching and deduplication.
4. Analytics and Meta scripts load only after the visitor selects the relevant choice. Customers can change this using **Privacy choices** in the footer. Update your privacy page for your actual processing and retention practices before enabling IDs.

## Google Merchant Center

1. Verify control of the production site in Merchant Center. Paste the content value from Google's `google-site-verification` meta tag into Admin; do not paste the entire HTML tag.
2. Set business information, Bangladesh shipping rates, return policy, and target market in Merchant Center.
3. Add `https://soil-and-skin-group.enamulh99.chatgpt.site/merchant-feed.xml` as a scheduled product source. The feed has live BDT prices, orderable variants, photos, availability, size and colour where configured.
4. Check Diagnostics in Merchant Center. Correct missing product details, images, shipping, or account policy issues there. The feed URL alone does not create or approve a Merchant account.

## Email

1. Verify your sending domain with Resend.
2. Configure `RESEND_API_KEY` and `MARKETING_FROM_EMAIL` as server secrets in the Site's hosting settings; the latter should be a sender address on the verified domain.
3. The newsletter form becomes available. New subscribers receive a confirmation email; they must click **Confirm subscription** before being added to the confirmed audience.
4. If desired, enable the welcome email switch in Admin. The welcome message sends after confirmation. The existing older subscriber addresses remain stored but unconfirmed and receive no automatic messages.

## SMS and WhatsApp

The checkout has separate, optional SMS and WhatsApp opt-in checkboxes. A delivered order can trigger one update per opted-in channel. Neither is active until the provider and sender are approved.

For SMS, provision a Bangladesh-capable sender in Twilio, then configure `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and `TWILIO_MESSAGING_SERVICE_SID` as server secrets. The SMS includes a link to stop SMS and WhatsApp updates.

For WhatsApp, onboard the business phone number with Meta WhatsApp Cloud API, create and obtain approval for an English (`en_US`) order-delivered template, and include an opt-out instruction in that approved template. Configure `META_WA_TOKEN`, `META_WA_PHONE_NUMBER_ID`, and `META_WA_DELIVERED_TEMPLATE` as server secrets. The floating WhatsApp support link is independent of the outbound messaging API.

After sender tests and content approval, turn on each delivery update switch separately in Admin. Both start off and remain off even if the credentials have been added.

The Admin dashboard displays recent send attempts as **submitted** or **failed**. Submitted means the provider accepted the API request; delivery to the customer may still fail. Provider webhooks and promotional broadcast campaigns are not configured. Do not enable paid channels until sender approval, opt-out handling, budget, and message content are reviewed.

## Validation

Test on a device that has chosen tracking consent. Verify GA4 events in DebugView, Pixel events and deduplication in Meta Test Events, the XML feed in Merchant Center Diagnostics, newsletter confirmation, SMS and WhatsApp template delivery with opted-in test numbers, and opt-out behavior. Keep live secrets out of source code.
