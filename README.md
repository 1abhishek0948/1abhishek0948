<!-- <div align="center">

# Hi 👋 I'm Abhishek Thakur

<div align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Poppins&size=24&pause=1000&center=true&vCenter=true&width=650&lines=Full+Stack+Developer;Python+Developer;Machine+Learning+Engineer;Building+Ideas+Into+Reality"/>
</div>

<img src="https://komarev.com/ghpvc/?username=1abhishek0948&label=Profile+Views&style=for-the-badge&base=5000"/>

</div>

---

### 💫 About Me

💻 Passionate about building scalable apps  
🚀 Exploring AI & Machine Learning  
🌱 Learning Advanced Python & System Design  
⚡ Building with Django, Flask & Modern Web Tech  

---

### 🛠 Tech Stack

<p align="center">
<img src="https://skillicons.dev/icons?i=python,django,flask,js,react,postgres,mongodb,git,github,vscode"/>
</p>

---


<div align="center">

🌐 <a href="https://www.abhishek-thakur.com.np/">Portfolio</a>

⭐ Code • Build • Learn • Repeat 

</div> -->











<p align="center">
  <img src="./image%20readme.png" alt="Abhishek Thakur — banner" width="100%" />
</p>

<h1 align="center">Hi, I'm Abhishek Thakur 👋</h1>

<p align="center">
  <a href="https://github.com/1abhishek0948" target="_blank"><img src="https://readme-typing-svg.demolab.com?font=Poppins&size=22&pause=1000&center=true&vCenter=true&width=660&lines=Full+Stack+Developer;Python+Developer;Machine+Learning+Explorer;Building+Ideas+into+Reality" alt="Typing animation" /></a>
</p>

<p align="center">
  <a href="https://github.com/1abhishek0948"><img src="https://img.shields.io/github/followers/1abhishek0948?style=for-the-badge&logo=github&logoColor=white&labelColor=0f1117&color=FF3B3B" alt="GitHub followers" /></a>
  <img src="https://komarev.com/ghpvc/?username=1abhishek0948&label=Profile+Views&style=for-the-badge&color=FFD93D&labelColor=0f1117" alt="Profile views" />
</p>

<p align="center">
  <a href="https://github.com/1abhishek0948"><img src="https://img.shields.io/badge/GitHub-1abhishek0948-0f1117?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
  <a href="https://abhishek-thakur.com.np/"><img src="https://img.shields.io/badge/Portfolio-abhishek--thakur.com.np-FF3B3B?style=flat-square&logo=googlechrome&logoColor=white" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/abhishek0948/"><img src="https://img.shields.io/badge/LinkedIn-abhishek0948-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://www.instagram.com/1abhishek0948/"><img src="https://img.shields.io/badge/Instagram-1abhishek0948-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram" /></a>
</p>

<p align="center">
  Computer Science & Engineering graduate · full-stack web development · Python · machine learning · Nepal
</p>

<p align="center">
  <a href="#-about-this-repository">Repo</a>
  &nbsp;•&nbsp;
  <a href="#-live-motion-demos">Live Demos</a>
  &nbsp;•&nbsp;
  <a href="#-github-analytics">Analytics</a>
  &nbsp;•&nbsp;
  <a href="#-tech-stack">Tech Stack</a>
  &nbsp;•&nbsp;
  <a href="#-installation">Installation</a>
  &nbsp;•&nbsp;
  <a href="#-api-reference">API</a>
  &nbsp;•&nbsp;
  <a href="#-more-from-1abhishek0948">More Repos</a>
</p>

---

## 📌 About This Repository

This repo — **Others** — is my hands-on dev playground: small builds, UI experiments, a Django + Gemini backend, and AI API trials. Each folder/file is self-contained. The most complete pieces:

