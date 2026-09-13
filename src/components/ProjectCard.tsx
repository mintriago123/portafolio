type ProjectCardProps = {
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  stars?: number;
  owner?: string;
};

export default function ProjectCard({
  name,
  description,
  url,
  language,
  stars,
  owner,
}: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-2xl border border-black/[.08] p-5 transition-colors hover:border-black/[.2] dark:border-white/[.08] dark:hover:border-white/[.2]"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium tracking-tight group-hover:underline">
          {name}
        </h3>
        {!!stars && stars > 0 && (
          <span className="flex shrink-0 items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            ★ {stars}
          </span>
        )}
      </div>
      <p className="line-clamp-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
        {description || "Sin descripción."}
      </p>
      <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {language && <span>{language}</span>}
        {language && owner && <span>·</span>}
        {owner && <span>con @{owner}</span>}
      </div>
    </a>
  );
}
