'use client';

import { useTranslations } from '@/lib/translations';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-accent/10 via-background to-primary/5 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🌱 Premium Ceviz Fidanları
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {t('title')}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-secondary mb-6">
              {t('subtitle')}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {t('description')}
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-foreground">{t('benefits.guarantee')}</span>
              </div>
              <div className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-foreground">{t('benefits.support')}</span>
              </div>
              <div className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-foreground">{t('benefits.delivery')}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-custom shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('cta')}
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-custom shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {t('ctaSecondary')}
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white/90 rounded-2xl p-6 text-center">
                  <div className="w-full h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 text-primary">
                        <svg fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{t('product.title')}</h3>
                      <p className="text-sm text-foreground/70">{t('product.subtitle')}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary font-semibold">{t('product.age')}</span>
                    <span className="text-primary font-semibold">{t('product.type')}</span>
                    <span className="text-primary font-semibold">{t('product.guarantee')}</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {t('badges.popular')}
              </div>
              <div className="absolute -bottom-4 -left-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {t('badges.natural')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-tertiary/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;