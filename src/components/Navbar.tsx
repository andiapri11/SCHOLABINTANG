"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, Languages } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={isScrolled ? "scrolled" : ""} style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontWeight: 800, fontSize: '1.35rem' }}>
                    <div style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src="/images/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <span style={{ color: 'var(--foreground)', letterSpacing: '-0.02em' }}>Schola Bintang Digital</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }} className="desktop-menu">
                    <Link href="/#services" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569', transition: 'color 0.3s ease' }} className="nav-link">{t.nav.services}</Link>
                    <Link href="/#products" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#475569', transition: 'color 0.3s ease' }} className="nav-link">{(t as any).products.title}</Link>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.75rem',
                        background: '#f1f5f9',
                        border: '1px solid #e2e8f0'
                    }}>
                        <Languages size={16} color="var(--primary)" />
                        <button
                            onClick={() => setLanguage('id')}
                            style={{ background: 'none', border: 'none', color: language === 'id' ? 'var(--primary)' : '#64748b', cursor: 'pointer', fontWeight: language === 'id' ? 800 : 500, fontSize: '0.85rem' }}
                        >
                            ID
                        </button>
                        <span style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>|</span>
                        <button
                            onClick={() => setLanguage('en')}
                            style={{ background: 'none', border: 'none', color: language === 'en' ? 'var(--primary)' : '#64748b', cursor: 'pointer', fontWeight: language === 'en' ? 800 : 500, fontSize: '0.85rem' }}
                        >
                            EN
                        </button>
                    </div>

                    <Link href="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', fontSize: '0.9rem', fontWeight: 700, borderRadius: '6.25rem', boxShadow: '0 4px 14px 0 rgba(245, 130, 31, 0.3)' }}>
                        {t.nav.cta}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ display: 'none', color: 'var(--foreground)' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </div>
            </div>

            {isMenuOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'white',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 2000,
                    animation: 'fadeIn 0.3s ease-out'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <img src="/images/logo.png" alt="Logo" style={{ width: '36px', height: '36px' }} />
                            <span style={{ fontWeight: 800, color: 'var(--secondary)' }}>Schola Bintang Digital</span>
                        </div>
                        <div onClick={() => setIsMenuOpen(false)} style={{ color: '#64748b' }}>
                            <X size={28} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <Link href="/#services" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>{t.nav.services}</Link>
                        <Link href="/#products" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>{(t as any).products.title}</Link>

                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            paddingTop: '2rem',
                            marginTop: '1rem',
                            borderTop: '1px solid #f1f5f9'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '2rem',
                                background: '#f8fafc',
                                border: '1px solid #e2e8f0'
                            }}>
                                <button
                                    onClick={() => setLanguage('id')}
                                    style={{ background: 'none', border: 'none', color: language === 'id' ? 'var(--primary)' : '#64748b', fontWeight: language === 'id' ? 800 : 500, fontSize: '0.95rem' }}
                                >
                                    ID
                                </button>
                                <span style={{ color: '#cbd5e1' }}>|</span>
                                <button
                                    onClick={() => setLanguage('en')}
                                    style={{ background: 'none', border: 'none', color: language === 'en' ? 'var(--primary)' : '#64748b', fontWeight: language === 'en' ? 800 : 500, fontSize: '0.95rem' }}
                                >
                                    EN
                                </button>
                            </div>
                        </div>
                    </div>

                    <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="btn btn-primary" style={{ marginTop: 'auto', padding: '1.125rem', fontSize: '1.05rem', fontWeight: 800, borderRadius: '1rem' }}>
                        {t.nav.cta}
                    </Link>
                </div>
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
