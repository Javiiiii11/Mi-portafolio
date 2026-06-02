export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "kotlin"
  | "jetpack-compose"
  | "flask"
  | "python"
  | "firebase"
  | "android-studio"
  | "pycharm"
  | "vscode"
  | "android"
  | "windows"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  kotlin: "Kotlin",
  "jetpack-compose": "Jetpack Compose",
  flask: "Flask",
  python: "Python",
  firebase: "Firebase",
  "android-studio": "Android Studio",
  pycharm: "PyCharm",
  vscode: "VS Code",
  android: "Android",
  windows: "Windows",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
} as const satisfies Record<TagVariant, string>;
