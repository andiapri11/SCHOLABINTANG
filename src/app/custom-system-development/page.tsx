import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PromoCustomSystem from "@/components/products/PromoCustomSystem";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Sistem Informasi Kustom (ERP, CRM, Finance)",
    description: "Codifi menghadirkan jasa pengembangan sistem informasi kustom yang dirancang khusus sesuai alur kerja bisnis Anda. Mulai dari modul tunggal hingga ERP skala perusahaan.",
    keywords: [
        "jasa pembuatan sistem kustom",
        "buat sistem informasi perusahaan",
        "jasa erp murah indonesia",
        "jasa crm kustom",
        "pengembangan software kustom",
        "sistem manajemen operasional",
        "codifi custom system development"
    ],
    openGraph: {
        title: "Jasa Pembuatan Sistem Informasi Kustom | Codifi",
        description: "Optimalkan operasional bisnis Anda dengan sistem yang dirancang khusus mengikuti workflow tim Anda.",
        url: 'https://codifi.id/custom-system-development',
    },
    alternates: {
        canonical: 'https://codifi.id/custom-system-development',
    }
};

export default function CustomSystemPage() {
    return (
        <main>
            <Navbar />
            <PromoCustomSystem />
            <Footer />
        </main>
    );
}
