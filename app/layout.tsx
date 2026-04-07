import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "IDEARTE Producciones | La Certeza de su Exito",
  description:
    "Productora audiovisual guatemalteca con mas de 15 anos de experiencia. Produccion musical, visual y de espectaculos. Himnos institucionales, videos corporativos, jingles, spots de TV y eventos de alto impacto.",
  keywords: [
    "produccion musical Guatemala",
    "produccion audiovisual",
    "videos corporativos Guatemala",
    "eventos Guatemala",
    "jingles publicitarios",
    "spots de TV",
    "IDEARTE Producciones",
    "productora Guatemala",
  ],
  openGraph: {
    title: "IDEARTE Producciones | La Certeza de su Exito",
    description: "Productora audiovisual guatemalteca especializada en crear experiencias memorables.",
    type: "website",
    locale: "es_GT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
