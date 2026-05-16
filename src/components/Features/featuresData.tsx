import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
    src="/images/Features/1.Auditoria Vial.png"
    alt="Auditoría de Seguridad Vial"
    width={80}
    height={80}
  />
    ),
    title: "Auditoría de Seguridad Vial",
    paragraph:
      "Identificamos riesgos ocultos en carreteras, glorietas e intersecciones mediante auditorías técnicas avanzadas basadas en velocidad operacional, visibilidad, geometría y cumplimiento normativo.",
  },
  {
    id: 2,
    icon: (
      <Image
    src="/images/Features/2. Analisis Geometrico.png"
    alt="Análisis Geométrico Automatizado"
    width={80}
    height={80}
  />
    ),
    title: "Análisis Geométrico Automatizado",
    paragraph:
      "Validación inteligente de radios, peraltes, sobreanchos, bombeo, espirales, coordinación planta-perfil y distancias de visibilidad bajo normativa vial oficial.",
  },
  {
    id: 3,
    icon: (
      <Image
    src="/images/Features/3. Senalizacion Inteligente.png"
    alt="Señalización Inteligente"
    width={100}
    height={100}
  />
    ),
    title: "Señalización Inteligente",
    paragraph:
      "Detectamos inconsistencias críticas en señalización vertical y horizontal, validando ubicación, coherencia normativa, visibilidad y necesidad real según el comportamiento operacional de la vía.",
  },
  {
    id: 4,
    icon: (
      <Image
    src="/images/Features/4.Compatinilidad Multipais.png"
    alt="Compatibilidad Multipaís"
    width={100}
    height={100}
  />
    ),
    title: "Compatibilidad Multipaís",
    paragraph:
      "Compatible con normativa Colombia INVÍAS, Perú MTC y Chile MOP, permitiendo auditorías y validaciones geométricas adaptadas a cada estándar técnico oficial.",
  },
  {
    id: 5,
    icon: (
      <Image
    src="/images/Features/5.Analisis de Glorietas.png"
    alt="Análisis de Glorietas y Óvalos"
    width={100}
    height={100}
  />
    ),
    title: "Análisis de Glorietas y Óvalos",
    paragraph:
      "Evaluamos deflexión, velocidad de entrada, trayectorias críticas, conflictos vehiculares y seguridad operacional en glorietas urbanas y rurales.",
  },
  {
    id: 6,
    icon: (
      <Image
    src="/images/Features/6. Validacion Normativa en tiempo menor.png"
    alt="Validación normativa en menor tiempo"
    width={100}
    height={100}
  />
    ),
    title: "Validación normativa en menor tiempo",
    paragraph:
      "Reducimos significativamente los tiempos de revisión técnica mediante análisis automatizado de geometría vial, V85, señalización, seguridad vial y hallazgos críticos.",
  },
];
export default featuresData;
