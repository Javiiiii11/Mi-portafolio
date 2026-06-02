import thumbnailTempestDuo from "../../../assets/thumbnails/tempestduo.png";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/gymrace.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "GymRace",
    slug: "gymrace",
    thumbnail: thumbnailStreakon,
    description: "Social fitness training app",
  },
  {
    title: "Tempest Duo",
    slug: "tempestduo",
    thumbnail: thumbnailTempestDuo,
    description: "2D multiplayer game in Godot",
  },
  {
    title: "Quibbo",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Multiplayer gaming platform",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D adventure game",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Open-source learning project",
  },
] as const satisfies ProjectPreview[];
