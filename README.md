# Tony Mini App Studio: Landing Page

Landing page for **Tony Mini App**, a studio that builds tiny productivity apps.
Built with [Astro](https://astro.build) + Tailwind CSS v4, fully static, deployed on Vercel.

- 🌐 i18n: English (default, `/`), Japanese (`/ja/`), Vietnamese (`/vi/`)
- 🎨 Design system generated with the *ui-ux-pro-max* skill (indigo + emerald, Plus Jakarta Sans)
- 🌗 Light / dark mode via `prefers-color-scheme`, respects `prefers-reduced-motion`

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Add a new mini app

Everything app-related is data-driven from **`src/data/apps.ts`**: the hero dock, the app grid,
the "apps shipped" stat and the footer links. The grid uses `auto-fill`, so it reflows for any count.

1. Add a square icon (≥ 256×256 PNG/WebP) to `src/assets/apps/`.
2. Import it in `src/data/apps.ts` and append an entry:

```ts
{
  id: 'my-app',
  name: { en: 'My App', ja: 'My App', vi: 'My App' },
  url: 'https://my-app.vercel.app/',
  icon: myAppIcon,
  status: 'live',           // 'live' | 'beta' | 'soon'
  platforms: ['Web'],
  accent: '#7c3aed',        // card glow / icon shadow
  tagline: { en: '…', ja: '…', vi: '…' },
  description: { en: '…', ja: '…', vi: '…' },
  features: { en: ['…', '…', '…'], ja: [...], vi: [...] },
},
```

TypeScript fails the build if any locale is missing.

## Edit copy / add a language

- UI strings: `src/i18n/ui.ts` (the `en` object defines the keys; other locales must match).
- New language: add it to `locales` in `src/i18n/ui.ts` and `astro.config.mjs`, then fill every
  `Localized` field. Pages are generated automatically by `src/pages/[lang]/index.astro`.
- Contact / GitHub links: `src/data/site.ts`.

## Deploy

The repo is connected to Vercel through its Git integration: every push to `main` deploys to
production, and every other branch or PR gets a preview URL. No `vercel.json` is needed, since Vercel
auto-detects Astro.
