import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  Moon,
  Sun,
  LogOut,
  Upload,
  Plus,
  ArrowLeft,
  Eye,
  Trash2,
  X,
  Check,
  Monitor,
  Smartphone,
  Image as ImageIcon,
  Layers,
  FileText,
  Search,
  Edit as EditIcon,
  Users,
  Building,
  Globe,
  Briefcase,
  ShieldCheck,
  FolderKanban,
  Key,
  Bookmark,
  Tag,
  Settings,
  RotateCw,
  AlertTriangle,
  CheckCircle2,
  Send as SendIcon,
  XCircle,
  Clock,
  ChevronDown,
  Lock,
  ArrowRight,
  Download,
  Share2,
  Calendar,
  MapPin,
  Video,
  Phone,
  Mail,
  UserCheck,
  MoreVertical,
  LayoutGrid,
  ClipboardList
} from 'lucide-react';

const SIZE = {
  desktop: '1920×1080',
  mobile: '768×1024'
};

const makeSvgUri = (s) => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(s.trim());

const svgTrekkers = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><circle cx="170" cy="85" r="55" fill="#f59e0b"/><polygon points="135,120 148,82 160,120" fill="#047857"/><polygon points="180,125 195,75 210,125" fill="#065f46"/><circle cx="168" cy="52" r="10" fill="#1e293b"/><path d="M168 62 L165 92 L150 118 M165 92 L178 118 M162 70 L145 88 M165 72 L185 88" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="185" y1="75" x2="190" y2="125" stroke="#b45309" stroke-width="2.5"/><text x="170" y="152" font-family="system-ui, sans-serif" font-size="20" font-weight="400" font-style="italic" text-anchor="middle" fill="#0f172a">Namma</text><text x="170" y="180" font-family="system-ui, sans-serif" font-size="24" font-weight="900" text-anchor="middle" fill="#0f172a">Bengaluru</text><text x="170" y="206" font-family="system-ui, sans-serif" font-size="24" font-weight="900" text-anchor="middle" fill="#0f172a">Trekkers</text><ellipse cx="140" cy="214" rx="4" ry="2" fill="#10b981"/><ellipse cx="152" cy="216" rx="4" ry="2" fill="#10b981"/><ellipse cx="190" cy="214" rx="4" ry="2" fill="#10b981"/><ellipse cx="202" cy="216" rx="4" ry="2" fill="#10b981"/></svg>`);
const svgTridala = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><circle cx="170" cy="72" r="14" fill="#f59e0b"/><path d="M170 86 Q170 125 155 150 Q168 135 170 120 Q172 135 185 150 Q170 125 170 86 Z" fill="#15803d"/><path d="M165 98 C140 85, 130 50, 142 35 C150 48, 155 70, 165 98 Z" fill="#22c55e"/><path d="M152 46 C138 42, 132 25, 145 18 C148 28, 150 38, 152 46 Z" fill="#4ade80"/><path d="M175 98 C200 85, 210 50, 198 35 C190 48, 185 70, 175 98 Z" fill="#22c55e"/><path d="M188 46 C202 42, 208 25, 195 18 C192 28, 190 38, 188 46 Z" fill="#4ade80"/><text x="170" y="194" font-family="system-ui, sans-serif" font-size="34" font-weight="900" font-style="italic" text-anchor="middle" fill="#dc2626" letter-spacing="2">TRIDALA</text></svg>`);
const svgEcoTrek = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><path d="M170 20 A65 65 0 0 1 230 110 L216 102 A50 50 0 0 0 170 35 Z" fill="#16a34a"/><polygon points="230,110 242,92 220,95" fill="#16a34a"/><path d="M230 110 A65 65 0 0 1 125 142 L132 128 A50 50 0 0 0 216 102 Z" fill="#16a34a"/><polygon points="125,142 135,160 142,138" fill="#16a34a"/><path d="M125 142 A65 65 0 0 1 170 20 L170 35 A50 50 0 0 0 132 128 Z" fill="#16a34a"/><polygon points="170,20 185,32 165,36" fill="#16a34a"/><polygon points="155,108 175,70 195,108" fill="#22c55e"/><polygon points="180,108 200,82 215,108" fill="#15803d"/><circle cx="160" cy="126" r="3" fill="#15803d"/><circle cx="172" cy="122" r="3" fill="#15803d"/><circle cx="185" cy="124" r="3" fill="#15803d"/><text x="170" y="192" font-family="system-ui, sans-serif" font-size="30" font-weight="900" text-anchor="middle" fill="#16a34a" letter-spacing="1">ECO-TREK</text></svg>`);
const svgNexus = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><g stroke="#2563eb" stroke-width="4" fill="none"><polygon points="170,25 215,50 215,105 170,130 125,105 125,50" /><circle cx="170" cy="25" r="7" fill="#38bdf8"/><circle cx="215" cy="50" r="7" fill="#38bdf8"/><circle cx="215" cy="105" r="7" fill="#38bdf8"/><circle cx="170" cy="130" r="7" fill="#38bdf8"/><circle cx="125" cy="105" r="7" fill="#38bdf8"/><circle cx="125" cy="50" r="7" fill="#38bdf8"/><circle cx="170" cy="78" r="14" fill="#2563eb"/></g><text x="170" y="186" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#1e3a8a" letter-spacing="3">NEXUS</text><text x="170" y="206" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle" fill="#64748b" letter-spacing="4">INNOVATIONS</text></svg>`);
const svgApex = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><polygon points="170,30 220,120 185,120 170,90 155,120 120,120" fill="#e11d48"/><polygon points="170,45 205,110 185,110 170,82 155,110 135,110" fill="#fb7185"/><text x="170" y="180" font-family="system-ui, sans-serif" font-size="30" font-weight="900" text-anchor="middle" fill="#0f172a" letter-spacing="2">APEX</text><text x="170" y="202" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#e11d48" letter-spacing="5">GLOBAL SOLUTIONS</text></svg>`);
const svgZenith = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><path d="M140 100 A28 28 0 0 1 180 62 A38 38 0 0 1 224 95 A24 24 0 0 1 215 130 L135 130 A24 24 0 0 1 140 100 Z" fill="#0284c7"/><circle cx="160" cy="115" r="4" fill="#ffffff"/><circle cx="180" cy="115" r="4" fill="#ffffff"/><circle cx="200" cy="115" r="4" fill="#ffffff"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#0369a1" letter-spacing="2">ZENITH</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#64748b" letter-spacing="4">CLOUD CORP</text></svg>`);
const svgVanguard = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><polygon points="120,40 170,135 220,40 195,40 170,95 145,40" fill="#7c3aed"/><polygon points="135,40 170,110 205,40 190,40 170,82 150,40" fill="#a855f7"/><text x="170" y="184" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#581c87" letter-spacing="3">VANGUARD</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#9333ea" letter-spacing="5">MEDIA LABS</text></svg>`);
const svgCyberShield = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><path d="M170 30 Q215 35 215 80 Q215 125 170 140 Q125 125 125 80 Q125 35 170 30 Z" fill="#0f172a"/><path d="M170 42 Q202 46 202 80 Q202 116 170 128 Q138 116 138 80 Q138 46 170 42 Z" fill="#10b981"/><path d="M165 75 A8 8 0 0 1 175 75 L175 82 L165 82 Z" fill="#ffffff"/><rect x="160" y="82" width="20" height="15" rx="3" fill="#ffffff"/><text x="170" y="184" font-family="system-ui, sans-serif" font-size="26" font-weight="900" text-anchor="middle" fill="#0f172a" letter-spacing="2">CYBERSHIELD</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#059669" letter-spacing="4">SECURITY</text></svg>`);
const svgGreenPulse = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><path d="M130 90 C130 50, 175 35, 195 55 C215 75, 205 120, 165 120 C135 120, 130 100, 130 90 Z" fill="#16a34a"/><path d="M140 90 Q160 85 168 70 T178 105 T195 90" stroke="#ffffff" stroke-width="4.5" fill="none" stroke-linecap="round"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#15803d" letter-spacing="2">GREENPULSE</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#65a30d" letter-spacing="4">ENERGY CORP</text></svg>`);
const svgAura = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><path d="M170 35 C160 70, 140 90, 125 105 C145 105, 165 85, 170 35 Z" fill="#f43f5e"/><path d="M170 35 C180 70, 200 90, 215 105 C195 105, 175 85, 170 35 Z" fill="#fb7185"/><path d="M170 50 C165 80, 150 105, 140 115 C160 115, 170 95, 170 50 Z" fill="#fda4af"/><path d="M170 50 C175 80, 190 105, 200 115 C180 115, 170 95, 170 50 Z" fill="#fda4af"/><circle cx="170" cy="115" r="5" fill="#e11d48"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="30" font-weight="900" text-anchor="middle" fill="#9f1239" letter-spacing="3">AURA</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#f43f5e" letter-spacing="5">HEALTH &amp; WELLNESS</text></svg>`);
const svgQuantum = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><circle cx="170" cy="80" r="12" fill="#6366f1"/><ellipse cx="170" cy="80" rx="48" ry="16" fill="none" stroke="#818cf8" stroke-width="3" transform="rotate(30 170 80)"/><ellipse cx="170" cy="80" rx="48" ry="16" fill="none" stroke="#4f46e5" stroke-width="3" transform="rotate(-30 170 80)"/><circle cx="210" cy="100" r="4.5" fill="#4338ca"/><circle cx="130" cy="100" r="4.5" fill="#6366f1"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#312e81" letter-spacing="2">QUANTUM</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#6366f1" letter-spacing="5">LOGIC LABS</text></svg>`);
const svgBlueSky = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><path d="M125 90 L170 45 L215 90 L195 90 L170 65 L145 90 Z" fill="#0284c7"/><path d="M135 115 L170 80 L205 115 L190 115 L170 95 L150 115 Z" fill="#38bdf8"/><text x="170" y="180" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#075985" letter-spacing="2">BLUESKY</text><text x="170" y="202" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle" fill="#0284c7" letter-spacing="4">LOGISTICS</text></svg>`);
const svgStarlight = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><polygon points="170,25 182,65 225,65 190,90 202,130 170,105 138,130 150,90 115,65 158,65" fill="#f59e0b"/><polygon points="170,45 178,70 205,70 183,86 191,110 170,95 149,110 157,86 135,70 162,70" fill="#fbbf24"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#78350f" letter-spacing="3">STARLIGHT</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#b45309" letter-spacing="5">HOSPITALITY</text></svg>`);
const svgNova = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><circle cx="152" cy="78" r="32" fill="none" stroke="#0d9488" stroke-width="8"/><circle cx="188" cy="78" r="32" fill="none" stroke="#14b8a6" stroke-width="8"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="30" font-weight="900" text-anchor="middle" fill="#134e4a" letter-spacing="3">NOVA</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#0d9488" letter-spacing="5">FINTECH GROUP</text></svg>`);
const svgTerra = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><polygon points="170,30 225,80 215,80 170,40 125,80 115,80" fill="#b45309"/><rect x="135" y="80" width="70" height="45" fill="none" stroke="#b45309" stroke-width="5"/><rect x="155" y="95" width="30" height="30" fill="#d97706"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#451a03" letter-spacing="2">TERRA PRIME</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#b45309" letter-spacing="4">REAL ESTATE</text></svg>`);
const svgUrban = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 220" width="100%" height="100%"><polygon points="170,25 185,68 230,70 195,95 210,135 170,110 130,135 145,95 110,70 155,68" fill="#ea580c"/><polygon points="170,45 178,72 205,73 185,88 193,115 170,100 147,115 155,88 135,73 162,72" fill="#f97316"/><text x="170" y="182" font-family="system-ui, sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#7c2d12" letter-spacing="2">URBAN SPARK</text><text x="170" y="204" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ea580c" letter-spacing="4">CREATIVE STUDIOS</text></svg>`);

const INITIAL_CLIENT_LOGOS = [
  { id: 1, title: 'Namma Bengaluru Trekkers', file: 'logo (1).png', date: '5/26/2026', img: svgTrekkers },
  { id: 2, title: 'Tridala', file: 'resize-17713241921671281798TridalaLogo8112025.jpg', date: '2/17/2026', img: svgTridala },
  { id: 3, title: 'Unnamed Client', file: 'LOGO.png', date: '2/14/2026', img: svgEcoTrek },
  { id: 4, title: 'Nexus Innovations', file: 'nexus-tech-vector.png', date: '2/10/2026', img: svgNexus }
];

const svgGeoTrackMee = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#f8fafc"/><rect width="480" height="42" fill="#2563eb"/><circle cx="28" cy="21" r="7" fill="#ffffff" opacity="0.9"/><text x="44" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#ffffff">GeoTrackMee</text><text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#dbeafe">Home   About Us   Features   Pricing   Contact Us</text><rect x="40" y="65" width="130" height="215" rx="16" fill="#0f172a"/><rect x="44" y="69" width="122" height="207" rx="13" fill="#ffffff"/><rect x="80" y="73" width="50" height="4" rx="2" fill="#0f172a"/><rect x="52" y="88" width="106" height="58" rx="8" fill="#1e293b"/><text x="60" y="105" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#38bdf8">Live Attendance</text><text x="60" y="122" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#ffffff">09:42 AM</text><text x="60" y="136" font-family="system-ui, sans-serif" font-size="8" fill="#94a3b8">Office Geofence Active</text><rect x="52" y="154" width="106" height="30" rx="6" fill="#f1f5f9"/><circle cx="64" cy="169" r="6" fill="#22c55e"/><text x="76" y="173" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#0f172a">Check-in Verified</text><rect x="52" y="190" width="106" height="30" rx="6" fill="#f1f5f9"/><circle cx="64" cy="205" r="6" fill="#3b82f6"/><text x="76" y="209" font-family="system-ui, sans-serif" font-size="8.5" font-weight="600" fill="#0f172a">GPS Route Logged</text><rect x="52" y="226" width="106" height="26" rx="6" fill="#2563eb"/><text x="105" y="242" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#ffffff">Mark Attendance</text><text x="195" y="112" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#0f172a">Simplify Attendance &amp;</text><text x="195" y="138" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#2563eb">Workforce Management</text><text x="195" y="165" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">AI-powered facial check-in, real-time geofence tracking,</text><text x="195" y="180" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">and automated shift rosters for modern distributed teams.</text><rect x="195" y="205" width="110" height="34" rx="8" fill="#2563eb"/><text x="250" y="226" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Book a Demo</text><rect x="315" y="205" width="85" height="34" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/><text x="357" y="226" font-family="system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="middle" fill="#334155">Login</text></svg>`);
const svgInvora = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#f0fdf4"/><rect width="480" height="42" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/><rect x="24" y="13" width="18" height="18" rx="4" fill="#059669"/><text x="50" y="26" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#065f46">Invora Accounts</text><text x="210" y="26" font-family="system-ui, sans-serif" font-size="10" font-weight="500" fill="#64748b">Home    About    Features    Sales &amp; POS    Pricing    Contact</text><rect x="400" y="10" width="65" height="24" rx="6" fill="#10b981"/><text x="432" y="26" font-family="system-ui, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="#ffffff">Start Free</text><text x="32" y="108" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0f172a">Smart Billing &amp; Inventory</text><text x="32" y="138" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#059669">Made Effortless</text><text x="32" y="165" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">Automated invoicing, GST taxation, multi-warehouse stock</text><text x="32" y="180" font-family="system-ui, sans-serif" font-size="10.5" fill="#475569">audits, and barcode POS built for rapid retail scaling.</text><rect x="32" y="206" width="120" height="34" rx="8" fill="#059669"/><text x="92" y="227" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Explore ERP Modules</text><rect x="260" y="75" width="195" height="185" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))"/><rect x="275" y="92" width="165" height="38" rx="8" fill="#ecfdf5"/><text x="288" y="110" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#047857">Revenue Today</text><text x="288" y="124" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#065f46">₹ 1,48,920</text><rect x="275" y="138" width="78" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/><text x="283" y="155" font-family="system-ui, sans-serif" font-size="8" fill="#64748b">Invoices Sent</text><text x="283" y="176" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#0f172a">284</text><rect x="362" y="138" width="78" height="52" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/><text x="370" y="155" font-family="system-ui, sans-serif" font-size="8" fill="#64748b">Stock Items</text><text x="370" y="176" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#059669">4,120</text><rect x="275" y="200" width="165" height="42" rx="8" fill="#f1f5f9"/><text x="288" y="225" font-family="system-ui, sans-serif" font-size="9.5" font-weight="700" fill="#334155">GST E-Way Bill Auto-Generated</text></svg>`);
const svgMhidhil = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><defs><linearGradient id="mgreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#14532d"/><stop offset="100%" stop-color="#166534"/></linearGradient><linearGradient id="morb" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#15803d"/></linearGradient></defs><rect width="480" height="300" fill="#ffffff"/><rect width="480" height="42" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#14532d" letter-spacing="1">MHIDHIL POLYMERS</text><text x="240" y="26" font-family="system-ui, sans-serif" font-size="9.5" font-weight="600" fill="#475569">Home   About Us   Products   Certifications   Contact Us</text><rect x="405" y="10" width="60" height="22" rx="4" fill="#15803d"/><text x="435" y="24" font-family="system-ui, sans-serif" font-size="9" font-weight="700" text-anchor="middle" fill="#ffffff">Enquiry</text><rect x="0" y="42" width="480" height="258" fill="url(#mgreen)"/><circle cx="370" cy="170" r="85" fill="url(#morb)" opacity="0.85"/><circle cx="370" cy="170" r="70" fill="#22c55e" opacity="0.3"/><path d="M310 190 Q340 140 370 170 T430 150" stroke="#ffffff" stroke-width="3" fill="none" opacity="0.6"/><path d="M320 210 Q360 170 390 190 T440 180" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.4"/><text x="35" y="125" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#ffffff">Made to</text><text x="35" y="160" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#86efac">Return to Nature.</text><text x="35" y="195" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">100% Certified Biodegradable &amp; Compostable</text><text x="35" y="212" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">Eco-friendly polymer packaging solutions for sustainable retail.</text><rect x="35" y="235" width="130" height="32" rx="6" fill="#22c55e"/><text x="100" y="255" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle" fill="#052e16">Download Brochure</text></svg>`);
const svgNbt = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#0f172a"/><rect width="480" height="42" fill="#1e293b"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#f59e0b">Namma Bengaluru Trekkers</text><text x="260" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#cbd5e1">Upcoming Treks   Gallery   Safety   Reviews</text><polygon points="120,300 240,110 360,300" fill="#1e293b"/><polygon points="260,300 370,140 480,300" fill="#334155"/><circle cx="380" cy="90" r="35" fill="#f59e0b" opacity="0.8"/><text x="35" y="110" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#ffffff">Conquer the</text><text x="35" y="140" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#f59e0b">Western Ghats</text><text x="35" y="170" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Weekend getaways, summit camps, and wilderness trails.</text><rect x="35" y="195" width="115" height="32" rx="6" fill="#ea580c"/><text x="92" y="215" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">View Treks</text></svg>`);
const svgTridalaSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#fefce8"/><rect width="480" height="42" fill="#ffffff" stroke="#fef08a" stroke-width="1"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#dc2626">TRIDALA HERBAL</text><text x="240" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#713f12">Herbal Oils   Ayurvedic Extracts   Wellness   Shop</text><text x="35" y="115" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#166534">Pure Ayurvedic Wellness</text><text x="35" y="142" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#854d0e">Rooted in Tradition</text><text x="35" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#713f12">100% natural cold-pressed botanicals for holistic care.</text><rect x="35" y="200" width="110" height="32" rx="6" fill="#15803d"/><text x="90" y="220" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Shop Products</text></svg>`);
const svgEcoTrekSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#f0fdf4"/><rect width="480" height="42" fill="#166534"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#86efac">ECO-TREK ADVENTURES</text><text x="260" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#bbf7d0">Himalayas   Expeditions   Leave No Trace</text><text x="35" y="118" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#14532d">Zero-Waste Expeditions</text><text x="35" y="145" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#16a34a">In The Great Himalayas</text><text x="35" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#374151">Sustainable high-altitude mountaineering camps &amp; tours.</text><rect x="35" y="200" width="125" height="32" rx="6" fill="#16a34a"/><text x="97" y="220" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Plan Expedition</text></svg>`);
const svgNexusSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#0b0f19"/><rect width="480" height="42" fill="#111827"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#38bdf8">NEXUS INNOVATIONS</text><text x="270" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">AI Platform   Cloud Mesh   Docs</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="25" font-weight="900" fill="#ffffff">Next-Gen Distributed</text><text x="35" y="150" font-family="system-ui, sans-serif" font-size="25" font-weight="900" fill="#38bdf8">AI Infrastructure</text><text x="35" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Sub-millisecond inference pipelines for modern tech enterprises.</text><rect x="35" y="205" width="115" height="32" rx="6" fill="#0284c7"/><text x="92" y="225" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Get Started</text></svg>`);
const svgApexSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#ffffff"/><rect width="480" height="42" fill="#881337"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">APEX GLOBAL</text><text x="250" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#fecdd3">Consulting   Advisory   M&amp;A   Insights</text><text x="35" y="118" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0f172a">Strategic Advisory for</text><text x="35" y="145" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#e11d48">Global Scale</text><text x="35" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Empowering Fortune 500 enterprises through digital transformation.</text><rect x="35" y="200" width="115" height="32" rx="6" fill="#e11d48"/><text x="92" y="220" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Contact Partner</text></svg>`);
const svgZenithSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#f0f9ff"/><rect width="480" height="42" fill="#0369a1"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">ZENITH CLOUD</text><text x="270" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#bae6fd">Kubernetes   Storage   CDN   Pricing</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0c4a6e">Ultra-Fast Serverless</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0284c7">Cloud Hosting</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#475569">99.999% uptime with global edge clusters across 40 regions.</text><rect x="35" y="202" width="120" height="32" rx="6" fill="#0284c7"/><text x="95" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Deploy Cluster</text></svg>`);
const svgVanguardSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#2e1065"/><rect width="480" height="42" fill="#1e1b4b"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#c084fc">VANGUARD MEDIA</text><text x="260" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#e9d5ff">Commercials   3D VFX   Brand Reels</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff">Cinematic Storytelling &amp;</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#a855f7">Brand Experience</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#cbd5e1">Award-winning commercial film and digital visual design.</text><rect x="35" y="202" width="115" height="32" rx="6" fill="#9333ea"/><text x="92" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Watch Showreel</text></svg>`);
const svgCyberShieldSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#0f172a"/><rect width="480" height="42" fill="#020617"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#10b981">CYBERSHIELD</text><text x="260" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#94a3b8">SOC Monitoring   Pen-Testing   Compliance</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff">24/7 Managed Threat</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#10b981">Detection &amp; Response</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8">Zero-trust architecture protecting cloud-native enterprise assets.</text><rect x="35" y="202" width="120" height="32" rx="6" fill="#059669"/><text x="95" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Request Audit</text></svg>`);
const svgGreenPulseSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#f7fee7"/><rect width="480" height="42" fill="#365314"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#bef264">GREENPULSE ENERGY</text><text x="270" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#d9f99d">Solar Farms   Grid Storage   ESG</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#1a2e05">Utility-Scale Solar &amp;</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#65a30d">Clean Wind Power</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#4d7c0f">Accelerating industrial net-zero carbon transition.</text><rect x="35" y="202" width="115" height="32" rx="6" fill="#65a30d"/><text x="92" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Calculate ROI</text></svg>`);
const svgAuraSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#fff1f2"/><rect width="480" height="42" fill="#ffffff" stroke="#ffe4e6" stroke-width="1"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#be123c">AURA WELLNESS</text><text x="260" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#9f1239">Clinics   Treatments   Specialists   Book</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#881337">Personalized Holistic</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#e11d48">Health &amp; Aesthetic Care</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#701a75">Integrative therapy with world-class clinical practitioners.</text><rect x="35" y="202" width="115" height="32" rx="6" fill="#e11d48"/><text x="92" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Book Appointment</text></svg>`);
const svgQuantumSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#1e1b4b"/><rect width="480" height="42" fill="#0f0e26"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#818cf8">QUANTUM LOGIC</text><text x="270" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#c7d2fe">Quantum SDK   Simulators   Research</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ffffff">Accelerating Quantum</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#818cf8">Circuit Simulation</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#a5b4fc">Algorithmic optimization on 128-qubit quantum hardware.</text><rect x="35" y="202" width="115" height="32" rx="6" fill="#6366f1"/><text x="92" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Read Whitepaper</text></svg>`);
const svgBlueSkySite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#f8fafc"/><rect width="480" height="42" fill="#0284c7"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ffffff">BLUESKY LOGISTICS</text><text x="260" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#e0f2fe">Air Freight   Ocean Cargo   Track Consignment</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0f172a">Seamless Worldwide</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0284c7">Freight &amp; Supply Chain</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">Real-time GPS tracking across 140 countries and 500 ports.</text><rect x="35" y="202" width="115" height="32" rx="6" fill="#0284c7"/><text x="92" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Track Shipment</text></svg>`);
const svgStarlightSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#fffbeb"/><rect width="480" height="42" fill="#78350f"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#fde68a">STARLIGHT RESORTS</text><text x="270" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#fef3c7">Suites   Dining   Spa &amp; Wellness   Book</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#451a03">Exquisite Luxury</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#b45309">Island Escapes</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#78350f">Private beachfront villas with personalized Michelin culinary service.</text><rect x="35" y="202" width="115" height="32" rx="6" fill="#b45309"/><text x="92" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Reserve Suite</text></svg>`);
const svgNovaSite = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%"><rect width="480" height="300" fill="#f0fdfa"/><rect width="480" height="42" fill="#0f766e"/><text x="25" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#ccfbf1">NOVA FINTECH</text><text x="270" y="25" font-family="system-ui, sans-serif" font-size="10" fill="#e6fffa">Multi-Currency   Virtual Cards   API</text><text x="35" y="120" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#134e4a">Borderless Global</text><text x="35" y="148" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0d9488">Digital Payments</text><text x="35" y="178" font-family="system-ui, sans-serif" font-size="11" fill="#0f766e">Instant cross-border settlement with zero hidden FX markup.</text><rect x="35" y="202" width="115" height="32" rx="6" fill="#0d9488"/><text x="92" y="222" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Open Account</text></svg>`);

const INITIAL_WEBSITES = [
  { id: 1, title: 'GeoTrackMee', url: 'https://gtm.devcreationsblr.com/', date: '9/8/2026', img: svgGeoTrackMee },
  { id: 2, title: 'Invora - Billing and Inventory', url: 'https://billing.devcreationsblr.com/', date: '9/8/2026', img: svgInvora },
  { id: 3, title: 'MhidhilPolymers', url: 'https://mhidhilpolymers.com/', date: '9/8/2026', img: svgMhidhil }
];