- **Neon Snake** (`index.html`) — polished dependency-free canvas snake game.
- **Weather Widget** (`weather-widget.html`) — OpenWeatherMap card with hourly forecast.
- **Day/Night Toggle** (`indexx.html`) — Lottie-animated theme switcher + avatar header.
- **Django + Gemini backend** (`Student management/`) — Django 5.2 API with `POST /api/gemini/generate/` and `GET /api/gemini/health/`, backed by PostgreSQL.
- **AI CLI experiments** (`gemeni_api_test.py`, `onmirout/`, `agentrouter.py`, `oraca.py`) — Gemini, OpenRouter, AgentRouter, OrcaRouter trials.
- **React learning** (`React learning/myapp/`) — Create React App workspace (React 19).
- **Docs & assets** — study decks (Lahan Community Portal, e-commerce with AI, Django PostgreSQL CRUD notes, STQA) plus flow/thumbnail images.

---

## 🎬 Live Motion Demos

> One honest note: GitHub READMEs strip JavaScript, so GSAP/React code itself can't run inside this page. The motion here is GitHub-native (animated SVGs, animated stat cards, live counters below) — and the **real animation stage is the demos**: open them and everything moves.

| Demo | Motion you'll see | Run it |
|---|---|---|
| 🐍 **Neon Snake** | 60fps canvas loop, particle bursts, screen shake, pulsing food glow, smooth interpolated slither, death flash | Open `index.html` |
| 🌦️ **Weather Widget** | Spinning glow sun, hover-lift hourly cards, loading spinner, animated condition icons | Open `weather-widget.html` |
| 🌗 **Day/Night Toggle** | Lottie sun↔moon morph (plays forward / reverses), smooth theme crossfade | Open `indexx.html` |

```bash
# no build step — just open, or serve to avoid file:// quirks
open index.html
python3 -m http.server 8000
# → http://localhost:8000/index.html
```

<details>
<summary><strong>🎥 What each demo animates (React/GSAP-style breakdown)</strong></summary>

- **Neon Snake** — `requestAnimationFrame` game loop (like a React `useEffect` + rAF pattern): DPR-aware canvas scaling, eased body-follow interpolation, radial-gradient glow sprites, decaying particle physics, time-based screen shake and death flash. State machine: `READY → PLAYING ⇄ PAUSED → DEAD`.
- **Weather Widget** — CSS keyframe glow pulse on the sun icon, hover transitions on forecast pills, skeleton → content swap on fetch resolve (the same mount/update/unmount rhythm as React conditional rendering), error-state fallback UI.
- **Day/Night Toggle** — Lottie timeline scrubbing (`seek` for initial state, directional `play`/`reverse` on click — the same idea as GSAP timeline control), `body.dark-mode` class flip driving 0.3s theme transitions, glassmorphism header.

</details>

---

## 📊 GitHub Analytics

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=1abhishek0948&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117" alt="GitHub stats" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=1abhishek0948&layout=compact&theme=radical&hide_border=true&bg_color=0d1117" alt="Top languages" height="165" />
</p>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=1abhishek0948&hide_border=true&bg_color=0d1117&color=FFD93D&line=FF3B3B&point=ffffff" alt="Contribution activity graph" width="100%" />
</p>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🐍 Neon Snake Game
Canvas rendering with DPR-aware crispness, particle bursts, screen shake, glow effects, progressive speed-up, persistent best score (`localStorage`), keyboard (Arrows / WASD / Space) + touch buttons + swipe controls, pause overlay.

</td>
<td width="50%">

### 🌦️ Weather Widget
Live current conditions + 7-slot hourly strip + humidity / wind / visibility stats. Condition-code → icon mapping, loading and error states, update timestamp. Defaults to `Lahan` in metric units (editable in-file).

</td>
</tr>
<tr>
<td width="50%">

### 🌗 Animated Theme Toggle
Lottie (`dotlottie-wc`) day/night switch with directional play/reverse, dark-mode class toggle, glassmorphism pinned header, and an Instagram-style gradient-ring avatar component.

