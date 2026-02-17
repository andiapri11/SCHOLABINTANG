import PromoPortal from "@/components/products/PromoPortal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schola Portal - Sistem Informasi Manajemen Sekolah Terintegrasi",
    description: "Kelola data siswa, keuangan sekolah, absensi, dan nilai dalam satu platform. Solusi digitalisasi administrasi sekolah yang modern dan mudah digunakan.",
    keywords: ["Schola Portal", "sistem informasi sekolah", "manajemen sekolah digital", "aplikasi administrasi sekolah", "software sekolah"],
    alternates: {
        canonical: 'https://codifi.id/scholaportal',
    }
};

export default function Page() {
    return (
        <LanguageProvider>
            <main>
                <Navbar />
                <PromoPortal />
                <Footer />
            </main>
        </LanguageProvider>
    );
}
