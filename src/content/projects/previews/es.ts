import thumbnailTempestDuo from "../../../assets/thumbnails/tempestduo.png";
import thumbnailRestaurante from "../../../assets/thumbnails/restaurante-el-filete-del-rincon.png";
import thumbnailGenerador from "../../../assets/thumbnails/generador-contraseñas.png";
import thumbnailStreakon from "../../../assets/thumbnails/gymrace.png";
import thumbnailLogisticCloud from "../../../assets/thumbnails/logistic-cloud.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Logistic Cloud",
    slug: "logistic-cloud",
    thumbnail: thumbnailLogisticCloud,
    description: "Laboratorio de ciberseguridad",
  },
  {
    title: "GymRace",
    slug: "gymrace",
    thumbnail: thumbnailStreakon,
    description: "App social de entrenamiento",
  },
  {
    title: "Tempest Duo",
    slug: "tempestduo",
    thumbnail: thumbnailTempestDuo,
    description: "Juego 2D multijugador en Godot",
  },
  {
    title: "El Filete del Rincón",
    slug: "restaurante",
    thumbnail: thumbnailRestaurante,
    description: "Web de restaurante",
  },
  {
    title: "Generador de Contraseñas",
    slug: "generador-contrasenas",
    thumbnail: thumbnailGenerador,
    description: "Generador de contraseñas seguras",
  },
] as const satisfies ProjectPreview[];
