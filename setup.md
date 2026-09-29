# Setup Guide — Animated GitHub Profile README (`1abhishek0948`)

This repo is **not a web app**. It is Abhishek Thakur's **GitHub profile README**:

* `README.md` only embeds pre-generated animated images.
* All animation is built with **React + CSS + SMIL → static `.svg` files**.
* You edit JSX source, run one build command, commit the SVGs, push to GitHub.

Anyone — even with no React experience — can follow this guide.

---

## 1. How it works (big picture)

```
readme-animation/src/*.jsx
        |
        v
readme-animation/scripts/export.jsx  (React SSR + sharp)
        |
        v
assets/readme/*.svg  (20 files, committed to git)
        |
        v
README.md  (<img src="assets/readme/...">)
        |
        v
https://github.com/1abhishek0948  (profile page)
```

* No dev server, no backend, no database.
* `README.md` = 30 lines of `<div><img><a>` tags only.
* Animations are CSS keyframes + SVG `<animate>` / `<animateTransform>` / `<animateMotion>` inside each SVG, so they play inside GitHub's `<img>` renderer.
* GitHub `<img>` SVGs **cannot load external files**, so everything (hero photo, tech icons) is **inlined/base64-embedded** at build time.

---

## 2. Repository layout

```
1abhishek0948/
  README.md                  # profile page, embeds assets/readme/*.svg
  setup.md                   # this file
  image copy.png             # hero photo source (note the space in filename)
  assets/
    readme/                  # BUILD OUTPUT — 20 SVGs, must be committed
      hero.svg
      title.svg
      intro.svg
      badges.svg
      btn-portfolio.svg
      btn-profile-views.svg
      btn-developer.svg
      btn-github.svg
      btn-neptwone.svg
      btn-aiwebdoctor.svg
      btn-lafzloom.svg
      heading-projects.svg
      features.svg
      heading-stack.svg
      tech-stack.svg
      heading-architecture.svg
      architecture.svg
      heading-start.svg
      quickstart.svg
      footer.svg
  readme-animation/          # BUILD SOURCE — edit here, then rebuild
    package.json
    package-lock.json
    scripts/
      export.jsx             # build entry, renders all SVGs
    src/
      lib.jsx                # theme, fonts, shared Backdrop/Particles/Chars/Svg
      Hero.jsx               # full-bleed hero photo panel
      Title.jsx              # "Abhishek Thakur" + tagline
      Intro.jsx              # bio lines
      Badges.jsx             # skill pills row
      Buttons.jsx            # reusable CTA button
      Heading.jsx            # section headings
      Features.jsx           # 6 project cards
      TechStack.jsx          # 11 tech hexagons with real icons
      Architecture.jsx       # User → Frontend → API → Backend → Database diagram
      Quickstart.jsx         # terminal-style get-in-touch box
      Footer.jsx             # waves + name footer
    .build/
      export.cjs             # esbuild bundle output (gitignored, generated)
    node_modules/            # gitignored
    .gitignore               # node_modules, .build
```

---

## 3. Prerequisites

You need:

| Tool | Version | Check | Install |
|------|---------|-------|---------|
| Git | any recent | `git --version` | https://git-scm.com |
| Node.js | **>= 18.17** (required by `sharp@0.33.5`) | `node -v` | https://nodejs.org — use LTS 20.x |
| npm | comes with Node | `npm -v` | — |
| Browser | any | — | to preview SVGs |

No Python, Docker, or database needed. Works on macOS (`zsh`), Linux, Windows (use PowerShell/Git Bash — quote `"image copy.png"` because of the space).

Repo dependencies (`readme-animation/package.json`):

* `react@^18.3.1`, `react-dom@^18.3.1` — server-side rendering via `renderToStaticMarkup`
* `tech-stack-icons@^3.7.1` — real brand icons for TechStack
* `esbuild@^0.24.0` (dev) — bundles `export.jsx` to Node CJS
* `sharp@^0.33.5` (dev) — resizes/compresses hero image, native binary (needs Node 18.17+)

---

## 4. Quickstart (copy-paste)

```bash
# 1. Clone (repo must keep the name 1abhishek0948 to show on profile)
git clone https://github.com/1abhishek0948/1abhishek0948.git
cd 1abhishek0948/readme-animation

# 2. Install
npm install

# 3. Build — generates ../assets/readme/*.svg
npm run build

# 4. Preview (macOS example)
open ../assets/readme/hero.svg
open ../README.md
```

If you see 20 lines like `hero.svg  XXX.X KB`, the build worked.

Commit + push to update your live profile:

```bash
cd ..
git add README.md assets/readme setup.md "image copy.png" readme-animation/package.json readme-animation/scripts/export.jsx readme-animation/src
git commit -m "Update profile README assets"
git push origin main
```

