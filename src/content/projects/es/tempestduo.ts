import videoTempestDuo from "../../../assets/videos/tempestduo.mp4";
import tempestduo0 from "../../../assets/images/projects/tempestduo/tempestduo-0.png";
import tempestduo1 from "../../../assets/images/projects/tempestduo/tempestduo-1.png";
import tempestduo2 from "../../../assets/images/projects/tempestduo/tempestduo-2.png";
import tempestduo3 from "../../../assets/images/projects/tempestduo/tempestduo-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Tempest Duo",
  theme: "dark",
  tags: ["godot", "gdscript", "2d", "multiplayer", "local-save"],
  tagGroups: [
    {
      title: "Tecnologías",
      tags: ["godot", "gdscript"],
    },
    {
      title: "Características",
      tags: ["2d", "multiplayer", "local-save"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/Juego-Godot-Termpest-Duo",
  liveLabel: "Ver en GitHub",
  description: "Tempest Duo es un juego 2D creado en Godot, obligatorio en multijugador para 2 personas en el mismo teclado.<br/><br/>2 personajes se quedan atrapados en una cueva y tienen que coger 3 diamantes para desbloquear el portal de salida. Diseñado para hacer carreras entre J1 y J2.",
  components: [
    { type: "media", props: { type: "video", src: videoTempestDuo, caption: "Selección de personajes" } },
    { type: "media", props: { type: "image", src: tempestduo0, alt: "Pantalla de ajustes con control de volumen y teclas", caption: "Pantalla de ajustes con control de volumen y teclas" } },
    { type: "media", props: { type: "image", src: tempestduo1, alt: "Mapa 1: Cueva de pradera", caption: "Mapa 1: Cueva de pradera" } },
    { type: "media", props: { type: "image", src: tempestduo2, alt: "Mapa 2: Cueva de hielo", caption: "Mapa 2: Cueva de hielo" } },
    { type: "media", props: { type: "image", src: tempestduo3, alt: "Progreso / ganador de la partida", caption: "Progreso / ganador de la partida" } },
  ],
} as const satisfies ProjectContent;
