import PromoContent from "@/components/PromoContent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schola CBT - Aplikasi Ujian Digital Anti-Curang & Stabil",
    description: "Platform Computer Based Test (CBT) terbaik untuk sekolah. Fitur bank soal acak, pengamanan ujian, dan koreksi otomatis real-time.",
    keywords: ["Schola CBT", "aplikasi ujian sekolah", "software CBT", "aplikasi ujian digital", "ujian online sekolah"]
};

export default function PromoPage() {
    return (
        <main>
            <Navbar />
            <PromoContent />
            <Footer />
        </main>
    );
}
