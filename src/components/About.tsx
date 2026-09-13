import { profile } from "@/lib/profile";

export default function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Sobre mí</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-black/[.08] px-3 py-1 text-sm text-zinc-700 dark:border-white/[.145] dark:text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
