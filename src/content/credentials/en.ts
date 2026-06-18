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

import type { TitleEntry, CertificateEntry } from "./index";

export const academicTitles: TitleEntry[] = [
  {
    title: "Compulsory Secondary Education (ESO)",
    issuer: "IES Las Salinas",
    note: "Basic compulsory education.",
    tags: ["Basic Education"],
    icon: "Book",
  },
  {
    title: "Degree in Microcomputer Systems and Networks (SMR)",
    issuer: "Vocational Training",
    note: "Technical training in systems and networks.",
    tags: ["SMR", "Systems"],
    icon: "Cpu",
  },
  {
    title: "Degree in Multiplatform Application Development (DAM)",
    issuer: "Vocational Training",
    note: "Multiplatform application development.",
    tags: ["DAM", "Android"],
    icon: "Code",
  },
  {
    title: "Master's Degree in Cybersecurity in ICT Environments",
    issuer: "In progress · concludes in June 2026",
    note: "Specialization in cybersecurity (in progress).",
    tags: ["Cybersecurity", "In Progress"],
    icon: "Shield",
  },
];

export const otherTitles: TitleEntry[] = [
  {
    title: "Automated External Defibrillator (AED) Operation and Handling",
    issuer: "ERC (European Resuscitation Council)",
    note: "AED training according to ERC guidelines.",
    tags: ["Health", "Emergencies"],
    icon: "Heart",
  },
  {
    title: "Comprehensive Pool Maintenance",
    issuer: "Vocational Training",
    note: "Maintenance and safety of installations.",
    tags: ["Pools", "Maintenance"],
    icon: "Droplet",
  },
  {
    title: "Lifeguard in Pools and Aquatic Facilities",
    issuer: "Vocational Training",
    note: "Water rescue and prevention.",
    tags: ["Lifeguarding", "Safety"],
    icon: "AlertCircle",
  },
  {
    title: "First Aid",
    issuer: "Accredited Course",
    note: "Initial emergency care.",
    tags: ["Health"],
    icon: "Heart",
  },
  {
    title: "Emergency Management",
    issuer: "Specialized Training",
    note: "Coordination in crisis situations.",
    tags: ["Emergencies", "Management"],
    icon: "AlertCircle",
  },
  {
    title: "Lifeguarding Services Coordinator",
    issuer: "Specialized Training",
    note: "Planning and coordination of lifeguard teams.",
    tags: ["Coordination", "Lifeguarding"],
    icon: "Users",
  },
  {
    title: "Youth Activities Monitor",
    issuer: "Leisure and Free Time Monitor",
    note: "Group dynamics and activities.",
    tags: ["Leisure"],
    icon: "Users",
  },
  {
    title: "1st Degree Black Belt in Judo",
    issuer: "Judo",
    note: "Technical level and discipline.",
    tags: ["Sports"],
    icon: "Zap",
  },
];

