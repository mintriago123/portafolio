import { Suspense } from "react";
import { profile } from "@/lib/profile";
import ProjectsGrid from "./ProjectsGrid";
import ProjectsGridSkeleton from "./ProjectsGridSkeleton";

export default function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Una selección de proyectos propios, obtenida en vivo desde GitHub.
        Cada tarjeta resume el objetivo, el stack y lo más destacado del
        trabajo.
      </p>

      <Suspense fallback={<ProjectsGridSkeleton />}>
        <ProjectsGrid />
      </Suspense>

      <a
        href={`${profile.githubUrl}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-sm font-semibold text-accent underline underline-offset-4"
      >
        Ver todos los repositorios en GitHub →
      </a>
    </section>
  );
}
