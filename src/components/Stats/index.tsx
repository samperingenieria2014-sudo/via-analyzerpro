"use client";

import { useLanguage } from "@/context/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: "📍",
      valor: "+150",
      unidad: t?.Stats?.stat1Unit || "km",
      label: t?.Stats?.stat1Label || "auditados y analizados",
    },
    {
      icon: "🚦",
      valor: "+600",
      unidad: t?.Stats?.stat2Unit || "señales",
      label: t?.Stats?.stat2Label || "diseñadas e inventariadas",
    },
    {
      icon: "🌎",
      valor: "3",
      unidad: t?.Stats?.stat3Unit || "países",
      label: t?.Stats?.stat3Label || "Colombia · Perú · Chile",
    },
    {
      icon: "📋",
      valor: "+10",
      unidad: t?.Stats?.stat4Unit || "proyectos",
      label: t?.Stats?.stat4Label || "completados exitosamente",
    },
  ];

  return (
    <section className="relative py-12 md:py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      <div className="absolute inset-0 -z-10 border-y border-white/5" />

      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="mb-3 text-4xl">{stat.icon}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white md:text-5xl">
                  {stat.valor}
                </span>
                <span className="text-lg font-semibold text-primary">
                  {stat.unidad}
                </span>
              </div>
              <p className="mt-1 text-sm text-body-color">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;