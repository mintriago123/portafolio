import { profile } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
      <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
        ¿Quieres hablar de un proyecto o una oportunidad? Escríbeme.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          {profile.email}
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
