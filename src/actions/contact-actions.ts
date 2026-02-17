"use server";

import { saveSubmission, getSettings, updateSettings } from "@/lib/database";

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

export async function submitDemoRequest(data: any) {
    const { name, school, whatsapp, jabatan, product } = data;

    if (!name || !school || !whatsapp || !jabatan) {
        return { error: "Semua field harus diisi." };
    }

    try {
        await saveSubmission({
            type: 'demo',
            name,
            school,
            whatsapp,
            jabatan, // Map to position in dashboard
            position: jabatan,
            service: `Demo: ${product}`,
            message: `Permintaan Demo untuk ${product} oleh ${jabatan} dari ${school}`
        });
        return { success: true };
    } catch (error) {
        console.error("DB Demo Error:", error);
        return { error: "Gagal menyimpan data." };
    }
}

export async function fetchSettings() {
    try {
        return await getSettings();
    } catch (error) {
        console.error("Fetch Settings Error:", error);
        return { whatsapp: "628218144726" };
    }
}

export async function saveSettingsAction(data: any) {
    try {
        await updateSettings(data);
        return { success: true };
    } catch (error) {
        console.error("Save Settings Error:", error);
        return { error: "Gagal menyimpan pengaturan." };
    }
}
