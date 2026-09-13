import { profile } from "@/lib/profile";

export default function About() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section id="sobre-mi" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-accent-soft/70" />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:flex-row sm:items-start">
        <div className="flex shrink-0 items-center justify-center sm:justify-start">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-accent-soft">
            <span className="text-3xl font-bold text-[#2f6f65]">
              {initials}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5">
          <div>
            <span className="text-sm font-semibold text-accent">
              Quién soy
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Sobre mí
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted">
            {profile.bio}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
