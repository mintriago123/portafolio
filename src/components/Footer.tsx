import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-zinc-500 dark:text-zinc-400">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
