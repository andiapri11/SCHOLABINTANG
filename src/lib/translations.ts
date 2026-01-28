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
            badge: "Layanan Utama",
            subtitle: "Solusi Teknologi Strategis",
            desc: "Kami menghadirkan ekosistem digital yang dirancang khusus untuk meningkatkan efisiensi operasional dan memperluas jangkauan pasar bisnis Anda.",
            items: [
                {
                    title: "Website & Landing Page",
                    description: "Hadirkan wajah digital bisnis Anda dengan website yang cepat, rapi, dan dirancang khusus untuk menarik calon pelanggan."
                },
                {
                    title: "Aplikasi Kasir & Retail",
                    description: "Pantau stok, penjualan, dan laporan keuangan dari mana saja secara real-time untuk kemudahan kontrol bisnis Anda."
                },
                {
                    title: "Sistem Sekolah Digital",
                    description: "Modernisasi administrasi pendidikan mulai dari data siswa hingga laporan nilai dalam satu sistem yang terpusat."
                },
                {
                    title: "Aplikasi Custom (Kustom)",
                    description: "Wujudkan sistem atau aplikasi khusus yang dirancang mengikuti alur kerja tim Anda tanpa batasan fitur."
                }
            ]
        },
        products: {
            title: "Solusi Digital Kami",
            readyTitle: "Produk Unggulan",
            readyDesc: "Aplikasi siap pakai yang dirancang khusus untuk mempercepat pertumbuhan bisnis dan institusi Anda.",
            readyItems: [
                {
                    name: "VORA (Multi-branch POS)",
                    price: "1.49jt-an",
                    originalPrice: "2.5jt",
                    discount: "40%",
                    desc: "Solusi kasir dan accounting multiguna yang pas untuk semua jenis usaha. Kelola banyak cabang jadi lebih simpel dengan fitur yang bisa kami sesuaikan total buat Anda.",
                    isPromo: true,
                    features: [
                        "Fitur Custom Sesuai Jenis Usaha",
                        "Manajemen Multi-Cabang/Outlet",
                        "Sistem Kasir & Accounting Terpadu",
                        "Inventori Stok Real-time",
                        "Laporan Keuangan Otomatis"
                    ]
                },
                {
                    name: "Schola CBT (Exam App)",
                    price: "350rb-an",
                    originalPrice: "1.2jt",
                    discount: "70%",
                    desc: "Platform ujian digital serbaguna yang aman dari kecurangan. Cocok untuk sekolah, lembaga kursus, hingga seleksi karyawan dengan performa yang tetap stabil meski ribuan peserta masuk bersamaan.",
                    isPromo: true,
                    features: [
                        "Bank Soal & Acak Urutan",
                        "Gratis Apps Pengaman Ujian",
                        "Koreksi Otomatis Real-time",
                        "Analisis Hasil & Butir Soal",
                        "Support Skala Ribuan Peserta"
                    ]
                },
                {
                    name: "Schola Portal",
                    price: "950rb-an",
                    originalPrice: "1.5jt",
                    discount: "35%",
                    desc: "Modernisasi manajemen sekolah Anda dalam satu platform. Mulai dari administrasi siswa, data guru, hingga rekap laporan nilai, semuanya jadi lebih rapi dan otomatis.",
                    isPromo: true,
                    features: [
                        "Data Umum & Kependidikan",
                        "Manajemen Pembelajaran",
                        "Manajemen Sekolah & Akademik",
                        "Manajemen Keuangan & SPP",
                        "Backup Database & User Management"
                    ]
                }
            ],
            customTitle: "Layanan Kustom",
            customDesc: "Transformasikan ide unik Anda menjadi solusi perangkat lunak yang skalabel dan tepat sasaran.",
            customItems: [
                {
                    name: "Mobile App Development",
                    price: "Mulai dari 1.5jt-an",
                    originalPrice: "5jt",
                    discount: "30%",
                    desc: "Permudah akses bagi pelanggan Anda melalui aplikasi Android dan iOS yang lancar, stabil, dan mudah digunakan kapan saja.",
                    isPromo: false,
                    features: [
                        "Dukungan Android & iOS",
                        "Performa Lancar & Stabil",
                        "Desain Antarmuka Modern",
                        "Integrasi Notifikasi Real-time",
                        "Bantuan Publish ke App Store & Playstore"
                    ]
                },
                {
                    name: "Web Company Profile",
                    price: "Mulai dari 500rb-an",
                    originalPrice: "1.8jt",
                    discount: "50%",
                    desc: "Tingkatkan rasa percaya pelanggan dengan website profil yang rapi, cepat, dan mencerminkan identitas bisnis profesional Anda.",
                    isPromo: true,
                    features: [
                        "Desain Modern & Profesional",
                        "Mobile Friendly (Responsive)",
                        "Optimasi SEO Google",
                        "Gratis Hosting & Domain .com",
                        "Email Bisnis & Keamanan SSL"
                    ]
                },
                {
                    name: "Custom System Development",
                    price: "Mulai dari 900rb-an",
                    originalPrice: "3.5jt",
                    discount: "Variatif",
                    desc: "Wujudkan sistem yang dirancang khusus mengikuti alur kerja tim Anda agar operasional lebih tertata dan efektif.",
                    isPromo: false,
                    features: [
                        "Alur Kerja (Workflow) Kustom",
                        "Akses Mobile & Multi-Perangkat",
                        "Source Code Jadi Milik Anda",
                        "Sistem Skalabel & Aman",
                        "Dukungan Maintenance Teknis"
                    ]
                }
            ],
            customCTA: "Punya ide aplikasi unik untuk usaha atau sekolah Anda?",
            customBtn: "Mulai Diskusi Projek"
        },
        portfolio: {
            badge: "Kisah Sukses",
            title: "Tumbuh Bersama Mitra Kami",
            desc: "Lihat hasil nyata kolaborasi kami dalam membantu berbagai lini bisnis bertransformasi ke ekosistem digital.",
            all: "Lihat Semua Projek",
            items: [
                {
                    title: "Sistem Kasir Multi-Cabang",
                    category: "Retail & POS",
                    client: "Nian Komputer",
                    image: "/pos_system_mockup_1769335969501.png"
                },
                {
                    title: "Portal Pembelajaran Terpadu",
                    category: "EdTech Solution",
                    client: "LPT Nurul Ilmi",
                    image: "/school_system_dashboard_1769335986514.png"
                },
                {
                    title: "Website Company Profile",
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
                whatsapp: "Nomor WhatsApp",
                service: "Layanan yang Dibutuhkan",
                message: "Ceritakan Projek Anda",
                placeholder: "Contoh: Saya ingin membangun sistem inventaris toko...",
                submit: "Kirim Pesan"
            },
            info: {
                title: "Informasi Kontak",
                whatsapp: "Chat WhatsApp",
                email: "Email Kami",
                address: "Lokasi"
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
            badge: "Primary Services",
            subtitle: "Strategic Technology Solutions",
            desc: "We provide a digital ecosystem specifically designed to improve operational efficiency and expand your business market reach.",
            items: [
                {
                    title: "Website & Landing Pages",
                    description: "Present your business digitally with a fast, clean website designed specifically to attract potential customers."
                },
                {
                    title: "POS & Retail Solutions",
                    description: "Monitor stock, sales, and financial reports from anywhere in real-time for easier business control."
                },
                {
                    title: "Digital School Systems",
                    description: "Modernize educational administration from student data to grade reports in one centralized system."
                },
                {
                    title: "Custom Applications",
                    description: "Create specialized systems or apps designed specifically to follow your team's unique workflow."
                }
            ]
        },
        products: {
            title: "Digital Solutions",
            readyTitle: "Our Products",
            readyDesc: "Ready-to-use applications specifically designed to accelerate the growth of your business and institution.",
            readyItems: [
                {
                    name: "VORA (Multi-branch POS)",
                    price: "Starting 1.49M+",
                    originalPrice: "2.5M",
                    discount: "40%",
                    desc: "A multi-purpose cashier and accounting solution for all types of business. Simplify multi-branch management with features fully customizable for your needs.",
                    isPromo: true,
                    features: [
                        "Business-Specific Custom Features",
                        "Multi-Branch/Outlet Management",
                        "Unified Cashier & Accounting",
                        "Real-time Inventory",
                        "Automated Financial Reports"
                    ]
                },
                {
                    name: "Schola CBT (Exam App)",
                    price: "Starting 350k+",
                    originalPrice: "1.2M",
                    discount: "70%",
                    desc: "A versatile digital exam platform secure from cheating. Suitable for schools, training centers, and recruitment tests with stable performance even with thousands of concurrent participants.",
                    isPromo: true,
                    features: [
                        "Question Bank & Shuffling",
                        "Free Exam Security Apps",
                        "Real-time Auto-grading",
                        "Result & Item Analysis",
                        "Support for Thousands of Users"
                    ]
                },
                {
                    name: "Schola Portal",
                    price: "Starting 950k+",
                    originalPrice: "1.5M",
                    discount: "35%",
                    desc: "Modernize your school management in one platform. From student administration and teacher data to grading reports, everything is organized and automated.",
                    isPromo: true,
                    features: [
                        "General & Educational Data",
                        "Learning Management System",
                        "School & Academic Management",
                        "Financial & Fee Management",
                        "Database Backup & User Management"
                    ]
                }
            ],
            customTitle: "Custom Services",
            customDesc: "Transform your unique ideas into scalable and effective software solutions.",
            customItems: [
                {
                    name: "Mobile App Development",
                    price: "Starting from 1.5M+",
                    originalPrice: "5M",
                    discount: "30%",
                    desc: "Make it easier for your customers to reach you through smooth, stable, and user-friendly Android and iOS apps.",
                    isPromo: false,
                    features: [
                        "Android & iOS Support",
                        "Smooth & Stable Performance",
                        "Modern Interface Design",
                        "Real-time Notification Setup",
                        "App Store & Playstore Publishing Help"
                    ]
                },
                {
                    name: "Web Company Profile",
                    price: "Starting from 500k+",
                    originalPrice: "1.8M",
                    discount: "50%",
                    desc: "Build customer trust with a clean, fast website that truly reflects your professional business identity.",
                    isPromo: true,
                    features: [
                        "Modern & Professional Design",
                        "Mobile Friendly (Responsive)",
                        "Google SEO Optimization",
                        "Free Hosting & .com Domain",
                        "Business Email & SSL Security"
                    ]
                },
                {
                    name: "Custom System Development",
                    price: "Starting from 900k+",
                    originalPrice: "3.5M",
                    discount: "Varies",
                    desc: "Create systems designed specifically to follow your team's workflow for more organized and effective operations.",
                    isPromo: false,
                    features: [
                        "Custom Workflow Design",
                        "Mobile & Multi-Device Access",
                        "Full Source Code Ownership",
                        "Scalable & Secure System",
                        "Technical Maintenance Support"
                    ]
                }
            ],
            customCTA: "Have a unique app idea for your business or school?",
            customBtn: "Start Project Discussion"
        },
        portfolio: {
            badge: "Success Stories",
            title: "Growing with Our Partners",
            desc: "Explore the real results of our collaboration in helping various business sectors transform into digital ecosystems.",
            all: "View All Projects",
            items: [
                {
                    title: "Multi-branch POS System",
                    category: "Retail & POS",
                    client: "Nian Komputer",
                    image: "/pos_system_mockup_1769335969501.png"
                },
                {
                    title: "Integrated Learning Portal",
                    category: "EdTech Solution",
                    client: "LPT Nurul Ilmi",
                    image: "/school_system_dashboard_1769335986514.png"
                },
                {
                    title: "Company Profile Website",
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
                whatsapp: "WhatsApp Number",
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
