type ProjectCardProps = {
  name: string;
  category: string;
  tagline: string;
  highlights: string[];
  tags: string[];
  url: string;
  stars?: number;
  featured?: boolean;
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7l3.5 3.5L12 4" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 2h-3v10h10v-3M8 2h4v4M12 2L6 8" />
    </svg>
  );
}

export default function ProjectCard({
  name,
  category,
  tagline,
  highlights,
  tags,
  url,
  stars,
  featured,
}: ProjectCardProps) {
  if (featured) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-6 rounded-2xl bg-accent-dark p-8 text-[#f3f6f6] sm:col-span-2 sm:flex-row sm:justify-between"
      >
        <div className="flex max-w-md flex-col gap-3.5">
          <span className="w-fit rounded-full bg-[#2c4a46] px-2.5 py-1 text-xs font-semibold text-[#8fd9cb]">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:underline">
            {name}
          </h3>
          <p className="text-sm leading-relaxed text-[#b9c6c4]">{tagline}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#3a5a56] bg-[#2c4a46] px-2.5 py-1 text-xs font-medium text-[#dceeeb]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ul className="flex min-w-[260px] flex-col justify-center gap-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[#dceeeb]"
            >
              <CheckIcon className="mt-0.5 shrink-0 text-[#8fd9cb]" />
              {item}
            </li>
          ))}
        </ul>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-accent/40"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
          {category}
        </span>
        {!!stars && stars > 0 && (
          <span className="shrink-0 text-xs text-subtle">★ {stars}</span>
        )}
      </div>
      <div>
        <h3 className="mb-1.5 text-lg font-bold tracking-tight group-hover:underline">
          {name}
        </h3>
        <p className="text-sm text-muted">{tagline}</p>
      </div>
      {highlights.length > 0 && (
        <ul className="flex flex-col gap-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm leading-snug text-[#374448]"
            >
              <CheckIcon className="mt-0.5 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-tag px-2.5 py-1 text-xs font-medium text-[#374448]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-5 border-t border-[#eef2f1] pt-3.5">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-accent">
          Ver repositorio
          <ExternalLinkIcon />
        </span>
      </div>
    </a>
  );
}
