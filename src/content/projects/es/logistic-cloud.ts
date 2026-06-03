import logisticCloud0 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-0.png";
import logisticCloud1 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-1.png";
import logisticCloud2 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-2.png";
import logisticCloud3 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Logistic Cloud",
  theme: "dark",
  tags: ["python"],
  tagGroups: [
    {
      title: "Ciberseguridad",
      tags: ["python"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/TFM---LOGISTIC-CLOUD/tree/main",
  liveLabel: "Ver en GitHub",
  description:
    "Logistic Cloud es un laboratorio de ciberseguridad desplegado en entorno virtualizado que simula una empresa logística real.<br/><br/>El proyecto combina administración de sistemas, pentesting y monitorización SIEM con Wazuh para detectar y analizar ataques en tiempo real, incluyendo amenazas externas e insider threats.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: logisticCloud0,
        alt: "Login empresa bulnerable",
        caption: "Login empresa bulnerable",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: logisticCloud1,
        alt: "BD expuesta en el usuario admin",
        caption: "BD expuesta en el usuario admin",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: logisticCloud2,
        alt: "Dasboard de wazuh",
        caption: "Dasboard de wazuh",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: logisticCloud3,
        alt: "Finalidad del laboratorio",
        caption: "Finalidad del laboratorio",
      },
    },
  ],
} as const satisfies ProjectContent;
