import thumbnailTempestDuo from "../../../assets/thumbnails/tempestduo.png";
import thumbnailRestaurante from "../../../assets/thumbnails/restaurante-el-filete-del-rincon.png";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailGenerador from "../../../assets/thumbnails/generador-contraseñas.png";
import thumbnailStreakon from "../../../assets/thumbnails/gymrace.png";
import thumbnailLogisticCloud from "../../../assets/thumbnails/logistic-cloud.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Logistic Cloud",
    slug: "logistic-cloud",
    thumbnail: thumbnailLogisticCloud,
    description: "Cybersecurity lab",
  },
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
    title: "El Filete del Rincón",
    slug: "restaurante",
    thumbnail: thumbnailRestaurante,
    description: "Restaurant website",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Password Generator",
    slug: "generador-contrasenas",
    thumbnail: thumbnailGenerador,
    description: "Secure password generator",
  },
] as const satisfies ProjectPreview[];
