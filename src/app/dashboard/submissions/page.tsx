"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSubmissions } from "@/app/actions/fetch";
import { getTrafficStats } from "@/app/actions/traffic";
import {
    Users,
    Mail,
    LogOut,
    Search,
    RefreshCw,
    Clock,
    User,
    ChevronRight,
    ExternalLink,
    Filter,
    Zap,
    TrendingUp,
    MoreVertical,
    CheckCircle,
    Bell,
    Settings,
    Grid,
    List,
    Smartphone,
    Monitor,
    BarChart3,
    MousePointer2,
    Eye
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Submission {
    id: string | number;
    name: string;
    email: string;
    service: string;
    message: string;
    createdAt: string;
}

export default function SubmissionsDashboard() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterService, setFilterService] = useState("All");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [activeTab, setActiveTab] = useState<"submissions" | "analytics" | "settings">("submissions");
    const [trafficStats, setTrafficStats] = useState<any>(null);
    const router = useRouter();

    const fetchItems = async () => {
        setLoading(true);
        try {
            const [subs, tStats] = await Promise.all([
                getSubmissions(),
                getTrafficStats()
            ]);
            setSubmissions(subs || []);
            setTrafficStats(tStats);
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const isAdmin = localStorage.getItem("isAdmin");
        if (!isAdmin) {
            router.push("/login");
            return;
        }
        fetchItems();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("isAdmin");
        router.push("/login");
    };

    const uniqueServices = ["All", ...new Set(submissions.map((s: Submission) => s.service))];

    const filteredSubmissions = submissions.filter((s: Submission) => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            s.message.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterService === "All" || s.service === filterService;
        return matchesSearch && matchesFilter;
    });

    const stats = {
        total: submissions.length,
        today: submissions.filter((s: Submission) => s.createdAt && new Date(s.createdAt).toDateString() === new Date().toDateString()).length,
        potential: Math.floor(submissions.length * 12.5) // Just a mock value for "value"
    };

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
                        <img src="/images/logo.png" alt="Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>
                    <div className="logo-text">
                        <h3>Schola Bintang</h3>
                        <span>Admin Console</span>
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

                <div className="sidebar-footer">
                    <button onClick={handleLogout} className="logout-btn">
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Page Area */}
            <main className="main-content">
                {/* Header Bar */}
                <header className="page-header">
                    <div className="header-context">
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

                    <div className="header-actions">
                        <div className="notification-bell">
                            <Bell size={20} />
                            <span className="bell-dot"></span>
                        </div>
                        <div className="user-profile">
                            <div className="profile-info text-right">
                                <p className="profile-name">Admin Schola</p>
                                <p className="profile-role">Super Admin</p>
                            </div>
                            <div className="profile-avatar">
                                <User size={20} />
                            </div>
                        </div>
                    </div>
                </header>

                {activeTab === 'submissions' && (
                    <>
                        {/* Dashboard Stats */}
                        <div className="stats-section">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="stat-box gradient-blue"
                            >
                                <div className="stat-header">
                                    <div className="stat-label">TOTAL LEADS</div>
                                    <Users size={24} />
                                </div>
                                <div className="stat-value">{stats.total}</div>
                                <div className="stat-trend">
                                    <TrendingUp size={16} />
                                    <span>Sync across all devices</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="stat-box"
                            >
                                <div className="stat-header">
                                    <div className="stat-label">TOTAL VISITORS</div>
                                    <div className="icon-circle bg-blue-soft">
                                        <Eye size={20} className="text-blue" />
                                    </div>
                                </div>
                                <div className="stat-value">{trafficStats?.totalSessions || 0}</div>
                                <p className="stat-desc">Lifetime website visitors</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="stat-box"
                            >
                                <div className="stat-header">
                                    <div className="stat-label">VISITS TODAY</div>
                                    <div className="icon-circle bg-green-soft">
                                        <MousePointer2 size={20} className="text-green" />
                                    </div>
                                </div>
                                <div className="stat-value">{trafficStats?.sessionsToday || 0}</div>
                                <p className="stat-desc">Active sessions in last 24h</p>
                            </motion.div>
                        </div>

                        {/* Content Toolbar */}
                        <div className="content-toolbar">
                            <div className="toolbar-left">
                                <div className="search-wrapper">
                                    <Search size={18} className="search-icon" />
                                    <input
                                        type="text"
                                        placeholder="Search by name, email or service..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>

                                <div className="filter-dropdown">
                                    <Filter size={18} />
                                    <select
                                        value={filterService}
                                        onChange={(e) => setFilterService(e.target.value)}
                                    >
                                        {uniqueServices.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className="toolbar-right">
                                <div className="view-toggle">
                                    <button
                                        className={viewMode === 'grid' ? 'active' : ''}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        <Grid size={18} />
                                    </button>
                                    <button
                                        className={viewMode === 'list' ? 'active' : ''}
                                        onClick={() => setViewMode('list')}
                                    >
                                        <List size={18} />
                                    </button>
                                </div>
                                <button onClick={fetchItems} className="refresh-btn">
                                    <RefreshCw size={18} className={loading ? 'spinning' : ''} />
                                    <span>Sync</span>
                                </button>
                            </div>
                        </div>

                        {/* Submissions Display */}
                        <div className={`submissions-container ${viewMode}`}>
                            <AnimatePresence mode="popLayout">
                                {filteredSubmissions.length > 0 ? (
                                    filteredSubmissions.map((item, idx) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.2, delay: idx * 0.05 }}
                                            className="submission-card"
                                        >
                                            <div className="card-top">
                                                <div className="submission-user">
                                                    <div className="user-avatar-initial">
                                                        {item.name.charAt(0)}
                                                    </div>
                                                    <div className="user-meta">
                                                        <h4>{item.name}</h4>
                                                        <span>{item.email}</span>
                                                    </div>
                                                </div>
                                                <button className="options-btn">
                                                    <MoreVertical size={18} />
                                                </button>
                                            </div>

                                            <div className="card-badge-row">
                                                <div className="service-pill">
                                                    <Zap size={12} />
                                                    {item.service}
                                                </div>
                                                <div className="time-pill">
                                                    <Clock size={12} />
                                                    {item.createdAt ? new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) : '-'}
                                                </div>
                                            </div>

                                            <div className="message-box">
                                                <p>{item.message}</p>
                                            </div>

                                            <div className="card-actions">
                                                <a href={`mailto:${item.email}`} className="action-btn-primary">
                                                    <Mail size={16} />
                                                    <span>Reply</span>
                                                </a>
                                                <a href="#" className="action-btn-secondary">
                                                    <ExternalLink size={16} />
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="empty-state">
                                        <div className="empty-icon-box">
                                            <Users size={64} />
                                        </div>
                                        <h3>Data Tidak Ditemukan</h3>
                                        <p>Coba gunakan kata kunci pencarian atau filter yang berbeda.</p>
                                        <button className="reset-btn" onClick={() => { setSearchTerm(""); setFilterService("All"); }}>
                                            Reset Filters
                                        </button>
                                    </div>
                                )}
                            </AnimatePresence>
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
                            <div className="analytics-card main-chart">
                                <div className="card-header-flex">
                                    <div>
                                        <h3>Visitor Growth</h3>
                                        <p>Daily sessions recorded across the platform</p>
                                    </div>
                                    <div className="timeframe-badge">Last 30 Days</div>
                                </div>

                                <div className="chart-container">
                                    <div className="chart-bars">
                                        {trafficStats?.history?.length > 0 ? (
                                            trafficStats.history.map((day: any, i: number) => (
                                                <div key={day.date} className="bar-wrapper" title={`${day.date}: ${day.sessions} visits`}>
                                                    <div
                                                        className="bar"
                                                        style={{ height: `${Math.min(100, (day.sessions / 100) * 100)}%` }}
                                                    ></div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="chart-empty">
                                                <BarChart3 size={48} />
                                                <p>Insufficient history data to generate chart</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="chart-labels">
                                        <span>30 days ago</span>
                                        <span>Today</span>
                                    </div>
                                </div>
                            </div>

                            <div className="analytics-sidebar-stats">
                                <div className="mini-stat-card">
                                    <span className="label">Bounce Rate</span>
                                    <span className="value">12.5%</span>
                                    <span className="trend down">-2%</span>
                                </div>
                                <div className="mini-stat-card">
                                    <span className="label">Avg Sessions</span>
                                    <span className="value">04:12</span>
                                    <span className="trend up">+15s</span>
                                </div>
                                <div className="mini-stat-card">
                                    <span className="label">Direct Traffic</span>
                                    <span className="value">84%</span>
                                    <span className="status-indicator online"></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'settings' && (
                    /* Settings View */
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="settings-view"
                    >
                        <div className="settings-grid">
                            <div className="settings-main">
                                <div className="settings-card">
                                    <h3>Profil Administrator</h3>
                                    <p>Kelola informasi akun Anda dan preferensi tampilan.</p>

                                    <div className="form-group">
                                        <label>Nama Lengkap</label>
                                        <input type="text" defaultValue="Admin Schola Bintang" />
                                    </div>
                                    <div className="form-group">
                                        <label>Alamat Email</label>
                                        <input type="email" defaultValue="admin@scholabintang.id" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Bahasa Default</label>
                                            <select>
                                                <option>Bahasa Indonesia</option>
                                                <option>English</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Zona Waktu</label>
                                            <select>
                                                <option>(GMT+07:00) Jakarta</option>
                                                <option>(GMT+08:00) Singapore</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="settings-card">
                                    <h3>Keamanan</h3>
                                    <p>Pastikan akun Anda tetap aman dengan autentikasi yang kuat.</p>

                                    <div className="form-group">
                                        <label>Kata Sandi Saat Ini</label>
                                        <input type="password" placeholder="••••••••" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Kata Sandi Baru</label>
                                            <input type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label>Konfirmasi Sandi</label>
                                            <input type="password" />
                                        </div>
                                    </div>
                                    <button className="save-settings-btn">Simpan Perubahan Keamanan</button>
                                </div>
                            </div>

                            <div className="settings-sidebar">
                                <div className="settings-card info-card">
                                    <div className="info-icon">
                                        <Zap size={24} />
                                    </div>
                                    <h4>System Info</h4>
                                    <div className="info-list">
                                        <div className="info-item">
                                            <span>Versi</span>
                                            <span>2.4.0-stable</span>
                                        </div>
                                        <div className="info-item">
                                            <span>Daya Muat</span>
                                            <span>Excellent</span>
                                        </div>
                                        <div className="info-item">
                                            <span>Status Server</span>
                                            <span className="status-badge">Online</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="settings-card">
                                    <h4>Notifikasi</h4>
                                    <div className="toggle-group">
                                        <div className="toggle-item">
                                            <span>Email Leads Baru</span>
                                            <div className="toggle-switch active"></div>
                                        </div>
                                        <div className="toggle-item">
                                            <span>Laporan Mingguan</span>
                                            <div className="toggle-switch"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </main>

            <style jsx>{`
                .dashboard-wrapper {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    height: 100vh;
                    background: #f1f5f9;
                    font-family: 'Outfit', 'Inter', sans-serif;
                    overflow: hidden;
                }

                /* Sidebar */
                .sidebar {
                    background: #1a1a63;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    padding: 2rem 1.5rem;
                    z-index: 100;
                }

                .sidebar-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    padding-left: 0.5rem;
                }

                .logo-box {
                    width: 42px;
                    height: 42px;
                    background: white;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                }

                .logo-text h3 { margin: 0; font-size: 1.15rem; font-weight: 700; }
                .logo-text span { font-size: 0.75rem; color: #94a3b8; font-weight: 500; }

                .nav-menu { flex: 1; display: flex; flex-direction: column; }
                .nav-section { 
                    font-size: 0.7rem; 
                    text-transform: uppercase; 
                    letter-spacing: 0.1em; 
                    color: #475569; 
                    font-weight: 800;
                    margin: 2rem 0 1rem 0.5rem;
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
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.2s;
                    font-weight: 500;
                    position: relative;
                }

                .nav-link:hover { background: rgba(255, 255, 255, 0.05); color: white; }
                .nav-link.active { background: rgba(245, 130, 31, 0.1); color: #f5821f; }
                .active-dot {
                    position: absolute;
                    right: 1rem;
                    width: 6px;
                    height: 6px;
                    background: #f5821f;
                    border-radius: 50%;
                    box-shadow: 0 0 12px #f5821f;
                }

                .sidebar-footer { padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.05); }
                .logout-btn {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 0.85rem 1rem;
                    background: rgba(239, 68, 68, 0.1);
                    border: none;
                    color: #f87171;
                    border-radius: 12px;
                    cursor: pointer;
                    font-weight: 600;
                }
                .logout-btn:hover { background: #ef4444; color: white; }

                /* Main Content */
                .main-content {
                    padding: 2rem 3.5rem;
                    overflow-y: auto;
                    background: radial-gradient(circle at top right, #f8fafc, #f1f5f9);
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2.5rem;
                }

                .breadcrumb { display: flex; align-items: center; gap: 0.5rem; color: #94a3b8; font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem; }
                .breadcrumb .current { color: #1e293b; }
                .header-title { font-size: 2.25rem; font-weight: 800; color: #0f172a; letter-spacing: -0.02em; margin: 0; }

                .header-actions { display: flex; align-items: center; gap: 2rem; }
                .notification-bell { 
                    width: 44px; 
                    height: 44px; 
                    background: white; 
                    border-radius: 14px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    color: #64748b; 
                    cursor: pointer;
                    position: relative;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }
                .bell-dot { position: absolute; top: 12px; right: 12px; width: 8px; height: 8px; background: #ef4444; border: 2px solid white; border-radius: 50%; }

                .user-profile { display: flex; align-items: center; gap: 1rem; cursor: pointer; }
                .profile-name { font-size: 0.95rem; font-weight: 700; color: #0f172a; margin: 0; }
                .profile-role { font-size: 0.75rem; color: #64748b; margin: 0; font-weight: 600; }
                .profile-avatar { 
                    width: 44px; 
                    height: 44px; 
                    background: #f1f5f9; 
                    border-radius: 14px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    color: #64748b; 
                    border: 2px solid white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                }

                .stats-section {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1.5rem;
                    margin-bottom: 3rem;
                }

                .stat-box {
                    background: white;
                    padding: 2rem;
                    border-radius: 24px;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.5);
                }

                .stat-box.gradient-blue {
                    background: linear-gradient(135deg, #f5821f 0%, #e07210 100%);
                    color: white;
                }

                .stat-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
                .stat-label { font-size: 0.75rem; font-weight: 800; letter-spacing: 0.1em; color: inherit; opacity: 0.7; }
                .stat-value { font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; }
                .stat-trend { display: flex; align-items: center; gap: 0.25rem; font-size: 0.85rem; font-weight: 700; color: #60a5fa; }
                .stat-desc { font-size: 0.85rem; color: #64748b; margin: 0; font-weight: 500; }

                .icon-circle { 
                    width: 40px; 
                    height: 40px; 
                    border-radius: 12px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                }
                .bg-green-soft { background: #f0fdf4; }
                .bg-blue-soft { background: #eff6ff; }
                .text-green { color: #22c55e; }
                .text-blue { color: #3b82f6; }

                /* Toolbar */
                .content-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    background: white;
                    padding: 0.75rem 1rem;
                    border-radius: 20px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                }

                .toolbar-left { display: flex; gap: 1rem; flex: 1; }
                .search-wrapper { 
                    position: relative; 
                    flex: 1; 
                    max-width: 400px;
                }
                .search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: #94a3b8; }
                .search-wrapper input {
                    width: 100%;
                    padding: 0.75rem 1rem 0.75rem 3rem;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    outline: none;
                    font-weight: 500;
                    transition: all 0.2s;
                    font-size: 0.95rem;
                }
                .search-wrapper input:focus { border-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }

                .filter-dropdown {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0 1rem;
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    border-radius: 14px;
                    color: #64748b;
                }
                .filter-dropdown select {
                    border: none;
                    background: transparent;
                    color: #1e293b;
                    font-weight: 700;
                    padding: 0.75rem 0;
                    outline: none;
                    cursor: pointer;
                }

                .toolbar-right { display: flex; gap: 1rem; }
                .view-toggle { 
                    background: #f1f5f9; 
                    padding: 4px; 
                    border-radius: 12px; 
                    display: flex;
                    gap: 2px;
                }
                .view-toggle button {
                    padding: 6px 12px;
                    border: none;
                    background: transparent;
                    border-radius: 8px;
                    color: #64748b;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .view-toggle button.active { background: white; color: #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

                .refresh-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #3b82f6;
                    color: white;
                    border: none;
                    padding: 0.75rem 1.25rem;
                    border-radius: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
                }

                .spinning { animation: spin 1s linear infinite; }

                /* Submissions List */
                .submissions-container.grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                    gap: 1.5rem;
                }

                .submission-card {
                    background: white;
                    border-radius: 24px;
                    padding: 1.75rem;
                    box-shadow: 0 10px 20px -5px rgba(0,0,0,0.02);
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .submission-card:hover { 
                    transform: translateY(-6px); 
                    box-shadow: 0 20px 30px -10px rgba(0,0,0,0.05); 
                    border-color: #3b82f6; 
                }

                .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
                .submission-user { display: flex; align-items: center; gap: 1rem; }

                .user-avatar-initial {
                    width: 52px;
                    height: 52px;
                    background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
                    color: #3b82f6;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 800;
                }

                .user-meta h4 { margin: 0; font-size: 1.1rem; color: #0f172a; font-weight: 800; }
                .user-meta span { font-size: 0.85rem; color: #64748b; font-weight: 600; }

                .options-btn { 
                    width: 36px; 
                    height: 36px; 
                    border-radius: 10px; 
                    border: none; 
                    background: transparent; 
                    color: #94a3b8; 
                    cursor: pointer; 
                }
                .options-btn:hover { background: #f8fafc; color: #0f172a; }

                .card-badge-row { display: flex; gap: 0.75rem; margin-bottom: 1.5rem; }
                .service-pill { 
                    display: flex; 
                    align-items: center; 
                    gap: 0.4rem; 
                    background: #f8fafc; 
                    padding: 0.4rem 0.8rem; 
                    border-radius: 10px; 
                    font-size: 0.75rem; 
                    font-weight: 800; 
                    color: #3b82f6;
                    border: 1px solid #eff6ff;
                }
                .time-pill {
                    display: flex; 
                    align-items: center; 
                    gap: 0.4rem; 
                    background: transparent;
                    padding: 0.4rem 0.8rem; 
                    font-size: 0.75rem; 
                    font-weight: 700; 
                    color: #94a3b8;
                }

                .message-box {
                    background: #f8fafc;
                    padding: 1.25rem;
                    border-radius: 18px;
                    margin-bottom: 1.75rem;
                    border: 1px solid #f1f5f9;
                }
                .message-box p { 
                    margin: 0; 
                    font-size: 0.95rem; 
                    line-height: 1.6; 
                    color: #334155; 
                    font-weight: 500;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .card-actions { display: flex; gap: 0.75rem; }
                .action-btn-primary {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: #f1f5f9;
                    color: #1e40af;
                    padding: 0.85rem;
                    border-radius: 14px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-decoration: none;
                    transition: all 0.2s;
                }
                .action-btn-primary:hover { background: #3b82f6; color: white; }

                .action-btn-secondary {
                    width: 48px;
                    background: #f8fafc;
                    color: #64748b;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    text-decoration: none;
                    transition: all 0.2s;
                    border: 1px solid #e2e8f0;
                }
                .action-btn-secondary:hover { background: #1e293b; color: white; border-color: #1e293b; }

                /* List View Specifics */
                .submissions-container.list { display: flex; flex-direction: column; gap: 1rem; }
                .submissions-container.list .submission-card { 
                    display: grid; 
                    grid-template-columns: 250px 150px 1fr 200px;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    border-radius: 18px;
                }
                .submissions-container.list .card-top, 
                .submissions-container.list .card-badge-row,
                .submissions-container.list .message-box { margin: 0; padding: 0; background: transparent; border: none; }
                .submissions-container.list .message-box p { -webkit-line-clamp: 1; }
                .submissions-container.list .options-btn { display: none; }

                /* Empty State */
                .empty-state { 
                    grid-column: 1 / -1; 
                    display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center; 
                    padding: 6rem 0; 
                    text-align: center; 
                }
                .empty-icon-box { 
                    width: 120px; 
                    height: 120px; 
                    background: #f1f5f9; 
                    border-radius: 40px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                    color: #cbd5e1;
                    margin-bottom: 2rem;
                }
                .empty-state h3 { font-size: 1.5rem; font-weight: 800; color: #1e293b; margin-bottom: 0.5rem; }
                .empty-state p { color: #64748b; margin-bottom: 2rem; }
                .reset-btn { background: #0f172a; color: white; border: none; padding: 0.85rem 2rem; border-radius: 14px; font-weight: 700; cursor: pointer; }

                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

                /* Analytics View Styles */
                .analytics-view { max-width: 1200px; margin-top: 1rem; }
                .analytics-hero { display: grid; grid-template-columns: 1fr 300px; gap: 2rem; }
                
                .analytics-card {
                    background: white;
                    border-radius: 24px;
                    padding: 2.5rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                    border: 1px solid #e2e8f0;
                }
                
                .card-header-flex { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3rem; }
                .card-header-flex h3 { font-size: 1.5rem; color: #0f172a; margin-bottom: 0.25rem; }
                .card-header-flex p { color: #64748b; font-size: 0.95rem; }
                .timeframe-badge { background: #f1f5f9; color: #475569; padding: 6px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 700; }
                
                .chart-container { height: 300px; display: flex; flex-direction: column; }
                .chart-bars { flex: 1; display: flex; align-items: flex-end; gap: 8px; padding-bottom: 1.5rem; border-bottom: 1px solid #f1f5f9; }
                .bar-wrapper { flex: 1; height: 100%; display: flex; align-items: flex-end; position: relative; }
                .bar { width: 100%; background: #3b82f6; border-radius: 6px 6px 0 0; min-height: 4px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); opacity: 0.8; }
                .bar-wrapper:hover .bar { opacity: 1; background: #2563eb; transform: scaleX(1.1); }
                
                .chart-labels { display: flex; justify-content: space-between; padding-top: 1rem; color: #94a3b8; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
                .chart-empty { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #cbd5e1; gap: 1rem; }
                
                .analytics-sidebar-stats { display: flex; flex-direction: column; gap: 1.5rem; }
                .mini-stat-card {
                    background: white;
                    padding: 1.5rem;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                .mini-stat-card .label { font-size: 0.75rem; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin-bottom: 0.5rem; }
                .mini-stat-card .value { font-size: 1.75rem; font-weight: 800; color: #0f172a; }
                .mini-stat-card .trend { position: absolute; top: 1.5rem; right: 1.5rem; font-size: 0.75rem; font-weight: 800; padding: 4px 8px; border-radius: 8px; }
                .mini-stat-card .trend.up { background: #f0fdf4; color: #22c55e; }
                .mini-stat-card .trend.down { background: #fef2f2; color: #ef4444; }
                
                .status-indicator { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
                .status-indicator.online { background: #22c55e; box-shadow: 0 0 10px rgba(34, 197, 94, 0.4); }

                /* Settings View Styles */
                .settings-view { max-width: 1100px; margin-top: 1rem; }
                .settings-grid { display: grid; grid-template-columns: 1fr 320px; gap: 2rem; }
                
                .settings-card {
                    background: white;
                    border-radius: 20px;
                    padding: 2rem;
                    margin-bottom: 2rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
                    border: 1px solid #e2e8f0;
                }
                
                .settings-card h3 { margin-bottom: 0.5rem; font-size: 1.25rem; }
                .settings-card p { color: #64748b; font-size: 0.9rem; margin-bottom: 2rem; }
                
                .form-group { margin-bottom: 1.5rem; }
                .form-group label { display: block; font-size: 0.85rem; font-weight: 700; color: #1e293b; margin-bottom: 0.5rem; }
                .form-group input, .form-group select {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    outline: none;
                    font-family: inherit;
                    font-size: 0.95rem;
                }
                .form-group input:focus { border-color: #3b82f6; }
                
                .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
                
                .save-settings-btn {
                    margin-top: 1rem;
                    padding: 1rem 1.5rem;
                    background: #0f172a;
                    color: white;
                    border: none;
                    border-radius: 14px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .save-settings-btn:hover { background: #334155; }
                
                .info-card { background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); color: white; border: none; }
                .info-icon { width: 50px; height: 50px; background: rgba(255,255,255,0.2); border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; }
                .info-list { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
                .info-item { display: flex; justify-content: space-between; font-size: 0.85rem; padding-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.1); }
                .status-badge { background: #22c55e; color: white; padding: 2px 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 800; }
                
                .toggle-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
                .toggle-item span { font-size: 0.85rem; font-weight: 600; color: #1e293b; }
                .toggle-switch { width: 44px; height: 22px; background: #e2e8f0; border-radius: 20px; position: relative; cursor: pointer; }
                .toggle-switch::after { content: ''; position: absolute; left: 3px; top: 3px; width: 16px; height: 16px; background: white; border-radius: 50%; transition: all 0.2s; }
                .toggle-switch.active { background: #3b82f6; }
                .toggle-switch.active::after { left: 25px; }

                @media (max-width: 1200px) {
                    .dashboard-wrapper { grid-template-columns: 80px 1fr; }
                    .sidebar-header, .nav-link span, .nav-section, .logout-btn span { display: none; }
                    .nav-link { justify-content: center; padding: 1rem; }
                    .sidebar { padding: 2rem 0.75rem; }
                    .active-dot { right: 5px; }
                }

                @media (max-width: 900px) {
                    .stats-section { grid-template-columns: 1fr; }
                    .main-content { padding: 1.5rem; }
                    .submissions-container.grid { grid-template-columns: 1fr; }
                    .header-actions { display: none; }
                    .settings-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
}
