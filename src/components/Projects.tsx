import { getGithubRepos } from "@/lib/github";
import { profile } from "@/lib/profile";
import ProjectCard from "./ProjectCard";

const FEATURED_COUNT = 9;

export default async function Projects() {
  const repos = await getGithubRepos(profile.github);
  const hidden: readonly string[] = profile.hiddenRepos;
  const visible = repos.filter((repo) => !hidden.includes(repo.name));
  const featured = visible.slice(0, FEATURED_COUNT);

  return (
    <section id="proyectos" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Proyectos</h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Repositorios públicos obtenidos directamente desde GitHub.
      </p>

      {featured.length === 0 ? (
        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
          No se pudieron cargar los proyectos en este momento.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featured.map((repo) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.homepage || repo.url}
              language={repo.language}
              stars={repo.stars}
            />
          ))}
        </div>
      )}

      <a
        href={`${profile.githubUrl}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-sm font-medium underline underline-offset-4"
      >
        Ver todos los repositorios en GitHub →
      </a>
    </section>
  );
}
