import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "CubeWar",
  theme: "dark",
  tags: ["three", "node", "websockets", "redis"],
  live: "https://cubewar.io",
  description:
    "CubeWar es un juego multijugador de navegador en el que los jugadores compiten en batallas rápidas y estratégicas.<br/><br/>Desarrollé todo el stack por mi cuenta, incluida la motor de juego, el sistema de timeline del cliente y la red en tiempo real con matchmaking basado en Redis para una experiencia fluida.",
  components: [
    { type: "media", props: { type: "video", src: videoCubeWar, caption: "Jugabilidad" } },
    { type: "media", props: { type: "image", src: cubewar0, alt: "Tutorial", caption: "Tutorial" } },
    { type: "media", props: { type: "image", src: cubewar1, alt: "Temas de cartas", caption: "Temas de cartas" } },
    { type: "media", props: { type: "image", src: cubewar2, alt: "Autenticación", caption: "Autenticación" } },
    { type: "media", props: { type: "image", src: cubewar3, alt: "Diseño responsive", caption: "Diseño responsive" } },
    { type: "media", props: { type: "image", src: cubewar4, alt: "Varios modos de juego", caption: "Varios modos de juego" } },
    { type: "media", props: { type: "image", src: cubewar5, alt: "Sistema de grupo", caption: "Sistema de grupo" } },
  ],
} as const satisfies ProjectContent;