</td>
<td width="50%">

### 🧠 Django + Gemini API
Singleton `GeminiService` with retry + backoff, typed `GeminiResponse`, error-code → HTTP-status mapping, request clamping (`temperature` 0–2, `max_output_tokens` 1–8192), structured logging, and production security flags.

</td>
</tr>
<tr>
<td width="50%">

### 💬 AI CLI Chats
Interactive terminal loops for Gemini (`gemini-3.6-flash`), OpenRouter (`nvidia/nemotron-3-ultra-550b-a55b:free`), and AgentRouter (`gpt-5.6-sol`) with `exit`/`quit` handling and API error reporting.

</td>
<td width="50%">

### ⚛️ React Playground
Unmodified Create React App shell (React 19.2.6, `react-scripts` 5.0.1) for learning — `start`, `build`, `test`, `eject` scripts ready to use.

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=python,django,flask,js,react,postgres,mongodb,git,github,vscode" alt="Tech stack icons" />
</p>

### Built With

| Layer | Technology |
|---|---|
| Frontend demos | HTML5, CSS3, vanilla JavaScript (Canvas 2D) |
| Fonts / icons | Fontsource (`Press Start 2P`, `Inter`), Google Fonts (`Nunito`), Font Awesome 6.5.1, Bootstrap 5.3.2 (weather widget only) |
| Animation | Lottie (`@lottiefiles/dotlottie-wc` via unpkg + lottie.host asset), CSS keyframes, canvas rAF loops |
| Backend | Django 5.2.12, Django ORM |
| Database | PostgreSQL (`django.db.backends.postgresql`) |
| AI SDKs / APIs | `google-genai` (Gemini), `requests` + OpenRouter / AgentRouter / OrcaRouter REST, `openai` client (OrcaRouter-compatible base URL) |
| Learning app | React 19.2.6, `react-scripts` 5.0.1, Testing Library |
| Tooling | `opencode.json` provider configs (OrcaRouter, AgentRouter) |
| Docs | PDF / PPT / PPTX / Keynote decks stored alongside code |

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" alt="Python" />
  <img src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white" alt="Django" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white" alt="Gemini" />
</p>

---

## 🧭 Architecture

Each piece runs independently — there is no shared runtime. The only client/server relationship in the repo is the Django backend:

```text
┌──────────────────────────────┐
│  Standalone browser files    │
│  index.html (Snake)          │
│  weather-widget.html         │   ──▶  OpenWeatherMap REST (browser fetch)
│  indexx.html (Lottie toggle) │   ──▶  lottie.host asset + Unsplash avatar
└──────────────────────────────┘

┌──────────────────────────────┐
│  React learning/myapp        │   ──▶  CRA dev server / static build
└──────────────────────────────┘

┌──────────────────────┐
│  API clients         │   ──▶  Gemini / OpenRouter / AgentRouter / OrcaRouter
│  (CLI scripts)       │
└──────────────────────┘

┌─────────────────────┐
│   Django backend    │
│  config/ + students/│
└──────────┬──────────┘
           │  POST /api/gemini/generate/
           │  GET  /api/gemini/health/
           ▼
┌─────────────────────┐
│  GeminiService      │──▶ Google Gemini API (model from env)
│  (singleton+retry)  │
└──────────┬──────────┘
           ▼
┌─────────────────────┐
│     PostgreSQL      │  (Django ORM; default db `school_db`)
└─────────────────────┘
```

---

## 🗂️ Project Structure

<details>
<summary><strong>📁 Project Structure</strong></summary>

