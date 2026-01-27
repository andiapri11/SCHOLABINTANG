"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingBag, GraduationCap, Cpu, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    const serviceIcons = [
        <Globe size={28} key="globe" />,
        <ShoppingBag size={28} key="shopping" />,
        <GraduationCap size={28} key="school" />,
        <Cpu size={28} key="cpu" />
    ];

    return (
        <section id="services" style={{ padding: '40px 0 80px', backgroundColor: '#f8fafc', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                        {t.services.badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.75rem', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.04em' }}
                    >
                        {t.services.subtitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ color: 'var(--secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '1.125rem', lineHeight: 1.7 }}
                    >
                        {t.services.desc}
                    </motion.p>
                </div>

                <motion.div
                    className="services-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {t.services.items.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
                            }}
                            className="service-card"
                            style={{
                                background: 'white',
                                padding: '2.5rem 2rem',
                                borderRadius: '1.5rem',
                                border: '1px solid #e2e8f0',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                height: 'auto',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '1rem',
                                background: 'var(--primary)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.75rem',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: '0 8px 16px -4px rgba(37, 99, 235, 0.3)',
                                transition: 'all 0.3s ease'
                            }} className="icon-container">
                                {serviceIcons[index]}
                            </div>

                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.35rem',
                                color: '#0f172a',
                                fontWeight: 800,
                                position: 'relative',
                                zIndex: 1,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.3
                            }}>
                                {service.title}
                            </h3>

                            <p style={{
                                color: 'var(--secondary)',
                                lineHeight: 1.7,
                                fontSize: '0.95rem',
                                marginBottom: '0.5rem',
                                flexGrow: 1,
                                position: 'relative',
                                zIndex: 1
                            }}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                @media (min-width: 1200px) {
                    .services-grid {
                        grid-template-columns: repeat(4, 1fr) !important;
                    }
                }
                .service-card:hover {
                    border-color: var(--primary) !important;
                    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.1);
                    transform: translateY(-10px);
                }
                .service-card:hover .icon-container {
                    transform: scale(1.1) rotate(5deg);
                }
            `}</style>
        </section >
    );
}
