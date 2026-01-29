"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { submitDemoRequest } from "@/app/actions/contact";
import { useSettings } from "@/lib/SettingsContext";
import { CheckCircle2, Shield, LayoutDashboard, Database, Wallet, Users, ArrowRight, MessageCircle, X, BookOpen, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoPortal() {
    const { settings } = useSettings();
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Hardcoded Data for Schola Portal
    const product = {
        name: "Schola Portal",
        price: "950rb-an",
        originalPrice: "1.5jt",
        discount: "35%",
        desc: "Sistem Informasi Manajemen Sekolah (SIM) yang terintegrasi. Kelola data siswa, guru, akademik, hingga keuangan dalam satu dashboard yang modern dan mudah digunakan.",
        features: [
            "Data Induk Siswa & Guru",
            "Manajemen Akademik & Rapor",
            "Tagihan & Pembayaran SPP",
            "Presensi & Jurnal Mengajar",
            "Laporan Eksekutif Sekolah"
        ]
    };

    // Features specific to Portal
    const detailedFeatures = [
        {
            icon: <Database size={32} color="var(--primary)" />,
            title: "Data Umum & Kepegawaian",
            desc: "Pusat data terintegrasi mencakup Unit Sekolah, Tahun Pelajaran, Struktur Jabatan, Kalender Akademik, Data Siswa (Aktif/Alumni/Keluar), serta Data Guru & Staff."
        },
        {
            icon: <BookOpen size={32} color="var(--primary)" />,
            title: "Data Pembelajaran",
            desc: "Manajemen KBM lengkap: Pengaturan Mata Pelajaran, Jadwal Pelajaran Otomatis, dan Absensi Check-in Kelas menggunakan Scan QR Code."
        },
        {
            icon: <Users size={32} color="var(--primary)" />,
            title: "Manajemen Sekolah (Role-Based)",
            desc: "Dashboard terpisah untuk Pimpinan, Kepala Sekolah, Waka Kurikulum, Kesiswaan (BK/Poin), Wali Kelas, dan Humas dengan hak akses spesifik."
        },
        {
            icon: <Wallet size={32} color="var(--primary)" />,
            title: "Keuangan & Akuntansi",
            desc: "Kelola SPP, Rekap Tagihan & Tunggakan, Verifikasi Pembayaran, Pemasukan/Pengeluaran Kas, hingga Laporan Realisasi & Akuntansi Sekolah."
        },
        {
            icon: <Building2 size={32} color="var(--primary)" />,
            title: "Manajemen Sarpras",
            desc: "Digitalisasi aset sekolah: Data Inventaris, Manajemen Ruangan, Barang Habis Pakai, Laporan Kerusakan, Pengajuan Barang, & Labeling Barcode."
        }
    ];

    return (
        <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '4rem' }}>

            {/* 1. Hero / Product Overview - Split Layout */}
            <section className="hero-section" style={{
                padding: '90px 0 100px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center'
            }}>
                {/* Decorative Background Elements */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                    opacity: 0.1,
                    zIndex: 0,
                    pointerEvents: 'none'
                }}></div>
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
                <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
                <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.2fr 1fr',
                        gap: '4rem',
                        alignItems: 'center'
                    }} className="hero-grid">

                        {/* Left Column: Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ textAlign: 'left' }}
                        >


                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                fontWeight: 900,
                                color: '#0f172a',
                                marginBottom: '1.5rem',
                                letterSpacing: '-0.03em',
                                lineHeight: 1.1
                            }}>
                                {product.name}
                            </h1>

                            <p style={{
                                fontSize: '1.2rem',
                                color: '#64748b',
                                lineHeight: 1.7,
                                marginBottom: '2.5rem',
                                maxWidth: '90%'
                            }}>
                                {product.desc}
                            </p>

                            <div className="hero-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    className="btn btn-primary demo-btn"
                                    style={{
                                        padding: '1rem 2rem',
                                        fontSize: '1.05rem',
                                        borderRadius: '1rem',
                                        boxShadow: '0 15px 30px -5px rgba(37, 99, 235, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        background: '#2563eb',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Jadwalkan Demo <ArrowRight size={20} />
                                </button>
                                <div className="maintenance-info" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem', padding: '0 1rem' }}>
                                    <div style={{ padding: '4px', background: '#dcfce7', borderRadius: '50%' }}><CheckCircle2 size={16} color="#166534" /></div>
                                    Garansi Maintenance
                                </div>
                            </div>

                            {/* Demo Request Modal */}
                            <AnimatePresence>
                                {showDemoForm && (
                                    <div style={{
                                        position: 'fixed',
                                        inset: 0,
                                        background: 'rgba(15, 23, 42, 0.6)',
                                        backdropFilter: 'blur(4px)',
                                        zIndex: 100,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1rem'
                                    }}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            style={{
                                                background: 'white',
                                                padding: '2rem',
                                                borderRadius: '1.5rem',
                                                width: '100%',
                                                maxWidth: '500px',
                                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                                                position: 'relative'
                                            }}
                                        >
                                            <button
                                                onClick={() => setShowDemoForm(false)}
                                                style={{
                                                    position: 'absolute',
                                                    top: '1.5rem',
                                                    right: '1.5rem',
                                                    background: 'transparent',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    color: '#94a3b8'
                                                }}
                                            >
                                                <X size={24} />
                                            </button>

                                            <div style={{ marginBottom: '2rem' }}>
                                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Jadwalkan Demo</h3>
                                                <p style={{ color: '#64748b' }}>Isi formulir di bawah, tim kami akan segera menghubungi Anda untuk jadwal presentasi online.</p>
                                            </div>

                                            <form onSubmit={async (e) => {
                                                e.preventDefault();
                                                const form = e.target as HTMLFormElement;
                                                const name = (form[0] as HTMLInputElement).value;
                                                const school = (form[1] as HTMLInputElement).value;
                                                const whatsappRaw = (form[2] as HTMLInputElement).value;
                                                const jabatan = (form[3] as HTMLSelectElement).value;

                                                // Basic sanitization: remove non-digits
                                                let sanitizedWa = whatsappRaw.replace(/\D/g, "");
                                                if (sanitizedWa.startsWith("0")) sanitizedWa = "62" + sanitizedWa.substring(1);
                                                if (sanitizedWa.startsWith("8")) sanitizedWa = "62" + sanitizedWa;

                                                await submitDemoRequest({
                                                    name,
                                                    school,
                                                    whatsapp: sanitizedWa,
                                                    jabatan,
                                                    product: "Schola Portal" // Changed from Schola Bintang to match component context
                                                });

                                                setShowDemoForm(false);
                                                setShowSuccess(true);
                                            }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>Nama Lengkap</label>
                                                    <input required type="text" placeholder="Contoh: Budi Santoso" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontSize: '1rem' }} />
                                                </div>

                                                <div>
                                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>Nama Sekolah / Instansi</label>
                                                    <input required type="text" placeholder="Contoh: SMA Negeri 1 Jakarta" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontSize: '1rem' }} />
                                                </div>

                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                    <div>
                                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>No. WhatsApp</label>
                                                        <input required type="tel" placeholder="Contoh: 08123456789" minLength={10} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontSize: '1rem' }} title="Masukkan nomor WhatsApp aktif (contoh: 08123456789)" />
                                                    </div>
                                                    <div>
                                                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>Jabatan</label>
                                                        <select style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #e2e8f0', fontSize: '1rem', background: 'white' }}>
                                                            <option>Kepala Sekolah</option>
                                                            <option>Wakil Kurikulum</option>
                                                            <option>Operator / IT</option>
                                                            <option>Guru</option>
                                                            <option>Yayasan</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <button type="submit" className="btn btn-primary" style={{ padding: '1rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '0.75rem', fontWeight: 700, fontSize: '1rem', marginTop: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                                    Kirim Permintaan Demo <ArrowRight size={20} />
                                                </button>
                                            </form>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>

                        </motion.div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(255,255,255,0) 70%)',
                                filter: 'blur(50px)',
                                zIndex: -1
                            }}></div>

                            {/* Device Mockups Composition */}
                            <div style={{ position: 'relative', width: '130%', marginLeft: '-15%' }} className="mockup-container">
                                {/* Laptop Backdrop */}
                                <img
                                    src="/images/scholaportal-laptop.png"
                                    className="laptop-mockup"
                                    alt="Schola Portal Dashboard Layout"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        filter: 'drop-shadow(0 20px 50px rgba(15, 23, 42, 0.2))',
                                        position: 'relative',
                                        zIndex: 1
                                    }}
                                />

                                {/* Mobile Overlay */}
                                <motion.img
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    src="/images/scholaportal-mockup.png"
                                    className="mobile-mockup"
                                    alt="Schola Portal Mobile App"
                                    style={{
                                        width: '50%',
                                        position: 'absolute',
                                        bottom: '-8%',
                                        right: '0%',
                                        zIndex: 2,
                                        filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.3))'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                <style jsx>{`
                    /* Default / Desktop Styles */
                    .product-layout {
                        display: grid;
                        grid-template-columns: 1.5fr 1fr;
                        gap: 3rem;
                        align-items: start;
                    }
                    .pricing-sticky {
                        position: sticky;
                        top: 100px;
                    }

                    @media (max-width: 900px) {
                        .hero-section {
                            padding: 80px 0 40px !important;
                            min-height: unset !important;
                            display: flex !important;
                            flex-direction: column !important;
                            overflow: visible !important;
                        }
                        .hero-grid {
                            grid-template-columns: 1fr !important;
                            gap: 2rem !important;
                            text-align: center !important;
                        }
                        .hero-grid > div:first-child {
                            text-align: center !important;
                            order: 2;
                        }
                        .hero-grid > div:last-child {
                            order: 1;
                            margin-bottom: 0rem;
                        }
                        .hero-grid h1 {
                            font-size: 2.25rem !important;
                            line-height: 1.15 !important;
                            margin-bottom: 0.75rem !important;
                        }
                        .promo-pill {
                            margin-bottom: 1rem !important;
                        }
                        .hero-grid p {
                            font-size: 0.95rem !important;
                            margin-bottom: 1.5rem !important;
                            line-height: 1.6 !important;
                            max-width: 100% !important;
                        }
                        .mockup-container {
                            width: 100% !important;
                            margin-left: 0 !important;
                        }
                        .hero-buttons {
                            justify-content: center !important;
                        }
                        .demo-btn {
                            width: 100% !important;
                        }
                        .maintenance-info {
                            width: 100% !important;
                            justify-content: center !important;
                        }
                        .main-content-container {
                            margin-top: 0 !important;
                            padding: 0 !important;
                            position: relative;
                            z-index: 30;
                            background: transparent;
                            width: 100% !important;
                        }
                        .product-layout {
                            display: flex !important;
                            flex-direction: column !important;
                            gap: 2rem !important;
                            padding: 0 1rem !important;
                            grid-template-columns: none;
                        }
                        .pricing-sticky {
                            order: -1 !important;
                            position: relative !important;
                            top: 0 !important;
                        }
                        .pricing-card-inner {
                            padding: 1.5rem !important;
                            border-radius: 20px !important;
                            margin-bottom: 3rem;
                        }
                        .mockup-container {
                            width: 100% !important;
                            margin-left: 0 !important;
                            margin-bottom: 1rem;
                        }
                        .laptop-mockup {
                            width: 100% !important;
                            height: auto !important;
                        }
                        .mobile-mockup {
                            width: 45% !important;
                            bottom: -5% !important;
                            right: 0 !important;
                        }
                    }

                    @media (min-width: 901px) {
                        .main-content-container {
                            margin-top: -40px !important;
                        }
                    }
                `}</style>
            </section>

            {/* 2. Main Layout: Features & Pricing */}
            <div className="container main-content-container">
                <div className="product-layout">

                    {/* Left Column: Detailed Content */}
                    <div className="product-details-col">
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem' }}>
                                Solusi Tata Kelola Sekolah Modern
                            </h2>
                            <p style={{ color: '#64748b', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '2rem' }}>
                                Schola Portal membantu sekolah beralih dari administrasi manual yang ribet ke sistem digital yang terintegrasi. Ciptakan ekosistem pendidikan yang transparan, akuntabel, dan profesional.
                            </p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {detailedFeatures.map((feat, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    gap: '1.25rem',
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid #f1f5f9',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)'
                                }}>
                                    <div style={{ flexShrink: 0 }}>
                                        <div style={{
                                            background: '#eff6ff',
                                            borderRadius: '1rem',
                                            padding: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {feat.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                                            {feat.title}
                                        </h3>
                                        <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                                            {feat.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Sticky Pricing Card */}
                    <div style={{ position: 'sticky', top: '100px' }} className="pricing-sticky">
                        <div className="pricing-card-inner" style={{
                            background: 'white',
                            borderRadius: '2rem',
                            padding: '2.5rem',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                display: 'inline-block',
                                background: '#eff6ff',
                                color: '#1d4ed8',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                padding: '0.5rem 1.25rem',
                                borderRadius: '2rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '2rem',
                                border: '1px solid rgba(37, 99, 235, 0.2)'
                            }}>
                                🔥 Penawaran Terbatas
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                                Lisensi Portal Sekolah
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '2rem' }}>
                                All-in-one platform untuk manajemen sekolah.
                            </p>

                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                    <span style={{ textDecoration: 'line-through', color: '#94a3b8' }}>{product.originalPrice}</span>
                                    <span style={{
                                        background: '#fef2f2',
                                        color: '#ef4444',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '0.4rem',
                                        fontSize: '0.75rem',
                                        fontWeight: 800
                                    }}>
                                        DISKON {product.discount}
                                    </span>
                                </div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>
                                    {product.price}
                                </div>
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '2rem 0' }} />

                            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                                    Fitur Unggulan:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {product.features.map((f, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#475569' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                                            {f}
                                        </li>
                                    ))}
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#475569' }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }}></div>
                                        Backup Data Harian
                                    </li>
                                </ul>
                            </div>

                            <a
                                href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20tertarik%20dengan%20promo%20Schola%20Portal.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    width: '100%',
                                    padding: '1.25rem',
                                    fontSize: '1rem',
                                    fontWeight: 800,
                                    borderRadius: '1rem',
                                    textDecoration: 'none',
                                    background: 'var(--primary)',
                                    color: 'white'
                                }}
                            >
                                Ambil Promo Sekarang <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* Success Popup Overlay */}
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
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            style={{
                                background: 'white',
                                padding: '3rem 2rem',
                                borderRadius: '2rem',
                                width: '100%',
                                maxWidth: '400px',
                                textAlign: 'center',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                background: '#f0fdf4',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: '#22c55e'
                            }}>
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>Terkirim!</h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.6 }}>
                                Terima kasih! Permintaan demo Anda telah kami terima. Tim kami akan segera menghubungi Anda melalui WhatsApp.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                style={{
                                    width: '100%',
                                    padding: '1.25rem',
                                    background: '#2563eb',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '1.25rem',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                }}
                            >
                                Selesai
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
