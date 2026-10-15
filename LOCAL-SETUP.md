# Run Soil & Skin on Windows

1. Install Node.js 22 or newer.
2. Extract the source ZIP, then open Command Prompt in the extracted folder.
3. Run `corepack pnpm install`.
4. Run `corepack pnpm dev`.
5. Open the Local URL printed in the terminal (normally http://localhost:3000).

Leave the terminal open while viewing the site. Press Ctrl+C to stop it.

Edit `app/page.tsx` for the homepage, `app/[business]/page.tsx` for the business pages, `app/globals.css` for styling, `public/fashion-hero.png` for the campaign image, and `public/soil-and-skin-logo.png` for the logo. Changes to source files refresh the local site. The private hosted version is updated separately.

The Fashion landing cards are in `components/fashion-category-landing.tsx`. They use the main photo of the first published product in each department or product type. Women and Kids cards remain branded text panels until their own products and photos are published. Fashion navigation and filtering are in `components/fashion-storefront.tsx`.

## Product management

The hosted site has a private product editor at `/admin/products`. Sign in with the owner ChatGPT account, add a product name and description, upload a JPG/PNG/WebP photo (up to 5 MB), and click **Add & publish**. You can also **Save draft** and publish it later. For Fashion products, choose Men, Women or Kids and a product type so the item appears in the correct storefront collection and type filter. Published products appear in Fashion or Sourcing. Drafts appear only in the editor. Prices are in Bangladeshi taka; leave price blank for a quotation item.

The Windows `pnpm dev` command previews the site design, but its plain Next.js server does not provide the hosted Cloudflare database, image bucket, or ChatGPT owner identity. Use the hosted private site to add and edit products. Changes made in that editor are stored online and do not require a source code edit.

The eight starter men’s T-shirt products use images in `public/products/` and are initially priced at ৳399. They are added to the hosted product database when the Fashion catalog first loads. Edit their names, collection, type, price, description and main photo through the editor. Unpublishing a starter product hides it from shoppers. Its original gallery photos remain in the source and appear on the product page.

To add more photos, open a product in the editor and choose **More product photos**. You can upload up to eight at a time and keep up to twelve gallery photos. Existing gallery photos can be reordered, removed, or chosen as the main photo. Save the product to apply the changes. The original starter images bundled with the source remain available alongside uploaded gallery photos.

You can add size, colour and stock rows in the product editor. Add one row per combination, for example M/Black and L/Black. A shopper must choose an available combination before adding that product to the bag. Requests are checked against the current stock when submitted; sending a request does not reserve or deduct stock. Older products without rows keep the original bag behavior until you enter their stock.

Customers can add Fashion products to the bag at `/cart`, then submit an order request or quotation request. These requests are stored in the hosted database and the owner can read them at `/admin/orders`. The team must contact the customer to confirm availability, delivery and payment. Online payment is not connected and no payment is collected by this site.

## Buyer and admin sign-in

`/account` offers ChatGPT sign-in. A new buyer can create a ChatGPT account through that sign-in flow, then click **Create buyer account** to register with Soil & Skin. Requests submitted while signed in appear in the buyer's account; earlier guest requests are not linked automatically. Guest requests remain available. `/admin` is a separate entry point, and only the owner account email can access product and request management; the authorization check also runs on admin APIs.

The hosted Site is currently private to the owner. Other buyers cannot use these new account pages until the Site audience is intentionally changed to public. This is not an independent email/password account system; no passwords are stored by Soil & Skin.
