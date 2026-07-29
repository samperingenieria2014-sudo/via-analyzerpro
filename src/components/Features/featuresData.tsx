import { Feature } from "@/types/feature";
import Image from "next/image";

// Convertimos la lista en una función que recibe 't'
export const getFeaturesData = (t: any): Feature[] => [
  {
    id: 1,
    icon: (
      <Image
        src="/images/Features/1.Auditoria Vial.png"
        alt={t?.Features?.feature1_title || "Auditoría de Seguridad Vial"}
        width={80}
        height={80}
      />
    ),
    title: t?.Features?.feature1_title || "Auditoría de Seguridad Vial",
    paragraph:
      t?.Features?.feature1_desc ||
      "Identificamos riesgos ocultos en carreteras, glorietas e intersecciones mediante auditorías técnicas avanzadas basadas en velocidad operacional, visibilidad, geometría y cumplimiento normativo.",
  },
  {
    id: 2,
    icon: (
      <Image
        src="/images/Features/2. Analisis Geometrico.png"
        alt={t?.Features?.feature2_title || "Análisis Geométrico Automatizado"}
        width={80}
        height={80}
      />
    ),
    title: t?.Features?.feature2_title || "Análisis Geométrico Automatizado",
    paragraph:
      t?.Features?.feature2_desc ||
      "Validación inteligente de radios, peraltes, sobreanchos, bombeo, espirales, coordinación planta-perfil y distancias de visibilidad bajo normativa vial oficial.",
  },
  {
    id: 3,
    icon: (
      <Image
        src="/images/Features/3. Senalizacion Inteligente1.png"
        alt={t?.Features?.feature3_title || "Señalización Inteligente"}
        width={100}
        height={100}
      />
    ),
    title: t?.Features?.feature3_title || "Señalización Inteligente",
    paragraph:
      t?.Features?.feature3_desc ||
      "Detectamos inconsistencias críticas en señalización vertical y horizontal, validando ubicación, coherencia normativa, visibilidad y necesidad real según el comportamiento operacional de la vía.",
  },
  {
    id: 4,
    icon: (
      <Image
        src="/images/Features/4.Compatinilidad Multipais.png"
        alt={t?.Features?.feature4_title || "Compatibilidad Multipaís"}
        width={100}
        height={100}
      />
    ),
    title: t?.Features?.feature4_title || "Compatibilidad Multipaís",
    paragraph:
      t?.Features?.feature4_desc ||
      "Compatible con normativa Colombia INVÍAS, Perú MTC y Chile MOP, permitiendo auditorías y validaciones geométricas adaptadas a cada estándar técnico oficial.",
  },
  {
    id: 5,
    icon: (
      <Image
        src="/images/Features/5.Analisis de Glorietas.png"
        alt={t?.Features?.feature5_title || "Análisis de Glorietas y Óvalos"}
        width={100}
        height={100}
      />
    ),
    title: t?.Features?.feature5_title || "Análisis de Glorietas y Óvalos",
    paragraph:
      t?.Features?.feature5_desc ||
      "Evaluamos deflexión, velocidad de entrada, trayectorias críticas, conflictos vehiculares y seguridad operacional en glorietas urbanas y rurales.",
  },
  {
    id: 6,
    icon: (
      <Image
        src="/images/Features/6. Validacion Normativa en tiempo menor.png"
        alt={t?.Features?.feature6_title || "Validación normativa en menor tiempo"}
        width={100}
        height={100}
      />
    ),
    title: t?.Features?.feature6_title || "Validación normativa en menor tiempo",
    paragraph:
      t?.Features?.feature6_desc ||
      "Reducimos significativamente los tiempos de revisión técnica mediante análisis automatizado de geometría vial, V85, señalización, seguridad vial y hallazgos críticos.",
  },
];