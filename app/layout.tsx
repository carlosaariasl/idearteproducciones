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
  title: "IDEARTE Producciones | Productora Audiovisual Guatemala",
  description:
    "Productora audiovisual especializada en produccion musical, visual y de espectaculos. Himnos institucionales, videos corporativos, eventos y mas.",
  keywords: [
    "produccion musical",
    "produccion audiovisual",
    "videos corporativos",
    "eventos Guatemala",
    "jingles",
    "spots de TV",
  ],
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
