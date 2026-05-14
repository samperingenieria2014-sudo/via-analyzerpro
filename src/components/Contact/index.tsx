"use client";

import { useState } from "react";

// 👇 Reemplaza TU_ID_FORMSPREE con el ID que obtienes en formspree.io (ej: "xpwzabcd")
const FORMSPREE_ID = "xeenwaej";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-20 lg:py-28"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-black via-[#07111f] to-black" />

      <div className="container">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 shadow-[0_0_80px_rgba(0,0,0,0.45)] backdrop-blur-sm dark:bg-[#101826] sm:p-12">

            {/* Header */}
            <div className="mb-12 max-w-3xl">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                Ingeniería vial avanzada
              </span>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl">
                Solicita una evaluación técnica de tu proyecto vial
              </h2>
              <p className="text-lg leading-relaxed text-body-color">
                Analizamos geometría, velocidad operacional V85,
                señalización, visibilidad y cumplimiento normativo bajo
                estándares oficiales de Colombia, Perú y Chile.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="-mx-4 flex flex-wrap">

                {/* Nombre */}
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label htmlFor="name" className="mb-3 block text-sm font-semibold text-white">
                      Nombre completo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ingresa tu nombre"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-4 text-base text-white outline-hidden transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label htmlFor="email" className="mb-3 block text-sm font-semibold text-white">
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Tu email"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-4 text-base text-white outline-hidden transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                {/* Empresa */}
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label htmlFor="company" className="mb-3 block text-sm font-semibold text-white">
                      Empresa / Entidad
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Nombre de tu empresa"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-4 text-base text-white outline-hidden transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                {/* País */}
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label htmlFor="country" className="mb-3 block text-sm font-semibold text-white">
                      País del proyecto
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-4 text-base text-white outline-hidden transition-all duration-300 focus:border-primary focus:bg-white/[0.06]"
                    >
                      <option className="text-black">Colombia</option>
                      <option className="text-black">Perú</option>
                      <option className="text-black">Chile</option>
                      <option className="text-black">Otro</option>
                    </select>
                  </div>
                </div>

                {/* Proyecto */}
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label htmlFor="message" className="mb-3 block text-sm font-semibold text-white">
                      Cuéntanos sobre tu proyecto
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Describe el tipo de vía, problemática, auditoría o necesidad técnica que deseas evaluar..."
                      className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-4 text-base text-white outline-hidden transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white/[0.06]"
                    />
                  </div>
                </div>

                {/* Botón + feedback */}
                <div className="w-full px-4">
                  <button
                    type="submit"
                    disabled={status === "sending" || status === "ok"}
                    className="rounded-xl bg-primary px-10 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Enviando..." : "Solicitar evaluación técnica"}
                  </button>

                  {status === "ok" && (
                    <p className="mt-4 text-sm font-semibold text-emerald-400">
                      ✓ Mensaje enviado con éxito. Te contactaremos pronto.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="mt-4 text-sm font-semibold text-red-400">
                      Hubo un error al enviar. Intenta de nuevo o escríbenos directamente.
                    </p>
                  )}
                </div>

              </div>
            </form>

            {/* Contacto directo */}
            <div className="mt-14 grid gap-6 border-t border-white/[0.08] pt-10 md:grid-cols-3">

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="mb-2 text-sm uppercase tracking-widest text-primary">
                  Correo electrónico
                </p>
                <a
                  href="mailto:samperingenieria2014@gmail.com"
                  className="text-lg font-semibold text-white transition hover:text-primary"
                >
                  samperingenieria2014@gmail.com
                </a>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="mb-2 text-sm uppercase tracking-widest text-primary">
                  WhatsApp técnico
                </p>
                {/* ⚠️ PENDIENTE: confirma cuál es el número correcto */}
                <a
                  href="https://wa.me/573186053141"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-white transition hover:text-primary"
                >
                  +57 318 605 3141
                </a>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-5">
                <p className="mb-2 text-sm uppercase tracking-widest text-primary">
                  Cobertura normativa
                </p>
                <p className="text-lg font-semibold text-white">
                  🇨🇴 Colombia · 🇵🇪 Perú · 🇨🇱 Chile
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
