"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useSettings } from "@/lib/SettingsContext";
import { ShoppingBag, ArrowRight, CheckCircle2, Zap, LayoutGrid, ShieldCheck, Globe, Code } from "lucide-react";
import Image from "next/image";

export default function Products() {
    const { t } = useLanguage();
    const { settings } = useSettings();
    const products = (t as any).products;

    if (!products) return null;

    return (
        <section id="products" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: '60px 0 20px 0',
            backgroundColor: '#ffffff',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ width: '100%' }}>
                {/* Our Products Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            style={{
                                color: 'var(--primary)',
                                fontWeight: 800,
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                marginBottom: '0.25rem',
                                display: 'block'
                            }}
                        >
                            Katalog Produk
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.5rem' }}
                        >
                            {products.readyTitle}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '600px', margin: '0 auto' }}
                        >
                            {products.readyDesc}
                        </motion.p>
                    </div>

                    <motion.div
                        className="products-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '1.5rem',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}
                    >
                        {products.readyItems?.map((product: any, index: number) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                                }}
                                style={{
                                    flex: '1 1 320px',
                                    maxWidth: '380px',
                                    display: 'flex'
                                }}
                            >
                                <div
                                    className="product-card"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                        flex: 1,
                                        padding: '3rem 2rem',
                                        borderRadius: '2.5rem',
                                        backgroundColor: 'white',
                                        border: index === 1 ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                                        position: 'relative',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: index === 1 ? '0 20px 40px -10px rgba(37, 99, 235, 0.15)' : '0 10px 30px -5px rgba(0, 0, 0, 0.04)',
                                        textAlign: 'center'
                                    }}
                                >
                                    {index === 1 && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '-14px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: 'var(--primary)',
                                            color: 'white',
                                            padding: '0.4rem 1.25rem',
                                            borderRadius: '2rem',
                                            fontSize: '0.7rem',
                                            fontWeight: 800,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.3)',
                                            zIndex: 10,
                                            whiteSpace: 'nowrap'
                                        }}>
                                            Paling Populer
                                        </div>
                                    )}

                                    <div style={{ marginBottom: '0.75rem' }}>
                                        <span style={{
                                            padding: '0.4rem 1rem',
                                            borderRadius: '2rem',
                                            background: product.isPromo ? '#fef2f2' : '#f1f5f9',
                                            color: product.isPromo ? '#ef4444' : '#64748b',
                                            fontSize: '0.65rem',
                                            fontWeight: 900,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                        }}>
                                            {product.isPromo ? 'Promo Tahun Ajaran Baru' : 'Standard Plan'}
                                        </span>
                                    </div>

                                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em' }}>
                                        {product.name}
                                    </h3>

                                    <p style={{ color: '#64748b', lineHeight: 1.5, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                                        {product.desc}
                                    </p>

                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.4rem',
                                        marginBottom: '1.25rem',
                                        alignItems: 'flex-start',
                                        marginInline: 'auto',
                                        width: 'fit-content'
                                    }}>
                                        {product.features?.map((feature: string, fIndex: number) => (
                                            <div key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#475569', fontWeight: 500 }}>
                                                <CheckCircle2 size={13} color="var(--primary)" style={{ flexShrink: 0 }} />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{
                                        marginTop: 'auto',
                                        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                        padding: '0.75rem',
                                        borderRadius: '1rem',
                                        marginBottom: '0.75rem',
                                        position: 'relative'
                                    }}>
                                        {product.originalPrice && (
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: '0.4rem',
                                                marginBottom: '0.2rem'
                                            }}>
                                                <span style={{ fontSize: '0.8rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                                                    {product.originalPrice}
                                                </span>
                                                <span style={{
                                                    background: '#dcfce7',
                                                    color: '#15803d',
                                                    padding: '0.15rem 0.4rem',
                                                    borderRadius: '0.4rem',
                                                    fontSize: '0.6rem',
                                                    fontWeight: 800
                                                }}>
                                                    Hemat {product.discount || '40%'}
                                                </span>
                                            </div>
                                        )}
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            {(product.price.startsWith('Mulai') || product.price.startsWith('Starting')) && (
                                                <span style={{
                                                    fontSize: '0.65rem',
                                                    fontWeight: 800,
                                                    color: '#94a3b8',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    marginBottom: '-0.25rem'
                                                }}>
                                                    {product.price.split(' ')[0]} {product.price.includes('dari') ? 'dari' : product.price.includes('from') ? 'from' : ''}
                                                </span>
                                            )}
                                            <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.04em' }}>
                                                {product.price.replace(/^(Mulai dari|Starting from|Mulai|Starting)\s*/, '')}
                                            </div>
                                        </div>
                                    </div>

                                    {(() => {
                                        const productLinks: Record<string, string> = {
                                            "Web Company Profile": "/web-company-profile-sekolah",
                                            "Mobile App Development": "/mobile-app-development",
                                            "Custom System Development": "/custom-system-development",
                                            "VORA (Multi-branch POS)": "/vorapos",
                                            "Schola CBT (Exam App)": "/scholacbt",
                                            "Schola Portal": "/scholaportal"
                                        };
                                        const link = productLinks[product.name];

                                        return (
                                            <a href={link || "#"} style={{ textDecoration: 'none', width: '100%' }}>
                                                <button className="btn btn-primary" style={{
                                                    width: '100%',
                                                    borderRadius: '1rem',
                                                    padding: '0.9rem',
                                                    fontWeight: 700,
                                                    fontSize: '0.95rem',
                                                    boxShadow: '0 8px 12px -3px rgba(37, 99, 235, 0.2)'
                                                }}>
                                                    {product.isPromo ? 'Ambil Promo Sekarang' : 'Konsultasi Sekarang'} <ArrowRight size={16} />
                                                </button>
                                            </a>
                                        );
                                    })()}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Custom Products Section - Differentiated with Navy Theme */}
                <div style={{
                    marginTop: '-2.5rem',
                    padding: '3.5rem 0',
                    backgroundColor: '#f8fafc',
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    marginLeft: '-50vw',
                    marginRight: '-50vw'
                }}>
                    <div className="container">
                        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}
                            >
                                {products.customTitle}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                style={{ color: '#64748b', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}
                            >
                                {products.customDesc}
                            </motion.p>
                        </div>

                        <motion.div
                            className="products-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '1.5rem',
                                maxWidth: '1200px',
                                margin: '0 auto'
                            }}
                        >
                            {products.customItems?.map((product: any, index: number) => {
                                const sectionAccent = '#0f172a'; // Deep Navy for this section
                                return (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 40 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                                        }}
                                        style={{
                                            flex: '1 1 320px',
                                            maxWidth: '380px',
                                            display: 'flex'
                                        }}
                                    >
                                        <div
                                            className="product-card"
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: '100%',
                                                flex: 1,
                                                padding: '3.5rem 2rem',
                                                borderRadius: '2.5rem',
                                                backgroundColor: 'white',
                                                border: index === 1 ? `2px solid ${sectionAccent}` : '1px solid #e2e8f0',
                                                position: 'relative',
                                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                                boxShadow: index === 1 ? '0 25px 50px -12px rgba(15, 23, 42, 0.15)' : '0 10px 30px -5px rgba(0, 0, 0, 0.04)',
                                                textAlign: 'center'
                                            }}
                                        >
                                            {index === 1 && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '-14px',
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    background: sectionAccent,
                                                    color: 'white',
                                                    padding: '0.4rem 1.25rem',
                                                    borderRadius: '2rem',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 800,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    zIndex: 10,
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    Layanan Populer
                                                </div>
                                            )}

                                            <div style={{ marginBottom: '1rem' }}>
                                                <span style={{
                                                    padding: '0.5rem 1.25rem',
                                                    borderRadius: '2rem',
                                                    background: product.isPromo ? '#fef2f2' : '#f1f5f9',
                                                    color: product.isPromo ? '#ef4444' : '#64748b',
                                                    fontSize: '0.65rem',
                                                    fontWeight: 900,
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.1em',
                                                    border: '1px solid #e2e8f0'
                                                }}>
                                                    {product.isPromo ? 'Promo Tahun Ajaran Baru' : 'Layanan Kustom'}
                                                </span>
                                            </div>

                                            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em' }}>
                                                {product.name}
                                            </h3>

                                            <p style={{ color: '#64748b', lineHeight: 1.6, marginBottom: '2rem', fontSize: '1rem' }}>
                                                {product.desc}
                                            </p>

                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '0.6rem',
                                                marginBottom: '2.5rem',
                                                alignItems: 'flex-start',
                                                marginInline: 'auto',
                                                width: 'fit-content'
                                            }}>
                                                {product.features?.map((feature: string, fIndex: number) => (
                                                    <div key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
                                                        <CheckCircle2 size={15} color={sectionAccent} style={{ flexShrink: 0 }} />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div style={{
                                                marginTop: 'auto',
                                                background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                                                padding: '1rem',
                                                borderRadius: '1.25rem',
                                                marginBottom: '1.5rem',
                                                position: 'relative'
                                            }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                    {(product.price.startsWith('Mulai') || product.price.startsWith('Starting')) && (
                                                        <span style={{
                                                            fontSize: '0.65rem',
                                                            fontWeight: 800,
                                                            color: '#94a3b8',
                                                            textTransform: 'uppercase',
                                                            letterSpacing: '0.05em',
                                                            marginBottom: '-0.25rem'
                                                        }}>
                                                            {product.price.split(' ')[0]} {product.price.includes('dari') ? 'dari' : product.price.includes('from') ? 'from' : ''}
                                                        </span>
                                                    )}
                                                    <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.04em' }}>
                                                        {product.price.replace(/^(Mulai dari|Starting from|Mulai|Starting)\s*/, '')}
                                                    </div>
                                                </div>
                                            </div>

                                            {(() => {
                                                const productLinks: Record<string, string> = {
                                                    "Web Company Profile": "/web-company-profile-sekolah",
                                                    "Mobile App Development": "/mobile-app-development",
                                                    "Custom System Development": "/custom-system-development",
                                                    "VORA (Multi-branch POS)": "/vorapos",
                                                    "Schola CBT (Exam App)": "/scholacbt",
                                                    "Schola Portal": "/scholaportal"
                                                };
                                                const link = productLinks[product.name];

                                                return (
                                                    <a href={link || "#"} style={{ textDecoration: 'none', width: '100%' }}>
                                                        <button className="btn" style={{
                                                            width: '100%',
                                                            borderRadius: '1.25rem',
                                                            padding: '1.1rem',
                                                            fontWeight: 800,
                                                            fontSize: '1rem',
                                                            background: index === 1 ? sectionAccent : 'white',
                                                            border: index === 1 ? 'none' : `2px solid #e2e8f0`,
                                                            color: index === 1 ? 'white' : '#0f172a',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            gap: '0.75rem',
                                                            transition: 'all 0.3s ease'
                                                        }}>
                                                            Konsultasi Sekarang <ArrowRight size={18} />
                                                        </button>
                                                    </a>
                                                );
                                            })()}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="custom-cta-container"
                    style={{
                        marginTop: '4rem',
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                        borderRadius: '2.5rem',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap-reverse'
                    }}
                >
                    {/* Decorative Tech Background */}
                    <div className="cta-dots-bg" style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                        zIndex: 0
                    }} />
                    <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'var(--primary)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }}></div>

                    {/* Proportional Image Column */}
                    <div className="cta-image-col" style={{
                        flex: '1 1 340px',
                        height: '100%',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        zIndex: 2,
                        minHeight: '400px'
                    }}>
                        {/* Rim Light Glow */}
                        <div style={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '260px',
                            height: '260px',
                            background: 'var(--primary)',
                            opacity: 0.2,
                            filter: 'blur(60px)',
                            borderRadius: '50%',
                            zIndex: -1
                        }}></div>

                        <Image
                            src="/consultant_woman.png"
                            alt="Professional Expert"
                            fill
                            className="cta-consultant-img"
                            style={{
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))',
                                top: 'auto',
                                bottom: '-20px',
                                // Smooth transparent fade at bottom
                                maskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
                                WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%, black 100%)',
                                pointerEvents: 'none'
                            }}
                        />
                    </div>

                    {/* Balanced Text Column */}
                    <div className="cta-text-col" style={{
                        flex: '1.2 1 450px',
                        padding: '4rem 3.5rem',
                        position: 'relative',
                        zIndex: 3
                    }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '0.6rem',
                            background: 'rgba(37, 99, 235, 0.15)',
                            borderRadius: '1rem',
                            marginBottom: '1.5rem',
                            color: '#60a5fa',
                            border: '1px solid rgba(37, 99, 235, 0.2)'
                        }}>
                            <ShoppingBag size={24} />
                        </div>

                        <h2 style={{
                            color: 'white',
                            fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                            marginBottom: '1.25rem',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.15
                        }}>
                            {products.customCTA}
                        </h2>

                        <p style={{
                            color: '#94a3b8',
                            marginBottom: '2.5rem',
                            maxWidth: '520px',
                            fontSize: '1.05rem',
                            lineHeight: 1.6
                        }}>
                            {(t as any).ctaSection?.desc}
                        </p>

                        <a
                            href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20berdiskusi%20tentang%20ide%20aplikasi%20saya.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                display: 'inline-block',
                                position: 'relative',
                                zIndex: 10
                            }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn btn-primary cta-btn"
                                style={{
                                    background: 'white',
                                    color: '#0f172a',
                                    border: 'none',
                                    padding: '1rem 2.5rem',
                                    fontSize: '1.05rem',
                                    fontWeight: 800,
                                    borderRadius: '0.85rem',
                                    boxShadow: '0 10px 30px -5px rgba(255, 255, 255, 0.25)',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    cursor: 'pointer'
                                }}
                            >
                                {products.customBtn} <ArrowRight size={20} />
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
                .product-card:hover {
                    border-color: var(--primary) !important;
                    box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.1);
                    transform: translateY(-8px);
                }

                @media (max-width: 768px) {
                    .custom-cta-container {
                        margin-top: 3rem !important;
                        border-radius: 2rem !important;
                        padding: 0 !important;
                        overflow: hidden;
                    }
                    .cta-text-col {
                        padding: 3.5rem 1.5rem 2.5rem 1.5rem !important;
                        text-align: center !important;
                        order: 1 !important;
                    }
                    .cta-text-col h2 {
                        font-size: 1.6rem !important;
                        line-height: 1.2 !important;
                        margin-bottom: 1rem !important;
                        letter-spacing: -0.02em !important;
                    }
                    .cta-text-col p {
                        font-size: 0.95rem !important;
                        line-height: 1.6 !important;
                        margin-bottom: 2rem !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                        opacity: 0.9;
                    }
                    .cta-btn {
                        width: 100% !important;
                        padding: 1rem 1.5rem !important;
                        font-size: 1rem !important;
                        border-radius: 1rem !important;
                    }
                    .cta-image-col {
                        order: 2 !important;
                        min-height: 320px !important;
                        background: rgba(15, 23, 42, 0.4);
                        display: flex !important;
                        align-items: flex-end !important;
                    }
                    .cta-consultant-img {
                        height: 110% !important;
                        bottom: -15px !important;
                        transform: scale(1.1) !important;
                    }
                }

                @media (max-width: 480px) {
                    .cta-text-col { padding: 3rem 1.25rem 2rem 1.25rem !important; }
                    .cta-text-col h2 { font-size: 1.4rem !important; }
                    .cta-image-col { min-height: 280px !important; }
                }
            `}</style>
        </section>
    );
}