> Do NOT `git add .DS_Store`, `node_modules/`, or `readme-animation/.build/` — they are local-only.

---

## 5. What `npm run build` actually does

From `package.json`:

```
esbuild scripts/export.jsx --bundle --platform=node --format=cjs --jsx=automatic --external:sharp --outfile=.build/export.cjs && node .build/export.cjs
```

Step by step:

1. **Bundle**: `esbuild` compiles JSX + `react` imports into `.build/export.cjs`. `sharp` stays external (native).
2. **Run**: `node .build/export.cjs` executes `scripts/export.jsx`:
   * `root = 1abhishek0948/`, `out = assets/readme/` (auto-created with `mkdir -p`).
   * `heroDataUri()`: reads `$HERO_IMAGE` or `image copy.png`, `sharp().resize({width:1600, withoutEnlargement:true}).webp|jpeg({quality:82})`, returns `data:image/...;base64,...` + aspect `ratio`.
   * If image missing: prints warning and builds a placeholder gradient SVG instead (build still succeeds).
   * `renderToStaticMarkup(<Hero/>...)` for all 19 components, prepends `<?xml ...?>`, strips newlines, writes to `assets/readme/`.

---

## 6. Hero image configuration

| Env var | Default | Values | Meaning |
|---------|---------|--------|---------|
| `HERO_IMAGE` | `<repo>/image copy.png` | any path | Source photo for `hero.svg` |
| `HERO_FORMAT` | auto | `webp` \| `jpeg` | Auto = `webp` if image has alpha/transparency, else `jpeg` |

Examples:

```bash
# default (uses "image copy.png")
npm run build

# custom image
HERO_IMAGE=~/Downloads/my-photo.png npm run build

# force jpeg (smaller, no transparency)
HERO_FORMAT=jpeg npm run build

# force webp (keeps transparency)
HERO_FORMAT=webp npm run build
```

Notes:

* Image is resized to max width `1600px`, never enlarged, quality `82`.
* `Hero.jsx` sets `H = min(900, 1200 * ratio)` so panel height follows your photo's aspect — no crop/padding.
* Filename has a space — always quote it: `"image copy.png"`.

---

## 7. Output catalog — 20 SVGs

| File | Source | Size | What it is |
|------|--------|------|------------|
| `hero.svg` | `Hero.jsx` | 1200×~675 (varies) | Full-bleed photo, blur→sharp reveal, zoom, scan light, border beam |
| `title.svg` | `Title.jsx` | 1200×250 | `Abhishek Thakur` + `Code. Build. Refine. Repeat.` typewriter |
| `intro.svg` | `Intro.jsx` | 1200×270 | Bio: Modern Full Stack Developer... Parul University... Nepal |
| `badges.svg` | `Badges.jsx` | 1200×120 | 9 pills: Python Django Flask React JS PostgreSQL Docker REST SEO |
| `btn-portfolio.svg` | `Buttons.jsx` | 260×100 | Gold primary CTA `Portfolio` |
| `btn-profile-views.svg` | `Buttons.jsx` | 320×100 | Outline CTA `5.1k Profile Views` → github profile |
| `btn-developer.svg` | `Buttons.jsx` | 210×100 | Outline CTA `LinkedIn` |
| `btn-github.svg` | `Buttons.jsx` | 220×100 | Outline CTA `Instagram` |
| `btn-neptwone.svg` | `Buttons.jsx` | 270×100 | Generated but **not embedded** in current README |
| `btn-aiwebdoctor.svg` | `Buttons.jsx` | 270×100 | Generated but **not embedded** in current README |
| `btn-lafzloom.svg` | `Buttons.jsx` | 250×100 | Generated but **not embedded** in current README |
| `heading-projects.svg` | `Heading.jsx` | 1200×100 | `What I build` |
| `features.svg` | `Features.jsx` | 1200×510 | 6 cards: LAHAN Hub, NepTown, Neptwone, AI Web Doctor, Lafzloom, SEO |
| `heading-stack.svg` | `Heading.jsx` | 1200×100 | `Tech stack` |
| `tech-stack.svg` | `TechStack.jsx` | 1200×310 | 11 hexagons with real icons, Frontend/Backend/Data groups |
| `heading-architecture.svg` | `Heading.jsx` | 1200×100 | `How my projects fit together` |
| `architecture.svg` | `Architecture.jsx` | 1200×430 | User→Frontend→API→Backend→Database flow with return path |
| `heading-start.svg` | `Heading.jsx` | 1200×100 | `Get in touch` |
| `quickstart.svg` | `Quickstart.jsx` | 1200×310 | Terminal box with 3 `open <url>` lines |
| `footer.svg` | `Footer.jsx` | 1200×270 | Animated waves + name + `Full Stack Developer from Nepal` |

`README.md` embed order: hero → title → 4 buttons → intro → badges → heading-projects → features → heading-stack → tech-stack → heading-architecture → architecture → heading-start → quickstart → footer.

