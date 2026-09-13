import { getGithubRepos } from "@/lib/github";
import { profile } from "@/lib/profile";
import { projectDetails } from "@/lib/projectDetails";
import ProjectCard from "./ProjectCard";
import StaggerReveal from "./StaggerReveal";

const FEATURED_COUNT = 9;

export default async function ProjectsGrid() {
  const repos = await getGithubRepos(profile.github);
  const hidden: readonly string[] = profile.hiddenRepos;
  const visible = repos.filter((repo) => !hidden.includes(repo.name));
  const featured = visible.slice(0, FEATURED_COUNT);

  if (featured.length === 0) {
    return (
      <p className="mt-8 text-sm text-subtle">
        No se pudieron cargar los proyectos en este momento.
      </p>
    );
  }

  return (
    <StaggerReveal className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
      {featured.map((repo, index) => {
        const details = projectDetails[repo.name];
        return (
          <ProjectCard
            key={repo.id}
            index={index}
            name={repo.name}
            category={details?.category ?? "Proyecto"}
            icon={details?.icon ?? "code"}
            tagline={details?.tagline ?? repo.description ?? "Sin descripción."}
            highlights={details?.highlights ?? []}
            tags={details?.tags ?? (repo.language ? [repo.language] : [])}
            url={repo.homepage || repo.url}
            stars={repo.stars}
            featured={details?.featured}
          />
        );
      })}
    </StaggerReveal>
  );
}
