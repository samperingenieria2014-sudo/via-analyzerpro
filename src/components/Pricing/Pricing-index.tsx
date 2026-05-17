import Link from "next/link";

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-black via-[#07111f] to-black" />

      <div className="container">

        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Paquetes de Servicios
          </span>
          <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            Soluciones para cada necesidad vial
          </h2>
          <p className="text-lg leading-relaxed text-body-color">
            Dos líneas de servicio especializadas — diseño de señalización con
            precios fijos por kilómetro y auditoría vial técnica integral.
          </p>
        </div>

        {/* ── SEÑALIZACIÓN ── */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="text-xl font-bold text-white">🚦 Diseño de Señalización Vial</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-body-color">
            Precio por kilómetro lineal
          </span>
        </div>

        <div className="mb-4 grid gap-6 md:grid-cols-3">

          {/* BÁSICO SEÑALIZACIÓN */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
            <div className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-body-color">
              Entrada
            </div>
            <h3 className="mb-1 text-2xl font-bold text-white">Básico</h3>
            <div className="mb-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-white">$350.000</span>
              <span className="mb-1 text-sm text-body-color">COP / km</span>
            </div>
            <p className="mb-6 text-sm text-body-color/60">~$85 USD / km</p>
            <ul className="mb-8 space-y-3">
              {[
                "Inventario completo de señales verticales",
                "Categoría y código MSV 2024 por señal",
                "Abscisa de instalación",
                "Costado (derecho / izquierdo)",
                "Coordenadas MAGNA-SIRGAS",
                "Archivo digital de entrega",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color">
                  <span className="mt-0.5 text-primary">✓</span>{item}
                </li>
              ))}
              {["Planos sobre ortofoto", "Informe técnico", "Análisis V85 / Auditoría HV", "Demarcación horizontal"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color/40 line-through">
                  <span className="mt-0.5">✗</span>{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-semibold text-white transition hover:border-primary hover:text-primary">
              Solicitar cotización
            </Link>
          </div>

          {/* ESTÁNDAR SEÑALIZACIÓN */}
          <div className="relative rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
              MÁS POPULAR
            </div>
            <div className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Profesional
            </div>
            <h3 className="mb-1 text-2xl font-bold text-white">Estándar</h3>
            <div className="mb-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-white">$500.000</span>
              <span className="mb-1 text-sm text-body-color">COP / km</span>
            </div>
            <p className="mb-6 text-sm text-body-color/60">~$122 USD / km</p>
            <ul className="mb-8 space-y-3">
              {[
                "Todo lo del paquete Básico",
                "Plano sobre ortofoto satelital",
                "Íconos reales MSV en planos",
                "Informe técnico completo",
                "Justificación normativa por señal",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color">
                  <span className="mt-0.5 text-primary">✓</span>{item}
                </li>
              ))}
              {["Análisis V85 / Auditoría HV", "Demarcación horizontal"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color/40 line-through">
                  <span className="mt-0.5">✗</span>{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white transition hover:bg-primary/90">
              Solicitar cotización
            </Link>
          </div>

          {/* COMPLETO SEÑALIZACIÓN */}
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-8">
            <div className="mb-2 inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              Premium
            </div>
            <h3 className="mb-1 text-2xl font-bold text-white">Completo</h3>
            <div className="mb-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-white">$700.000</span>
              <span className="mb-1 text-sm text-body-color">COP / km</span>
            </div>
            <p className="mb-6 text-sm text-body-color/60">~$171 USD / km</p>
            <ul className="mb-8 space-y-3">
              {[
                "Todo lo del paquete Estándar",
                "Demarcación horizontal completa",
                "Líneas laterales y centrales",
                "Tachas retroreflectivas y flechas",
                "Perfil de velocidad V85 (Lamm)",
                "Auditoría HV — visibilidad H y V",
                "Señales correctivas por hallazgos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color">
                  <span className="mt-0.5 text-yellow-400">✓</span>{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full rounded-xl border border-yellow-500/30 bg-yellow-500/10 py-3 text-center text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500/20">
              Solicitar cotización
            </Link>
          </div>

        </div>

        <p className="mb-16 text-center text-xs text-body-color/50">
          ★ Precios por kilómetro lineal de vía diseñada. Proyectos &gt;15 km consultar tarifas especiales. Precios no incluyen IVA. Equivalencia USD referencial: $1 USD ≈ $4.100 COP.
        </p>

        {/* ── AUDITORÍA VIAL ── */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="text-xl font-bold text-white">🛡️ Auditoría Vial</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-body-color">
            Precio por kilómetro lineal
          </span>
        </div>

        <div className="mb-4 grid gap-6 md:grid-cols-3">

          {/* BÁSICO AUDITORÍA */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
            <div className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-body-color">
              Entrada
            </div>
            <h3 className="mb-1 text-2xl font-bold text-white">Básico</h3>
            <div className="mb-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-white">$400.000</span>
              <span className="mb-1 text-sm text-body-color">COP / km</span>
            </div>
            <p className="mb-6 text-sm text-body-color/60">~$98 USD / km</p>
            <ul className="mb-8 space-y-3">
              {[
                "Análisis geométrico (radios, peraltes, sobreanchos)",
                "Distancias de visibilidad DVP y DVA",
                "Verificación normativa básica",
                "Informe de hallazgos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color">
                  <span className="mt-0.5 text-primary">✓</span>{item}
                </li>
              ))}
              {["Velocidad operacional V85", "Consistencia planta-perfil", "Auditoría HV", "Informe ejecutivo"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color/40 line-through">
                  <span className="mt-0.5">✗</span>{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-semibold text-white transition hover:border-primary hover:text-primary">
              Solicitar cotización
            </Link>
          </div>

          {/* ESTÁNDAR AUDITORÍA */}
          <div className="relative rounded-2xl border border-primary/30 bg-primary/5 p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
              MÁS POPULAR
            </div>
            <div className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Profesional
            </div>
            <h3 className="mb-1 text-2xl font-bold text-white">Estándar</h3>
            <div className="mb-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-white">$600.000</span>
              <span className="mb-1 text-sm text-body-color">COP / km</span>
            </div>
            <p className="mb-6 text-sm text-body-color/60">~$146 USD / km</p>
            <ul className="mb-8 space-y-3">
              {[
                "Todo lo del paquete Básico",
                "Velocidad operacional V85 (Método Lamm)",
                "Consistencia planta-perfil",
                "Informe técnico con justificación normativa",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color">
                  <span className="mt-0.5 text-primary">✓</span>{item}
                </li>
              ))}
              {["Auditoría HV", "Señales correctivas por hallazgos", "Informe ejecutivo"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color/40 line-through">
                  <span className="mt-0.5">✗</span>{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full rounded-xl bg-primary py-3 text-center text-sm font-semibold text-white transition hover:bg-primary/90">
              Solicitar cotización
            </Link>
          </div>

          {/* PREMIUM AUDITORÍA */}
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-8">
            <div className="mb-2 inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              Premium
            </div>
            <h3 className="mb-1 text-2xl font-bold text-white">Premium</h3>
            <div className="mb-1 flex items-end gap-2">
              <span className="text-3xl font-bold text-white">$900.000</span>
              <span className="mb-1 text-sm text-body-color">COP / km</span>
            </div>
            <p className="mb-6 text-sm text-body-color/60">~$220 USD / km</p>
            <ul className="mb-8 space-y-3">
              {[
                "Todo lo del paquete Estándar",
                "Auditoría HV (visibilidad H y V simultánea)",
                "Señales correctivas por hallazgos",
                "Coordenadas MAGNA-SIRGAS en entregables",
                "Informe ejecutivo para cliente",
                "Informe técnico para interventoría",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body-color">
                  <span className="mt-0.5 text-yellow-400">✓</span>{item}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="block w-full rounded-xl border border-yellow-500/30 bg-yellow-500/10 py-3 text-center text-sm font-semibold text-yellow-400 transition hover:bg-yellow-500/20">
              Solicitar cotización
            </Link>
          </div>

        </div>

        <p className="text-center text-xs text-body-color/50">
          ★ Precios por kilómetro lineal de vía analizada. Proyectos &gt;15 km consultar tarifas especiales. Precios no incluyen IVA. Equivalencia USD referencial: $1 USD ≈ $4.100 COP.
        </p>

      </div>
    </section>
  );
};

export default Pricing;
