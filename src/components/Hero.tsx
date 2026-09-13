import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -right-40 -top-48 h-[520px] w-[520px] rounded-full bg-accent-soft/70" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[440px] w-[440px] rounded-full bg-[#eaf3e9]/60" />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-5 px-6 py-24 sm:py-32">
        <span className="text-sm font-semibold text-accent">Hola, soy</span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-xl font-semibold text-accent">{profile.role}</p>
        <p className="max-w-xl text-base leading-7 text-muted">
          {profile.bio}
        </p>
        <div className="flex gap-4 pt-2">
          <a
            href="#proyectos"
            className="flex items-center gap-2 rounded-[10px] bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#2f6f65]"
          >
            Ver proyectos
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#contacto"
            className="rounded-[10px] border-[1.5px] border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-card"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
