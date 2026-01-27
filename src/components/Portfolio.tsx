"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { ExternalLink, ArrowRight } from "lucide-react";



export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="portfolio" style={{ padding: '40px 0 60px', background: '#f8fafc' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: 800,
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            marginBottom: '0.25rem',
                            display: 'block'
                        }}>
                            {t.portfolio.badge}
                        </span>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>{t.portfolio.title}</h2>
                        <p style={{ color: 'var(--secondary)', fontSize: '0.95rem' }}>{t.portfolio.desc}</p>
                    </motion.div>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="btn btn-outline"
                        style={{ borderRadius: '0.75rem' }}
                    >
                        {t.portfolio.all} <ArrowRight size={16} />
                    </motion.button>
                </div>

                <motion.div
                    className="grid-responsive"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.1 }
                        }
                    }}
                >
                    {t.portfolio.items?.map((project: any, index: number) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                            }}
                            style={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <div style={{
                                position: 'relative',
                                height: '320px',
                                width: '100%',
                                borderRadius: '1.5rem',
                                marginBottom: '1.75rem',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-md)',
                                backgroundColor: 'white'
                            }} className="portfolio-card">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)' }}
                                    className="portfolio-img"
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.6) 0%, transparent 60%)',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: '1.5rem',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }} className="portfolio-overlay">
                                    <div style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                                        View Project <ExternalLink size={16} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <span style={{
                                        color: 'var(--primary)',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {project.category}
                                    </span>
                                    <h3 style={{ marginTop: '0.5rem', fontSize: '1.25rem', color: '#0f172a' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{project.client}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }
        .portfolio-card:hover .portfolio-overlay {
          opacity: 1 !important;
        }
      `}</style>
        </section>
    );
}
