# Security notes

taste-up.ch is a static landing page on GitHub Pages. No backend, no
database, no forms, no user data. That rules out most of what usually
goes wrong with a website — there is no SQL to inject into, no login to
break, no session to steal, no uploads to abuse.

## Why injection isn't a live risk here

Injection needs a way in. This site has none:

- **No forms, no inputs** — nothing on any page accepts typed input.
- **Nothing reads the URL.** No query parameters, no hash, no
  `document.referrer`, no `postMessage`. This is the usual source of DOM
  XSS on static sites, and it simply isn't used.
- **No network calls, no storage.** No `fetch`, no `XMLHttpRequest`, no
  `localStorage`, no cookies. Nothing external can feed the page.
- **Text is written with `textContent`**, not `innerHTML`, so content
  from `data.js` is inserted as text and never parsed as HTML.

There is exactly one `innerHTML` in `assets/js/site.js`, in `icon()`. It
reads from a hardcoded two-entry map of SVG path strings and is only ever
called with a literal name. No outside value reaches it.

The practical consequence: to change what this site shows, an attacker
would have to change the repository. Which makes repo access the thing
actually worth protecting — see below.

## What's in place

- **Content-Security-Policy** (meta tag on all three pages). Allows the
  site's own files plus Google Fonts, and denies everything else —
  scripts, frames, form submissions and network calls included. If
  someone did manage to inject a `<script>` or an external beacon, the
  browser refuses to run it.
- **`referrer` policy** `strict-origin-when-cross-origin`, so outbound
  clicks don't leak full URLs.
- **`rel="noopener"` on every `target="_blank"` link**, in both the HTML
  and the links `site.js` builds. Without it a linked page can reach back
  through `window.opener` and redirect the tab it was opened from.
- **No inline styles or inline scripts**, which is what lets the CSP stay
  strict rather than needing `'unsafe-inline'`.

## What can't be set on GitHub Pages

GitHub Pages serves static files and gives no way to set HTTP response
headers. Some protections are header-only — browsers ignore them in a
meta tag — so they are genuinely unavailable here:

- **`frame-ancestors` / `X-Frame-Options`** (clickjacking: someone framing
  taste-up.ch inside their own page). Low impact for a page with no
  buttons that do anything sensitive — the worst case is a misleading
  embed, not a compromised visitor.
- **`X-Content-Type-Options: nosniff`**.

Both would become available by putting a CDN that supports custom headers
(Cloudflare's free tier, for example) in front of the domain. Worth doing
only if the site ever gains a form, a login, or anything transactional.

## The part that actually matters

For a static site, the realistic compromise is **someone getting into the
GitHub account** and editing the repo — that gives them the whole site,
and no amount of CSP helps. So:

- Two-factor authentication on the GitHub account.
- Keep **Settings → Pages → Enforce HTTPS** switched on.
- Be deliberate about who has write access to the repository.

## Housekeeping

The repo still contains an unused Create React App scaffold (`package.json`,
`package-lock.json`, `src/`, `public/`). Nothing is built or served from
it — the live site is the hand-written HTML/CSS/JS at the root. It's
harmless, but it can trigger dependency alerts for packages the site never
loads. Deleting it would remove that noise.
