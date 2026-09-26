# Ghouse Readymades · கவுஸ் ரெடிமேட்ஸ்

The online shop for **Ghouse Readymades**, Chidambaram Main Road, Lalpet – 608 303.
Every item costs ₹100. Shipping is a flat ₹50 per order anywhere in Tamil Nadu, by ST Courier.
Customers order on WhatsApp.

The site is plain HTML, CSS and JavaScript. It has no server and no build step, so it runs directly on **GitHub Pages**.

## Features

- **English + Tamil.** One tap switches the language, and the choice is remembered. Tamil is the default.
- **Catalogue of all 15 products from the shop price list.** Customers can search in English or Tamil, filter by category and sort.
- **Product pages.** Customers pick size, age or type and a colour, and set the quantity. Each page has Buy now, Ask on WhatsApp, Share and Wishlist buttons, plus related and recently viewed products.
- **Quick-add popup.** Customers can add a product straight from the product grid.
- **Cart.** It shows the ₹50 flat shipping and how much each item costs once shipping is included (for example, 5 items work out to ₹110 each). It also suggests other products, which leaves the shipping fee unchanged.
- **Order page with a WhatsApp preview.** It shows the shop's profile in WhatsApp style and a live preview of the message. The customer taps once to send the full order to 82204 61646. Every message ends with:
  > 🌐 This order is placed through **ghousereadymades.github.io**
- **Checkout form.** The phone number and Tamil Nadu pincode are checked, all 38 districts plus Puducherry are listed, and customers can choose ST Courier or collect from the shop. The form can remember the customer's details.
- **Order IDs and order history.** Each order gets an ID (for example `GR260926-4821`). The *My Orders* page lets a customer resend an order on WhatsApp or order the same items again.
- **Other sections:**
  - YouTube section
  - Shop price-list poster
  - FAQ
  - Map and directions
  - Floating WhatsApp button
  - Bottom navigation bar on mobile
  - Can be installed as an app and works offline
  - Search engine data (SEO / structured data)

## Editing the shop (no coding needed)

| What to change | File |
|---|---|
| Phone / WhatsApp number, shipping fee, YouTube link, offer banner, cash on delivery | `js/config.js` |
| Products, prices, sizes, sold out, photos | `js/products.js` |
| Any website text (English / Tamil) | `js/i18n.js` |

**Adding real product photos.** Upload your photos to the `images/` folder. Then add them to the product in `js/products.js`:

```js
images: ["images/readymade-jacket-1.jpg", "images/readymade-jacket-2.jpg"],
```

Until you add a photo, the site shows a drawn picture of the product.

**Featuring YouTube videos.** In `js/config.js`, set `channelUrl` to your channel link. Then add each video's ID to `videos`. The ID is the part after `v=` in the video link.

**Showing an offer at the top of the site.** In `js/config.js`, fill in the `offerBanner` text in English and Tamil. Leave it empty to hide the banner.

**Marking a product as sold out.** Set `inStock: false` for that product in `js/products.js`.

## Publishing on GitHub Pages

To use the address **ghousereadymades.github.io**, the GitHub account (or organisation) must be named `ghousereadymades`, and the repository must be named `ghousereadymades.github.io`:

1. Push these files to the `main` branch of that repository.
2. Go to **Settings → Pages → Build and deployment**, and choose *Deploy from a branch*, with `main` and `/ (root)`.
3. After about a minute, the site is live at `https://ghousereadymades.github.io/`.

If you publish from a different repository, change `siteUrl` in `js/config.js`. That keeps the note in WhatsApp orders correct.

## Testing on your computer

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
