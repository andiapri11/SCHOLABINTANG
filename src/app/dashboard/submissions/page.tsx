"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSubmissions } from "@/app/actions/fetch";
import { getTrafficStats } from "@/app/actions/traffic";
import { fetchSettings, saveSettingsAction } from "@/app/actions/contact";
import {
    Users,
    Mail,
    LogOut,
    Search,
    RefreshCw,
    Clock,
    User,
    ExternalLink,
    Filter,
    Zap,
    TrendingUp,
    MoreVertical,
    CheckCircle,
    Bell,
    ChevronRight,
    Settings,
    Grid,
    List,
    Smartphone,
    Monitor,
    BarChart3,
    MousePointer2,
    Eye,
    MessageCircle,
    Building2,
    AlertTriangle,
    Trash2,
    Globe,
    Lock,
    Shield,
    Check,
    Phone,
    MessageSquare,
    ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Submission {
    id: string | number;
    name: string;
    email?: string;
    service: string; // Will store "Demo" or School Name
    message: string;
    createdAt: string;
    phone?: string;
    school?: string;
    position?: string;
    type?: "contact" | "demo";
}

export default function SubmissionsDashboard() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterService, setFilterService] = useState("All");
    const [repliedIds, setRepliedIds] = useState<string[]>([]);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [activeTab, setActiveTab] = useState<"submissions" | "analytics" | "settings">("submissions");
    const [trafficStats, setTrafficStats] = useState<any>({
        totalSessions: 0,
        uniqueUsers: 0,
        avgDuration: "00:00",
        history: [],
        topReferrals: [
            { source: 'Google Search', count: 142, growth: '+12%' },
            { source: 'Direct Link', count: 85, growth: '+5%' },
            { source: 'Social Media', count: 64, growth: '+24%' }
        ],
        topPages: [
            { path: '/home', views: 342, rate: '85%' },
            { path: '/projects', views: 128, rate: '64%' },
            { path: '/contact', views: 82, rate: '42%' }
        ]
    });
    const [deletedIds, setDeletedIds] = useState<string[]>([]);
    const [itemToDelete, setItemToDelete] = useState<string | number | null>(null);
    const [filterType, setFilterType] = useState<"All" | "contact" | "demo">("All");
    const [showToast, setShowToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
    const [showNotifications, setShowNotifications] = useState(false);
    const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });
    const [siteSettings, setSiteSettings] = useState({ whatsapp: "628218144726" });
    const router = useRouter();

    useEffect(() => {
        const storedReplied = localStorage.getItem("replied_submission_ids");
        if (storedReplied) setRepliedIds(JSON.parse(storedReplied));

        const storedDeleted = localStorage.getItem("deleted_submission_ids");
        if (storedDeleted) setDeletedIds(JSON.parse(storedDeleted));
    }, []);

    const toggleReplied = (id: string | number) => {
        const strId = String(id);
        let newIds = [];
        if (repliedIds.includes(strId)) newIds = repliedIds.filter(i => i !== strId);
        else newIds = [...repliedIds, strId];
        setRepliedIds(newIds);
        localStorage.setItem("replied_submission_ids", JSON.stringify(newIds));
    };

    const handleDelete = (id: string | number) => {
        setItemToDelete(id);
    };

    const confirmDelete = () => {
        if (!itemToDelete) return;
        const strId = String(itemToDelete);
        const newIds = [...deletedIds, strId];
        setDeletedIds(newIds);
        localStorage.setItem("deleted_submission_ids", JSON.stringify(newIds));

        // UI Refresh for stability
        if (strId.startsWith('demo-')) {
            window.location.reload();
        }

        setItemToDelete(null);
    };

    const handleUpdatePassword = () => {
        const storedPassword = localStorage.getItem("admin_password") || "andiapri123";

        if (!passwords.current || !passwords.new || !passwords.confirm) {
            setShowToast({ message: "Semua kolom password harus diisi.", type: 'error' });
            setTimeout(() => setShowToast(null), 3000);
            return;
        }

        if (passwords.current !== storedPassword) {
            setShowToast({ message: "Kata sandi saat ini tidak valid.", type: 'error' });
            setTimeout(() => setShowToast(null), 3000);
            return;
        }

        if (passwords.new.length < 8) {
            setShowToast({ message: "Kata sandi baru minimal 8 karakter.", type: 'error' });
            setTimeout(() => setShowToast(null), 3000);
            return;
        }

        if (passwords.new !== passwords.confirm) {
            setShowToast({ message: "Konfirmasi kata sandi tidak cocok.", type: 'error' });
            setTimeout(() => setShowToast(null), 3000);
            return;
        }

        localStorage.setItem("admin_password", passwords.new);
        setShowToast({ message: "Kata sandi berhasil diperbarui!", type: 'success' });
        setPasswords({ current: "", new: "", confirm: "" });
        setTimeout(() => setShowToast(null), 3000);
    };

    const handleUpdateProfile = () => {
        setShowToast({ message: "Profil berhasil diperbarui!", type: 'success' });
        setTimeout(() => setShowToast(null), 3000);
    };

    const getWaLink = (phone: string | undefined, name: string = "Bapak/Ibu") => {
        if (!phone) return "#";
        // Clean non-digit characters
        let cleaned = phone.replace(/\D/g, "");

        // Handle common Indonesian number formats
        if (cleaned.startsWith("0")) {
            cleaned = "62" + cleaned.substring(1);
        } else if (cleaned.startsWith("8")) {
            cleaned = "62" + cleaned;
        }

        // Defensive: if somehow it becomes 620..., remove the 0 after 62
        if (cleaned.startsWith("620")) {
            cleaned = "62" + cleaned.substring(3);
        }

        const message = `Halo ${name}, kami dari tim Schola ingin menindaklanjuti permintaan demo Anda. Kapan waktu yang tepat untuk kita berdiskusi lebih lanjut?`;
        return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
    };
    const fetchItems = async () => {
        setLoading(true);
        try {
            // Fetch existing Contact Form submissions
            const serverSubsRaw = await getSubmissions();
            const serverSubs = serverSubsRaw.map((s: any) => ({
                ...s,
                phone: s.whatsapp || s.phone, // Map whatsapp to phone
                type: s.type || 'contact'
            }));

            // Fetch Local Demo Requests
            const demoSubs = JSON.parse(localStorage.getItem("demo_submissions") || "[]");

            // Map local submissions
            const demoItems = demoSubs.map((s: any) => ({
                id: `demo-${s.date}`,
                name: s.name,
                school: s.school,
                phone: s.whatsapp,
                position: s.jabatan,
                message: `${s.jabatan ? s.jabatan + ' at ' : ''}${s.school} requested a demo.`,
                type: "demo",
                date: s.date,
                createdAt: s.date,
                service: s.product ? `Demo: ${s.product}` : "Demo Request"
            }));

            const allItems = [...serverSubs, ...demoItems].sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );

            setSubmissions(allItems);
            const tStats = await getTrafficStats();
            setTrafficStats(tStats);

            const settings = await fetchSettings();
            setSiteSettings(settings);
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveSiteSettings = async () => {
        const result = await saveSettingsAction(siteSettings);
        if (result.success) {
            setShowToast({ message: "Pengaturan berhasil diperbarui!", type: 'success' });
            setTimeout(() => setShowToast(null), 3000);
        } else {
            setShowToast({ message: result.error || "Gagal menyimpan pengaturan.", type: 'error' });
            setTimeout(() => setShowToast(null), 3000);
        }
    };

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin");
        if (!isAdmin) {
            router.push("/codifi-access-panel");
            return;
        }
        fetchItems();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        router.push("/codifi-access-panel");
    };

    const uniqueServices = ["All", ...new Set(submissions.map((s: Submission) => s.service))];

    const filteredSubmissions = submissions.filter((s: Submission) => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (s.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (s.school || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (s.position || "").toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterService === "All" || s.service === filterService;
        const matchesType = filterType === "All" || s.type === filterType;
        return matchesSearch && matchesFilter && matchesType;
    });

    const activeSubmissions = filteredSubmissions.filter((s: Submission) => !deletedIds.includes(String(s.id)));

    const nonDeletedSubmissions = submissions.filter((s: Submission) => !deletedIds.includes(String(s.id)));

    const stats = {
        total: nonDeletedSubmissions.length,
        today: nonDeletedSubmissions.filter((s: Submission) => s.createdAt && new Date(s.createdAt).toDateString() === new Date().toDateString()).length,
        potential: Math.floor(nonDeletedSubmissions.length * 12.5)
    };

    const pendingLeads = activeSubmissions.filter(s => !repliedIds.includes(String(s.id)));
    const pendingCount = pendingLeads.length;
    const latestNotifications = pendingLeads.slice(0, 5);

    if (loading && submissions.length === 0) {
        return (
            <div className="loader-container">
                <div className="loader-ring"></div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="loader-text"
                >
                    Menyiapkan Workspace...
                </motion.div>
                <style jsx>{`
                    .loader-container {
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background: #0f172a;
                        gap: 2rem;
                    }
                    .loader-ring {
                        width: 60px;
                        height: 60px;
                        border: 3px solid rgba(255, 255, 255, 0.1);
                        border-top-color: #3b82f6;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    }
                    .loader-text { color: #94a3b8; font-weight: 500; letter-spacing: 0.05em; }
                    @keyframes spin { to { transform: rotate(360deg); } }
                `}</style>
            </div>
        );
    }

    return (
        <div className="dashboard-wrapper">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-box">
                        <img src="/images/logo-new.png" alt="Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>
                    <div className="logo-text">
                        <h3 style={{ fontSize: '1.4rem' }}>Codifi</h3>
                        <span style={{ fontSize: '0.6rem', opacity: 0.8 }}>Cipta Inovasi Digital</span>
                    </div>
                </div>

                <div className="nav-menu">
                    <p className="nav-section">Dashboard</p>
                    <button
                        className={`nav-link ${activeTab === 'submissions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('submissions')}
                    >
                        <Users size={20} />
                        <span>Submissions</span>
                        {activeTab === 'submissions' && <div className="active-dot"></div>}
                    </button>
                    <button
                        className={`nav-link ${activeTab === 'analytics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        <BarChart3 size={20} />
                        <span>Visitor Traffic</span>
                        {activeTab === 'analytics' && <div className="active-dot"></div>}
                    </button>

                    <p className="nav-section">Manajemen</p>
                    <button className="nav-link">
                        <Monitor size={20} />
                        <span>Konten Situs</span>
                    </button>
                    <button className="nav-link">
                        <Smartphone size={20} />
                        <span>Katalog Produk</span>
                    </button>

                    <p className="nav-section">Sistem</p>
                    <button
                        className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <Settings size={20} />
                        <span>Pengaturan</span>
                        {activeTab === 'settings' && <div className="active-dot"></div>}
                    </button>
                </div>

                <div className="sidebar-footer-v2">
                    <div className="profile-card-minimal">
                        <div className="p-avatar-circle">
                            <span>AA</span>
                            <div className="status-dot-online"></div>
                        </div>
                        <div className="p-info">
                            <p className="p-name">Andi Apri</p>
                            <p className="p-status">Administrator</p>
                        </div>
                        <button onClick={handleLogout} className="p-logout-icon" title="Sign Out">
                            <LogOut size={16} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Page Area */}
            <main className="main-content">
                {/* Header Bar */}
                <header className="page-header">
                    <div className="header-left">
                        <div className="breadcrumb">
                            <span>Overview</span>
                            <ChevronRight size={14} />
                            <span className="current">
                                {activeTab === 'submissions' ? 'Submissions' : activeTab === 'analytics' ? 'Analytics' : 'Settings'}
                            </span>
                        </div>
                        <h1 className="header-title">
                            {activeTab === 'submissions' ? 'Lead Management' : activeTab === 'analytics' ? 'Visitor Analytics' : 'Admin Settings'}
                        </h1>
                    </div>

                    <div className="header-right">
                        <div className="profile-compact">
                            <div className="profile-text">
                                <span className="p-name">Codifi Admin</span>
                                <span className="p-role">System Director</span>
                            </div>
                            <div className="p-avatar">
                                <User size={18} />
                            </div>
                        </div>

                        <button
                            className={`notification-btn ${showNotifications ? 'active' : ''}`}
                            onClick={() => setShowNotifications(true)}
                        >
                            <Bell size={20} />
                            {pendingCount > 0 && (
                                <span className="notification-badge">{pendingCount > 9 ? '9+' : pendingCount}</span>
                            )}
                        </button>
                    </div>
                </header>

                {activeTab === 'submissions' && (
                    <>
                        {/* Dashboard Stats */}
                        {/* Dashboard Stats */}
                        <div className="stats-section">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="stat-card primary"
                            >
                                <div className="stat-card-header">
                                    <span className="stat-label">TOTAL LEADS</span>
                                    <div className="stat-icon-wrapper">
                                        <Users size={20} />
                                    </div>
                                </div>
                                <div className="stat-card-body">
                                    <div className="stat-value">{stats.total}</div>
                                    <div className="stat-info-line">
                                        <Zap size={14} />
                                        <span>Aktif & Sinkron</span>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="stat-card"
                            >
                                <div className="stat-card-header">
                                    <span className="stat-label dark">TOTAL VISITORS</span>
                                    <div className="stat-icon-wrapper blue">
                                        <Eye size={20} />
                                    </div>
                                </div>
                                <div className="stat-card-body">
                                    <div className="stat-value dark">{trafficStats?.totalSessions || 0}</div>
                                    <div className="stat-info-line dark">
                                        Lifetime website visitors
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="stat-card"
                            >
                                <div className="stat-card-header">
                                    <span className="stat-label dark">VISITS TODAY</span>
                                    <div className="stat-icon-wrapper green">
                                        <TrendingUp size={20} />
                                    </div>
                                </div>
                                <div className="stat-card-body">
                                    <div className="stat-value dark">{trafficStats?.sessionsToday || 0}</div>
                                    <div className="stat-info-line dark">
                                        Active sessions in last 24h
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Content Toolbar */}
                        <div className="content-toolbar">
                            <div className="toolbar-left">
                                <div className="search-wrapper">
                                    <Search size={18} className="search-icon" />
                                    <input
                                        type="text"
                                        placeholder="Cari nama, sekolah, atau pesan..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="filter-group">
                                    <div className="custom-select-wrapper">
                                        <Filter size={14} className="select-icon" />
                                        <select
                                            className="search-select"
                                            value={filterService}
                                            onChange={(e) => setFilterService(e.target.value)}
                                        >
                                            {uniqueServices.map(s => <option key={s} value={s}>{s === "All" ? "Layanan: Semua" : s}</option>)}
                                        </select>
                                    </div>
                                    <div className="type-toggle">
                                        <button
                                            className={filterType === 'All' ? 'active' : ''}
                                            onClick={() => setFilterType('All')}
                                        >Semua</button>
                                        <button
                                            className={filterType === 'contact' ? 'active' : ''}
                                            onClick={() => setFilterType('contact')}
                                        >Kontak</button>
                                        <button
                                            className={filterType === 'demo' ? 'active' : ''}
                                            onClick={() => setFilterType('demo')}
                                        >Demo</button>
                                    </div>
                                </div>
                            </div>

                            <div className="toolbar-right">
                                <button
                                    onClick={async () => {
                                        await fetchItems();
                                        setShowToast({ message: "Data berhasil disinkronkan!", type: 'success' });
                                        setTimeout(() => setShowToast(null), 3000);
                                    }}
                                    className="refresh-btn"
                                >
                                    <RefreshCw size={18} className={loading ? 'spinning' : ''} />
                                    <span>Sync</span>
                                </button>
                            </div>
                        </div>

                        {/* Submissions Display */}
                        <div className="submissions-table-wrapper">
                            <table className="modern-table">
                                <thead>
                                    <tr>
                                        <th>Kontak</th>
                                        <th>Layanan / Posisi</th>
                                        <th style={{ width: '30%' }}>Pesan</th>
                                        <th>Tanggal</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: 'right' }}>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeSubmissions.length > 0 ? (
                                        activeSubmissions.map((item, idx) => (
                                            <tr key={item.id} className={idx % 2 === 0 ? 'row-even' : 'row-odd'}>
                                                <td>
                                                    <div className="user-cell-premium">
                                                        <div className="user-avatar-circle-table">
                                                            <span>{item.name.charAt(0).toUpperCase()}</span>
                                                        </div>
                                                        <div className="user-info-stack">
                                                            <div className="user-name">{item.name}</div>
                                                            <div className="user-meta-group">
                                                                {item.email && item.email !== '-' && (
                                                                    <div className="u-meta">
                                                                        <Mail size={12} />
                                                                        <span>{item.email}</span>
                                                                    </div>
                                                                )}
                                                                {item.phone && (
                                                                    <div className="u-meta">
                                                                        <Phone size={12} />
                                                                        <span>{item.phone}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="service-info">
                                                        <span className="service-badge-v2">
                                                            {item.service}
                                                        </span>
                                                        {(item.school || item.position) && (
                                                            <div className="meta-info">
                                                                {item.school && (
                                                                    <div className="meta-item">
                                                                        <Building2 size={13} />
                                                                        <span>{item.school}</span>
                                                                    </div>
                                                                )}
                                                                {item.position && (
                                                                    <div className="meta-item gray">
                                                                        <Users size={13} />
                                                                        <span>{item.position}</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="message-cell-premium">
                                                        <MessageSquare size={14} className="m-icon" />
                                                        <p className="message-text">
                                                            {item.message}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="date-badge">
                                                        <Clock size={12} />
                                                        <span>
                                                            {item.createdAt ? new Date(item.createdAt).toLocaleDateString('id-ID', {
                                                                day: 'numeric',
                                                                month: 'short',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            }) : '-'}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`status-pill ${item.type?.toLowerCase() === 'kontak' ? 'blue' : 'orange'}`}>
                                                        {item.type || 'Kontak'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="table-actions">
                                                        {item.phone && (
                                                            <a
                                                                href={getWaLink(item.phone)}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                title="Chat WhatsApp"
                                                                className="action-link wa"
                                                            >
                                                                <MessageCircle size={16} />
                                                            </a>
                                                        )}
                                                        {item.email && item.email !== '-' && (
                                                            <a href={`mailto:${item.email}`} title="Kirim Email" className="action-link mail">
                                                                <Mail size={16} />
                                                            </a>
                                                        )}
                                                        <button
                                                            onClick={() => toggleReplied(item.id)}
                                                            title={repliedIds.includes(String(item.id)) ? "Tandai Belum Selesai" : "Tandai Selesai"}
                                                            className={`action-btn ${repliedIds.includes(String(item.id)) ? 'completed' : ''}`}
                                                        >
                                                            <CheckCircle size={16} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(item.id)}
                                                            title="Hapus"
                                                            className="action-btn delete"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="empty-table-row">
                                                <div className="empty-table-content">
                                                    <Users size={40} style={{ opacity: 0.1 }} />
                                                    <p>Tidak ada data yang ditemukan.</p>
                                                    <button className="reset-btn-link" onClick={() => { setSearchTerm(""); setFilterService("All"); }}>
                                                        Reset Filters
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {activeTab === 'analytics' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="analytics-view"
                    >
                        <div className="analytics-hero">
                            <div className="analytics-card main-chart-case">
                                <div className="card-header-flex">
                                    <div>
                                        <h3>Traffic & Growth</h3>
                                        <p>Real-time analytics for the last 30 days</p>
                                    </div>
                                    <div className="analytics-meta">
                                        <div className="meta-pill high">
                                            <Zap size={14} />
                                            <span>Peak: 124 visits/day</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="advanced-chart-box">
                                    <div className="y-axis-labels">
                                        <span>150</span>
                                        <span>100</span>
                                        <span>50</span>
                                        <span>0</span>
                                    </div>
                                    <div className="chart-core">
                                        <div className="grid-lines">
                                            <div className="line"></div>
                                            <div className="line"></div>
                                            <div className="line"></div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="chart-bars-v2">
                                            {trafficStats?.history?.length > 0 ? (
                                                trafficStats.history.map((day: any, i: number) => {
                                                    const maxVal = Math.max(...trafficStats.history.map((h: any) => h.sessions), 20);
                                                    const heightPct = (day.sessions / maxVal) * 100;
                                                    return (
                                                        <div key={day.date} className="bar-column">
                                                            <div className="bar-hover-zone" title={`${day.date}: ${day.sessions} visits`}>
                                                                <div
                                                                    className="bar-fill"
                                                                    style={{ height: `${Math.max(8, heightPct)}%` }}
                                                                >
                                                                    <div className="bar-glow"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            ) : (
                                                <div className="chart-empty-state">
                                                    <BarChart3 size={48} />
                                                    <p>Collecting data for analysis...</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="chart-labels-v2">
                                        <span>30 Days Ago</span>
                                        <span className="current-indicator">Today</span>
                                    </div>
                                </div>

                                <div className="secondary-stats-grid">
                                    <div className="sec-stat-box">
                                        <span className="sec-label">Top Referral</span>
                                        <div className="sec-value-group">
                                            <Globe size={16} />
                                            <span className="sec-value">Google Organic</span>
                                        </div>
                                    </div>
                                    <div className="sec-stat-box">
                                        <span className="sec-label">Bounce Rate</span>
                                        <div className="sec-value-group">
                                            <TrendingUp size={16} className="rotate-trend" />
                                            <span className="sec-value">24.5%</span>
                                        </div>
                                    </div>
                                    <div className="sec-stat-box">
                                        <span className="sec-label">Active Region</span>
                                        <div className="sec-value-group">
                                            <Monitor size={16} />
                                            <span className="sec-value">Indonesia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="analytics-sidebar-stats">
                                <div className="metric-card-premium">
                                    <div className="m-header">
                                        <Users size={20} />
                                        <span>Unique Visitors</span>
                                    </div>
                                    <div className="m-body">
                                        <span className="m-value">{(trafficStats?.totalSessions * 0.7).toFixed(0)}</span>
                                        <span className="m-growth up">+8.4%</span>
                                    </div>
                                    <div className="m-footer">Real persons tracked</div>
                                </div>

                                <div className="metric-card-premium">
                                    <div className="m-header">
                                        <MousePointer2 size={20} />
                                        <span>Interaction Rate</span>
                                    </div>
                                    <div className="m-body">
                                        <span className="m-value">12.5%</span>
                                        <span className="m-growth up">+1.2%</span>
                                    </div>
                                    <div className="m-footer">Avg clicks per session</div>
                                </div>

                                <div className="metric-card-premium dark">
                                    <div className="m-header">
                                        <Clock size={20} />
                                        <span>Avg. Duration</span>
                                    </div>
                                    <div className="m-body">
                                        <span className="m-value">{trafficStats?.avgDuration || "02:14"}</span>
                                    </div>
                                    <div className="m-footer">Time spent on site</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'settings' && (
                    /* Settings View */
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="settings-view"
                    >
                        <div className="settings-grid">
                            <div className="settings-main">
                                <div className="settings-card premium">
                                    <div className="card-header-icon">
                                        <User size={24} />
                                        <div>
                                            <h3>Profil Administrator</h3>
                                            <p>Kelola informasi akun Anda dan preferensi tampilan dashboard.</p>
                                        </div>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-group icon-input">
                                            <label>Nama Lengkap</label>
                                            <div className="input-wrapper">
                                                <User size={18} className="input-icon" />
                                                <input type="text" defaultValue="Codifi Administrator" placeholder="Masukkan nama lengkap" />
                                            </div>
                                        </div>
                                        <div className="form-group icon-input">
                                            <label>Alamat Email</label>
                                            <div className="input-wrapper">
                                                <Mail size={18} className="input-icon" />
                                                <input type="email" defaultValue="admin@codifi.id" placeholder="admin@example.com" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group icon-input">
                                                <label>Bahasa Default</label>
                                                <div className="input-wrapper">
                                                    <Globe size={18} className="input-icon" />
                                                    <select className="premium-select">
                                                        <option>(GMT+07:00) Jakarta</option>
                                                        <option>(GMT+08:00) Singapore</option>
                                                        <option>(GMT+00:00) London</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group icon-input">
                                                <label>Zona Waktu</label>
                                                <div className="input-wrapper">
                                                    <Clock size={18} className="input-icon" />
                                                    <select className="premium-select">
                                                        <option>(GMT+07:00) Jakarta</option>
                                                        <option>(GMT+08:00) Singapore</option>
                                                        <option>(GMT+00:00) London</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer-actions">
                                        <button
                                            className="primary-save-btn"
                                            onClick={handleUpdateProfile}
                                        >
                                            <Check size={18} />
                                            Simpan Profil
                                        </button>
                                    </div>
                                </div>

                                <div className="settings-card premium contact">
                                    <div className="card-header-icon">
                                        <MessageCircle size={24} />
                                        <div>
                                            <h3>Kontak & Chat</h3>
                                            <p>Atur nomor WhatsApp yang akan digunakan di seluruh landing page.</p>
                                        </div>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-group icon-input">
                                            <label>Nomor WhatsApp (Gunakan Kode Negara, contoh: 628xxx)</label>
                                            <div className="input-wrapper">
                                                <Phone size={18} className="input-icon" />
                                                <input
                                                    type="text"
                                                    value={siteSettings.whatsapp}
                                                    onChange={(e) => setSiteSettings({ ...siteSettings, whatsapp: e.target.value })}
                                                    placeholder="Contoh: 628218144726"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer-actions">
                                        <button
                                            className="primary-save-btn"
                                            onClick={handleSaveSiteSettings}
                                        >
                                            <Check size={18} />
                                            Simpan Nomor WA
                                        </button>
                                    </div>
                                </div>

                                <div className="settings-card premium security">
                                    <div className="card-header-icon red">
                                        <Lock size={24} />
                                        <div>
                                            <h3>Keamanan Akun</h3>
                                            <p>Pastikan kredensial Anda tetap aman dengan rotasi sandi berkala.</p>
                                        </div>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-group icon-input">
                                            <label>Kata Sandi Saat Ini</label>
                                            <div className="input-wrapper">
                                                <ShieldCheck size={20} className="input-icon" />
                                                <input
                                                    type="password"
                                                    placeholder="••••••••"
                                                    value={passwords.current}
                                                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group icon-input">
                                                <label>Kata Sandi Baru</label>
                                                <div className="input-wrapper">
                                                    <Lock size={20} className="input-icon" />
                                                    <input
                                                        type="password"
                                                        placeholder="Minimal 8 karakter"
                                                        value={passwords.new}
                                                        onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group icon-input">
                                                <label>Konfirmasi Sandi Baru</label>
                                                <div className="input-wrapper">
                                                    <Lock size={20} className="input-icon" />
                                                    <input
                                                        type="password"
                                                        placeholder="Ulangi sandi baru"
                                                        value={passwords.confirm}
                                                        onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer-actions">
                                        <button
                                            className="save-settings-btn premium"
                                            onClick={handleUpdatePassword}
                                        >
                                            Perbarui Kata Sandi
                                        </button>
                                    </div>
                                </div>

                            </div>

                            <div className="settings-sidebar">
                                <div className="settings-card info-card premium-sidebar">
                                    <div className="info-header">
                                        <div className="info-icon-box">
                                            <Zap size={22} />
                                        </div>
                                        <div>
                                            <h4>System Health</h4>
                                            <span className="live-dot">LIVE NOW</span>
                                        </div>
                                    </div>
                                    <div className="info-list-premium">
                                        <div className="info-row">
                                            <span className="label">Core Version</span>
                                            <span className="value">v2.4.0-stable</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="label">System Load</span>
                                            <span className="value success">Excellent</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="label">Database Status</span>
                                            <span className="status-pill-small">Connected</span>
                                        </div>
                                        <div className="info-row">
                                            <span className="label">Last Sync</span>
                                            <span className="value highlight">Just Now</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="settings-card preferences premium-sidebar">
                                    <h4>Global Notifications</h4>
                                    <p className="sidebar-hint">Kelola bagaimana Anda menerima pemberitahuan sistem.</p>
                                    <div className="premium-toggle-group">
                                        <div className="p-toggle-item">
                                            <div className="toggle-info">
                                                <span className="title">Email Alerts</span>
                                                <span className="desc">Kirim notifikasi ke email utama</span>
                                            </div>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                        <div className="p-toggle-item">
                                            <div className="toggle-info">
                                                <span className="title">Weekly Analytics</span>
                                                <span className="desc">Laporan performa mingguan</span>
                                            </div>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </main>

            {/* Delete Confirmation Modal */}
            <AnimatePresence>
                {itemToDelete && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(15, 23, 42, 0.6)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 10000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem'
                        }}
                        onClick={() => setItemToDelete(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'white',
                                padding: '2.5rem',
                                borderRadius: '2rem',
                                width: '100%',
                                maxWidth: '400px',
                                textAlign: 'center',
                                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: '#fef2f2',
                                borderRadius: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem',
                                color: '#ef4444'
                            }}>
                                <AlertTriangle size={36} />
                            </div>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                                Hapus Data?
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '2rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                Tindakan ini akan menyembunyikan data lead dari dashboard Anda secara permanen.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button
                                    onClick={() => setItemToDelete(null)}
                                    style={{
                                        flex: 1,
                                        padding: '1rem',
                                        background: '#f1f5f9',
                                        color: '#475569',
                                        border: 'none',
                                        borderRadius: '1rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    style={{
                                        flex: 1,
                                        padding: '1rem',
                                        background: '#ef4444',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '1rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    <Trash2 size={18} />
                                    <span>Hapus</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        style={{
                            position: 'fixed',
                            bottom: '2rem',
                            right: '2rem',
                            padding: '1rem 2rem',
                            borderRadius: '1rem',
                            background: showToast.type === 'success' ? '#0f172a' : '#ef4444',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
                            zIndex: 10000,
                            fontWeight: 600
                        }}
                    >
                        {showToast.type === 'success' ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
                        {showToast.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .dashboard-wrapper {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    height: 100vh;
                    background: #f1f5f9;
                    font-family: 'Outfit', 'Inter', sans-serif;
                    overflow: hidden;
                }

                .sidebar {
                    background: #0f172a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    padding: 0;
                    z-index: 100;
                    border-right: 1px solid rgba(255, 255, 255, 0.05);
                    overflow: hidden;
                }

                .sidebar-header {
                    padding: 2.5rem 1.5rem 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .logo-box {
                    width: 42px;
                    height: 42px;
                    background: white;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 6px;
                    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                }

                .logo-text h3 { margin: 0; font-size: 1.4rem; font-weight: 900; letter-spacing: -0.01em; color: white; line-height: 1; }
                .logo-text span { font-size: 0.6rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-top: 4px; }

                .nav-menu { 
                    flex: 1; 
                    display: flex; 
                    flex-direction: column; 
                    gap: 0.25rem; 
                    padding: 1rem 1.25rem;
                    overflow-y: auto;
                    scrollbar-width: none; /* Firefox */
                }
                .nav-menu::-webkit-scrollbar { display: none; /* Chrome/Safari */ }

                .nav-section { 
                    font-size: 0.72rem; 
                    text-transform: uppercase; 
                    letter-spacing: 0.15em; 
                    color: #475569; 
                    font-weight: 900;
                    margin: 2rem 0 0.75rem 0.75rem;
                }

                .nav-link {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.85rem 1rem;
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    border-radius: 14px;
                    cursor: pointer;
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                    font-weight: 700;
                    font-size: 0.88rem;
                    position: relative;
                }

                .nav-link:hover { 
                    background: rgba(255, 255, 255, 0.03); 
                    color: white; 
                    transform: translateX(4px);
                }
                
                .nav-link.active { 
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); 
                    color: white; 
                    box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.4); 
                }
                
                .active-dot {
                    position: absolute;
                    right: 1rem;
                    width: 6px;
                    height: 6px;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 0 8px rgba(255,255,255,0.8);
                }

                .sidebar-footer-v2 {
                    padding: 1.5rem;
                    background: rgba(15, 23, 42, 0.5);
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .profile-card-minimal {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    background: #1e293b;
                    padding: 0.75rem;
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    position: relative;
                }

                .p-avatar-circle {
                    width: 40px;
                    height: 40px;
                    background: #3b82f6;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 900;
                    font-size: 0.9rem;
                    color: white;
                    position: relative;
                }

                .status-dot-online {
                    position: absolute;
                    bottom: -2px;
                    right: -2px;
                    width: 10px;
                    height: 10px;
                    background: #22c55e;
                    border: 2px solid #1e293b;
                    border-radius: 50%;
                }

                .p-info { flex: 1; min-width: 0; }
                .p-name { font-size: 0.88rem; font-weight: 800; color: white; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .p-status { font-size: 0.7rem; color: #64748b; font-weight: 600; margin: 0; }

                .p-logout-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    border: none;
                    background: rgba(244, 63, 94, 0.1);
                    color: #fb7185;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .p-logout-icon:hover {
                    background: #f43f5e;
                    color: white;
                    transform: rotate(-15deg) scale(1.1);
                }
                .logout-btn:hover { background: #f43f5e; color: white; transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(244, 63, 94, 0.2); }

                .main-content {
                    padding: 2.5rem 3.5rem;
                    overflow-y: auto;
                    background: #f8fafc;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 3rem;
                }

                .header-left .breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: #94a3b8;
                    font-size: 0.78rem;
                    font-weight: 600;
                    margin-bottom: 0.35rem;
                }

                .header-left .breadcrumb .current { color: #3b82f6; }
                .header-title { font-size: 1.85rem; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.015em; }

                .header-right { display: flex; align-items: center; gap: 1.5rem; }
                .notification-btn {
                    width: 44px;
                    height: 44px;
                    border-radius: 14px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #64748b;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                    transition: all 0.2s;
                }
                .notification-btn:hover, .notification-btn.active { background: #f1f5f9; color: #3b82f6; border-color: #3b82f6; }
                .notification-badge { 
                    position: absolute; 
                    top: -5px; 
                    right: -5px; 
                    background: #ef4444; 
                    color: white; 
                    font-size: 0.7rem; 
                    font-weight: 900; 
                    width: 20px; 
                    height: 20px; 
                    border-radius: 50%; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center;
                    border: 2px solid white;
                    box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.4);
                }

                /* Popup Modal Styles */
                .modal-root {
                    position: fixed;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    padding: 1.5rem;
                }

                .modal-backdrop {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(8px);
                }

                .notification-modal {
                    position: relative;
                    width: 100%;
                    max-width: 420px;
                    background: white;
                    border-radius: 32px;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
                    overflow: hidden;
                    z-index: 11;
                }

                .notif-header {
                    padding: 2rem;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .notif-header h3 { font-size: 1.25rem; font-weight: 900; color: #0f172a; margin: 0; }
                .notif-count { font-size: 0.8rem; font-weight: 800; color: #2563eb; background: #eff6ff; padding: 0.35rem 0.75rem; border-radius: 12px; }

                .notif-list { max-height: 400px; overflow-y: auto; padding: 0.5rem; }
                .notif-item {
                    display: flex;
                    gap: 1.25rem;
                    padding: 1.25rem 1.5rem;
                    border-radius: 20px;
                    transition: all 0.2s;
                    cursor: pointer;
                    margin: 0.25rem;
                }
                .notif-item:hover { background: #f8fafc; transform: scale(0.98); }
                
                .notif-icon {
                    width: 40px;
                    height: 40px;
                    border-radius: 12px;
                    background: #f1f5f9;
                    color: #3b82f6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .notif-content { flex: 1; }
                .notif-text { font-size: 0.95rem; color: #475569; margin: 0; line-height: 1.5; }
                .notif-time { font-size: 0.75rem; color: #94a3b8; font-weight: 700; margin-top: 0.4rem; display: block; }
                
                .notif-empty {
                    padding: 4rem 2rem;
                    text-align: center;
                    color: #94a3b8;
                }
                .notif-empty p { font-size: 1rem; font-weight: 700; margin-top: 1.25rem; color: #0f172a; }
                .notif-empty :global(svg) { color: #22c55e; margin: 0 auto; }

                .notif-footer-actions {
                    padding: 1.5rem 2rem 2rem;
                    background: #fcfdfe;
                    display: flex;
                    justify-content: center;
                }

                .close-notif-btn {
                    width: 100%;
                    padding: 1rem;
                    background: #0f172a;
                    color: white;
                    border: none;
                    border-radius: 16px;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .close-notif-btn:hover { background: #1e293b; transform: translateY(-2px); }

                .notif-header {
                    padding: 1.25rem 1.5rem;
                    border-bottom: 1px solid #f1f5f9;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .notif-header h3 { font-size: 1rem; font-weight: 800; color: #0f172a; margin: 0; }
                .notif-count { font-size: 0.75rem; font-weight: 700; color: #3b82f6; background: #eff6ff; padding: 0.25rem 0.6rem; border-radius: 8px; }

                .notif-list { max-height: 380px; overflow-y: auto; }
                .notif-item {
                    display: flex;
                    gap: 1rem;
                    padding: 1.25rem 1.5rem;
                    transition: background 0.2s;
                    cursor: pointer;
                    border-bottom: 1px solid #f8fafc;
                }
                .notif-item:hover { background: #f8fafc; }
                .notif-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 10px;
                    background: #f1f5f9;
                    color: #3b82f6;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .notif-content { flex: 1; }
                .notif-text { font-size: 0.85rem; color: #475569; margin: 0; line-height: 1.4; }
                .notif-time { font-size: 0.7rem; color: #94a3b8; font-weight: 600; margin-top: 0.25rem; display: block; }
                
                .notif-empty {
                    padding: 3rem 2rem;
                    text-align: center;
                    color: #94a3b8;
                }
                .notif-empty p { font-size: 0.9rem; font-weight: 600; margin-top: 1rem; }
                .notif-empty :global(svg) { color: #22c55e; opacity: 0.5; }

                .notif-footer {
                    width: 100%;
                    padding: 1rem;
                    background: #f8fafc;
                    border: none;
                    color: #3b82f6;
                    font-size: 0.8rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .notif-footer:hover { background: #f1f5f9; text-decoration: underline; }

                .profile-compact {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    background: white;
                    padding: 0.5rem 0.5rem 0.5rem 1.25rem;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                }
                .profile-text { display: flex; flex-direction: column; text-align: right; }
                .p-name { font-size: 0.95rem; font-weight: 800; color: #0f172a; line-height: 1.25; }
                .p-role { font-size: 0.75rem; font-weight: 600; color: #94a3b8; }
                .p-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    background: #f1f5f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #3b82f6;
                }

                .stats-section {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 3.5rem;
                }

                .stat-card {
                    background: white;
                    padding: 1.75rem;
                    border-radius: 24px;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .stat-card:hover { transform: translateY(-4px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05); }

                .stat-card.primary {
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                    color: white;
                    border: none;
                }

                .stat-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; }
                .stat-label { font-size: 0.75rem; font-weight: 900; letter-spacing: 0.1em; opacity: 0.7; }
                .stat-label.dark { color: #64748b; opacity: 1; }

                .stat-icon-wrapper {
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(4px);
                }
                .stat-icon-wrapper.blue { background: #eff6ff; color: #3b82f6; }
                .stat-icon-wrapper.green { background: #f0fdf4; color: #16a34a; }

                .stat-value { font-size: 2.15rem; font-weight: 900; line-height: 1; margin-bottom: 0.5rem; }
                .stat-value.dark { color: #0f172a; }

                .stat-info-line { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; font-weight: 700; }
                .stat-info-line.dark { color: #94a3b8; }

                .content-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    background: white;
                    padding: 1.25rem 1.75rem;
                    border-radius: 24px;
                    gap: 1.5rem;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
                }

                .toolbar-left { display: flex; align-items: center; gap: 1.5rem; flex: 1; }
                .filter-group { display: flex; align-items: center; gap: 1.25rem; }
                
                .search-wrapper { position: relative; flex: 1; max-width: 450px; display: flex; align-items: center; }
                .search-icon { position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%); color: #94a3b8; z-index: 10; }
                .search-wrapper input {
                    width: 100%;
                    padding: 0.9rem 1.25rem 0.9rem 3.25rem;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    outline: none;
                    font-size: 0.88rem;
                    color: #1e293b;
                    transition: all 0.2s;
                }
                .search-wrapper input:focus { background: white; border-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }

                .custom-select-wrapper { position: relative; display: flex; align-items: center; }
                .select-icon { position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%); color: #94a3b8; pointer-events: none; z-index: 10; }
                .search-select {
                    padding: 0.9rem 2.5rem 0.9rem 3.25rem;
                    border-radius: 16px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    color: #1e293b;
                    font-weight: 800;
                    cursor: pointer;
                    appearance: none;
                    min-width: 200px;
                    transition: all 0.2s;
                }
                .search-select:hover { background: #f1f5f9; }

                .type-toggle { background: #f1f5f9; padding: 0.4rem; border-radius: 16px; display: flex; gap: 4px; border: 1px solid #e2e8f0; height: fit-content; }
                .type-toggle button { padding: 0.6rem 1.5rem; border: none; background: transparent; border-radius: 12px; font-size: 0.85rem; font-weight: 800; color: #64748b; cursor: pointer; transition: all 0.2s; }
                .type-toggle button.active { background: white; color: #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

                .refresh-btn { 
                    display: flex; 
                    align-items: center; 
                    gap: 0.75rem; 
                    background: #0f172a; 
                    color: white; 
                    border: none; 
                    padding: 0.9rem 1.75rem; 
                    border-radius: 16px; 
                    font-weight: 800; 
                    cursor: pointer; 
                    transition: all 0.2s;
                }
                .refresh-btn:hover { background: #1e293b; transform: translateY(-1px); }
                .refresh-btn:active { transform: translateY(0); }
                .spinning { animation: spin 1s linear infinite; }

                /* Table Styles Premium */
                .modern-table { width: 100%; border-collapse: separate; border-spacing: 0 0.75rem; margin-top: -0.75rem; }
                .modern-table th { padding: 1.25rem 1.5rem; text-align: left; color: #64748b; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; }
                .modern-table tr { transition: all 0.2s; }
                .modern-table td { padding: 1.25rem 1.5rem; background: white; border-top: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; }
                .modern-table td:first-child { border-left: 1px solid #f1f5f9; border-top-left-radius: 16px; border-bottom-left-radius: 16px; }
                .modern-table td:last-child { border-right: 1px solid #f1f5f9; border-top-right-radius: 16px; border-bottom-right-radius: 16px; }
                
                .modern-table tr:hover td { background: #f8fafc; border-color: #e2e8f0; transform: translateY(-1px); }
                .modern-table tr:hover td:first-child { box-shadow: -10px 0 15px -10px rgba(0,0,0,0.05); }
                
                .user-cell-premium { display: flex; gap: 1rem; align-items: center; }
                .user-avatar-circle-table { 
                    width: 38px; height: 38px; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); 
                    color: #3b82f6; border-radius: 12px; display: flex; align-items: center; justify-content: center; 
                    flex-shrink: 0; font-weight: 900; font-size: 0.85rem; border: 1px solid #dbeafe;
                }
                .user-info-stack { display: flex; flex-direction: column; gap: 2px; }
                .user-name { font-size: 0.9rem; font-weight: 800; color: #0f172a; }
                .u-meta { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: #94a3b8; font-weight: 600; }
                
                .service-badge-v2 { 
                    display: inline-block; padding: 0.35rem 0.85rem; background: #f8fafc; 
                    color: #1e293b; border-radius: 10px; font-size: 0.75rem; 
                    font-weight: 800; border: 1px solid #e2e8f0; margin-bottom: 0.5rem;
                }
                .meta-info { display: flex; flex-direction: column; gap: 4px; }
                .meta-item { display: flex; align-items: center; gap: 6px; font-size: 0.75rem; color: #3b82f6; font-weight: 600; }
                .meta-item.gray { color: #94a3b8; }

                .message-text { font-size: 0.88rem; color: #475569; font-weight: 600; line-height: 1.5; max-width: 300px; }
                .date-badge { display: flex; align-items: center; gap: 6px; color: #94a3b8; font-size: 0.78rem; font-weight: 700; }
                
                .status-pill { 
                    padding: 0.4rem 0.9rem; border-radius: 12px; font-size: 0.72rem; 
                    font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em;
                }
                .status-pill.blue { background: #eff6ff; color: #3b82f6; border: 1px solid #dbeafe; }
                .status-pill.orange { background: #fff7ed; color: #f97316; border: 1px solid #ffedd5; }
                .status-pill.completed { background: #ecfdf5; color: #059669; }
                .status-pill.pending { background: #fff7ed; color: #ea580c; }

                .table-actions { display: flex; gap: 0.75rem; justify-content: flex-end; }
                .action-link, .action-btn { 
                    width: 40px; 
                    height: 40px; 
                    border-radius: 12px; 
                    border: none; 
                    cursor: pointer; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    background: #f1f5f9; 
                    color: #64748b; 
                    transition: all 0.2s;
                }
                .action-link:hover, .action-btn:hover { transform: scale(1.1); }
                .action-link.wa { background: #dcfce7; color: #16a34a; }
                .action-link.wa:hover { background: #16a34a; color: white; }
                .action-link.mail { background: #eff6ff; color: #3b82f6; }
                .action-link.mail:hover { background: #3b82f6; color: white; }
                .action-btn.completed { background: #dcfce7; color: #16a34a; }
                .action-btn.completed.active { background: #16a34a; color: white; }
                .action-btn.delete { background: #fef2f2; color: #ef4444; }
                .action-btn.delete:hover { background: #ef4444; color: white; }

                .analytics-view { max-width: 1200px; }
                .analytics-hero { display: grid; grid-template-columns: 1fr 300px; gap: 2.5rem; }
                .main-chart-case { background: white; border-radius: 32px; padding: 2.5rem; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px -5px rgba(0,0,0,0.02); }
                .card-header-flex { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3rem; }
                .card-header-flex h3 { font-size: 1.5rem; color: #0f172a; font-weight: 900; letter-spacing: -0.01em; margin: 0; }
                .card-header-flex p { font-size: 0.9rem; color: #64748b; font-weight: 500; margin-top: 0.25rem; }
                
                .analytics-meta { display: flex; gap: 1rem; }
                .meta-pill { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-radius: 14px; font-size: 0.75rem; font-weight: 800; }
                .meta-pill.high { background: #fff7ed; color: #f97316; border: 1px solid #ffedd5; }
                
                .advanced-chart-box { 
                    height: 380px; 
                    display: grid; 
                    grid-template-columns: 40px 1fr; 
                    grid-template-rows: 1fr 30px; 
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                    position: relative;
                }
                .y-axis-labels { display: flex; flex-direction: column; justify-content: space-between; padding: 0.5rem 0 2rem; }
                .y-axis-labels span { font-size: 0.7rem; font-weight: 700; color: #cbd5e1; text-align: right; }
                
                .chart-core { position: relative; border-bottom: 2px solid #f8fafc; padding-bottom: 1.5rem; }
                .grid-lines { position: absolute; inset: 0 0 1.5rem 0; display: flex; flex-direction: column; justify-content: space-between; pointer-events: none; }
                .grid-lines .line { width: 100%; height: 1px; background: #f1f5f9; }
                
                .chart-bars-v2 { 
                    position: relative; 
                    height: 100%; 
                    display: flex; 
                    align-items: flex-end; 
                    gap: 12px; 
                    z-index: 5;
                }
                .bar-column { flex: 1; height: 100%; display: flex; align-items: flex-end; position: relative; }
                .bar-hover-zone { width: 100%; height: 100%; display: flex; align-items: flex-end; cursor: pointer; }
                .bar-fill { 
                    width: 100%; 
                    background: linear-gradient(180deg, #3b82f6 0%, #1e3a8a 100%); 
                    border-radius: 6px 6px 2px 2px;
                    position: relative;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    min-height: 4px;
                }
                .bar-column:hover .bar-fill { transform: scaleX(1.1) translateY(-4px); filter: brightness(1.2); z-index: 10; }
                .bar-glow { position: absolute; inset: 0; border-radius: inherit; background: rgba(255,255,255,0.1); opacity: 0; transition: 0.3s; }
                .bar-column:hover .bar-glow { opacity: 1; }
                
                .chart-labels-v2 { grid-column: 2; display: flex; justify-content: space-between; font-size: 0.7rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }
                .current-indicator { color: #3b82f6; }

                .secondary-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding-top: 2rem; border-top: 1px solid #f1f5f9; }
                .sec-stat-box { display: flex; flex-direction: column; gap: 0.5rem; }
                .sec-label { font-size: 0.7rem; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em; }
                .sec-value-group { display: flex; align-items: center; gap: 0.75rem; color: #1e293b; }
                .sec-value { font-size: 0.95rem; font-weight: 800; }
                .rotate-trend { transform: rotate(180deg); color: #ef4444; }

                .analytics-sidebar-stats { display: flex; flex-direction: column; gap: 1.25rem; }
                .metric-card-premium { background: white; padding: 1.5rem; border-radius: 24px; border: 1px solid #e2e8f0; display: flex; flex-direction: column; gap: 1.25rem; }
                .metric-card-premium.dark { background: #0f172a; color: white; border: none; }
                .m-header { display: flex; align-items: center; gap: 0.75rem; color: #64748b; font-size: 0.8rem; font-weight: 700; }
                .metric-card-premium.dark .m-header { color: #94a3b8; }
                .m-body { display: flex; align-items: baseline; gap: 0.75rem; }
                .m-value { font-size: 1.75rem; font-weight: 900; color: #0f172a; letter-spacing: -0.02em; }
                .metric-card-premium.dark .m-value { color: white; }
                .m-growth { font-size: 0.75rem; font-weight: 800; padding: 0.25rem 0.5rem; border-radius: 8px; }
                .m-growth.up { background: #f0fdf4; color: #16a34a; }
                .m-footer { font-size: 0.7rem; color: #94a3b8; font-weight: 600; }
                
                .settings-view { max-width: 1100px; padding: 1rem 0; }
                .settings-grid { display: grid; grid-template-columns: 1fr 360px; gap: 2.5rem; }
                .settings-card.premium { 
                    background: white; 
                    border-radius: 24px; 
                    padding: 2rem; 
                    margin-bottom: 2rem; 
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
                }
                .card-header-icon { display: flex; gap: 1.5rem; align-items: flex-start; margin-bottom: 2.5rem; }
                .card-header-icon :global(svg) { 
                    width: 48px; height: 48px; padding: 12px; 
                    background: #eff6ff; color: #3b82f6; border-radius: 14px; 
                }
                .card-header-icon.red :global(svg) { background: #fef2f2; color: #ef4444; }
                .card-header-icon h3 { font-size: 1.35rem; font-weight: 900; color: #0f172a; margin: 0; }
                .card-header-icon p { font-size: 0.9rem; color: #64748b; margin-top: 0.2rem; font-weight: 500; }

                .form-grid { display: flex; flex-direction: column; gap: 1.5rem; }
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                .message-cell-premium { display: flex; gap: 0.85rem; align-items: flex-start; }
                .m-icon { color: #94a3b8; margin-top: 3px; flex-shrink: 0; }

                .form-group label { 
                    display: block; 
                    font-size: 0.65rem; 
                    font-weight: 800; 
                    color: #94a3b8; 
                    margin-bottom: 0.85rem; 
                    text-transform: uppercase; 
                    letter-spacing: 0.15em; 
                    padding-left: 0.25rem;
                }

                .input-wrapper { 
                    position: relative; 
                    display: flex; 
                    align-items: center; 
                    background: #f8fafc; 
                    border: 1px solid #eef2f6; 
                    border-radius: 14px; 
                    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
                    padding-left: 1.25rem;
                }
                .input-icon { 
                    color: #cbd5e1; 
                    pointer-events: none; 
                    z-index: 5; 
                    transition: all 0.2s;
                    flex-shrink: 0;
                }
                .input-wrapper input, .premium-select { 
                    width: 100%; 
                    padding: 0.8rem 1.25rem 0.8rem 1rem; 
                    border-radius: 14px; 
                    border: none; 
                    background: transparent; 
                    font-size: 0.9rem; 
                    color: #1e293b; 
                    font-weight: 600;
                    outline: none;
                    appearance: none;
                }
                .input-wrapper:hover { 
                    background: #f1f5f9; 
                    border-color: #e2e8f0; 
                }
                .input-wrapper:focus-within { 
                    background: white; 
                    border-color: #3b82f6; 
                    box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.05); 
                }
                .input-wrapper:focus-within .input-icon { color: #3b82f6; transform: scale(1.1); }

                .card-footer-actions { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid #f1f5f9; display: flex; justify-content: flex-end; }
                .primary-save-btn { 
                    display: flex; align-items: center; gap: 0.75rem; 
                    padding: 1rem 2.25rem; background: #3b82f6; color: white; 
                    border: none; border-radius: 16px; font-weight: 800; cursor: pointer; 
                    transition: all 0.2s; box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
                }
                .primary-save-btn:hover { background: #2563eb; transform: translateY(-2px); box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.4); }
                
                .save-settings-btn.premium { 
                    padding: 1rem 2rem; background: #0f172a; color: white; 
                    border: none; border-radius: 16px; font-weight: 800; cursor: pointer; 
                    transition: all 0.2s;
                }
                .save-settings-btn.premium:hover { background: #1e293b; transform: translateY(-2px); }

                /* Sidebar Settings */
                .premium-sidebar { 
                    background: white; 
                    border-radius: 20px; 
                    padding: 1.75rem; 
                    border: 1px solid #eef2f6; 
                    margin-bottom: 2rem;
                    box-shadow: 0 4px 20px -5px rgba(0,0,0,0.02);
                }
                .info-header { display: flex; gap: 1rem; align-items: center; margin-bottom: 1.75rem; }
                .info-icon-box { 
                    width: 44px; height: 44px; background: #fffbeb; color: #f59e0b; 
                    border-radius: 12px; display: flex; align-items: center; justify-content: center; 
                    box-shadow: 0 8px 15px -5px rgba(245, 158, 11, 0.1);
                    flex-shrink: 0;
                }
                .info-header h4 { font-size: 1.05rem; font-weight: 900; color: #0f172a; margin: 0; letter-spacing: -0.01em; }
                .live-dot { 
                    font-size: 0.65rem; 
                    font-weight: 900; 
                    color: #10b981; 
                    display: flex; 
                    align-items: center; 
                    gap: 8px; 
                    background: #f0fdf4; 
                    padding: 0.25rem 0.75rem; 
                    border-radius: 20px;
                    width: fit-content;
                    margin-top: 0.25rem;
                }
                .live-dot::before { content: ''; width: 6px; height: 6px; background: #10b981; border-radius: 50%; animation: pulse 2s infinite; }
                
                .info-list-premium { display: flex; flex-direction: column; gap: 1.15rem; }
                .info-row { display: flex; justify-content: space-between; align-items: center; text-align: right; }
                .info-row .label { font-size: 0.78rem; font-weight: 700; color: #94a3b8; text-align: left; }
                .info-row .value { font-size: 0.85rem; font-weight: 800; color: #1e293b; }
                .info-row .value.success { color: #10b981; }
                .info-row .value.highlight { color: #3b82f6; }
                .status-pill-small { 
                    padding: 0.35rem 0.85rem; background: #f0fdf4; color: #10b981; 
                    border-radius: 10px; font-size: 0.75rem; font-weight: 950; 
                    border: 1px solid #d1fae5;
                    margin-right: -2px; /* Precision alignment to match plain text edge */
                }

                .preferences h4 { font-size: 1.15rem; font-weight: 900; margin-bottom: 0.75rem; color: #0f172a; letter-spacing: -0.01em; }
                .sidebar-hint { font-size: 0.8rem; color: #94a3b8; margin-bottom: 2.5rem; font-weight: 600; line-height: 1.5; }
                
                .premium-toggle-group { display: flex; flex-direction: column; gap: 1.25rem; }
                .p-toggle-item { 
                    display: flex; 
                    justify-content: space-between; 
                    align-items: center; 
                    padding: 1rem; 
                    background: #f8fafc; 
                    border-radius: 18px; 
                    border: 1px solid #f1f5f9;
                }
                .toggle-info { display: flex; flex-direction: column; gap: 0.15rem; }
                .toggle-info .title { font-size: 0.85rem; font-weight: 800; color: #1e293b; }
                .toggle-info .desc { font-size: 0.7rem; color: #94a3b8; font-weight: 600; }

                /* Switch Styles */
                .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
                .switch input { opacity: 0; width: 0; height: 0; }
                .slider { position: absolute; cursor: pointer; inset: 0; background-color: #e2e8f0; transition: .4s; border-radius: 24px; }
                .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
                input:checked + .slider { background-color: #3b82f6; }
                input:checked + .slider:before { transform: translateX(20px); }

                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
                }

                /* Popup Modal Styles */
                .modal-root {
                    position: fixed;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 100000;
                    padding: 1.5rem;
                }

                .modal-backdrop {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.6);
                    backdrop-filter: blur(12px);
                }

                .notification-modal {
                    position: relative;
                    width: 100%;
                    max-width: 460px;
                    background: #f0f9ff !important;
                    border-radius: 40px;
                    box-shadow: 0 40px 100px -20px rgba(14, 165, 233, 0.15);
                    overflow: hidden;
                    z-index: 100001;
                    padding: 0;
                    border: 1px solid #bae6fd;
                }

                .notif-header {
                    padding: 2.5rem 3rem 1.5rem;
                    border-bottom: 1px solid #e0f2fe;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #f0f9ff;
                }
                .notif-header h3 { font-size: 1.5rem; font-weight: 900; color: #0369a1; margin: 0; }
                .notif-count { 
                    font-size: 0.85rem; 
                    font-weight: 800; 
                    color: white; 
                    background: #0ea5e9; 
                    padding: 0.4rem 1rem; 
                    border-radius: 14px;
                }

                .notif-list { 
                    max-height: 450px; 
                    overflow-y: auto; 
                    padding: 1.5rem; 
                    background: #f0f9ff; 
                }
                .notif-item {
                    display: flex;
                    gap: 1.5rem;
                    padding: 1.5rem;
                    border-radius: 28px;
                    background: white;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    cursor: pointer;
                    margin-bottom: 0.75rem;
                    border: 1px solid #e0f2fe;
                }
                .notif-item:hover { 
                    border-color: #0ea5e9; 
                    transform: translateY(-4px);
                    box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.1);
                }
                
                .notif-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 16px;
                    background: #f0f9ff;
                    color: #0ea5e9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .notif-content { flex: 1; }
                .notif-text { font-size: 1.05rem; color: #1e293b; margin: 0; line-height: 1.5; }
                .notif-text strong { color: #0369a1; font-weight: 900; }
                .notif-time { font-size: 0.8rem; color: #64748b; font-weight: 700; margin-top: 0.5rem; display: flex; align-items: center; gap: 4px; }
                
                .notif-empty {
                    padding: 5rem 2rem;
                    text-align: center;
                }
                .notif-empty p { font-size: 1.1rem; font-weight: 800; margin-top: 1.5rem; color: #0369a1; }

                .notif-footer-actions {
                    padding: 1.5rem 3rem 2.5rem;
                    background: #f0f9ff;
                    display: flex;
                    justify-content: center;
                    border-top: 1px solid #e0f2fe;
                }

                .close-notif-btn {
                    width: 100%;
                    padding: 1.25rem;
                    background: #0ea5e9;
                    color: white;
                    border: none;
                    border-radius: 22px;
                    font-weight: 900;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-size: 1.1rem;
                }
                .close-notif-btn:hover { background: #0284c7; transform: translateY(-2px); }

                @media (max-width: 1200px) {
                    .dashboard-wrapper { grid-template-columns: 80px 1fr; }
                    .sidebar-header, .nav-link span, .nav-section, .logout-btn span { display: none; }
                    .nav-link { justify-content: center; padding: 1.25rem; }
                    .sidebar { padding: 2rem 0.75rem; }
                }
            `}</style>

            <AnimatePresence>
                {showNotifications && (
                    <div className="modal-root">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="modal-backdrop"
                            onClick={() => setShowNotifications(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="notification-modal"
                        >
                            <div className="notif-header">
                                <h3>Notifikasi Terbaru</h3>
                                <span className="notif-count">{pendingCount} Pesan Baru</span>
                            </div>
                            <div className="notif-list">
                                {latestNotifications.length > 0 ? (
                                    latestNotifications.map((notif) => (
                                        <div key={notif.id} className="notif-item">
                                            <div className="notif-icon">
                                                {notif.type === 'demo' ? <Zap size={14} /> : <Mail size={14} />}
                                            </div>
                                            <div className="notif-content">
                                                <p className="notif-text"><strong>{notif.name}</strong> mengirimkan permintaan {notif.type === 'demo' ? 'Demo' : 'Kontak'}</p>
                                                <span className="notif-time">{new Date(notif.createdAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="notif-empty">
                                        <CheckCircle size={40} />
                                        <p>Semua laporan sudah ditangani!</p>
                                    </div>
                                )}
                            </div>
                            <div className="notif-footer-actions">
                                <button className="close-notif-btn" onClick={() => setShowNotifications(false)}>
                                    Tutup
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
