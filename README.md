# AI Club @ OSU

Website for Oregon State University's Artificial Intelligence Club. Built with React, TanStack Router and Start, Vite Plus, and Tailwind CSS. Hosted on Cloudflare.

## Development

Use Node.js 26.12.1 and [Vite Plus](https://viteplus.dev/guide/). Vite Plus downloads and uses the pnpm version pinned in `package.json`.

```sh
vp install
vp run dev
vp run check
vp test run
vp build
vp run preview
```

The dev site runs at https://aic-site.localhost. The production preview runs at https://preview.aic-site.localhost. Both use the shared Portless proxy. Run `PORTLESS=0 vp run dev` to bypass it.

`vp run check` checks formatting, runs the linter, and type-checks with `tsrs`. Use the package scripts for dev and preview so Portless runs too.

## Editing the site

Pages live in `src/routes`. The routes are `/`, `/about/`, and `/events/`. TanStack generates `src/routeTree.gen.ts`; commit that file, but don't edit it by hand.

Edit events in `src/content/events.json` or through [Pages CMS](https://app.pagescms.org/) by selecting `AI-Club-OSU/aic-site`. Its form is configured in `.pages.yml`. Images go in `public/assets` and use `/assets/` URLs. Edit Home and About copy in their route components.

CMS saves create GitHub commits. Changes appear on the site after Cloudflare deploys them. Past events sort newest first, upcoming events sort soonest first, and the home page shows the two latest past events.

## Build and deployment

`vp build` generates HTML for each page in `dist/client`, including titles and event content. React adds client navigation, menus, and dialogs after the page loads. Events are bundled into the build.

Generated HTML uses the build date in Oregon time. After hydration, events use the visitor's local date and update at midnight or when the window regains focus. Without JavaScript, the page keeps the build-time snapshot.

Deploy `dist/client` as static files. The `dist/server` directory is only used during prerendering. Cloudflare serves the generated pages and uses `404.html` for unknown paths.

For the Cloudflare build, use Node.js 26.12.1, `pnpm install --frozen-lockfile`, and `pnpm exec vp build`. Set the output directory to `dist/client`. These commands use the project's local Vite Plus installation.
