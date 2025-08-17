'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { useTranslations } from "@/lib/useTranslations";


type GalleryItem = {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  alt: string;
  category: string;
};

// Helper function to get gradient colors based on category
const getGradientForCategory = (category: string) => {
  const gradients: { [key: string]: string } = {
    'Olgun Ağaçlar': 'from-green-600 to-green-800',
    'Hasat': 'from-amber-500 to-orange-600',
    'Genç Ağaçlar': 'from-emerald-400 to-green-600',
    'Bakım Hizmetleri': 'from-blue-500 to-blue-700',
    'Çeşitler': 'from-purple-500 to-purple-700',
    'Sürdürülebilirlik': 'from-teal-500 to-teal-700',
    'Çoğaltma': 'from-indigo-500 to-indigo-700',
  };
  return gradients[category] || 'from-primary to-secondary';
};

// Helper function to get category-specific icons
const getCategoryIcon = (category: string) => {
  const icons: { [key: string]: React.ReactElement } = {
    'Olgun Ağaçlar': (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
      </svg>
    ),
    'Hasat': (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6Z"/>
      </svg>
    ),
    'Genç Ağaçlar': (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,1L8,5H11V14H13V5H16M12,21A2,2 0 0,1 10,19A2,2 0 0,1 12,17A2,2 0 0,1 14,19A2,2 0 0,1 12,21Z"/>
      </svg>
    ),
    'Bakım Hizmetleri': (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7,19L13.6,9.9C14.5,7.6 14,4.9 12.1,3C10.1,1 7.1,0.6 4.7,1.7L9,6L6,9L1.6,4.7C0.4,7.1 0.9,10.1 2.9,12.1C4.8,14 7.5,14.5 9.8,13.6L18.9,22.7C19.3,23.1 19.9,23.1 20.3,22.7L22.6,20.4C23.1,20 23.1,19.3 22.7,19Z"/>
      </svg>
    ),
    'Çeşitler': (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L9,7V9C9,10.1 9.9,11 11,11V22H13V11C14.1,11 15,10.1 15,9Z"/>
      </svg>
    ),
    'Sürdürülebilirlik': (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
      </svg>
    ),
    'Çoğaltma': (
      <svg fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
      </svg>
    ),
  };
  return icons[category] || (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
    </svg>
  );
};

const Gallery = () => {
  const t = useTranslations('gallery');
  // Gallery items using actual images from public/images directory
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: t('items.matureGrove.title'),
      description: t('items.matureGrove.description'),
      imagePath: '/images/IMG_6591.JPG',
      alt: t('items.matureGrove.title'),
      category: t('categories.matureTrees'),
    },
    {
      id: 2,
      title: t('items.harvest.title'),
      description: t('items.harvest.description'),
      imagePath: '/images/IMG_5680.JPG',
      alt: t('items.harvest.title'),
      category: t('categories.harvest'),
    },
    {
      id: 3,
      title: t('items.saplings.title'),
      description: t('items.saplings.description'),
      imagePath: '/images/IMG_5418.JPG',
      alt: t('items.saplings.title'),
      category: t('categories.youngTrees'),
    },
    {
      id: 4,
      title: t('items.care.title'),
      description: t('items.care.description'),
      imagePath: '/images/IMG_6372.JPG',
      alt: t('items.care.title'),
      category: t('categories.careServices'),
    },
    {
      id: 5,
      title: t('items.varieties.title'),
      description: t('items.varieties.description'),
      imagePath: '/images/IMG_5423.JPG',
      alt: t('items.varieties.title'),
      category: t('categories.varieties'),
    },
    {
      id: 6,
      title: t('items.sustainable.title'),
      description: t('items.sustainable.description'),
      imagePath: '/images/IMG_6381.JPG',
      alt: t('items.sustainable.title'),
      category: t('categories.sustainability'),
    },
    {
      id: 7,
      title: t('items.rootSystems.title'),
      description: t('items.rootSystems.description'),
      imagePath: '/images/IMG_5434.JPG',
      alt: t('items.rootSystems.title'),
      category: t('categories.propagation'),
    },
    {
      id: 8,
      title: t('items.grafting.title'),
      description: t('items.grafting.description'),
      imagePath: '/images/IMG_6387.JPG',
      alt: t('items.grafting.title'),
      category: t('categories.propagation'),
    },
    {
      id: 9,
      title: t('items.groveView.title'),
      description: t('items.groveView.description'),
      imagePath: '/images/IMG_6395.JPG',
      alt: t('items.groveView.title'),
      category: t('categories.matureTrees'),
    },
    {
      id: 10,
      title: t('items.qualityProduction.title'),
      description: t('items.qualityProduction.description'),
      imagePath: '/images/IMG_6397.JPG',
      alt: t('items.qualityProduction.title'),
      category: t('categories.harvest'),
    },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer relative overflow-hidden rounded-xl card-modern shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 image-overlay focus-ring"
              onClick={() => setSelectedImage(item)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-primary text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-white/90 text-primary p-2 rounded-full shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-custom">
                  {item.title}
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Image Modal with Zoom */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 w-full overflow-hidden bg-black">
                <TransformWrapper
                  initialScale={1}
                  minScale={1}
                  maxScale={4}
                  wheel={{ step: 0.1 }}
                  pinch={{ step: 5 }}
                  doubleClick={{ disabled: false, step: 0.7 }}
                  panning={{ disabled: false }}
                  centerOnInit={true}
                  limitToBounds={true}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      <TransformComponent
                        wrapperClass="!w-full !h-full"
                        contentClass="!w-full !h-full !flex !items-center !justify-center"
                      >
                        <img
                          src={selectedImage.imagePath}
                          alt={selectedImage.alt}
                          className="w-full h-full object-cover"
                          style={{ minWidth: '100%', minHeight: '100%' }}
                        />
                      </TransformComponent>
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>
                      <div className="absolute bottom-4 left-4 text-white pointer-events-none z-20">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 mr-3 drop-shadow-lg">
                            {getCategoryIcon(selectedImage.category)}
                          </div>
                          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                            {selectedImage.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold drop-shadow-md">{selectedImage.title}</h3>
                      </div>
                      <button
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-custom backdrop-blur-sm pointer-events-auto z-30"
                        onClick={() => setSelectedImage(null)}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      {/* Modern Zoom Controls */}
                      <div className="absolute bottom-4 right-4 pointer-events-auto z-30">
                        <div className="flex gap-1">
                          <button
                            className="group text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/10"
                            onClick={() => zoomIn()}
                            title="Yakınlaştır"
                          >
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m-2-2h4" />
                            </svg>
                          </button>
                          <button
                            className="group text-white p-3 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/10"
                            onClick={() => zoomOut()}
                            title="Uzaklaştır"
                          >
                            <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Modern Zoom Hint */}
                      
                    </>
                  )}
                </TransformWrapper>

              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{selectedImage.title}</h3>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg">{selectedImage.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-custom shadow-lg hover:shadow-xl flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {t('modal.back')}
                  </button>
                  <a
                    href="#contact"
                    className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition-custom shadow-lg hover:shadow-xl flex items-center justify-center"
                    onClick={() => setSelectedImage(null)}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {t('modal.contact')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
    </section>
  );
};

export default Gallery;