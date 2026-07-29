"use client";
import React, { createContext, useContext, useState } from "react";
import { LanguageCode } from "@/components/Header/LanguageSwitcher";

// Importar los diccionarios JSON directamente
import es from "@/dictionaries/es.json";
import en from "@/dictionaries/en.json";
import de from "@/dictionaries/de.json";
import pl from "@/dictionaries/pl.json";
import fr from "@/dictionaries/fr.json";
import pt from "@/dictionaries/pt.json";
import it from "@/dictionaries/it.json";

const dictionaries: Record<LanguageCode, typeof es> = {
  ES: es,
  EN: en,
  DE: de,
  PL: pl,
  FR: fr,
  PT: pt,
  IT: it,
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: typeof es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>("ES");

  const value = {
    language,
    setLanguage,
    t: dictionaries[language] || es,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
};