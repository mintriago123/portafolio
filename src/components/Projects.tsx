import { getGithubRepos } from "@/lib/github";
import { profile } from "@/lib/profile";
import { projectDetails } from "@/lib/projectDetails";
import ProjectCard from "./ProjectCard";

const FEATURED_COUNT = 9;

export default async function Projects() {
  const repos = await getGithubRepos(profile.github);
  const hidden: readonly string[] = profile.hiddenRepos;
  const visible = repos.filter((repo) => !hidden.includes(repo.name));
  const featured = visible.slice(0, FEATURED_COUNT);

  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-3xl font-bold tracking-tight">Proyectos</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Una selección de proyectos propios, obtenida en vivo desde GitHub.
        Cada tarjeta resume el objetivo, el stack y lo más destacado del
        trabajo.
      </p>

      {featured.length === 0 ? (
        <p className="mt-8 text-sm text-subtle">
          No se pudieron cargar los proyectos en este momento.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {featured.map((repo) => {
            const details = projectDetails[repo.name];
            return (
              <ProjectCard
                key={repo.id}
                name={repo.name}
                category={details?.category ?? "Proyecto"}
                tagline={details?.tagline ?? repo.description ?? "Sin descripción."}
                highlights={details?.highlights ?? []}
                tags={details?.tags ?? (repo.language ? [repo.language] : [])}
                url={repo.homepage || repo.url}
                stars={repo.stars}
                featured={details?.featured}
              />
            );
          })}
        </div>
      )}

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
