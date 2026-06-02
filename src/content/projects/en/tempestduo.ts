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
      title: "Technologies",
      tags: ["godot", "gdscript"],
    },
    {
      title: "Features",
      tags: ["2d", "multiplayer", "local-save"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/Juego-Godot-Termpest-Duo",
  liveLabel: "View on GitHub",
  description: "Tempest Duo is a 2D game created in Godot, mandatory multiplayer for 2 people on the same keyboard.<br/><br/>2 characters get trapped in a cave and have to collect 3 diamonds to unlock the exit portal. Designed for races between P1 and P2.",
  components: [
    { type: "media", props: { type: "video", src: videoTempestDuo, caption: "Character selection" } },
    { type: "media", props: { type: "image", src: tempestduo0, alt: "Settings screen with volume and controls", caption: "Settings screen with volume and controls" } },
    { type: "media", props: { type: "image", src: tempestduo1, alt: "Map 1: Prairie cave", caption: "Map 1: Prairie cave" } },
    { type: "media", props: { type: "image", src: tempestduo2, alt: "Map 2: Ice cave", caption: "Map 2: Ice cave" } },
    { type: "media", props: { type: "image", src: tempestduo3, alt: "Progress / match winner", caption: "Progress / match winner" } },
  ],
} as const satisfies ProjectContent;
