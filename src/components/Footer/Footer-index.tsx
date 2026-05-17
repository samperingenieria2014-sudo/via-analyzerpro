"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">

            {/* ── Columna 1: Marca ── */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-6 inline-block">
                  <Image
                    src="/images/logo/Logo Samper Ingenieria.png"
                    alt="Samper Ingeniería y Topografía"
                    width={180}
                    height={60}
                    className="object-contain" style={{ width: "180px", height: "auto" }}
                  />
                </Link>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Auditoría vial inteligente basada en análisis geométrico,
                  velocidad operacional V85 y normativa oficial de Colombia,
                  Perú y Chile.
                </p>

                {/* Redes sociales: solo LinkedIn y WhatsApp */}
                <div className="flex items-center gap-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/ivansamperyunda"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke text-body-color transition duration-300 hover:border-primary hover:text-primary dark:border-dark-3 dark:text-body-color-dark dark:hover:border-primary dark:hover:text-primary"
                  >
                    <svg width="17" height="16" viewBox="0 0 17 16" className="fill-current">
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/573186053141"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke text-body-color transition duration-300 hover:border-primary hover:text-primary dark:border-dark-3 dark:text-body-color-dark dark:hover:border-primary dark:hover:text-primary"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Columna 2: Navegación ── */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                  Navegación
                </h2>
                <ul>
                  {[
                    { label: "Servicios", href: "#features" },
                    { label: "Normativas", href: "#about" },
                    { label: "Casos Reales", href: "#case-studies" },
                    { label: "Contacto", href: "#contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Columna 3: Servicios ── */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                  Servicios
                </h2>
                <ul>
                  {[
                    "Auditoría Vial",
                    "Análisis V85",
                    "Señalización",
                    "Glorietas y Óvalos",
                    "Normativa Multipaís",
                  ].map((s) => (
                    <li key={s}>
                      <a
                        href="#features"
                        className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      >
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Columna 4: Contacto ── */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-black dark:text-white">
                  Contacto
                </h2>
                <ul className="space-y-4">
                  <li>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/573186053141"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      +57 318 605 3141
                    </a>
                  </li>
                  <li>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      Correo
                    </p>
                    <a
                      href="mailto:samperingenieria2014@gmail.com"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      samperingenieria2014@gmail.com
                    </a>
                  </li>
                  <li>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/ivansamperyunda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      ivansamperyunda
                    </a>
                  </li>
                  <li>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                      Normativas
                    </p>
                    <p className="text-base text-body-color dark:text-body-color-dark">
                      🇨🇴 INVÍAS · 🇵🇪 MTC · 🇨🇱 MOP
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* ── Barra inferior ── */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />
          <div className="flex flex-col items-center justify-between py-8 sm:flex-row">
            <p className="text-sm text-body-color dark:text-body-color-dark">
              © {new Date().getFullYear()} Samper Ingeniería & Topografía — Todos los derechos reservados
            </p>
            <span className="mt-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold text-primary sm:mt-0">
              ViaAnalyzer PRO · MSV 2024
            </span>
          </div>
        </div>

        {/* Decoración SVG original (se mantiene) */}
        <div className="absolute right-0 top-14 z-[-1]">
          <svg width="55" height="99" viewBox="0 0 55 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask id="mask0_94:899" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="99" height="99">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#4A6CF7" />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="url(#paint0_radial_94:899)" />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter id="filter0_f_94:899" x="12.4852" y="-15.1763" width="82.7646" height="82.7646" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_94:899" />
              </filter>
              <radialGradient id="paint0_radial_94:899" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)">
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
