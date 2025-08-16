"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Locale } from "./translations";
import config from "../../next-i18next.config";
// ⬅️ desteklenen dilleri al

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "app_locale";
const supportedLocales = config.i18n.locales; // ⬅️ ['tr', 'en', 'es', 'it', 'sr', 'ro', 'bs', 'ru'] gibi

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("tr"); // default

  // Sayfa yüklendiğinde localStorage'dan oku
  useEffect(() => {
    const savedLocale = localStorage.getItem(STORAGE_KEY);
    if (savedLocale && supportedLocales.includes(savedLocale)) {
      setLocale(savedLocale as Locale);
    }
  }, []);

  // locale değiştiğinde localStorage'a yaz
  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
