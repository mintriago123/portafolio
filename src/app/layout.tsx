import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { profile } from "@/lib/profile";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Michael Intriago — Portafolio";
const description = "Portafolio de proyectos de Michael Intriago.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: profile.name,
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: profile.siteUrl,
    sameAs: [profile.githubUrl],
  };

  return (
    <html lang="es" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
