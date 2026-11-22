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
  metadataBase: new URL("https://samperingenieria.vercel.app"),
  title: {
    default:
      "Samper Ingeniería | ViaAnalyzer PRO — Auditoría Vial, V85 y Civil 3D",
    template: "%s | Samper Ingeniería",
  },
  description:
    "Consultoría y auditoría de seguridad vial automatizada desde Civil 3D (LandXML). Cálculo de velocidad operacional V85 (Método Lamm), hallazgos HV y señalización bajo normativa INVÍAS (Colombia), MTC (Perú) y MOP (Chile).",
  keywords: [
    "Samper Ingeniería",
    "ViaAnalyzer PRO",
    "auditoría de seguridad vial",
    "análisis geométrico vial Civil 3D",
    "velocidad operacional V85",
    "Método Lamm 1999",
    "hallazgos HV visibilidad",
    "señalización vial INVÍAS",
    "normativa vial MTC Perú",
    "normativa vial MOP Chile",
    "LandXML Civil 3D",
  ],
  authors: [{ name: "Samper Ingeniería y Topografía" }],
  creator: "Samper Ingeniería y Topografía",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "vV1jlLOZlWIYAg7cyeoC8owR2DNEy1iFyRH_fTOxPjU",
  },
  alternates: {
    canonical: "https://samperingenieria.vercel.app",
    languages: {
      "es-CO": "https://samperingenieria.vercel.app",
      "es-PE": "https://samperingenieria.vercel.app",
      "es-CL": "https://samperingenieria.vercel.app",
      es: "https://samperingenieria.vercel.app",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://samperingenieria.vercel.app",
    siteName: "Samper Ingeniería y Topografía",
    title:
      "Samper Ingeniería | Auditoría Vial Inteligente, V85 y Validación Civil 3D",
    description:
      "Procesamos tu modelo LandXML de Civil 3D y entregamos informes técnicos QA/QC con hallazgos HV, V85 (Método Lamm) y señalización bajo normativa INVÍAS, MTC y MOP.",
    images: [
      {
        url: "/images/hero/Hero.png",
        width: 1400,
        height: 800,
        alt: "ViaAnalyzer PRO — Auditoría Vial y Señalización | Samper Ingeniería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samper Ingeniería | ViaAnalyzer PRO — Auditoría Vial y Civil 3D",
    description:
      "Auditoría de seguridad vial, V85 (Método Lamm) y validación geométrica bajo normativa INVÍAS, MTC y MOP.",
    images: ["/images/hero/Hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Samper Ingeniería y Topografía",
  alternateName: "ViaAnalyzer PRO",
  url: "https://samperingenieria.vercel.app",
  logo: "https://samperingenieria.vercel.app/images/logo/Logo%20Samper%20Ingenieria.png",
  image: "https://samperingenieria.vercel.app/images/hero/Hero.png",
  description:
    "Ingeniería especializada en auditoría de seguridad vial, validación geométrica en Civil 3D, cálculo de velocidad operacional V85 (Método Lamm), detección de hallazgos HV y diseño de señalización bajo normativa INVÍAS, MTC y MOP.",
  areaServed: [
    { "@type": "Country", name: "Colombia" },
    { "@type": "Country", name: "Perú" },
    { "@type": "Country", name: "Chile" },
  ],
  knowsAbout: [
    "Auditoría de Seguridad Vial",
    "Diseño Geométrico de Carreteras",
    "Velocidad Operacional V85",
    "Método Lamm 1999",
    "Autodesk Civil 3D",
    "LandXML",
    "Normativa INVÍAS",
    "Normativa MTC Perú",
    "Normativa MOP Chile",
    "Señalización Vial",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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