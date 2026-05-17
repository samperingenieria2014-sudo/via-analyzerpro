import Link from "next/link";
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
                  Inteligencia, precisión y cumplimiento en cada kilómetro
                </h1>
                <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Optimizamos tu diseño vial mediante validación normativa automatizada, análisis V85, auditoría HV y señalización inteligente para proyectos de infraestructura.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="ease-in-up bg-primary hover:bg-primary/90 shadow-btn hover:shadow-btn-hover rounded-xs px-8 py-4 text-base font-medium text-white transition duration-300"
                  >
                    Evalúa tu vía
                  </a>
                  <a
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
            alt="Hero"
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
