"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/85 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "border-border shadow-[0_8px_24px_-16px_rgba(31,46,51,0.35)]"
          : "border-transparent shadow-none"
      }`}
    >
      <div className="relative mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors hover:text-foreground ${
                activeHref === link.href
                  ? "font-semibold text-foreground"
                  : "text-muted"
              }`}
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
