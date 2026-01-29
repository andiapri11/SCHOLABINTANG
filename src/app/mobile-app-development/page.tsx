import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoMobileApp from "@/components/PromoMobileApp";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Aplikasi Mobile Android & iOS Murah",
    description: "Codifi menyediakan jasa pembuatan aplikasi mobile kustom untuk Android dan iOS. Solusi aplikasi WebView mulai 1.5jt hingga aplikasi Hybrid Enterprise dengan fitur lengkap.",
    keywords: [
        "jasa pembuatan aplikasi mobile",
        "jasa buat aplikasi android murah",
        "jasa pembuatan aplikasi ios",
        "developer aplikasi flutter indonesia",
        "jasa aplikasi mobile hybrid",
        "buat aplikasi umkm murah",
        "codifi mobile app development"
    ],
    openGraph: {
        title: "Jasa Pembuatan Aplikasi Mobile Android & iOS | Codifi",
        description: "Transformasi bisnis Anda ke perangkat mobile dengan aplikasi kustom yang cepat dan stabil mulai dari 1.5 Juta.",
        url: 'https://codifi.id/mobile-app-development',
    }
};

export default function MobileAppPage() {
    return (
        <main>
            <Navbar />
            <PromoMobileApp />
            <Footer />
        </main>
    );
}
