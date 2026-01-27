"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

import { submitConsultation } from "@/app/actions/contact";
import { useState } from "react";

export default function Contact() {
    const { t } = useLanguage();
    const cp = (t as any).contactPage;
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (formData: FormData) => {
        setPending(true);
        setMessage(null);
        const result = await submitConsultation(formData);
        setPending(false);
        if (result.success) {
            setMessage({ type: 'success', text: result.success });
        } else if (result.error) {
            setMessage({ type: 'error', text: result.error });
        }
    };

    return (
        <main>
            <Navbar />

            {/* Contact Hero */}
            <section style={{
                padding: '120px 0 60px',
                background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
                            {cp.title1} <span className="gradient-text">{cp.title2}</span>
                        </h1>
                        <p style={{ color: 'var(--secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1.125rem' }}>
                            {cp.desc}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section style={{ padding: '60px 0 100px', backgroundColor: '#ffffff' }}>
                <div className="container">
                    <div className="contact-grid">

                        {/* Left: Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="info-column"
                        >
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>{cp.info.title}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div className="info-item">
                                    <div className="icon-box"><MessageCircle size={24} /></div>
                                    <div>
                                        <h4>{cp.info.whatsapp}</h4>
                                        <p>+62 812 3456 7890</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><Mail size={24} /></div>
                                    <div>
                                        <h4>{cp.info.email}</h4>
                                        <p>hello@scholabintang.id</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="icon-box"><MapPin size={24} /></div>
                                    <div>
                                        <h4>{cp.info.address}</h4>
                                        <p>Palembang, Sumatera Selatan, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="form-card"
                        >
                            {message && (
                                <div style={{
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    marginBottom: '1.5rem',
                                    backgroundColor: message.type === 'success' ? '#dcfce7' : '#fef2f2',
                                    color: message.type === 'success' ? '#15803d' : '#ef4444',
                                    fontSize: '0.9rem',
                                    fontWeight: 600
                                }}>
                                    {message.text}
                                </div>
                            )}

                            <form action={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>{cp.form.name}</label>
                                        <input type="text" name="name" required placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label>{cp.form.email}</label>
                                        <input type="email" name="email" required placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>{cp.form.service}</label>
                                    <select name="service" required>
                                        <option value="Website & Landing Page">Website & Landing Page</option>
                                        <option value="Smart Retail (POS)">Smart Retail (POS)</option>
                                        <option value="Sistem Sekolah">Sistem Sekolah</option>
                                        <option value="Custom App Development">Custom App Development</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>{cp.form.message}</label>
                                    <textarea name="message" required rows={5} placeholder={cp.form.placeholder}></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={pending}
                                    className="btn btn-primary"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        opacity: pending ? 0.7 : 1,
                                        cursor: pending ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {pending ? 'Sedang Mengirim...' : cp.form.submit} <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.5fr;
                    gap: 4rem;
                    align-items: start;
                    max-width: 1100px;
                    margin: 0 auto;
                }
                .form-card {
                    background: #ffffff;
                    padding: 3rem;
                    borderRadius: 2rem;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.05);
                    border: 1px solid #f1f5f9;
                }
                .info-item {
                    display: flex;
                    gap: 1.25rem;
                    align-items: center;
                }
                .icon-box {
                    width: 56px;
                    height: 56px;
                    border-radius: 1rem;
                    background: #eff6ff;
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .info-item h4 {
                    font-size: 1rem;
                    margin-bottom: 0.25rem;
                    color: #0f172a;
                }
                .info-item p {
                    color: var(--secondary);
                    font-size: 0.95rem;
                    word-break: break-word;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .form-group label {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: #475569;
                }
                .form-group input, 
                .form-group select, 
                .form-group textarea {
                    padding: 0.85rem 1rem;
                    border-radius: 0.75rem;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    font-family: inherit;
                    font-size: 0.95rem;
                    transition: all 0.2s;
                    width: 100%;
                }
                .form-group input:focus, 
                .form-group select:focus, 
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                    background: white;
                    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.05);
                }
                @media (max-width: 992px) {
                    .contact-grid { 
                        grid-template-columns: 1fr; 
                        gap: 3rem; 
                    }
                    section {
                        padding: 40px 0 80px !important;
                    }
                    .info-column {
                        padding: 0 1rem;
                    }
                }
                @media (max-width: 640px) {
                    .form-row { 
                        grid-template-columns: 1fr; 
                        gap: 1.25rem;
                    }
                    .form-card {
                        padding: 1.5rem !important;
                        margin: 0 1rem;
                        border-radius: 1.5rem;
                    }
                    h1 {
                        font-size: 2.25rem !important;
                        padding: 0 1rem;
                    }
                    .info-column h2 {
                        font-size: 1.75rem !important;
                    }
                    p {
                        font-size: 1rem !important;
                        padding: 0 1rem;
                    }
                }
            `}</style>
        </main>
    );
}
