import googleHackingCertificate from "../../assets/images/certificates/Curso_de_Google_Hacking_II_Dorks_comandos_para_Hackear.png";
import digitalSecurityCertificate from "../../assets/images/certificates/Seguridad_digital_para_tu_dia_a_dia.png";
import pythonCertificate from "../../assets/images/certificates/python.png";
import programmingCertificate from "../../assets/images/certificates/Cómo_Programar_Aplicaciones_Desde_cero.png";
import wordpressCertificate from "../../assets/images/certificates/Curso_paginas_web_en_Wordpress.png";
import canvaCertificate from "../../assets/images/certificates/Aprende_Diseño_en_Canva.png";
import aiProductivityCertificate from "../../assets/images/certificates/Inteligencia_Artificial_y_productividad.png";
import excelCertificate from "../../assets/images/certificates/excel.png";
import excelAdvancedCertificate from "../../assets/images/certificates/excel2.png";
import powerBiCertificate from "../../assets/images/certificates/power_bi.png";
import powerBiAdvancedCertificate from "../../assets/images/certificates/Power_BI_intermedio_analisis_y_modelado_de_datos.png";
import geminiCertificate from "../../assets/images/certificates/Domina_la_IA_con_Gemini.png";
import veo3Certificate from "../../assets/images/certificates/Domina_VEO3_Guia_Rapida_para_Principiantes.png";
import cursorPythonCertificate from "../../assets/images/certificates/Cursor_con_Python_desarrollo_inteligente_con_IA.png";
import formula1Certificate from "../../assets/images/certificates/lidera_a_toda_velocidad_lecciones_de_la_formula_1.png";
import chatgptFundamentalsCertificate from "../../assets/images/certificates/fundamentos_de_chatgpt.png";

export type Profile = {
  name: string;
  age: string;
  location: string;
  availability: string;
  licenses: readonly string[];
  phone: string;
  email: string;
  linkedin: string;
  github: string;
};

export type TitleEntry = {
  title: string;
  issuer: string;
  note: string;
  tags: readonly string[];
  icon?: string; // Icon component name
};

export type CertificateEntry = {
  title: string;
  issuer: string;
  category: string;
  date: string;
  platform?: string;
  image?: string;
  imageAlt?: string;
};

export const profile: Profile = {
  name: "Javier Rodríguez Jiménez",
  age: "20 años",
  location: "Toledo, España",
  availability: "Abierto a oportunidades y disponible para remoto",
  licenses: ["A1", "A2", "B"],
  phone: "+34 640 778 109",
  email: "javier.rod.jim2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/javier-rodr%C3%ADguez-181701250/",
  github: "https://github.com/Javiiiii11",
};

export const academicTitles: TitleEntry[] = [
  {
    title: "ESO",
    issuer: "IES Las Salinas",
    note: "Formación obligatoria básica.",
    tags: ["Formación básica"],
    icon: "Book",
  },
  {
    title: "Grado medio en Sistemas Microinformáticos y Redes (SMR)",
    issuer: "FP",
    note: "Formación técnica en sistemas y redes.",
    tags: ["SMR", "Sistemas"],
    icon: "Cpu",
  },
  {
    title: "Grado superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
    issuer: "FP",
    note: "Desarrollo de aplicaciones multiplataforma.",
    tags: ["DAM", "Android"],
    icon: "Code",
  },
  {
    title: "Máster de ciberseguridad en entornos TIC",
    issuer: "En curso · finaliza en junio de 2026",
    note: "Especialización en ciberseguridad (en curso).",
    tags: ["Ciberseguridad", "En curso"],
    icon: "Shield",
  },
];

