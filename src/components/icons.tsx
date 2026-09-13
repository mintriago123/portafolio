export type CategoryIconKey = "systems" | "ai" | "game" | "web" | "data" | "code";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Systems() {
  return (
    <svg viewBox="0 0 16 16" {...strokeProps}>
      <rect x="1" y="2.5" width="14" height="11" rx="1.5" />
      <path d="M3.5 6l2.5 2-2.5 2M8 10h4" />
    </svg>
  );
}

function Ai() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" stroke="none">
      <path d="M8 1.5c.6 2.8 1.7 3.9 4.5 4.5-2.8.6-3.9 1.7-4.5 4.5-.6-2.8-1.7-3.9-4.5-4.5 2.8-.6 3.9-1.7 4.5-4.5Z" />
    </svg>
  );
}

function Game() {
  return (
    <svg viewBox="0 0 16 16" {...strokeProps}>
      <rect x="1" y="5" width="14" height="7" rx="3.2" />
      <path d="M5 6.8v3.4M3.3 8.5h3.4" />
      <circle cx="11" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12.4" cy="9.3" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Web() {
  return (
    <svg viewBox="0 0 16 16" {...strokeProps}>
      <circle cx="8" cy="8" r="6.2" />
      <path d="M1.8 8h12.4M8 1.8c1.9 1.9 1.9 10.5 0 12.4M8 1.8c-1.9 1.9-1.9 10.5 0 12.4" />
    </svg>
  );
}

function Data() {
  return (
    <svg viewBox="0 0 16 16" {...strokeProps}>
      <path d="M2.5 13V9.5M6.3 13V5M10 13V7.2M13.5 13V2.8" />
    </svg>
  );
}

function Code() {
  return (
    <svg viewBox="0 0 16 16" {...strokeProps}>
      <path d="M5.5 4L2 8l3.5 4M10.5 4L14 8l-3.5 4" />
    </svg>
  );
}

const icons: Record<CategoryIconKey, () => React.JSX.Element> = {
  systems: Systems,
  ai: Ai,
  game: Game,
  web: Web,
  data: Data,
  code: Code,
};

export function CategoryIcon({
  icon,
  className,
}: {
  icon: CategoryIconKey;
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <span className={className}>
      <Icon />
    </span>
  );
}
