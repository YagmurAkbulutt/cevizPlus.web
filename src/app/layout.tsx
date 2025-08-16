import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { structuredData } from "@/lib/structuredData";
import translations from "@/lib/translations/tr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: translations.site.title,
  description: translations.site.description,
  keywords: translations.site.keywords,
  authors: [{ name: "Ceviz Plus" }],
  robots: "index, follow",
  openGraph: {
    title: translations.site.title,
    description: translations.site.description,
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
    title: translations.site.title,
    description: translations.site.description,
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
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
