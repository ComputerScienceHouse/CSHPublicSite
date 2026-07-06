# CSH — Hugo theme

A modern, accessible theme for Computer Science House (csh.rit.edu), built to fix the
UI/UX shortcomings of the previous Jekyll site.

## What it does differently

| Old pattern | This theme |
|---|---|
| Auto-rotating hero carousel + floating "scroll down" button | Static hero with a clear H1 value proposition and two CTAs |
| Content hidden behind hover (project tiles, e-board "joke" photos) | All titles/descriptions always visible; hover is decoration only |
| Hover-only dropdowns with dead `#` top-level links | Real section links + click/keyboard/touch-accessible dropdowns |
| "Donate" styled like a plain nav link | "Donate" is a filled brand button |
| Tiny sub-1em text, weak hierarchy | Fluid type scale, ≥1rem body, strong heading contrast |
| Muddy blue + blue→pink gradient, checkerboard logo tiles | Refined **#B0197E → #E11C52** brand palette, uniform logo grid |
| `position:absolute` footer + JS padding hack | Normal-flow flexbox sticky footer |
| jQuery + Bootstrap + slick carousel | Zero runtime dependencies (small vanilla JS) |
| — | Light **and** dark themes (system-aware + manual toggle), reduced-motion + focus-visible support |

## Configuration (`hugo.toml`)

- `params.assetsURL` — base URL for images (currently `https://assets.csh.rit.edu/pubsite`).
  All image paths in content/data are relative to this.
- `params.tagline`, `params.email`, `params.social.*`, `params.footerLinks` — footer + meta.
- `[menus.main]` — primary nav. Nested entries (via `parent`) become dropdowns. An entry with
  `params.button = true` renders as the Donate CTA.

## Where content lives

- **Pages / prose:** `content/` (Markdown, wording verbatim from the old site).
- **Structured/repeated content:** `data/*.yaml` (see the field reference below).

### Image paths — one rule

Every image path in `data/` and content front-matter is **relative to
`params.assetsURL` and includes the file extension** (e.g. `/eboard/chair.jpg`,
`/projects/drink.webp`). Templates never guess or append an extension — what you
type is what gets requested. The `img.html` partial is the single place that
turns a path into an `<img>`, so that's where to change image handling globally.

### Data file reference

Each file maps to a layout of the same name. Fields the templates actually read:

| File | Shape |
|---|---|
| `homepage.yaml` | `hero{title, subtitle, image, imageAlt, ctas[{text,url,style}]}`, `features[{title,url,image}]`, `about{image,imageAlt,body,cta{text,url}}`, `workingOn{heading, items[{title,image,alt,description}]}`, `statsHeading`, `sponsorsHeading` |
| `eboard.yaml` | `intro`, `members[{role, email, photo, silly?, people[{name, linkedin?}], description}]`. `silly` is an optional easter-egg portrait shown on hover/focus — omit it to disable. `description` supports Markdown. |
| `sponsors.yaml`, `alumni.yaml` | `items[{name, url, logo}]` — rendered by the shared `logo-grid.html` partial |
| `projects.yaml`, `traditions.yaml` | `intro`, `items[{title, image, alt, description, url?}]` — rendered by the shared `media-list.html` partial; an item with a `url` links its title |
| `faq.yaml` | `items[{q, a}]` (`a` supports Markdown), optional `footer` |
| `tour.yaml` | `rooms[{id, title, description, photos[]}]` |
| `stats.yaml` | `items[{value, label, description}]` (`value` allows inline HTML) |

## Layout selection

Interior pages pick a template via front-matter `layout:` (e.g. `layout: eboard`, `faq`,
`sponsors`, `alumni`, `tour`, `projects`, `traditions`, `contact`). Section landing pages
(`about/`, `membership/`) render their Markdown body plus auto-generated "Explore" cards for
child pages. Blog uses `blog/list.html` + `blog/single.html`.

## Shortcodes

`asset-img`, `button`, `lead`, `columns` / `column` (see `layouts/shortcodes/`).

## Build

```sh
hugo server      # local dev at http://localhost:1313
hugo --gc        # production build to public/
```

Requires Hugo ≥ 0.146 (uses `resources` asset pipeline; extended not required — CSS is plain).
