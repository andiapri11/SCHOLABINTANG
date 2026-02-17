"use client";

import { useState } from "react";
import { submitDemoRequest } from "@/actions/contact-actions";
import { useSettings } from "@/providers/SettingsProvider";
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
    Cpu,
    Bell,
    Layers,
    Rocket
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoMobileApp() {
    const { settings } = useSettings();
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const pricingPackages = [
        {
            name: "Starter WebView",
            price: "1.5jt",
            oldPrice: "3jt",
            desc: "Ubah website Anda menjadi aplikasi Android siap pakai dengan cepat.",
            features: [
                "Konversi Web ke Android (APK)",
                "Ikon Aplikasi Kustom",
                "Splash Screen Profesional",
                "Notifikasi WhatsApp Integrasi",
                "Bantuan Kirim File APK",
                "Waktu Kerja: 3-5 Hari"
            ],
            isPopular: false,
            color: "#64748b"
        },
        {
            name: "Business Hybrid",
            price: "7.5jt",
            oldPrice: "15jt",
            desc: "Aplikasi kustom Android & iOS untuk kebutuhan bisnis standar.",
            features: [
                "Dukungan Android & iOS",
                "Desain UI/UX Modern",
                "Sistem Login & Database",
                "Push Notifications (Firebase)",
                "Admin Dashboard Sederhana",
                "Bantuan Publish Store",
                "Waktu Kerja: 14-21 Hari"
            ],
            isPopular: true,
            color: "var(--primary)"
        },
        {
            name: "Enterprise",
            price: "15jt",
            oldPrice: "30jt",
            desc: "Solusi aplikasi kompleks dengan fitur bisnis mendalam.",
            features: [
                "Android & iOS Premium",
                "Integrasi Payment Gateway",
                "Sistem GPS & Tracking",
                "Multi-role User Access",
                "Integrasi API Pihak Ketiga",
                "Maintenance 6 Bulan",
                "Waktu Kerja: 30-45 Hari"
            ],
            isPopular: false,
            color: "#0f172a"
        }
    ];

    const detailedFeatures = [
        {
            icon: <Smartphone size={32} color="var(--primary)" />,
            title: "Dukungan Android & iOS",
            desc: "Kami membangun aplikasi menggunakan teknologi Hybrid terbaru (Flutter/React Native) yang berjalan mulus di kedua platform."
        },
        {
            icon: <Zap size={32} color="var(--primary)" />,
            title: "Performa Lancar & Stabil",
            desc: "Optimasi kode pada tingkat tertinggi untuk memastikan aplikasi ringan, cepat, dan tidak mudah lag saat digunakan."
        },
        {
            icon: <Palette size={32} color="var(--primary)" />,
            title: "Desain Antarmuka Modern",
            desc: "Tampilan UI/UX yang intuitif dan estetik sesuai dengan brand identity perusahaan Anda untuk kenyamanan pengguna."
        },
        {
            icon: <Bell size={32} color="var(--primary)" />,
            title: "Notifikasi Real-time",
            desc: "Kirim pesan dan info promo langsung ke layar handphone pelanggan Anda secara instan kapan saja."
        },
        {
            icon: <Rocket size={32} color="var(--primary)" />,
            title: "Bantuan Publish Store",
            desc: "Kami mendampingi proses pendaftaran hingga aplikasi Anda tampil di Google Play Store dan Apple App Store."
        },
        {
            icon: <Shield size={32} color="var(--primary)" />,
            title: "Keamanan Terjamin",
            desc: "Implementasi standar keamanan data terbaru untuk melindungi informasi penting perusahaan dan pelanggan Anda."
        }
    ];

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            school: formData.get('company'),
            whatsapp: formData.get('whatsapp'),
            jabatan: formData.get('position'),
            product: "Mobile App Development"
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

                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                                Bangun Aplikasi <br />
                                <span className="gradient-text">Android & iOS Kustom</span>
                            </h1>

                            <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                                Permudah akses bagi pelanggan Anda melalui aplikasi mobile yang lancar, stabil, dan mudah digunakan kapan saja. Kini hadir dengan pilihan paket mulai dari 1.5 Juta.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href="#pricing"
                                    className="btn btn-primary"
                                    style={{ padding: '1.25rem 2.5rem', borderRadius: '1rem', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    Lihat Paket Harga <ArrowRight size={20} />
                                </a>
                                <a
                                    href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20tanya%20jasa%20Mobile%20App%20Development.`}
                                    target="_blank"
                                    className="btn btn-outline"
                                    style={{ padding: '1.25rem 2.5rem', borderRadius: '1rem', fontSize: '1.1rem' }}
                                >
                                    Konsultasi Gratis
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            {/* Card UI from Image */}
                            <div className="hero-card" style={{
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
                                    LAYANAN KUSTOM
                                </div>

                                <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>
                                    Mobile App Development
                                </h2>
                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, marginBottom: '2rem' }}>
                                    Permudah akses bagi pelanggan Anda melalui aplikasi Android dan iOS yang lancar, stabil, dan mudah digunakan.
                                </p>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.8rem',
                                    textAlign: 'left',
                                    width: 'max-content',
                                    margin: '0 auto 2.5rem'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Dukungan Android & iOS</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Performa Lancar & Stabil</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Desain Antarmuka Modern</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Notifikasi Real-time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Publish App Store & Playstore</span>
                                    </div>
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
                                        1.5jt<small style={{ fontSize: '1rem' }}>-an</small>
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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" style={{ padding: '100px 0', background: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
                            Pilihan Paket Pengembangan
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Pilih paket yang paling sesuai dengan target dan budget bisnis Anda. Transparansi tanpa biaya tersembunyi.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        alignItems: 'start'
                    }}>
                        {pricingPackages.map((pkg, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                style={{
                                    padding: '3rem 2rem',
                                    borderRadius: '2.5rem',
                                    background: 'white',
                                    border: pkg.isPopular ? `2px solid var(--primary)` : '1px solid #e2e8f0',
                                    boxShadow: pkg.isPopular ? '0 30px 60px -15px rgba(37,99,235,0.15)' : '0 10px 30px rgba(0,0,0,0.03)',
                                    position: 'relative',
                                    textAlign: 'center'
                                }}
                            >
                                {pkg.isPopular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        padding: '0.4rem 1.25rem',
                                        borderRadius: '2rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 800
                                    }}>
                                        RECOMMENDED
                                    </div>
                                )}
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>{pkg.name}</h3>
                                <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '40px' }}>{pkg.desc}</p>

                                <div style={{ marginBottom: '2rem' }}>
                                    {pkg.oldPrice && (
                                        <div style={{ fontSize: '0.9rem', color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600, marginBottom: '0.25rem' }}>
                                            Rp {pkg.oldPrice}
                                        </div>
                                    )}
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: pkg.color, lineHeight: 1 }}>
                                        {pkg.price}
                                        <small style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, marginLeft: '0.2rem' }}>/net</small>
                                    </div>
                                </div>

                                <div style={{ textAlign: 'left', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {pkg.features.map((feat, idx) => (
                                        <div key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', color: '#475569', alignItems: 'center' }}>
                                            <CheckCircle2 size={16} color={pkg.color} />
                                            {feat}
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        background: pkg.isPopular ? 'var(--primary)' : 'white',
                                        color: pkg.isPopular ? 'white' : '#0f172a',
                                        border: pkg.isPopular ? 'none' : '1.5px solid #e2e8f0',
                                        borderRadius: '1rem',
                                        fontWeight: 800,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Pilih Paket {pkg.name.split(' ')[0]}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Features Section */}
            <section style={{ padding: '100px 0', background: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>
                            Kualitas Aplikasi Standar Codifi
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Kami memastikan setiap aplikasi yang kami buat memenuhi standar industri tinggi untuk kenyamanan dan keamanan brand Anda.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
                    .hero-section {
                        padding: 60px 0 40px !important;
                        min-height: auto !important;
                    }
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        gap: 3rem !important;
                    }
                    .hero-grid h1 {
                        font-size: 2.2rem !important;
                        margin-bottom: 1rem !important;
                    }
                    .hero-grid p { 
                        margin: 0 auto 2rem !important; 
                        font-size: 1rem !important;
                    }
                    .hero-grid div { align-items: center !important; }
                    
                    .btn {
                        width: 100%;
                        justify-content: center;
                    }
                    .hero-card {
                        padding: 2rem !important;
                        border-radius: 2rem !important;
                    }
                    .modal-content {
                        padding: 1.5rem !important;
                    }
                    .section-title {
                        font-size: 1.75rem !important;
                    }
                }
                @media (max-width: 480px) {
                    .hero-section {
                        padding: 40px 0 !important;
                    }
                    .hero-grid h1 {
                        font-size: 1.8rem !important;
                    }
                    section {
                        padding: 60px 0 !important;
                    }
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
                            className="modal-content"
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
                                Konsultasi App Mobile
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
                                Ingin punya aplikasi Android/iOS? Isi form di bawah untuk diskusi solusi terbaik.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Nama Lengkap</label>
                                    <input name="name" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: Budi Santoso" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Nama Perusahaan / Bisnis</label>
                                    <input name="company" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: PT Maju Jaya" />
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
                                Terima kasih. Tim kami akan segera menghubungi Anda melalui WhatsApp untuk mendiskusikan rencana pembuatan aplikasi Anda.
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

// Helper icons that were not in the main set
function Palette({ size, color }: { size: number, color: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.5-.5 1.5-1.3 0-.4-.1-.8-.4-1.1-.3-.3-.5-.8-.5-1.3 0-1.2 1-2.2 2.2-2.2H16c3.3 0 6-2.7 6-6 0-4.4-4.5-8-10-8z" />
        </svg>
    )
}
