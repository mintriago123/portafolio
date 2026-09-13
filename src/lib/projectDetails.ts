import type { CategoryIconKey } from "@/components/icons";

export type ProjectDetail = {
  category: string;
  icon: CategoryIconKey;
  tagline: string;
  highlights: string[];
  tags: string[];
  featured?: boolean;
};

// Curaduría manual para enriquecer las tarjetas de Proyectos.
// Repos que no aparecen aquí se muestran con los datos crudos de GitHub.
export const projectDetails: Record<string, ProjectDetail> = {
  "FPC-10a5-9800": {
    category: "Sistemas · Linux",
    icon: "systems",
    tagline: "Driver e instalador del lector de huellas FPC para Linux.",
    highlights: [
      "Soporta Fedora, Fedora Atomic, Ubuntu y Arch",
      "Guías de instalación paso a paso por distro",
    ],
    tags: ["Nix", "Linux", "Drivers"],
  },
  ia_usabilidad: {
    category: "IA · Backend",
    icon: "ai",
    tagline:
      "Simulador ATS: sistema experto de matching entre vacantes y candidatos con IA.",
    highlights: [
      "Análisis semántico: entiende sinónimos y contexto",
      "Verificación automática de requisitos legales",
    ],
    tags: ["Python", "AGNO", "Groq"],
  },
  "kart-test-game-godot": {
    category: "Videojuego · Godot",
    icon: "game",
    tagline:
      "MichiKart: juego de carreras arcade estilo Mario Kart, hecho con Godot 4.",
    highlights: [
      "12 pistas seleccionables y 8 pilotos",
      "Contrarreloj con fantasma personal por pista",
    ],
    tags: ["Godot", "GDScript", "Game Dev"],
  },
  tesis_banco_alimentos: {
    category: "Web · Tesis",
    icon: "web",
    tagline:
      "Plataforma web para la gestión del banco de alimentos universitario.",
    highlights: [
      "Backend con Supabase / PostgreSQL",
      "Gestión de donaciones e inventario",
    ],
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  "poly-builder": {
    category: "Videojuego · Godot",
    icon: "game",
    tagline: "Prototipo de juego de construcción y simulación en Godot.",
    highlights: [
      "Sistemas de cámara, edificación y simulación",
      "Arquitectura modular por sistemas",
    ],
    tags: ["Godot", "GDScript", "Simulación"],
  },
  "proyecto-integrador": {
    category: "Proyecto integrador · Datos",
    icon: "data",
    tagline:
      "Pipeline de datos y modelo predictivo sobre personas desaparecidas en Ecuador.",
    highlights: [
      "ETL sobre datos oficiales abiertos",
      "Modelado predictivo con Machine Learning",
      "Dashboard interactivo de resultados",
    ],
    tags: ["Python", "Jupyter", "ML", "Vite"],
    featured: true,
  },
  "nixos-thinkbook-13s-arb-g4": {
    category: "Sistemas · Dotfiles",
    icon: "systems",
    tagline: "Configuración personal de NixOS con Home Manager y GNOME.",
    highlights: [
      "Estructura modular con Home Manager",
      "Ajustes de audio y herramientas de desarrollo",
    ],
    tags: ["Nix", "NixOS", "Linux"],
  },
};
