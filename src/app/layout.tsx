import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViaAnalyzer PRO | Auditoría Vial Inteligente",
  description: "Auditoría vial basada en análisis geométrico, velocidad V85 y normativas de Colombia (INVÍAS), Perú (MTC) y Chile (MOP).",
  verification: {
    google: "vV1jlLOZlWIYAg7cyeoC8owR2DNEy1iFyRH_fTOxPjU",
  },
  alternates: {
    canonical: "https://samperingenieria.vercel.app",
    languages: {
      "es-CO": "https://samperingenieria.vercel.app",
      "es-PE": "https://samperingenieria.vercel.app",
      "es-CL": "https://samperingenieria.vercel.app",
      "es": "https://samperingenieria.vercel.app",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head />
      <body className={`bg-black dark:bg-black ${inter.className}`}>
        <Providers>
          <div className="isolate">
            <Header />
            {children}
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}