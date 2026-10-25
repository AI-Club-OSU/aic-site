# AI Club @ OSU

Official website for the Artificial Intelligence Club at Oregon State University.

React, TanStack Router, TanStack Start static prerendering, Vite Plus, and Tailwind CSS. Hosted on Cloudflare.

## Development

Use Node.js 24.22.1 (see `.node-version`).

```sh
npm ci
npm run dev
npm run check
npm test
npm run build
npm run preview
```

Development runs at **https://aic-site.localhost**. The static production preview runs at **https://preview.aic-site.localhost**. Both use [Portless](https://portless.sh/commands) with its default shared proxy and state. Portless is pinned to the same version as our other local projects. The normal package scripts register each app; no separate proxy, certificates, ports, or state directory are configured in this project.

With the global Vite Plus CLI, use `vp install`, `vp run dev`, `vp check`, `vp test run`, `vp build`, and `vp run preview`. Use `vp run dev` and `vp run preview` to run the package scripts through Portless; bare `vp dev` and `vp preview` invoke the built-in tools directly. To bypass Portless temporarily, use `PORTLESS=0 npm run dev`.

## Rendering and routing

Pages live in `src/routes`: `/`, `/about/`, and `/events/`. TanStack Start generates the route tree and prerenders every static route during `vp build`. Commit `src/routeTree.gen.ts`, but do not edit it manually.

The deployable output is **`dist/client`**, containing HTML for each page, CSS, JavaScript, and images. Page titles, descriptions, headings, and event cards are present in the generated HTML before JavaScript runs. React hydrates those pages for client navigation, mobile menus, and event dialogs. Event data is imported into the build; there is no browser request to GitHub, Pages CMS, or a separate events JSON endpoint.

The HTML classifies events using the build date in `America/Los_Angeles`. After hydration, the app uses the visitor's local date and refreshes that classification at local midnight and when the window regains focus. The initial hydration uses the same date as the HTML to avoid mismatches. Without JavaScript, the page remains the build-time snapshot. Rebuild when content changes or when the static snapshot needs refreshing.

TanStack Start also produces `dist/server` for its rendering pipeline. Deploy **only `dist/client`**; this site requires no production rendering server or Worker. The preview script uses a separate minimal Vite configuration to serve only static files, without the Start server.

The former `/about.html` and `/events.html` URLs have no compatibility routes or redirects. On Cloudflare Pages, `/index.html` has the platform's normal redirect to `/`; this project adds no legacy redirects.

## Content editing

[Pages CMS](https://app.pagescms.org/) uses `.pages.yml` to provide an Events form. Sign in with GitHub and select `AI-Club-OSU/aic-site` and the intended branch. Events are stored in `src/content/events.json`; uploaded images are stored in `public/assets`, with public URLs starting with `/assets/`. Those files can also be edited directly on GitHub. Home and About copy is edited in the route components.

CMS saves commit changes to GitHub. If Cloudflare Git integration watches that branch, each save triggers a deployment. Content updates become visible once deployment completes. The home page shows the two latest past events. Past events sort newest first; today's and future events sort soonest first.

## Cloudflare deployment

For Cloudflare Pages, use:

- Install: `npm ci` (or the platform's automatic npm lockfile install)
- Build command: `npm run build`
- Build output directory: `dist/client`
- Node.js: `24.22.1`

Cloudflare serves `/about` and `/events` from their generated nested `index.html` files. The top-level `404.html` disables SPA fallback and gives unknown paths a real 404 response. See [Cloudflare's serving behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/).

For Workers Static Assets, point the asset directory at `./dist/client`, use `assets.html_handling: "force-trailing-slash"` and `assets.not_found_handling: "404-page"`, and omit a Worker entry point. No request-time rendering or SPA fallback is needed.

Update the existing Cloudflare project's build settings when deploying this migration. Repository changes do not change live hosting settings automatically.