export const otherTitles: TitleEntry[] = [
  {
    title: "Uso y manejo de desfibrilador externo automatizado (DEA)",
    issuer: "ERC (European Resuscitation Council)",
    note: "Formación DEA según ERC.",
    tags: ["Salud", "Emergencias"],
    icon: "Heart",
  },
  {
    title: "Mantenimiento integral de piscinas",
    issuer: "Formación profesional",
    note: "Mantenimiento y seguridad de instalaciones.",
    tags: ["Piscinas", "Mantenimiento"],
    icon: "Droplet",
  },
  {
    title: "Socorrista en piscinas e instalaciones acuáticas",
    issuer: "Formación profesional",
    note: "Prevención y rescate acuático.",
    tags: ["Socorrismo", "Seguridad"],
    icon: "AlertCircle",
  },
  {
    title: "Primeros Auxilios",
    issuer: "Curso acreditado",
    note: "Atención inicial en emergencias.",
    tags: ["Salud"],
    icon: "Heart",
  },
  {
    title: "Gestión de emergencias",
    issuer: "Formación especializada",
    note: "Coordinación en situaciones de crisis.",
    tags: ["Emergencias", "Gestión"],
    icon: "AlertCircle",
  },
  {
    title: "Coordinador de Servicios de Socorrismo",
    issuer: "Formación especializada",
    note: "Planificación y coordinación de equipos de socorrismo.",
    tags: ["Coordinación", "Socorrismo"],
    icon: "Users",
  },
  {
    title: "Monitor de actividades juveniles",
    issuer: "Monitor de ocio y tiempo libre",
    note: "Dinamización de grupos.",
    tags: ["Ocio"],
    icon: "Users",
  },
  {
    title: "Cinturón negro 1º DAN de judo",
    issuer: "Judo",
    note: "Nivel técnico y disciplina.",
    tags: ["Deporte"],
    icon: "Zap",
  },
];

export const certificatesCompleted: CertificateEntry[] = [
  {
    title: "Google Hacking II – Dorks Comandos para Hackear",
    issuer: "Udemy",
    category: "Ciberseguridad",
    date: "2025",
    image: googleHackingCertificate,
    imageAlt: "Certificado de Google Hacking II – Dorks Comandos para Hackear",
  },
  {
    title: "Seguridad digital para tu día a día",
    issuer: "Google / Santander Open Academy",
    category: "Ciberseguridad",
    date: "2026",
    image: digitalSecurityCertificate,
    imageAlt: "Certificado de Seguridad digital para tu día a día",
  },
  {
    title: "Python",
    issuer: "Google / Santander Open Academy",
    category: "Desarrollo",
    date: "2024",
    image: pythonCertificate,
    imageAlt: "Certificado de Python",
  },
  {
    title: "Cómo Programar Aplicaciones Desde Cero",
    issuer: "HoyAprendo",
    category: "Desarrollo",
    date: "11 abr 2026",
    image: programmingCertificate,
    imageAlt: "Certificado de Cómo Programar Aplicaciones Desde Cero",
  },
  {
    title: "Curso de Páginas Web en WordPress",
    issuer: "HoyAprendo",
    category: "Diseño y Web",
    date: "10 abr 2026",
    image: wordpressCertificate,
    imageAlt: "Certificado de Curso de Páginas Web en WordPress",
  },
  {
    title: "Aprende Diseño en Canva",
    issuer: "HoyAprendo",
    category: "Diseño y Web",
    date: "2026",
    image: canvaCertificate,
    imageAlt: "Certificado de Aprende Diseño en Canva",
  },
  {
    title: "Google: Inteligencia Artificial y Productividad",
    issuer: "Google / Santander Open Academy",
    category: "IA",
    date: "2025",
    image: aiProductivityCertificate,
    imageAlt: "Certificado de Google: Inteligencia Artificial y Productividad",
  },
  {
    title: "Excel",
    issuer: "Google / Santander Open Academy",
    category: "Ofimática",
    date: "2026",
    image: excelCertificate,
    imageAlt: "Certificado de Excel",
  },
  {
    title: "Excel – de Intermedio a Avanzado",
    issuer: "Google / Santander Open Academy",
    category: "Ofimática",
    date: "2026",
    image: excelAdvancedCertificate,
    imageAlt: "Certificado de Excel de Intermedio a Avanzado",
  },
  {
    title: "Power BI",
    issuer: "Google / Santander Open Academy",
    category: "Ofimática",
    date: "2026",
    image: powerBiCertificate,
    imageAlt: "Certificado de Power BI",
  },
  {
    title: "Power BI Intermedio: Análisis y Modelado de Datos",
    issuer: "Google / Santander Open Academy",
    category: "Ofimática",
    date: "2026",
    image: powerBiAdvancedCertificate,
    imageAlt: "Certificado de Power BI Intermedio: Análisis y Modelado de Datos",
  },
  {
    title: "Domina la IA con Gemini",
    issuer: "Google / Santander Open Academy",
    category: "IA",
    date: "26 may 2026",
    image: geminiCertificate,
    imageAlt: "Certificado de Domina la IA con Gemini",
  },
  {
    title: "Domina VEO3: Guía Rápida para Principiantes",
    issuer: "HoyAprendo",
    category: "IA",
    date: "2026",
    image: veo3Certificate,
    imageAlt: "Certificado de Domina VEO3: Guía Rápida para Principiantes",
  },
    {
    title: "Cursor con Python: Desarrollo Inteligente con IA",
    issuer: "Google / Santander Open Academy",
    category: "IA",
    date: "2026",
    image: cursorPythonCertificate,
    imageAlt: "Certificado de Cursor con Python: Desarrollo Inteligente con IA",
  },
  {
    title: "Lidera a Toda Velocidad: Lecciones de la Fórmula 1®",
    issuer: "Google / Santander Open Academy",
    category: "Otros",
    date: "2026",
    image: formula1Certificate,
    imageAlt: "Certificado de Lidera a Toda Velocidad: Lecciones de la Formula 1",
  },
  {
    title: "Fundamentos de ChatGPT",
    issuer: "Google / Santander Open Academy",
    category: "IA",
    date: "2026",
    image: chatgptFundamentalsCertificate,
    imageAlt: "Certificado de Fundamentos de ChatGPT",
  },
];