const INITIAL_APPLICANTS = [
  {
    id: 1,
    name: 'Vaishnavi R',
    email: 'vvaish0407@gmail.com',
    phone: '7411268077',
    role: 'Employee',
    position: 'Graphic Designer',
    experience: '0-2 yrs',
    subExperience: '',
    date: '21/10/2026',
    status: 'PENDING',
    section: 'apps',
    resume: 'Vaishnavi R (Resume).pdf'
  },
  {
    id: 2,
    name: 'Darshit Godhani',
    email: 'darshitgodhani13@gmail.com',
    phone: '9033284839',
    role: 'Freelancer',
    position: 'Web Developer',
    experience: '3-5 yrs',
    subExperience: '',
    date: '16/10/2026',
    status: 'PENDING',
    section: 'apps',
    resume: 'Darshit Godhani (Resume).pdf'
  },
  {
    id: 3,
    name: 'santosh',
    email: 'santoshchalageri1999@gmail.com',
    phone: '9880020224',
    role: 'Freelancer',
    position: 'Web Developer',
    experience: '2-3 yrs',
    subExperience: '',
    date: '10/10/2026',
    status: 'PENDING',
    section: 'apps',
    resume: 'santosh (Resume).pdf'
  },
  {
    id: 4,
    name: 'Testing',
    email: 'roshanpappu4@gmail.com',
    phone: '1234567890',
    role: 'Intern',
    position: 'Web Developer',
    experience: 'Fresher',
    subExperience: '7th Sem - Cse',
    date: '05/11/2026',
    status: 'ACCEPTED',
    section: 'apps',
    resume: 'Testing (Resume).pdf'
  },
  {
    id: 5,
    name: 'Harsha',
    email: 'gmganashree99@gmail.com',
    phone: '6366755774',
    role: 'Intern',
    position: 'Web Developer',
    experience: 'Fresher',
    subExperience: '7th Sem - Mech',
    date: '05/11/2026',
    status: 'ACCEPTED',
    section: 'apps',
    resume: 'Harsha (Resume).pdf'
  },
  {
    id: 6,
    name: 'Khushi',
    email: 'msahanasahana47@gmail.com',
    phone: '6366755774',
    role: 'Intern',
    position: 'Web Developer',
    experience: 'Fresher',
    subExperience: '5th Sem - Cse',
    date: '05/11/2026',
    status: 'ACCEPTED',
    section: 'apps',
    resume: 'Khushi (Resume).pdf'
  },
  {
    id: 7,
    name: 'kushi',
    email: 'harshasahana47@gmail.com',
    phone: '9880011223',
    role: 'Intern',
    position: 'Web Developer',
    experience: 'Fresher',
    subExperience: '7th Sem - CSE',
    date: '04/11/2026',
    status: 'ACCEPTED',
    section: 'apps',
    resume: 'kushi (Resume).pdf'
  }
];

const SAMPLE_8_DOCS = [
  {
    id: 'offer',
    name: 'Offer Letter',
    version: 'Version 1',
    status: 'Delivered To Candidate',
    isDelivered: true,
    submitted: '22/10/2026 by Admin',
    reviewed: '22/10/2026 by Main Admin',
    delivered: '23/10/2026 to candidate',
    iconType: 'doc'
  },
  {
    id: 'mou',
    name: 'MOU',
    version: 'Version 1',
    status: 'Delivered To Candidate',
    isDelivered: true,
    submitted: '22/10/2026 by Admin',
    reviewed: '22/10/2026 by Main Admin',
    delivered: '03/11/2026 to candidate',
    iconType: 'handshake'
  },
  {
    id: 'idcard',
    name: 'ID Card',
    version: 'Version 1',
    status: 'Draft (Not Submitted)',
    isDelivered: false,
    iconType: 'id'
  },
  {
    id: 'intern-compl-letter',
    name: 'Internship Completion Letter',
    version: 'Version 1',
    status: 'Draft (Not Submitted)',
    isDelivered: false,
    iconType: 'doc'
  },
  {
    id: 'intern-compl-cert',
    name: 'Internship Completion Certificate',
    version: 'Version 1',
    status: 'Draft (Not Submitted)',
    isDelivered: false,
    iconType: 'award'
  },
  {
    id: 'proj-compl-letter',
    name: 'Project Completion Letter',
    version: 'Version 1',
    status: 'Draft (Not Submitted)',
    isDelivered: false,
    iconType: 'check'
  },
  {
    id: 'intern-ongoing',
    name: 'Internship Ongoing Letter',
    version: 'Version 1',
    status: 'Draft (Not Submitted)',
    isDelivered: false,
    iconType: 'hourglass'
  },
  {
    id: 'relieving',
    name: 'Relieving Letter',
    version: 'Version 1',
    status: 'Draft (Not Submitted)',
    isDelivered: false,
    iconType: 'doc'
  }
];

const INITIAL_DOC_CANDIDATES = [
  {
    id: 1,
    name: "kushi",
    din: "DIN069",
    roleType: "INTERN",
    position: "Web Developer Intern",
    email: "harshasahana47@gmail.com",
    stats: { awaiting: 0, sentToHr: 0, validated: 0, sentToCandidate: 1 },
    totalDocs: 8,
    category: "Intern",
    statusFilter: "sent-candidate",
    docItems: JSON.parse(JSON.stringify(SAMPLE_8_DOCS))
  },
  {
    id: 2,
    name: "Ganashree GM",
    din: "DIN068",
    roleType: "INTERN",
    position: "Web Developer",
    email: "gmganashree99@gmail.com",
    stats: { awaiting: 0, sentToHr: 0, validated: 0, sentToCandidate: 2 },
    totalDocs: 8,
    category: "Intern",
    statusFilter: "sent-candidate",
    docItems: JSON.parse(JSON.stringify(SAMPLE_8_DOCS))
  },
  {
    id: 3,
    name: "M Sahana",
    din: "DIN067",
    roleType: "INTERN",
    position: "Web Developer Intern",
    email: "msahanasahana47@gmail.com",
    stats: { awaiting: 0, sentToHr: 0, validated: 1, sentToCandidate: 2 },
    totalDocs: 4,
    category: "Intern",
    statusFilter: "validated-hr",
    docItems: JSON.parse(JSON.stringify(SAMPLE_8_DOCS))
  },
  {
    id: 4,
    name: "Vaishnavi R",
    din: "DIN065",
    roleType: "EMPLOYEE",
    position: "Graphic Designer",
    email: "vvaish0407@gmail.com",
    stats: { awaiting: 1, sentToHr: 0, validated: 1, sentToCandidate: 0 },
    totalDocs: 5,
    category: "Employee",
    statusFilter: "awaiting",
    docItems: JSON.parse(JSON.stringify(SAMPLE_8_DOCS))
  },
  {
    id: 5,
    name: "Darshit Godhani",
    din: "DIN064",
    roleType: "FREELANCER",
    position: "Web Developer",
    email: "darshitgodhani13@gmail.com",
    stats: { awaiting: 1, sentToHr: 0, validated: 1, sentToCandidate: 0 },
    totalDocs: 4,
    category: "Freelancer",
    statusFilter: "awaiting",
    docItems: JSON.parse(JSON.stringify(SAMPLE_8_DOCS))
  }
];

const DOC_FILTER_TABS = [
  { id: 'all', label: 'All Records' },
  { id: 'awaiting', label: 'Sent for Validation' },
  { id: 'correction', label: 'Sent to HR for Correction' },
  { id: 'validated-hr', label: 'Validated & Sent to HR' },
  { id: 'sent-candidate', label: 'Sent to Candidate' },
  { id: 'issues', label: 'Issues' }
];

const svgPadmavathi = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <circle cx="60" cy="60" r="58" fill="#fffbeb"/>
  <path d="M35 50 C32 75 35 90 42 105 C46 108 74 108 78 105 C85 90 88 75 85 50 C85 30 75 22 60 22 C45 22 35 30 35 50 Z" fill="#1e293b"/>
  <rect x="53" y="68" width="14" height="18" fill="#fbcfe8"/>
  <ellipse cx="60" cy="55" rx="18" ry="20" fill="#fde047" opacity="0.2"/>
  <ellipse cx="60" cy="55" rx="17" ry="19" fill="#fbcfe8"/>
  <ellipse cx="53" cy="53" rx="2" ry="2.5" fill="#0f172a"/>
  <ellipse cx="67" cy="53" rx="2" ry="2.5" fill="#0f172a"/>
  <path d="M55 64 Q60 68 65 64" stroke="#e11d48" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M50 48 Q54 46 57 48" stroke="#0f172a" stroke-width="1.5" fill="none"/>
  <path d="M63 48 Q66 46 70 48" stroke="#0f172a" stroke-width="1.5" fill="none"/>
  <path d="M42 42 C46 32 54 28 60 28 C66 28 74 32 78 42 C74 38 68 35 60 35 C52 35 46 38 42 42 Z" fill="#0f172a"/>
  <path d="M40 45 C42 58 45 68 46 78 C44 65 42 55 40 45 Z" fill="#0f172a"/>
  <path d="M80 45 C78 58 75 68 74 78 C76 65 78 55 80 45 Z" fill="#0f172a"/>
  <path d="M30 115 C34 95 44 86 52 84 L56 100 L64 100 L68 84 C76 86 86 95 90 115 Z" fill="#0f172a"/>
  <polygon points="54,84 66,84 60,98" fill="#ffffff"/>
</svg>`);

const svgDevaraj = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <circle cx="60" cy="60" r="58" fill="#fffbeb"/>
  <path d="M10 90 Q60 70 110 90 L110 120 L10 120 Z" fill="#e2e8f0" opacity="0.4"/>
  <rect x="52" y="66" width="16" height="18" fill="#fed7aa"/>
  <ellipse cx="60" cy="54" rx="18" ry="21" fill="#fed7aa"/>
  <path d="M40 45 C40 28 50 20 60 20 C70 20 80 28 80 45 C75 32 65 27 60 27 C55 27 45 32 40 45 Z" fill="#1e293b"/>
  <path d="M45 54 C45 68 50 78 60 78 C70 78 75 68 75 54 C72 62 68 66 60 66 C52 66 48 62 45 54 Z" fill="#1e293b"/>
  <path d="M52 62 Q60 64 68 62 Q60 60 52 62" fill="#1e293b"/>
  <circle cx="52" cy="50" r="2.5" fill="#0f172a"/>
  <circle cx="68" cy="50" r="2.5" fill="#0f172a"/>
  <rect x="46" y="44" width="12" height="11" rx="3" fill="none" stroke="#334155" stroke-width="1.8"/>
  <rect x="62" y="44" width="12" height="11" rx="3" fill="none" stroke="#334155" stroke-width="1.8"/>
  <line x1="58" y1="49" x2="62" y2="49" stroke="#334155" stroke-width="1.8"/>
  <path d="M28 115 C32 92 42 84 50 82 L55 98 L65 98 L70 82 C78 84 88 92 92 115 Z" fill="#1e293b"/>
  <polygon points="52,82 68,82 60,96" fill="#ffffff"/>
  <polygon points="57,84 63,84 60,94" fill="#0f172a"/>
</svg>`);

const INITIAL_TEAM_MEMBERS = [
  {
    id: 1,
    name: "Padmavathi H M",
    role: "MANAGING DIRECTOR",
    bio: "",
    section: "minds",
    img: svgPadmavathi
  },
  {
    id: 2,
    name: "Devaraj H M",
    role: "MANAGING DIRECTOR",
    bio: "Managing Director at Dev Creations",
    section: "minds",
    img: svgDevaraj
  },
  {
    id: 3,
    name: "Dr. K. Srinivas",
    role: "STRATEGIC ADVISOR",
    bio: "Former VP at Enterprise Systems, 20+ yrs scaling IT delivery",
    section: "mentors",
    img: svgDevaraj
  },
  {
    id: 4,
    name: "Rohan Verma",
    role: "TECHNICAL ARCHITECT",
    bio: "Distributed cloud infrastructure & scalable microservices mentor",
    section: "mentors",
    img: svgPadmavathi
  },
  {
    id: 5,
    name: "Ananya Sharma",
    role: "HEAD OF DESIGN",
    bio: "Leading creative UI/UX & cross-platform product experience",
    section: "team",
    img: svgPadmavathi
  },
  {
    id: 6,
    name: "Vikram R",
    role: "LEAD FULL STACK ENGINEER",
    bio: "Full stack ecosystem, React, Node.js & high throughput APIs",
    section: "team",
    img: svgDevaraj
  }
];

const svgDCS = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="20" fill="#ffffff"/>
  <path d="M18 48 L48 18 C52 14 58 14 62 18 L85 41 C89 45 89 51 85 55 L72 68 C68 72 62 72 58 68 L35 45" fill="none" stroke="#ea580c" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="20" y="60" width="22" height="22" rx="4" fill="#f97316"/>
  <circle cx="31" cy="71" r="5" fill="#ffffff"/>
</svg>`);

const svgMS = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#ede9fe"/>
  <rect x="24" y="30" width="10" height="10" rx="2.5" fill="#7c3aed"/>
  <rect x="42" y="32" width="34" height="6" rx="3" fill="#7c3aed"/>
  <rect x="24" y="46" width="10" height="10" rx="2.5" fill="#7c3aed"/>
  <rect x="42" y="48" width="34" height="6" rx="3" fill="#7c3aed"/>
  <rect x="24" y="62" width="10" height="10" rx="2.5" fill="#7c3aed"/>
  <rect x="42" y="64" width="26" height="6" rx="3" fill="#7c3aed"/>
</svg>`);

const svgBizConnect = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#fef3c7"/>
  <rect x="26" y="52" width="11" height="26" rx="3" fill="#b45309"/>
  <rect x="44" y="36" width="11" height="42" rx="3" fill="#b45309"/>
  <rect x="62" y="24" width="11" height="54" rx="3" fill="#b45309"/>
</svg>`);

const svgCrezzle = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#ffedd5"/>
  <rect x="32" y="22" width="36" height="56" rx="8" fill="none" stroke="#ea580c" stroke-width="6"/>
  <circle cx="50" cy="68" r="3.5" fill="#ea580c"/>
  <rect x="44" y="28" width="12" height="3" rx="1.5" fill="#ea580c"/>
</svg>`);

const svgTapForMeal = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#ea580c"/>
  <circle cx="50" cy="50" r="28" fill="none" stroke="#ffffff" stroke-width="3" stroke-dasharray="4 4" opacity="0.6"/>
  <path d="M48 30 C48 26 52 26 52 30 L52 48 L56 46 C58 45 61 46 62 48 L67 56 C68 58 68 60 67 62 L63 70 C61 74 57 76 52 76 L44 76 C38 76 34 71 34 65 L34 52 C34 49 37 49 37 52 L37 60 M44 48 L44 38 C44 35 48 35 48 38 L48 48" fill="#ffffff"/>
</svg>`);

const svgKLG = makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
  <rect width="100" height="100" rx="22" fill="#fff7ed"/>
  <circle cx="50" cy="50" r="32" fill="none" stroke="#dc2626" stroke-width="3.5"/>
  <path d="M30 42 C30 40 33 36 40 36 C48 36 50 42 50 48" stroke="#dc2626" stroke-width="2" fill="none"/>
  <text x="50" y="58" font-family="'Times New Roman', serif, system-ui" font-size="24" font-weight="900" font-style="italic" text-anchor="middle" fill="#dc2626">klg</text>
  <path d="M36 64 C42 67 58 67 64 64" stroke="#d97706" stroke-width="2" fill="none"/>
</svg>`);

const PALETTES = [
  { bg: '#ede9fe', fg: '#7c3aed' },
  { bg: '#fef3c7', fg: '#b45309' },
  { bg: '#ffedd5', fg: '#ea580c' },
  { bg: '#e0f2fe', fg: '#0284c7' },
  { bg: '#dcfce7', fg: '#15803d' },
  { bg: '#ffe4e6', fg: '#e11d48' },
  { bg: '#f3e8ff', fg: '#9333ea' }
];

