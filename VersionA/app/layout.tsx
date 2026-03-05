import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adipa.cl"),
  title: {
    default: "ADIPA | Catálogo de Cursos",
    template: "%s | ADIPA",
  },
  description:
    "Landing de catálogo de cursos con filtros por categoría, cards informativas y formulario de contacto.",
  keywords: [
    "ADIPA",
    "cursos de psicología",
    "diplomados",
    "formación continua",
    "educación",
    "liderazgo y bienestar",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "ADIPA",
    title: "ADIPA | Catálogo de Cursos",
    description:
      "Explora cursos y diplomados con formación aplicada para potenciar tu desarrollo profesional.",
    locale: "es_CL",
    images: [
      {
        url: "/logo-adipa.svg",
        width: 1200,
        height: 630,
        alt: "ADIPA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADIPA | Catálogo de Cursos",
    description:
      "Explora cursos y diplomados con formación aplicada para potenciar tu desarrollo profesional.",
    images: ["/logo-adipa.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] antialiased">
        <a
          href="#contenido-principal"
          className="sr-only z-50 rounded-md bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
