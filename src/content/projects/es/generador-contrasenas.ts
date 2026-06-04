import videoGenerador from "../../../assets/videos/generador-contraseñas.mp4";

import generador0 from "../../../assets/images/projects/generador-contraseñas/generador-contraseñas-0.png";
import generador1 from "../../../assets/images/projects/generador-contraseñas/generador-contraseñas-1.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Generador de Contraseñas",
  theme: "dark",
  tags: ["python"],
  source: "https://github.com/Javiiiii11/Generador-de-contrasenas-Javier",
  videoBorder: false,
  description:
    "Un generador completo de contraseñas con múltiples opciones de personalización, incluyendo longitud, tipos de caracteres y funciones de guardado.<br/><br/>Desarrollado con Python, permite generar y gestionar contraseñas seguras de forma sencilla.",
  components: [
    { type: "media", props: { type: "video", src: videoGenerador, caption: "Demostración del Proyecto" } },
    { type: "media", props: { type: "image", src: generador0, alt: "Interfaz Principal", caption: "Interfaz Principal" } },
    { type: "media", props: { type: "image", src: generador1, alt: "Opciones de Personalización", caption: "Opciones de Personalización" } },
  ],
} as const satisfies ProjectContent;