"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
 
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Servicios especializados en infraestructura vial"
          paragraph="Soluciones técnicas orientadas a auditoría vial, validación geométrica, señalización y seguridad vial bajo normativa latinoamericana."
          center
          width="665px"
        />
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
  packageName="Auditoría de Seguridad Vial"
  price=""
  duration=""
  subtitle="Evaluación técnica de corredores viales, glorietas e intersecciones con enfoque preventivo."
>
  <OfferList text="Identificación de puntos críticos" status="active" />
  <OfferList text="Análisis de riesgo vial" status="active" />
  <OfferList text="Validación normativa" status="active" />
  <OfferList text="Revisión de señalización" status="active" />
  <OfferList text="Informe técnico especializado" status="active" />
</PricingBox>

<PricingBox
  packageName="Análisis Geométrico"
  price=""
  duration=""
  subtitle="Automatización de revisión geométrica y consistencia operacional."
>
  <OfferList text="Análisis V85" status="active" />
  <OfferList text="Control de radios y peraltes" status="active" />
  <OfferList text="Visibilidad y sobreanchos" status="active" />
  <OfferList text="Compatibilidad normativa" status="active" />
  <OfferList text="Reducción de tiempos de revisión" status="active" />
</PricingBox>

<PricingBox
  packageName="Señalización y Seguridad vial"
  price=""
  duration=""
  subtitle="Optimización de señalización vertical y horizontal basada en normativa técnica."
>
  <OfferList text="Detección de inconsistencias" status="active" />
  <OfferList text="Señalización reglamentaria" status="active" />
  <OfferList text="Demarcación horizontal" status="active" />
  <OfferList text="Criterios de seguridad vial" status="active" />
  <OfferList text="Optimización operacional" status="active" />
</PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
