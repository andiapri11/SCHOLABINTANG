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
    default: "Codifi - Cipta Digital Indonesia | Professional Web Development",
    template: "%s | Codifi"
  },
  description: "Codifi (Cipta Digital Indonesia) delivers professional website development, modern landing pages, and custom web applications that are fast, mobile-friendly, and SEO optimized.",
  keywords: [
    "Codifi",
    "jasa pembuatan website",
    "jasa pembuatan aplikasi web",
    "web development agency indonesia",
    "nextjs developer",
    "landing page murah berkualitas",
    "seo website",
    "pembuatan sistem informasi"
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
    title: "Codifi | Professional Website & Web App Development Services",
    description: "Modern digital solutions for your business transformation with Codifi. Fast, Secure, and SEO Friendly.",
    url: 'https://codifi.id',
    siteName: 'Codifi',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codifi | Web Development Service',
    description: 'Transform your business into the digital realm with Codifi.',
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
