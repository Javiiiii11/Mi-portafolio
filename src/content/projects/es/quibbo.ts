import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Quibbo",
  theme: "light",
  tags: ["three", "node", "kubernetes", "redis", "postgresql"],
  videoBorder: true,
  description:
    "Quibbo es una plataforma para juegos multijugador rápidos y por rondas. Une matchmaking, avatares 3D personalizables e integración de cuentas con recompensas clasificadas.<br/><br/>El proyecto empezó como un experimento técnico y acabó convertido en un sistema escalable para probar nuevas ideas de juego.",
  components: [
    { type: "media", props: { type: "video", src: videoQuibbo, caption: "Experiencia de usuario" } },
    { type: "media", props: { type: "image", src: quibbo0, alt: "Creador de avatar", caption: "Creador de avatar" } },
    { type: "media", props: { type: "image", src: quibbo1, alt: "Tres en raya multijugador", caption: "Tres en raya multijugador" } },
    { type: "media", props: { type: "image", src: quibbo2, alt: "Varios minijuegos", caption: "Varios minijuegos" } },
    { type: "media", props: { type: "image", src: quibbo3, alt: "Variaciones de avatar", caption: "Variaciones de avatar" } },
    { type: "media", props: { type: "image", src: quibbo4, alt: "Diseño responsive", caption: "Diseño responsive" } },
    { type: "media", props: { type: "image", src: quibbo5, alt: "Modo oscuro", caption: "Modo oscuro" } },
  ],
} as const satisfies ProjectContent;