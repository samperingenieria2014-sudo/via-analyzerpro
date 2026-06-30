"use client";

const VideoDemo = () => {
  return (
    <div className="mt-20 rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-10 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.3)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LADO IZQUIERDO — Descripción del módulo colombiano */}
        <div className="space-y-6">
          <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Módulo Colombia Activo
          </span>
          <h3 className="text-2xl font-bold text-white sm:text-3xl leading-tight">
            Procesamiento de consistencia y señalización en tiempo real
          </h3>
          <p className="text-base text-body-color leading-relaxed">
            En esta demostración de 2 minutos puedes observar cómo **ViaAnalyzer PRO** automatiza la auditoría de seguridad vial bajo la normativa oficial colombiana. 
          </p>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Verificación de consistencia de velocidad operacional (V85).
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Cálculo automático de Distancia de Visibilidad de Parada (DVP).
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Generación de esquemas de señalización vertical y horizontal.
            </li>
          </ul>
        </div>

        {/* LADO DERECHO — El Reproductor de Video */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-black/40 p-2 shadow-inner">
          <div className="overflow-hidden rounded-xl aspect-video relative">
            <video
              src="/videos/analyzer-colombia.mp4"
              controls
              preload="metadata"
              className="w-full h-full object-cover"
              controlsList="nodownload"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoDemo;