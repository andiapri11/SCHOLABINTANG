import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoVoraPOS from "@/components/PromoVoraPOS";

export const metadata: Metadata = {
    title: "VORA POS - Aplikasi Kasir & Stok Multi-branch Terbaik",
    description: "Tingkatkan efisiensi bisnis Anda dengan VORA POS. Sistem kasir, stok, dan akuntansi terpadu untuk multi-cabang. Promo Tahun Ajaran Baru mulai dari 1.49 Juta.",
    keywords: [
        "aplikasi kasir multi cabang",
        "software pos terbaik indonesia",
        "sistem kasir beli putus",
        "aplikasi stok barang toko",
        "vora pos codifi",
        "aplikasi kasir usaha retail",
        "jasa pembuatan pos custom"
    ],
    openGraph: {
        title: "VORA POS | Sistem Kasir & Inventori Cerdas | Codifi",
        description: "Kelola banyak cabang dalam satu genggaman. Dapatkan promo hemat 40% untuk paket VORA Starter.",
        url: 'https://codifi.id/vorapos',
    }
};

export default function VoraPOSPage() {
    return (
        <main>
            <Navbar />
            <PromoVoraPOS />
            <Footer />
        </main>
    );
}