---

## 8. How to customize (edit source, rebuild)

> Always edit `readme-animation/src/*.jsx`, then run `npm run build`. Never hand-edit `assets/readme/*.svg` — they are overwritten.

**Theme / timing** — `src/lib.jsx:1,4`:

```js
export const C = { bg:'#090708', panel:'#171012', line:'#2A1C20', text:'#F8F3EE', mute:'#A99C97', violet:'#C04A62', aqua:'#C6A46A', rose:'#7B1E2B', goldLight:'#E6CB94' };
export const CYCLE = 14; // seconds, entrances replay so late scrollers still see them
```

Change colors or `CYCLE`, rebuild.

**Name / tagline** — `src/Title.jsx:5`:

```js
const role = 'Code. Build. Refine. Repeat.';
```

**Bio** — `src/Intro.jsx:20-25`, **pills** — `src/Badges.jsx:3`, **projects** — `src/Features.jsx:3-10` (`CARDS` array: `t`, `lines`, `tag`).

**Tech icons** — `src/TechStack.jsx:10-14`:

```js
const T = [['html5','HTML'], ['css3','CSS'], ['js','JavaScript'], ...];
const VARIANT = 'dark'; // 'dark' | 'light' | 'grayscale'
```

Names must exist in https://www.tech-stack-icons.com or build throws `tech-stack-icons has no icon called "..."`.

**Buttons** — `src/Buttons.jsx` + sizes in `scripts/export.jsx:49-55`:

```js
<Button label="Portfolio" w={200} i={0} />                    // primary=true = filled
<Button label="5.1k Profile Views" w={260} primary={false} i={1} />  // outline, static count
<Button label="LinkedIn" w={150} primary={false} i={2} />     // outline
```

**Links** — `README.md:5-8` (button URLs) + `src/Quickstart.jsx:3` (`LINES` array). Keep them in sync.

**Architecture nodes** — `src/Architecture.jsx:3`.

After any edit:

```bash
npm run build
```

---

## 9. Preview locally

* Double-click any `assets/readme/*.svg` or `open assets/readme/hero.svg` — animation plays in browser.
* `README.md` preview in VS Code (`Cmd+Shift+V`) shows layout but GitHub renders SVGs slightly differently — final check is always on github.com.
* GitHub caches README images for a few minutes — if push doesn't show instantly, hard-refresh (`Cmd+Shift+R`) or open the SVG raw URL with `?v=2`.

---

## 10. Publish to GitHub profile

This only works because the repo name **equals the username**: `1abhishek0948/1abhishek0948`. GitHub shows that repo's `README.md` on the profile.

```bash
cd 1abhishek0948
git status                    # should show only intended files
git add setup.md README.md assets/readme/
git commit -m "Add detailed setup.md for animated profile README"
git push origin main
git log --oneline -3          # confirm
```

Check live at `https://github.com/1abhishek0948`.

---

## 11. Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| `sharp` install fails / `ERR_DLOPEN` | Node too old or missing native binary | `node -v` must be >=18.17, then `rm -rf node_modules package-lock.json && npm install` (do NOT commit lock deletion unless intended) |
| `image copy.png not found. Building a PLACEHOLDER hero` | Wrong cwd or renamed photo | Run from `readme-animation/`, keep `"image copy.png"` in repo root, or set `HERO_IMAGE=` |
| `tech-stack-icons has no icon called "x"` | Wrong icon name | Check https://www.tech-stack-icons.com, fix `src/TechStack.jsx:T` |
| SVGs unchanged after edit | Forgot rebuild or edited `assets/` directly | Edit `src/`, run `npm run build`, `git add assets/readme/` |
| Animations don't play on GitHub | Expected for `prefers-reduced-motion` users, or cache | Test in Chrome without reduced-motion, hard-refresh, wait 2–5 min |
| Buttons link wrong place | `README.md` href vs `Quickstart.jsx:LINES` mismatch | Update both, rebuild, push |
| `git push` rejected / auth fails | No GitHub auth | `gh auth login` or use SSH remote, then `git push origin main` |
| `.DS_Store` shows in `git status` | macOS Finder file | Ignore it, never `git add .DS_Store` |

---

## 12. Scripts reference

| Command | Where | What |
|---------|-------|------|
| `npm install` | `readme-animation/` | Installs react, tech-stack-icons, esbuild, sharp |
| `npm run build` | `readme-animation/` | Bundles + renders all 19 SVGs to `../assets/readme/` |
| `HERO_IMAGE=... npm run build` | `readme-animation/` | Use custom hero photo |
| `HERO_FORMAT=webp\|jpeg npm run build` | `readme-animation/` | Force output format |

That's it — edit JSX, `npm run build`, commit SVGs, push. If you can do those 4 steps, you can maintain this profile.
