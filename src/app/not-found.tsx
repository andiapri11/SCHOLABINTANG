"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Compass, MapPin, Search } from "lucide-react";

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
          transition={{ duration: 0.8 }}
          className="illustration-wrapper"
        >
          <div className="blur-bg"></div>
          <img
            src="/images/lost.png"
            alt="Lost person"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '300px',
              position: 'relative',
              zIndex: 2
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <h1 className="error-code">404</h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="error-title"
        >
          Sepertinya Anda Sedang Tersesat...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="error-desc"
        >
          Tenang, jangan panik. Halaman yang Anda cari mungkin sedang bersembunyi atau sudah pindah ke alamat baru. Mari kami bantu Anda menemukan jalan pulang.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="actions"
        >
          <Link href="/" className="btn-home">
            <Home size={20} />
            <span>Kembali ke Beranda</span>
          </Link>
        </motion.div>
      </div>

      <footer className="footer">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          © 2026 Codifi. Hak Cipta Dilindungi.
        </motion.p>
      </footer>

      <style jsx>{`
        .not-found-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          color: #0f172a;
          position: relative;
          overflow: hidden;
          padding: 2rem;
        }

        .bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(140px);
          z-index: 1;
          opacity: 0.3;
        }
        .bg-glow-1 { top: -200px; right: -100px; background: #fef3c7; }
        .bg-glow-2 { bottom: -200px; left: -100px; background: #dbeafe; }

        .content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 600px;
        }

        .illustration-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          margin: 0 auto 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .blur-bg {
          position: absolute;
          width: 200px;
          height: 200px;
          background: #3b82f6;
          filter: blur(80px);
          opacity: 0.1;
          border-radius: 50%;
          z-index: 1;
        }

        .error-code {
          font-size: 8rem;
          font-weight: 900;
          margin: 0;
          line-height: 0.9;
          background: linear-gradient(135deg, #f59e0b 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.05em;
          position: relative;
          z-index: 10;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.05));
          margin-bottom: 0.5rem;
        }

        .error-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin: 0.5rem 0 1rem;
          letter-spacing: -0.02em;
          color: #1e293b;
        }

        .error-desc {
          color: #475569;
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 450px;
          margin-left: auto;
          margin-right: auto;
        }

        .actions {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 20;
        }

        .btn-home {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #2563eb;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
        }

        .btn-home:hover {
          color: #1d4ed8;
          transform: translateY(-2px);
          background: rgba(37, 99, 235, 0.05);
        }

        .footer {
          position: absolute;
          bottom: 2rem;
          left: 0;
          right: 0;
          text-align: center;
          color: #94a3b8;
          font-size: 0.875rem;
          z-index: 10;
        }

        @media (max-width: 640px) {
          .error-code { font-size: 6rem; }
          .error-title { font-size: 1.5rem; }
          .error-desc { font-size: 0.95rem; }
          .footer { bottom: 1.5rem; font-size: 0.75rem; }
        }
      `}</style>
    </main>
  );
}
