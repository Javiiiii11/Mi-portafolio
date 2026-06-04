import videoGenerador from "../../../assets/videos/generador-contraseñas.mp4";

import generador0 from "../../../assets/images/projects/generador-contraseñas/generador-contraseñas-0.png";
import generador1 from "../../../assets/images/projects/generador-contraseñas/generador-contraseñas-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Password Generator",
  theme: "dark",
  tags: ["python"],
  source: "https://github.com/Javiiiii11/Generador-de-contrasenas-Javier",
  videoBorder: false,
  description:
    "A complete password generator with multiple customization options, including length, character types, and saving features.<br/><br/>Built with Python, it allows generating and managing secure passwords easily.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoGenerador,
        caption: "Project Demo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generador0,
        alt: "Main Interface",
        caption: "Main Interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: generador1,
        alt: "Customization Options",
        caption: "Customization Options",
      },
    },
  ],
} as const satisfies ProjectContent;