export const certificatesPending: CertificateEntry[] = [
  {
    title: "Copilots sin calificación",
    issuer: "Google / Santander Open Academy",
    category: "IA",
    date: "2026",
  },
  {
    title: "Copilot: Domina la IA en Microsoft 365",
    issuer: "Google / Santander Open Academy",
    category: "IA",
    date: "2026",
  },
  {
    title: "Business English: Listening and Communication Skills - Part 1",
    issuer: "Google / Santander Open Academy",
    category: "Idiomas",
    date: "2026",
  },
  {
    title: "Inglés para Entrevistas y Networking",
    issuer: "Google / Santander Open Academy",
    category: "Idiomas",
    date: "2026",
  },
  {
    title: "Introducción a la Ciencia de Datos",
    issuer: "Google / Santander Open Academy",
    category: "Ofimática",
    date: "2026",
  },
  {
    title: "Gestión de Proyectos y Fundamentos de Metodología Agile",
    issuer: "Google / Santander Open Academy",
    category: "Otros",
    date: "2026",
  },
  {
    title: "Innovación y Creatividad: Desarrolla tu Pensamiento Creativo",
    issuer: "Google / Santander Open Academy",
    category: "Otros",
    date: "2026",
  },
  {
    title: "Storytelling en el Marketing Digital",
    issuer: "Google / Santander Open Academy",
    category: "Otros",
    date: "2026",
  },
  {
    title: "Liderazgo en el Entorno Digital",
    issuer: "Google / Santander Open Academy",
    category: "Otros",
    date: "2026",
  },
  {
    title: "English Fundamentals: Successful Networking and Interviews",
    issuer: "Google / Santander Open Academy",
    category: "Idiomas",
    date: "2026",
  },
  {
    title: "Marketing Automation",
    issuer: "Google / Santander Open Academy",
    category: "Otros",
    date: "2026",
  },
];
