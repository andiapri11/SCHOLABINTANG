export type Language = 'id' | 'en';

export const translations = {
    id: {
        nav: {
            services: "Layanan",
            portfolio: "Karya",
            about: "Solusi",
            cta: "Konsultasi"
        },
        hero: {
            badge: "Tumbuh dan Melangkah Bersama Anda",
            title1: "Bangun Fondasi Digital",
            title2: "Untuk Bisnis Anda",
            desc: "Hadirkan solusi digital strategis untuk mengoptimalkan potensi bisnis dan institusi Anda. Kami menyediakan infrastruktur teknologi yang efisien, mulai dari pengembangan profil profesional hingga sistem informasi sekolah dan aplikasi bisnis kustom yang siap mengakomodasi kebutuhan Anda.",
            services: [
                { name: "Website & Landing Page", icon: "Globe" },
                { name: "Sistem Manajemen Retail", icon: "ShoppingBag" },
                { name: "Sistem Informasi Sekolah", icon: "GraduationCap" },
                { name: "Pengembangan App Custom", icon: "Cpu" }
            ],
            ctaPrimary: "Konsultasi Gratis",
            ctaSecondary: "Produk Siap Pakai",
            techStack: "Teknologi Skalabel",
            seo: "Mudah Ditemukan Pelanggan",
            mobile: "Akses dari Mana Saja"
        },
        services: {
            subtitle: "Solusi Teknologi Strategis",
            desc: "Kami menghadirkan ekosistem digital yang dirancang khusus untuk meningkatkan efisiensi operasional dan memperluas jangkauan pasar bisnis serta institusi Anda.",
            items: [
                {
                    title: "Website & Landing Page",
                    description: "Representasi digital profesional dengan fokus pada konversi, performa tinggi, dan optimasi mesin pencari (SEO) untuk kredibilitas maksimal."
                },
                {
                    title: "Sistem Manajemen Retail",
                    description: "Solusi Point of Sale (POS) dan inventaris terintegrasi untuk memantau transaksi, stok, dan laporan keuangan secara real-time dari perangkat apapun."
                },
                {
                    title: "Sistem Informasi Sekolah",
                    description: "Digitalisasi administrasi pendidikan untuk pengelolaan data siswa, kurikulum, absensi, hingga laporan capaian hasil belajar secara efisien."
                },
                {
                    title: "Pengembangan App Custom",
                    description: "Transformasikan ide sistem unik Anda menjadi solusi perangkat lunak yang skalabel, aman, dan disesuaikan secara presisi dengan alur kerja organisasi."
                }
            ]
        },
        products: {
            title: "Katalog",
            desc: "Pilih dari koleksi aplikasi siap pakai kami agar Anda bisa langsung fokus berjualan dan mengelola bisnis dengan harga yang sangat terjangkau.",
            items: [
                {
                    name: "Smart Retail (POS)",
                    price: "1.49jt-an",
                    originalPrice: "2.5jt",
                    discount: "40%",
                    desc: "Sistem kasir lengkap untuk toko. Kelola stok, cetak struk, dan pantau laba-rugi secara real-time.",
                    isPromo: true,
                    features: [
                        "Full Source Code & Database",
                        "Manajemen Stok & Inventori",
                        "Laporan Laba Rugi Otomatis",
                        "Support Cetak Struk Bluetooth",
                        "Gratis Instalasi & Training",
                        "Update Fitur Selamanya"
                    ]
                },
                {
                    name: "Company Profile Modern",
                    price: "850rb-an",
                    originalPrice: "1.8jt",
                    discount: "50%",
                    desc: "Tingkatkan kredibilitas bisnis dengan website profil elegan, cepat, dan SEO friendly.",
                    isPromo: true,
                    features: [
                        "Desain Premium & Responsive",
                        "Integrasi WhatsApp Chat",
                        "Optimasi SEO Google",
                        "Akses Cepat (High Performance)",
                        "Gratis Hosting 1 Tahun",
                        "Email Bisnis Profesional"
                    ]
                },
                {
                    name: "Sistem Sekolah Digital",
                    price: "450rb-an",
                    originalPrice: "1.5jt",
                    discount: "70%",
                    desc: "Digitalisasi sekolah tanpa mahal. Kelola absensi, nilai, dan administrasi dalam satu sistem.",
                    isPromo: true,
                    features: [
                        "Panel Admin, Guru & Siswa",
                        "Manajemen Nilai & Raport",
                        "Sistem Absensi Digital",
                        "Modul Keuangan & SPP",
                        "Backup Data Rutin",
                        "Pelatihan Administrator Sekolah"
                    ]
                },
                {
                    name: "Aplikasi CBT Ujian",
                    price: "350rb-an",
                    originalPrice: "1.2jt",
                    discount: "70%",
                    desc: "Sistem ujian online praktis & anti-curang. Cocok untuk ulangan harian atau ujian semester.",
                    isPromo: true,
                    features: [
                        "Bank Soal Terintegrasi",
                        "Acak Soal & Jawaban",
                        "Pembatasan Browser (Anti-Cheat)",
                        "Laporan Nilai Real-time",
                        "Analisis Butir Soal",
                        "Support Import Excel"
                    ]
                }
            ],
            customCTA: "Punya ide aplikasi unik untuk usaha atau sekolah Anda?",
            customBtn: "Mulai Diskusi Projek"
        },
        portfolio: {
            title: "Mitra Sukses Bisnis Baru",
            desc: "Simak bagaimana kami membantu berbagai unit usaha beralih dari manual ke sistem digital yang terintegrasi.",
            all: "Lihat Semua Cerita Sukses",
            items: [
                {
                    title: "Smart POS System",
                    category: "Retail Management",
                    client: "Nian Komputer",
                    image: "/pos_system_mockup_1769335969501.png"
                },
                {
                    title: "Portal Akademik",
                    category: "Education Tech",
                    client: "LPT Nurul Ilmi",
                    image: "/school_system_dashboard_1769335986514.png"
                },
                {
                    title: "Corporate Website Premium",
                    category: "Web Development",
                    client: "TechScale Solutions",
                    image: "/corporate_website_showcase_1769336002791.png"
                }
            ]
        },
        ctaSection: {
            title1: "Mulai Langkah",
            title2: "Digital Bisnis Anda",
            title3: "Hari Ini",
            desc: "Bingung mulai dari mana? Jangan khawatir, tim kami akan membimbing Anda memilih teknologi yang paling tepat dan efisien untuk budget bisnis baru Anda.",
            whatsapp: "Diskusi Strategi Digital"
        },
        footer: {
            tagline: "Partner pengembangan digital yang berfokus membantu bisnis rintisan (startup) dan UMKM tumbuh melalui teknologi.",
            links: "Navigasi",
            contact: "Hubungi Kami",
            rights: "Hak Cipta Dilindungi."
        },
        contactPage: {
            title1: "Mulai Diskusi",
            title2: "Projek Anda",
            desc: "Kami siap mendengar ide Anda. Jelaskan kebutuhan digital bisnis Anda, dan tim ahli kami akan memberikan solusi teknologi terbaik.",
            form: {
                name: "Nama Lengkap",
                email: "Alamat Email",
                service: "Layanan yang Dibutuhkan",
                message: "Ceritakan Projek Anda",
                placeholder: "Contoh: Saya ingin membangun sistem inventaris toko...",
                submit: "Kirim Pesan"
            },
            info: {
                title: "Informasi Kontak",
                whatsapp: "Chat WhatsApp",
                email: "Email Kami",
                address: "Alokasi"
            }
        }
    },
    en: {
        nav: {
            services: "Services",
            portfolio: "Work",
            about: "About",
            cta: "Consult"
        },
        hero: {
            badge: "Growing and Stepping with You",
            title1: "Build a Digital Foundation",
            title2: "For Your Business",
            desc: "Implement strategic digital solutions to optimize the potential of your business and institution. We provide efficient technological infrastructure, from professional profile development to school information systems and custom business applications ready to accommodate your needs.",
            services: [
                { name: "Website & Landing Pages", icon: "Globe" },
                { name: "Retail Management Systems", icon: "ShoppingBag" },
                { name: "School Information Systems", icon: "GraduationCap" },
                { name: "Custom App Development", icon: "Cpu" }
            ],
            ctaPrimary: "Free Consultation",
            ctaSecondary: "Ready-Made Products",
            techStack: "Scalable Technology",
            seo: "SEO Ready",
            mobile: "Mobile Access"
        },
        services: {
            subtitle: "Strategic Technology Solutions",
            desc: "We provide a digital ecosystem specifically designed to improve operational efficiency and expand the market reach of your business and institution.",
            items: [
                {
                    title: "Website & Landing Pages",
                    description: "Professional digital representation focusing on conversion, high performance, and search engine optimization (SEO) for maximum credibility."
                },
                {
                    title: "Retail Management Systems",
                    description: "Integrated Point of Sale (POS) and inventory solutions to monitor transactions, stock, and financial reports in real-time from any device."
                },
                {
                    title: "School Information Systems",
                    description: "Digitalization of educational administration for efficient management of student data, curriculum, attendance, and learning achievement reports."
                },
                {
                    title: "Custom App Development",
                    description: "Transform your unique system ideas into scalable, secure software solutions precisely tailored to your organization's workflow."
                }
            ]
        },
        products: {
            title: "Catalog",
            desc: "Choose from our ready-made apps so you can focus on selling and managing your growth.",
            items: [
                {
                    name: "Smart Retail (POS)",
                    price: "Starting 1.8M+",
                    desc: "Perfect for retail or SMEs. Manage transactions, print receipts, and track profits easily."
                },
                {
                    name: "Modern Company Profile",
                    price: "Starting 1.2M+",
                    desc: "Boost client trust with an elegant and SEO-friendly business website."
                },
                {
                    name: "Online Booking System",
                    price: "Starting 2.5M+",
                    desc: "Ideal for barbershops, clinics, or service-based businesses needing organized scheduling."
                },
                {
                    name: "Online Exam (CBT)",
                    price: "Starting 1.5M+",
                    desc: "Practical & anti-cheat online exam system. Perfect for daily tests or semester exams."
                }
            ],
            customCTA: "Want to build a unique system for your new business idea?",
            customBtn: "Start Project Discussion"
        },
        portfolio: {
            title: "Startup & SME Partners",
            desc: "See how we help businesses transition from manual processes to integrated digital systems.",
            all: "See All Success Stories",
            items: [
                {
                    title: "Smart POS System",
                    category: "Retail Management",
                    client: "Nian Komputer",
                    image: "/pos_system_mockup_1769335969501.png"
                },
                {
                    title: "Academic Portal",
                    category: "Education Tech",
                    client: "LPT Nurul Ilmi",
                    image: "/school_system_dashboard_1769335986514.png"
                },
                {
                    title: "Premium Corporate Website",
                    category: "Web Development",
                    client: "TechScale Solutions",
                    image: "/corporate_website_showcase_1769336002791.png"
                }
            ]
        },
        ctaSection: {
            title1: "Start Your",
            title2: "Digital Journey",
            title3: "Today",
            desc: "Not sure where to begin? Don't worry, our team will guide you in choosing the most efficient technology for your startup budget.",
            whatsapp: "Start Growing Now"
        },
        footer: {
            tagline: "Digital development partner focused on helping startups and SMEs grow through technology.",
            links: "Navigation",
            contact: "Get in Touch",
            rights: "All Rights Reserved."
        },
        contactPage: {
            title1: "Start Your",
            title2: "Project Discussion",
            desc: "We are ready to hear your ideas. Explain your digital business needs, and our experts will provide the best technological solution.",
            form: {
                name: "Full Name",
                email: "Email Address",
                service: "Interested Service",
                message: "Tell Us About Your Project",
                placeholder: "Example: I want to build a retail inventory system...",
                submit: "Send Message"
            },
            info: {
                title: "Contact Info",
                whatsapp: "Chat on WhatsApp",
                email: "Send us an Email",
                address: "Location"
            }
        }
    }
};
