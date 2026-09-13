import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl border-t border-border px-6 py-10 text-sm text-subtle">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
