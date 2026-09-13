import { profile } from "@/lib/profile";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#eaf3e9]/70" />

      <div className="relative mx-auto max-w-4xl px-6 py-16">
        <span className="text-sm font-semibold text-accent">Hablemos</span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Contacto</h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted">
          ¿Quieres hablar de un proyecto o una oportunidad? Escríbeme.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-[10px] bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#2f6f65] hover:shadow-lg"
          >
            {profile.email}
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[10px] border-[1.5px] border-border px-6 py-3.5 text-sm font-semibold transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-card hover:shadow-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
