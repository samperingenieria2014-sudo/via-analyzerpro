import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import VideoDemo from "../Video";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Herramientas avanzadas para seguridad vial y análisis geométrico"
            paragraph="Automatización técnica orientada a auditorías viales, validación geométrica, señalización y evaluación operacional bajo normativa latinoamericana."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>

          {/* ── Brochure Download ── */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-10 py-8 text-center backdrop-blur-sm sm:flex-row sm:text-left">

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

              {/* Texto */}
              <div>
                <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary">
                  Brochure de servicios
                </p>
                <h4 className="mb-1 text-lg font-bold text-black dark:text-white">
                  Señalización y Seguridad Vial — Portafolio de Servicios
                </h4>
                <p className="text-sm text-body-color">
                  Metodología V85, auditoría HV, paquetes de servicio y casos reales — 5 páginas.
                </p>
              </div>

              {/* Botón descarga */}
              <a
                href="/brochure-samper.pdf"
                download="Brochure-Samper-Ingenieria.pdf"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-primary/90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/xl"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar PDF
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