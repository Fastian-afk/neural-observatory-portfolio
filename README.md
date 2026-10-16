# THE NEURAL OBSERVATORY — Imaad Fazal AI/ML Research & Engineering Portfolio

An immersive, recruiter-first, production-minded AI/ML research portfolio built for **Imaad Fazal** (BS Computer Science @ FAST-NUCES Islamabad, Expected Graduation June 2027).

Designed around the **NEURAL OBSERVATORY / FLIGHT DECK** visual language, the application pairs an isolated, lazy-loaded procedural Three.js command core and Web Audio API ambient synth with rigorous, leakage-audited case studies across aviation safety, clinical time-series ML, computer vision, and agentic systems.

---

## 1. Architecture & Modular Project Structure

No monolithic single-file shortcuts in the repository—every data layer, UI primitive, 3D scene module, and section component has a focused responsibility and stays well under 250–300 lines:

```text
neural-observatory-portfolio/
├── public/
│   ├── images/
│   │   ├── og-neural-observatory.jpg      # Custom Open Graph / social preview visual
│   │   └── dreamtrip-barcelona.jpg        # Custom HackUPC Barcelona geodesic route visual
│   ├── favicon.svg                        # Neural Observatory vector emblem
│   └── imaad-fazal-resume.pdf             # Pre-wired from uploaded Resume_Final.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # Root layout, Google Fonts, Person JSON-LD, OpenGraph
│   │   ├── page.tsx                       # Clean root composition entry
│   │   ├── not-found.tsx                  # Custom 404 telemetry lost screen
│   │   ├── sitemap.ts                     # Dynamic sitemap generator
│   │   └── robots.ts                      # Search crawler directives
│   ├── components/
│   │   ├── audio/
│   │   │   └── SoundController.tsx        # OFF-by-default Web Audio API ambient drone synth
│   │   ├── cards/
│   │   │   └── FeaturedProjectCard.tsx    # Flagship station card with metrics & diagram
│   │   ├── hero/
│   │   │   ├── CinematicHero.tsx          # Foreground editorial copy + lazy 3D scene
│   │   │   └── AchievementStrip.tsx       # 6 verified credibility signals with anchor links
│   │   ├── modals/
│   │   │   └── ProjectDetailModal.tsx     # Escape/keyboard-accessible technical dossier modal
│   │   ├── navigation/
│   │   │   ├── Navigation.tsx             # Sticky flight-deck header + mobile drawer
│   │   │   ├── Footer.tsx                 # Centralized profile links & verification note
│   │   │   └── SiteShell.tsx              # State coordinator for modals & sections
│   │   ├── scene/
│   │   │   ├── NeuralObservatoryScene.tsx # Isolated client-only Three.js orbital core
│   │   │   ├── SceneErrorBoundary.tsx     # Error boundary protecting page from WebGL faults
│   │   │   └── SceneFallback.tsx          # Reduced-motion & no-WebGL SVG/CSS schematic
│   │   └── ui/
│   │       ├── SectionHeading.tsx         # Station code + declarative section header
│   │       └── TelemetryDiagram.tsx       # Custom SVG diagrams (ADS-B, SepsisAI, OCR, Grad-CAM)
│   ├── data/
│   │   ├── profile.ts                     # Identity, thesis, mission narrative, FAST-NUCES education
│   │   ├── links.ts                       # Verified external URLs, email, navigation stations
│   │   ├── projects.ts                    # 5 flagship case studies + 5 archive builds
│   │   ├── research.ts                    # IEEE IRAI, Elsevier Safety Science, MIMIC-IV research
│   │   ├── experience.ts                  # TechGIS, MIDL/NCAI, NASTP internship timeline
│   │   ├── skills.ts                      # 5 domain constellations (no fake percentage bars)
│   │   └── achievements.ts                # Honours, credentials & status-audited hackathon ledger
│   ├── lib/
│   │   ├── metadata.ts                    # Next.js Metadata & Schema.org Person JSON-LD
│   │   ├── motion.ts                      # Motion timing tokens
│   │   └── utils.ts                       # Class merging & safe clipboard copy fallback
│   └── styles/
│       ├── tokens.css                     # Color, border, and easing CSS variables
│       └── globals.css                    # Tailwind base, focus-visible & reduced-motion rules
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── postcss.config.mjs
```

---

## 2. Local Development & Build Commands

### Prerequisites
- **Node.js**: `>= 18.17.0` (LTS recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run local development server (http://localhost:3000)
npm run dev

# 3. Run strict TypeScript check & ESLint
npm run typecheck
npm run lint

# 4. Build for production
npm run build
npm run start
```

No environment variables are required for the static portfolio. Optionally, set `NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com` in Vercel for canonical sitemap generation.

---

## 3. Content Maintenance Guide (Where to Edit Later)

All portfolio content lives in strictly typed TypeScript modules inside `src/data/` so you never have to dig through JSX components:

1. **Update Graduation Status, Bio, or Coursework**: Edit `src/data/profile.ts`.
2. **Add or Update Case Studies & Project Links**: Edit `src/data/projects.ts`. Any project with `repoUrl` or `demoUrl` populated will automatically render verified action buttons; omitted URLs cleanly hide the button instead of rendering dead links.
3. **Update Paper Statuses (`Submitted` → `Accepted` / `Published`)**: Edit `src/data/research.ts` (`statusBadge` and `integrityNote`).
4. **Update Hackathon Statuses (e.g., Junction 2026 Finland)**: Edit `HACKATHON_LEDGER` in `src/data/achievements.ts`.
5. **Replace the Résumé PDF**: Your uploaded `Resume_Final.pdf` has already been copied to `public/imaad-fazal-resume.pdf`. To update it in the future, overwrite `public/imaad-fazal-resume.pdf` with your newer PDF using the same filename.
6. **Customize Ambient Audio**: Edit `src/components/audio/SoundController.tsx` to adjust harmonic pad frequencies (`[73.42, 110.0, 185.0, 220.0]`) or default gain envelope. Audio is strictly **OFF by default** and starts only on explicit user interaction.

---

## 4. Deploying to Vercel

1. Push this project directory to a GitHub repository (e.g., `Fastian-afk/neural-observatory-portfolio`).
2. Open [Vercel](https://vercel.com/new) and import the GitHub repository.
3. Keep the default Next.js preset:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build`
   - **Output Directory**: `.next` (default)
4. Click **Deploy**.

### Post-Deployment QA Checklist
- [ ] Verify desktop hero layout and 3D station shortcuts (`STN-01` through `STN-07`).
- [ ] Test mobile navigation drawer and single-column responsiveness on a phone viewport.
- [ ] Click **View Résumé** to confirm `/imaad-fazal-resume.pdf` opens cleanly.
- [ ] Test **Sound: Off → Sound: On** toggle and volume slider.
- [ ] Open each of the 5 Flagship Station Dossiers and press `Escape` to verify modal dismissal.
- [ ] Test category filter pills and keyword search in the System Archive (`#archive`).
- [ ] Test `/non-existent-route` to confirm the custom 404 telemetry screen renders.