```text
Others/
├── image readme.png            # hero banner (avatar art)
├── image copy.png / image.png  # earlier banner assets, kept as-is
├── e commeerce img.png         # e-commerce AI flow diagram (login → order)
├── xshuty yt.png               # thumbnail artwork (asset only)
│
├── index.html                  # Neon Snake game (vanilla JS + Canvas)
├── indexx.html                 # Lottie day/night toggle + avatar header
├── weather-widget.html         # OpenWeatherMap weather card (default: Lahan)
│
├── Student management/         # Django 5.2 + PostgreSQL + Gemini backend
│   ├── manage.py
│   ├── config/
│   │   ├── settings.py         # env-driven settings, logging, prod flags
│   │   ├── urls.py             # admin/ + api/gemini/{generate,health}/
│   │   ├── wsgi.py / asgi.py
│   └── students/
│       ├── gemini_service.py   # singleton service, retries, error mapping
│       ├── views.py            # GeminiGenerateView, GeminiHealthView
│       ├── admin.py / apps.py / models.py / tests.py
│       └── migrations/
│
├── gemeni_api_test.py          # Gemini CLI chat (gemini-3.6-flash)
├── agentrouter.py              # AgentRouter GET /v1/models probe
├── oraca.py                    # OrcaRouter chat sample (needs API key fix)
├── onmirout/
│   ├── apitest.py              # OpenRouter Nemotron CLI chat
│   ├── gpt.py                  # AgentRouter CLI chat (env-keyed)
│   └── opencode.json           # AgentRouter provider config
│
├── opencode.json               # OrcaRouter provider config
│
├── React learning/myapp/       # Create React App (React 19.2.6)
│   ├── package.json            # start / build / test / eject
│   ├── public/ / src/
│
├── STQA/ + STQA.zip            # STQA unit slide decks
├── *.pdf / *.pptx / *.key / *.pages
│   ├── Lahan Community Portal report + presentation
│   ├── e-commerce with AI decks, Django PostgreSQL CRUD notes
│   ├── cityhub.pdf, lahan report/synopsis
└── README.md
```

</details>

---

## 🖼️ Visual Showcase

<table>
<tr>
<td width="50%">
<img src="./e%20commeerce%20img.png" width="100%" alt="E-commerce AI flow diagram" />
<p align="center"><strong>E-commerce AI flow</strong> — login → search → AI recommendation → cart → payment → confirmation</p>
</td>
<td width="50%">
<img src="./xshuty%20yt.png" width="100%" alt="Thumbnail artwork" />
<p align="center"><strong>Thumbnail asset</strong> — stored artwork, not generated by code</p>
</td>
</tr>
</table>

<details>
<summary><strong>🖼️ Earlier banner assets</strong></summary>

<br />
<p align="center">
  <img src="./image%20copy.png" alt="Earlier banner asset" width="80%" />
</p>
<p align="center"><code>image copy.png</code> ≡ <code>image.png</code> — kept in the repo untouched.</p>

</details>

> The interactive pieces (`index.html`, `weather-widget.html`, `indexx.html`) have no checked-in screenshots — open them in a browser to see them move. No screenshot paths are invented here.

---

## 🛠️ Installation

### Prerequisites

