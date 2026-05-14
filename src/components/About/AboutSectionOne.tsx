import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium leading-relaxed">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] min-w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden pt-16 md:pt-20 lg:pt-28"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-black via-[#07111f] to-black" />

      <div className="container">
        <div className="border-b border-white/[0.08] pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            
            {/* LEFT CONTENT */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Auditoría vial inteligente basada en normativa oficial."
                paragraph="Evaluamos geometría, velocidad operacional, visibilidad, señalización y seguridad vial mediante procesos automatizados alineados con normativa técnica de Colombia, Perú y Chile."
                mb="32px"
              />

              {/* Country Tags */}
              <div className="mb-10 flex flex-wrap gap-4">
                <div className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  🇨🇴 Colombia — INVÍAS
                </div>

                <div className="rounded-full border border-red-400/30 bg-red-400/10 px-4 py-2 text-sm font-semibold text-red-300">
                  🇵🇪 Perú — MTC
                </div>

                <div className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
                  🇨🇱 Chile — MOP
                </div>
              </div>

              {/* Features */}
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">

                  <div className="w-full px-3 sm:w-1/2">

                    <List text="Validación automática de radios, peraltes y sobreanchos" />

                    <List text="Análisis V85 y coherencia geométrica operacional" />

                    <List text="Detección de riesgos críticos y hallazgos de seguridad vial" />

                    <List text="Evaluación de DVP, DVA y visibilidad de parada" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2">

                    <List text="Señalización vertical y horizontal según normativa oficial" />

                    <List text="Análisis avanzado de glorietas y corredores viales" />

                    <List text="Compatibilidad normativa multipaís automatizada" />

                    <List text="Reducción significativa en tiempos de revisión técnica" />
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center backdrop-blur-sm">
                  <h3 className="text-primary text-2xl font-bold">+98%</h3>
                  <p className="text-body-color text-sm">
                    Cumplimiento normativo
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center backdrop-blur-sm">
                  <h3 className="text-primary text-2xl font-bold">-70%</h3>
                  <p className="text-body-color text-sm">
                    Tiempo de revisión
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center backdrop-blur-sm">
                  <h3 className="text-primary text-2xl font-bold">V85</h3>
                  <p className="text-body-color text-sm">
                    Velocidad operacional
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center backdrop-blur-sm">
                  <h3 className="text-primary text-2xl font-bold">QA/QC</h3>
                  <p className="text-body-color text-sm">
                    Auditoría inteligente
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[16/12] max-w-[720px]">

                {/* Glow Effect */}
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-[120px]" />

                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-[120px]" />

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_0_80px_rgba(0,0,0,0.5)]">

                  <Image
                    src="/images/about/about-viaanalyzer.png"
                    alt="Auditoría vial inteligente"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                                                       </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
