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
      title: "Technologies",
      tags: ["kotlin", "jetpack-compose", "flask", "python", "html", "css", "javascript", "firebase"],
    },
    {
      title: "IDE",
      tags: ["android-studio", "pycharm", "vscode"],
    },
    {
      title: "Available for",
      tags: ["android", "windows"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/TFG.Gymrace/tree/main",
  liveLabel: "View on GitHub",
  description:
    "GymRace is a final degree project focused on tracking gym workouts and training progress.<br/><br/>The app proposes a modern, visual, and intuitive mobile experience where users can create routines, share them, compete with friends, follow diet plans, and stay motivated through gamification and social interaction.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Intuitive and pleasant design",
        caption: "Intuitive and pleasant design",
        ratio: "6 / 5",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Wide variety of diets",
        caption: "Wide variety of diets",
        ratio: "6 / 5",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "+500 detailed and explained exercises",
        caption: "+500 detailed and explained exercises",
        ratio: "6 / 5",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Challenge system to boost motivation",
        caption: "Challenge system to boost motivation",
        ratio: "6 / 5",
      },
    },
  ],
} as const satisfies ProjectContent;
