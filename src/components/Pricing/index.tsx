"use client";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const xIcon = (
  <svg width="13" height="13" viewBox="0 0 13 13" className="fill-current">
    <path d="M6.5 5.086L1.914.5.5 1.914 5.086 6.5.5 11.086 1.914 12.5 6.5 7.914l4.586 4.586 1.414-1.414L7.914 6.5l4.586-4.586L11.086.5 6.5 5.086z" />
  </svg>
);

const senalizacionPlanes = [
  {
    nombre: "Básico",
    cop: "$350.000",
    usd: "~$85 USD",
    descripcion: "Inventario y georeferenciación de señales verticales.",
    incluye: [
      "Inventario completo de señales verticales",
      "Categoría y código MSV 2024 por señal",
      "Abscisa de instalación",
      "Costado (derecho / izquierdo)",
      "Coordenadas MAGNA-SIRGAS",
      "Archivo digital de entrega",
    ],
    noIncluye: ["Planos sobre ortofoto", "Informe técnico", "Análisis V85 / Auditoría HV", "Demarcación horizontal"],
    destacado: false,
    boton: "Solicitar cotización",
  },
  {
    nombre: "Estándar",
    cop: "$500.000",
    usd: "~$122 USD",
    descripcion: "Inventario completo con planos y informe técnico.",
    incluye: [
      "Todo lo del plan Básico",
      "Planos sobre ortofoto",
      "Informe técnico con justificación normativa",
      "Coordenadas MAGNA-SIRGAS",
      "Archivo digital de entrega",
    ],
    noIncluye: ["Análisis V85 / Auditoría HV", "Demarcación horizontal"],
    destacado: true,
    boton: "Solicitar cotización",
  },
  {
    nombre: "Completo",
    cop: "$700.000",
    usd: "~$171 USD",
    descripcion: "Servicio integral con análisis operacional y demarcación.",
    incluye: [
      "Todo lo del plan Estándar",
      "Análisis V85 / Auditoría HV",
      "Demarcación horizontal",
      "Señales correctivas por hallazgos",
      "Informe ejecutivo para interventoría",
    ],
    noIncluye: [],
    destacado: false,
    boton: "Solicitar cotización",
  },
];

const auditoriaPlanes = [
  {
    nombre: "Básico",
    cop: "$400.000",
    usd: "~$98 USD",
    descripcion: "Geometría esencial y distancias de visibilidad.",
    incluye: [
      "Análisis geométrico (radios, peraltes, sobreanchos)",
      "Distancias de visibilidad DVP y DVA",
      "Verificación normativa básica",
      "Informe de hallazgos",
    ],
    noIncluye: ["Velocidad operacional V85", "Consistencia planta-perfil", "Auditoría HV", "Señales correctivas"],
    destacado: false,
    boton: "Solicitar cotización",
  },
  {
    nombre: "Estándar",
    cop: "$600.000",
    usd: "~$146 USD",
    descripcion: "Geometría + análisis operacional V85.",
    incluye: [
      "Todo lo del plan Básico",
      "Velocidad operacional V85 (Método Lamm)",
      "Consistencia planta-perfil",
      "Informe técnico con justificación normativa",
    ],
    noIncluye: ["Auditoría HV", "Señales correctivas por hallazgos"],
    destacado: true,
    boton: "Solicitar cotización",
  },
  {
    nombre: "Premium",
    cop: "$900.000",
    usd: "~$220 USD",
    descripcion: "Auditoría integral con visibilidad simultánea H y V.",
    incluye: [
      "Todo lo del plan Estándar",
      "Auditoría HV (visibilidad H y V simultánea)",
      "Señales correctivas por hallazgos",
      "Informe ejecutivo + técnico para interventoría",
      "Coordenadas reales en todos los entregables",
    ],
    noIncluye: [],
    destacado: false,
    boton: "Solicitar cotización",
  },
];

const PlanCard = ({ plan }: { plan: typeof senalizacionPlanes[0] }) => (
  <div
    className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
      plan.destacado
        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
        : "border-white/10 bg-white/5"
    }`}
  >
    {plan.destacado && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
        Más popular
      </span>
    )}

    <div className="mb-6">
      <h3 className="mb-1 text-xl font-bold text-white">{plan.nombre}</h3>
      <p className="text-sm text-body-color">{plan.descripcion}</p>
    </div>

    <div className="mb-6">
      <div className="flex items-end gap-1">
        <span className="text-4xl font-extrabold text-white">{plan.cop}</span>
        <span className="mb-1 text-body-color">/km</span>
      </div>
      <p className="mt-1 text-sm text-body-color/60">{plan.usd} / km</p>
    </div>

    <Link
      href="#contact"
      className={`mb-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all duration-300 ${
        plan.destacado
          ? "bg-primary text-white hover:bg-primary/90"
          : "border border-white/20 text-white hover:border-primary hover:text-primary"
      }`}
    >
      {plan.boton}
    </Link>

    <ul className="space-y-3">
      {plan.incluye.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-body-color">
          <span className="mt-0.5 text-primary">{checkIcon}</span>
          {item}
        </li>
      ))}
      {plan.noIncluye.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-body-color/40">
          <span className="mt-0.5">{xIcon}</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-16 md:py-20 lg:py-28">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-black via-[#07111f] to-black opacity-80" />

      <div className="container">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
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

        {/* — SEÑALIZACIÓN — */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="text-xl font-bold text-white">🚦 Diseño de Señalización Vial</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-body-color">
            Precio por kilómetro lineal
          </span>
        </div>

        <div className="mb-4 grid gap-6 md:grid-cols-3">
          {senalizacionPlanes.map((plan) => (
            <PlanCard key={plan.nombre} plan={plan} />
          ))}
        </div>

        <p className="mb-16 text-right text-xs text-body-color/50">
          * Proyectos &gt;15 km consultar tarifas especiales. Precios no incluyen IVA.
        </p>

        {/* — AUDITORÍA — */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="text-xl font-bold text-white">🔍 Auditoría Vial</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-body-color">
            Precio por kilómetro lineal
          </span>
        </div>

        <div className="mb-4 grid gap-6 md:grid-cols-3">
          {auditoriaPlanes.map((plan) => (
            <PlanCard key={plan.nombre} plan={plan} />
          ))}
        </div>

        <p className="text-right text-xs text-body-color/50">
          * Análisis de glorietas y óvalos se cotiza por unidad. Precios no incluyen IVA.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
