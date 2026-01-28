"use server";

import { saveSubmission } from "@/lib/db";

export async function submitConsultation(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !whatsapp || !service || !message) {
        return { error: "Semua field harus diisi." };
    }

    // Sanitize WhatsApp
    let sanitizedWa = whatsapp.replace(/\D/g, "");
    if (sanitizedWa.startsWith("0")) sanitizedWa = "62" + sanitizedWa.substring(1);
    else if (sanitizedWa.startsWith("8")) sanitizedWa = "62" + sanitizedWa;

    try {
        await saveSubmission({
            type: 'consultation',
            name,
            email,
            whatsapp: sanitizedWa,
            service,
            message
        });
        return { success: "Terima kasih, pesan Anda telah terkirim. Tim Codifi akan menghubungi Anda secepatnya." };
    } catch (error) {
        console.error("DB Error:", error);
        return { error: "Terjadi kesalahan saat menyimpan data. Silakan coba lagi nanti." };
    }
}
