import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
    title: "Hubungi Kami | Codifi - Jasa Pembuatan Website & Aplikasi",
    description: "Punya ide projek digital? Konsultasikan kebutuhan website, sistem manajemen, atau aplikasi mobile Anda dengan tim ahli Codifi secara gratis.",
    keywords: ["kontak codifi", "hubungi jasa website", "konsultasi website gratis", "jasa pembuatan aplikasi palembang"],
    alternates: {
        canonical: 'https://codifi.id/contact',
    }
};

export default function ContactPage() {
    return <ContactClient />;
}
