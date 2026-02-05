"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
const TechStack = dynamic(() => import("@/components/TechStack"), {
    ssr: true,
    loading: () => <div style={{ minHeight: '300px', background: '#ffffff' }} />
});
const Services = dynamic(() => import("@/components/Services"), {
    ssr: true,
    loading: () => <div style={{ minHeight: '800px', background: '#f8fafc' }} />
});
const Products = dynamic(() => import("@/components/Products"), {
    ssr: true,
    loading: () => <div style={{ minHeight: '1200px', background: '#ffffff' }} />
});
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
    ssr: true,
    loading: () => <div style={{ minHeight: '1000px', background: '#f8fafc' }} />
});
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { useSettings } from "@/lib/SettingsContext";
import { Star, ArrowRight } from "lucide-react";

export default function HomeClient() {
    const { t } = useLanguage();
    const { settings } = useSettings();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main style={{ position: 'relative' }}>
            {/* Premium Scroll Progress Bar */}
            <motion.div
                className="scroll-progress-bar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, var(--primary), var(--accent))',
                    transformOrigin: '0%',
                    zIndex: 2000,
                    scaleX
                }}
            />

            <Navbar />
            <Hero />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <Products />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <Services />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <TechStack />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <Portfolio />
            </motion.div>

            {/* Final CTA/Trust Section */}
            <section style={{ backgroundColor: '#ffffff', overflow: 'hidden', padding: '0 0 3rem 0', marginTop: '-1.5rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                            borderRadius: '2.5rem',
                            padding: '2.5rem 2rem',
                            textAlign: 'center',
                            border: '1px solid var(--card-border)',
                            position: 'relative'
                        }}>
                        <div style={{
                            backgroundColor: 'white',
                            display: 'inline-flex',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '2rem',
                            boxShadow: 'var(--shadow-sm)',
                            marginBottom: '2rem',
                            alignItems: 'center',
                            gap: '0.5rem',
                            border: '1px solid #f1f5f9'
                        }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="var(--primary)" color="var(--primary)" />)}
                            </div>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--secondary)' }}>Trusted by 50+ clients</span>
                        </div>

                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', maxWidth: '800px', margin: '0 auto 1.25rem' }}>
                            {t.ctaSection.title1} <span className="gradient-text">{t.ctaSection.title2}</span> {t.ctaSection.title3}
                        </h2>

                        <p style={{ color: 'var(--secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            {t.ctaSection.desc}
                        </p>

                        <a
                            href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20konsultasi%20tentang%20strategi%20digital%20bisnis%20saya.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2.5rem',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                borderRadius: '6.25rem',
                                textDecoration: 'none',
                                boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)'
                            }}
                        >
                            {t.ctaSection.whatsapp} <ArrowRight size={20} />
                        </a>

                    </motion.div>
                </div>
            </section>

            <Footer />
            <style jsx>{`
        .scroll-progress-bar {
          /* Framer motion handles the scaleX */
        }
      `}</style>
        </main>
    );
}