export const certificatesCompleted: CertificateEntry[] = [
  {
    title: "Google Hacking II – Dorks Commands for Hacking",
    issuer: "Udemy",
    category: "Cybersecurity",
    date: "2025",
    image: googleHackingCertificate,
    imageAlt: "Google Hacking II – Dorks Commands for Hacking Certificate",
  },
  {
    title: "Digital Security for Your Daily Life",
    issuer: "Google / Santander Open Academy",
    category: "Cybersecurity",
    date: "2026",
    image: digitalSecurityCertificate,
    imageAlt: "Digital Security for Your Daily Life Certificate",
  },
  {
    title: "Python",
    issuer: "Google / Santander Open Academy",
    category: "Development",
    date: "2024",
    image: pythonCertificate,
    imageAlt: "Python Certificate",
  },
  {
    title: "How to Program Applications from Scratch",
    issuer: "HoyAprendo",
    category: "Development",
    date: "Apr 11, 2026",
    image: programmingCertificate,
    imageAlt: "How to Program Applications from Scratch Certificate",
  },
  {
    title: "Web Pages Course in WordPress",
    issuer: "HoyAprendo",
    category: "Design and Web",
    date: "Apr 10, 2026",
    image: wordpressCertificate,
    imageAlt: "Web Pages Course in WordPress Certificate",
  },
  {
    title: "Learn Design in Canva",
    issuer: "HoyAprendo",
    category: "Design and Web",
    date: "2026",
    image: canvaCertificate,
    imageAlt: "Learn Design in Canva Certificate",
  },
  {
    title: "Google: Artificial Intelligence and Productivity",
    issuer: "Google / Santander Open Academy",
    category: "AI",
    date: "2025",
    image: aiProductivityCertificate,
    imageAlt: "Google: Artificial Intelligence and Productivity Certificate",
  },
  {
    title: "Excel",
    issuer: "Google / Santander Open Academy",
    category: "Office Tools",
    date: "2026",
    image: excelCertificate,
    imageAlt: "Excel Certificate",
  },
  {
    title: "Excel – From Intermediate to Advanced",
    issuer: "Google / Santander Open Academy",
    category: "Office Tools",
    date: "2026",
    image: excelAdvancedCertificate,
    imageAlt: "Excel – From Intermediate to Advanced Certificate",
  },
  {
    title: "Power BI",
    issuer: "Google / Santander Open Academy",
    category: "Office Tools",
    date: "2026",
    image: powerBiCertificate,
    imageAlt: "Power BI Certificate",
  },
  {
    title: "Power BI Intermediate: Data Analysis and Modeling",
    issuer: "Google / Santander Open Academy",
    category: "Office Tools",
    date: "2026",
    image: powerBiAdvancedCertificate,
    imageAlt: "Power BI Intermediate: Data Analysis and Modeling Certificate",
  },
  {
    title: "Master AI with Gemini",
    issuer: "Google / Santander Open Academy",
    category: "AI",
    date: "May 26, 2026",
    image: geminiCertificate,
    imageAlt: "Master AI with Gemini Certificate",
  },
  {
    title: "Master VEO3: Quick Guide for Beginners",
    issuer: "Google / Santander Open Academy",
    category: "AI",
    date: "2026",
    image: veo3Certificate,
    imageAlt: "Master VEO3: Quick Guide for Beginners Certificate",
  },
  {
    title: "Cursor with Python: Intelligent Development with AI",
    issuer: "Google / Santander Open Academy",
    category: "Development",
    date: "2026",
    image: cursorPythonCertificate,
    imageAlt: "Cursor with Python: Intelligent Development with AI Certificate",
  },
  {
    title: "Lead at Full Speed: Lessons from Formula 1®",
    issuer: "Google / Santander Open Academy",
    category: "Other",
    date: "2026",
    image: formula1Certificate,
    imageAlt: "Lead at Full Speed: Lessons from Formula 1 Certificate",
  },
];

export const certificatesPending: CertificateEntry[] = [

  {
    title: "Copilots without Rating",
    issuer: "Google / Santander Open Academy",
    category: "AI",
    date: "2026",
  },
  {
    title: "ChatGPT Fundamentals",
    issuer: "Google / Santander Open Academy",
    category: "AI",
    date: "2026",
  },
  {
    title: "Copilot: Master AI in Microsoft 365",
    issuer: "Google / Santander Open Academy",
    category: "AI",
    date: "2026",
  },
  {
    title: "Business English: Listening and Communication Skills - Part 1",
    issuer: "Santander",
    category: "Languages",
    date: "2026",
  },
  {
    title: "English for Interviews and Networking",
    issuer: "Santander",
    category: "Languages",
    date: "2026",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Google / Santander Open Academy",
    category: "Office Tools",
    date: "2026",
  },
  {
    title: "Project Management and Agile Methodology Fundamentals",
    issuer: "Google / Santander Open Academy",
    category: "Other",
    date: "2026",
  },
  {
    title: "Innovation and Creativity: Develop Your Creative Thinking",
    issuer: "Google / Santander Open Academy",
    category: "Other",
    date: "2026",
  },
  {
    title: "Digital Marketing Storytelling",
    issuer: "Google / Santander Open Academy",
    category: "Other",
    date: "2026",
  },
  {
    title: "Leadership in the Digital Environment",
    issuer: "Google / Santander Open Academy",
    category: "Other",
    date: "2026",
  },
  {
    title: "English Fundamentals: Successful Networking and Interviews",
    issuer: "Google / Santander Open Academy",
    category: "Languages",
    date: "2026",
  },
  {
    title: "Marketing Automation",
    issuer: "Google / Santander Open Academy",
    category: "Other",
    date: "2026",
  },
];
