import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-24 sm:py-32"
    >
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Hola, soy
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.name}
      </h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">
        {profile.role}
      </p>
      <p className="max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {profile.bio}
      </p>
      <div className="flex gap-4 pt-2">
        <a
          href="#proyectos"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          Ver proyectos
        </a>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/[.08] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
