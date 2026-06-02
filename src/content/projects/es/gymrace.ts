import streakon0 from "../../../assets/images/projects/gymrace/gymrace-0.png";
import streakon1 from "../../../assets/images/projects/gymrace/gymrace-1.png";
import streakon2 from "../../../assets/images/projects/gymrace/gymrace-2.png";
import streakon3 from "../../../assets/images/projects/gymrace/gymrace-3.png";
import logoGymrace from "../../../assets/images/projects/gymrace/logo-gymrace.png";

import type { ProjectContent } from "../../types";

export default {
  title: "GymRace",
  logo: logoGymrace,
  theme: "dark",
  tags: ["kotlin", "jetpack-compose", "flask", "python", "html", "css", "javascript", "firebase"],
  tagGroups: [
    {
      title: "Tecnologías",
      tags: ["kotlin", "jetpack-compose", "flask", "python", "html", "css", "javascript", "firebase"],
    },
    {
      title: "IDE",
      tags: ["android-studio", "pycharm", "vscode"],
    },
    {
      title: "Disponible para",
      tags: ["android", "windows"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/TFG.Gymrace/tree/main",
  liveLabel: "Ver en GitHub",
  description:
    "GymRace es un proyecto de TFG centrado en el seguimiento y progreso de entrenamientos de gimnasio.<br/><br/>La app plantea una experiencia móvil moderna, visual e intuitiva, donde los usuarios pueden crear rutinas, compartirlas, competir con amigos, seguir planes de dieta y mantener la motivación mediante gamificación e interacción social.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Diseño intuitivo y agradable",
        caption: "Diseño intuitivo y agradable",
        ratio: "6 / 5",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Gran variedad de dietas",
        caption: "Gran variedad de dietas",
        ratio: "6 / 5",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "+500 ejercicios detallados y explicados",
        caption: "+500 ejercicios detallados y explicados",
        ratio: "6 / 5",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Sistema de desafíos para fomentar la motivación",
        caption: "Sistema de desafíos para fomentar la motivación",
        ratio: "6 / 5",
      },
    },
  ],
} as const satisfies ProjectContent;
