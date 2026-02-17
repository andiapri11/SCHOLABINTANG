"use client";

import { useState } from "react";
import { submitDemoRequest } from "@/actions/contact-actions";
import { useSettings } from "@/providers/SettingsProvider";
import {
    CheckCircle2,
    Cpu,
    Zap,
    Globe,
    Shield,
    Layout,
    ArrowRight,
    MessageCircle,
    X,
    Code,
    Settings,
    Database,
    LineChart,
    Users,
    Key,
    Smartphone
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoCustomSystem() {
    const { settings } = useSettings();
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const pricingPackages = [
        {
            name: "Starter Module",
            price: "900rb",
            oldPrice: "1.8jt",
            desc: "Solusi otomatisasi untuk satu fungsi bisnis spesifik.",
            features: [
                "1 Modul Utama (Misal: Inventori)",
                "Akses Web Dashboard",
                "Laporan Sederhana",
                "Input Data Unlimited",
                "Panduan Penggunaan PDF",
                "Waktu Kerja: 5-7 Hari"
            ],
            isPopular: false,
            color: "#64748b"
        },
        {
            name: "Business Suite",
            price: "3.5jt",
            oldPrice: "7.5jt",
            desc: "Sistem terintegrasi untuk mengelola alur kerja tim lebih rapi.",
            features: [
                "Hingga 3 Modul Terintegrasi",
                "Akses Multi-User & Level",
                "Dashboard Analitik Visual",
                "Export Laporan Excel/Web",
                "Technical Support 1 Bulan",
                "Bisa Diakses Mobile Web",
                "Waktu Kerja: 14-21 Hari"
            ],
            isPopular: true,
            color: "var(--primary)"
        },
        {
            name: "Professional ERP",
            price: "10jt+",
            oldPrice: "25jt",
            desc: "Sistem skala perusahaan dengan fitur kustom tanpa batas.",
            features: [
                "Modul Unlimited (Full ERP)",
                "Integrasi API Pihak ke-3",
                "Source Code Menjadi Milik Anda",
                "Keamanan Data Tingkat Tinggi",
                "Maintenance & Update 3 Bulan",
                "Training Langsung On-site",
                "Waktu Kerja: 30-60 Hari"
            ],
            isPopular: false,
            color: "#0f172a"
        }
    ];

    const detailedFeatures = [
        {
            icon: <Settings size={32} color="var(--primary)" />,
            title: "Alur Kerja (Workflow) Kustom",
            desc: "Sistem dibangun mengikuti prosedur kerja asli di tim Anda, bukan Anda yang mengikuti prosedur sistem."
        },
        {
            icon: <Smartphone size={32} color="var(--primary)" />,
            title: "Akses Multi-Perangkat",
            desc: "Pantau operasional dari mana saja. Sistem dioptimasi untuk tampil sempurna di Laptop, Tablet, maupun Smartphone."
        },
        {
            icon: <Key size={32} color="var(--primary)" />,
            title: "Hak Akses & Keamanan",
            desc: "Atur siapa saja yang bisa melihat data apa. Keamanan terjamin dengan enkripsi data dan sistem login berlapis."
        },
        {
            icon: <Database size={32} color="var(--primary)" />,
            title: "Manajemen Data Terpusat",
            desc: "Ucapkan selamat tinggal pada data yang tercecer. Semua informasi bisnis Anda tersimpan rapi dalam satu database aman."
        },
        {
            icon: <LineChart size={32} color="var(--primary)" />,
            title: "Laporan & Analitik Instan",
            desc: "Ambil keputusan lebih cepat dengan laporan otomatis yang ditampilkan dalam bentuk tabel maupun grafik informatif."
        },
        {
            icon: <Code size={32} color="var(--primary)" />,
            title: "Source Code Jadi Milik Anda",
            desc: "Khusus paket tertentu, Anda mendapatkan kepemilikan penuh atas kode program sistem untuk aset digital masa depan."
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
            product: "Custom System Development"
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
                                Bangun Sistem <br />
                                <span className="gradient-text">Kustom Sesuai Bisnis</span>
                            </h1>

                            <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                                Wujudkan sistem yang dirancang khusus mengikuti alur kerja tim Anda agar operasional lebih tertata, efektif, dan terpantau real-time.
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
                                    href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20tanya%20jasa%20Custom%20System%20Development.`}
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
                                    Custom System Development
                                </h2>
                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, marginBottom: '2rem' }}>
                                    Wujudkan sistem yang dirancang khusus mengikuti alur kerja tim Anda agar operasional lebih tertata dan efektif.
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
                                        <span>Alur Kerja (Workflow) Kustom</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Akses Mobile & Multi-Perangkat</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Source Code Jadi Milik Anda</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Sistem Skalabel & Aman</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Dukungan Maintenance Teknis</span>
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
                                        900rb<small style={{ fontSize: '1rem' }}>-an</small>
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
                            Pilihan Paket Sistem
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Investasi cerdas untuk efisiensi bisnis jangka panjang. Pilih paket yang paling sesuai dengan kebutuhan operasional Anda.
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
                            Standar Keunggulan Sistem Kami
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Setiap baris kode kami tulis dengan teliti untuk memastikan sistem Anda tidak hanya berfungsi, tapi juga memberi nilai tambah nyata.
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
                                Konsultasi Sistem Kustom
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
                                Isi form di bawah untuk mendiskusikan sistem informasi yang Anda butuhkan.
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
                                Terima kasih. Tim analis kami akan segera menghubungi Anda melalui WhatsApp untuk mendiskusikan kebutuhan sistem kustom Anda secara mendalam.
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
