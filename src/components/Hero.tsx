"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, ShoppingBag, GraduationCap, Cpu, Rocket, CheckCircle2, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useSettings } from "@/lib/SettingsContext";

import Image from "next/image";

export default function Hero() {
    const { t } = useLanguage();
    const { settings } = useSettings();

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Globe': return <Globe size={14} />;
            case 'ShoppingBag': return <ShoppingBag size={14} />;
            case 'GraduationCap': return <GraduationCap size={14} />;
            case 'Cpu': return <Cpu size={14} />;
            default: return <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }}></div>;
        }
    };

    return (
        <section style={{
            minHeight: '85vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'var(--nav-height)',
            paddingBottom: '0rem',
            overflow: 'hidden'
        }}>
            {/* ... (background shapes remain same) */}
            <div className="abstract-shape" style={{
                width: '600px', height: '600px', top: '-100px', right: '-100px', background: 'var(--primary-glow)'
            }}></div>
            <div className="abstract-shape" style={{
                width: '400px', height: '400px', bottom: '-100px', left: '-100px', background: 'rgba(14, 165, 233, 0.05)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
                    <div
                        className="hero-text-content"
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '2rem',
                            background: 'var(--muted)',
                            border: '1px solid var(--card-border)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            color: 'var(--primary)',
                            marginBottom: '2rem'
                        }}>
                            <span style={{ display: 'flex', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></span>
                            {t.hero.badge}
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', marginBottom: '1.25rem', color: '#0f172a' }}>
                            {t.hero.title1} <br />
                            <span className="gradient-text">{t.hero.title2}</span>
                        </h1>

                        <p style={{ fontSize: '1.125rem', color: 'var(--secondary)', marginBottom: '1.5rem', lineHeight: 1.6, maxWidth: '600px' }}>
                            {t.hero.desc}
                        </p>

                        {/* Service Highlights - Wrapped Layout (Reverted) */}
                        <div className="service-highlights-row" style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.75rem',
                            marginBottom: '2.5rem'
                        }}>
                            {(t.hero as any).services?.map((service: any, i: number) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.625rem',
                                    background: 'white',
                                    padding: '0.625rem 1.125rem',
                                    borderRadius: '1rem',
                                    border: '1px solid #f1f5f9',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                    fontSize: '0.9rem',
                                    fontWeight: 600,
                                    color: 'var(--foreground)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                                        {getIcon(service.icon)}
                                    </div>
                                    {service.name}
                                </div>
                            ))}
                        </div>
                        <div className="hero-cta-group" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                            <a href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20berdiskusi%20tentang%20projek%20saya.`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} aria-label="Konsultasi via WhatsApp">
                                <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', width: '100%' }}>
                                    {t.hero.ctaPrimary} <ArrowRight size={20} />
                                </button>
                            </a>
                            <button className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                                {t.hero.ctaSecondary}
                            </button>
                        </div>
                    </div>

                    <div
                        className="hero-graphic"
                        style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {/* 1. Large Dynamic Background (The Glow) */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 0]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                width: '140%',
                                height: '140%',
                                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(14, 165, 233, 0.05) 50%, transparent 70%)',
                                zIndex: -1,
                                filter: 'blur(60px)'
                            }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="main-photo-card"
                            style={{
                                width: '100%',
                                maxWidth: '460px',
                                minHeight: '350px',
                                position: 'relative',
                                zIndex: 5,
                                borderRadius: '2rem',
                                padding: '12px',
                                background: 'white',
                                boxShadow: '0 30px 60px -12px rgba(15, 23, 42, 0.12)',
                                border: '1px solid #f1f5f9'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                minHeight: '330px',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                position: 'relative',
                                background: '#f1f5f9'
                            }}>
                                <Image
                                    src="/images/team.png"
                                    alt="Codifi Team"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{ objectFit: 'cover' }}
                                    priority={true}
                                />
                            </div>

                            {/* 3. Professional Performance Badge */}
                            <div
                                className="performance-badge floating-element"
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    left: '1.5rem',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(8px)',
                                    padding: '0.75rem 1.125rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 15px 30px -5px rgba(15, 23, 42, 0.1)',
                                    border: '1px solid #f1f5f9',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    zIndex: 10
                                }}
                            >
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    background: 'var(--primary)',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <TrendingUp size={18} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '0.6rem', fontWeight: 800, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1 }}>
                                        Deliver Project
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.1rem' }}>
                                        <span style={{ fontSize: '1.125rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                                            98%
                                        </span>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#10b981' }}>
                                            <TrendingUp size={12} strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 4. Floating UI Fragment */}
                        <div
                            className="floating-ui code-fragment floating-element-delayed"
                            style={{
                                position: 'absolute',
                                bottom: '1.5rem',
                                right: '1.5rem',
                                width: '190px',
                                background: 'rgba(15, 23, 42, 0.85)',
                                backdropFilter: 'blur(12px)',
                                padding: '1rem',
                                borderRadius: '1rem',
                                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                zIndex: 10,
                                color: 'white',
                                fontFamily: 'monospace'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '5px', marginBottom: '0.75rem' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                            <p style={{ fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.5 }}>
                                const <span style={{ color: '#38bdf8' }}>growth</span> = async () ={'>'} {'{'} <br />
                                &nbsp;&nbsp;await <span style={{ color: '#fb7185' }}>scale</span>(id); <br />
                                {'}'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .floating-element {
          animation: float 4s ease-easeInOut infinite;
        }
        .floating-element-delayed {
          animation: float 5s ease-easeInOut infinite 1s;
        }
        @media (max-width: 992px) {
          .floating-element, .floating-element-delayed {
             animation-duration: 6s; /* Slower on mobile to be even lighter */
          }
        }
        .service-highlights-row::-webkit-scrollbar {
          display: none; /* Hide scrollbar Chrome/Safari */
        }
        .main-photo-card {
          aspect-ratio: 0.85;
          width: 100%;
          border-radius: 2rem;
          overflow: hidden;
        }

        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 4rem !important; text-align: center; }
          .hero-grid > div { margin: 0 auto; }
          .hero-graphic { order: -1; max-width: 480px; margin: 0 auto; height: auto; }
          .hero-grid p { margin-left: auto; margin-right: auto; }
          .hero-grid > div { justify-content: center !important; }
          /* Hide decorative elements on all medium/small devices for speed */
          .performance-badge, .code-fragment {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .main-photo-card {
            min-height: 400px !important;
          }
        }

        @media (max-width: 576px) {
          .hero-graphic { height: auto; max-width: 100%; }
          .main-photo-card { min-height: 350px !important; }
          .service-highlights-row {
            margin: 0 -1.5rem 2rem -1.5rem;
            padding: 0 1.5rem 0.5rem 1.5rem !important;
          }
          h1 { font-size: 2.25rem !important; }
          .hero-cta-group { 
            flex-direction: column; 
            width: 100%; 
          }
          .btn { width: 100%; }
        }
      `}</style>
        </section >
    );
}
