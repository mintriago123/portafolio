import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section id="top" className="relative scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-48 h-[520px] w-[520px] rounded-full bg-accent-soft/70" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[440px] w-[440px] rounded-full bg-mint/60" />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-5 px-6 py-24 sm:py-32">
        <span className="animate-fade-in-up text-sm font-semibold text-accent">
          Hola, soy
        </span>
        <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight [animation-delay:80ms] sm:text-5xl">
          {profile.name}
        </h1>
        <p className="animate-fade-in-up text-xl font-semibold text-accent [animation-delay:160ms]">
          {profile.role}
        </p>
        <p className="animate-fade-in-up max-w-xl text-base leading-7 text-muted [animation-delay:240ms]">
          {profile.bio}
        </p>
        <div className="animate-fade-in-up flex gap-4 pt-2 [animation-delay:320ms]">
          <a
            href="#proyectos"
            className="flex items-center gap-2 rounded-[10px] bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg"
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
            className="rounded-[10px] border-[1.5px] border-border px-6 py-3.5 text-sm font-semibold transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-card hover:shadow-lg"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