- **Python** 3.12+ (Django backend + CLI scripts)
- **PostgreSQL** 14+ (only for `Student management/`)
- **Node.js** 18+ + npm (only for `React learning/myapp/`)
- A modern browser (for the three HTML demos — no build step)
- API keys **only** for the parts you run (see [Environment variables](#-environment-variables))

### 1 — Clone

```bash
git clone https://github.com/1abhishek0948/<repo-name>.git
cd <repo-name>
```

> Replace `<repo-name>` with the repository you publish this in — e.g. `git clone https://github.com/1abhishek0948/Others.git` once it exists. All repos: [github.com/1abhishek0948?tab=repositories](https://github.com/1abhishek0948?tab=repositories).

### 2 — Frontend demos (no install)

```bash
# macOS
open index.html
open weather-widget.html
open indexx.html

# any OS — or serve the folder to avoid file:// quirks
python3 -m http.server 8000
# then visit http://localhost:8000/index.html
```

### 3 — Django + PostgreSQL backend

```bash
cd "Student management"

python3 -m venv .venv
source .venv/bin/activate

pip install django psycopg2-binary google-genai
# google-genai provides `google.genai`; psycopg2-binary provides the Postgres driver

# create the Postgres database matching your env (defaults: db=school_db user=postgres host=localhost:5432)
createdb school_db   # or create it via psql / pgAdmin

python manage.py migrate
python manage.py runserver
# admin → http://127.0.0.1:8000/admin/
# health → http://127.0.0.1:8000/api/gemini/health/
```

> There is no `requirements.txt` in the repo — install the three packages above (versions resolve from PyPI). `students/models.py` is currently empty, so migrations cover Django's built-in apps only.

### 4 — AI CLI scripts

```bash
pip install google-genai requests python-dotenv openai

python gemeni_api_test.py     # needs GEMINI_API_KEY
python onmirout/apitest.py    # needs OPENROUTER_API_KEY
python onmirout/gpt.py        # needs AGENTROUTER_API_KEY (via .env)
python agentrouter.py         # one-shot GET <base>/v1/models probe
```

### 5 — React learning app

```bash
cd "React learning/myapp"
npm install
npm start                     # http://localhost:3000
```

---

## 🔑 Environment Variables

Never commit real keys. Copy values from your provider dashboards into the environment, not into source files. (Several scripts in this repo contain hardcoded placeholder/demo keys — replace them with env vars before sharing.)

| Variable | Required | Purpose | Used by |
|---|---:|---|---|
| `GEMINI_API_KEY` | Yes, for Gemini features | Authenticates Google Gemini calls | `Student management/`, `gemeni_api_test.py` |
| `GEMINI_MODEL` | No (default `gemini-3.6-flash`) | Model name for generation | `Student management/config/settings.py` |
| `GEMINI_TIMEOUT` | No (default `45000` ms) | Request timeout budget | `students/gemini_service.py` |
| `GEMINI_MAX_RETRIES` | No (default `1`) | Extra retry attempts on retryable errors | `students/gemini_service.py` |
| `OPENROUTER_API_KEY` | Yes, for OpenRouter script | Authenticates `openrouter.ai` chat calls | `onmirout/apitest.py` |
| `AGENTROUTER_API_KEY` | Yes, for AgentRouter script | Authenticates `agentrouter.org` chat calls | `onmirout/gpt.py` (+ `.env` via `python-dotenv`) |
| `MODEL` | No (default `gpt-5.6-sol`) | AgentRouter model id | `onmirout/gpt.py` |
| `DJANGO_SECRET_KEY` | Yes in production | Django secret key (insecure dev fallback exists in code — override it) | `config/settings.py` |
| `DJANGO_DEBUG` | No (default `True`) | `False` enables production security flags + WhiteNoise | `config/settings.py` |
| `DJANGO_ALLOWED_HOSTS` | Yes in production | Comma-separated allowed hosts | `config/settings.py` |
| `POSTGRES_DB` | No (default `school_db`) | Database name | `config/settings.py` |
| `POSTGRES_USER` | No (default `postgres`) | Database user | `config/settings.py` |
| `POSTGRES_PASSWORD` | Yes (no safe default) | Database password — always set via env | `config/settings.py` |
| `POSTGRES_HOST` | No (default `localhost`) | Database host | `config/settings.py` |
| `POSTGRES_PORT` | No (default `5432`) | Database port | `config/settings.py` |

Example (do not paste real secrets):

```bash
export GEMINI_API_KEY="..."
export DJANGO_SECRET_KEY="..."
export DJANGO_DEBUG="False"
export DJANGO_ALLOWED_HOSTS="example.com"
export POSTGRES_DB="school_db"
export POSTGRES_USER="postgres"
export POSTGRES_PASSWORD="..."
export OPENROUTER_API_KEY="..."
export AGENTROUTER_API_KEY="..."
```

---

## ▶️ Usage

### Neon Snake

Open `index.html` → press **START** → steer with **↑↓←→ / WASD**, **Space** to pause. On touch devices use the on-screen pad or swipe on the board. Best score persists in `localStorage` (`neonSnakeBest`).

### Weather Widget

Edit the `CONFIG` block at the top of `weather-widget.html` (`API_KEY`, `CITY`, `UNITS`), then open the file. It fetches current weather + 3-hour forecast slots and renders humidity, wind (km/h), and visibility.

### Day/Night Toggle

Open `indexx.html` and click the Lottie pill in the pinned header. The animation plays forward (→ night) or in reverse (→ day) while toggling `body.dark-mode`.

### Django + Gemini backend

```bash
# health check (200 when GEMINI_API_KEY is configured, else 503)
curl http://127.0.0.1:8000/api/gemini/health/

# generate (temperature clamped 0–2, max_output_tokens clamped 1–8192)
curl -X POST http://127.0.0.1:8000/api/gemini/generate/ \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Explain how AI works in a few words", "temperature": 0.7, "max_output_tokens": 2048}'
```

### AI CLIs

```bash
python gemeni_api_test.py    # multi-turn Gemini chat; remembers context via chats.create
python onmirout/apitest.py   # Nemotron chat with reasoning payload enabled
python onmirout/gpt.py       # AgentRouter chat; reads AGENTROUTER_API_KEY from .env
```

---

## 🔌 API Reference

Base paths are defined in `Student management/config/urls.py`. Request/response shapes are defined in `students/views.py` + `students/gemini_service.py`.

### `POST /api/gemini/generate/`

| Field | Type | Required | Notes |
|---|---|---:|---|
| `prompt` | string | Yes | Non-empty; `400 MISSING_PROMPT` if absent |
| `system_instruction` | string | No | Passed through as generation config when non-empty |
| `temperature` | float | No | Default `0.7`, clamped to `0.0–2.0` |
| `max_output_tokens` | int | No | Default `2048`, clamped to `1–8192` |

Success response:

```json
{ "success": true, "content": "...", "error": null, "error_code": null }
```

Failure maps service codes to HTTP status: `INVALID_API_KEY`/`SERVICE_UNAVAILABLE` → 503, `RATE_LIMITED` → 429, `TIMEOUT` → 504, `BAD_REQUEST` → 400, `SERVER_ERROR`/`MAX_RETRIES_EXCEEDED`/`EMPTY_RESPONSE` → 502, `INTERNAL_ERROR` → 500. Malformed JSON → `400 INVALID_JSON`; bad numeric params → `400 INVALID_PARAMETER`.

### `GET /api/gemini/health/`

```json
{ "success": true, "service": "gemini", "status": "available", "model": "gemini-3.6-flash" }
```

Returns `503` with `"status": "unavailable"` when no API key is configured.

---

## 🗄️ Database / Backend Notes

- Engine: `django.db.backends.postgresql`; connection fully env-driven (`POSTGRES_*`, see table above).
- `students/models.py` defines no models yet — the app currently serves stateless AI endpoints, not CRUD.
- Logging: console in development; `django` + `students` loggers also write `logs/django.log` (create `logs/` or the file handler will error on first write).
- Production (`DJANGO_DEBUG=False`): enables HSTS/SSL-redirect/secure cookies/`X_FRAME_OPTIONS=DENY`, inserts WhiteNoise middleware, and uses `staticfiles` with compressed manifest storage. No Dockerfile, CI, or host-specific deploy script ships with the repo.

---

## 🧪 Commands

```bash
# --- Browser demos ---
open index.html                      # Snake (or serve via http.server)
open weather-widget.html             # Weather card
open indexx.html                     # Lottie toggle

# --- Django backend (from Student management/) ---
python manage.py migrate             # apply built-in migrations
python manage.py runserver           # dev server on 127.0.0.1:8000
python manage.py createsuperuser     # admin access (standard Django)

# --- AI scripts (repo root) ---
python gemeni_api_test.py
python agentrouter.py
python onmirout/apitest.py
python onmirout/gpt.py

# --- React app (from React learning/myapp/) ---
npm start                            # dev server
npm test                             # watch-mode tests (Testing Library)
npm run build                        # production build
npm run eject                        # one-way CRA eject
```

Only the commands above (plus `createdb`/`psql` for Postgres setup) apply — there are no repo-level test suites, linters, Dockerfiles, or deploy scripts to document.

---

## 🚀 More from [@1abhishek0948](https://github.com/1abhishek0948)

| Repository | Stack | Highlights |
|---|---|---|
| [Hometown-HUb](https://github.com/1abhishek0948/Hometown-HUb) | TypeScript | — |
| [BLIND-ASSISTANCE-SYSTEM](https://github.com/1abhishek0948/BLIND-ASSISTANCE-SYSTEM) | Python | Real-time object detection, distance measurement, and voice alerts for visually impaired users |
| [lafzloom](https://github.com/1abhishek0948/lafzloom) | Python | — |
| [Ai-Web-Doctor](https://github.com/1abhishek0948/Ai-Web-Doctor) | Python | AI-powered website UI auditing and debugging (Playwright, axe-core, Gemini AI) |
| [Universal-Media-downloader](https://github.com/1abhishek0948/Universal-Media-downloader) | HTML | — |
| [MythTales-interctive-story-telling](https://github.com/1abhishek0948/MythTales-interctive-story-telling) | Python | — |

<p align="center">
  <a href="https://github.com/1abhishek0948?tab=repositories">View all 15 repositories →</a>
  &nbsp;•&nbsp;
  <a href="https://github.com/1abhishek0948?tab=stars">Starred →</a>
</p>

---

## 🗺️ Roadmap

Sensible next steps given what's actually here (no timelines promised):

- [ ] Add `requirements.txt` (+ pinned versions) for `Student management/` and the CLI scripts
- [ ] Remove hardcoded demo keys; load all secrets from env / `.env.example`
- [ ] Fix `oraca.py` (currently has an empty `api_key=` assignment and won't run)
- [ ] Define `students` models or remove the empty app scaffolding if the backend stays stateless
- [ ] Ensure `logs/` exists or make the file log handler optional
- [ ] Add checked-in screenshots for the three HTML demos
- [ ] Split this playground into focused repos if any piece grows up

---

## 🤝 Contributing

1. Keep each experiment self-contained — don't add cross-folder imports.
2. Don't commit API keys, passwords, or tokens. Use env vars.
3. Match the existing style per piece (vanilla JS for demos, Django conventions for the backend, CRA defaults for the React app).
4. If you add a dependency, document the exact install command in your PR description.

---

## 📄 License

No `LICENSE` file ships with this repository. All rights remain with the authors by default — add an explicit license (e.g. MIT) before treating any piece as open source.

---

## 👤 Author

**Abhishek Thakur** — [@1abhishek0948](https://github.com/1abhishek0948)

🌐 [Portfolio](https://abhishek-thakur.com.np/) · 💼 [LinkedIn](https://www.linkedin.com/in/abhishek0948/) · 📸 [Instagram](https://www.instagram.com/1abhishek0948/)

Third-party assets and services used with their own terms: Lottie assets from `lottie.host` (player via `unpkg`), avatar photo from Unsplash, fonts from Fontsource / Google Fonts, weather from OpenWeatherMap, AI from Google Gemini / OpenRouter / AgentRouter / OrcaRouter. Academic decks (Lahan, e-commerce, STQA, Django notes) are my own study materials.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=110&section=footer" alt="Footer wave" width="100%" />
</p>

<div align="center">

### ✦ Code · Build · Learn · Repeat ✦

</div>

