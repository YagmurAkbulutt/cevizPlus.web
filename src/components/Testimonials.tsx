'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from '@/lib/translations';

const Testimonials = () => {
  const t = useTranslations('testimonials');
  const testimonials = [
    {
      id: 1,
      name: t('items.sarah.name'),
      role: t('items.sarah.role'),
      location: t('items.sarah.location'),
      quote: t('items.sarah.quote'),
      rating: 5,
    },
    {
      id: 2,
      name: t('items.david.name'),
      role: t('items.david.role'),
      location: t('items.david.location'),
      quote: t('items.david.quote'),
      rating: 5,
    },
    {
      id: 3,
      name: t('items.maria.name'),
      role: t('items.maria.role'),
      location: t('items.maria.location'),
      quote: t('items.maria.quote'),
      rating: 5,
    },
    {
      id: 4,
      name: t('items.james.name'),
      role: t('items.james.role'),
      location: t('items.james.location'),
      quote: t('items.james.quote'),
      rating: 5,
    },
    {
      id: 5,
      name: t('items.lisa.name'),
      role: t('items.lisa.role'),
      location: t('items.lisa.location'),
      quote: t('items.lisa.quote'),
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-primary/5 to-accent/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-primary/10">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-6 text-primary/20 text-6xl font-serif leading-none">
              &ldquo;
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pt-8">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-6">
                  {testimonials[activeIndex].quote}
                </p>

                <div className="flex items-center justify-center mb-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-primary mb-1">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-secondary font-medium mb-1">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-custom ${
                      index === activeIndex
                        ? 'bg-primary'
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-foreground/70">{t('stats.customers')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-foreground/70">{t('stats.experience')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-foreground/70">{t('stats.treesPlanted')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;