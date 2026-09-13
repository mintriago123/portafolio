import { profile } from "@/lib/profile";

export default function Collaborations() {
  return (
    <section id="colaboraciones" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight">Colaboraciones</h2>
      <p className="mt-2 text-sm text-muted">
        Proyectos de otras personas en los que he contribuido con código.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {profile.collaborations.map((project) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-bold tracking-tight">{project.name}</h3>
              <span className="shrink-0 text-xs text-subtle">
                con @{project.owner}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <span className="w-fit rounded-full border border-border bg-tag px-2.5 py-1 text-xs font-medium text-[#374448]">
              {project.language}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
