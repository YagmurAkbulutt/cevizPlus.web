'use client';

import { useTranslations } from '@/lib/translations';

const About = () => {
  const t = useTranslations('about');

  const stats = [
    { key: 'experience', value: '20+', icon: '🏆' },
    { key: 'customers', value: '5000+', icon: '👥' },
    { key: 'saplings', value: '50K+', icon: '🌱' },
    { key: 'success', value: '%95', icon: '✅' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {t('description')}
            </p>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                  <span className="mr-3">🎯</span>
                  {t('mission')}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {t('missionText')}
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/10">
                <h3 className="text-xl font-bold text-primary mb-3 flex items-center">
                  <span className="mr-3">🚀</span>
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
            <div className="bg-gradient-to-br from-primary/20 to-accent/30 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/90 rounded-2xl p-8 text-center">
                <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 text-primary">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V22H13V11C14.1 11 15 10.1 15 9Z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">Kalite Güvencesi</h3>
                    <p className="text-sm text-foreground/70">Her fidan özenle seçilir ve test edilir</p>
                  </div>
                </div>
                <div className="text-sm text-primary font-semibold">
                  &ldquo;Doğanın en iyisini sizlere sunuyoruz&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary/10 text-center group hover:shadow-xl transition-custom"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-custom">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/70 font-medium">
                {t(`stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
