import AboutSectionOne from "@/components/About/AboutSectionOne";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";

import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ViaAnalyzer PRO | Auditoría Vial, Señalización Inteligente y Seguridad Vial",
  description:
    "Soluciones avanzadas para auditoría vial, validación geométrica, análisis operacional y señalización inteligente bajo normativa de Colombia, Perú y Chile.",
};

export default function Home() {
  return (
    <>
      {/* Scroll automático */}
      <ScrollUp />

      {/* HERO */}
      <Hero />

      {/* FEATURES */}
      <Features />

      {/* ABOUT */}
      <AboutSectionOne />

      {/* CASE STUDIES */}
      <CaseStudies />

      {/* CONTACT */}
      <Contact />
    </>
  );
}