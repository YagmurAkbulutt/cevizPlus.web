'use client';

import { useTranslations } from "@/lib/useTranslations";


const Testimonials = () => {
  const t = useTranslations('testimonials');

  return (
    <section id="testimonials" className="py-12 bg-gradient-to-b from-white to-green-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Compact Statistics */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-green-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('stats.customers')}</h3>
              <p className="text-gray-600 text-xs">{t('stats.customersDescription')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-green-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">30+</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('stats.experience')}</h3>
              <p className="text-gray-600 text-xs">{t('stats.experienceDescription')}</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md border border-green-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">10,000+</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('stats.treesPlanted')}</h3>
              <p className="text-gray-600 text-xs">{t('stats.treesPlantedDescription')}</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200 text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('stats.qualityGuarantee')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;