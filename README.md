# Armory Atlas

A multi-page static reference website about firearms and ammunition — pure HTML/CSS/JS, no build tools, no dependencies beyond Google Fonts.

## Pages

| File | Content |
|---|---|
| `index.html` | Home — hero, stats, category cards, featured profiles |
| `pistols.html` | Handguns — Glock 17, M1911, Beretta 92FS, SIG P320, S&W Model 10 |
| `rifles.html` | Long arms — AK-47, AR-15/M16, FN FAL, Lee-Enfield, Mauser 98, Winchester 1894 |
| `shotguns.html` | Smoothbores — Remington 870, Mossberg 500, Winchester 1897, Auto-5, Benelli M4 |
| `ammunition.html` | Searchable cartridge table + glossary |
| `safety.html` | The four universal safety rules, storage, legal context |

Shared assets live in `assets/css/style.css` and `assets/js/main.js`.

## Run locally

Just open `index.html` in any browser. All links are relative, so it works straight from the folder.

## Host it

- **GitHub Pages** — push the folder to a repo, enable Pages in settings.
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder, no build command needed.
- **Any web server** — `npx serve .` or upload the files to shared hosting.

## Customising

- **Content** — all pages carry placeholder encyclopedic content. Edit the cards/tables directly in the HTML; each page is self-contained markup.
- **Colors** — the whole palette is CSS custom properties at the top of `assets/css/style.css` (dark and light themes).
- **Fonts** — swap the Google Fonts `<link>` and the `--font-*` variables.

## Notes

The site supports dark and light themes automatically (follows the visitor's OS preference), has a mobile menu, and the ammunition table filters as you type. `main.js` has no dependencies.
