# Javier Rodríguez Jiménez — Portafolio (2026)

🌐 **[javiiiii11.github.io/Mi-portafolio](https://javiiiii11.github.io/Mi-portafolio/)**

Portafolio personal con casos de estudio de proyectos, demos 3D y shaders, y contenido bilingüe (inglés y alemán).

---

## 🛠️ Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Vue 3 (`<script setup>`) + TypeScript |
| Bundler | Vite |
| Animación | GSAP + Lenis |
| 3D / Shaders | three.js + GLSL via `vite-plugin-glsl` |
| Audio | Howler |
| Estilos | SCSS con mixins compartidos |
| i18n | Helpers i18n propios |

---

## 🚀 Primeros pasos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (localhost:3000)
npm run dev
```

## 📦 Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en el puerto **3000** (`strictPort`) |
| `npm run build` | Comprobación de tipos y bundle de producción en `docs/` |
| `npm run preview` | Servir el build de producción en local |
| `npm run typecheck` | Solo comprobación de tipos (`vue-tsc -b`) |

---

## 📁 Estructura del proyecto

```
src/
├── assets/          # Imágenes, vídeos, sonidos, estilos
├── components/      # Componentes UI compartidos
├── content/
│   ├── projects/    # Casos de estudio (EN + DE)
│   └── credentials/ # Nombre, estudios, certificaciones
├── features/
│   └── home/        # Layout de secciones de inicio
├── i18n/            # Mensajes de traducción
└── three/           # Escenas WebGL / GLSL
```

---

## ✏️ Personalización

- **Proyectos** — Añade o edita archivos en `src/content/projects/{en,de}/<slug>.ts`. Los slugs deben coincidir con `projectIds` en `src/content/projects/index.ts`.
- **Previews / listado** — `src/content/projects/previews/`
- **Etiquetas** — Variantes y etiquetas en `src/components/tagVariants.ts`
- **Datos personales** — Nombre, estudios y certificaciones en `src/content/credentials/index.ts` y `src/i18n/messages/namespaces/common/{en,de}.json`
- **Recursos visuales** — Imágenes, miniaturas, vídeos y sonidos en `src/assets/`, `public/` y `sounds/`
- **Orden de secciones** — Reordena las secciones de inicio en `src/features/home/components/Home.vue`

---

## 🌍 Despliegue

Publicado en **GitHub Pages** desde la rama `nuevo-portfolio` (carpeta `/docs`).

```bash
npm run build
git add .
git commit -m "deploy"
git push origin nuevo-portfolio
```

---

## 📄 Créditos y atribución

Basado en el portafolio original de David Heckhoff → david-hckh.com
