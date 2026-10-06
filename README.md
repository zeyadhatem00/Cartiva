# Cartiva

Cartiva is a Next.js storefront for browsing products, brands, and categories, then managing an authenticated shopping journey from wishlist and cart through checkout and order history. The UI is tailored to the Route Academy ecommerce API used by the server-side service modules.

**Repository:** [zeyadhatem00/Cartiva](https://github.com/zeyadhatem00/Cartiva)
**Default branch:** `master`

## What is implemented

- Home page with hero content, categories, and a 12-product “trending” request.
- Product discovery across the shop, categories, and brands, with client-side title search, category and price filters, price sorting, and pagination.
- Product detail pages with remote images, ratings, review counts, related products, and add-to-cart/add-to-wishlist controls.
- Credential sign-in and sign-up through NextAuth and the ecommerce API.
- Authenticated wishlist and cart flows, including quantity updates, item removal, and clearing the cart.
- Checkout with shipping details, cash on delivery, or a card-payment redirect returned by the backend.
- Authenticated order history with order items, delivery address, payment method, and totals.
- Responsive navigation, mobile filters, notifications, and animated product cards.

## Stack

- [Next.js](https://nextjs.org/) `16.3.4` with the App Router and TypeScript
- React `19.2.8` and NextAuth `4.24.15`
- Tailwind CSS `4` via `@tailwindcss/postcss`
- HeroUI, React Hook Form, Zod, Swiper, Motion, Lucide React, Sonner, and React Spinners
- npm dependencies are pinned through [`package-lock.json`](package-lock.json)

## Prerequisites

- Node.js; this repository does not declare an `engines` version.
- Access to the ecommerce API used by the service modules.
- An `AUTH_SECRET` value for decoding the NextAuth session token.

## Local setup

The repository does not include an environment example. Create `.env.local` in the project root with the variable names consumed by the source:

```dotenv
Base_URL=<your ecommerce API base URL ending in />
AUTH_SECRET=<a local secret used by NextAuth token decoding>
Domain=http://localhost:3000
```

`Base_URL` is concatenated directly with paths such as `products`, `cart`, `wishlist`, `orders`, and `auth/signup`, so include the trailing slash. `Domain` is passed to the card checkout endpoint as its return URL. Do not commit `.env.local`; `.env*` is ignored by the repository.

The credentials provider currently sends sign-in requests to the Route Academy endpoint `https://ecommerce.routemisr.com/api/v1/auth/signin`. The remaining product, account, cart, wishlist, order, and checkout requests use `Base_URL`, so the configured backend must expose the corresponding API surface.

Install the locked dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development script runs `next dev --turbo`.

## Available scripts

These commands are defined in [`package.json`](package.json):

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Turbopack development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build. Run `npm run build` first. |
| `npm run lint` | Run the repository ESLint configuration. |

## Application map

- `src/app/page.tsx` — server-rendered home page and featured product request.
- `src/app/(Pages)/Shop` — catalog display, search state, filters, sorting, and pagination.
- `src/app/(Pages)/productDetails/[id]` — product details and related products.
- `src/app/(Pages)/cart` and `src/app/(Pages)/Checkout` — authenticated cart and checkout UI.
- `src/app/(Pages)/Wishlist`, `src/app/(Pages)/Profile`, and `src/app/(Pages)/allorders` — account, wishlist, profile, and order areas.
- `src/app/Services` — server actions for catalog, authentication, cart, wishlist, profile, password recovery, checkout, and orders.
- `src/app/context` — product, cart, and wishlist providers used by the client UI.
- `src/app/NextAuth` and `src/app/api/auth/[...nextauth]` — credentials authentication and the NextAuth route.
- `next.config.ts` — allows product, category, and brand images from `ecommerce.routemisr.com`.

## Important runtime notes

- Routes for `/cart`, `/Wishlist`, `/allorders`, `/Profile`, `/Profile/Settings`, and `/Profile/Address` are redirected to `/LogIn` when the token helper cannot find an authenticated session.
- `src/app/Services/GetMyToken.ts` reads only `__Secure-next-auth.session-token`. If sign-in appears successful but authenticated server actions fail on local HTTP, check the session-cookie name and HTTPS configuration; those flows were not runtime-tested during this documentation review.
- Authenticated server actions send the decoded token in a `token` request header. The backend must accept that convention.
- The app fetches live API data; it is not a self-contained demo with local product fixtures. Without a working `Base_URL`, catalog and account pages cannot load.
- The home-page newsletter email field is currently UI-only: the input and `Subscribe` button do not submit to an endpoint in `src/app/page.tsx`.
- The checkout card option depends on the backend returning a successful hosted checkout session URL. Cash-on-delivery uses the backend order endpoint directly.
