"use client";

import Image from "next/image";

const CaseStudies = () => {
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
            Casos Reales de Ingeniería Vial
          </span>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
            Riesgos operacionales detectados mediante auditoría vial avanzada
          </h2>
          <p className="text-lg leading-relaxed text-body-color">
            Evaluaciones técnicas basadas en velocidad operacional,
            consistencia geométrica, visibilidad y normativa oficial
            aplicada en proyectos reales de Colombia, Perú y Chile.
          </p>
        </div>

        {/* ===== CASE 1 ===== */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-sm mb-16">
          <div className="grid lg:grid-cols-2">

            {/* LEFT — Imagen independiente */}
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src="/images/Casestudies/peru-v85-case.jpg"
                alt="Auditoría vial operacional PE-10C Chugay, Perú"
                fill
                className="object-cover"
              />
              {/* Leyenda de colores superpuesta en la parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-8 rounded-full bg-red-500 inline-block" />
                    <span className="text-xs text-white/80">Riesgo crítico V85</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-8 rounded-full bg-yellow-400 inline-block" />
                    <span className="text-xs text-white/80">Riesgo alto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-8 rounded-full bg-green-500 inline-block" />
                    <span className="text-xs text-white/80">Cumple normativa</span>
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
                  Carretera de Tercera Clase
                </span>
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  Metodología PNP 2021
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
                Velocidad operacional 267% superior a la velocidad de diseño
              </h3>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed text-body-color">
                El análisis operacional identificó en un tramo de vía PE-10C Chugay, Perú inconsistencias críticas
                entre geometría horizontal y vertical, déficit severo de
                visibilidad y zonas de adelantamiento inseguro que no habían
                sido documentadas previamente.
              </p>

              {/* Metrics */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">Velocidad operacional</p>
                  <h4 className="text-2xl font-bold text-white">80 km/h</h4>
                  <p className="mt-1 text-xs text-body-color">V85 medida en campo</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">Velocidad diseño</p>
                  <h4 className="text-2xl font-bold text-white">30 km/h</h4>
                  <p className="mt-1 text-xs text-body-color">Velocidad geométrica original</p>
                </div>
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-red-300">Hallazgos críticos</p>
                  <h4 className="text-2xl font-bold text-white">2</h4>
                  <p className="mt-1 text-xs text-body-color">Riesgos severos detectados</p>
                </div>
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-yellow-300">Déficit visibilidad</p>
                  <h4 className="text-2xl font-bold text-white">51%</h4>
                  <p className="mt-1 text-xs text-body-color">Zonas con DVP insuficiente</p>
                </div>
              </div>

              {/* Before / After */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-300">Antes del rediseño</p>
                  <ul className="space-y-2 text-sm text-white">
                    <li>• Visibilidad insuficiente</li>
                    <li>• Inconsistencia horizontal–vertical</li>
                    <li>• Adelantamientos inseguros</li>
                    <li>• Riesgo operacional severo</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Resultado final</p>
                  <ul className="space-y-2 text-sm text-white">
                    <li>✓ Conflictos críticos eliminados</li>
                    <li>✓ 100% cumplimiento DVP</li>
                    <li>✓ Reducción del 67% en hallazgos</li>
                    <li>✓ Operación vial estabilizada</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ===== CASE 2 ===== */}
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">

            {/* LEFT — Contenido */}
            <div className="p-8 lg:p-12 order-2 lg:order-1">

              {/* Tags */}
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300">
                  🇵🇪 Perú
                </span>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white">
                  Óvalo Panamericano
                </span>
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-300">
                  Seguridad Operacional
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
                La señalización era correcta pero la geometría permisiva inducía al error.
              </h3>

              {/* Description */}
              <p className="mb-8 text-base leading-relaxed text-body-color">
                El análisis operacional identificó que, aunque el óvalo Las Tortugas en Perú cumplía
                con distancia de parada, señalización y desaceleración, la
                configuración geométrica inducía a los conductores a ingresar
                a velocidades superiores a las seguras.
              </p>

              {/* Metrics */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">Radio de acceso</p>
                  <h4 className="text-2xl font-bold text-white">370 m</h4>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-primary">Pendiente</p>
                  <h4 className="text-2xl font-bold text-white">-1.80%</h4>
                </div>
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-red-300">Riesgo detectado</p>
                  <h4 className="text-xl font-bold text-white">Volcamiento</h4>
                </div>
                <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <p className="mb-1 text-xs uppercase tracking-widest text-yellow-300">Velocidad requerida</p>
                  <h4 className="text-2xl font-bold text-white">40 km/h</h4>
                </div>
              </div>

              {/* Conclusion */}
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Conclusión técnica</p>
                <p className="text-sm leading-relaxed text-white">
                  La señalización no era el problema — la geometría de acceso inducía
                  maniobras tardías e ingreso a velocidades superiores a las seguras.
                </p>
              </div>

            </div>

            {/* RIGHT — Imagen independiente */}
            <div className="relative min-h-[420px] overflow-hidden order-1 lg:order-2">
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
                    <span className="h-3 w-8 rounded-full bg-fuchsia-500 inline-block" />
                    <span className="text-xs text-white/80">Zona con geometria permisiva</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-8 rounded-full bg-green-500 inline-block" />
                    <span className="text-xs text-white/80">Zona segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-8 rounded-full bg-yellow-400 inline-block" />
                    <span className="text-xs text-white/80">Zona de riesgo</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* ===== CASE 3 - CHILE ===== */}
<div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] shadow-[-] mb-12">
  <div className="grid grid-cols-1 lg:grid-cols-2">
    
    {/* LEFT - Contenido */}
    <div className="p-8 lg:p-12 order-2 lg:order-1">
      
      {/* Tags */}
      <div className="mb-5 flex flex-wrap gap-3">
        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
          Chile
        </span>
        <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white">
          Ruta El Colorado
        </span>
        <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">
          Seguridad Operacional
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-4 text-2xl font-bold leading-tight text-white lg:text-3xl">
        En alta montaña, la información correcta y oportuna puede salvar vidas.
      </h3>

      {/* Description */}
      <p className="mb-8 text-base leading-relaxed text-body-color">
        Evaluación integral con <strong>ViaAnalyzer PRO</strong> en un tramo crítico de 2.930 metros. El análisis operacional identificó que el 37% de las curvas presentan radios por debajo del mínimo recomendado y un 62% padece de un severo déficit en la Distancia de Visibilidad de Parada (DVP), requiriendo una optimización urgente en la lógica de señalización preventiva.
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-6">
        <div>
          <span className="block text-2xl font-bold text-red-500">33</span>
          <span className="text-sm text-body-color">Curvas Críticas (R &lt; Mínimo)</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-yellow-500">8</span>
          <span className="text-sm text-body-color">Curvas Observadas</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-green-500">3</span>
          <span className="text-sm text-body-color">Curvas Conformes</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-white">45</span>
          <span className="text-sm text-body-color">Líneas de Tangente</span>
        </div>
      </div>

    </div>

{/* RIGHT - Imagen o Espacio Gráfico */}
<div className="relative min-h-[350px] bg-white/[0.02] order-1 lg:order-2 flex items-center justify-center border-b lg:border-b-0 lg:border-l border-white/[0.08]">
  <Image
    src="/images/elcolorado.jpg" // <-- Modificado para que coincida exactamente con tu archivo
    alt="Ruta El Colorado - Análisis de visibilidad ViaAnalyzer PRO"
    fill
    className="object-cover"
  />
  
  {/* Leyenda de colores del análisis operacional */}
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <span className="h-3 w-8 rounded-full bg-red-500 inline-block" />
        <span className="text-xs text-white/80">Curvas Críticas</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-3 w-8 rounded-full bg-yellow-400 inline-block" />
        <span className="text-xs text-white/80">Déficit DVP</span>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default CaseStudies;
