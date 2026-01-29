"use client";

import { useState } from "react";
import { submitDemoRequest } from "@/app/actions/contact";
import { useSettings } from "@/lib/SettingsContext";
import {
    CheckCircle2,
    ShoppingBag,
    Zap,
    Globe,
    Shield,
    Layout,
    ArrowRight,
    MessageCircle,
    X,
    Code,
    LineChart,
    Store,
    Users,
    Package,
    Calculator,
    Coffee
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoVoraPOS() {
    const { settings } = useSettings();
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const pricingPackages = [
        {
            name: "VORA Starter",
            price: "1.49jt",
            oldPrice: "2.5jt",
            discount: "40%",
            desc: "Solusi kasir & stok terpadu untuk 1 cabang bisnis.",
            features: [
                "Lisensi 1 Outlet/Cabang",
                "Manajemen Stok (Inventori)",
                "Laporan Penjualan Harian",
                "Support Printer Bluetooth/USB",
                "Sistem Kasir Offline-First",
                "Satu Kali Bayar (No Monthly Fee)"
            ],
            isPopular: false,
            color: "#64748b"
        },
        {
            name: "VORA Business",
            price: "2.99jt",
            oldPrice: "5jt",
            discount: "40%",
            desc: "Kelola multi-cabang dengan dashboard pusat yang lengkap.",
            features: [
                "Hingga 3 Outlet/Cabang",
                "Manajemen Stok Pusat & Cabang",
                "Accounting & Laporan Profit/Loss",
                "Manajemen Pelanggan (CRM)",
                "Sistem Karyawan & Absensi",
                "Dashboard Pemilik via Mobile",
                "Technical Support 6 Bulan"
            ],
            isPopular: true,
            color: "var(--primary)"
        },
        {
            name: "VORA Enterprise",
            price: "Custom",
            oldPrice: null,
            discount: null,
            desc: "Sistem kasir kustom skala besar dengan fitur eksklusif.",
            features: [
                "Cabang Tak Terbatas (Unlimited)",
                "Integrasi Sistem Keuangan ERP",
                "Custom Alur Kerja Sesuai Bisnis",
                "Dedicated Server & Support",
                "Source Code (Opsional)",
                "Training Langsung & On-site"
            ],
            isPopular: false,
            color: "#0f172a"
        }
    ];

    const detailedFeatures = [
        {
            icon: <Store size={32} color="var(--primary)" />,
            title: "Manajemen Multi-Cabang",
            desc: "Pantau stok dan penjualan seluruh cabang Anda dari satu dashboard admin. Tidak perlu lagi keliling toko setiap hari."
        },
        {
            icon: <Calculator size={32} color="var(--primary)" />,
            title: "Accounting Terpadu",
            desc: "VORA bukan hanya kasir. Sistem kami sudah termasuk fitur akuntansi untuk menghitung modal, profit kotor, hingga laba bersih."
        },
        {
            icon: <Package size={32} color="var(--primary)" />,
            title: "Inventori Stok Real-time",
            desc: "Kurangi risiko kehilangan barang. Stok berkurang otomatis setiap ada transaksi dan ada peringatan jika stok menipis."
        },
        {
            icon: <LineChart size={32} color="var(--primary)" />,
            title: "Laporan Otomatis",
            desc: "Dapatkan laporan harian, mingguan, hingga bulanan secara instan. Ambil keputusan bisnis berdasarkan data akurat."
        },
        {
            icon: <Users size={32} color="var(--primary)" />,
            title: "Manajemen Pelanggan",
            desc: "Kenali siapa pelanggan setia Anda. Simpan data riwayat belanja untuk program promo dan loyalitas yang tepat sasaran."
        },
        {
            icon: <Coffee size={32} color="var(--primary)" />,
            title: "Kustom Sesuai Bidang Usaha",
            desc: "Baik itu Cafe, Retail, Bengkel, atau Toko Kelontong. Kami menyesuaikan fitur VORA agar pas dengan cara kerja Anda."
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
            product: "VORAPOS (Multi-branch POS)"
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
                                VORA POS <br />
                                <span className="gradient-text">Smart Multi-branch POS</span>
                            </h1>

                            <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                                Kelola penjualan, stok, dan banyak cabang dengan lebih simpel. Sistem kasir dan accounting multiguna yang pas untuk semua jenis usaha Anda.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <a
                                    href="#pricing"
                                    className="btn btn-primary"
                                    style={{ padding: '1.25rem 2.5rem', borderRadius: '1rem', fontSize: '1.1rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                >
                                    Ambil Promo Sekarang <ArrowRight size={20} />
                                </a>
                                <a
                                    href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20tanya%20jasa%20VORAPOS.`}
                                    target="_blank"
                                    className="btn btn-outline"
                                    style={{ padding: '1.25rem 2.5rem', borderRadius: '1rem', fontSize: '1.1rem' }}
                                >
                                    Demo Sistem Gratis
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
                                    background: '#fff1f2',
                                    color: '#f43f5e',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '1rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    whiteSpace: 'nowrap',
                                    border: '1px solid #fee2e2'
                                }}>
                                    PENAWARAN TERBATAS
                                </div>

                                <h2 style={{ fontSize: '2.1rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>
                                    VORA (Multi-branch POS)
                                </h2>
                                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5, marginBottom: '2rem' }}>
                                    Solusi kasir dan accounting multiguna yang pas untuk semua jenis usaha. Kelola banyak cabang jadi lebih simpel dengan fitur yang bisa kami sesuaikan total buat Anda.
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
                                        <span>Fitur Custom Sesuai Jenis Usaha</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Manajemen Multi-Cabang/Outlet</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Sistem Kasir & Accounting Terpadu</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Inventori Stok Real-time</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.95rem' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" />
                                        <span>Laporan Keuangan Otomatis</span>
                                    </div>
                                </div>

                                <div style={{
                                    background: '#f8fafc',
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    marginBottom: '2rem',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'baseline',
                                        gap: '0.5rem',
                                        marginBottom: '0.25rem'
                                    }}>
                                        <span style={{ fontSize: '0.9rem', color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600 }}>2.5jt</span>
                                        <span style={{ background: '#dcfce7', color: '#16a34a', padding: '0.1rem 0.5rem', borderRadius: '0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>Hemat 40%</span>
                                    </div>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a' }}>
                                        1.49jt<small style={{ fontSize: '1rem' }}>-an</small>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    style={{
                                        width: '100%',
                                        padding: '1.25rem',
                                        background: 'var(--primary)',
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
                                    Ambil Promo Sekarang <ArrowRight size={20} />
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
                            Pilihan Lisensi VORA
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Pilih lisensi yang sesuai dengan skala bisnis Anda saat ini. Anda selalu bisa upgrade seiring pertumbuhan bisnis.
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
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', alignItems: 'center', marginBottom: '0.25rem' }}>
                                            <span style={{ fontSize: '0.9rem', color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600 }}>Rp {pkg.oldPrice}</span>
                                            {pkg.discount && <span style={{ background: '#fef2f2', color: '#ef4444', padding: '0.1rem 0.4rem', borderRadius: '0.4rem', fontSize: '0.65rem', fontWeight: 800 }}>-{pkg.discount}</span>}
                                        </div>
                                    )}
                                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: pkg.color, lineHeight: 1 }}>
                                        {pkg.price}
                                        {pkg.price !== "Custom" && <small style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600, marginLeft: '0.2rem' }}>/net</small>}
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
                                    Pilih Paket {pkg.name.split(' ')[1]}
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
                            Mengapa Ribuan Bisnis Memilih VORA?
                        </h2>
                        <p style={{ color: '#64748b', maxWidth: '700px', margin: '0 auto' }}>
                            Bukan sekadar aplikasi kasir biasa. VORA dirancang sebagai asisten digital untuk mengoptimalkan profit dan efisiensi usaha Anda.
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
                        padding: 100px 0 60px !important;
                        min-height: auto !important;
                    }
                    .hero-grid {
                        grid-template-columns: 1fr !important;
                        text-align: center !important;
                        gap: 3rem !important;
                    }
                    .hero-grid h1 {
                        font-size: 2.5rem !important;
                        margin-bottom: 1rem !important;
                        line-height: 1.2 !important;
                    }
                    .hero-grid p { 
                        margin: 0 auto 2.5rem !important; 
                        font-size: 1.1rem !important;
                        max-width: 100% !important;
                    }
                    .hero-grid > div:first-child {
                        order: 2 !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    .hero-grid > div:last-child {
                        order: 1 !important;
                        max-width: 500px !important;
                        margin: 0 auto !important;
                    }
                    
                    .btn {
                        width: 100% !important;
                        justify-content: center !important;
                        padding: 1.25rem !important;
                    }

                    .hero-card {
                        padding: 2.5rem 1.5rem !important;
                        border-radius: 2.5rem !important;
                    }
                    .hero-card h2 {
                        font-size: 1.8rem !important;
                    }
                    /* Target the features list container (4th child) */
                    .hero-card > div:nth-child(4) {
                        width: 100% !important;
                        margin: 1.5rem 0 !important;
                        padding-left: 0.5rem !important;
                    }

                    section {
                        padding: 60px 0 !important;
                    }
                    .section-title {
                        font-size: 2rem !important;
                        margin-bottom: 0.75rem !important;
                    }
                }

                @media (max-width: 640px) {
                    .hero-section {
                        padding: 80px 0 40px !important;
                    }
                    .hero-grid h1 {
                        font-size: 2rem !important;
                    }
                    .hero-card {
                        padding: 2rem 1rem !important;
                        border-radius: 2rem !important;
                    }
                    .hero-card h2 {
                        font-size: 1.5rem !important;
                    }
                    .hero-card p {
                        font-size: 0.85rem !important;
                    }
                    .hero-card div[style*="fontSize: '0.95rem'"] {
                        font-size: 0.85rem !important;
                    }
                    .hero-card div[style*="fontSize: '2.5rem'"] {
                        font-size: 2rem !important;
                    }
                }

                @media (max-width: 480px) {
                    .hero-section {
                        padding: 80px 0 30px !important;
                    }
                    .hero-grid h1 {
                        font-size: 1.75rem !important;
                    }
                    .hero-grid p {
                        font-size: 0.95rem !important;
                    }
                    .section-title {
                        font-size: 1.75rem !important;
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
                                Ambil Promo VORA POS
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.9rem' }}>
                                Isi form di bawah untuk mendapatkan harga promo dan demo sistem gratis dari tim kami.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Nama Lengkap</label>
                                    <input name="name" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: Budi Santoso" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Nama Usaha</label>
                                    <input name="company" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: Kedai Kopi Maju" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>WhatsApp Aktif</label>
                                    <input name="whatsapp" type="tel" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Contoh: 0812..." />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.5rem', color: '#475569' }}>Jabatan</label>
                                    <input name="position" required style={{ width: '100%', padding: '0.85rem', borderRadius: '0.75rem', border: '1px solid #e2e8f0', background: '#f8fafc' }} placeholder="Owner / Manager" />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', marginTop: '1rem', fontSize: '1rem', borderRadius: '0.75rem' }}>
                                    Kirim & Ambil Promo
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
                                Terima kasih. Tim kami akan segera mengirimkan jadwal demo sistem dan detail promo via WhatsApp.
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
