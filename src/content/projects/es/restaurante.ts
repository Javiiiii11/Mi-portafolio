import restaurante0 from "../../../assets/images/projects/restaurante/restaurante-el-filete-del-rincon-0.png";
import restaurante1 from "../../../assets/images/projects/restaurante/restaurante-el-filete-del-rincon-1.png";
import restaurante2 from "../../../assets/images/projects/restaurante/restaurante-el-filete-del-rincon-2.png";
import restaurante3 from "../../../assets/images/projects/restaurante/restaurante-el-filete-del-rincon-3.png";
import restaurante4 from "../../../assets/images/projects/restaurante/restaurante-el-filete-del-rincon-4.png";

import type { ProjectContent } from "../../types";

export default {
  title: "El Filete del Rincón",
  theme: "dark",
  tags: ["html", "css"],
  tagGroups: [
    {
      title: "Tecnologías",
      tags: ["html", "css"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/Restaurante-el-filete-del-rincon",
  liveLabel: "Ver en GitHub",
  description: "El Filete del Rincón es una web completa de restaurante desarrollada como proyecto del curso 1º DAM. Incluye menús, reservas, cursos, blog y más.<br/><br/>Un diseño web bonito y responsive que muestra la cocina tradicional con tecnologías web modernas.",
  components: [
    { type: "media", props: { type: "image", src: restaurante0, alt: "Página Principal", caption: "Página Principal" } },
    { type: "media", props: { type: "image", src: restaurante1, alt: "Entrantes", caption: "Entrantes" } },
    { type: "media", props: { type: "image", src: restaurante2, alt: "Sobre nosotros", caption: "Sobre nosotros" } },
    { type: "media", props: { type: "image", src: restaurante3, alt: "Blog de historias del restaurante", caption: "Blog de historias del restaurante" } },
    { type: "media", props: { type: "image", src: restaurante4, alt: "Noticias de interes sobre el restaurante", caption: "Noticias de interes sobre el restaurante" } },
  ],
} as const satisfies ProjectContent;
