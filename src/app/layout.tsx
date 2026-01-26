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
  metadataBase: new URL('https://scholabintang.id'), // Ganti dengan domain Anda nanti
  title: {
    default: "Schola Bintang Digital | Jasa Pembuatan Website & Aplikasi Web Premium",
    template: "%s | Schola Bintang Digital"
  },
  description: "Schola Bintang Digital menghadirkan jasa pembuatan website profesional, landing page modern, dan aplikasi web custom yang cepat, mobile-friendly, dan SEO optimized.",
  keywords: [
    "Schola Bintang Digital",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi web",
    "web development agency indonesia",
    "nextjs developer",
    "landing page murah berkualitas",
    "seo website",
    "pembuatan sistem informasi"
  ],
  authors: [{ name: "Schola Bintang Digital Team" }],
  creator: "Schola Bintang Digital",
  publisher: "Schola Bintang Digital",
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
    title: "Schola Bintang Digital | Jasa Pembuatan Website & Aplikasi Web Premium",
    description: "Solusi digital modern untuk transformasi bisnis Andabersama Schola Bintang Digital. Cepat, Aman, dan SEO Friendly.",
    url: 'https://scholabintang.id',
    siteName: 'Schola Bintang Digital',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schola Bintang Digital | Web Development Service',
    description: 'Transformasi bisnis Anda ke ranah digital bersama Schola Bintang Digital.',
  },
  verification: {
    google: 'google-site-verification-id', // Ganti dengan ID dari Google Search Console
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
        <VisitorTracker />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
