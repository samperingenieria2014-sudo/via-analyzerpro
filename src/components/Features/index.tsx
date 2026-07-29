"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import { getFeaturesData } from "./featuresData";
import VideoDemo from "../Video";
import { useLanguage } from "@/context/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  const featuresData = getFeaturesData(t);

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          {/* Encabezado Principal Traducido */}
          <SectionTitle
            title={t?.Features?.mainTitle || "Herramientas avanzadas para seguridad vial y análisis geométrico"}
            paragraph={t?.Features?.mainParagraph || "Automatización técnica orientada a auditorías viales, validación geométrica, señalización y evaluación operacional bajo normativa latinoamericana."}
            center
          />

          {/* Tarjetas de Características/Servicios */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          {/* ── Sección de Descargas (Brochures) ── */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            
            {/* Tarjeta 1: Señalización y Seguridad Vial */}
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-8 text-center backdrop-blur-sm sm:flex-row sm:text-left">
              {/* Icono PDF */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>

              {/* Texto Traducido */}
              <div className="flex-grow">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {t?.Features?.brochure1Tag || "Brochure Especializado"}
                </p>
                <h4 className="mb-1 text-base font-bold text-black dark:text-white">
                  {t?.Features?.brochure1Title || "Señalización y Seguridad Vial"}
                </h4>
                <p className="text-xs text-body-color">
                  {t?.Features?.brochure1Desc || "Metodología V85, auditoría HV, paquetes de servicio y casos reales — 5 páginas."}
                </p>
              </div>

              {/* Botón descarga */}
              <a
                href="/Senalizacion_Vial_Brochure_1.pdf"
                download="Senalizacion_Vial_Brochure_1.pdf"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 w-full sm:w-auto justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF
              </a>
            </div>

            {/* Tarjeta 2: Servicios Generales */}
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-8 py-8 text-center backdrop-blur-sm sm:flex-row sm:text-left">
              {/* Icono PDF */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>

              {/* Texto Traducido */}
              <div className="flex-grow">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {t?.Features?.brochure2Tag || "Brochure Corporativo"}
                </p>
                <h4 className="mb-1 text-base font-bold text-black dark:text-white">
                  {t?.Features?.brochure2Title || "Infraestructura Vial Inteligente"}
                </h4>
                <p className="text-xs text-body-color">
                  {t?.Features?.brochure2Desc || "Portafolio de diseño, automatización técnica y servicios generales de ingeniería — 13 páginas."}
                </p>
              </div>

              {/* Botón descarga */}
              <a
                href="/Servicios_Generales_Samper_Ingenieria.pdf"
                download="Servicios_Generales_Samper_Ingenieria.pdf"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90 w-full sm:w-auto justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF
              </a>
            </div>

          </div>

          {/* ── Módulos en Acción (Video Demo) ── */}
          <VideoDemo />

        </div>
      </section>
    </>
  );
};

export default Features;