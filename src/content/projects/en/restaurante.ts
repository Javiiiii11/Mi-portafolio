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
      title: "Technologies",
      tags: ["html", "css"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/Restaurante-el-filete-del-rincon",
  liveLabel: "View on GitHub",
  description: "El Filete del Rincón is a complete restaurant website developed as a 1st year DAM course project. Features include menus, reservations, courses, blog, and more.<br/><br/>A beautiful, responsive web design showcasing traditional cuisine with modern web technologies.",
  components: [
    { type: "media", props: { type: "image", src: restaurante0, alt: "Homepage", caption: "Homepage" } },
    { type: "media", props: { type: "image", src: restaurante1, alt: "Starters", caption: "Starters" } },
    { type: "media", props: { type: "image", src: restaurante2, alt: "About us", caption: "About us" } },
    { type: "media", props: { type: "image", src: restaurante3, alt: "Restaurant stories blog", caption: "Restaurant stories blog" } },
    { type: "media", props: { type: "image", src: restaurante4, alt: "Restaurant news", caption: "Restaurant news" } },
  ],
} as const satisfies ProjectContent;
