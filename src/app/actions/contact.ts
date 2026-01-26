"use server";

import { saveSubmission } from "@/lib/db";

export async function submitConsultation(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !service || !message) {
        return { error: "Semua field harus diisi." };
    }

    try {
        await saveSubmission({
            type: 'consultation',
            name,
            email,
            service,
            message
        });
        return { success: "Pesan Anda telah terkirim! Tim kami akan menghubungi Anda segera." };
    } catch (error) {
        console.error("DB Error:", error);
        return { error: "Terjadi kesalahan saat menyimpan data. Silakan coba lagi nanti." };
    }
}
