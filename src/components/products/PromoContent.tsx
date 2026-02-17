"use client";

import { useState } from "react";
import { useLanguage } from "@/providers/LanguageProvider";
import { submitDemoRequest } from "@/actions/contact-actions";
import { useSettings } from "@/providers/SettingsProvider";
import { CheckCircle2, Shield, Zap, BarChart3, Users, ArrowRight, Laptop, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoContent() {
    const { settings } = useSettings();
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const product = {
        name: "Schola CBT (Exam App)",
        price: "350rb-an",
        originalPrice: "1.2jt",
        discount: "70%",
        desc: "Platform ujian digital serbaguna yang aman dari kecurangan. Cocok untuk sekolah, lembaga kursus, hingga seleksi karyawan dengan performa yang tetap stabil meski ribuan peserta masuk bersamaan.",
        features: [
            "Bank Soal & Acak Urutan",
            "Gratis Apps Pengaman Ujian",
            "Koreksi Otomatis Real-time",
            "Analisis Hasil & Butir Soal",
            "Support Skala Ribuan Peserta"
        ]
    };

    // Enhanced Features List
    const detailedFeatures = [
        {
            icon: <CheckCircle2 size={32} color="var(--primary)" />,
            title: "Bank Soal & Pengacakan",
            desc: "Kelola ribuan soal dengan mudah. Sistem akan mengacak urutan soal dan opsi jawaban secara otomatis untuk setiap siswa, meminimalisir kecurangan."
        },
        {
            icon: <Shield size={32} color="var(--primary)" />,
            title: "Sistem Keamanan Ujian",
            desc: "Dilengkapi fitur lock-browser sederhana yang mencegah siswa membuka aplikasi lain atau browsing saat ujian berlangsung."
        },
        {
            icon: <Zap size={32} color="var(--primary)" />,
            title: "Koreksi Otomatis Real-time",
            desc: "Nilai langsung keluar detik itu juga setelah siswa mengklik tombol selesai. Hemat waktu guru dalam mengoreksi ujian."
        },
        {
            icon: <BarChart3 size={32} color="var(--primary)" />,
            title: "Analisis & Statistik Lengkap",
            desc: "Dapatkan laporan analisis butir soal (tingkat kesulitan, daya beda) dan rekap nilai per kelas secara instan dalam format Excel yang rapi."
        },
        {
            icon: <Users size={32} color="var(--primary)" />,
            title: "Skalabel untuk Ribuan Peserta",
            desc: "Arsitektur cloud yang tangguh mampu menangani ribuan siswa ujian secara bersamaan tanpa lag atau down."
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
                                {product.name.split('(')[0]} <br />
                                <span style={{ color: '#2563eb', fontSize: '0.7em', fontWeight: 700 }}>{product.name.match(/\(([^)]+)\)/)?.[0]}</span>
                            </h1>

                            <p style={{
                                fontSize: '1.2rem',
                                color: '#64748b',
                                lineHeight: 1.7,
                                marginBottom: '2.5rem',
                                maxWidth: '90%'
                            }}>
                                Platform ujian digital (CBT) paling stabil dan aman. Dilengkapi fitur anti-kecurangan, bank soal otomatis, dan analisis nilai real-time. Cocok untuk sekolah modern.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    className="btn btn-primary"
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
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem', padding: '0 1rem' }}>
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
                                                    product: "Schola CBT"
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
                            className="hero-image-container"
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

                            <img
                                src="/images/scholacbt-mockup-new.png"
                                alt="Schola CBT Dashboard"
                                style={{
                                    width: '125%', // Slightly larger to pop out
                                    maxWidth: 'none',
                                    height: 'auto',
                                    display: 'block',
                                    filter: 'drop-shadow(-20px 40px 60px rgba(15, 23, 42, 0.2))',
                                    transform: 'perspective(1500px) rotateY(-10deg) rotateX(5deg)', // 3D floating angle
                                    borderRadius: '1rem',
                                    marginLeft: '-10%'
                                }}
                            />
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
                        /* Mobile Layout Overrides - FORCE FLEX */
                        .product-layout {
                            display: flex !important;
                            flex-direction: column !important;
                            gap: 2rem !important;
                            padding: 0 1rem !important;
                            grid-template-columns: none !important;
                        }
                        
                        .pricing-sticky {
                            position: relative !important;
                            top: 0 !important;
                            order: -1 !important;
                            width: 100% !important;
                            margin-bottom: 2rem !important;
                        }

                        .pricing-card-inner {
                            padding: 1.5rem !important;
                            border-radius: 20px !important;
                            margin-bottom: 3rem;
                        }

                        .product-details-col {
                            order: 2 !important;
                        }

                        .main-content-container {
                            margin-top: 4rem !important;
                            padding: 0 !important;
                            position: relative;
                            z-index: 30;
                            background: transparent;
                            width: 100% !important;
                        }

                        /* Hero Section Mobile Styles */
                        .hero-section {
                            padding: 80px 0 40px !important;
                            min-height: unset !important;
                            display: flex !important;
                            flex-direction: column !important;
                            overflow: hidden !important;
                        }

                        .hero-grid {
                            display: flex !important;
                            flex-direction: column !important;
                            gap: 2rem !important;
                            text-align: center !important;
                        }

                        /* Hero Image - Top */
                        .hero-image-container {
                            order: 1 !important;
                            margin-bottom: 0 !important;
                            width: 100% !important;
                            height: auto !important;
                            position: relative;
                            z-index: 1;
                        }
                        .hero-grid img {
                            width: 100% !important;
                            margin-left: 0 !important;
                            transform: none !important;
                        }

                        /* Hero Text - Bottom (Pushed down) */
                        .hero-grid > div:first-child {
                            text-align: center !important;
                            order: 2 !important;
                            position: relative !important;
                            z-index: 10 !important;
                            margin-top: 2rem !important;
                            padding-top: 0 !important;
                        }

                        .hero-grid h1 {
                            font-size: 1.5rem !important;
                            line-height: 1.3 !important;
                            margin-bottom: 0.75rem !important;
                        }

                        .hero-grid p {
                            font-size: 0.95rem !important;
                            margin-bottom: 1.5rem !important;
                            line-height: 1.6 !important;
                            max-width: 100% !important;
                        }

                        .promo-pill {
                            margin-bottom: 1rem !important;
                        }

                        .hero-buttons {
                            justify-content: center !important;
                        }

                        .btn {
                            width: 100% !important;
                        }

                    }
                `}</style>
            </section>

            {/* 2. Main Layout: Features & Pricing */}
            <div className="container main-content-container" style={{ marginTop: '-5px' }}>
                <div className="product-layout">

                    {/* Left Column: Detailed Content */}
                    <div className="product-details-col">


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
                                            padding: '0.75rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {feat.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                                            {feat.title}
                                        </h4>
                                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}>
                                            {feat.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Pricing & Offer Card (Sticky) */}
                    <div className="pricing-sticky">
                        <div className="pricing-card-inner" style={{
                            background: 'white',
                            borderRadius: '2rem',
                            padding: '2.5rem',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
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
                                Lisensi Schola CBT
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '2rem' }}>
                                Aplikasi ujian digital paling stabil & anti-curang.
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

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', textAlign: 'left' }}>
                                {[
                                    { users: 'Max 150 Siswa', price: '350rb', normal: '1.2jt', link: 'Saya%20ambil%20promo%20paket%20150%20siswa%20(350rb)' },
                                    { users: 'Max 250 Siswa', price: '450rb', normal: '1.5jt', link: 'Saya%20ambil%20promo%20paket%20250%20siswa%20(450rb)' },
                                    { users: 'Max 500 Siswa', price: '850rb', normal: '2.5jt', link: 'Saya%20ambil%20promo%20paket%20500%20siswa%20(850rb)' },
                                    { users: 'Max 1000+ Siswa', price: 'Hubungi Kami', normal: '', link: 'Saya%20ingin%20diskusi%20paket%201000%20siswa%20lebih' }
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={`https://wa.me/${settings.whatsapp}?text=${item.link}`}
                                        target="_blank"
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '1rem',
                                            borderRadius: '1rem',
                                            border: '1px solid #e2e8f0',
                                            background: idx === 0 ? '#eff6ff' : 'white',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            cursor: 'pointer'
                                        }}
                                        className="pricing-item"
                                    >
                                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>{item.users}</span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            {item.normal && (
                                                <span style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'line-through', marginRight: '4px' }}>
                                                    {item.normal}
                                                </span>
                                            )}
                                            <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>{item.price}</span>
                                            {idx < 3 && <span style={{ fontSize: '0.7rem', color: '#ef4444', background: '#fef2f2', padding: '0.1rem 0.4rem', borderRadius: '0.3rem', fontWeight: 700 }}>PROMO</span>}
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', margin: '2rem 0' }} />

                            <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
                                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
                                    Yang Anda Dapatkan:
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
                                        Gratis Pelatihan Guru/Admin
                                    </li>
                                </ul>
                            </div>

                            <a
                                href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20klaim%20promo%20Schola%20CBT%20seharga%20350rb-an.`}
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
        </div >
    );
}
