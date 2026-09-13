import type { Repo } from "@/lib/github";

export default function ProjectCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.homepage || repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-2xl border border-black/[.08] p-5 transition-colors hover:border-black/[.2] dark:border-white/[.08] dark:hover:border-white/[.2]"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium tracking-tight group-hover:underline">
          {repo.name}
        </h3>
        {repo.stars > 0 && (
          <span className="flex shrink-0 items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            ★ {repo.stars}
          </span>
        )}
      </div>
      <p className="line-clamp-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
        {repo.description || "Sin descripción."}
      </p>
      {repo.language && (
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {repo.language}
        </span>
      )}
    </a>
  );
}
