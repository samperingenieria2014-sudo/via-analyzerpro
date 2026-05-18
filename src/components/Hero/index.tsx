import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  {"Inteligencia, precisi\u00f3n y cumplimiento en cada kil\u00f3metro"}
                </h1>
                <p className="mb-12 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  {"Somos un equipo de ingenieros especializados en auditor\u00eda vial, validaci\u00f3n geom\u00e9trica y se\u00f1alizaci\u00f3n. Procesamos tu modelo Civil 3D y entregamos informes t\u00e9cnicos con hallazgos, V85 y se\u00f1alizaci\u00f3n bajo normativa INV\u00cdAS, MTC y MOP."}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  
                    href="#contact"
                    className="ease-in-up bg-primary hover:bg-primary/90 shadow-btn hover:shadow-btn-hover rounded-xs px-8 py-4 text-base font-medium text-white transition duration-300"
                  >
                    {"Eval\u00faa tu v\u00eda"}
                  </a>
                  
                    href="#features"
                    className="ease-in-up rounded-xs border border-black/20 bg-white px-8 py-4 text-base font-medium text-black shadow-btn transition duration-300 hover:border-primary hover:text-primary dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-primary dark:hover:text-primary"
                  >
                    Ver servicios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center px-4">
          <Image
            src="/images/hero/Hero.png"
            alt="ViaAnalyzer PRO — Auditoria Vial y Senalizacion"
            width={1400}
            height={800}
            className="rounded-xl shadow-2xl"
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Hero;