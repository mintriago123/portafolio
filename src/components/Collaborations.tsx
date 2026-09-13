import { profile } from "@/lib/profile";
import ProjectCard from "./ProjectCard";

export default function Collaborations() {
  return (
    <section id="colaboraciones" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">
        Colaboraciones
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Proyectos de otras personas en los que he contribuido con código.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {profile.collaborations.map((project) => (
          <ProjectCard
            key={project.url}
            name={project.name}
            description={project.description}
            url={project.url}
            language={project.language}
            owner={project.owner}
          />
        ))}
      </div>
    </section>
  );
}
