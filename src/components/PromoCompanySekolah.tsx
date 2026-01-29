"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { submitDemoRequest } from "@/app/actions/contact";
import { useSettings } from "@/lib/SettingsContext";
import {
    CheckCircle2,
    Smartphone,
    Zap,
    Globe,
    Shield,
    Layout,
    ArrowRight,
    MessageCircle,
    X,
    Code,
    Search,
    Server,
    Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoCompanySekolah() {
    const { settings } = useSettings();
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const product = {
        name: "Web Company Profile",
        price: "500rb-an",
        desc: "Tingkatkan rasa percaya pelanggan dengan website profil yang rapi, cepat, dan mencerminkan identitas bisnis profesional Anda.",
        features: [
            "Desain Modern & Profesional",
            "Mobile Friendly (Responsive)",
            "Optimasi SEO Google",
            "Gratis Hosting & Domain .com",
            "Email Bisnis & Keamanan SSL"
        ]
    };

    const detailedFeatures = [
        {
            icon: <Layout size={32} color="var(--primary)" />,
            title: "Desain Modern & Profesional",
            desc: "Tampilan visual yang elegan dan kekinian, dirancang khusus untuk membangun kredibilitas bisnis Anda di mata klien."
        },
        {
            icon: <Smartphone size={32} color="var(--primary)" />,
            title: "Mobile Friendly (Responsive)",
            desc: "Website tampil sempurna di semua perangkat, mulai dari smartphone, tablet, hingga desktop (PC/Laptop)."
        },
        {
            icon: <Search size={32} color="var(--primary)" />,
            title: "Optimasi SEO Google",
            desc: "Struktur website yang ramah mesin pencari, membantu bisnis Anda lebih mudah ditemukan oleh calon pelanggan di Google."
        },
        {
            icon: <Globe size={32} color="var(--primary)" />,
            title: "Gratis Hosting & Domain",
            desc: "Paket lengkap sudah termasuk domain .com/.id dan hosting performa tinggi selama 1 tahun pertama."
        },
        {
            icon: <Mail size={32} color="var(--primary)" />,
            title: "Email Bisnis & SSL",
            desc: "Gunakan email profesional (nama@bisnisanda.com) dan sertifikat keamanan SSL untuk transaksi yang aman."
        },
        {
            icon: <Zap size={32} color="var(--primary)" />,
            title: "Loading Super Cepat",
            desc: "Optimasi kode dan gambar untuk memastikan website terbuka dalam hitungan detik, meningkatkan kepuasan pengunjung."
        }
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            school: formData.get('company'), // reuse field for company name
            whatsapp: formData.get('whatsapp'),
            jabatan: formData.get('position'),
            product: product.name
        };

        const result = await submitDemoRequest(data);
        if (result.success) {
            setShowDemoForm(false);
            setShowSuccess(true);
        }
    };

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>

            {/* Hero Section */}
            <section className="hero-section" style={{
                padding: '90px 0 80px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    opacity: 0.1,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }} className="hero-grid">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{
                                display: 'inline-block',
                                padding: '0.5rem 1.25rem',
                                background: 'rgba(37, 99, 235, 0.1)',
                                color: 'var(--primary)',
                                borderRadius: '2rem',
                                fontSize: '0.85rem',
                                fontWeight: 800,
                                marginBottom: '1.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                🚀 Solusi Bisnis Digital
                            </div>

                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                                Website Profil Bisnis <br />
                                <span className="gradient-text">Profesional & Berkelas</span>
                            </h1>

                            <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                                {product.desc} Mulai bangun identitas online yang kuat dan tak terlupakan hari ini.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    className="btn btn-primary"
                                    style={{ padding: '1.25rem 2.5rem', borderRadius: '1rem', fontSize: '1.1rem' }}
                                >
                                    Konsultasi Sekarang <ArrowRight size={20} />
                                </button>
                                <a
                                    href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20tanya%20paket%20Web%20Company%20Profile.`}
                                    target="_blank"
                                    className="btn btn-outline"
                                    style={{ padding: '1.25rem 2.5rem', borderRadius: '1rem', fontSize: '1.1rem' }}
                                >
                                    Lihat Portofolio
                                </a>
                            </div>

                            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', alignItems: 'center', opacity: 0.7 }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>100+</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Client Puas</div>
                                </div>
                                <div style={{ width: '1px', height: '30px', background: '#e2e8f0' }}></div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>7 Hari</div>
                                    <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Rata-rata Selesai</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            {/* Card UI from Image */}
                            <div style={{
                                background: 'white',
                                borderRadius: '3rem',
                                padding: '3rem',
                                boxShadow: '0 40px 100px -20px rgba(15, 23, 42, 0.15)',
                                border: '2px solid var(--primary)',
                                position: 'relative',
                                textAlign: 'center'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: '#0f172a',
                                    color: 'white',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.8rem',
                                    fontWeight: 800,
                                    whiteSpace: 'nowrap'
                                }}>
                                    LAYANAN POPULER
                                </div>

                                <div style={{
                                    display: 'inline-block',
                                    padding: '0.4rem 1rem',
                                    background: '#fff1f2',
                                    color: '#f43f5e',
                                    borderRadius: '2rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    marginBottom: '1.5rem'
                                }}>
                                    PROMO TAHUN AJARAN BARU
                                </div>

                                <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
                                    Web Company Profile
                                </h2>

                                <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.5, marginBottom: '2rem' }}>
                                    Tingkatkan rasa percaya pelanggan dengan website profil yang rapi, cepat, dan mencerminkan identitas bisnis profesional Anda.
                                </p>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.8rem',
                                    textAlign: 'left',
                                    width: 'max-content',
                                    margin: '0 auto 2.5rem'
                                }}>
                                    {product.features.map((f, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                            <CheckCircle2 size={18} color="var(--primary)" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{
                                    background: '#f8fafc',
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    marginBottom: '2rem'
                                }}>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                                        MULAI DARI
                                    </div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a' }}>
                                        500rb<small style={{ fontSize: '1rem' }}>-an</small>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    style={{
                                        width: '100%',
                                        padding: '1.25rem',
                                        background: '#0f172a',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '1.25rem',
                                        fontSize: '1.1rem',
                                        fontWeight: 800,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.75rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Konsultasi Sekarang <ArrowRight size={20} />
                                </button>
                            </div>

                            {/* Floating decor */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
                                right: '-30px',
                                width: '100px',
                                height: '100px',
                                background: 'var(--primary)',
                                borderRadius: '2rem',
                                zIndex: -1,
                                opacity: 0.1
                            }}></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Features Section */}
            <section style={{ padding: '100px 0', background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
                            Mengapa Anda Membutuhkannya?
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Di era digital, website adalah wajah bisnis Anda. Kami memastikan wajah itu terlihat modern, terpercaya, dan profesional.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {detailedFeatures.map((f, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{
                                    padding: '2.5rem',
                                    borderRadius: '2rem',
                                    background: '#f8fafc',
                                    border: '1px solid #e2e8f0',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    borderRadius: '1.25rem',
                                    background: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                                }}>
                                    {f.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>{f.title}</h3>
                                <p style={{ color: '#64748b', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .gradient-text {
                    background: linear-gradient(135deg, var(--primary) 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .hero-section {
                    min-height: 90vh !important;
                }
                @media (max-width: 992px) {
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        gap: 3rem !important;
                    }
                    .hero-grid p { margin: 0 auto 2rem !important; }
                    .hero-grid div { align-items: center !important; }
                }
            `}</style>

            {/* Consultation Modal */}
            <AnimatePresence>
                {showDemoForm && (
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '1rem'
                    }} onClick={() => setShowDemoForm(false)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'white',
                                borderRadius: '2rem',
                                padding: '2.5rem',
                                width: '100%',
                                maxWidth: '500px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setShowDemoForm(false)}
                                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', border: 'none', background: 'none', cursor: 'pointer', color: '#94a3b8' }}
                            >
                                <X size={24} />
                            </button>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '0.5rem', color: '#0f172a' }}>
                                Konsultasi Website
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
                                Isi form di bawah, kami akan menghubungi Anda untuk diskusi konsep website yang tepat.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Nama Lengkap</label>
                                    <input name="name" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: Budi Santoso" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Nama Perusahaan / Bisnis</label>
                                    <input name="company" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: PT Bangun Maju" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>WhatsApp Aktif</label>
                                    <input name="whatsapp" type="tel" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: 0812..." />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Jabatan</label>
                                    <input name="position" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: Owner / Manager" />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem', fontSize: '1rem', borderRadius: '0.75rem' }}>
                                    Kirim Permintaan Konsultasi
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '1rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            style={{
                                background: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '2rem',
                                textAlign: 'center',
                                maxWidth: '400px',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
                            }}
                        >
                            <div style={{ width: '80px', height: '80px', background: '#f0fdf4', color: '#16a34a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.75rem' }}>Permintaan Terkirim!</h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Terima kasih. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk konsultasi lebih lanjut.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="btn btn-primary"
                                style={{ width: '100%', padding: '1rem', borderRadius: '1rem' }}
                            >
                                Oke, Paham
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
