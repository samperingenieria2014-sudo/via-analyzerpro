"use client";

import { useLanguage } from "@/context/LanguageContext";

const Metodologia = () => {
  const { t } = useLanguage();

  const metodologia = [
    {
      badge: t?.Metodologia?.card1Badge || "Flujo de trabajo",
      badgeColor: "bg-primary/10 border-primary/30 text-primary",
      titulo: t?.Metodologia?.card1Title || "Análisis geométrico desde tu modelo Civil 3D",
      descripcion:
        t?.Metodologia?.card1Desc ||
        "Nuestros clientes nos entregan el LandXML exportado directamente desde Civil 3D. A partir de ese archivo, aplicamos un flujo de trabajo especializado para procesar los alineamientos horizontales, perfil longitudinal, superelevaciones y secciones transversales — sin que el cliente tenga que preparar ningún archivo adicional ni conocer la metodología de análisis.",
      detalle:
        t?.Metodologia?.card1Detail ||
        "El resultado es una auditoría técnica completa respaldada por normativa oficial, con entregables listos para interventoría y toma de decisiones.",
      items: t?.Metodologia?.card1Items || [
        "Checklist normativo completo — radios mínimos, peraltes, sobreanchos y longitudes de transición evaluados contra INVÍAS, MTC o MOP",
        "Velocidad operacional V85 — calculada por el Método Lamm (1999) tramo a tramo, detectando dónde la geometría supera la velocidad real del conductor",
        "Hallazgos HV — cruce simultáneo de incumplimientos horizontales y verticales en el mismo punto kilométrico",
        "CSV importable de vuelta a Civil 3D con inventario georreferenciado y justificación normativa por elemento",
      ],
      coordenadas: [
        "🇨🇴 MAGNA-SIRGAS — Colombia",
        "🇵🇪 PSAD56 / WGS-84 UTM — Perú",
        "🇨🇱 SIRGAS-Chile — Chile",
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      badge: t?.Metodologia?.card2Badge || "Diferenciador clave",
      badgeColor: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
      titulo: t?.Metodologia?.card2Title || "Velocidad Operacional V85 — Método Lamm (1999)",
      descripcion:
        t?.Metodologia?.card2Desc ||
        "La V85 es la velocidad que el 85% de los vehículos no supera en condiciones libres de tráfico. Es el parámetro base para evaluar si la geometría de una vía es consistente con el comportamiento real del conductor.",
      detalle:
        t?.Metodologia?.card2Detail ||
        "Ningún software CAD —Civil 3D, AutoCAD, ni plataformas BIM— calcula V85 automáticamente. Requiere aplicar el modelo de Lamm (1999) tramo a tramo, validando la relación entre radio, peralte y velocidad de diseño. Nuestro flujo de trabajo lo hace de forma automatizada, entregando V85 real por tramo con justificación normativa.",
      items: t?.Metodologia?.card2Items || [
        "Cálculo automático por tramo con Método Lamm 1999",
        "Evaluación de consistencia planta-perfil",
        "Identificación de tramos críticos por diferencial de V85",
        "Compatible con INVÍAS (Colombia), MTC (Perú) y MOP (Chile)",
      ],
      coordenadas: [],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l4.5-4.5 3 3L15 7.5l6 6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h7" />
        </svg>
      ),
    },
    {
      badge: t?.Metodologia?.card3Badge || "Capacidad única",
      badgeColor: "bg-blue-500/10 border-blue-500/30 text-blue-400",
      titulo: t?.Metodologia?.card3Title || "Auditoría HV — Visibilidad Horizontal y Vertical Simultánea",
      descripcion:
        t?.Metodologia?.card3Desc ||
        "Un hallazgo HV ocurre cuando una vía presenta restricción de visibilidad tanto en planta (horizontal) como en perfil (vertical) en el mismo punto. Es la condición más crítica para la seguridad vial.",
      detalle:
        t?.Metodologia?.card3Detail ||
        "La mayoría de auditorías evalúan H y V por separado. Nuestra metodología detecta la superposición simultánea de ambas restricciones, identificando puntos ciegos reales que no son evidentes en el análisis individual. Esto es lo que la interventoría necesita para justificar intervenciones correctivas.",
      items: t?.Metodologia?.card3Items || [
        "Detección de restricciones H y V en el mismo punto kilométrico",
        "Cálculo de DVP (Distancia de Visibilidad de Parada)",
        "Cálculo de DVA (Distancia de Visibilidad de Adelantamiento)",
        "Informe con hallazgos HV georreferenciados y señales correctivas",
      ],
      coordenadas: [],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      badge: t?.Metodologia?.card4Badge || "Entregables concretos",
      badgeColor: "bg-green-500/10 border-green-500/30 text-green-400",
      titulo: t?.Metodologia?.card4Title || "Qué recibe el cliente — Informe técnico integral",
      descripcion:
        t?.Metodologia?.card4Desc ||
        "Cada proyecto genera un paquete de entregables estructurado que cubre desde los hallazgos geométricos hasta el inventario de señalización, respaldado por normativa oficial y listo para interventoría, licitación o toma de decisiones técnicas.",
      detalle:
        t?.Metodologia?.card4Detail ||
        "No entregamos solo un PDF. El cliente recibe un informe QA/QC completo con todos los hallazgos clasificados por severidad, junto con una base de datos georreferenciada lista para usar en SIG o importar directamente en Civil 3D.",
      items: t?.Metodologia?.card4Items || [
        "Informe QA/QC con hallazgos geométricos clasificados por nivel de riesgo (crítico, alto, medio)",
        "Checklist normativo por curva horizontal y vertical con cumplimiento documentado",
        "Hallazgos HV georreferenciados con recomendaciones de intervención y señales correctivas",
        "Velocidad operacional V85 por tramo con identificación de tramos críticos",
        "Inventario de señalización vertical con abscisa, costado, código de señal y justificación normativa",
        "Planos sobre ortofoto, CSV importable en Civil 3D e informe ejecutivo para interventoría",
      ],
      coordenadas: [
        "🇨🇴 MAGNA-SIRGAS — Colombia",
        "🇵🇪 PSAD56 / WGS-84 UTM — Perú",
        "🇨🇱 SIRGAS-Chile — Chile",
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="metodologia" className="relative py-16 md:py-20 lg:py-28">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-black via-[#07111f] to-black opacity-80" />

      <div className="container">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            {t?.Metodologia?.badgeHeader || "Nuestra Metodología"}
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            {t?.Metodologia?.mainTitle || "Lo que hacemos y cómo lo hacemos"}
          </h2>
          <p className="text-lg leading-relaxed text-body-color">
            {t?.Metodologia?.mainSubtitle ||
              "No es software estándar. Es una metodología propia que automatiza procesos que ningún CAD resuelve — con entregables técnicos respaldados por normativa oficial."}
          </p>
        </div>

        {/* TARJETAS */}
        <div className="flex flex-col gap-8">
          {metodologia.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.07] md:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                {/* Lado izquierdo */}
                <div className="lg:w-2/5">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">
                    {item.titulo}
                  </h3>
                  <p className="mb-4 leading-relaxed text-body-color">
                    {item.descripcion}
                  </p>
                  <p className="text-sm leading-relaxed text-body-color/70">
                    {item.detalle}
                  </p>
                </div>

                {/* Lado derecho */}
                <div className="lg:w-3/5">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary/60">
                    {t?.Metodologia?.whatIncludes || "Qué incluye"}
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {item.items.map((punto, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <svg width="10" height="8" viewBox="0 0 16 13" className="fill-current">
                            <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </span>
                        <span className="text-sm text-body-color">{punto}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sistemas de coordenadas */}
                  {item.coordenadas.length > 0 && (
                    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary/60">
                        {t?.Metodologia?.coordSystems || "Sistemas de coordenadas"}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {item.coordenadas.map((coord, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-body-color"
                          >
                            {coord}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metodologia;