'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/lib/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <Link href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">C+</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Ceviz Plus</span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                {t('home')}
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                {t('services')}
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                Hakkımızda
              </a>
              <a
                href="#gallery"
                className="text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                {t('gallery')}
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                {t('contact')}
              </a>
            </nav>

            {/* CTA Button */}
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-custom shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Sipariş Ver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-custom p-2 rounded-lg hover:bg-primary/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('toggleMenu')}
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
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/10">
              <nav className="space-y-3">
                <a
                  href="#home"
                  className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('home')}
                </a>
                <a
                  href="#services"
                  className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('services')}
                </a>
                <a
                  href="#about"
                  className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hakkımızda
                </a>
                <a
                  href="#gallery"
                  className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('gallery')}
                </a>
                <a
                  href="#contact"
                  className="block text-foreground hover:text-primary transition-custom font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                </a>
                <div className="pt-3 border-t border-primary/10">
                  <a
                    href="#contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-lg font-semibold transition-custom text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sipariş Ver
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