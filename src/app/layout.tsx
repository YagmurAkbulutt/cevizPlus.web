import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ceviz Plus | Premium Ceviz Fidanlığı ve Arborikültür Hizmetleri",
  description: "Premium ceviz ağaçları, uzman arborikültür hizmetleri ve başarılı ceviz yetiştiriciliği için profesyonel danışmanlık. İngiliz, Siyah ve Fars cevizi çeşitleri mevcuttur.",
  keywords: "ceviz fidanlığı, ceviz ağaçları, ceviz arborikültürü, ceviz yetiştiriciliği, İngiliz cevizi, Siyah ceviz, Fars cevizi, fidan, bahçe planlama, ceviz çiftçiliği",
  authors: [{ name: "Ceviz Plus" }],
  robots: "index, follow",
  openGraph: {
    title: "Ceviz Plus | Premium Ceviz Fidanlığı ve Arborikültür Hizmetleri",
    description: "Premium ceviz ağaçları, uzman arborikültür hizmetleri ve başarılı ceviz yetiştiriciliği için profesyonel danışmanlık.",
    url: "https://cevizplus.com",
    siteName: "Ceviz Plus",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://cevizplus.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ceviz Plus - Premium Ceviz Fidanlığı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceviz Plus | Premium Ceviz Fidanlığı",
    description: "Premium ceviz ağaçları ve başarılı ceviz yetiştiriciliği için uzman arborikültür hizmetleri.",
    images: ["https://cevizplus.com/og-image.jpg"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const structuredData = {
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

  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
