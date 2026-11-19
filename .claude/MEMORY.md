# Roofpro — Project Memory

Project decisions, historical context, and pending work. Conventions live in
`.claude/rules/`; workflows in `.claude/skills/`.

## Current Project State

- The visual e2e suite covers the **dark theme only**: `src/app/layout.tsx` sets
  `defaultTheme: "dark"` with `enableSystem: false`, so Playwright's `colorScheme: "light"`
  reaches the form controls but never the app. Light-theme changes need a browser pass.
- Footer privacy and terms links are still placeholders until those pages exist.
- `ServiceAreas` ships both as the `/areas` page and as a section on service detail pages.
- The contact `EmailForm` posts to `src/app/api/contact/route.ts` (Node.js runtime), which
  sends via Amazon SES and is bot-hardened (honeypot, time-trap, origin check, in-memory
  rate limit). It is a dev no-op until `AWS_REGION`/`SES_FROM`/`CONTACT_TO` are set and an
  SES identity is verified; the rate limit should move to Upstash/Vercel KV for production.

## Placeholder client data (needs real values before launch)

- Social profile hrefs (`facebook`, `x`, `instagram`, `youtube`), the `builder` credit
  href, and the WhatsApp number (`whatsappHref`) are all `#`/sample placeholders.
- Company facts in `src/data/site.ts` (name, phone, email, address, figures) are template
  sample values. See the README "Customizing for the Client" section for where to edit.

## Pending work

- 58 of the 71 shop products still show other products' photos in their gallery. Wire a
  folder's own `-2` to `-5` as soon as it holds five shots, as metal and four shingles
  already do.
- `next.config.ts` kept redirects for seven renamed paths (`/gallery` and six shop slugs).
  They were dropped because the site has never been published: no domain, sitemap, robots
  or deployment, no internal link pointed at any old path, and a stale redirect shadows a
  future route of the same name, since redirects are matched before the filesystem. **Once
  the site is live, every slug or route rename needs its own 308 in `next.config.ts`**, one
  entry per locale (`/x` and `/es/x`), because the App Router does not localize redirects.
- Known accessibility gaps live in the `accessibility-review` skill's "Known gaps to check"
  section (the source of truth) — MobileMenu dialog semantics, focus-visible rings,
  ProjectViewer focus trap/restore, nav `aria-current`, skip-to-content link. Don't restate
  the detail here; update the skill.

## Important Decisions

- **Edges are a six-token system**, picked by what sits on each side of the line, never by
  opacity. `--line` is the surface separator (white 9% dark, sky 30% light — a tint, so a
  card edge reads as an edge). `--line-neutral` is for a bare panel with no fill behind it
  (about stats row, shop spec strip), where that tint would read as a highlight. The three
  static ones never switch theme and live on imagery or a dark fill: `--color-line-glass`
  (10%, wide translucent panels), `--color-line-chip` (20%, chips and raised pieces),
  `--color-line-control` (30%, interactive controls).
- **Radius is six roles and no raw values.** `card`/`media` 20px (off-scale), `badge`/
  `panel`/`control` 16px, `pill` 12px. `src/` holds no bare `rounded-xl`/`lg`/`md`; the last
  one (the mobile menu trigger) was folded into `control` on 2026-11-19. Pick the role by
  what the thing _is_, not by the value that happens to match: a short label pill reads far
  rounder than a card at the same radius, so `pill` exists for pieces under ~40px tall.
- **A border on a `.theme-dark` subtree belongs outside the pin.** `.theme-dark` redefines
  `--line`, so a bordered element that pins it gets the dark line in _both_ themes. Put the
  border on the wrapper and pin `theme-dark` on the content (see `Contact.tsx`).
- An opaque `background-color` hides a translucent border: `background-clip` defaults to
  `border-box`, so the element's own fill composites under its border instead of the
  backdrop. This is why the `Contact` panel's border was invisible until `bg-contrast` went.
- `PageHeader` is the shared hero band used across routes.
- Detail routes use fixed slugs from `src/data/` with `generateStaticParams` and
  `dynamicParams = false`.

## Resolved Historical Notes

- The previous Pitch i18n exception is obsolete. Pitch chip values were moved to
  `src/data`; only genuinely translatable content remains in i18n.
