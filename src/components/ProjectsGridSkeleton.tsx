function CardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-4 rounded-2xl border border-border bg-card p-7">
      <div className="flex items-center justify-between">
        <div className="h-5 w-28 rounded-full bg-tag" />
        <div className="h-4 w-8 rounded bg-tag" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-2/3 rounded bg-tag" />
        <div className="h-3.5 w-full rounded bg-tag" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-3.5 w-5/6 rounded bg-tag" />
        <div className="h-3.5 w-3/4 rounded bg-tag" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-16 rounded-full bg-tag" />
        <div className="h-6 w-16 rounded-full bg-tag" />
        <div className="h-6 w-16 rounded-full bg-tag" />
      </div>
    </div>
  );
}

export default function ProjectsGridSkeleton() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
