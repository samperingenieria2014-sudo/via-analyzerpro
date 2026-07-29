"use client";
import { useState, useRef, useEffect } from "react";

export type LanguageCode = "ES" | "EN" | "DE" | "PL" | "FR" | "PT" | "IT";

interface Language {
  code: LanguageCode;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: "ES", label: "Español", flag: "🇨🇴" },
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  { code: "PL", label: "Polski", flag: "🇵🇱" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
  { code: "PT", label: "Português", flag: "🇧🇷" },
  { code: "IT", label: "Italiano", flag: "🇮🇹" },
];

export const LanguageSwitcher = ({
  onLanguageChange,
}: {
  onLanguageChange?: (code: LanguageCode) => void;
}) => {
  const [selectedLang, setSelectedLang] = useState<Language>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);
    if (onLanguageChange) {
      onLanguageChange(lang.code);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg border border-stroke px-3 py-1.5 text-xs font-semibold uppercase text-black transition duration-300 hover:border-primary hover:text-primary dark:border-dark-3 dark:text-white dark:hover:border-primary dark:hover:text-primary"
        aria-label="Seleccionar idioma"
      >
        <span>{selectedLang.flag}</span>
        <span>{selectedLang.code}</span>
        <svg
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 origin-top-right rounded-md border border-stroke bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:border-dark-3 dark:bg-gray-dark z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`flex w-full items-center gap-2 px-4 py-2 text-xs font-medium ${
                  selectedLang.code === lang.code
                    ? "bg-primary/10 text-primary dark:bg-primary/20"
                    : "text-body-color hover:bg-gray-100 hover:text-primary dark:text-body-color-dark dark:hover:bg-dark-2 dark:hover:text-primary"
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};