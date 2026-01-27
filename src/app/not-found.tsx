"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="not-found-container">
            {/* Background Decorations */}
            <div className="bg-glow bg-glow-1"></div>
            <div className="bg-glow bg-glow-2"></div>

            <div className="content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="icon-wrapper"
                >
                    <div className="blur-bg"></div>
                    <AlertCircle size={80} className="error-icon" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Halaman Tidak Ditemukan
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
                    Mari kembali ke jalur yang benar.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="actions"
                >
                    <Link href="/" className="btn-back">
                        <Home size={20} />
                        <span>Kembali ke Beranda</span>
                    </Link>
                </motion.div>
            </div>

            <style jsx>{`
        .not-found-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #020617;
          color: white;
          position: relative;
          overflow: hidden;
          padding: 2rem;
          font-family: inherit;
        }

        .bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 0;
          opacity: 0.2;
        }
        .bg-glow-1 { top: -100px; right: -100px; background: #3b82f6; }
        .bg-glow-2 { bottom: -100px; left: -100px; background: #1e3a8a; }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 500px;
        }

        .icon-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blur-bg {
          position: absolute;
          inset: 0;
          background: #3b82f6;
          filter: blur(40px);
          opacity: 0.3;
          border-radius: 50%;
        }

        .error-icon {
          color: #3b82f6;
          position: relative;
          z-index: 2;
        }

        h1 {
          font-size: 8rem;
          font-weight: 900;
          margin: 0;
          line-height: 1;
          color: white;
          letter-spacing: -0.05em;
          background: linear-gradient(to bottom, #ffffff 30%, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        h2 {
          font-size: 2rem;
          font-weight: 800;
          margin: 1rem 0 1.5rem;
          letter-spacing: -0.02em;
        }

        p {
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 3rem;
        }

        .actions {
          display: flex;
          justify-content: center;
        }

        .btn-back {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #2563eb;
          color: white;
          padding: 1rem 2rem;
          border-radius: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4);
        }

        .btn-back:hover {
          background: #3b82f6;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px -5px rgba(37, 99, 235, 0.5);
        }

        @media (max-width: 640px) {
          h1 { font-size: 6rem; }
          h2 { font-size: 1.5rem; }
          p { font-size: 1rem; }
        }
      `}</style>
        </main>
    );
}
