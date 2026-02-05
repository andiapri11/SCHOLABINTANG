import PromoCompanySekolah from "@/components/PromoCompanySekolah";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Web Company Profile Sekolah & Bisnis | Codifi",
    description: "Tingkatkan kredibilitas institusi Anda dengan website profil sekolah yang modern, responsif, dan SEO-friendly. Mulai dari 500rb-an. Gratis hosting & domain.",
    keywords: ["jasa company profile sekolah", "buat website sekolah", "website profil profesional", "codifi web sekolah"],
    alternates: {
        canonical: 'https://codifi.id/web-company-profile-sekolah',
    }
};

export default function CompanyProfilePage() {
    return (
        <main>
            <Navbar />
            <PromoCompanySekolah />
            <Footer />
        </main>
    );
}
