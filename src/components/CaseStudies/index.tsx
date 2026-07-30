"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const CaseStudies = () => {
  const { t } = useLanguage();

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-[#050816] via-[#07111f] to-black" />

      <div className="container">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-5 inline-block rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-red-400">
            {t?.CasosReales?.badgeHeader || "Casos Reales de Ingeniería Vial"}
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
            {t?.CasosReales?.mainTitle ||
              "Riesgos operacionales detectados mediante auditoría vial avanzada"}
          </h2>
          <p className="text-lg leading-relaxed text-body-color">
            {t?.CasosReales?.mainSubtitle ||
              "Evaluaciones técnicas basadas en velocidad operacional, consistencia geométrica, visibilidad y normativa oficial aplicada en proyectos reales de Colombia, Perú y Chile."}
          </p>
        </div>

        {/* ===== CASE 1 — PERÚ PE-10C ===== */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">
            {/* LEFT — Imagen independiente */}
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src="/images/Casestudies/peru-v85-case.jpg"
                alt="Auditoría vial operacional PE-10C Chugay, Perú"
                fill
                className="object-cover"
              />
              {/* Leyenda de colores */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-red-500" />
                    <span className="text-xs text-white/80">
                      {t?.CasosReales?.case1Legend1 || "Riesgo crítico V85"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-yellow-400" />
                    <span className="text-xs text-white/80">
                      {t?.CasosReales?.case1Legend2 || "Riesgo alto"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-green-500" />
                    <span className="text-xs text-white/80">
                      {t?.CasosReales?.case1Legend3 || "Cumple normativa"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Contenido */}
            <div className="p-8 lg:p-12">
              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
                  🇵🇪 Perú
                </span>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white">
                  {t?.CasosReales?.case1Type || "Carretera de Tercera Clase"}
                </span>
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  {t?.CasosReales?.case1Method || "Metodología PNP 2021"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
                {t?.CasosReales?.case1Title ||
                  "Velocidad operacional 267% superior a la velocidad de diseño"}
              </h3>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed text-body-color">
                {t?.CasosReales?.case1Desc ||
                  "El análisis operacional identificó en un tramo de vía PE-10C Chugay, Perú inconsistencias críticas entre geometría horizontal y vertical, déficit severo de visibilidad y zonas de adelantamiento inseguro que no habían sido documentadas previamente."}
              </p>

              {/* Metrics */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">
                    {t?.CasosReales?.case1M1Label || "Velocidad operacional"}
                  </p>
                  <h4 className="text-2xl font-bold text-white">80 km/h</h4>
                  <p className="mt-1 text-xs text-body-color">
                    {t?.CasosReales?.case1M1Sub || "V85 medida en campo"}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">
                    {t?.CasosReales?.case1M2Label || "Velocidad diseño"}
                  </p>
                  <h4 className="text-2xl font-bold text-white">30 km/h</h4>
                  <p className="mt-1 text-xs text-body-color">
                    {t?.CasosReales?.case1M2Sub || "Velocidad geométrica original"}
                  </p>
                </div>
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-red-300">
                    {t?.CasosReales?.case1M3Label || "Hallazgos críticos"}
                  </p>
                  <h4 className="text-2xl font-bold text-white">2</h4>
                  <p className="mt-1 text-xs text-body-color">
                    {t?.CasosReales?.case1M3Sub || "Riesgos severos detectados"}
                  </p>
                </div>
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-yellow-300">
                    {t?.CasosReales?.case1M4Label || "Déficit visibilidad"}
                  </p>
                  <h4 className="text-2xl font-bold text-white">51%</h4>
                  <p className="mt-1 text-xs text-body-color">
                    {t?.CasosReales?.case1M4Sub || "Zonas con DVP insuficiente"}
                  </p>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                    {t?.CasosReales?.case1BeforeTitle || "Antes del rediseño"}
                  </p>
                  <ul className="space-y-2 text-sm text-white">
                    <li>• {t?.CasosReales?.case1Before1 || "Visibilidad insuficiente"}</li>
                    <li>• {t?.CasosReales?.case1Before2 || "Inconsistencia horizontal–vertical"}</li>
                    <li>• {t?.CasosReales?.case1Before3 || "Adelantamientos inseguros"}</li>
                    <li>• {t?.CasosReales?.case1Before4 || "Riesgo operacional severo"}</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    {t?.CasosReales?.case1AfterTitle || "Resultado final"}
                  </p>
                  <ul className="space-y-2 text-sm text-white">
                    <li>✓ {t?.CasosReales?.case1After1 || "Conflictos críticos eliminados"}</li>
                    <li>✓ {t?.CasosReales?.case1After2 || "100% cumplimiento DVP"}</li>
                    <li>✓ {t?.CasosReales?.case1After3 || "Reducción del 67% en hallazgos"}</li>
                    <li>✓ {t?.CasosReales?.case1After4 || "Operación vial estabilizada"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CASE 2 — ÓVALO LAS TORTUGAS ===== */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">
            {/* LEFT — Contenido */}
            <div className="order-2 p-8 lg:order-1 lg:p-12">
              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
                  🇵🇪 Perú
                </span>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white">
                  {t?.CasosReales?.case2Type || "Óvalo Panamericano"}
                </span>
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  {t?.CasosReales?.case2Method || "Seguridad Operacional"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
                {t?.CasosReales?.case2Title ||
                  "La señalización era correcta pero la geometría permisiva inducía al error."}
              </h3>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed text-body-color">
                {t?.CasosReales?.case2Desc ||
                  "El análisis operacional identificó que, aunque el óvalo Las Tortugas en Perú cumplía con distancia de parada, señalización y desaceleración, la configuración geométrica inducía a los conductores a ingresar a velocidades superiores a las seguras."}
              </p>

              {/* Metrics */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">
                    {t?.CasosReales?.case2M1Label || "Radio de acceso"}
                  </p>
                  <h4 className="text-2xl font-bold text-white">370 m</h4>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">
                    {t?.CasosReales?.case2M2Label || "Pendiente"}
                  </p>
                  <h4 className="text-2xl font-bold text-white">-1.80%</h4>
                </div>
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-red-300">
                    {t?.CasosReales?.case2M3Label || "Riesgo detectado"}
                  </p>
                  <h4 className="text-xl font-bold text-white">
                    {t?.CasosReales?.case2M3Val || "Volcamiento"}
                  </h4>
                </div>
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-yellow-300">
                    {t?.CasosReales?.case2M4Label || "Velocidad requerida"}
                  </p>
                  <h4 className="text-2xl font-bold text-white">40 km/h</h4>
                </div>
              </div>

              {/* Conclusion */}
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {t?.CasosReales?.case2ConcTitle || "Conclusión técnica"}
                </p>
                <p className="text-sm leading-relaxed text-white">
                  {t?.CasosReales?.case2ConcDesc ||
                    "La señalización no era el problema — la geometría de acceso inducía maniobras tardías e ingreso a velocidades superiores a las seguras."}
                </p>
              </div>
            </div>

            {/* RIGHT — Imagen independiente */}
            <div className="relative order-1 min-h-[420px] overflow-hidden lg:order-2">
              <Image
                src="/images/cases/Ovalo Las Tortugas.jpg"
                alt="Óvalo Las Tortugas — análisis de trayectorias"
                fill
                className="object-cover"
              />
              {/* Leyenda de colores */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-fuchsia-500" />
                    <span className="text-xs text-white/80">
                      {t?.CasosReales?.case2Legend1 || "Zona con geometría permisiva"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-green-500" />
                    <span className="text-xs text-white/80">
                      {t?.CasosReales?.case2Legend2 || "Zona segura"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-yellow-400" />
                    <span className="text-xs text-white/80">
                      {t?.CasosReales?.case2Legend3 || "Zona de riesgo"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CASE 3 — CHILE RUTA EL COLORADO ===== */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT - Contenido */}
            <div className="order-2 p-8 lg:order-1 lg:p-12">
              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                  🇨🇱 Chile
                </span>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white">
                  {t?.CasosReales?.case3Type || "Ruta El Colorado"}
                </span>
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
                  {t?.CasosReales?.case3Method || "Seguridad Operacional"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
                {t?.CasosReales?.case3Title ||
                  "En alta montaña, la información correcta y oportuna puede salvar vidas."}
              </h3>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed text-body-color">
                {t?.CasosReales?.case3Desc ||
                  "Evaluación integral con ViaAnalyzer PRO en un tramo crítico de 2.930 metros. El análisis operacional identificó que el 37% de las curvas presentan radios por debajo del mínimo recomendado y un 62% padece de un severo déficit en la Distancia de Visibilidad de Parada (DVP), requiriendo una optimización urgente en la lógica de señalización preventiva."}
              </p>

              {/* Metrics */}
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-red-500">
                    {t?.CasosReales?.case3M1Label || "Curvas Críticas"}
                  </span>
                  <h4 className="text-2xl font-bold text-white">33</h4>
                  <span className="text-xs text-body-color">
                    {t?.CasosReales?.case3M1Sub || "R < Mínimo"}
                  </span>
                </div>

                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-yellow-500">
                    {t?.CasosReales?.case3M2Label || "Déficit DVP"}
                  </span>
                  <h4 className="text-2xl font-bold text-white">8</h4>
                  <span className="text-xs text-body-color">
                    {t?.CasosReales?.case3M2Sub || "Curvas Observadas"}
                  </span>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {t?.CasosReales?.case3M3Label || "Geometría"}
                  </span>
                  <h4 className="text-2xl font-bold text-white">3</h4>
                  <span className="text-xs text-body-color">
                    {t?.CasosReales?.case3M3Sub || "Curvas Conformes"}
                  </span>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/60">
                    {t?.CasosReales?.case3M4Label || "Alineamiento"}
                  </span>
                  <h4 className="text-2xl font-bold text-white">45</h4>
                  <span className="text-xs text-body-color">
                    {t?.CasosReales?.case3M4Sub || "Líneas de Tangente"}
                  </span>
                </div>
              </div>

              {/* Conclusion */}
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {t?.CasosReales?.case3ConcTitle || "Conclusión técnica"}
                </p>
                <p className="text-sm leading-relaxed text-white">
                  {t?.CasosReales?.case3ConcDesc ||
                    "La señalización puramente normativa se quedaba corta ante la complejidad del terreno. Mediante lógica operacional se agruparon secuencias, priorizando restricciones de adelantamiento en perfiles ciegos y reforzando con delineadores óptimos."}
                </p>
              </div>
            </div>

            {/* RIGHT - Imagen o Espacio Gráfico */}
            <div className="relative order-1 flex min-h-[350px] w-full items-center justify-center overflow-hidden border-b border-white/[0.08] bg-white/[0.02] p-4 lg:order-2 lg:min-h-full lg:border-b-0 lg:border-l">
              <img
                src="/images/Casestudies/el-colorado.png"
                alt="Ruta El Colorado - Análisis de visibilidad ViaAnalyzer PRO"
                className="h-auto max-h-[400px] w-full rounded-2xl object-contain"
              />

              {/* Leyenda de colores del análisis operacional */}
              <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 pt-12">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-red-500" />
                    <span className="text-xs font-medium text-white/80">
                      {t?.CasosReales?.case3Legend1 || "Curvas Críticas"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-3 w-8 rounded-full bg-yellow-400" />
                    <span className="text-xs font-medium text-white/80">
                      {t?.CasosReales?.case3Legend2 || "Déficit DVP"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;