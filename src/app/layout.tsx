import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { SettingsProvider } from "@/lib/SettingsContext";
import VisitorTracker from "@/components/VisitorTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codifi.id'),
  alternates: {
    canonical: 'https://codifi.id',
  },
  title: {
    default: "Codifi - Jasa Pembuatan Website & Aplikasi Web Professional",
    template: "%s | Codifi - Cipta Inovasi Digital"
  },
  description: "Jasa pembuatan website professional dan aplikasi web kustom di Indonesia. Solusi digital strategis untuk bisnis & instansi pendidikan dengan desain modern, cepat, dan SEO-friendly.",
  keywords: [
    "Codifi",
    "Cipta Inovasi Digital",
    "jasa pembuatan website palembang",
    "jasa pembuatan aplikasi web",
    "web development agency indonesia",
    "jasa landing page",
    "jasa pembuatan sistem informasi",
    "jasa pembuatan website sekolah",
    "software house palembang",
    "website development palembang",
    "pembuatan aplikasi mobile",
    "jasa seo indonesia"
  ],
  authors: [{ name: "Codifi Team" }],
  creator: "Codifi",
  publisher: "Codifi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo-new.png',
    apple: '/images/logo-new.png',
  },
  openGraph: {
    title: "Codifi | Solusi Digital Strategis untuk Bisnis Anda",
    description: "Transformasi bisnis Anda ke ranah digital dengan website dan aplikasi kustom yang cepat, aman, dan berorientasi hasil.",
    url: 'https://codifi.id',
    siteName: 'Codifi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Codifi - Professional Web Development',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codifi | Jasa Pembuatan Website & App',
    description: 'Bantu bisnis Anda tumbuh lebih cepat dengan solusi teknologi kustom dari Codifi.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'W2cgEcBUfDyFXgYD7cgWT_b-ZnF0E5H0vYpPJfKxIys',
  },
};


import { fetchSettings } from "@/app/actions/contact";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await fetchSettings();

  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FGZ93MC11L"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FGZ93MC11L');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Codifi",
                "image": "https://codifi.id/og-image.png",
                "url": "https://codifi.id",
                "telephone": `+${settings.whatsapp}`,
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Palembang",
                  "addressLocality": "Palembang",
                  "addressRegion": "South Sumatra",
                  "addressCountry": "ID"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -2.976073,
                  "longitude": 104.775431
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codifi.id" },
                  { "@type": "ListItem", "position": 2, "name": "Layanan", "item": "https://codifi.id/#services" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "itemListElement": [
                  { "@type": "SiteNavigationElement", "position": 1, "name": "Mobile Apps", "url": "https://codifi.id/mobile-app-development" },
                  { "@type": "SiteNavigationElement", "position": 2, "name": "Web Sekolah", "url": "https://codifi.id/web-company-profile-sekolah" },
                  { "@type": "SiteNavigationElement", "position": 3, "name": "VORA POS", "url": "https://codifi.id/vorapos" },
                  { "@type": "SiteNavigationElement", "position": 4, "name": "Custom System", "url": "https://codifi.id/custom-system-development" },
                  { "@type": "SiteNavigationElement", "position": 5, "name": "Schola CBT", "url": "https://codifi.id/scholacbt" }
                ]
              }
            ])
          }}
        />
        <VisitorTracker />
        <SettingsProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