const generateFallbackIcon = (name) => {
  const color = PALETTES[Math.abs(name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)) % PALETTES.length];
  const initials = name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase() || 'PR';
  return makeSvgUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
    <rect width="100" height="100" rx="22" fill="${color.bg}"/>
    <text x="50" y="62" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" text-anchor="middle" fill="${color.fg}">${initials}</text>
  </svg>`);
};

const INITIAL_PROJECTS = [
  {
    num: "01",
    name: "DCS",
    desc: "DCS related tasks",
    date: "16 Aug 2024",
    status: "in_progress",
    img: svgDCS,
    tasks: 28,
    completed: 21
  },
  {
    num: "02",
    name: "MS",
    desc: "DCS all softwares manager",
    date: "30 May 2026",
    status: "in_progress",
    img: svgMS,
    tasks: 19,
    completed: 12
  },
  {
    num: "03",
    name: "BizConnect",
    desc: "BizConnect is a mobile and cloud-based contact management and CR...",
    fullDesc: "BizConnect is a mobile and cloud-based contact management and CRM platform designed for automated lead assignment, card scanning, and sales follow-ups.",
    date: "07 Sept 2026",
    status: "planning",
    img: svgBizConnect,
    tasks: 34,
    completed: 8
  },
  {
    num: "04",
    name: "CrezzLe",
    desc: "Mobile app for seamless, QR-code based document printing at nearb...",
    fullDesc: "Mobile app for seamless, QR-code based document printing at nearby print hubs with instant payment and zero-queue pickup.",
    date: "19 Mar 2025",
    status: "completed",
    img: svgCrezzle,
    tasks: 15,
    completed: 15
  },
  {
    num: "05",
    name: "Tap For Meal",
    desc: "Self-service food ordering and automatic billing for modern restaurant...",
    fullDesc: "Self-service food ordering and automatic billing for modern restaurant chains, food courts, and corporate dining halls.",
    date: "15 May 2026",
    status: "in_progress",
    img: svgTapForMeal,
    tasks: 42,
    completed: 31
  },
  {
    num: "06",
    name: "KLG",
    desc: "Self-service food ordering and automatic billing for Krishna Leela Gra...",
    fullDesc: "Self-service food ordering and automatic billing for Krishna Leela Grand hospitality suites and multi-cuisine banquets.",
    date: "16 Jun 2026",
    status: "in_progress",
    img: svgKLG,
    tasks: 22,
    completed: 14
  }
];

const NAV_ITEMS = [
  { id: 'banners', name: 'Banners', icon: Layers },
  { id: 'gallery', name: 'Gallery', icon: ImageIcon },
  { id: 'blogs', name: 'Blogs', icon: FileText },
  { id: 'contacts', name: 'Contacts', icon: Users },
  { id: 'client-logos', name: 'Client Logos', icon: Building },
  { id: 'websites', name: 'Websites', icon: Globe },
  { id: 'employees', name: 'Employees', icon: Users },
  { id: 'documents', name: 'Documents Validation', icon: ShieldCheck },
  { id: 'team', name: 'Team', icon: Briefcase },
  { id: 'project-manager', name: 'Project Manager', icon: ClipboardList },
  { id: 'access', name: 'Access', icon: LayoutGrid }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('gallery');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dcs-theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Banner State
  const [bannerItems, setBannerItems] = useState([
    { id: 1, type: 'desktop', name: 'Homepage hero', img: null },
    { id: 2, type: 'mobile', name: 'Homepage hero (mobile)', img: null },
    { id: 3, type: 'desktop', name: 'Festive offer', img: null }
  ]);
  const [isBannerPanelOpen, setIsBannerPanelOpen] = useState(false);
  const [bannerFiles, setBannerFiles] = useState({ desktop: null, mobile: null });
  const bannerCounterRef = useRef(3);
  const bannerPanelRef = useRef(null);

  // Gallery State
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      name: 'Screenshot 2026-09-08 143514.png',
      date: '9/8/2026',
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      name: 'Screenshot 2026-09-08 143558.png',
      date: '9/8/2026',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      name: 'Screenshot 2026-09-08 143704.png',
      date: '9/8/2026',
      img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      name: 'Screenshot 2026-09-08 143820.png',
      date: '9/8/2026',
      img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      name: 'Screenshot 2026-09-08 143912.png',
      date: '9/8/2026',
      img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      name: 'Screenshot 2026-09-08 144005.png',
      date: '9/8/2026',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80'
    }
  ]);

  // Blog State
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'GeoTrackMee: Smarter Employee Attendance, GPS Tracking & Workforce Management',
      slug: '/geotrackmee-smarter-employee-attendance-gps-tracking-workforce-management',
      author: 'Akash G',
      role: 'Web Developer Intern',
      status: 'Draft',
      tags: [
        'GeoTrackMee',
        'employee attendance',
        'GPS tracking',
        'workforce management',
        'employee tracking',
        'patrol management',
        'field workforce',
        'employee monitoring'
      ],
      date: 'Oct 6, 2026',
      img: null
    },
    {
      id: 2,
      title: 'Your Website Looks Good, But Is It Actually Converting Visitors?',
      slug: '/your-website-looks-good-but-is-it-actually-converting-visitors',
      author: 'Akash G',
      role: 'Web Developer Intern',
      status: 'Published',
      tags: [
        'Website Design',
        'Website Development',
        'Conversion Rate',
        'Lead Generation',
        'User Experience',
        'Digital Marketing',
        'Business Website',
        'SEO'
      ],
      date: 'Sep 4, 2026',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80'
    }
  ]);
  const [blogSearch, setBlogSearch] = useState('');
  const [blogStatusFilter, setBlogStatusFilter] = useState('all');
  const [isBlogEditorOpen, setIsBlogEditorOpen] = useState(false);
  const [blogBodyTab, setBlogBodyTab] = useState('write');
  const blogBodyInputRef = useRef(null);
  const blogFeaturedFileRef = useRef(null);
  const blogBodyFileRef = useRef(null);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [blogFormData, setBlogFormData] = useState({
    title: '',
    slug: '',
    summary: '',
    body: '',
    author: 'Akash G',
    role: 'Web Developer Intern',
    status: 'Draft',
    date: 'Oct 6, 2026',
    tags: '',
    metaTitle: '',
    metaDesc: '',
    keywords: '',
    img: ''
  });

  // Contacts State
  const [contactItems, setContactItems] = useState([
    { id: 1, name: 'Thdiuir Ykcmmcpy', phone: '4588166428', email: 'o.flj.eme.42.1@gmail.com', address: 'Ocpeuedepl', reason: 'Web Development', date: 'Nov 11, 2026' },
    { id: 2, name: 'Kffwqjct Inabb', phone: '3015268977', email: 'e.si.ba.f.at2.16@gmail.com', address: 'Gbtbpbt', reason: 'Web Development', date: 'Nov 10, 2026' },
    { id: 3, name: 'Ucztlt Guemikk', phone: '8763452384', email: 'l.of.et.akiw.im1.1@gmail.com', address: 'Qymhwo', reason: 'Web Development', date: 'Nov 10, 2026' },
    { id: 4, name: 'Rohit Sharma', phone: '9876543210', email: 'rohit.sharma@gmail.com', address: 'Mumbai, MH', reason: 'Mobile App Development', date: 'Nov 09, 2026' },
    { id: 5, name: 'Ananya Deshmukh', phone: '9823456712', email: 'ananya.d@gmail.com', address: 'Pune, MH', reason: 'SEO & Digital Marketing', date: 'Nov 08, 2026' },
    { id: 6, name: 'Vikram Mehta', phone: '9123456789', email: 'vikram.m@outlook.com', address: 'Bangalore, KA', reason: 'UI/UX Redesign', date: 'Nov 08, 2026' },
    { id: 7, name: 'Pooja Hegde', phone: '9456123789', email: 'pooja.h@yahoo.com', address: 'Hyderabad, TS', reason: 'E-Commerce Website', date: 'Nov 07, 2026' },
    { id: 8, name: 'Karthik Raja', phone: '9845012345', email: 'karthik.raja@gmail.com', address: 'Chennai, TN', reason: 'Web Development', date: 'Nov 06, 2026' },
    { id: 9, name: 'Sneha Patel', phone: '9765432109', email: 'sneha.patel@gmail.com', address: 'Ahmedabad, GJ', reason: 'Custom ERP System', date: 'Nov 05, 2026' },
    { id: 10, name: 'Aditya Verma', phone: '9871234560', email: 'aditya.v@gmail.com', address: 'Delhi, DL', reason: 'Cloud Hosting & DevOps', date: 'Nov 04, 2026' },
    { id: 11, name: 'Deepak Kumar', phone: '9812345678', email: 'deepak.k@gmail.com', address: 'Noida, UP', reason: 'Web Development', date: 'Nov 03, 2026' },
    { id: 12, name: 'Meera Nair', phone: '9447123456', email: 'meera.nair@gmail.com', address: 'Kochi, KL', reason: 'Branding & Identity', date: 'Nov 02, 2026' },
    { id: 13, name: 'Rahul Sengupta', phone: '9830123456', email: 'rahul.s@gmail.com', address: 'Kolkata, WB', reason: 'Web Development', date: 'Nov 01, 2026' },
    { id: 14, name: 'Tanvi Kulkarni', phone: '9820012345', email: 'tanvi.k@gmail.com', address: 'Nagpur, MH', reason: 'Mobile App Development', date: 'Oct 30, 2026' },
    { id: 15, name: 'Suresh Iyer', phone: '9840123456', email: 'suresh.iyer@gmail.com', address: 'Coimbatore, TN', reason: 'Annual Maintenance (AMC)', date: 'Oct 28, 2026' },
    { id: 16, name: 'Bhavna Joshi', phone: '9825123456', email: 'bhavna.j@gmail.com', address: 'Surat, GJ', reason: 'Web Development', date: 'Oct 26, 2026' }
  ]);
  const [contactSearch, setContactSearch] = useState('');
  const [contactPage, setContactPage] = useState(1);
  const CONTACT_PAGE_SIZE = 8;

  // Client Logos State
  const [clientLogos, setClientLogos] = useState(INITIAL_CLIENT_LOGOS);
  const [isLogoFormOpen, setIsLogoFormOpen] = useState(false);
  const [editingLogoId, setEditingLogoId] = useState(null);
  const [logoCompanyName, setLogoCompanyName] = useState('');
  const [selectedLogoFile, setSelectedLogoFile] = useState(null);
  const [selectedLogoPreview, setSelectedLogoPreview] = useState(null);
  const [logoUploadProgress, setLogoUploadProgress] = useState(null);
  const [logoSuccessAlert, setLogoSuccessAlert] = useState(null);
  const logoSuccessTimerRef = useRef(null);
  const logoFileInputRef = useRef(null);

  // Websites State
  const [websites, setWebsites] = useState(INITIAL_WEBSITES);
  const [isWebsiteFormOpen, setIsWebsiteFormOpen] = useState(false);
  const [editingWebsiteId, setEditingWebsiteId] = useState(null);
  const [websiteTitle, setWebsiteTitle] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedWebsiteFile, setSelectedWebsiteFile] = useState(null);
  const [selectedWebsitePreview, setSelectedWebsitePreview] = useState(null);
  const [websiteUploadProgress, setWebsiteUploadProgress] = useState(null);
  const [websiteSuccessAlert, setWebsiteSuccessAlert] = useState(null);
  const websiteSuccessTimerRef = useRef(null);
  const websiteFileInputRef = useRef(null);

  // Employee Management State
  const [empSection, setEmpSection] = useState('apps'); // 'apps', 'cand', 'rel', 'team'
  const [empSearch, setEmpSearch] = useState('');
  const [empRoleFilter, setEmpRoleFilter] = useState('All');
  const [empStatusFilter, setEmpStatusFilter] = useState('All');
  const [applicants, setApplicants] = useState(INITIAL_APPLICANTS);
  const [viewingApplicant, setViewingApplicant] = useState(null);
  const [schedulingApplicant, setSchedulingApplicant] = useState(null);
  const [interviewMode, setInterviewMode] = useState(''); // 'offline' | 'online'
  const [interviewAddress, setInterviewAddress] = useState('1st floor, 88, KR Defense Colony, Cheemasandra, Bengaluru, Karnataka, India - 560049');
  const [interviewMeetingLink, setInterviewMeetingLink] = useState('');
  const [interviewDateTime, setInterviewDateTime] = useState('');
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberRole, setNewMemberRole] = useState('Employee');
  const [newMemberPos, setNewMemberPos] = useState('');
  const [newMemberEmail, setNewMemberEmail] = useState('');
  const [newMemberPhone, setNewMemberPhone] = useState('');
  const [newMemberExp, setNewMemberExp] = useState('0-2 yrs');

  // Documents Validation State
  const [docCandidates, setDocCandidates] = useState(INITIAL_DOC_CANDIDATES);
  const [docFilterTab, setDocFilterTab] = useState('all');
  const [docSearchQuery, setDocSearchQuery] = useState('');
  const [docCategory, setDocCategory] = useState('all');
  const [viewingDocCandidate, setViewingDocCandidate] = useState(null);
  const [previewingDoc, setPreviewingDoc] = useState(null);

  // Team Management State
  const [teamMembers, setTeamMembers] = useState(INITIAL_TEAM_MEMBERS);
  const [teamSearchQuery, setTeamSearchQuery] = useState('');
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [memberForm, setMemberForm] = useState({
    name: '',
    role: 'MANAGING DIRECTOR',
    bio: '',
    section: 'minds',
    img: svgPadmavathi
  });
  const [deleteMemberTarget, setDeleteMemberTarget] = useState(null);

  // Project Manager State
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [projectSearchQuery, setProjectSearchQuery] = useState('');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('all');
  const [isBoardView, setIsBoardView] = useState(false);
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [viewingProjectDetail, setViewingProjectDetail] = useState(null);
  const [deleteProjectTarget, setDeleteProjectTarget] = useState(null);
  const [projectForm, setProjectForm] = useState({
    name: '',
    desc: '',
    date: '16 Aug 2024',
    status: 'in_progress',
    img: svgDCS
  });
  const [openProjectMenuIndex, setOpenProjectMenuIndex] = useState(null);
  // Access Management State
  const [accessModalService, setAccessModalService] = useState(null);
  const [accessMember, setAccessMember] = useState('Padmavathi H M');
  const [accessRole, setAccessRole] = useState('Developer');
  const [accessEnv, setAccessEnv] = useState('All Environments');
  // Common UI State
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [previewItem, setPreviewItem] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null); // { type: 'banner'|'gallery', id }
  const [openCardId, setOpenCardId] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest('#gallery-list article') && !e.target.closest('#confirm') && !e.target.closest('#preview')) {
        setOpenCardId(null);
      }
    };
    window.addEventListener('click', handleOutside);
    return () => window.removeEventListener('click', handleOutside);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    localStorage.setItem('dcs-theme', theme);
  }, [theme]);

  const showToast = (msg) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const galleryFileInputRef = useRef(null);
  const [uploadProgress, setUploadProgress] = useState(null); // null | number
  const [uploadSuccessMessage, setUploadSuccessMessage] = useState(null);
  const successTimeoutRef = useRef(null);

  // Gallery Direct Upload Action with Progress Simulation
  const handleDirectGalleryUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    setUploadSuccessMessage(null);
    setUploadProgress(0);

    let currentPercent = 0;
    const interval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 20) + 15;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(interval);
        setUploadProgress(100);

        setTimeout(() => {
          const now = new Date();
          const dateStr = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
          const newItems = files.map((file, idx) => ({
            id: Date.now() + idx,
            name: file.name || `Screenshot ${dateStr}.png`,
            date: dateStr,
            img: URL.createObjectURL(file)
          }));

          setGalleryItems((prev) => [...newItems, ...prev]);
          setUploadProgress(null);
          setUploadSuccessMessage(
            files.length > 1 ? `${files.length} images uploaded successfully` : 'Image uploaded successfully'
          );

          successTimeoutRef.current = setTimeout(() => {
            setUploadSuccessMessage(null);
          }, 5000);
        }, 300);
      } else {
        setUploadProgress(currentPercent);
      }
    }, 160);

    e.target.value = '';
  };

  // Banner Actions
  const handleOpenBannerPanel = () => {
    setBannerFiles({ desktop: null, mobile: null });
    setIsBannerPanelOpen(true);
    setTimeout(() => {
      bannerPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleCloseBannerPanel = () => {
    setIsBannerPanelOpen(false);
    setBannerFiles({ desktop: null, mobile: null });
  };

  const handleBannerFilePick = (type, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast('File size must be under 5 MB');
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setBannerFiles((prev) => ({ ...prev, [type]: previewUrl }));
  };

  const handleUploadBannerSet = () => {
    if (!bannerFiles.desktop && !bannerFiles.mobile) return;
    bannerCounterRef.current += 1;
    const count = bannerCounterRef.current;
    const now = Date.now();
    const setName = `Banner ${count}`;
    const newItems = [];
    if (bannerFiles.desktop && bannerFiles.mobile) {
      newItems.push(
        { id: now, type: 'desktop', name: setName, img: bannerFiles.desktop },
        { id: now + 1, type: 'mobile', name: `${setName} (mobile)`, img: bannerFiles.mobile }
      );
    } else if (bannerFiles.desktop) {
      newItems.push({ id: now, type: 'desktop', name: `${setName} (desktop)`, img: bannerFiles.desktop });
    } else if (bannerFiles.mobile) {
      newItems.push({ id: now, type: 'mobile', name: `${setName} (mobile)`, img: bannerFiles.mobile });
    }
    setBannerItems((prev) => [...newItems, ...prev]);
    handleCloseBannerPanel();
    showToast('Banner added successfully');
  };

  // Blog Actions
  const handleOpenWriteBlog = () => {
    setEditingBlogId(null);
    setBlogFormData({
      title: '',
      slug: '',
      summary: '',
      body: '',
      author: 'Akash G',
      role: 'Web Developer Intern',
      status: 'Draft',
      date: 'Oct 6, 2026',
      tags: '',
      metaTitle: '',
      metaDesc: '',
      keywords: '',
      img: ''
    });
    setBlogBodyTab('write');
    setIsBlogEditorOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditBlog = (post) => {
    setEditingBlogId(post.id);
    setBlogFormData({
      title: post.title || '',
      slug: post.slug || '',
      summary: post.summary || '',
      body: post.body || '',
      author: post.author || 'Akash G',
      role: post.role || 'Web Developer Intern',
      status: post.status || 'Draft',
      date: post.date || 'Oct 6, 2026',
      tags: (post.tags || []).join(', '),
      metaTitle: post.metaTitle || post.title || '',
      metaDesc: post.metaDesc || post.summary || '',
      keywords: post.keywords || '',
      img: post.img || ''
    });
    setBlogBodyTab('write');
    setIsBlogEditorOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseBlogEditor = () => {
    setIsBlogEditorOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveBlog = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const title = blogFormData.title.trim();
    if (!title) {
      showToast('Please enter a blog title');
      return;
    }

    const tagList = blogFormData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const slug =
      blogFormData.slug.trim() ||
      '/' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const now = new Date();
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const dateStr = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

    if (editingBlogId) {
      setBlogPosts((prev) =>
        prev.map((item) =>
          item.id === editingBlogId
            ? {
                ...item,
                title,
                slug,
                summary: blogFormData.summary,
                body: blogFormData.body,
                author: blogFormData.author,
                role: blogFormData.role,
                status: blogFormData.status,
                date: blogFormData.date || dateStr,
                tags: tagList,
                metaTitle: blogFormData.metaTitle || title,
                metaDesc: blogFormData.metaDesc || blogFormData.summary,
                keywords: blogFormData.keywords,
                img: blogFormData.img || null
              }
            : item
        )
      );
      showToast('Article updated successfully');
    } else {
      const newPost = {
        id: Date.now(),
        title,
        slug,
        summary: blogFormData.summary,
        body: blogFormData.body,
        author: blogFormData.author || 'Akash G',
        role: blogFormData.role || 'Web Developer Intern',
        status: blogFormData.status || 'Draft',
        date: dateStr,
        tags: tagList,
        metaTitle: blogFormData.metaTitle || title,
        metaDesc: blogFormData.metaDesc || blogFormData.summary,
        keywords: blogFormData.keywords,
        img: blogFormData.img || null
      };
      setBlogPosts((prev) => [newPost, ...prev]);
      showToast('New blog article published');
    }
    setIsBlogEditorOpen(false);
  };

  const formatBodyMarkdown = (type) => {
    const textarea = blogBodyInputRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentBody = blogFormData.body || '';
    const sel = currentBody.substring(start, end);
    let insert = '';

    switch (type) {
      case 'bold':
        insert = `**${sel || 'bold text'}**`;
        break;
      case 'italic':
        insert = `*${sel || 'italic text'}*`;
        break;
      case 'heading':
        insert = `## ${sel || 'Heading'}\n`;
        break;
      case 'code':
        insert = `\`${sel || 'code'}\``;
        break;
      case 'link':
        insert = `[${sel || 'Link Title'}](https://example.com)`;
        break;
      case 'image':
        insert = `![${sel || 'Image Alt'}](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800)`;
        break;
      default:
        break;
    }

    const newBody = currentBody.substring(0, start) + insert + currentBody.substring(end);
    setBlogFormData((prev) => ({ ...prev, body: newBody }));
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + insert.length, start + insert.length);
    }, 0);
  };

  const handleFeaturedImagePick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast('File size must be under 5 MB');
      return;
    }
    const previewUrl = URL.createObjectURL(file);
    setBlogFormData((prev) => ({ ...prev, img: previewUrl }));
    showToast('Featured image uploaded');
  };

  const handleBodyImagePick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const previewUrl = URL.createObjectURL(file);
    const textarea = blogBodyInputRef.current;
    const start = textarea ? textarea.selectionStart : (blogFormData.body || '').length;
    const textToInsert = `\n![${file.name}](${previewUrl})\n`;
    const currentBody = blogFormData.body || '';
    const newBody = currentBody.substring(0, start) + textToInsert + currentBody.substring(start);
    setBlogFormData((prev) => ({ ...prev, body: newBody }));
    showToast('Image inserted into body');
    e.target.value = '';
  };

  const handleLogoFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedLogoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setSelectedLogoPreview(ev.target.result);
      if (!logoCompanyName.trim()) {
        const raw = file.name.replace(/\.[^/.]+$/, '');
        setLogoCompanyName(raw.charAt(0).toUpperCase() + raw.slice(1));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleEditLogo = (item) => {
    setEditingLogoId(item.id);
    setLogoCompanyName(item.title);
    setSelectedLogoPreview(item.img);
    setSelectedLogoFile({ name: item.file, size: 50 * 1024 });
    setIsLogoFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitClientLogoForm = () => {
    if (!logoCompanyName.trim()) {
      showToast('Please enter company name');
      return;
    }
    if (!selectedLogoPreview || !selectedLogoFile) {
      showToast('Please select a logo image');
      return;
    }
    setLogoUploadProgress(0);
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 25) + 20;
      if (percent >= 100) {
        percent = 100;
        clearInterval(interval);
        setLogoUploadProgress(100);
        setTimeout(() => {
          const today = new Date();
          const dateStr = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
          if (editingLogoId) {
            setClientLogos((prev) =>
              prev.map((item) =>
                item.id === editingLogoId
                  ? {
                      ...item,
                      title: logoCompanyName.trim(),
                      file: selectedLogoFile?.name || item.file,
                      img: selectedLogoPreview
                    }
                  : item
              )
            );
            setLogoSuccessAlert('Client logo updated successfully');
          } else {
            setClientLogos((prev) => [
              {
                id: Date.now(),
                title: logoCompanyName.trim(),
                file: selectedLogoFile.name,
                date: dateStr,
                img: selectedLogoPreview
              },
              ...prev
            ]);
            setLogoSuccessAlert('Client logo uploaded successfully');
          }
          setLogoUploadProgress(null);
          setIsLogoFormOpen(false);
          setEditingLogoId(null);
          setLogoCompanyName('');
          setSelectedLogoFile(null);
          setSelectedLogoPreview(null);
          if (logoFileInputRef.current) logoFileInputRef.current.value = '';
          if (logoSuccessTimerRef.current) clearTimeout(logoSuccessTimerRef.current);
          logoSuccessTimerRef.current = setTimeout(() => setLogoSuccessAlert(null), 5000);
        }, 300);
      } else {
        setLogoUploadProgress(percent);
      }
    }, 120);
  };

  const handleWebsiteFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedWebsiteFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setSelectedWebsitePreview(ev.target.result);
      if (!websiteTitle.trim()) {
        const raw = file.name.replace(/\.[^/.]+$/, '');
        setWebsiteTitle(raw.charAt(0).toUpperCase() + raw.slice(1));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleEditWebsite = (item) => {
    setEditingWebsiteId(item.id);
    setWebsiteTitle(item.title);
    setWebsiteUrl(item.url);
    setSelectedWebsitePreview(item.img);
    setSelectedWebsiteFile({ name: item.title + '.png', size: 120 * 1024 });
    setIsWebsiteFormOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const submitWebsiteForm = () => {
    if (!websiteTitle.trim()) {
      showToast('Please enter website title');
      return;
    }
    if (!websiteUrl.trim()) {
      showToast('Please enter website URL');
      return;
    }
    if (!selectedWebsitePreview || !selectedWebsiteFile) {
      showToast('Please select a website image');
      return;
    }
    setWebsiteUploadProgress(0);
    let percent = 0;
    const interval = setInterval(() => {
      percent += Math.floor(Math.random() * 25) + 20;
      if (percent >= 100) {
        percent = 100;
        clearInterval(interval);
        setWebsiteUploadProgress(100);
        setTimeout(() => {
          const today = new Date();
          const dateStr = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
          if (editingWebsiteId) {
            setWebsites((prev) =>
              prev.map((item) =>
                item.id === editingWebsiteId
                  ? {
                      ...item,
                      title: websiteTitle.trim(),
                      url: websiteUrl.trim(),
                      img: selectedWebsitePreview
                    }
                  : item
              )
            );
            setWebsiteSuccessAlert('Website updated successfully');
          } else {
            setWebsites((prev) => [
              {
                id: Date.now(),
                title: websiteTitle.trim(),
                url: websiteUrl.trim(),
                date: dateStr,
                img: selectedWebsitePreview
              },
              ...prev
            ]);
            setWebsiteSuccessAlert('Website added successfully');
          }
          setWebsiteUploadProgress(null);
          setIsWebsiteFormOpen(false);
          setEditingWebsiteId(null);
          setWebsiteTitle('');
          setWebsiteUrl('');
          setSelectedWebsiteFile(null);
          setSelectedWebsitePreview(null);
          if (websiteFileInputRef.current) websiteFileInputRef.current.value = '';
          if (websiteSuccessTimerRef.current) clearTimeout(websiteSuccessTimerRef.current);
          websiteSuccessTimerRef.current = setTimeout(() => setWebsiteSuccessAlert(null), 5000);
        }, 300);
      } else {
        setWebsiteUploadProgress(percent);
      }
    }, 120);
  };

  const confirmDelete = () => {
    if (!deleteConfirm) return;
    if (deleteConfirm.type === 'banner') {
      setBannerItems((prev) => prev.filter((item) => item.id !== deleteConfirm.id));
      showToast('Banner deleted');
    } else if (deleteConfirm.type === 'blog') {
      setBlogPosts((prev) => prev.filter((item) => item.id !== deleteConfirm.id));
      showToast('Article deleted');
    } else if (deleteConfirm.type === 'contact') {
      setContactItems((prev) => prev.filter((item) => item.id !== deleteConfirm.id));
      showToast('Contact submission deleted');
    } else if (deleteConfirm.type === 'logo') {
      setClientLogos((prev) => prev.filter((item) => item.id !== deleteConfirm.id));
      showToast('Client logo deleted');
    } else if (deleteConfirm.type === 'website') {
      setWebsites((prev) => prev.filter((item) => item.id !== deleteConfirm.id));
      showToast('Website deleted');
    } else {
      setGalleryItems((prev) => prev.filter((item) => item.id !== deleteConfirm.id));
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
      setUploadSuccessMessage('Image deleted successfully');
      successTimeoutRef.current = setTimeout(() => {
        setUploadSuccessMessage(null);
      }, 5000);
    }
    setDeleteConfirm(null);
  };

  return (
    <div className="min-h-screen flex bg-[var(--bg)] text-[var(--tx)]">
      {/* Desktop Persistent Left Sidebar */}
      <aside className={`hidden lg:flex flex-col border-r bd h-screen sticky top-0 bg-white dark:bg-[#141a25] z-30 shrink-0 transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? 'w-[54px]' : 'w-[220px]'
      }`}>
        <div className={`sidebar-header-box flex items-center justify-center ${isSidebarCollapsed ? 'py-5 px-1' : 'pt-5 pb-5 px-3'}`}>
          {isSidebarCollapsed ? (
            <img src="/logo-mini.png" alt="DCS" className="w-7 h-7 object-contain" />
          ) : (
            <img src="/logo.png" alt="Dev Creations and Solutions" className="h-[54px] w-auto max-w-[185px] object-contain" />
          )}
        </div>

        <nav className={`flex-1 overflow-y-auto space-y-1 ${isSidebarCollapsed ? 'px-1' : 'px-2.5 py-2'}`}>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                title={item.name}
                onClick={() => {
                  if (item.id === 'banners' || item.id === 'gallery' || item.id === 'blogs' || item.id === 'contacts' || item.id === 'client-logos' || item.id === 'websites' || item.id === 'employees' || item.id === 'documents' || item.id === 'team' || item.id === 'project-manager' || item.id === 'access') {
                    setActiveTab(item.id);
                  } else {
                    showToast(`${item.name} section`);
                  }
                }}
                className={`flex items-center h-9 rounded-lg text-[12.5px] transition cursor-pointer ${
                  isSidebarCollapsed ? 'w-9 justify-center px-0 mx-auto' : 'w-full gap-2.5 px-2.5 text-left'
                } ${
                  isActive
                    ? 'border border-orange-400/90 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'font-medium text-[var(--tx)] hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'
                  }`}
                />
                {!isSidebarCollapsed && <span>{item.name}</span>}
              </button>
            );
          })}
        </nav>

        <div className="py-3 border-t bd text-center">
          {isSidebarCollapsed ? (
            <p className="text-[10px] mu font-semibold">v1.0</p>
          ) : (
            <p className="text-[11px] mu">DCS Admin v1.0.0</p>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-3.5 sm:px-6 h-14 border-b bd bg-white/85 dark:bg-[#141a25]/85 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsNavOpen((prev) => !prev);
                } else {
                  setIsSidebarCollapsed((prev) => !prev);
                }
              }}
              className="btn w-9 h-9 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 touch-press transition"
              aria-label="Toggle sidebar"
              title="Toggle sidebar"
            >
              <Menu className="w-4.5 h-4.5 sm:w-4 sm:h-4" />
            </button>
            <span className="text-[13.5px] font-bold tracking-tight">Admin Dashboard</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="hidden sm:flex btn w-9 h-9 sm:w-8 sm:h-8 rounded-xl items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 touch-press transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => showToast('Logout clicked')}
              className="h-8.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 transition text-white text-[12px] font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-sm touch-press"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl w-full mx-auto px-3.5 sm:px-6 py-5 flex-1 pb-24 lg:pb-8">
          {/* ============================================================== */}
          {/* TAB 1: GALLERY MANAGEMENT                                      */}
          {/* ============================================================== */}
          {activeTab === 'gallery' && (
            <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25]">
              {/* Header Row: Title & Upload Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5">
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-3.5">
                  <div
                    className="w-11 h-11 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ff9a3c, #ff7a45)' }}
                  >
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-bold tracking-tight text-[var(--tx)]">Gallery Management</h1>
                    <p className="text-[11.5px] text-[#64748b] mt-0.5 max-w-sm sm:max-w-none">
                      Upload and manage gallery images for your website
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto sm:self-center">
                  <input
                    ref={galleryFileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleDirectGalleryUpload}
                  />
                  <button
                    onClick={() => galleryFileInputRef.current?.click()}
                    disabled={uploadProgress !== null}
                    className={`w-full sm:w-auto h-9 px-4 rounded-lg font-semibold text-[12px] inline-flex items-center justify-center gap-1.5 transition ${
                      uploadProgress !== null
                        ? 'bg-slate-300 dark:bg-slate-700 text-white/90 cursor-not-allowed shadow-none'
                        : 'text-white shadow-sm hover:opacity-95 cursor-pointer'
                    }`}
                    style={
                      uploadProgress !== null
                        ? { background: '#cbd5e1', boxShadow: 'none' }
                        : { background: '#ea580c', boxShadow: '0 6px 16px -4px rgba(234, 88, 12, 0.5)' }
                    }
                  >
                    <span className="text-sm font-bold leading-none">+</span>
                    {uploadProgress !== null ? 'Uploading...' : 'Upload Images'}
                  </button>
                </div>
              </div>

              {/* Upload Progress Card (shown while uploading) */}
              {uploadProgress !== null && (
                <div className="card rounded-xl p-3.5 sm:p-4 border-l-4 border-l-[#ea580c] shadow-xs mb-5 bg-white dark:bg-[#141a25] flex items-center gap-3.5 animate-fade-in">
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ea580c] rounded-full transition-all duration-150"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <span className="text-[11.5px] font-semibold text-slate-700 dark:text-slate-300 shrink-0">
                    Uploading... {uploadProgress}%
                  </span>
                </div>
              )}

              {/* Upload Success Alert Popup (shown when finished) */}
              {uploadSuccessMessage && (
                <div className="rounded-xl p-3.5 mb-5 border-l-4 border-l-emerald-500 border border-emerald-300 dark:border-emerald-700/60 bg-[#edfbf2] dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 flex items-center justify-between text-[12px] font-medium shadow-xs animate-fade-in">
                  <span>{uploadSuccessMessage}</span>
                  <button
                    type="button"
                    onClick={() => setUploadSuccessMessage(null)}
                    className="w-5 h-5 rounded-full bg-emerald-200/60 hover:bg-emerald-300/80 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 flex items-center justify-center transition cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Section Card: Gallery Images (Count) */}
              <div className="card rounded-xl p-3.5 sm:p-4 border-l-4 border-l-[#ea580c] shadow-xs mb-5 bg-white dark:bg-[#141a25]">
                <div className="flex items-center gap-2 text-[var(--tx)]">
                  <ImageIcon className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <h2 className="text-[13.5px] sm:text-[14px] font-bold tracking-tight">
                    Gallery Images ({galleryItems.length})
                  </h2>
                </div>
                <p className="text-[11px] sm:text-[11.5px] text-[#64748b] mt-0.5">
                  Click on any image to preview or use the action buttons to manage your gallery
                </p>
              </div>

              {/* 3-Column Responsive Grid */}
              <div id="gallery-list" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item) => {
                  const isSelected = openCardId === item.id;
                  return (
                    <article
                      key={item.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenCardId(isSelected ? null : item.id);
                      }}
                      className={`card rounded-2xl overflow-hidden soft flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                        isSelected ? 'active-card' : 'border bd hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="gallery-card relative aspect-[16/11] flex items-center justify-center overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Action Overlay */}
                        <div className="ov absolute inset-0 flex items-center justify-center gap-3.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setPreviewItem({ img: item.img, name: item.name });
                            }}
                            className="rb"
                            title="Preview"
                          >
                            <Eye className="w-5 h-5 text-slate-800" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setDeleteConfirm({ type: 'gallery', id: item.id });
                            }}
                            className="rb"
                            title="Delete"
                          >
                            <Trash2 className="w-5 h-5 text-slate-800" />
                          </button>
                        </div>
                      </div>

                      <div className="px-3.5 py-2.5 bg-white dark:bg-[#141a25] border-t bd">
                        <h3 className="text-[12px] sm:text-[12.5px] font-semibold truncate text-[var(--tx)]">{item.name}</h3>
                        <p className="text-[10.5px] mu mt-0.5">Unknown size{item.date}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: BANNER MANAGEMENT                                       */}
          {/* ============================================================== */}
          {activeTab === 'banners' && (
            <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25]">
              {/* Header Row: Title & Upload Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5">
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-3.5">
                  <div
                    className="w-11 h-11 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ff9a3c, #ff7a45)' }}
                  >
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-bold tracking-tight text-[var(--tx)]">Banner Management</h1>
                    <p className="text-[11.5px] text-[#64748b] mt-0.5 max-w-sm sm:max-w-none">
                      Upload and manage banner images for your website (Desktop + Mobile versions required)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto sm:self-center">
                  {isBannerPanelOpen && (
                    <button
                      type="button"
                      onClick={handleCloseBannerPanel}
                      className="flex-1 sm:flex-initial h-9 px-4 rounded-lg font-semibold text-[12px] inline-flex items-center justify-center gap-1.5 transition cursor-pointer text-white bg-slate-800 hover:bg-slate-900 shadow-sm active:scale-95"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back
                    </button>
                  )}

                  <button
                    onClick={() => {
                      if (isBannerPanelOpen) handleCloseBannerPanel();
                      else handleOpenBannerPanel();
                    }}
                    disabled={isBannerPanelOpen}
                    className={`w-full sm:w-auto h-9 px-4 rounded-lg font-semibold text-[12px] inline-flex items-center justify-center gap-1.5 transition cursor-pointer ${
                      isBannerPanelOpen
                        ? 'bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-500 shadow-none cursor-not-allowed'
                        : 'text-white shadow-sm hover:opacity-95'
                    }`}
                    style={
                      isBannerPanelOpen
                        ? { background: '#cbd5e1', color: '#94a3b8', boxShadow: 'none' }
                        : { background: '#ea580c', boxShadow: '0 6px 16px -4px rgba(234, 88, 12, 0.5)' }
                    }
                  >
                    <span className="text-sm font-bold leading-none">+</span>
                    Upload Banner
                  </button>
                </div>
              </div>

              {/* Upload Banner Set Panel */}
              {isBannerPanelOpen && (
                <section
                  ref={bannerPanelRef}
                  className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#141a25] shadow-sm mb-6 animate-fade-in"
                >
                  <div
                    className="text-center text-white px-5 py-3"
                    style={{ background: 'linear-gradient(90deg, #f26a0f, #e05a00)' }}
                  >
                    <p className="font-bold text-[13px] inline-flex items-center justify-center gap-1.5">
                      <Upload className="w-4 h-4" />
                      Upload New Banner Set
                    </p>
                    <p className="text-[11px] opacity-90 mt-0.5">
                      Both desktop and mobile images are required to create a complete banner set
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-2 gap-5 bg-white dark:bg-[#141a25]">
                    {/* Desktop Upload Zone */}
                    <div
                      className="rounded-2xl p-4 sm:p-5 border-2 flex flex-col justify-between"
                      style={{ borderColor: '#fbbf24', background: 'var(--tile)' }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-bold text-[12px] inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-100">
                            <Monitor className="w-4 h-4" />
                            DESKTOP IMAGE
                          </span>
                          {bannerFiles.desktop ? (
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full inline-flex items-center gap-1 bg-emerald-500 text-white">
                                <Check className="w-3 h-3 stroke-[3]" /> Added
                              </span>
                              <button
                                type="button"
                                onClick={() => setBannerFiles((prev) => ({ ...prev, desktop: null }))}
                                className="w-5 h-5 rounded-full bg-slate-200 hover:bg-red-600 hover:text-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 transition flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                                title="Remove image"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-400 text-black">
                              ● Required
                            </span>
                          )}
                        </div>

                        <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/50 flex flex-col items-center justify-center text-center overflow-hidden mb-4 h-[200px]">
                          {bannerFiles.desktop ? (
                            <img
                              src={bannerFiles.desktop}
                              className="w-full h-full object-cover rounded-lg"
                              alt="Desktop Preview"
                            />
                          ) : (
                            <>
                              <Monitor className="w-9 h-9 mu mb-2 opacity-60" />
                              <p className="text-[12px] font-medium text-slate-700 dark:text-slate-200">
                                Click below to select desktop image
                              </p>
                              <p className="text-[10.5px] mu mt-0.5">Recommended: 1920×1080px</p>
                            </>
                          )}
                        </div>
                      </div>

                      <label
                        className="flex items-center justify-center gap-1.5 h-9 rounded-lg text-white text-[12px] font-semibold cursor-pointer transition hover:opacity-95 shadow-sm"
                        style={{ background: '#ea580c' }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleBannerFilePick('desktop', e)}
                        />
                        <Upload className="w-3.5 h-3.5" />
                        <span>{bannerFiles.desktop ? 'Change Desktop Image' : 'Select Desktop Image'}</span>
                      </label>
                    </div>

                    {/* Mobile Upload Zone */}
                    <div
                      className="rounded-2xl p-4 sm:p-5 border-2 flex flex-col justify-between"
                      style={{ borderColor: '#fbbf24', background: 'var(--tile)' }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-bold text-[12px] inline-flex items-center gap-1.5 text-slate-800 dark:text-slate-100">
                            <Smartphone className="w-4 h-4" />
                            MOBILE IMAGE
                          </span>
                          {bannerFiles.mobile ? (
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full inline-flex items-center gap-1 bg-emerald-500 text-white">
                                <Check className="w-3 h-3 stroke-[3]" /> Added
                              </span>
                              <button
                                type="button"
                                onClick={() => setBannerFiles((prev) => ({ ...prev, mobile: null }))}
                                className="w-5 h-5 rounded-full bg-slate-200 hover:bg-red-600 hover:text-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 transition flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                                title="Remove image"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-400 text-black">
                              ● Required
                            </span>
                          )}
                        </div>

                        <div className="rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-900/50 flex flex-col items-center justify-center text-center overflow-hidden mb-4 h-[200px]">
                          {bannerFiles.mobile ? (
                            <img
                              src={bannerFiles.mobile}
                              className="w-full h-full object-contain rounded-lg"
                              alt="Mobile Preview"
                            />
                          ) : (
                            <>
                              <Smartphone className="w-9 h-9 mu mb-2 opacity-60" />
                              <p className="text-[12px] font-medium text-slate-700 dark:text-slate-200">
                                Click below to select mobile image
                              </p>
                              <p className="text-[10.5px] mu mt-0.5">Recommended: 768×1024px</p>
                            </>
                          )}
                        </div>
                      </div>

                      <label
                        className="flex items-center justify-center gap-1.5 h-9 rounded-lg text-white text-[12px] font-semibold cursor-pointer transition hover:opacity-95 shadow-sm"
                        style={{ background: '#ea580c' }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleBannerFilePick('mobile', e)}
                        />
                        <Upload className="w-3.5 h-3.5" />
                        <span>{bannerFiles.mobile ? 'Change Mobile Image' : 'Select Mobile Image'}</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t bd bg-white dark:bg-[#141a25]">
                    <button
                      type="button"
                      onClick={handleCloseBannerPanel}
                      className="w-full h-9 rounded-lg font-semibold text-[12px] text-white bg-slate-400 hover:bg-slate-500 transition cursor-pointer flex items-center justify-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleUploadBannerSet}
                      disabled={!bannerFiles.desktop && !bannerFiles.mobile}
                      className={`w-full h-9 rounded-lg font-bold inline-flex items-center justify-center gap-1.5 transition text-[12px] ${
                        bannerFiles.desktop || bannerFiles.mobile
                          ? 'text-white shadow-md shadow-orange-600/30 cursor-pointer hover:opacity-95'
                          : 'text-white/70 opacity-40 cursor-not-allowed'
                      }`}
                      style={{ background: '#ea580c' }}
                    >
                      <Upload className="w-3.5 h-3.5" />
                      Upload Banner Set
                    </button>
                  </div>
                </section>
              )}

              {/* Section Card: Existing Banners */}
              <div className="card rounded-xl p-3.5 sm:p-4 border-l-4 border-l-[#ea580c] shadow-xs mb-5 bg-white dark:bg-[#141a25]">
                <div className="flex items-center gap-2 text-[var(--tx)]">
                  <Layers className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <h2 className="text-[13.5px] sm:text-[14px] font-bold tracking-tight">
                    Existing Banner Images ({bannerItems.length})
                  </h2>
                </div>
                <p className="text-[11px] sm:text-[11.5px] text-[#64748b] mt-0.5">
                  Click on any banner to preview or use the action buttons to manage your banners
                </p>
              </div>

              {/* Banner List */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bannerItems.map((item) => (
                  <article key={item.id} className="card rounded-2xl overflow-hidden soft flex flex-col justify-between group">
                    <div
                      className={`relative flex items-center justify-center overflow-hidden cursor-pointer ${
                        item.type === 'desktop' ? 'aspect-[12/5]' : 'aspect-[4/5] max-h-[380px]'
                      }`}
                      style={{ background: 'var(--tile)' }}
                      onClick={() => setOpenCardId(openCardId === item.id ? null : item.id)}
                    >
                      {item.img ? (
                        <img
                          src={item.img}
                          alt={item.name}
                          className={`w-full h-full ${item.type === 'desktop' ? 'object-cover' : 'object-contain'}`}
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center p-6 text-center text-[#ea580c]">
                          <ImageIcon className="w-12 h-12 opacity-75 mb-2" />
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                            {item.type} Banner
                          </span>
                        </div>
                      )}

                      {/* Top Right Buttons */}
                      <div className="absolute right-3 top-3 flex gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPreviewItem(item);
                          }}
                          className="inline-flex items-center gap-1 h-7 px-2.5 rounded-lg text-[11px] font-semibold text-white shadow bg-gray-900/90 hover:bg-gray-900 transition cursor-pointer"
                        >
                          <Eye className="w-3 h-3" />
                          Preview
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeleteConfirm({ type: 'banner', id: item.id });
                          }}
                          className="inline-flex items-center gap-1 h-7 px-2.5 rounded-lg text-[11px] font-semibold text-white shadow bg-red-600 hover:bg-red-700 transition cursor-pointer"
                        >
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </div>

                    <div className="px-3.5 py-2.5 bg-white dark:bg-[#141a25] border-t bd flex items-center justify-between">
                      <div>
                        <h3 className="text-[12px] sm:text-[12.5px] font-semibold truncate text-[var(--tx)]">{item.name}</h3>
                        <p className="text-[10.5px] mu capitalize">{item.type} banner</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium capitalize">
                        {item.type}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: BLOG & ARTICLE MANAGEMENT                               */}
          {/* ============================================================== */}
          {/* TAB 3: BLOG MANAGEMENT                                         */}
          {/* ============================================================== */}
          {activeTab === 'blogs' && !isBlogEditorOpen && (
            <div className="space-y-4 sm:space-y-5 animate-fade-in">
              {/* Header Card */}
              <div className="card rounded-2xl p-4 sm:p-6 soft bg-white dark:bg-[#141a25]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h1 className="text-[16px] sm:text-[17px] font-bold tracking-tight text-[var(--tx)]">
                        Blog & Article Management
                      </h1>
                    </div>
                    <p className="text-[11.5px] text-[#64748b] mt-1 sm:mt-0.5">
                      Write, optimize SEO, and publish blog articles for your company website
                    </p>
                  </div>
                  <button
                    onClick={handleOpenWriteBlog}
                    className="w-full sm:w-auto h-10 sm:h-9 px-4 rounded-xl sm:rounded-lg font-semibold text-[13px] sm:text-[12px] text-white bg-[#2563eb] hover:bg-blue-700 transition inline-flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span className="text-base font-bold leading-none">+</span>
                    Write Blog Post
                  </button>
                </div>
              </div>

              {/* Search & Status Filter Card */}
              <div className="card rounded-2xl p-3 sm:p-4 soft bg-white dark:bg-[#141a25]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:max-w-md">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                      <Search className="w-4 h-4" />
                    </span>
                    <input
                      type="text"
                      value={blogSearch}
                      onChange={(e) => setBlogSearch(e.target.value)}
                      placeholder="Search by title, summary..."
                      className="w-full pl-9 pr-3 h-10 sm:h-9 rounded-xl border bd text-[12.5px] bg-white dark:bg-[#141a25] focus:outline-none focus:border-indigo-500 transition text-[var(--tx)] placeholder:text-slate-400"
                    />
                  </div>
                  <div className="w-full sm:w-auto">
                    <select
                      value={blogStatusFilter}
                      onChange={(e) => setBlogStatusFilter(e.target.value)}
                      className="w-full sm:w-44 h-10 sm:h-9 px-3 rounded-xl border bd text-[12.5px] font-medium bg-white dark:bg-[#141a25] text-[var(--tx)] cursor-pointer focus:outline-none focus:border-indigo-500"
                    >
                      <option value="all">All Statuses</option>
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Blog Table Card */}
              <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b bd text-[10.5px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/70 dark:bg-slate-900/50">
                        <th className="py-3 px-3 sm:py-3.5 sm:px-4">Featured Image</th>
                        <th className="py-3 px-3 sm:py-3.5 sm:px-4">Title</th>
                        <th className="py-3 px-3 sm:py-3.5 sm:px-4">Author</th>
                        <th className="py-3 px-3 sm:py-3.5 sm:px-4">Status</th>
                        <th className="py-3.5 px-4 hidden lg:table-cell">Tags</th>
                        <th className="py-3.5 px-4 whitespace-nowrap hidden lg:table-cell">Published Date</th>
                        <th className="py-3.5 px-4 text-right hidden lg:table-cell">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y bd text-[12px]">
                      {blogPosts
                        .filter((post) => {
                          const q = blogSearch.toLowerCase();
                          const matchesSearch =
                            !q ||
                            post.title.toLowerCase().includes(q) ||
                            post.slug.toLowerCase().includes(q) ||
                            post.tags.some((t) => t.toLowerCase().includes(q));
                          const matchesStatus =
                            blogStatusFilter === 'all' || post.status === blogStatusFilter;
                          return matchesSearch && matchesStatus;
                        })
                        .map((post) => (
                          <tr
                            key={post.id}
                            className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition"
                          >
                            {/* Featured Image */}
                            <td className="py-3 px-3 sm:py-3.5 sm:px-4 align-top w-20 sm:w-24">
                              {post.img ? (
                                <img
                                  src={post.img}
                                  alt={post.title}
                                  className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-lg border bd shadow-2xs"
                                />
                              ) : (
                                <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-medium text-[10.5px] sm:text-[11px] flex items-center justify-center border bd">
                                  No Image
                                </div>
                              )}
                            </td>

                            {/* Title & Slug */}
                            <td className="py-3 px-3 sm:py-3.5 sm:px-4 align-top min-w-[130px] sm:min-w-0 max-w-xs">
                              <h3
                                onClick={() => handleEditBlog(post)}
                                className="font-semibold text-[12px] sm:text-[12.5px] text-[var(--tx)] leading-snug cursor-pointer hover:text-blue-600 transition"
                              >
                                {post.title}
                              </h3>
                              <p className="text-[10px] sm:text-[11px] mu mt-1 break-all line-clamp-3">
                                {post.slug}
                              </p>
                            </td>

                            {/* Author & Role */}
                            <td className="py-3 px-3 sm:py-3.5 sm:px-4 align-top whitespace-nowrap">
                              <div className="font-semibold text-[12px] text-slate-700 dark:text-slate-200">
                                {post.author}
                              </div>
                              <div className="text-[10.5px] sm:text-[11px] mu">{post.role}</div>
                            </td>

                            {/* Status */}
                            <td className="py-3 px-3 sm:py-3.5 sm:px-4 align-top whitespace-nowrap">
                              {post.status === 'Published' || post.status === 'Publish' ? (
                                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#e6f9ed] text-[#16a34a] dark:bg-emerald-950/50 dark:text-emerald-400">
                                  Publish
                                </span>
                              ) : (
                                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                  Draft
                                </span>
                              )}
                            </td>

                            {/* Tags */}
                            <td className="py-3.5 px-4 align-top hidden lg:table-cell">
                              <div className="flex flex-wrap gap-1.5 max-w-[280px]">
                                {post.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="inline-block px-2 py-0.5 rounded text-[10.5px] font-medium bg-[#eef4ff] text-[#3b82f6] dark:bg-blue-950/50 dark:text-blue-400"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </td>

                            {/* Published Date */}
                            <td className="py-3.5 px-4 align-top text-slate-600 dark:text-slate-400 text-[11.5px] whitespace-nowrap hidden lg:table-cell">
                              {post.date}
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 align-top text-right whitespace-nowrap hidden lg:table-cell">
                              <div className="inline-flex items-center gap-1.5">
                                <button
                                  onClick={() => handleEditBlog(post)}
                                  className="h-7 px-2.5 rounded-lg border bd bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-semibold inline-flex items-center gap-1 transition cursor-pointer shadow-xs"
                                >
                                  <EditIcon className="w-3 h-3 text-slate-500" />
                                  Edit
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm({ type: 'blog', id: post.id })}
                                  className="h-7 px-2.5 rounded-lg border border-red-200/80 bg-red-50 hover:bg-red-100/80 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-[11px] font-semibold inline-flex items-center gap-1 transition cursor-pointer shadow-xs"
                                >
                                  <Trash2 className="w-3 h-3 text-red-500" />
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                {/* Empty State */}
                {blogPosts.filter((post) => {
                  const q = blogSearch.toLowerCase();
                  const matchesSearch =
                    !q ||
                    post.title.toLowerCase().includes(q) ||
                    post.slug.toLowerCase().includes(q) ||
                    post.tags.some((t) => t.toLowerCase().includes(q));
                  const matchesStatus =
                    blogStatusFilter === 'all' || post.status === blogStatusFilter;
                  return matchesSearch && matchesStatus;
                }).length === 0 && (
                  <div className="p-10 text-center text-slate-500">
                    <p className="font-medium text-[13px]">No blog posts found</p>
                    <p className="text-[11px] mt-1">Try adjusting your search or status filter.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3 (EDITOR): FULL-PAGE WRITE / EDIT BLOG POST               */}
          {/* ============================================================== */}
          {activeTab === 'blogs' && isBlogEditorOpen && (
            <div className="space-y-5 animate-fade-in">
              {/* Top Action Bar */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleCloseBlogEditor}
                  className="h-9 px-3.5 rounded-xl border bd bg-white dark:bg-[#141a25] font-semibold text-[12px] text-slate-700 dark:text-slate-200 inline-flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blogs
                </button>
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCloseBlogEditor}
                    className="h-9 px-4 rounded-xl border bd bg-white dark:bg-[#141a25] font-medium text-[12px] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveBlog}
                    className="h-9 px-4 rounded-xl font-semibold text-[12px] text-white bg-[#2563eb] hover:bg-blue-700 transition cursor-pointer shadow-xs active:scale-95"
                  >
                    Publish Post
                  </button>
                </div>
              </div>

              {/* Header Card */}
              <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] flex items-center justify-between">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/60 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-bold tracking-tight text-[var(--tx)]">
                      {editingBlogId ? 'Edit Blog Post' : 'Write New Blog Post'}
                    </h1>
                    <p className="text-[11.5px] text-[#64748b] mt-0.5">
                      Draft a new article with markdown formatting and publish it to the company website
                    </p>
                  </div>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border bd text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  <span>{blogFormData.status || 'Draft'}</span>
                </div>
              </div>

              {/* 2-Column Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Left Column (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  {/* General Information Card */}
                  <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25]">
                    <div className="flex items-center gap-2 pb-3 mb-4 border-b bd">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <h2 className="text-[13.5px] font-bold tracking-tight text-[var(--tx)]">
                        General Information
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block font-semibold text-[12px] mb-1.5 text-slate-700 dark:text-slate-300">
                          Blog Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={blogFormData.title}
                          onChange={(e) => {
                            const val = e.target.value;
                            setBlogFormData((prev) => ({
                              ...prev,
                              title: val,
                              metaTitle: prev.metaTitle === prev.title ? val : prev.metaTitle
                            }));
                          }}
                          placeholder="Enter a compelling, descriptive headline..."
                          className="w-full h-10 px-3.5 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900/40 text-[var(--tx)] focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition placeholder:text-slate-400"
                        />
                        <p className="text-[11px] text-slate-500 mt-1.5">
                          This is the main headline displayed on the article page and card listings.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block font-semibold text-[12px] text-slate-700 dark:text-slate-300">
                            Summary / Excerpt
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {(blogFormData.summary || '').length} characters
                          </span>
                        </div>
                        <textarea
                          rows="4"
                          value={blogFormData.summary}
                          onChange={(e) => setBlogFormData({ ...blogFormData, summary: e.target.value })}
                          placeholder="Write a concise overview of this article to engage readers..."
                          className="w-full p-3.5 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900/40 text-[var(--tx)] focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition placeholder:text-slate-400 resize-y"
                        />
                        <p className="text-[11px] text-slate-500 mt-1.5">
                          Displayed as the teaser snippet in blog feeds and social cards.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Article Body Card */}
                  <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25]">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b bd">
                      <div className="flex items-center gap-2">
                        <EditIcon className="w-4 h-4 text-blue-600" />
                        <h2 className="text-[13.5px] font-bold tracking-tight text-[var(--tx)]">
                          Article Body
                        </h2>
                      </div>
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800">
                        Markdown Supported
                      </span>
                    </div>

                    {/* Editor Container */}
                    <div className="rounded-xl border bd overflow-hidden bg-white dark:bg-[#141a25]">
                      {/* Top Tabs & Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 border-b bd bg-slate-50/60 dark:bg-slate-900/40">
                        <div className="inline-flex p-0.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 text-[11.5px] font-medium">
                          <button
                            type="button"
                            onClick={() => setBlogBodyTab('write')}
                            className={`h-7 px-3 rounded-md inline-flex items-center gap-1.5 cursor-pointer transition ${
                              blogBodyTab === 'write'
                                ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-xs'
                                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                            }`}
                          >
                            <EditIcon className="w-3 h-3" />
                            Write
                          </button>
                          <button
                            type="button"
                            onClick={() => setBlogBodyTab('preview')}
                            className={`h-7 px-3 rounded-md inline-flex items-center gap-1.5 cursor-pointer transition ${
                              blogBodyTab === 'preview'
                                ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 shadow-xs'
                                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                            }`}
                          >
                            <Eye className="w-3 h-3" />
                            Preview
                          </button>
                        </div>

                        <input
                          ref={blogBodyFileRef}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleBodyImagePick}
                        />
                        <button
                          type="button"
                          onClick={() => blogBodyFileRef.current?.click()}
                          className="h-7 px-2.5 rounded-lg text-[11.5px] font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          Insert Image
                        </button>
                      </div>

                      {/* Formatting Toolbar */}
                      {blogBodyTab === 'write' && (
                        <div className="flex items-center gap-1 p-1.5 border-b bd bg-slate-50/30 dark:bg-slate-900/20 text-slate-600 dark:text-slate-300">
                          <button
                            type="button"
                            onClick={() => formatBodyMarkdown('bold')}
                            className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 font-bold text-[12px] flex items-center justify-center cursor-pointer"
                            title="Bold"
                          >
                            B
                          </button>
                          <button
                            type="button"
                            onClick={() => formatBodyMarkdown('italic')}
                            className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 italic text-[12px] flex items-center justify-center cursor-pointer"
                            title="Italic"
                          >
                            I
                          </button>
                          <button
                            type="button"
                            onClick={() => formatBodyMarkdown('heading')}
                            className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 font-bold text-[12px] flex items-center justify-center cursor-pointer"
                            title="Heading"
                          >
                            H
                          </button>
                          <button
                            type="button"
                            onClick={() => formatBodyMarkdown('code')}
                            className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-[11px] font-mono flex items-center justify-center cursor-pointer"
                            title="Code"
                          >
                            &lt;&gt;
                          </button>
                          <button
                            type="button"
                            onClick={() => formatBodyMarkdown('link')}
                            className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-[12px] flex items-center justify-center cursor-pointer"
                            title="Insert Link"
                          >
                            🔗
                          </button>
                          <button
                            type="button"
                            onClick={() => formatBodyMarkdown('image')}
                            className="w-7 h-7 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-[12px] flex items-center justify-center cursor-pointer"
                            title="Insert Image Markdown"
                          >
                            🖼️
                          </button>
                        </div>
                      )}

                      {/* Textarea or Preview */}
                      {blogBodyTab === 'write' ? (
                        <textarea
                          ref={blogBodyInputRef}
                          rows="14"
                          value={blogFormData.body}
                          onChange={(e) => setBlogFormData({ ...blogFormData, body: e.target.value })}
                          placeholder="Draft your story using markdown syntax... You can use ## Headings, **bold**, lists, code blocks, or upload images directly."
                          className="w-full p-4 text-[12.5px] leading-relaxed bg-transparent text-[var(--tx)] focus:outline-none placeholder:text-slate-400 font-sans resize-y"
                        />
                      ) : (
                        <div className="p-4 min-h-[300px] text-[12.5px] leading-relaxed text-[var(--tx)] space-y-2 whitespace-pre-wrap">
                          {blogFormData.body || <span className="text-slate-400 italic">No content written yet.</span>}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column (4 cols) */}
                <div className="lg:col-span-4 space-y-5">
                  {/* Publication Status Card */}
                  <div className="card rounded-2xl p-5 soft bg-white dark:bg-[#141a25]">
                    <div className="flex items-center gap-2 pb-3 mb-4 border-b bd">
                      <Bookmark className="w-4 h-4 text-blue-600" />
                      <h2 className="text-[13.5px] font-bold tracking-tight text-[var(--tx)]">
                        Publication Status
                      </h2>
                    </div>

                    <div>
                      <label className="block font-semibold text-[12px] mb-1.5 text-slate-700 dark:text-slate-300">
                        Visibility
                      </label>
                      <select
                        value={blogFormData.status}
                        onChange={(e) => setBlogFormData({ ...blogFormData, status: e.target.value })}
                        className="w-full h-10 px-3 rounded-xl border bd text-[12.5px] font-medium bg-white dark:bg-slate-900 text-[var(--tx)] focus:outline-none focus:border-blue-500 cursor-pointer"
                      >
                        <option value="Draft">Draft (Visible internally)</option>
                        <option value="Published">Published (Publicly visible)</option>
                      </select>
                      <p className="text-[11px] text-slate-500 mt-1.5">
                        {blogFormData.status === 'Published'
                          ? 'Article will be publicly visible to website visitors.'
                          : 'Article is saved privately and not visible to website visitors.'}
                      </p>

                      <button
                        type="button"
                        onClick={handleSaveBlog}
                        className="w-full h-10 rounded-xl font-semibold text-[12.5px] text-white bg-[#2563eb] hover:bg-blue-700 transition cursor-pointer shadow-xs mt-4 active:scale-95"
                      >
                        Publish Article
                      </button>
                    </div>
                  </div>

                  {/* Featured Image Card */}
                  <div className="card rounded-2xl p-5 soft bg-white dark:bg-[#141a25]">
                    <div className="flex items-center gap-2 pb-3 mb-2 border-b bd">
                      <ImageIcon className="w-4 h-4 text-blue-600" />
                      <h2 className="text-[13.5px] font-bold tracking-tight text-[var(--tx)]">
                        Featured Image
                      </h2>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-3.5">
                      Visual banner displayed at the top of the article and on cards.
                    </p>

                    <input
                      ref={blogFeaturedFileRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFeaturedImagePick}
                    />

                    {!blogFormData.img ? (
                      <div
                        onClick={() => blogFeaturedFileRef.current?.click()}
                        className="rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition"
                      >
                        <ImageIcon className="w-8 h-8 text-slate-400 mb-2" />
                        <p className="text-[12px] font-medium text-slate-700 dark:text-slate-200">
                          <span className="text-blue-600 font-semibold">Click to upload</span> banner
                        </p>
                        <p className="text-[10.5px] text-slate-400 mt-0.5">PNG, JPG or WebP (max 5MB)</p>
                      </div>
                    ) : (
                      <div className="relative rounded-xl overflow-hidden border bd aspect-[16/9]">
                        <img
                          src={blogFormData.img}
                          alt="Featured Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setBlogFormData({ ...blogFormData, img: '' })}
                          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-900/80 hover:bg-red-600 text-white flex items-center justify-center cursor-pointer transition shadow-xs"
                          title="Remove image"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Categorization Card */}
                  <div className="card rounded-2xl p-5 soft bg-white dark:bg-[#141a25]">
                    <div className="flex items-center gap-2 pb-3 mb-4 border-b bd">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <h2 className="text-[13.5px] font-bold tracking-tight text-[var(--tx)]">
                        Categorization
                      </h2>
                    </div>

                    <div>
                      <label className="block font-semibold text-[12px] mb-1.5 text-slate-700 dark:text-slate-300">
                        Article Tags
                      </label>
                      <input
                        type="text"
                        value={blogFormData.tags}
                        onChange={(e) => setBlogFormData({ ...blogFormData, tags: e.target.value })}
                        placeholder="e.g. tech, attendance, admin"
                        className="w-full h-10 px-3.5 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900/40 text-[var(--tx)] focus:outline-none focus:border-blue-500 transition placeholder:text-slate-400"
                      />
                      <p className="text-[11px] text-slate-500 mt-1.5">
                        Separate multiple tags with commas.
                      </p>
                    </div>
                  </div>

                  {/* SEO Configurations Card */}
                  <div className="card rounded-2xl p-5 soft bg-white dark:bg-[#141a25]">
                    <div className="flex items-center gap-2 pb-3 mb-2 border-b bd">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <h2 className="text-[13.5px] font-bold tracking-tight text-[var(--tx)]">
                        SEO Configurations
                      </h2>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-4">
                      Customize how this article appears in Google search results.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block font-semibold text-[12px] text-slate-700 dark:text-slate-300">
                            Meta Title
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {(blogFormData.metaTitle || '').length} / 60
                          </span>
                        </div>
                        <input
                          type="text"
                          value={blogFormData.metaTitle}
                          onChange={(e) => setBlogFormData({ ...blogFormData, metaTitle: e.target.value })}
                          placeholder="Google search title..."
                          className="w-full h-10 px-3.5 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900/40 text-[var(--tx)] focus:outline-none focus:border-blue-500 transition placeholder:text-slate-400"
                        />
                        <p className="text-[11px] text-slate-500 mt-1.5">
                          Recommended length: under 60 characters.
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="block font-semibold text-[12px] text-slate-700 dark:text-slate-300">
                            Meta Description
                          </label>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {(blogFormData.metaDesc || '').length} / 160
                          </span>
                        </div>
                        <textarea
                          rows="3"
                          value={blogFormData.metaDesc}
                          onChange={(e) => setBlogFormData({ ...blogFormData, metaDesc: e.target.value })}
                          placeholder="Brief summary for search engine results..."
                          className="w-full p-3 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900/40 text-[var(--tx)] focus:outline-none focus:border-blue-500 transition placeholder:text-slate-400 resize-y"
                        />
                        <p className="text-[11px] text-slate-500 mt-1.5">
                          Recommended length: under 160 characters.
                        </p>
                      </div>

                      <div>
                        <label className="block font-semibold text-[12px] mb-1.5 text-slate-700 dark:text-slate-300">
                          Focus Keywords
                        </label>
                        <input
                          type="text"
                          value={blogFormData.keywords}
                          onChange={(e) => setBlogFormData({ ...blogFormData, keywords: e.target.value })}
                          placeholder="e.g. attendance tracking, workforce"
                          className="w-full h-10 px-3.5 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900/40 text-[var(--tx)] focus:outline-none focus:border-blue-500 transition placeholder:text-slate-400"
                        />
                        <p className="text-[11px] text-slate-500 mt-1.5">
                          Comma-separated target keywords.
                        </p>
                      </div>

                      {/* Google Search Results Snippet Preview */}
                      <div className="rounded-xl p-3.5 bg-slate-50/80 dark:bg-slate-900/60 border bd mt-3">
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                          <Globe className="w-3.5 h-3.5 text-slate-500" />
                          <span>devcreationsblr.com</span>
                        </div>
                        <h4 className="text-[13.5px] font-medium text-[#2563eb] dark:text-blue-400 hover:underline cursor-pointer mt-1 leading-snug">
                          {blogFormData.metaTitle || blogFormData.title || 'Google Search Results Snippet Preview'}
                        </h4>
                        <p className="text-[11px] text-emerald-700 dark:text-emerald-400 mt-0.5 truncate">
                          https://devcreationsblr.com/blogs
                          {blogFormData.title
                            ? '/' +
                              blogFormData.title
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, '-')
                                .replace(/(^-|-$)+/g, '')
                            : '/your-blog-slug'}
                        </p>
                        <p className="text-[11.5px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                          {blogFormData.metaDesc ||
                            blogFormData.summary ||
                            'Provide a meta description in the SEO panel to customize this search results snippet description.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar Card */}
              <div className="card rounded-2xl p-4 soft bg-white dark:bg-[#141a25] flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={handleCloseBlogEditor}
                  className="h-9 px-4 rounded-xl border bd bg-white dark:bg-[#141a25] font-medium text-[12px] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveBlog}
                  className="h-9 px-4 rounded-xl font-semibold text-[12px] text-white bg-[#2563eb] hover:bg-blue-700 transition cursor-pointer shadow-xs active:scale-95"
                >
                  Publish Post
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 4: CONTACTS MANAGEMENT                                     */}
          {/* ============================================================== */}
          {activeTab === 'contacts' && (
            <div className="space-y-5 animate-fade-in">
              {/* Header Row: Title & Total Contacts Stat Card */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                {/* Title & Subtitle Box */}
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ff9a3c, #ff7a45)' }}
                  >
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-bold tracking-tight text-[var(--tx)]">
                      Contacts Management
                    </h1>
                    <p className="text-[11.5px] text-[#64748b] mt-0.5">
                      Manage contact submissions with complete customer information
                    </p>
                  </div>
                </div>

                {/* Total Contacts Stat Card */}
                <div className="card rounded-2xl p-4 sm:p-5 flex items-center gap-4 bg-white dark:bg-[#141a25] border-l-4 border-l-[#ea580c] soft min-w-[200px]">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#ea580c] flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[22px] font-bold tracking-tight leading-none text-[var(--tx)]">
                      {contactItems.length}
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1">
                      TOTAL CONTACTS
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Contacts Table Card */}
              <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25]">
                {/* Table Card Header & Search */}
                <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b bd">
                  <div className="flex items-center gap-2 text-[var(--tx)]">
                    <Users className="w-4 h-4 text-[#ea580c]" />
                    <h2 className="text-[13.5px] sm:text-[14px] font-bold tracking-tight">
                      Customer Contacts
                    </h2>
                  </div>

                  <div className="relative w-full sm:w-72">
                    <input
                      type="text"
                      value={contactSearch}
                      onChange={(e) => {
                        setContactSearch(e.target.value);
                        setContactPage(1);
                      }}
                      placeholder="Search by name, email, pho..."
                      className="w-full h-9 px-3 rounded-xl border bd text-[12px] bg-slate-50/50 dark:bg-slate-900/40 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition text-[var(--tx)] placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Responsive Contacts Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b bd text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/70 dark:bg-slate-900/50">
                        <th className="py-3.5 px-4">NAME</th>
                        <th className="py-3.5 px-4">PHONE</th>
                        <th className="py-3.5 px-4">EMAIL</th>
                        <th className="py-3.5 px-4">ADDRESS</th>
                        <th className="py-3.5 px-4">REASON</th>
                        <th className="py-3.5 px-4 whitespace-nowrap">DATE RECEIVED</th>
                        <th className="py-3.5 px-4 text-center">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y bd text-[12px]">
                      {(() => {
                        const q = contactSearch.toLowerCase().trim();
                        const filtered = contactItems.filter(
                          (c) =>
                            !q ||
                            c.name.toLowerCase().includes(q) ||
                            c.email.toLowerCase().includes(q) ||
                            c.phone.toLowerCase().includes(q) ||
                            c.address.toLowerCase().includes(q) ||
                            c.reason.toLowerCase().includes(q)
                        );
                        const startIndex = (contactPage - 1) * CONTACT_PAGE_SIZE;
                        const pageItems = filtered.slice(startIndex, startIndex + CONTACT_PAGE_SIZE);

                        return pageItems.map((c) => (
                          <tr
                            key={c.id}
                            className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition"
                          >
                            <td className="py-3.5 px-4 font-bold text-[12.5px] text-[var(--tx)]">
                              {c.name}
                            </td>
                            <td className="py-3.5 px-4 text-[12px] text-slate-600 dark:text-slate-300 font-mono">
                              {c.phone}
                            </td>
                            <td className="py-3.5 px-4 text-[12px] text-slate-600 dark:text-slate-300">
                              {c.email}
                            </td>
                            <td className="py-3.5 px-4 text-[12px] text-slate-600 dark:text-slate-300">
                              {c.address}
                            </td>
                            <td className="py-3.5 px-4 text-[12px] text-slate-600 dark:text-slate-300">
                              {c.reason}
                            </td>
                            <td className="py-3.5 px-4 text-[11.5px] text-slate-500 whitespace-nowrap">
                              {c.date}
                            </td>
                            <td className="py-3.5 px-4 text-center whitespace-nowrap">
                              <button
                                onClick={() => setDeleteConfirm({ type: 'contact', id: c.id })}
                                className="h-7 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-[11px] font-semibold text-white inline-flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95"
                              >
                                <Trash2 className="w-3 h-3" />
                                Delete
                              </button>
                            </td>
                          </tr>
                        ));
                      })()}
                    </tbody>
                  </table>
                </div>

                {/* Empty State */}
                {contactItems.filter((c) => {
                  const q = contactSearch.toLowerCase().trim();
                  return (
                    !q ||
                    c.name.toLowerCase().includes(q) ||
                    c.email.toLowerCase().includes(q) ||
                    c.phone.toLowerCase().includes(q) ||
                    c.address.toLowerCase().includes(q) ||
                    c.reason.toLowerCase().includes(q)
                  );
                }).length === 0 && (
                  <div className="p-10 text-center text-slate-500">
                    <p className="font-medium text-[13px]">No contacts found</p>
                    <p className="text-[11px] mt-1">Try adjusting your search query.</p>
                  </div>
                )}

                {/* Pagination Controls (Matches Screenshot) */}
                {(() => {
                  const q = contactSearch.toLowerCase().trim();
                  const filtered = contactItems.filter(
                    (c) =>
                      !q ||
                      c.name.toLowerCase().includes(q) ||
                      c.email.toLowerCase().includes(q) ||
                      c.phone.toLowerCase().includes(q) ||
                      c.address.toLowerCase().includes(q) ||
                      c.reason.toLowerCase().includes(q)
                  );
                  const totalPages = Math.max(1, Math.ceil(filtered.length / CONTACT_PAGE_SIZE));
                  if (filtered.length === 0) return null;

                  return (
                    <div className="flex items-center justify-center gap-3 py-6 border-t bd">
                      <button
                        type="button"
                        disabled={contactPage <= 1}
                        onClick={() => setContactPage((prev) => Math.max(1, prev - 1))}
                        className={`h-8 px-4 rounded-lg text-[12px] font-semibold transition ${
                          contactPage <= 1
                            ? 'bg-[#edf2f7] dark:bg-slate-800 text-[#cbd5e1] dark:text-slate-600 cursor-not-allowed shadow-none'
                            : 'text-white shadow-sm cursor-pointer hover:opacity-95 active:scale-95'
                        }`}
                        style={
                          contactPage > 1
                            ? { background: 'linear-gradient(135deg, #d85739 0%, #8e4ec6 100%)' }
                            : undefined
                        }
                      >
                        Previous
                      </button>

                      <span className="h-8 px-3.5 inline-flex items-center justify-center rounded-lg border bd bg-slate-50/80 dark:bg-slate-900/60 text-[12px] font-medium text-slate-600 dark:text-slate-300">
                        Page {contactPage} of {totalPages}
                      </span>

                      <button
                        type="button"
                        disabled={contactPage >= totalPages}
                        onClick={() => setContactPage((prev) => Math.min(totalPages, prev + 1))}
                        className={`h-8 px-4 rounded-lg text-[12px] font-semibold transition ${
                          contactPage >= totalPages
                            ? 'bg-[#edf2f7] dark:bg-slate-800 text-[#cbd5e1] dark:text-slate-600 cursor-not-allowed shadow-none'
                            : 'text-white shadow-sm cursor-pointer hover:opacity-95 active:scale-95'
                        }`}
                        style={
                          contactPage < totalPages
                            ? { background: 'linear-gradient(135deg, #d85739 0%, #8e4ec6 100%)' }
                            : undefined
                        }
                      >
                        Next
                      </button>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 5: CLIENT LOGOS MANAGEMENT                                */}
          {/* ============================================================== */}
          {activeTab === 'client-logos' && (
            <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25]">
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5">
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-3.5">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ff9a3c, #ff7a45)' }}
                  >
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-bold tracking-tight text-[var(--tx)]">Client Logos Management</h1>
                    <p className="mu text-[11.5px] mt-0.5 max-w-sm sm:max-w-none">
                      Upload and manage client logos for your website
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto sm:self-center">
                  <button
                    onClick={() => {
                      setIsLogoFormOpen((prev) => !prev);
                      setEditingLogoId(null);
                      if (!isLogoFormOpen) {
                        setLogoCompanyName('');
                        setSelectedLogoFile(null);
                        setSelectedLogoPreview(null);
                      }
                    }}
                    className="w-full sm:w-auto h-9 px-4 rounded-lg font-semibold text-[12px] inline-flex items-center justify-center gap-1.5 transition cursor-pointer text-white shadow-sm hover:opacity-95"
                    style={{ background: '#ea580c', boxShadow: '0 6px 16px -4px rgba(234, 88, 12, 0.5)' }}
                  >
                    {isLogoFormOpen ? (
                      <>
                        <X className="w-4 h-4" />
                        <span>Cancel</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Upload Logos</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Upload Progress Animation */}
              {logoUploadProgress !== null && (
                <div className="card rounded-xl p-3.5 sm:p-4 border-l-4 border-l-[#ea580c] shadow-xs mb-5 bg-white dark:bg-[#141a25] flex items-center gap-3.5">
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#ea580c] rounded-full transition-all duration-150"
                      style={{ width: `${logoUploadProgress}%` }}
                    />
                  </div>
                  <span className="text-[11.5px] font-semibold text-slate-700 dark:text-slate-300 shrink-0">
                    Uploading... {logoUploadProgress}%
                  </span>
                </div>
              )}

              {/* Upload Success Alert */}
              {logoSuccessAlert && (
                <div className="rounded-xl p-3.5 mb-5 border-l-4 border-l-emerald-500 border border-emerald-300 dark:border-emerald-700/60 bg-[#edfbf2] dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 flex items-center justify-between text-[12px] font-medium shadow-xs">
                  <span>{logoSuccessAlert}</span>
                  <button
                    type="button"
                    onClick={() => setLogoSuccessAlert(null)}
                    className="w-5 h-5 rounded-full bg-emerald-200/60 hover:bg-emerald-300/80 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 flex items-center justify-center transition cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* View 1: Upload Form Matching User Screenshot Exactly */}
              {isLogoFormOpen ? (
                <div className="card rounded-2xl overflow-hidden soft border bd bg-white dark:bg-[#141a25] mb-5">
                  <div className="bg-[#ea580c] py-4 px-6 text-center text-white">
                    <div className="flex items-center justify-center gap-2 font-bold text-[15.5px] sm:text-[16px] tracking-tight">
                      <ImageIcon className="w-5 h-5" />
                      <span>{editingLogoId ? 'Edit Client Logo' : 'Upload Client Logo'}</span>
                    </div>
                    <p className="text-[12px] text-white/90 mt-1 font-normal">
                      {editingLogoId ? 'Update the company name and client logo image' : 'Enter the company name and upload the corresponding client logo'}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                        Company Name <span className="text-slate-700 dark:text-slate-300 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        value={logoCompanyName}
                        onChange={(e) => setLogoCompanyName(e.target.value)}
                        placeholder="e.g. Acme Corporation"
                        className="w-full h-11 px-3.5 rounded-lg border bd bg-white dark:bg-slate-900 text-[13px] text-slate-800 dark:text-slate-100 placeholder:italic placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-[#ea580c] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                        Logo Image <span className="text-slate-700 dark:text-slate-300 font-bold">*</span>
                      </label>
                      <input
                        type="file"
                        ref={logoFileInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={handleLogoFileSelect}
                      />
                      <div
                        onClick={() => logoFileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer hover:border-orange-400 dark:hover:border-orange-500 transition group"
                      >
                        {!selectedLogoPreview ? (
                          <button
                            type="button"
                            className="h-9 px-5 rounded-lg font-semibold text-[12.5px] text-white bg-[#ea580c] hover:opacity-95 shadow-sm inline-flex items-center gap-2 cursor-pointer pointer-events-none"
                          >
                            <Upload className="w-4 h-4" />
                            Select Logo Image
                          </button>
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-3 w-full">
                            <div className="h-28 max-w-[260px] p-2 bg-white dark:bg-slate-900 rounded-lg border bd flex items-center justify-center shadow-xs">
                              <img src={selectedLogoPreview} alt="Preview" className="max-h-full max-w-full object-contain" />
                            </div>
                            <div className="text-center">
                              <p className="text-[12.5px] font-bold text-slate-800 dark:text-slate-200 truncate max-w-xs">
                                {selectedLogoFile?.name}
                              </p>
                              <p className="text-[11px] mu mt-0.5">
                                {((selectedLogoFile?.size || 0) / 1024).toFixed(1)} KB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                logoFileInputRef.current?.click();
                              }}
                              className="text-[11.5px] font-semibold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
                            >
                              Change Image
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsLogoFormOpen(false);
                          setEditingLogoId(null);
                        }}
                        className="flex-1 h-11 rounded-lg font-bold text-[14px] text-white bg-[#94a3b8] hover:bg-[#64748b] transition cursor-pointer flex items-center justify-center shadow-xs active:scale-95"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={submitClientLogoForm}
                        className="flex-1 h-11 rounded-lg font-bold text-[14px] text-white bg-[#00a86b] hover:bg-[#059669] transition cursor-pointer flex items-center justify-center shadow-sm active:scale-95"
                      >
                        {editingLogoId ? 'Update Logo' : 'Upload Logo'}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Section Card */}
                  <div className="card rounded-xl p-3.5 sm:p-4 border-l-4 border-l-[#ea580c] shadow-xs mb-5 bg-white dark:bg-[#141a25]">
                    <div className="flex items-center gap-2 text-[var(--tx)]">
                      <ImageIcon className="text-[#ea580c] w-4.5 h-4.5 shrink-0" />
                      <h2 className="text-[13.5px] sm:text-[14px] font-bold tracking-tight">
                        Client Logos ({clientLogos.length})
                      </h2>
                    </div>
                    <p className="text-[11px] sm:text-[11.5px] mu mt-0.5">
                      Click on any logo to preview or use the action buttons to manage your client logos
                    </p>
                  </div>

                  {/* Logos Grid */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {clientLogos.map((item) => (
                      <article
                        key={item.id}
                        onClick={() => setPreviewItem({ img: item.img, name: item.title, file: item.file, date: item.date })}
                        className="card rounded-2xl overflow-hidden soft flex flex-col justify-between transition-all duration-200 cursor-pointer border bd border-l-4 border-l-[#ea580c] bg-white dark:bg-[#141a25] group hover:shadow-md relative"
                      >
                        <div className="relative aspect-[16/11] flex items-center justify-center p-6 bg-white dark:bg-white/95 overflow-hidden">
                          <img
                            src={item.img}
                            alt=""
                            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                            className="max-h-full max-w-full object-contain select-none transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center gap-2.5 transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-black/45 backdrop-blur-[1px]">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewItem({ img: item.img, name: item.title, file: item.file, date: item.date });
                              }}
                              className="w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition cursor-pointer"
                              title="Preview Logo"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditLogo(item);
                              }}
                              className="w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition cursor-pointer"
                              title="Edit Logo"
                            >
                              <EditIcon className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDeleteConfirm({ type: 'logo', id: item.id });
                              }}
                              className="w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition cursor-pointer"
                              title="Delete Logo"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="px-4 py-3.5 bg-white dark:bg-[#141a25] border-t bd">
                          <h3 className="text-[13px] font-bold text-slate-800 dark:text-slate-100 truncate">{item.title}</h3>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5 font-mono">{item.file}</p>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">{item.date}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  {clientLogos.length === 0 && (
                    <div className="card rounded-2xl p-10 text-center soft">
                      <p className="text-lg font-semibold">No client logos yet</p>
                      <p className="mu text-sm mt-1">Upload a logo to get started.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 6: WEBSITE MANAGEMENT                                     */}
          {/* ============================================================== */}
          {activeTab === 'websites' && (
            <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25]">
              {/* Header Row: Title & Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5">
                <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-3.5">
                  <div
                    className="w-11 h-11 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ff9a3c, #ff7a45)' }}
                  >
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[17px] font-bold tracking-tight text-[var(--tx)]">Website Management</h1>
                    <p className="text-[11.5px] text-[#64748b] mt-0.5 max-w-sm sm:max-w-none">
                      Upload and manage website information with images and URLs
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto sm:self-center">
                  <button
                    onClick={() => {
                      if (isWebsiteFormOpen) {
                        setIsWebsiteFormOpen(false);
                        setEditingWebsiteId(null);
                        setWebsiteTitle('');
                        setWebsiteUrl('');
                        setSelectedWebsiteFile(null);
                        setSelectedWebsitePreview(null);
                      } else {
                        setEditingWebsiteId(null);
                        setWebsiteTitle('');
                        setWebsiteUrl('');
                        setSelectedWebsiteFile(null);
                        setSelectedWebsitePreview(null);
                        setIsWebsiteFormOpen(true);
                      }
                    }}
                    className="w-full sm:w-auto h-9 px-4 rounded-lg font-semibold text-[12px] inline-flex items-center justify-center gap-1.5 transition text-white shadow-sm hover:opacity-95 cursor-pointer bg-[#ea580c]"
                  >
                    {isWebsiteFormOpen ? (
                      <>
                        <X className="w-4 h-4" />
                        Cancel
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add Website
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Success Alert Banner */}
              {websiteSuccessAlert && (
                <div className="mb-5 flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[12.5px] font-medium">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>{websiteSuccessAlert}</span>
                  </div>
                  <button
                    onClick={() => setWebsiteSuccessAlert(null)}
                    className="p-1 hover:opacity-75 transition cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Add / Edit Form */}
              {isWebsiteFormOpen ? (
                <div className="mb-6 card rounded-2xl border bd overflow-hidden bg-white dark:bg-[#141a25] shadow-xs">
                  {/* Form Header Banner */}
                  <div className="bg-[#ea580c] text-white px-6 py-4">
                    <div className="flex items-center justify-center gap-2 font-bold text-[14px]">
                      <Globe className="w-4.5 h-4.5" />
                      <span>{editingWebsiteId ? 'Edit Website Information' : 'Add Website Information'}</span>
                    </div>
                    <p className="text-center text-[11px] text-orange-100 mt-0.5">
                      Enter the website title, URL, and upload the preview screenshot
                    </p>
                  </div>

                  {/* Upload Progress Bar */}
                  {websiteUploadProgress !== null && (
                    <div className="w-full bg-orange-100 h-1.5 overflow-hidden">
                      <div
                        className="bg-orange-600 h-full transition-all duration-150"
                        style={{ width: `${websiteUploadProgress}%` }}
                      />
                    </div>
                  )}

                  <div className="p-6 sm:p-7 space-y-5">
                    <div>
                      <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                        Website Title <span className="text-slate-700 dark:text-slate-300 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        value={websiteTitle}
                        onChange={(e) => setWebsiteTitle(e.target.value)}
                        placeholder="e.g. GeoTrackMee"
                        className="w-full h-10 px-3.5 rounded-lg border bd text-[13px] bg-white dark:bg-[#0d121c] text-[var(--tx)] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                        Website URL <span className="text-slate-700 dark:text-slate-300 font-bold">*</span>
                      </label>
                      <input
                        type="url"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full h-10 px-3.5 rounded-lg border bd text-[13px] bg-white dark:bg-[#0d121c] text-[var(--tx)] focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                        Website Image <span className="text-slate-700 dark:text-slate-300 font-bold">*</span>
                      </label>
                      <input
                        type="file"
                        ref={websiteFileInputRef}
                        accept="image/*"
                        className="hidden"
                        onChange={handleWebsiteFileSelect}
                      />
                      <div
                        onClick={() => websiteFileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 sm:p-10 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/30 cursor-pointer hover:border-orange-400 dark:hover:border-orange-500 transition group"
                      >
                        {!selectedWebsitePreview ? (
                          <div className="flex flex-col items-center">
                            <button
                              type="button"
                              className="h-9 px-5 rounded-lg font-semibold text-[12.5px] text-white bg-[#ea580c] hover:opacity-95 shadow-sm inline-flex items-center gap-2 cursor-pointer pointer-events-none"
                            >
                              <Upload className="w-4 h-4" />
                              Select Website Image
                            </button>
                            <span className="text-[11px] mu mt-2">PNG, JPG or WebP (max 5MB)</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center gap-3 w-full">
                            <div className="w-full max-w-[340px] aspect-[16/10] p-1 bg-white dark:bg-slate-900 rounded-lg border bd flex items-center justify-center overflow-hidden shadow-xs">
                              <img src={selectedWebsitePreview} alt="Preview" className="w-full h-full object-cover rounded" />
                            </div>
                            <div className="text-center">
                              <p className="text-[12.5px] font-bold text-slate-800 dark:text-slate-200 truncate max-w-xs">
                                {selectedWebsiteFile?.name}
                              </p>
                              <p className="text-[11px] mu mt-0.5">
                                {((selectedWebsiteFile?.size || 0) / 1024).toFixed(1)} KB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                websiteFileInputRef.current?.click();
                              }}
                              className="text-[11.5px] font-semibold text-orange-600 dark:text-orange-400 hover:underline cursor-pointer"
                            >
                              Change Image
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setIsWebsiteFormOpen(false);
                          setEditingWebsiteId(null);
                        }}
                        className="flex-1 h-11 rounded-lg font-bold text-[14px] text-white bg-[#94a3b8] hover:bg-[#64748b] transition cursor-pointer flex items-center justify-center shadow-xs active:scale-95"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={submitWebsiteForm}
                        className="flex-1 h-11 rounded-lg font-bold text-[14px] text-white bg-[#00a86b] hover:bg-[#059669] transition cursor-pointer flex items-center justify-center shadow-sm active:scale-95"
                      >
                        {editingWebsiteId ? 'Update Website' : 'Add Website'}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Section Card */}
                  <div className="card rounded-xl p-3.5 sm:p-4 border-l-4 border-l-[#ea580c] shadow-xs mb-5 bg-white dark:bg-[#141a25]">
                    <div className="flex items-center gap-2 text-[var(--tx)]">
                      <Globe className="text-[#ea580c] w-4.5 h-4.5 shrink-0" />
                      <h2 className="text-[13.5px] sm:text-[14px] font-bold tracking-tight">
                        Website Information ({websites.length})
                      </h2>
                    </div>
                    <p className="text-[11px] sm:text-[11.5px] mu mt-0.5">
                      Click on any website image to preview or use the action buttons to manage your websites
                    </p>
                  </div>

                  {/* Websites Grid */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {websites.map((item) => (
                      <article
                        key={item.id}
                        onClick={() => setPreviewItem({ img: item.img, name: item.title, file: item.url, date: item.date })}
                        className="card rounded-2xl overflow-hidden soft flex flex-col justify-between transition-all duration-200 cursor-pointer border bd border-l-4 border-l-[#ea580c] bg-white dark:bg-[#141a25] group hover:shadow-md relative"
                      >
                        <div className="relative aspect-[16/10.5] flex items-center justify-center bg-slate-50 dark:bg-slate-900 overflow-hidden border-b bd">
                          <img
                            src={item.img}
                            alt=""
                            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                            className="w-full h-full object-cover object-top select-none transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex items-center justify-center gap-2.5 transition-opacity duration-200 opacity-0 group-hover:opacity-100 bg-black/45 backdrop-blur-[1px]">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewItem({ img: item.img, name: item.title, file: item.url, date: item.date });
                              }}
                              className="w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition cursor-pointer"
                              title="Preview Website"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditWebsite(item);
                              }}
                              className="w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition cursor-pointer"
                              title="Edit Website"
                            >
                              <EditIcon className="w-4 h-4" />
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setDeleteConfirm({ type: 'website', id: item.id });
                              }}
                              className="w-9 h-9 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition cursor-pointer"
                              title="Delete Website"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <div className="px-4 py-3.5 bg-white dark:bg-[#141a25]">
                          <h3 className="text-[13px] font-bold text-slate-800 dark:text-slate-100 truncate">{item.title}</h3>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[11.5px] font-semibold text-[#ea580c] hover:underline block truncate mt-0.5"
                          >
                            {item.url}
                          </a>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1.5">Added: {item.date}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  {websites.length === 0 && (
                    <div className="card rounded-2xl p-10 text-center soft">
                      <p className="text-lg font-semibold">No websites yet</p>
                      <p className="mu text-sm mt-1">Add a website to get started.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

{/* ============================================================== */}
          {/* TAB 7: EMPLOYEE MANAGEMENT                                    */}
          {/* ============================================================== */}
          {activeTab === 'employees' && (
            <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] space-y-5">
              {/* Top Row: Title & Add Member */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ff9a3c, #ff7a45)' }}
                  >
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[18px] sm:text-[20px] font-bold tracking-tight text-[var(--tx)]">Employee Management</h1>
                    <p className="text-[11.5px] text-[#64748b] mt-0.5">
                      Recruitment pipeline, applicant reviews, and team directory
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAddMemberOpen(true)}
                    className="h-9 px-4 rounded-lg font-semibold text-[12px] inline-flex items-center justify-center gap-1.5 transition text-white shadow-sm hover:opacity-95 cursor-pointer bg-[#ea580c]"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Member</span>
                  </button>
                </div>
              </div>

              {/* 4 Section Switcher Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border bd">
                {[
                  { id: 'apps', count: applicants.filter(a => a.section === 'apps').length, label: 'New Applications' },
                  { id: 'cand', count: applicants.filter(a => a.section === 'cand').length, label: 'Candidate Applications' },
                  { id: 'rel', count: applicants.filter(a => a.section === 'rel').length, label: 'Relieving Applications' },
                  { id: 'team', count: 42, label: 'Team Directory' }
                ].map((sec) => {
                  const isSelected = empSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setEmpSection(sec.id)}
                      className={`py-2 px-3 rounded-xl text-center transition cursor-pointer ${
                        isSelected
                          ? 'bg-[#ea580c] text-white shadow-xs'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <b className="block text-[16px] font-black leading-tight">{sec.count}</b>
                      <span className="block text-[11px] font-semibold mt-0.5 truncate">{sec.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={empSearch}
                    onChange={(e) => setEmpSearch(e.target.value)}
                    placeholder="Search applicant or team member..."
                    className="w-full h-9 pl-9 pr-3 rounded-xl border bd text-[12px] bg-slate-50/50 dark:bg-slate-900 text-[var(--tx)] focus:outline-none focus:border-[#ea580c]"
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={empRoleFilter}
                    onChange={(e) => setEmpRoleFilter(e.target.value)}
                    className="h-9 px-3 rounded-xl border bd text-[12px] font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:border-[#ea580c] cursor-pointer"
                  >
                    <option value="All">All Roles</option>
                    <option value="Employee">Employee</option>
                    <option value="Intern">Intern</option>
                    <option value="Freelancer">Freelancer</option>
                  </select>
                  <select
                    value={empStatusFilter}
                    onChange={(e) => setEmpStatusFilter(e.target.value)}
                    className="h-9 px-3 rounded-xl border bd text-[12px] font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:border-[#ea580c] cursor-pointer"
                  >
                    <option value="All">All Statuses</option>
                    <option value="PENDING">Pending</option>
                    <option value="ACCEPTED">Accepted</option>
                    <option value="INTERVIEW">Interview</option>
                    <option value="REJECTED">Rejected</option>
                  </select>
                </div>
              </div>

              {/* Applicants Table matching media_1794549068671_dae32ffc.jpg */}
              <div className="overflow-x-auto rounded-xl border bd">
                <table className="w-full text-left text-[12px] border-collapse">
                  <thead>
                    <tr className="border-b bd bg-slate-50/80 dark:bg-slate-900/60 text-slate-400 text-[10.5px] font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">Applicant</th>
                      <th className="py-3 px-3">Role</th>
                      <th className="py-3 px-3">Position Applied</th>
                      <th className="py-3 px-3">Experience / Qualification</th>
                      <th className="py-3 px-3">Applied Date</th>
                      <th className="py-3 px-3">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bd divide-slate-100 dark:divide-slate-800">
                    {applicants
                      .filter((a) => {
                        if (empSection !== 'apps' && a.section !== empSection) return false;
                        if (empRoleFilter !== 'All' && a.role !== empRoleFilter) return false;
                        if (empStatusFilter !== 'All' && a.status !== empStatusFilter) return false;
                        if (empSearch.trim()) {
                          const q = empSearch.toLowerCase();
                          return a.name.toLowerCase().includes(q) || a.email.toLowerCase().includes(q) || a.position.toLowerCase().includes(q);
                        }
                        return true;
                      })
                      .map((item) => {
                        const avatarLetter = item.name.charAt(0).toUpperCase();
                        const isPending = item.status === 'PENDING';
                        const isAccepted = item.status === 'ACCEPTED';
                        const isInterview = item.status === 'INTERVIEW';
                        const isRejected = item.status === 'REJECTED';

                        return (
                          <tr key={item.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-900/30 transition">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center font-bold text-xs shrink-0">
                                  {avatarLetter}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-bold text-[13px] text-slate-800 dark:text-slate-100 truncate">{item.name}</div>
                                  <div className="text-[11px] text-slate-400 truncate flex items-center gap-1">
                                    <Mail className="w-3 h-3 text-slate-400" />
                                    <span>{item.email}</span>
                                  </div>
                                  {item.phone && (
                                    <div className="text-[11px] text-slate-400 truncate flex items-center gap-1">
                                      <Phone className="w-3 h-3 text-slate-400" />
                                      <span>{item.phone}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-3">
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[10.5px] font-semibold bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300 border border-violet-100 dark:border-violet-900">
                                <span className="w-1 h-1 rounded-full bg-violet-600"></span>
                                {item.role}
                              </span>
                            </td>
                            <td className="py-3 px-3">
                              <span className="font-bold text-[12.5px] text-slate-800 dark:text-slate-200">{item.position}</span>
                            </td>
                            <td className="py-3 px-3">
                              <div className="font-semibold text-slate-700 dark:text-slate-300">{item.experience}</div>
                              {item.subExperience && (
                                <div className="text-[10.5px] text-slate-400">{item.subExperience}</div>
                              )}
                            </td>
                            <td className="py-3 px-3 text-slate-500 dark:text-slate-400 text-[11.5px]">
                              • {item.date}
                            </td>
                            <td className="py-3 px-3">
                              {isPending && (
                                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10.5px] font-bold tracking-wider uppercase bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
                                  PENDING
                                </span>
                              )}
                              {isAccepted && (
                                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10.5px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                                  ACCEPTED
                                </span>
                              )}
                              {isInterview && (
                                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10.5px] font-bold tracking-wider uppercase bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-200 dark:border-blue-900">
                                  INTERVIEW
                                </span>
                              )}
                              {isRejected && (
                                <span className="inline-block px-2.5 py-0.5 rounded-md text-[10.5px] font-bold tracking-wider uppercase bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                                  REJECTED
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <div className="inline-flex items-center gap-1.5 flex-wrap justify-end">
                                <button
                                  type="button"
                                  onClick={() => setViewingApplicant(item)}
                                  className="h-7 px-2 rounded-md border bd bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 font-semibold text-[11px] inline-flex items-center gap-1 cursor-pointer transition"
                                >
                                  <Eye className="w-3 h-3" />
                                  <span>View</span>
                                </button>
                                {isPending ? (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setSchedulingApplicant(item);
                                        setInterviewMode('');
                                      }}
                                      className="h-7 px-2 rounded-md bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 font-semibold text-[11px] inline-flex items-center gap-1 cursor-pointer transition border border-indigo-200 dark:border-indigo-800"
                                    >
                                      <Calendar className="w-3 h-3" />
                                      <span>Interview</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setApplicants(prev => prev.map(a => a.id === item.id ? { ...a, status: 'ACCEPTED' } : a));
                                        showToast(`${item.name} marked as ACCEPTED`);
                                      }}
                                      className="h-7 px-2 rounded-md bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-semibold text-[11px] cursor-pointer transition border border-emerald-200 dark:border-emerald-800"
                                    >
                                      Accept
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setApplicants(prev => prev.map(a => a.id === item.id ? { ...a, status: 'REJECTED' } : a));
                                        showToast(`${item.name} rejected`);
                                      }}
                                      className="h-7 px-2 rounded-md bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 font-semibold text-[11px] cursor-pointer transition border border-rose-200 dark:border-rose-800"
                                    >
                                      Reject
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setSchedulingApplicant(item);
                                        setInterviewMode('');
                                      }}
                                      className="h-7 px-2 rounded-md bg-violet-50 hover:bg-violet-100 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 font-semibold text-[11px] inline-flex items-center gap-1 cursor-pointer transition border border-violet-200 dark:border-violet-800"
                                    >
                                      <Calendar className="w-3 h-3" />
                                      <span>Interviewed</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setApplicants(prev => prev.map(a => a.id === item.id ? { ...a, status: 'REJECTED' } : a));
                                        showToast(`${item.name} rejected`);
                                      }}
                                      className="h-7 px-2 rounded-md bg-rose-600 hover:bg-rose-700 text-white font-semibold text-[11px] inline-flex items-center gap-1 cursor-pointer transition shadow-xs"
                                    >
                                      <X className="w-3 h-3" />
                                      <span>Reject</span>
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 8: DOCUMENTS VALIDATION                                    */}
          {/* ============================================================== */}
          {activeTab === 'documents' && (
            viewingDocCandidate ? (
              <div className="space-y-5">
                {/* Candidate Detail Header Card */}
                <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-lg shrink-0 shadow-xs">
                      {viewingDocCandidate.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-[18px] sm:text-[20px] font-extrabold text-[var(--tx)]">{viewingDocCandidate.name}</h2>
                        <span className="text-[10.5px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded uppercase">
                          {viewingDocCandidate.din}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/80">
                          {viewingDocCandidate.roleType}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1 flex-wrap">
                        <span className="font-medium">{viewingDocCandidate.position}</span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1 text-slate-400">
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{viewingDocCandidate.email}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 self-start sm:self-center">
                    <button
                      type="button"
                      onClick={() => setViewingDocCandidate(null)}
                      className="h-9 px-4 rounded-xl font-bold text-[12.5px] text-white bg-[#4f46e5] hover:bg-[#4338ca] transition inline-flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Candidates</span>
                    </button>
                  </div>
                </div>

                {/* 8 Documents Grid (Exact replica of media_1794554914892_269fce53.jpg) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(viewingDocCandidate.docItems || SAMPLE_8_DOCS).map((doc) => (
                    <div
                      key={doc.id}
                      className="card rounded-2xl p-5 bg-white dark:bg-[#141a25] soft border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between transition hover:shadow-sm"
                    >
                      <div>
                        {/* Top Row: Icon, Title/Version, Status Badge */}
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-900/60 shadow-2xs">
                              {doc.iconType === 'handshake' ? (
                                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                              ) : doc.iconType === 'id' ? (
                                <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                              ) : doc.iconType === 'award' ? (
                                <Bookmark className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                              ) : doc.iconType === 'check' ? (
                                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                              ) : doc.iconType === 'hourglass' ? (
                                <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                              ) : (
                                <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                              )}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-bold text-[14px] text-slate-800 dark:text-slate-100 leading-tight truncate">{doc.name}</h4>
                              <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">{doc.version}</p>
                            </div>
                          </div>

                          {doc.isDelivered ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                              <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                              <span>Delivered To Candidate</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                              <span>Draft (Not Submitted)</span>
                            </span>
                          )}
                        </div>

                        {/* Timeline Details (if delivered / submitted) */}
                        {doc.isDelivered && (
                          <div className="mt-4 pt-3 border-t bd space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                              <span>Submitted: {doc.submitted}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-slate-700 dark:text-slate-200 shrink-0" />
                              <span>Reviewed: {doc.reviewed}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <SendIcon className="w-3.5 h-3.5 text-slate-800 dark:text-slate-100 shrink-0" />
                              <span>Delivered: {doc.delivered}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons Matching Reference Image */}
                      <div className="mt-4 pt-3 border-t bd flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <button
                            type="button"
                            onClick={() => setPreviewingDoc({ doc, candidate: viewingDocCandidate })}
                            className="h-8 px-2.5 rounded-lg border bd bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-1 transition cursor-pointer shadow-2xs"
                          >
                            <Eye className="w-3.5 h-3.5 text-slate-500" />
                            <span>Preview</span>
                          </button>

                          {doc.isDelivered && (
                            <>
                              <span className="h-8 px-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold inline-flex items-center gap-1">
                                <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
                                <span>Sent to HR for Delivery</span>
                              </span>
                              <button
                                type="button"
                                onClick={() => showToast(`Downloading ${doc.name} for ${viewingDocCandidate.name}...`)}
                                className="h-8 px-2.5 rounded-lg border bd bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-1 transition cursor-pointer shadow-2xs"
                              >
                                <Download className="w-3.5 h-3.5 text-slate-500" />
                                <span>Download</span>
                              </button>
                            </>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => showToast(`Version history: ${doc.version} is active and certified`)}
                          className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 flex items-center justify-center transition cursor-pointer"
                          title="Version History"
                        >
                          <RotateCw className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-5">
              {/* Top Header Card Matching media_1794552853854_cb431337.jpg */}
              <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h1 className="text-[20px] sm:text-[22px] font-extrabold tracking-tight text-[var(--tx)]">Documents Validation</h1>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200/80 dark:border-indigo-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                        <span>Main Admin Approver</span>
                      </span>
                    </div>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-1">
                      Automated Document Certification, Main Admin Validation & Official Candidate Delivery Workflow
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start sm:self-center">
                  <button
                    type="button"
                    onClick={() => showToast('Validation Settings')}
                    className="h-9 px-3.5 rounded-xl border bd bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-500" />
                    <span>Settings</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDocCandidates([...INITIAL_DOC_CANDIDATES]);
                      showToast('Documents data refreshed');
                    }}
                    className="h-9 px-3.5 rounded-xl border bd bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 text-xs font-semibold inline-flex items-center gap-1.5 transition cursor-pointer shadow-xs"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-slate-500" />
                    <span>Refresh</span>
                  </button>
                </div>
              </div>

              {/* 5 Summary KPI Cards Matching Reference Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {/* 1: Awaiting Validation */}
                <div className="card rounded-2xl p-4 bg-white dark:bg-[#141a25] border-t-4 border-amber-400 soft flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center shrink-0 border border-amber-100 dark:border-amber-900/60">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">AWAITING VALIDATION</span>
                    <div className="text-2xl font-black text-slate-900 dark:text-slate-100 leading-none my-1">2</div>
                    <span className="text-[10.5px] text-slate-400 block truncate">0 submitted in last 24h</span>
                  </div>
                </div>

                {/* 2: Sent to HR for Correction */}
                <div className="card rounded-2xl p-4 bg-white dark:bg-[#141a25] border-t-4 border-rose-500 soft flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center shrink-0 border border-rose-100 dark:border-rose-900/60">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">SENT TO HR FOR CORRECTION</span>
                    <div className="text-2xl font-black text-slate-900 dark:text-slate-100 leading-none my-1">0</div>
                    <span className="text-[10.5px] text-slate-400 block truncate">Needs HR review & correction</span>
                  </div>
                </div>

                {/* 3: Validated & Sent to HR */}
                <div className="card rounded-2xl p-4 bg-white dark:bg-[#141a25] border-t-4 border-emerald-500 soft flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-900/60">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">VALIDATED & SENT TO HR</span>
                    <div className="text-2xl font-black text-slate-900 dark:text-slate-100 leading-none my-1">3</div>
                    <span className="text-[10.5px] text-slate-400 block truncate">Awaiting HR Candidate Dispatch</span>
                  </div>
                </div>

                {/* 4: Sent to Candidate */}
                <div className="card rounded-2xl p-4 bg-white dark:bg-[#141a25] border-t-4 border-blue-500 soft flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-500 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/60">
                    <SendIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">SENT TO CANDIDATE</span>
                    <div className="text-2xl font-black text-slate-900 dark:text-slate-100 leading-none my-1">5</div>
                    <span className="text-[10.5px] text-slate-400 block truncate">Delivered to candidate's email</span>
                  </div>
                </div>

                {/* 5: Delivery / Issues */}
                <div className="card rounded-2xl p-4 bg-white dark:bg-[#141a25] border-t-4 border-slate-300 dark:border-slate-700 soft flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">DELIVERY / ISSUES</span>
                    <div className="text-2xl font-black text-slate-900 dark:text-slate-100 leading-none my-1">0</div>
                    <span className="text-[10.5px] text-slate-400 block truncate">Retry available</span>
                  </div>
                </div>
              </div>

              {/* Search & Filter Card */}
              <div className="card rounded-2xl p-4 soft bg-white dark:bg-[#141a25] space-y-3.5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:max-w-md">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={docSearchQuery}
                      onChange={(e) => setDocSearchQuery(e.target.value)}
                      placeholder="Search by Employee ID, Name, Email, Job Title..."
                      className="w-full h-10 pl-9 pr-3.5 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900 text-[var(--tx)] focus:outline-none focus:border-indigo-500 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="w-full sm:w-auto">
                    <select
                      value={docCategory}
                      onChange={(e) => setDocCategory(e.target.value)}
                      className="w-full sm:w-auto h-10 px-3.5 rounded-xl border bd text-[12.5px] font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
                    >
                      <option value="all">All Employment Categories</option>
                      <option value="Intern">Intern</option>
                      <option value="Employee">Employee</option>
                      <option value="Freelancer">Freelancer</option>
                    </select>
                  </div>
                </div>

                {/* Filter Tabs Strip */}
                <div className="bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-xl flex items-center gap-1 overflow-x-auto">
                  {DOC_FILTER_TABS.map((tab) => {
                    const isActive = docFilterTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setDocFilterTab(tab.id)}
                        className={`h-8 px-3 rounded-lg text-[12px] whitespace-nowrap transition cursor-pointer ${
                          isActive
                            ? 'bg-[#4f46e5] text-white shadow-xs font-semibold'
                            : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Candidate Document Cards Grid (3 Columns) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {docCandidates
                  .filter((item) => {
                    if (docCategory !== 'all' && item.category !== docCategory) return false;
                    if (docFilterTab !== 'all' && item.statusFilter !== docFilterTab) return false;
                    if (docSearchQuery.trim()) {
                      const q = docSearchQuery.toLowerCase();
                      return (
                        item.name.toLowerCase().includes(q) ||
                        item.din.toLowerCase().includes(q) ||
                        item.email.toLowerCase().includes(q) ||
                        item.position.toLowerCase().includes(q)
                      );
                    }
                    return true;
                  })
                  .map((item) => {
                    const avatarLetter = item.name.charAt(0).toUpperCase();

                    return (
                      <div
                        key={item.id}
                        className="card rounded-2xl p-5 soft bg-white dark:bg-[#141a25] border bd hover:border-indigo-300 dark:hover:border-indigo-700 transition flex flex-col justify-between"
                      >
                        <div>
                          {/* Card Top: Avatar, Name, DIN, Role Badge */}
                          <div className="flex items-start justify-between gap-2.5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-300 flex items-center justify-center font-black text-base shrink-0 border border-purple-100 dark:border-purple-900/60">
                                {avatarLetter}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="font-bold text-[15px] text-slate-900 dark:text-slate-100 leading-tight">{item.name}</h3>
                                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded uppercase">
                                    {item.din}
                                  </span>
                                </div>
                                <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">{item.position}</p>
                              </div>
                            </div>
                            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800 shrink-0">
                              {item.roleType}
                            </span>
                          </div>

                          {/* Email with Lock icon */}
                          <div className="mt-3 text-[11.5px] text-slate-400 flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{item.email}</span>
                          </div>

                          {/* 4-Stat Metric Box */}
                          <div className="mt-4 grid grid-cols-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border bd p-2.5 text-center gap-1">
                            <div>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">AWAITING</span>
                              <b className="text-[13px] font-black text-slate-800 dark:text-slate-100 mt-0.5 block">{item.stats.awaiting}</b>
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">SENT TO HR</span>
                              <b className="text-[13px] font-black text-slate-800 dark:text-slate-100 mt-0.5 block">{item.stats.sentToHr}</b>
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">VALIDATED</span>
                              <b className="text-[13px] font-black text-slate-800 dark:text-slate-100 mt-0.5 block">{item.stats.validated}</b>
                            </div>
                            <div>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">SENT TO CANDIDATE</span>
                              <b className={`text-[13px] font-black mt-0.5 block ${item.stats.sentToCandidate > 0 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-100'}`}>
                                {item.stats.sentToCandidate}
                              </b>
                            </div>
                          </div>
                        </div>

                        {/* View Documents Button */}
                        <div className="mt-4 pt-2">
                          <button
                            type="button"
                            onClick={() => setViewingDocCandidate(item)}
                            className="w-full h-10 rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-[12.5px] flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs active:scale-[0.98]"
                          >
                            <span>View Documents ({item.totalDocs})</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {docCandidates.length === 0 && (
                <div className="card rounded-2xl p-10 text-center soft bg-white dark:bg-[#141a25]">
                  <p className="text-base font-semibold">No records found</p>
                  <p className="text-xs text-slate-400 mt-1">Try adjusting your search or category filters.</p>
                </div>
              )}
            </div>
            )
          )}

          {activeTab === 'team' && (
            <div className="space-y-6">
              {/* Top Header Card */}
              <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-white shadow-sm"
                    style={{ background: 'linear-gradient(135deg, #ff9a3c, #ff7a45)' }}
                  >
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h1 className="text-[18px] sm:text-[20px] font-bold tracking-tight text-[var(--tx)]">
                      About Us &amp; Team Management
                    </h1>
                    <p className="text-[11.5px] text-[#64748b] dark:text-slate-400 mt-0.5">
                      Manage content across The Minds Behind Dev Creations, Mentors, and Team sections
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setEditingMember(null);
                      setMemberForm({
                        name: '',
                        role: '',
                        bio: '',
                        section: 'team',
                        img: ''
                      });
                      setIsTeamModalOpen(true);
                    }}
                    className="h-9 px-4 rounded-lg font-semibold text-[12.5px] inline-flex items-center justify-center gap-1.5 transition text-white shadow-sm hover:opacity-95 cursor-pointer bg-[#ea580c] active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Member</span>
                  </button>
                </div>
              </div>

              {/* Add / Edit Member Inline Card (Matches media_1794560131461_2d8e410e.png) */}
              {isTeamModalOpen && (
                <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25] border bd animate-scale-up shadow-sm">
                  {/* Orange Header Bar */}
                  <div className="bg-[#ea580c] px-6 py-4 flex items-center justify-between text-white">
                    <div>
                      <h2 className="text-[17px] font-bold">
                        {editingMember ? 'Edit Member' : 'Add New Member'}
                      </h2>
                      <p className="text-[12px] text-white/80 mt-0.5">
                        Fill in member details and photo below
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsTeamModalOpen(false)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white/80 hover:text-white hover:bg-black/10 transition cursor-pointer"
                      title="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Card Body */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!memberForm.name.trim()) {
                        showToast('Please enter member name');
                        return;
                      }
                      if (!memberForm.role.trim()) {
                        showToast('Please enter member designation');
                        return;
                      }
                      if (editingMember) {
                        setTeamMembers(prev => prev.map(m => m.id === editingMember.id ? { ...m, ...memberForm } : m));
                        showToast('Member updated successfully');
                      } else {
                        const newM = {
                          id: Date.now(),
                          ...memberForm,
                          img: memberForm.img || svgPadmavathi
                        };
                        setTeamMembers(prev => [...prev, newM]);
                        showToast('Member added successfully');
                      }
                      setIsTeamModalOpen(false);
                    }}
                    className="p-6 space-y-5"
                  >
                    {/* 3 Columns Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Target Section / Category */}
                      <div>
                        <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                          Target Section / Category *
                        </label>
                        <div className="relative">
                          <select
                            value={memberForm.section}
                            onChange={(e) => setMemberForm({ ...memberForm, section: e.target.value })}
                            className="w-full h-10 px-3.5 pr-8 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] font-medium focus:outline-none focus:border-[#ea580c] cursor-pointer appearance-none shadow-2xs"
                          >
                            <option value="team">Team</option>
                            <option value="minds">The Minds Behind Dev Creations</option>
                            <option value="mentors">Mentors &amp; Strategic Advisors</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={memberForm.name}
                          onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                          placeholder="e.g. Devaraj H M, Sai Venkat"
                          className="w-full h-10 px-3.5 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] placeholder:text-slate-400 focus:outline-none focus:border-[#ea580c] shadow-2xs"
                        />
                      </div>

                      {/* Position / Designation */}
                      <div>
                        <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                          Position / Designation *
                        </label>
                        <input
                          type="text"
                          required
                          value={memberForm.role}
                          onChange={(e) => setMemberForm({ ...memberForm, role: e.target.value })}
                          placeholder="e.g. MANAGING DIRECTOR, TECHNICAL ADVISOR"
                          className="w-full h-10 px-3.5 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] placeholder:text-slate-400 focus:outline-none focus:border-[#ea580c] shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Member Photo / Avatar */}
                    <div>
                      <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                        Member Photo / Avatar
                      </label>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full border-2 border-dashed border-indigo-200 dark:border-indigo-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 shrink-0 overflow-hidden">
                          {memberForm.img ? (
                            <img src={memberForm.img} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-7 h-7 text-slate-400" />
                          )}
                        </div>

                        <div>
                          <label className="h-8 px-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#141a25] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-[12px] inline-flex items-center gap-1.5 cursor-pointer transition shadow-2xs">
                            <Upload className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
                            <span>Choose Photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onload = (ev) => {
                                    setMemberForm(prev => ({ ...prev, img: ev.target?.result }));
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                              className="hidden"
                            />
                          </label>
                          <p className="text-[11px] text-slate-400 mt-1.5">
                            Supported formats: PNG, JPG, JPEG (Max: 5MB)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bio / Description (Optional) */}
                    <div>
                      <label className="block text-[12.5px] font-bold text-slate-800 dark:text-slate-200 mb-1.5">
                        Bio / Description (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={memberForm.bio}
                        onChange={(e) => setMemberForm({ ...memberForm, bio: e.target.value })}
                        placeholder="Enter member bio or description..."
                        className="w-full p-3.5 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] placeholder:text-slate-400 focus:outline-none focus:border-[#ea580c] resize-y min-h-[90px] shadow-2xs"
                      />
                    </div>

                    {/* Action Buttons (Right-aligned) */}
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsTeamModalOpen(false)}
                        className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold text-[13px] transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold text-[13px] transition cursor-pointer shadow-xs active:scale-95"
                      >
                        Save Member
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Search Bar */}
              <div className="relative w-full sm:max-w-md">
                <input
                  type="text"
                  value={teamSearchQuery}
                  onChange={(e) => setTeamSearchQuery(e.target.value)}
                  placeholder="Search members by name or title..."
                  className="w-full h-10 px-4 rounded-xl border bd bg-white dark:bg-[#141a25] text-slate-800 dark:text-slate-100 text-[13px] placeholder:text-slate-400 focus:outline-none focus:border-[#ea580c] shadow-2xs"
                />
              </div>

              {/* SECTION 1: The Minds Behind Dev Creations */}
              <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] space-y-5">
                <div className="flex items-center justify-between pb-3 border-b bd">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 dark:bg-orange-950/50 text-[#ea580c] flex items-center justify-center border border-orange-100 dark:border-orange-900/60 shadow-2xs">
                      <Users className="w-4.5 h-4.5" />
                    </div>
                    <h2 className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-slate-100">
                      The Minds Behind Dev Creations
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingMember(null);
                      setMemberForm({
                        name: '',
                        role: 'MANAGING DIRECTOR',
                        bio: '',
                        section: 'minds',
                        img: svgPadmavathi
                      });
                      setIsTeamModalOpen(true);
                    }}
                    className="h-8 px-3 rounded-lg border border-orange-200 dark:border-orange-900/60 bg-orange-50/60 dark:bg-orange-950/40 hover:bg-orange-100/70 text-[#ea580c] text-[11.5px] font-bold inline-flex items-center gap-1 transition cursor-pointer"
                  >
                    <span>+ Add Mind</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {teamMembers
                    .filter(
                      (m) =>
                        m.section === 'minds' &&
                        (!teamSearchQuery ||
                          m.name.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                          m.role.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                          (m.bio && m.bio.toLowerCase().includes(teamSearchQuery.toLowerCase())))
                    )
                    .map((m) => (
                      <div
                        key={m.id}
                        className="card rounded-2xl p-5 bg-white dark:bg-[#141a25] border border-slate-200/90 dark:border-slate-800 soft flex flex-col items-center text-center relative hover:shadow-md transition"
                      >
                        {/* Top Right Action Buttons */}
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMember(m);
                              setMemberForm({
                                name: m.name,
                                role: m.role,
                                bio: m.bio || '',
                                section: m.section,
                                img: m.img
                              });
                              setIsTeamModalOpen(true);
                            }}
                            className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center transition cursor-pointer"
                            title="Edit Member"
                          >
                            <EditIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteMemberTarget(m)}
                            className="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-500 hover:text-rose-700 flex items-center justify-center transition cursor-pointer"
                            title="Delete Member"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Circular Avatar with Warm Ring */}
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#fffbeb] dark:border-amber-950/40 shadow-xs mb-3.5 mt-1 flex items-center justify-center bg-amber-50 shrink-0">
                          <img src={m.img} alt={m.name} className="w-full h-full object-cover select-none" />
                        </div>

                        {/* Name */}
                        <h3 className="font-bold text-[15px] text-slate-900 dark:text-slate-100 mb-1.5 leading-snug">
                          {m.name}
                        </h3>

                        {/* Role Badge */}
                        <div className="mb-1">
                          <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#fff7ed] text-[#ea580c] dark:bg-orange-950/50 dark:text-orange-400 border border-[#ffedd5] dark:border-orange-900/60">
                            {m.role}
                          </span>
                        </div>

                        {/* Bio / Subtitle */}
                        {m.bio ? (
                          <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 max-w-[220px]">
                            {m.bio}
                          </p>
                        ) : null}
                      </div>
                    ))}
                </div>
              </div>

              {/* SECTION 2: Mentors & Strategic Advisors */}
              <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] space-y-5">
                <div className="flex items-center justify-between pb-3 border-b bd">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 flex items-center justify-center border border-indigo-100 dark:border-indigo-900/60 shadow-2xs">
                      <Bookmark className="w-4.5 h-4.5" />
                    </div>
                    <h2 className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-slate-100">
                      Mentors &amp; Strategic Advisors
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingMember(null);
                      setMemberForm({
                        name: '',
                        role: 'STRATEGIC ADVISOR',
                        bio: '',
                        section: 'mentors',
                        img: svgDevaraj
                      });
                      setIsTeamModalOpen(true);
                    }}
                    className="h-8 px-3 rounded-lg border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 hover:bg-indigo-100/70 text-indigo-600 dark:text-indigo-400 text-[11.5px] font-bold inline-flex items-center gap-1 transition cursor-pointer"
                  >
                    <span>+ Add Mentor</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {teamMembers
                    .filter(
                      (m) =>
                        m.section === 'mentors' &&
                        (!teamSearchQuery ||
                          m.name.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                          m.role.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                          (m.bio && m.bio.toLowerCase().includes(teamSearchQuery.toLowerCase())))
                    )
                    .map((m) => (
                      <div
                        key={m.id}
                        className="card rounded-2xl p-5 bg-white dark:bg-[#141a25] border border-slate-200/90 dark:border-slate-800 soft flex flex-col items-center text-center relative hover:shadow-md transition"
                      >
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMember(m);
                              setMemberForm({
                                name: m.name,
                                role: m.role,
                                bio: m.bio || '',
                                section: m.section,
                                img: m.img
                              });
                              setIsTeamModalOpen(true);
                            }}
                            className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center transition cursor-pointer"
                            title="Edit Member"
                          >
                            <EditIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteMemberTarget(m)}
                            className="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-500 hover:text-rose-700 flex items-center justify-center transition cursor-pointer"
                            title="Delete Member"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#fffbeb] dark:border-amber-950/40 shadow-xs mb-3.5 mt-1 flex items-center justify-center bg-amber-50 shrink-0">
                          <img src={m.img} alt={m.name} className="w-full h-full object-cover select-none" />
                        </div>

                        <h3 className="font-bold text-[15px] text-slate-900 dark:text-slate-100 mb-1.5 leading-snug">
                          {m.name}
                        </h3>

                        <div className="mb-1">
                          <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#eef2ff] text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/60">
                            {m.role}
                          </span>
                        </div>

                        {m.bio ? (
                          <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 max-w-[220px]">
                            {m.bio}
                          </p>
                        ) : null}
                      </div>
                    ))}
                </div>
              </div>

              {/* SECTION 3: Core Engineering & Operations Team */}
              <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25] space-y-5">
                <div className="flex items-center justify-between pb-3 border-b bd">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center border border-emerald-100 dark:border-emerald-900/60 shadow-2xs">
                      <Briefcase className="w-4.5 h-4.5" />
                    </div>
                    <h2 className="text-[16px] sm:text-[17px] font-bold text-slate-900 dark:text-slate-100">
                      Core Engineering &amp; Operations Team
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingMember(null);
                      setMemberForm({
                        name: '',
                        role: 'LEAD ENGINEER',
                        bio: '',
                        section: 'team',
                        img: svgPadmavathi
                      });
                      setIsTeamModalOpen(true);
                    }}
                    className="h-8 px-3 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/40 hover:bg-emerald-100/70 text-emerald-600 dark:text-emerald-400 text-[11.5px] font-bold inline-flex items-center gap-1 transition cursor-pointer"
                  >
                    <span>+ Add Team Member</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {teamMembers
                    .filter(
                      (m) =>
                        m.section === 'team' &&
                        (!teamSearchQuery ||
                          m.name.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                          m.role.toLowerCase().includes(teamSearchQuery.toLowerCase()) ||
                          (m.bio && m.bio.toLowerCase().includes(teamSearchQuery.toLowerCase())))
                    )
                    .map((m) => (
                      <div
                        key={m.id}
                        className="card rounded-2xl p-5 bg-white dark:bg-[#141a25] border border-slate-200/90 dark:border-slate-800 soft flex flex-col items-center text-center relative hover:shadow-md transition"
                      >
                        <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingMember(m);
                              setMemberForm({
                                name: m.name,
                                role: m.role,
                                bio: m.bio || '',
                                section: m.section,
                                img: m.img
                              });
                              setIsTeamModalOpen(true);
                            }}
                            className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center justify-center transition cursor-pointer"
                            title="Edit Member"
                          >
                            <EditIcon className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteMemberTarget(m)}
                            className="w-7 h-7 rounded-lg bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/50 text-rose-500 hover:text-rose-700 flex items-center justify-center transition cursor-pointer"
                            title="Delete Member"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#fffbeb] dark:border-amber-950/40 shadow-xs mb-3.5 mt-1 flex items-center justify-center bg-amber-50 shrink-0">
                          <img src={m.img} alt={m.name} className="w-full h-full object-cover select-none" />
                        </div>

                        <h3 className="font-bold text-[15px] text-slate-900 dark:text-slate-100 mb-1.5 leading-snug">
                          {m.name}
                        </h3>

                        <div className="mb-1">
                          <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-[#ecfdf5] text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/60">
                            {m.role}
                          </span>
                        </div>

                        {m.bio ? (
                          <p className="text-[11.5px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-2 max-w-[220px]">
                            {m.bio}
                          </p>
                        ) : null}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'project-manager' && (
            <div className="space-y-6">
              {/* Header Section (Matching Screenshot) */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-[24px] sm:text-[26px] font-extrabold tracking-tight text-[var(--tx)]">
                    Project Manager
                  </h1>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Create and manage your company projects
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsBoardView(!isBoardView)}
                    className="h-9 px-3.5 rounded-xl border bd bg-white dark:bg-[#141a25] hover:bg-slate-50 dark:hover:bg-slate-800 text-[#4f46e5] dark:text-indigo-400 font-bold text-[12.5px] inline-flex items-center gap-2 transition cursor-pointer shadow-2xs"
                  >
                    <LayoutGrid className="w-4 h-4" />
                    <span>{isBoardView ? 'Table View' : 'Go to Board'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setEditingProject(null);
                      setProjectForm({
                        name: '',
                        desc: '',
                        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                        status: 'in_progress',
                        img: svgDCS
                      });
                      setIsCreateProjectOpen(true);
                    }}
                    className="h-9 px-4 rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-[12.5px] inline-flex items-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Project</span>
                  </button>
                </div>
              </div>

              {/* Filter & Search Controls Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative w-full sm:max-w-xs">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={projectSearchQuery}
                    onChange={(e) => setProjectSearchQuery(e.target.value)}
                    placeholder="Search projects by name..."
                    className="w-full h-10 pl-9 pr-4 rounded-xl border bd bg-white dark:bg-[#141a25] text-slate-800 dark:text-slate-100 text-[13px] placeholder:text-slate-400 focus:outline-none focus:border-[#4f46e5] shadow-2xs"
                  />
                </div>

                <div className="relative">
                  <select
                    value={projectCategoryFilter}
                    onChange={(e) => setProjectCategoryFilter(e.target.value)}
                    className="h-10 px-4 pr-9 rounded-xl border bd bg-white dark:bg-[#141a25] text-[12.5px] font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:border-[#4f46e5] cursor-pointer appearance-none shadow-2xs"
                  >
                    <option value="all">All Projects</option>
                    <option value="in_progress">In Progress</option>
                    <option value="planning">Planning</option>
                    <option value="completed">Completed</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* TABLE VIEW (Matching Screenshot) */}
              {!isBoardView ? (
                <div className="card rounded-2xl bg-white dark:bg-[#141a25] soft overflow-hidden border bd">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b bd text-[12px] font-bold text-slate-600 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/40">
                          <th className="py-3.5 pl-6 w-14 font-extrabold">#</th>
                          <th className="py-3.5 px-4 font-bold">Project Name</th>
                          <th className="py-3.5 px-4 font-bold">Description</th>
                          <th className="py-3.5 px-4 font-bold">Start Date</th>
                          <th className="py-3.5 pr-6 text-right font-bold">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y bd text-[13px]">
                        {projects
                          .filter((p) => {
                            const matchSearch =
                              !projectSearchQuery ||
                              p.name.toLowerCase().includes(projectSearchQuery.toLowerCase()) ||
                              p.desc.toLowerCase().includes(projectSearchQuery.toLowerCase());
                            const matchCategory =
                              projectCategoryFilter === 'all' || p.status === projectCategoryFilter;
                            return matchSearch && matchCategory;
                          })
                          .map((p, idx) => (
                            <tr
                              key={p.num + p.name}
                              className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition"
                            >
                              <td className="py-4 pl-6 font-semibold text-slate-500 dark:text-slate-400 text-xs">
                                {p.num}
                              </td>
                              <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0 border bd bg-slate-50 dark:bg-slate-900">
                                    <img src={p.img} alt={p.name} className="w-full h-full object-contain" />
                                  </div>
                                  <span className="font-bold text-slate-900 dark:text-slate-100 text-[13.5px]">
                                    {p.name}
                                  </span>
                                </div>
                              </td>
                              <td className="py-4 px-4 text-slate-600 dark:text-slate-300 max-w-[420px] truncate text-[12.5px]">
                                {p.desc}
                              </td>
                              <td className="py-4 px-4 font-medium text-slate-700 dark:text-slate-300 whitespace-nowrap text-[12px]">
                                {p.date}
                              </td>
                              <td className="py-4 pr-6 text-right whitespace-nowrap">
                                <div className="inline-flex items-center justify-end gap-2 relative">
                                  <button
                                    type="button"
                                    onClick={() => setViewingProjectDetail(p)}
                                    className="h-7 px-3 rounded-lg border border-[#e0e7ff] hover:border-[#c7d2fe] bg-white dark:bg-[#141a25] hover:bg-indigo-50/70 text-[#4f46e5] dark:text-indigo-400 font-semibold text-[11.5px] transition cursor-pointer shadow-2xs"
                                  >
                                    Open Project
                                  </button>

                                  <div className="relative">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenProjectMenuIndex(openProjectMenuIndex === idx ? null : idx);
                                      }}
                                      className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center transition cursor-pointer"
                                      title="More actions"
                                    >
                                      <MoreVertical className="w-3.5 h-3.5" />
                                    </button>

                                    {openProjectMenuIndex === idx && (
                                      <div className="absolute right-0 top-8 z-30 w-36 py-1.5 rounded-xl card bg-white dark:bg-[#141a25] border bd shadow-xl text-left text-xs animate-scale-up">
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setViewingProjectDetail(p);
                                            setOpenProjectMenuIndex(null);
                                          }}
                                          className="w-full px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-200"
                                        >
                                          <Eye className="w-3.5 h-3.5 text-indigo-500" />
                                          <span>View Details</span>
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setEditingProject(p);
                                            setProjectForm({
                                              name: p.name,
                                              desc: p.fullDesc || p.desc,
                                              date: p.date,
                                              status: p.status,
                                              img: p.img
                                            });
                                            setIsCreateProjectOpen(true);
                                            setOpenProjectMenuIndex(null);
                                          }}
                                          className="w-full px-3 py-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-200"
                                        >
                                          <EditIcon className="w-3.5 h-3.5 text-slate-500" />
                                          <span>Edit Project</span>
                                        </button>
                                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setDeleteProjectTarget(p);
                                            setOpenProjectMenuIndex(null);
                                          }}
                                          className="w-full px-3 py-1.5 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 flex items-center gap-2 cursor-pointer"
                                        >
                                          <Trash2 className="w-3.5 h-3.5" />
                                          <span>Delete</span>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                /* KANBAN BOARD VIEW */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {['planning', 'in_progress', 'review', 'completed'].map((colKey) => {
                    const colLabels = {
                      planning: { title: 'To Do', color: 'bg-slate-400', badge: 'bg-slate-100 text-slate-600' },
                      in_progress: { title: 'In Progress', color: 'bg-indigo-500', badge: 'bg-indigo-50 text-indigo-600' },
                      review: { title: 'Review', color: 'bg-amber-500', badge: 'bg-amber-50 text-amber-600' },
                      completed: { title: 'Completed', color: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-600' }
                    };
                    const colItems = projects.filter((p) => {
                      const matchCol = colKey === 'planning' ? p.status === 'planning' : colKey === 'completed' ? p.status === 'completed' : p.status === 'in_progress';
                      const matchSearch = !projectSearchQuery || p.name.toLowerCase().includes(projectSearchQuery.toLowerCase()) || p.desc.toLowerCase().includes(projectSearchQuery.toLowerCase());
                      const matchCat = projectCategoryFilter === 'all' || p.status === projectCategoryFilter;
                      return matchCol && matchSearch && matchCat;
                    });
                    const meta = colLabels[colKey];
                    return (
                      <div key={colKey} className="card rounded-2xl p-4 bg-white dark:bg-[#141a25] border bd space-y-3 flex flex-col">
                        <div className="flex items-center justify-between pb-2 border-b bd">
                          <div className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${meta.color}`} />
                            <h3 className="font-bold text-[13.5px]">{meta.title}</h3>
                          </div>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${meta.badge}`}>
                            {colItems.length}
                          </span>
                        </div>
                        <div className="space-y-3 flex-1 min-h-[140px]">
                          {colItems.map((p) => (
                            <div
                              key={p.num + p.name}
                              onClick={() => setViewingProjectDetail(p)}
                              className="p-3.5 rounded-xl border bd bg-slate-50/70 dark:bg-slate-900/50 hover:shadow-sm transition space-y-2.5 cursor-pointer"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-6 h-6 rounded overflow-hidden shrink-0">
                                    <img src={p.img} alt="" className="w-full h-full object-contain" />
                                  </div>
                                  <span className="font-bold text-xs text-slate-900 dark:text-slate-100">{p.name}</span>
                                </div>
                                <span className="text-[10px] font-semibold text-slate-400">#{p.num}</span>
                              </div>
                              <p className="text-[11.5px] text-slate-500 line-clamp-2">{p.desc}</p>
                              <div className="flex items-center justify-between pt-1 border-t bd text-[10.5px] text-slate-400">
                                <span>{p.date}</span>
                                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{p.completed}/{p.tasks} Tasks</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {activeTab === 'access' && (
            <div className="space-y-8 py-4">
              {/* Top Centered Title (Matches media_1794561004086_f7f4418f.png) */}
              <div className="text-center space-y-1.5 pt-2">
                <h1 className="text-2xl sm:text-[32px] font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                  Application Access
                </h1>
                <p className="text-[13.5px] text-[#64748b] dark:text-slate-400">
                  Quick access to external applications and services
                </p>
              </div>

              {/* 6 Cards Grid */}
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {/* 1. GitHub */}
                <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25] border bd flex flex-col justify-between hover:shadow-md transition">
                  <div className="h-44 bg-[#f4f5f7] dark:bg-slate-800/50 border-b bd flex items-center justify-center p-6">
                    <svg className="w-16 h-16 text-[#181717] dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-bold text-slate-900 dark:text-slate-100">GitHub</h3>
                      <p className="text-[12.5px] text-[#64748b] dark:text-slate-400 leading-relaxed">
                        Version control and code repository management
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAccessModalService({ name: 'GitHub', desc: 'Version control and code repository management' })}
                      className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-[13px] bg-[#5c56d6] hover:bg-[#4f48cb] active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      Give Access
                    </button>
                  </div>
                </div>

                {/* 2. Firebase */}
                <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25] border bd flex flex-col justify-between hover:shadow-md transition">
                  <div className="h-44 bg-[#fffbf0] dark:bg-amber-950/20 border-b bd flex items-center justify-center p-6">
                    <svg className="w-16 h-16" viewBox="0 0 40 40" fill="none">
                      <path d="M7.8 28.5L14.2 4.8C14.4 4.1 15.3 3.9 15.8 4.5L20.2 11.2L7.8 28.5Z" fill="#FFA000"/>
                      <path d="M24.8 14.9L20.2 6.1C19.8 5.4 18.8 5.5 18.5 6.2L7.8 28.5L24.8 14.9Z" fill="#F57C00"/>
                      <path d="M21.2 36.1C26.5 36.1 30.8 31.8 30.8 26.5C30.8 21.2 26 18.5 24.5 15.2C23.2 18.4 18.8 21.5 18.8 26.5C18.8 31.8 21.2 36.1 21.2 36.1Z" fill="#FFCA28"/>
                      <path d="M30.6 28.5L24.8 14.9L7.8 28.5C9.8 33 14.5 36.1 20 36.1C25.5 36.1 28.8 33.5 30.6 28.5Z" fill="#FFA000"/>
                    </svg>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-bold text-slate-900 dark:text-slate-100">Firebase</h3>
                      <p className="text-[12.5px] text-[#64748b] dark:text-slate-400 leading-relaxed">
                        Backend as a Service platform by Google
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAccessModalService({ name: 'Firebase', desc: 'Backend as a Service platform by Google' })}
                      className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-[13px] bg-[#5c56d6] hover:bg-[#4f48cb] active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      Give Access
                    </button>
                  </div>
                </div>

                {/* 3. AWS */}
                <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25] border bd flex flex-col justify-between hover:shadow-md transition">
                  <div className="h-44 bg-[#fffdf7] dark:bg-amber-950/20 border-b bd flex items-center justify-center p-6">
                    <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none">
                      <path d="M52 48.5c-4.2 0-7.8 1.2-10 2.5l1.6 5.2c1.8-1 4.5-1.9 7.4-1.9 4.8 0 7 2.4 7 6.4v1.8c-2.4-.4-5.2-.6-8.2-.6-7.8 0-12.8 4.2-12.8 10.6 0 6.2 4.6 10.1 11.4 10.1 5.2 0 8.6-2.4 10.4-5.5h.4l.6 4.7h6.6V58.8c0-7.4-4.8-10.3-14.4-10.3zm5.8 21.2c0 1.6-.6 3.2-1.8 4.4-1.6 1.6-4.2 2.6-7 2.6-4 0-6.4-2.2-6.4-5.4 0-3.6 2.8-5.6 7.4-5.6 2.6 0 5.4.4 7.8.8v3.2z" fill="#232F3E"/>
                      <path d="M33 76.8c11.8 8.8 28.2 9.2 40.8 1.4.6-.4.4-1.2-.2-1.4-1.8-.8-5.6-2.2-5.6-2.2-.4-.2-.8 0-1 .4-9.8 6.4-23 6-32.2-.8-.4-.4-1-.2-1.2.2 0 0-.4 1.6-.6 2.4z" fill="#FF9900"/>
                      <path d="M74.8 74.6c.4-.6 1.8-2 2.2-2.6.4-.6.2-1.2-.4-1.4l-6.8-2.6c-.6-.2-1.2.2-1 1 .6 2 1.4 4.8 2 6.8.2.6.8.8 1.4.4.8-.4 2.2-1.2 2.6-1.6z" fill="#FF9900"/>
                    </svg>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-bold text-slate-900 dark:text-slate-100">AWS</h3>
                      <p className="text-[12.5px] text-[#64748b] dark:text-slate-400 leading-relaxed">
                        Amazon Web Services cloud platform
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAccessModalService({ name: 'AWS', desc: 'Amazon Web Services cloud platform' })}
                      className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-[13px] bg-[#5c56d6] hover:bg-[#4f48cb] active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      Give Access
                    </button>
                  </div>
                </div>

                {/* 4. MongoDB */}
                <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25] border bd flex flex-col justify-between hover:shadow-md transition">
                  <div className="h-44 bg-[#f8fafc] dark:bg-slate-800/40 border-b bd flex items-center justify-center p-6">
                    <svg className="h-12 w-auto max-w-[210px]" viewBox="0 0 240 70" fill="none">
                      <g transform="translate(10, 5)">
                        <path d="M28 2C27.5 2 24.5 9 23.5 13C21 23 15 31 15 42C15 50.5 21 57.5 28 60C35 57.5 41 50.5 41 42C41 31 35 23 32.5 13C31.5 9 28.5 2 28 2Z" fill="#13AA52"/>
                        <path d="M28 2V60C35 57.5 41 50.5 41 42C41 31 35 23 32.5 13C31.5 9 28.5 2 28 2Z" fill="#116149"/>
                        <path d="M28 50C27.5 50 27 48 27.2 45C27.6 38 28 30 28 22V50Z" fill="#FFFFFF" opacity="0.3"/>
                      </g>
                      <text x="68" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="34" fill="#001E2B" className="dark:fill-slate-100" letterSpacing="-0.5">MongoDB</text>
                    </svg>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-bold text-slate-900 dark:text-slate-100">MongoDB</h3>
                      <p className="text-[12.5px] text-[#64748b] dark:text-slate-400 leading-relaxed">
                        NoSQL document database for scalable modern web apps
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAccessModalService({ name: 'MongoDB', desc: 'NoSQL document database for scalable modern web apps' })}
                      className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-[13px] bg-[#5c56d6] hover:bg-[#4f48cb] active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      Give Access
                    </button>
                  </div>
                </div>

                {/* 5. TiDB */}
                <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25] border bd flex flex-col justify-between hover:shadow-md transition">
                  <div className="h-44 bg-[#f8fafc] dark:bg-slate-800/40 border-b bd flex items-center justify-center p-6">
                    <svg className="h-12 w-auto max-w-[190px]" viewBox="0 0 200 65" fill="none">
                      <g transform="translate(12, 4)">
                        <path d="M24 0L48 14V42L24 56L0 42V14L24 0Z" fill="#E30C34"/>
                        <path d="M24 10L40 19.5V36.5L24 46L8 36.5V19.5L24 10Z" fill="#FFFFFF"/>
                        <path d="M24 13L36 20.5V26H27V42H21V26H12V20.5L24 13Z" fill="#E30C34"/>
                      </g>
                      <text x="74" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="38" fill="#17233D" className="dark:fill-slate-100" letterSpacing="-0.5">TiDB</text>
                    </svg>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-bold text-slate-900 dark:text-slate-100">TiDB</h3>
                      <p className="text-[12.5px] text-[#64748b] dark:text-slate-400 leading-relaxed">
                        Distributed SQL database for real-time elastic transactions
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAccessModalService({ name: 'TiDB', desc: 'Distributed SQL database for real-time elastic transactions' })}
                      className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-[13px] bg-[#5c56d6] hover:bg-[#4f48cb] active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      Give Access
                    </button>
                  </div>
                </div>

                {/* 6. DCS */}
                <div className="card rounded-2xl overflow-hidden soft bg-white dark:bg-[#141a25] border bd flex flex-col justify-between hover:shadow-md transition">
                  <div className="h-44 bg-[#f0fdf4] dark:bg-emerald-950/20 border-b bd flex items-center justify-center p-6">
                    <svg className="w-18 h-18 text-[#059669]" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-bold text-slate-900 dark:text-slate-100">DCS</h3>
                      <p className="text-[12.5px] text-[#64748b] dark:text-slate-400 leading-relaxed">
                        Internal Dev Creations &amp; Solutions core infrastructure &amp; secure portal
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAccessModalService({ name: 'DCS', desc: 'Dev Creations core administrative and cloud infrastructure' })}
                      className="w-full py-2.5 px-4 rounded-xl text-white font-semibold text-[13px] bg-[#5c56d6] hover:bg-[#4f48cb] active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      Give Access
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Slide-out Drawer */}
      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen(false)}
          className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        className={`fixed left-0 top-0 z-[71] h-full w-72 max-w-[85vw] flex flex-col card border-y-0 border-l-0 transition-transform duration-200 lg:hidden ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <img src="/logo.png" alt="Dev Creations and Solutions" className="h-10 w-auto max-w-[170px] object-contain" />
          <button
            onClick={() => setIsNavOpen(false)}
            className="w-8 h-8 rounded-lg mu flex items-center justify-center hover:opacity-75 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2.5 py-2 space-y-0.5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'banners' || item.id === 'gallery' || item.id === 'blogs' || item.id === 'contacts' || item.id === 'client-logos' || item.id === 'websites' || item.id === 'employees' || item.id === 'documents' || item.id === 'team' || item.id === 'project-manager' || item.id === 'access') {
                    setActiveTab(item.id);
                  } else {
                    showToast(`${item.name} section`);
                  }
                  setIsNavOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 h-9 px-2.5 rounded-lg text-[12.5px] transition cursor-pointer text-left ${
                  isActive
                    ? 'border border-orange-400/90 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'font-medium text-[var(--tx)] hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'
                  }`}
                />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        <p className="text-center text-[11px] mu py-3 border-t bd">DCS Admin v1.0.0</p>
      </aside>

{/* View Applicant Modal (Compact, matching screenshots) */}
      {viewingApplicant && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-[640px] w-full max-h-[90vh] overflow-y-auto shadow-2xl bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border border-slate-100 dark:border-slate-800">
            <div className="sheet-drag-handle sm:hidden mt-3" />
            {/* Header */}
            <div className="px-5 py-3.5 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-[15px] text-slate-900 dark:text-slate-100">
                  New Application Details - <span className="text-[#ea580c]">{viewingApplicant.name}</span>
                </h3>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#fff7ed] text-[#ea580c] dark:bg-orange-950/40 dark:text-orange-400 border border-[#ffedd5] dark:border-orange-900/60">
                  {viewingApplicant.status}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setViewingApplicant(null)}
                className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-400 transition cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              {/* Applicant Profile Card */}
              <div className="rounded-xl border border-slate-100 dark:border-slate-800/80 bg-[#fbfcfd] dark:bg-slate-900/40 p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-[#ea580c] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                    {viewingApplicant.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-[14px] text-slate-900 dark:text-slate-100">{viewingApplicant.name}</div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      <span className="inline-flex items-center gap-1">
                        <Mail className="w-3 h-3 text-[#ea580c]" />
                        <span>{viewingApplicant.email}</span>
                      </span>
                      {viewingApplicant.phone && (
                        <span className="inline-flex items-center gap-1">
                          <Phone className="w-3 h-3 text-emerald-600" />
                          <span>{viewingApplicant.phone}</span>
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-violet-600" />
                        <span>{viewingApplicant.position}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 self-start sm:self-center shrink-0">
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-[#fff7ed] text-[#ea580c] dark:bg-orange-950/40 dark:text-orange-400 border border-[#ffedd5] dark:border-orange-900/60">
                    {viewingApplicant.role}
                  </span>
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10.5px] font-bold uppercase bg-[#fff7ed] text-[#ea580c] dark:bg-orange-950/40 dark:text-orange-400 border border-[#ffedd5] dark:border-orange-900/60">
                    {viewingApplicant.status}
                  </span>
                </div>
              </div>

              {/* Main Application Details Card */}
              <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">POSITION APPLIED</span>
                    <span className="font-bold text-[13px] text-slate-800 dark:text-slate-100">{viewingApplicant.position}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">ROLE / TYPE</span>
                    <span className="font-bold text-[13px] text-slate-800 dark:text-slate-100">{viewingApplicant.role}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">PREVIOUS EXPERIENCE (IN YEARS)</span>
                  <div className="font-bold text-[13px] text-slate-800 dark:text-slate-100">{viewingApplicant.experience}</div>
                  {viewingApplicant.subExperience && (
                    <div className="text-[11px] text-slate-400 mt-0.5">{viewingApplicant.subExperience}</div>
                  )}
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">APPLIED DATE</span>
                  <div className="font-bold text-[13px] text-slate-800 dark:text-slate-100">{viewingApplicant.date}</div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">RESUME / CV DOCUMENT</span>
                  <div className="rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-2xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[12.5px] text-slate-800 dark:text-slate-100 truncate">
                          {viewingApplicant.resume || `${viewingApplicant.name} (Resume).pdf`}
                        </div>
                        <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-[9.5px] font-medium bg-[#ecfdf5] text-[#059669] dark:bg-emerald-950/40 dark:text-emerald-400 border border-[#a7f3d0] dark:border-emerald-800">
                          PDF Ready for View & Download
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        type="button"
                        onClick={() => showToast(`Viewing ${viewingApplicant.name} Resume`)}
                        className="h-8 px-2.5 rounded-lg bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-[11px] flex items-center gap-1 transition cursor-pointer shadow-xs"
                      >
                        <Eye className="w-3 h-3" />
                        <span>View Resume</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => showToast(`Downloading ${viewingApplicant.name} Resume PDF`)}
                        className="h-8 px-2.5 rounded-lg bg-[#2563eb] hover:bg-blue-700 text-white font-bold text-[11px] flex items-center gap-1 transition cursor-pointer shadow-xs"
                      >
                        <Download className="w-3 h-3" />
                        <span>Download PDF</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => showToast(`Share link copied for ${viewingApplicant.name}`)}
                        className="h-8 px-2.5 rounded-lg bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-[11px] flex items-center gap-1 transition cursor-pointer shadow-xs"
                      >
                        <Share2 className="w-3 h-3" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-2 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setViewingApplicant(null)}
                  className="h-8 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-[12px] transition cursor-pointer shadow-2xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Interview Modal (matching media_1794550389356, 372, 381) */}
      {schedulingApplicant && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border border-slate-100 dark:border-slate-800">
            <div className="sheet-drag-handle sm:hidden mt-3" />
            {/* Header */}
            <div className="p-6 pb-4 flex items-start justify-between border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[18px] text-slate-900 dark:text-slate-100 leading-tight">Schedule Interview</h3>
                  <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Applicant: <span className="font-semibold text-slate-700 dark:text-slate-300">{schedulingApplicant.name} ({schedulingApplicant.position})</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSchedulingApplicant(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-400 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              {/* Applicant Summary Card */}
              <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#ea580c] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-xs">
                  {schedulingApplicant.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-[15px] text-slate-900 dark:text-slate-100">{schedulingApplicant.name}</div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-slate-500 dark:text-slate-400 mt-1">
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{schedulingApplicant.email}</span>
                    </span>
                    {schedulingApplicant.phone && (
                      <span className="inline-flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>{schedulingApplicant.phone}</span>
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>{schedulingApplicant.position}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Mode of Interview Dropdown */}
              <div>
                <label className="block text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2">
                  Mode of Interview <span className="text-red-500">*</span>
                </label>
                <select
                  value={interviewMode}
                  onChange={(e) => setInterviewMode(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-[13.5px] font-medium focus:outline-none focus:border-indigo-500 cursor-pointer"
                >
                  <option value="">-- Select Mode of Interview --</option>
                  <option value="offline">🏢 Offline (In-Person / Office)</option>
                  <option value="online">🌐 Online (Virtual Meeting)</option>
                </select>
              </div>

              {/* Offline Fields */}
              {interviewMode === 'offline' && (
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-[13px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-red-500" />
                        <span>Location / Office Address <span className="text-red-500">*</span></span>
                      </label>
                      <button
                        type="button"
                        onClick={() => setInterviewAddress('1st floor, 88, KR Defense Colony, Cheemasandra, Bengaluru, Karnataka, India - 560049')}
                        className="px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-800 bg-amber-50/80 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-semibold text-[11px] inline-flex items-center gap-1 cursor-pointer transition hover:bg-amber-100"
                      >
                        🏢 Use DCS Office Address
                      </button>
                    </div>
                    <input
                      type="text"
                      value={interviewAddress}
                      onChange={(e) => setInterviewAddress(e.target.value)}
                      placeholder="1st floor, 88, KR Defense Colony, Cheemasandra, Bengaluru, Karnataka, India - 560049"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#ea580c]" />
                      <span>Timing / Date &amp; Time <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="datetime-local"
                      value={interviewDateTime}
                      onChange={(e) => setInterviewDateTime(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}

              {/* Online Fields */}
              {interviewMode === 'online' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                      <Video className="w-4 h-4 text-blue-600" />
                      <span>Meeting Link <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="text"
                      value={interviewMeetingLink}
                      onChange={(e) => setInterviewMeetingLink(e.target.value)}
                      placeholder="e.g., https://meet.google.com/abc-defg-hij or Zoom link"
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      <span>Timing / Date &amp; Time <span className="text-red-500">*</span></span>
                    </label>
                    <input
                      type="datetime-local"
                      value={interviewDateTime}
                      onChange={(e) => setInterviewDateTime(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>
              )}

              {/* Official Email Dispatch Delivery Preview Card */}
              <div className="rounded-2xl border border-blue-100 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-4 space-y-2 text-[12px]">
                <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-indigo-600" />
                  <span>Official Email Dispatch Delivery:</span>
                </div>
                <div className="space-y-1 text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 w-28 shrink-0">To (Applicant):</span>
                    <span className="font-bold text-slate-800 dark:text-slate-100">{schedulingApplicant.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 w-28 shrink-0">Cc (HR &amp; Admin):</span>
                    <span className="font-medium">hr@devcreationsblr.com, devcreationsblr@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 w-28 shrink-0">Reply-To:</span>
                    <span className="font-medium">hr@devcreationsblr.com</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSchedulingApplicant(null)}
                  className="h-11 px-6 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-200 font-bold text-[13.5px] transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!interviewMode) {
                      showToast('Please select Mode of Interview');
                      return;
                    }
                    setApplicants(prev => prev.map(a => a.id === schedulingApplicant.id ? { ...a, status: 'INTERVIEW' } : a));
                    setSchedulingApplicant(null);
                    showToast(`Interview scheduled for ${schedulingApplicant.name}`);
                  }}
                  className="h-11 px-6 rounded-xl font-bold text-[13.5px] text-white transition cursor-pointer shadow-sm hover:opacity-95"
                  style={{ background: 'linear-gradient(135deg, #fba170, #f88a4e)' }}
                >
                  <Eye className="w-4 h-4 inline-block mr-1.5" />
                  <span>Preview Schedule</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Member Modal */}
      {isAddMemberOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl p-5 bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd">
            <div className="sheet-drag-handle sm:hidden mt-2" />
            <div className="flex items-center justify-between pb-3 border-b bd mb-4">
              <h3 className="font-bold text-[15px] text-[var(--tx)]">Add Team / Pipeline Member</h3>
              <button
                type="button"
                onClick={() => setIsAddMemberOpen(false)}
                className="w-7 h-7 rounded-lg mu flex items-center justify-center hover:opacity-75 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  value={newMemberName}
                  onChange={(e) => setNewMemberName(e.target.value)}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full h-9 px-3 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900 text-[var(--tx)] focus:outline-none focus:border-[#ea580c]"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1">Role Type</label>
                  <select
                    value={newMemberRole}
                    onChange={(e) => setNewMemberRole(e.target.value)}
                    className="w-full h-9 px-2.5 rounded-xl border bd text-[12px] bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none focus:border-[#ea580c]"
                  >
                    <option value="Employee">Employee</option>
                    <option value="Intern">Intern</option>
                    <option value="Freelancer">Freelancer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1">Position *</label>
                  <input
                    type="text"
                    value={newMemberPos}
                    onChange={(e) => setNewMemberPos(e.target.value)}
                    placeholder="e.g. React Developer"
                    className="w-full h-9 px-3 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900 text-[var(--tx)] focus:outline-none focus:border-[#ea580c]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1">Email *</label>
                <input
                  type="email"
                  value={newMemberEmail}
                  onChange={(e) => setNewMemberEmail(e.target.value)}
                  placeholder="ramesh@example.com"
                  className="w-full h-9 px-3 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900 text-[var(--tx)] focus:outline-none focus:border-[#ea580c]"
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1">Phone</label>
                <input
                  type="tel"
                  value={newMemberPhone}
                  onChange={(e) => setNewMemberPhone(e.target.value)}
                  placeholder="9876543210"
                  className="w-full h-9 px-3 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900 text-[var(--tx)] focus:outline-none focus:border-[#ea580c]"
                />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddMemberOpen(false)}
                  className="flex-1 h-9 rounded-xl border bd text-slate-700 dark:text-slate-300 font-semibold text-[12px] hover:bg-slate-50 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!newMemberName.trim() || !newMemberPos.trim() || !newMemberEmail.trim()) {
                      showToast('Please fill all required fields');
                      return;
                    }
                    const newEntry = {
                      id: Date.now(),
                      name: newMemberName.trim(),
                      email: newMemberEmail.trim(),
                      phone: newMemberPhone.trim(),
                      role: newMemberRole,
                      position: newMemberPos.trim(),
                      experience: newMemberExp,
                      subExperience: '',
                      date: new Date().toLocaleDateString('en-GB'),
                      status: 'PENDING',
                      section: 'apps',
                      resume: `${newMemberName.trim()} (Resume).pdf`
                    };
                    setApplicants(prev => [newEntry, ...prev]);
                    setIsAddMemberOpen(false);
                    setNewMemberName('');
                    setNewMemberPos('');
                    setNewMemberEmail('');
                    setNewMemberPhone('');
                    showToast('Member added to applications pipeline');
                  }}
                  className="flex-1 h-9 rounded-xl bg-[#ea580c] text-white font-semibold text-[12px] hover:opacity-95 transition cursor-pointer"
                >
                  Save Member
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certified Document Preview Modal */}
      {previewingDoc && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd">
            <div className="sheet-drag-handle sm:hidden mt-3" />
            <div className="p-4 px-5 border-b bd flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-[14.5px] text-slate-900 dark:text-slate-100">
                    {previewingDoc.doc.name} - {previewingDoc.doc.version}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Candidate: {previewingDoc.candidate.name} ({previewingDoc.candidate.din})
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPreviewingDoc(null)}
                className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/60 max-h-[70vh] overflow-y-auto">
              <div className="bg-white dark:bg-[#182030] p-6 rounded-xl border bd shadow-sm space-y-4 text-[12px] text-slate-700 dark:text-slate-300">
                <div className="flex items-center justify-between pb-3 border-b bd">
                  <div>
                    <div className="text-[15px] font-black tracking-tight text-slate-900 dark:text-slate-100">DEV CREATIONS &amp; SOLUTIONS</div>
                    <div className="text-[10px] text-slate-400">Official Document Certification Registry</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200">
                    OFFICIAL CERTIFIED
                  </span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border bd space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{previewingDoc.doc.name}</span>
                    <span className="font-mono text-slate-500">REF-DCS-2026-VAL</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    This document certifies the official validation status of <strong>{previewingDoc.candidate.name}</strong> as <strong>{previewingDoc.candidate.position}</strong>. Background verification, security clearances, and document authentication have been completed by Main Admin Approver.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-slate-500">
                    <div>Effective Date: <strong>22/10/2026</strong></div>
                    <div>Validation Status: <strong>Certified Official</strong></div>
                  </div>
                </div>
                <div className="pt-4 border-t bd flex items-center justify-between text-[11px] text-slate-400">
                  <span>Digitally Certified &amp; Approved by Main Admin</span>
                  <span>Security Token: DCS-CERT-2026-VAL</span>
                </div>
              </div>
            </div>
            <div className="p-4 border-t bd flex items-center justify-between">
              <button
                type="button"
                onClick={() => showToast(`Downloading ${previewingDoc.doc.name} PDF...`)}
                className="h-9 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-[12px] inline-flex items-center gap-1.5 transition cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setPreviewingDoc(null)}
                className="h-9 px-4 rounded-lg border bd text-slate-700 dark:text-slate-300 font-semibold text-[12px] hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setPreviewItem(null)}
        >
          <div
            className="max-h-[85vh] max-w-full rounded-2xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {previewItem.img ? (
              <img src={previewItem.img} className="max-h-[85vh] max-w-full object-contain rounded-2xl" alt="" />
            ) : (
              <div
                className="w-[90vw] max-w-3xl aspect-[12/5] flex flex-col items-center justify-center text-7xl rounded-2xl"
                style={{ background: 'var(--tile)', color: '#ea580c' }}
              >
                <ImageIcon className="w-16 h-16" />
                <span className="text-sm font-semibold mt-3 text-[var(--tx)]">{previewItem.name}</span>
              </div>
            )}
          </div>
        </div>
      )}



      {/* Delete Member Confirmation Modal */}
      {deleteMemberTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-sm w-full p-6 bg-white dark:bg-[#141a25] shadow-2xl mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd">
            <div className="sheet-drag-handle sm:hidden -mt-1 mb-4" />
            <h3 className="font-bold text-[14.5px] text-slate-900 dark:text-slate-100 mb-1">Delete Member?</h3>
            <p className="text-xs text-slate-500 mb-4">
              "{deleteMemberTarget.name}" will be permanently removed from the team directory.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDeleteMemberTarget(null)}
                className="flex-1 h-9 rounded-lg border bd text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setTeamMembers(prev => prev.filter(m => m.id !== deleteMemberTarget.id));
                  setDeleteMemberTarget(null);
                  showToast('Member deleted successfully');
                }}
                className="flex-1 h-9 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create / Edit Project Modal (Exact Match to media_1794559745183_b15f39f3.png) */}
      {isCreateProjectOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 sm:p-7 bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd space-y-4">
            <div className="sheet-drag-handle sm:hidden -mt-1 mb-2" />
            <h3 className="font-bold text-[18px] text-slate-900 dark:text-slate-100">
              {editingProject ? `Edit Project - ${editingProject.name}` : 'Create New Project'}
            </h3>

            <div className="space-y-3.5">
              {/* Project Name */}
              <div>
                <input
                  type="text"
                  value={projectForm.name}
                  onChange={(e) => setProjectForm({ ...projectForm, name: e.target.value })}
                  placeholder="Project Name *"
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-[13px] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-[#4f46e5]"
                />
              </div>

              {/* Project Description */}
              <div>
                <textarea
                  rows={4}
                  value={projectForm.desc}
                  onChange={(e) => setProjectForm({ ...projectForm, desc: e.target.value })}
                  placeholder="Project Description *"
                  className="w-full p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-[13px] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-[#4f46e5] resize-none"
                />
              </div>

              {/* Dates Row (2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Start Date */}
                <div>
                  <fieldset className="rounded-xl border border-slate-200 dark:border-slate-800 px-3 pb-2 pt-0 focus-within:border-[#4f46e5]">
                    <legend className="text-[11px] text-slate-400 px-1 font-medium select-none">Project Start Date</legend>
                    <input
                      type="date"
                      value={projectForm.date ? (projectForm.date.includes('-') ? projectForm.date : '2024-08-16') : ''}
                      onChange={(e) => setProjectForm({ ...projectForm, date: e.target.value })}
                      className="w-full bg-transparent text-[13px] text-slate-800 dark:text-slate-100 focus:outline-none cursor-pointer"
                    />
                  </fieldset>
                </div>

                {/* Deadline */}
                <div>
                  <fieldset className="rounded-xl border border-slate-200 dark:border-slate-800 px-3 pb-2 pt-0 focus-within:border-[#4f46e5]">
                    <legend className="text-[11px] text-slate-400 px-1 font-medium select-none">Project Deadline</legend>
                    <input
                      type="date"
                      value={projectForm.deadline || ''}
                      onChange={(e) => setProjectForm({ ...projectForm, deadline: e.target.value })}
                      className="w-full bg-transparent text-[13px] text-slate-800 dark:text-slate-100 focus:outline-none cursor-pointer"
                    />
                  </fieldset>
                  <p className="text-[10.5px] text-slate-400 mt-1 pl-1">Optional - leave blank if there is no fixed deadline</p>
                </div>
              </div>

              {/* Logo Upload Row */}
              <div className="pt-1">
                <div className="flex items-center gap-3">
                  {/* Icon Preview / Code mark box */}
                  <div className="w-11 h-11 rounded-xl bg-[#eef2ff] dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center text-[#4f46e5] dark:text-indigo-400 shrink-0 font-bold text-sm overflow-hidden shadow-2xs">
                    {projectForm.hasCustomImg ? (
                      <img src={projectForm.img} alt="" className="w-full h-full object-contain" />
                    ) : (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                      </svg>
                    )}
                  </div>

                  <div>
                    <label className="h-8 px-3 rounded-lg border border-[#dbeafe] hover:border-[#bfdbfe] bg-white dark:bg-[#141a25] hover:bg-indigo-50/60 text-[#4f46e5] dark:text-indigo-400 font-semibold text-[12px] inline-flex items-center gap-1.5 cursor-pointer transition shadow-2xs">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Logo</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (ev) => {
                              setProjectForm(prev => ({ ...prev, img: ev.target?.result, hasCustomImg: true }));
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                    <p className="text-[11px] text-slate-400 mt-1">Optional - falls back to a colored icon if none is uploaded</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsCreateProjectOpen(false)}
                  className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold text-[13px] transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!projectForm.name.trim() || !projectForm.desc.trim()) {
                      showToast('Please fill all required fields');
                      return;
                    }
                    const formattedDate = projectForm.date && projectForm.date.includes('-')
                      ? new Date(projectForm.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
                      : (projectForm.date || '16 Aug 2024');

                    if (editingProject) {
                      setProjects(prev => prev.map(p => p.name === editingProject.name ? {
                        ...p,
                        name: projectForm.name,
                        desc: projectForm.desc,
                        fullDesc: projectForm.desc,
                        date: formattedDate,
                        deadline: projectForm.deadline,
                        img: projectForm.hasCustomImg ? projectForm.img : p.img
                      } : p));
                      showToast('Project updated successfully');
                    } else {
                      const nextNum = (projects.length + 1).toString().padStart(2, '0');
                      const newP = {
                        num: nextNum,
                        name: projectForm.name.trim(),
                        desc: projectForm.desc.trim(),
                        fullDesc: projectForm.desc.trim(),
                        date: formattedDate,
                        deadline: projectForm.deadline,
                        status: 'in_progress',
                        img: projectForm.hasCustomImg ? projectForm.img : generateFallbackIcon(projectForm.name.trim()),
                        tasks: 10,
                        completed: 2
                      };
                      setProjects(prev => [...prev, newP]);
                      showToast('Project created successfully');
                    }
                    setIsCreateProjectOpen(false);
                  }}
                  className="px-5 py-2 rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-semibold text-[13px] transition cursor-pointer shadow-xs active:scale-95"
                >
                  {editingProject ? 'Save Changes' : 'Create Project'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {viewingProjectDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl p-6 bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd space-y-5">
            <div className="sheet-drag-handle sm:hidden -mt-1 mb-2" />
            <div className="flex items-start justify-between pb-3 border-b bd">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shrink-0 border bd bg-slate-50 dark:bg-slate-900">
                  <img src={viewingProjectDetail.img} alt="" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {viewingProjectDetail.name}
                  </h2>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="px-2 py-0.5 text-[10.5px] font-bold rounded-full uppercase bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                      {viewingProjectDetail.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Started: {viewingProjectDetail.date}
                    </span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setViewingProjectDetail(null)}
                className="w-7 h-7 rounded-lg text-slate-400 hover:text-slate-600 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h4 className="text-[12px] font-bold uppercase text-slate-400 tracking-wider mb-1">Description</h4>
              <p className="text-[13px] text-slate-700 dark:text-slate-300 leading-relaxed">
                {viewingProjectDetail.fullDesc || viewingProjectDetail.desc}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border bd">
                <div className="text-[11px] font-bold text-slate-400">Total Tasks</div>
                <div className="text-[18px] font-black text-slate-800 dark:text-slate-100 mt-0.5">
                  {viewingProjectDetail.tasks}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60">
                <div className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Completed</div>
                <div className="text-[18px] font-black text-emerald-700 dark:text-emerald-300 mt-0.5">
                  {viewingProjectDetail.completed}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60">
                <div className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">Progress</div>
                <div className="text-[18px] font-black text-indigo-700 dark:text-indigo-300 mt-0.5">
                  {Math.round((viewingProjectDetail.completed / viewingProjectDetail.tasks) * 100)}%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-3 border-t bd">
              <button
                type="button"
                onClick={() => setViewingProjectDetail(null)}
                className="h-9 px-4 rounded-xl border bd text-[12.5px] font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  showToast(`Opening Kanban Board for ${viewingProjectDetail.name}`);
                  setViewingProjectDetail(null);
                  setIsBoardView(true);
                }}
                className="h-9 px-4 rounded-xl bg-[#4f46e5] hover:bg-[#4338ca] text-white text-[12.5px] font-semibold transition cursor-pointer shadow-xs"
              >
                View Project Board
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Project Confirmation Modal */}
      {deleteProjectTarget && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-sm w-full p-6 bg-white dark:bg-[#141a25] shadow-2xl mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd">
            <div className="sheet-drag-handle sm:hidden -mt-1 mb-4" />
            <h3 className="font-bold text-[14.5px] text-slate-900 dark:text-slate-100 mb-1">Delete Project?</h3>
            <p className="text-xs text-slate-500 mb-4">
              "{deleteProjectTarget.name}" and associated records will be permanently removed.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDeleteProjectTarget(null)}
                className="flex-1 h-9 rounded-lg border bd text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setProjects(prev => prev.filter(p => p.name !== deleteProjectTarget.name));
                  setDeleteProjectTarget(null);
                  showToast('Project deleted successfully');
                }}
                className="flex-1 h-9 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold transition cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grant Access Modal */}
      {accessModalService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd space-y-5">
            <div className="sheet-drag-handle sm:hidden -mt-1 mb-2" />
            <div className="flex items-start justify-between pb-3 border-b bd">
              <div>
                <h3 className="font-bold text-[16px] text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <span>Grant Access:</span>
                  <span className="text-[#5c56d6]">{accessModalService.name}</span>
                </h3>
                <p className="text-[12px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {accessModalService.desc}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAccessModalService(null)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                showToast(`Access to ${accessModalService.name} (${accessRole}) granted to ${accessMember}!`);
                setAccessModalService(null);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Select Team Member / Employee *
                </label>
                <select
                  value={accessMember}
                  onChange={(e) => setAccessMember(e.target.value)}
                  className="w-full h-10 px-3.5 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[13px] font-medium focus:outline-none focus:border-[#5c56d6] cursor-pointer shadow-2xs"
                >
                  <option value="Padmavathi H M">Padmavathi H M (Managing Director)</option>
                  <option value="Devaraj H M">Devaraj H M (Managing Director)</option>
                  <option value="kushi">kushi (Web Developer Intern - DIN069)</option>
                  <option value="Ganashree GM">Ganashree GM (Web Developer - DIN068)</option>
                  <option value="M Sahana">M Sahana (Web Developer Intern - DIN067)</option>
                  <option value="Sai Venkat">Sai Venkat (Technical Advisor)</option>
                  <option value="All Engineering Team">All Engineering Team</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Permission Role *
                  </label>
                  <select
                    value={accessRole}
                    onChange={(e) => setAccessRole(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[12.5px] font-medium focus:outline-none focus:border-[#5c56d6] cursor-pointer shadow-2xs"
                  >
                    <option value="Admin">Admin (Full Access)</option>
                    <option value="Developer">Developer / Contributor</option>
                    <option value="Read Only">Read Only / Viewer</option>
                    <option value="DevOps">DevOps Engineer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Environment *
                  </label>
                  <select
                    value={accessEnv}
                    onChange={(e) => setAccessEnv(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[12.5px] font-medium focus:outline-none focus:border-[#5c56d6] cursor-pointer shadow-2xs"
                  >
                    <option value="All Environments">All Environments</option>
                    <option value="Production Only">Production</option>
                    <option value="Staging Only">Staging</option>
                    <option value="Development Only">Development</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Access Expiration
                </label>
                <select
                  className="w-full h-10 px-3.5 rounded-xl border bd bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-[12.5px] font-medium focus:outline-none focus:border-[#5c56d6] cursor-pointer shadow-2xs"
                >
                  <option value="never">Never Expires (Standing Access)</option>
                  <option value="30">Expires in 30 Days</option>
                  <option value="90">Expires in 90 Days</option>
                  <option value="365">Expires in 1 Year</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setAccessModalService(null)}
                  className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold text-[13px] transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#5c56d6] hover:bg-[#4f48cb] text-white font-semibold text-[13px] transition cursor-pointer shadow-xs active:scale-95"
                >
                  Grant Access
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="card rounded-t-3xl sm:rounded-2xl p-6 max-w-sm w-full shadow-2xl bg-white dark:bg-[#141a25] mobile-bottom-sheet sm:animate-scale-up border-t sm:border bd">
            <div className="sheet-drag-handle sm:hidden -mt-1 mb-4" />
            <h3 className="font-bold text-[14px] mb-1">
              Delete this {deleteConfirm.type === 'banner' ? 'banner' : deleteConfirm.type === 'blog' ? 'article' : deleteConfirm.type === 'contact' ? 'contact submission' : deleteConfirm.type === 'logo' ? 'client logo' : deleteConfirm.type === 'website' ? 'website' : 'gallery image'}?
            </h3>
            <p className="text-[12px] mu mb-4">It will be removed immediately.</p>
            <div className="flex gap-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="btn flex-1 h-9 rounded-lg text-[12px] font-medium hover:bg-black/5 dark:hover:bg-white/5 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 h-9 rounded-lg bg-red-600 hover:bg-red-700 transition text-white text-[12px] font-semibold cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm shadow-xl pointer-events-none transition-all">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
