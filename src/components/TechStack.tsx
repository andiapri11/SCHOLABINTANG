"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const technologies = [
    { name: "Next.js", logo: "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" },
    { name: "React", logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" },
    { name: "Android", logo: "https://www.vectorlogo.zone/logos/android/android-icon.svg" },
    { name: "Laravel", logo: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
    { name: "PHP", logo: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
    { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" },
    { name: "TypeScript", logo: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Node.js", logo: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" },
    { name: "PostgreSQL", logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" }
];

export default function TechStack() {
    const { language } = useLanguage();

    const title = language === 'id' ? "Teknologi Modern yang Kami Gunakan" : "Modern Technologies We Use";
    const subtitle = language === 'id'
        ? "Kami menggunakan instrumen teknologi terkini untuk memastikan performa maksimal dan skalabilitas."
        : "We use the latest technology stacks to ensure maximum performance and scalability.";

    return (
        <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ color: 'var(--secondary)', maxWidth: '600px', margin: '0 auto' }}
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
                            <img
                                src={tech.logo}
                                alt={tech.name}
                                style={{
                                    width: '48px',
                                    height: '48px',
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
