import thumbnailTempestDuo from "../../../assets/thumbnails/tempestduo.png";
import thumbnailRestaurante from "../../../assets/thumbnails/restaurante-el-filete-del-rincon.png";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailStreakon from "../../../assets/thumbnails/gymrace.png";
import thumbnailLogisticCloud from "../../../assets/thumbnails/logistic-cloud.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Logistic Cloud",
    slug: "logistic-cloud",
    thumbnail: thumbnailLogisticCloud,
    description: "Plataforma de gestión logística",
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
    title: "Pokédex",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Proyecto de aprendizaje open source",
  },
] as const satisfies ProjectPreview[];
