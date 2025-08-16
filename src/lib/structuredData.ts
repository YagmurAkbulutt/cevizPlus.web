// lib/structuredData.ts
  export const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ceviz Plus",
    "description": "Premium ceviz fidanlığı, yüksek kaliteli ceviz ağaçları ve uzman arborikültür hizmetleri konusunda uzmanlaşmıştır",
    "url": "https://cevizplus.com",
    "telephone": "+90-123-456-7890",
    "email": "info@cevizplus.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Ceviz Korusu Sokağı",
      "addressLocality": "Ceviz Vadisi",
      "addressRegion": "Bursa",
      "postalCode": "16000",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.1826",
      "longitude": "29.0665"
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 09:00-15:00"
    ],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.1826",
        "longitude": "29.0665"
      },
      "geoRadius": "200"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ceviz Ağaçları ve Hizmetler",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "İngiliz Cevizi Ağaçları",
            "description": "Üstün kalite ve hastalık direnci ile premium İngiliz cevizi ağaçları"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Arborikültür Danışmanlığı",
            "description": "Ceviz ağacı dikimi, bakımı ve muhafazası konusunda uzman danışmanlık"
          }
        }
      ]
    }
  };
