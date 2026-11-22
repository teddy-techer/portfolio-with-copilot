import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teddy Techer — Développeur web à Avignon",
  description:
    "Développeur web indépendant depuis 2021 à Avignon. Découvrez les projets, le parcours et les compétences de Teddy Techer.",
  applicationName: "Portfolio de Teddy Techer",
  openGraph: {
    title: "Teddy Techer — Développeur web à Avignon",
    description:
      "Projets web, parcours et compétences de Teddy Techer, développeur web indépendant à Avignon.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
