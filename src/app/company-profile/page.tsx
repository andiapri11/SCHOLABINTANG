import PromoCompany from "@/components/PromoCompany";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Web Company Profile Profesional | Codifi",
    description: "Tingkatkan kredibilitas bisnis Anda dengan website profil perusahaan yang modern, responsif, dan SEO-friendly. Mulai dari 500rb-an. Gratis hosting & domain.",
    keywords: ["jasa company profile", "buat website bisnis", "website profesional murah", "codifi company profile", "jasa pembuatan website profil"]
};

export default function CompanyProfilePage() {
    return (
        <main>
            <Navbar />
            <PromoCompany />
            <Footer />
        </main>
    );
}
