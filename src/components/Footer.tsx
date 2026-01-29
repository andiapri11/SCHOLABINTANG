"use client";

import Link from "next/link";
import { Rocket, Mail, Phone, Instagram, Linkedin, Globe, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useSettings } from "@/lib/SettingsContext";

export default function Footer() {
  const { t } = useLanguage();
  const { settings } = useSettings();

  // Format display number: 6285768441485 -> +62 857 6844 1485
  const formattedPhone = settings.whatsapp.startsWith('62')
    ? `+62 ${settings.whatsapp.substring(2, 5)} ${settings.whatsapp.substring(5, 9)} ${settings.whatsapp.substring(9)}`
    : settings.whatsapp;

  return (
    <footer style={{ backgroundColor: '#ffffff', padding: '2rem 0 1rem', borderTop: '1px solid #f1f5f9' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 0.8fr 0.9fr 0.8fr 1fr',
          gap: '2.5rem',
          marginBottom: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto 1.5rem'
        }} className="footer-grid">

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link href="/" className="brand-link" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/images/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
                <span style={{ color: '#0f172a', letterSpacing: '-0.02em', fontWeight: 800, fontSize: '1.45rem' }}>Codifi</span>
                <span style={{ color: '#64748b', fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase' }}>Cipta Inovasi Digital</span>
              </div>
            </Link>
            <p style={{ color: 'var(--secondary)', lineHeight: 1.7, fontSize: '0.925rem', maxWidth: '300px' }}>
              {t.footer.tagline}
            </p>
            <div style={{ display: 'flex', gap: '0.875rem' }}>
              <Link href="https://www.instagram.com/codifi.id?igsh=MXJvczY1dmVqNjVzZw%3D%3D&utm_source=qr" target="_blank" className="footer-social-link"><Instagram size={19} /></Link>
              <Link href="#" className="footer-social-link"><Linkedin size={19} /></Link>
              <Link href="https://codifi.id" target="_blank" className="footer-social-link"><Globe size={19} /></Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.75rem', color: '#0f172a' }}>{t.footer.links}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/#services" className="footer-link">{t.nav.services}</Link></li>
              <li><Link href="/#products" className="footer-link">{(t as any).products.title}</Link></li>
              <li><Link href="/#process" className="footer-link">Cara Kerja</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.75rem', color: '#0f172a' }}>Layanan & Produk</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="/web-company-profile-sekolah" className="footer-link">Web Profile & Sekolah</Link></li>
              <li><Link href="/mobile-app-development" className="footer-link">Mobile App Development</Link></li>
              <li><Link href="/custom-system-development" className="footer-link">Custom System (ERP/CRM)</Link></li>
              <li><Link href="/vorapos" className="footer-link">VORA POS (Kasir)</Link></li>
              <li><Link href="/scholacbt" className="footer-link">Schola CBT</Link></li>
              <li><Link href="/scholaportal" className="footer-link">Schola Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.75rem', color: '#0f172a' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link href="#" className="footer-link">Privacy Policy</Link></li>
              <li><Link href="#" className="footer-link">Terms</Link></li>
              <li><Link href="#" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.75rem', color: '#0f172a' }}>{t.footer.contact}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', color: 'var(--secondary)', fontSize: '0.9rem' }}>
                <Mail size={17} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <span>hello@codifi.id</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', color: 'var(--secondary)', fontSize: '0.9rem' }}>
                <Phone size={17} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${settings.whatsapp}?text=Halo%20Codifi,%20saya%20ingin%20berdiskusi%20tentang%20projek%20digital%20saya.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}
                >
                  {formattedPhone}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', color: 'var(--secondary)', fontSize: '0.9rem' }}>
                <MapPin size={17} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                <span>Palembang, Sumatera Selatan, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '1.25rem',
          borderTop: '1px solid #f1f5f9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <p style={{ color: 'var(--secondary)', fontSize: '0.875rem', textAlign: 'center' }}>
            © {new Date().getFullYear()} Codifi. {t.footer.rights}
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          color: var(--secondary);
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: var(--primary);
        }
        .footer-social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #f8fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--secondary);
          transition: all 0.2s ease;
          border: 1px solid #f1f5f9;
        }
        .footer-social-link:hover {
          background-color: var(--primary);
          color: white;
          transform: translateY(-3px);
        }
        @media (max-width: 992px) {
          .footer-grid { 
            grid-template-columns: 1fr 1fr !important; 
            max-width: 100% !important;
            padding: 0 1rem;
          }
        }
        @media (max-width: 768px) {
          footer {
            padding: 3rem 0 2rem !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            text-align: center !important;
            margin-bottom: 2.5rem !important;
          }
          .footer-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .footer-grid p {
            margin: 0 auto;
          }
          .footer-grid ul {
            align-items: center !important;
          }
          .footer-grid ul li {
            justify-content: center !important;
          }
          .footer-social-link {
             margin: 0 auto;
          }
          .brand-link {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
