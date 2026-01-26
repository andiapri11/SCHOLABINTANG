"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
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
