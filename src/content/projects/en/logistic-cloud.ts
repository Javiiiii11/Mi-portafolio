import logisticCloud0 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-0.png";
import logisticCloud1 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-1.png";
import logisticCloud2 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-2.png";
import logisticCloud3 from "../../../assets/images/projects/logistic-cloud/logistic-cloud-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Logistic Cloud",
  theme: "dark",
  tags: ["virtualbox", "nmap", "gobuster", "ferroxbuster", "john-the-ripper", "msoffcrypto", "python", "ssh", "minio", "samba", "ftp", "wazuh", "suricata", "fim", "yara"],
  tagGroups: [
    {
      title: "Virtualization",
      tags: ["virtualbox"],
    },
    {
      title: "Reconnaissance & Exploitation",
      tags: ["nmap", "gobuster", "ferroxbuster", "john-the-ripper", "msoffcrypto", "python"],
    },
    {
      title: "Services & Access",
      tags: ["ssh", "minio", "samba", "ftp"],
    },
    {
      title: "SIEM & Monitoring",
      tags: ["wazuh", "suricata", "fim", "yara"],
    },
  ],
  videoBorder: false,
  live: "https://github.com/Javiiiii11/TFM---LOGISTIC-CLOUD/tree/main",
  liveLabel: "View on GitHub",
  description:
    "Logistic Cloud is a cybersecurity lab deployed in a virtualized environment simulating a real logistics company.<br/><br/>The project combines system administration, pentesting and SIEM monitoring with Wazuh to detect and analyze attacks in real time, including external threats and insider threats.",
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
