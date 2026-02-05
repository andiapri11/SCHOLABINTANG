"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

const technologies = [
    { name: "Next.js", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "React", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Flutter", logo: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" },
    { name: "React Native", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Laravel", logo: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
    { name: "PHP", logo: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
    { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
    { name: "TypeScript", logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
    { name: "Tailwind", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Node.js", logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" }
];

export default function TechStack() {
    const { language } = useLanguage();

    const badge = language === 'id' ? "Instrumen Kami" : "Our Instruments";
    const title = language === 'id' ? "Teknologi Modern" : "Modern Technologies";
    const subtitle = language === 'id'
        ? "Kami menggunakan instrumen teknologi terkini untuk memastikan performa maksimal."
        : "We use the latest technology stacks to ensure maximum performance.";

    return (
        <section style={{ padding: '40px 0 60px', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
                        {badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    alignItems: 'center'
                }}>
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '0.75rem',
                                opacity: 0.7,
                                transition: 'opacity 0.3s ease'
                            }}
                            className="tech-item"
                        >
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={48}
                                height={48}
                                style={{
                                    objectFit: 'contain',
                                    filter: 'grayscale(100%) brightness(0.5)'
                                }}
                                className="tech-logo"
                            />
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .tech-item:hover {
                    opacity: 1 !important;
                }
                .tech-item:hover .tech-logo {
                    filter: none !important;
                }
            `}</style>
        </section>
    );
}
