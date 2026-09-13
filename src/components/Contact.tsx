import { profile } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#eaf3e9]/50" />

      <div className="relative mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight">Contacto</h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          ¿Quieres hablar de un proyecto o una oportunidad? Escríbeme.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-[10px] bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2f6f65]"
          >
            {profile.email}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border-[1.5px] border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-card"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
