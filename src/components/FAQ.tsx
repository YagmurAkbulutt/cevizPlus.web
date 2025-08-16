'use client';

import { useState } from 'react';
import { useTranslations } from "@/lib/useTranslations";


const FAQ = () => {
  const t = useTranslations('faq');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems = [
    'fidanTypes',
    'varietySelection',
    'planting',
    'plantingMethod',
    'harvest',
    'soil',
    'pricing',
    'care',
    'watering',
    'onlineOrder'
  ];

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-primary/10 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-primary/5 transition-custom"
                  onClick={() => toggleItem(item)}
                >
                  <span className="text-xl font-semibold text-primary pr-4">
                    {t(`items.${item}.question`)}
                  </span>
                  <div className={`transform transition-transform duration-200 ${openItem === item ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openItem === item && (
                  <div className="px-6 pb-5">
                    <div className="border-t border-primary/10 pt-4">
                      <p className="text-foreground/80 leading-relaxed">
                        {t(`items.${item}.answer`)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                {t('contactCta.title')}
              </h3>
              <p className="text-foreground/80 mb-6">
                {t('contactCta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-custom shadow-lg hover:shadow-xl"
                >
                  {t('contactCta.contactButton')}
                </a>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-custom shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  {t('contactCta.whatsappButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
