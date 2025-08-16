'use client';

import Image from 'next/image';
import { useTranslations } from "@/lib/useTranslations";


const About = () => {
  const t = useTranslations('about');

  const stats = [
    { key: 'experience', value: '30+', icon: '🏆' },
    { key: 'customers', value: '5000+', icon: '👥' },
    { key: 'saplings', value: '50K+', icon: '🌱' },
    { key: 'success', value: '%95', icon: '✅' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-modern">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-tight">
          <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4 text-shadow-soft">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {t('description')}
            </p>
            
            <div className="space-y-professional">
              <div className="card-modern p-8 rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 border border-primary/10">
                <h3 className="text-xl font-bold gradient-text mb-4 text-shadow-soft flex items-center">
                  <span className="mr-3">🌿</span>
                  {t('mission')}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {t('missionText')}
                </p>
              </div>
              
              <div className="card-modern p-8 rounded-xl shadow-medium hover:shadow-strong transition-all duration-300 border border-primary/10">
                <h3 className="text-xl font-bold gradient-text mb-4 text-shadow-soft flex items-center">
                  <span className="mr-3">🌱</span>
                  {t('vision')}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {t('visionText')}
                </p>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              {/* Main Image */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/IMG_6381.JPG"
                  alt="Ceviz Fidanlığı"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{t('images.main.title')}</h3>
                  <p className="text-sm opacity-90">{t('images.main.subtitle')}</p>
                </div>
              </div>
              
              {/* Secondary Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/IMG_6395.JPG"
                    alt="Ceviz Ağacı Bakımı"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                    {t('images.care.title')}
                  </div>
                </div>
                <div className="relative h-32 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/IMG_6600.JPG"
                    alt="Kaliteli Ceviz Üretimi"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 text-white text-xs font-semibold">
                    {t('images.production.title')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="card-modern rounded-2xl p-8 shadow-strong bg-gradient-modern">
          <h3 className="text-2xl font-bold text-center gradient-text mb-8 text-shadow-soft">
            {t("stats.title")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 text-shadow-soft">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70 font-medium">
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
