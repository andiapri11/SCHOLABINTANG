import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
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
  metadataBase: new URL('https://codifi.id'), // Ganti dengan domain Anda nanti
  title: {
    default: "Codifi - Jasa Pembuatan Website & Aplikasi Web Professional",
    template: "%s | Codifi - Cipta Inovasi Digital"
  },
  description: "Jasa pembuatan website professional dan aplikasi web kustom di Indonesia. Solusi digital strategis untuk bisnis & instansi pendidikan dengan desain modern, cepat, dan SEO-friendly.",
  keywords: [
    "Codifi",
    "Cipta Inovasi Digital",
    "jasa pembuatan website",
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
  alternates: {
    canonical: '/',
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
    google: 'google-site-verification-id',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Codifi - Cipta Inovasi Digital",
              "url": "https://codifi.id",
              "logo": "https://codifi.id/icon.png",
              "description": "Jasa pembuatan website professional dan aplikasi web kustom di Indonesia.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Palembang",
                "addressRegion": "Sumatera Selatan",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+6281234567890",
                "contactType": "customer service"
              }
            })
          }}
        />
        <VisitorTracker />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
