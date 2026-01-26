"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, ArrowRight, ShieldCheck, Github } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        if (password === "admin123") {
            localStorage.setItem("isAdmin", "true");
            setTimeout(() => {
                router.push("/dashboard/submissions");
            }, 800);
        } else {
            setError("Kunci akses tidak valid.");
            setLoading(false);
        }
    };

    return (
        <main className="login-page">
            {/* Background Decorations */}
            <div className="bg-glow bg-glow-1"></div>
            <div className="bg-glow bg-glow-2"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="login-container"
            >
                <div className="brand-logo" style={{ overflow: 'hidden' }}>
                    <img src="/images/logo.png" alt="Codifi" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>

                <div className="header-text">
                    <h1 style={{ marginBottom: '0.25rem' }}>Codifi</h1>
                    <span style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '2rem' }}>Cipta Digital Indonesia</span>
                    <p>Masukkan kunci akses untuk masuk ke panel manajemen sistem.</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-field">
                        <div className="icon-wrapper">
                            <Lock size={20} />
                        </div>
                        <input
                            type="password"
                            placeholder="Kunci Akses"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="error-message"
                            >
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`submit-btn ${loading ? 'loading' : ''}`}
                    >
                        <span>{loading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}</span>
                        {!loading && <ArrowRight size={20} />}
                    </button>

                    <Link href="/" className="back-link">
                        Kembali ke Situs Utama
                    </Link>
                </form>
            </motion.div>

            <style jsx>{`
                .login-page {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #020617;
                    padding: 2rem;
                    position: relative;
                    overflow: hidden;
                    font-family: inherit;
                }

                .bg-glow {
                    position: absolute;
                    width: 500px;
                    height: 500px;
                    border-radius: 50%;
                    filter: blur(120px);
                    z-index: 0;
                    opacity: 0.15;
                }
                .bg-glow-1 { top: -100px; right: -100px; background: #3b82f6; }
                .bg-glow-2 { bottom: -100px; left: -100px; background: #1e3a8a; }

                .login-container {
                    width: 100%;
                    maxWidth: 440px;
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 2.5rem;
                    padding: 3.5rem 3rem;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    z-index: 10;
                    text-align: center;
                }

                .brand-logo {
                    width: 72px;
                    height: 72px;
                    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                    border-radius: 1.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 2rem;
                    color: white;
                    box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4);
                }

                .header-text h1 {
                    color: white;
                    fontSize: 2rem;
                    fontWeight: 800;
                    marginBottom: 0.75rem;
                    letterSpacing: -0.04em;
                }

                .header-text p {
                    color: #94a3b8;
                    fontSize: 0.95rem;
                    marginBottom: 3rem;
                    lineHeight: 1.6;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .input-field {
                    position: relative;
                    width: 100%;
                }

                .icon-wrapper {
                    position: absolute;
                    left: 1.25rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #64748b;
                    display: flex;
                    align-items: center;
                    pointer-events: none;
                }

                .input-field input {
                    width: 100%;
                    background: rgba(2, 6, 23, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 1.25rem 1rem 1.25rem 3.5rem;
                    border-radius: 1.25rem;
                    color: white;
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-sizing: border-box;
                }

                .input-field input:focus {
                    border-color: #3b82f6;
                    background: rgba(2, 6, 23, 0.8);
                    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
                }

                .error-message {
                    color: #fb7185;
                    font-size: 0.875rem;
                    font-weight: 600;
                    background: rgba(251, 113, 133, 0.1);
                    padding: 0.75rem;
                    border-radius: 0.75rem;
                }

                .submit-btn {
                    background: #2563eb;
                    color: white;
                    border: none;
                    padding: 1.15rem;
                    border-radius: 1.25rem;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    font-size: 1rem;
                    box-shadow: 0 10px 25px -10px rgba(37, 99, 235, 0.5);
                }

                .submit-btn:hover:not(:disabled) {
                    background: #3b82f6;
                    transform: translateY(-2px);
                    box-shadow: 0 15px 30px -10px rgba(37, 99, 235, 0.6);
                }

                .submit-btn:active { transform: translateY(0); }
                .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

                .back-link {
                    color: #64748b;
                    fontSize: 0.875rem;
                    fontWeight: 600;
                    marginTop: 0.5rem;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                .back-link:hover { color: #94a3b8; }

                @media (max-width: 480px) {
                    .login-container { padding: 3rem 1.5rem; }
                    .header-text h1 { font-size: 1.75rem; }
                }
            `}</style>
        </main>
    );
}

import { AnimatePresence } from "framer-motion";
