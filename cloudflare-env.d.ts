declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    SSLCOMMERZ_STORE_ID?: string;
    SSLCOMMERZ_STORE_PASSWORD?: string;
    SSLCOMMERZ_MODE?: string;
    SSLCOMMERZ_LIVE_ENABLED?: string;
    RESEND_API_KEY?: string;
    MARKETING_FROM_EMAIL?: string;
    TWILIO_ACCOUNT_SID?: string;
    TWILIO_AUTH_TOKEN?: string;
    TWILIO_MESSAGING_SERVICE_SID?: string;
    META_WA_TOKEN?: string;
    META_WA_PHONE_NUMBER_ID?: string;
    META_WA_DELIVERED_TEMPLATE?: string;
    META_CAPI_ACCESS_TOKEN?: string;
  }
}
