import Link from "next/link";
import { profile } from "@/lib/profile";
import MobileNav from "./MobileNav";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#colaboraciones", label: "Colaboraciones" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-muted sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <MobileNav links={links} />
      </div>
    </header>
  );
}
