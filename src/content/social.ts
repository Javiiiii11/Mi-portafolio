export const social = [
  { url: "mailto:javier.rod.jim2005@gmail.com", name: "mail" },
  { url: "https://github.com/Javiiiii11", name: "github" },
  { url: "https://www.linkedin.com/in/javier-rodr%C3%ADguez-181701250/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
