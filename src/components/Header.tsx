"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/lib/useTranslations";
import { useLanguage } from "@/lib/LanguageContext";
import { Locale } from "@/lib/translations";

const languageOptions: { code: Locale; flag: string; label: string }[] = [
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "sr", flag: "🇷🇸", label: "Српски" },      
  { code: "ro", flag: "🇷🇴", label: "Română" },      
  { code: "bs", flag: "🇧🇦", label: "Bosanski" },   
  { code: "ru", flag: "🇷🇺", label: "Русский" },    
];


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRefDesktop = useRef<HTMLDivElement>(null);
  const langDropdownRefMobile = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const { locale, setLocale } = useLanguage();

  const t = useTranslations("navigation");

  const selectedLang = languageOptions.find((l) => l.code === locale) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const desktop = langDropdownRefDesktop.current;
      const mobile = langDropdownRefMobile.current;
      const mobileMenu = mobileMenuRef.current;

      // Close language dropdown
      if (
        desktop &&
        !desktop.contains(event.target as Node) &&
        mobile &&
        !mobile.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }

      // Close mobile menu
      if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isLangOpen || isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isLangOpen, isMenuOpen]);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-soft">
      <div className="container-custom py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/logo.svg"
                alt="Ceviz Plus Logo"
                width={48}
                height={48}
                className="rounded-lg transition-transform group-hover:scale-105 shadow-medium"
              />
            </div>
            <span className="text-2xl font-bold gradient-text text-shadow-soft">Ceviz Plus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-custom font-medium relative group focus-ring px-3 py-2 rounded-lg hover:bg-primary/5">
                {t("home")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-custom font-medium relative group focus-ring px-3 py-2 rounded-lg hover:bg-primary/5">
                {t("services")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-custom font-medium relative group focus-ring px-3 py-2 rounded-lg hover:bg-primary/5">
                {t("aboutUs")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-custom font-medium relative group focus-ring px-3 py-2 rounded-lg hover:bg-primary/5">
                {t("gallery")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-custom font-medium relative group focus-ring px-3 py-2 rounded-lg hover:bg-primary/5">
                {t("contact")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Sipariş Ver Butonu */}
            <a href="#contact" className="btn-primary animate-pulse-glow shadow-medium hover:shadow-strong focus-ring">
              {t("orderNow")}
            </a>

            {/* Dil Seçici Desktop */}
            <div className="relative" ref={langDropdownRefDesktop}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-primary/5 transition-custom"
                aria-label="Dil Seçici"
              >
                <span className="text-xl">{selectedLang.flag}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    {languageOptions.map(({ code, flag, label }) => (
                      <li key={code}>
                        <button
                          className="w-full px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                          onClick={() => {
                            setLocale(code);
                            setIsLangOpen(false);
                          }}
                        >
                          <span className="text-xl">{flag}</span>
                          <span>{label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu & Language Selector */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Hamburger Menü Butonu */}
            <button
              className="text-foreground hover:text-primary transition-custom p-2 rounded-lg hover:bg-primary/5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t("toggleMenu")}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Mobil Dil Seçici */}
            <div className="relative" ref={langDropdownRefMobile}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 p-2 rounded-lg hover:bg-primary/5 transition-custom"
                aria-label="Dil Seçimi"
              >
                <span className="text-xl">{selectedLang.flag}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    {languageOptions.map(({ code, flag, label }) => (
                      <li key={code}>
                        <button
                          className="w-full px-4 py-2 hover:bg-gray-100 flex items-center space-x-2"
                          onClick={() => {
                            setLocale(code);
                            setIsLangOpen(false);
                          }}
                        >
                          <span className="text-xl">{flag}</span>
                          <span>{label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobil Menü İçeriği */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden absolute top-full left-0 right-0 z-50 px-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-primary/10">
              <nav className="space-y-3">
                <a href="#home" className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMenuOpen(false)}>
                  {t("home")}
                </a>
                <a href="#services" className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMenuOpen(false)}>
                  {t("services")}
                </a>
                <a href="#about" className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMenuOpen(false)}>
                  {t("aboutUs")}
                </a>
                <a href="#gallery" className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMenuOpen(false)}>
                  {t("gallery")}
                </a>
                <a href="#contact" className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5" onClick={() => setIsMenuOpen(false)}>
                  {t("contact")}
                </a>
                <div className="pt-3 border-t border-primary/10">
                  <a href="#contact" className="block bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-semibold transition-custom text-center" onClick={() => setIsMenuOpen(false)}>
                    {t("orderNow")}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
