# Javier Rodríguez Jiménez — Portfolio (2025)

🌐 **[javiiiii11.github.io/Mi-portafolio](https://javiiiii11.github.io/Mi-portafolio/)**

Personal portfolio featuring project case studies, lightweight 3D and shader demos, and bilingual copy (English & German).

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Vue 3 (`<script setup>`) + TypeScript |
| Bundler | Vite |
| Motion | GSAP + Lenis |
| 3D / Shaders | three.js + GLSL via `vite-plugin-glsl` |
| Audio | Howler |
| Styles | SCSS with shared mixins |
| i18n | Custom i18n helpers |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev
```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port **3000** (`strictPort`) |
| `npm run build` | Type-check then production bundle to `docs/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check only (`vue-tsc -b`) |

---

## 📁 Project Structure

```
src/
├── assets/          # Images, videos, sounds, styles
├── components/      # Shared UI components
├── content/
│   ├── projects/    # Case studies (EN + DE)
│   └── credentials/ # Name, studies, certifications
├── features/
│   └── home/        # Home section layout
├── i18n/            # Translation messages
└── three/           # WebGL / GLSL scenes
```

---

## ✏️ Customization

- **Projects** — Add or edit files in `src/content/projects/{en,de}/<slug>.ts`. Slugs must match `projectIds` in `src/content/projects/index.ts`.
- **Previews / listing** — `src/content/projects/previews/`
- **Tags** — Variants and labels in `src/components/tagVariants.ts`
- **Personal info** — Name, studies, and certifications in `src/content/credentials/index.ts` and `src/i18n/messages/namespaces/common/{en,de}.json`
- **Visual assets** — Images, thumbnails, videos, and sounds under `src/assets/`, `public/`, and `sounds/`
- **Section order** — Reorder home sections in `src/features/home/components/Home.vue`

---

## 🌍 Deployment

Hosted on **GitHub Pages** from the `nuevo-portfolio` branch (`/docs` folder).

```bash
npm run build
git add .
git commit -m "deploy"
git push origin nuevo-portfolio
```

---

## 📄 Credits & Attribution

This project is based on the original portfolio by **David Heckhoff** → [david-hckh.com](https://david-hckh.com)

If you use this project or substantial parts of its source code, attribution must be preserved:
- Keep existing credit comments in the source code
- Keep this attribution section in the README
- Include a visible reference to the original project in derivative works

Commercial reuse or redistribution of substantial portions without permission is prohibited.
