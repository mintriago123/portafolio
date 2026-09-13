export const profile = {
  name: "Michael Intriago",
  role: "Desarrollador de Software",
  bio: "Construyo aplicaciones web, herramientas y proyectos personales. Me interesan el desarrollo full-stack, los sistemas y los videojuegos.",
  github: "mintriago123",
  githubUrl: "https://github.com/mintriago123",
  email: "cadall1313@gmail.com",
  location: "Ecuador",
  // Repos que no deben aparecer en Proyectos (duplicados, reemplazados, etc.)
  hiddenRepos: ["bancoalimentostest"],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "C#",
    "Godot",
    "Nix / Linux",
  ],
  collaborations: [
    {
      name: "CliMax",
      collaborators: ["AnThony69x", "KristhianBello", "EmilioSle"],
      url: "https://github.com/AnThony69x/CliMax",
      description: "Aplicación móvil de alertas climáticas en tiempo real.",
      language: "TypeScript",
    },
    {
      name: "SOUNDLY",
      collaborators: ["Walthergl66", "EmilioSle", "Akamnex666", "Sleide69"],
      url: "https://github.com/Walthergl66/SOUNDLY",
      description:
        "Aplicación web para gestión y reproducción de contenido de audio — Next.js y Supabase.",
      language: "TypeScript",
    },
    {
      name: "VELVET",
      collaborators: ["Walthergl66", "EmilioSle", "Akamnex666", "Sleide69"],
      url: "https://github.com/Walthergl66/VELVET",
      description: "Proyecto de comercio electrónico Velvet.",
      language: "TypeScript",
    },
    {
      name: "Visualización de homicidios en Ecuador",
      collaborators: ["EZMayk", "KristhianBello"],
      url: "https://github.com/EZMayk/visualizacion-de-homicidios-en-el-ecuador",
      description:
        "Dashboard de visualización de datos sobre homicidios en Ecuador.",
      language: "TypeScript",
    },
  ],
} as const;

export type Collaboration = (typeof profile.collaborations)[number];
