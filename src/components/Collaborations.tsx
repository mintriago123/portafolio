import { profile } from "@/lib/profile";
import StaggerReveal from "./StaggerReveal";

export default function Collaborations() {
  return (
    <section
      id="colaboraciones"
      className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16"
    >
      <span className="text-sm font-semibold text-accent">
        Trabajo en equipo
      </span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">
        Colaboraciones
      </h2>
      <p className="mt-2 text-sm text-muted">
        Proyectos de otras personas en los que he contribuido con código.
      </p>

      <StaggerReveal className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {profile.collaborations.map((project, index) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--stagger-i": index } as React.CSSProperties}
            className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-6 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
          >
            <h3 className="font-bold tracking-tight">{project.name}</h3>
            <p className="text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <p className="text-xs text-subtle">
              Equipo: {project.collaborators.map((c) => `@${c}`).join(", ")}
            </p>
            <span className="w-fit rounded-full border border-border bg-tag px-2.5 py-1 text-xs font-medium text-foreground">
              {project.language}
            </span>
          </a>
        ))}
      </StaggerReveal>
    </section>
  );
}
