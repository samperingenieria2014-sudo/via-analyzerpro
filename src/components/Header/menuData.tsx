import { Menu } from "@/types/menu";

export const getMenuData = (t: any): Menu[] => {
  const h = t?.Header;

  return [
    {
      id: 1,
      title: h?.home || "Inicio",
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: h?.services || "Servicios",
      path: "#features",
      newTab: false,
    },
    {
      id: 3,
      title: h?.methodology || "Metodología",
      path: "#metodologia",
      newTab: false,
    },
    {
      id: 4,
      title: h?.cases || "Casos Reales",
      path: "#case-studies",
      newTab: false,
    },
    {
      id: 5,
      title: h?.pricing || "Precios",
      path: "#pricing",
      newTab: false,
    },
    {
      id: 6,
      title: h?.contact || "Contacto",
      path: "#contact",
      newTab: false,
    },
  ];
};