import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Metodologia from "@/components/Metodologia";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ViaAnalyzer PRO | Auditoría Vial, Señalización Inteligente y Seguridad Vial",
  description: "Soluciones avanzadas para auditoría vial, validación geométrica, análisis operacional y señalización inteligente bajo normativa de Colombia, Perú y Chile.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Stats />
      <Features />
      <Metodologia />
      <CaseStudies />
      <Pricing />
      <Contact />
    </>
  );
}