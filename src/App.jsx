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
  Tag
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
  { id: 4, title: 'Nexus Innovations', file: 'nexus-tech-vector.png', date: '2/10/2026', img: svgNexus },
  { id: 5, title: 'Apex Global Solutions', file: 'apex_branding_2026.png', date: '2/05/2026', img: svgApex },
  { id: 6, title: 'Zenith Cloud Corp', file: 'zenith_logo_hq.png', date: '1/28/2026', img: svgZenith },
  { id: 7, title: 'Vanguard Media', file: 'vanguard_final.png', date: '1/22/2026', img: svgVanguard },
  { id: 8, title: 'CyberShield Security', file: 'cybershield_vector.png', date: '1/18/2026', img: svgCyberShield },
  { id: 9, title: 'GreenPulse Energy', file: 'greenpulse_eco.png', date: '1/15/2026', img: svgGreenPulse },
  { id: 10, title: 'Aura Health & Wellness', file: 'aura-logo-trans.png', date: '1/10/2026', img: svgAura },
  { id: 11, title: 'Quantum Logic Labs', file: 'quantum_symbol.png', date: '1/05/2026', img: svgQuantum },
  { id: 12, title: 'BlueSky Logistics', file: 'bluesky_logistics_v2.png', date: '12/28/2025', img: svgBlueSky },
  { id: 13, title: 'Starlight Hospitality', file: 'starlight_hotel_group.png', date: '12/20/2025', img: svgStarlight },
  { id: 14, title: 'Nova Fintech', file: 'nova_fintech_brand.png', date: '12/14/2025', img: svgNova },
  { id: 15, title: 'Terra Prime Real Estate', file: 'terra_prime_logo.png', date: '12/08/2025', img: svgTerra },
  { id: 16, title: 'Urban Spark Studios', file: 'urban_spark_art.png', date: '11/30/2025', img: svgUrban }
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
  { id: 3, title: 'MhidhilPolymers', url: 'https://mhidhilpolymers.com/', date: '9/8/2026', img: svgMhidhil },
  { id: 4, title: 'Namma Bengaluru Trekkers', url: 'https://nammabengalurutrekkers.org/', date: '8/24/2026', img: svgNbt },
  { id: 5, title: 'Tridala Herbal Solutions', url: 'https://tridalaherbal.com/', date: '8/15/2026', img: svgTridalaSite },
  { id: 6, title: 'Eco-Trek Adventures', url: 'https://ecotrekadventures.in/', date: '8/02/2026', img: svgEcoTrekSite },
  { id: 7, title: 'Nexus Innovations', url: 'https://nexusinnovations.tech/', date: '7/28/2026', img: svgNexusSite },
  { id: 8, title: 'Apex Global Consulting', url: 'https://apexglobal.co/', date: '7/19/2026', img: svgApexSite },
  { id: 9, title: 'Zenith Cloud Corp', url: 'https://zenithcloud.io/', date: '7/10/2026', img: svgZenithSite },
  { id: 10, title: 'Vanguard Media Labs', url: 'https://vanguardcreative.agency/', date: '6/30/2026', img: svgVanguardSite },
  { id: 11, title: 'CyberShield Security', url: 'https://cybershieldsec.net/', date: '6/22/2026', img: svgCyberShieldSite },
  { id: 12, title: 'GreenPulse Renewable Energy', url: 'https://greenpulseenergy.com/', date: '6/15/2026', img: svgGreenPulseSite },
  { id: 13, title: 'Aura Health & Wellness Clinic', url: 'https://aurahealthwell.com/', date: '6/08/2026', img: svgAuraSite },
  { id: 14, title: 'Quantum Logic Systems', url: 'https://quantumlogicsys.com/', date: '5/29/2026', img: svgQuantumSite },
  { id: 15, title: 'BlueSky Logistics', url: 'https://blueskylogistics.in/', date: '5/18/2026', img: svgBlueSkySite },
  { id: 16, title: 'Starlight Luxury Resorts', url: 'https://starlighthospitality.com/', date: '5/10/2026', img: svgStarlightSite },
  { id: 17, title: 'Nova Fintech Platform', url: 'https://novafintech.global/', date: '4/25/2026', img: svgNovaSite }
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
  { id: 'project-manager', name: 'Project Manager', icon: FolderKanban },
  { id: 'access', name: 'Access', icon: Key }
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
                  if (item.id === 'banners' || item.id === 'gallery' || item.id === 'blogs' || item.id === 'contacts' || item.id === 'client-logos' || item.id === 'websites') {
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
        <header className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 h-14 border-b bd bg-white dark:bg-[#141a25]">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsNavOpen((prev) => !prev);
                } else {
                  setIsSidebarCollapsed((prev) => !prev);
                }
              }}
              className="btn w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle sidebar"
              title="Toggle sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
            <span className="text-[13.5px] font-bold tracking-tight">Admin Dashboard</span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              className="btn w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => showToast('Logout clicked')}
              className="h-8 px-3 rounded-lg bg-red-600 hover:bg-red-700 transition text-white text-[12px] font-semibold inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-5 flex-1">
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
          {activeTab === 'blogs' && !isBlogEditorOpen && (
            <div className="space-y-5 animate-fade-in">
              {/* Header Card */}
              <div className="card rounded-2xl p-5 sm:p-6 soft bg-white dark:bg-[#141a25]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h1 className="text-[17px] font-bold tracking-tight text-[var(--tx)]">
                        Blog & Article Management
                      </h1>
                      <p className="text-[11.5px] text-[#64748b] mt-0.5">
                        Write, optimize SEO, and publish blog articles for your company website
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleOpenWriteBlog}
                    className="w-full sm:w-auto h-9 px-4 rounded-lg font-semibold text-[12px] text-white bg-[#2563eb] hover:bg-blue-700 transition inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                  >
                    <span className="text-sm font-bold leading-none">+</span>
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
                      className="w-full pl-9 pr-3 h-9 rounded-xl border bd text-[12.5px] bg-slate-50/50 dark:bg-slate-900/40 focus:outline-none focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition text-[var(--tx)] placeholder:text-slate-400"
                    />
                  </div>
                  <div className="w-full sm:w-auto">
                    <select
                      value={blogStatusFilter}
                      onChange={(e) => setBlogStatusFilter(e.target.value)}
                      className="w-full sm:w-44 h-9 px-3 rounded-xl border bd text-[12.5px] font-medium bg-white dark:bg-[#141a25] text-[var(--tx)] cursor-pointer focus:outline-none focus:border-indigo-500"
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
                      <tr className="border-b bd text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/70 dark:bg-slate-900/50">
                        <th className="py-3.5 px-4">Featured Image</th>
                        <th className="py-3.5 px-4">Title</th>
                        <th className="py-3.5 px-4">Author</th>
                        <th className="py-3.5 px-4">Status</th>
                        <th className="py-3.5 px-4">Tags</th>
                        <th className="py-3.5 px-4 whitespace-nowrap">Published Date</th>
                        <th className="py-3.5 px-4 text-right">Actions</th>
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
                            <td className="py-3.5 px-4 align-top">
                              {post.img ? (
                                <img
                                  src={post.img}
                                  alt={post.title}
                                  className="w-20 h-14 object-cover rounded-lg border bd"
                                />
                              ) : (
                                <div className="w-20 h-14 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 font-medium text-[11px] flex items-center justify-center border bd">
                                  No Image
                                </div>
                              )}
                            </td>

                            {/* Title & Slug */}
                            <td className="py-3.5 px-4 align-top">
                              <h3 className="font-semibold text-[12.5px] text-[var(--tx)] max-w-sm line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-[11px] mu mt-0.5 max-w-sm truncate hover:underline cursor-pointer">
                                {post.slug}
                              </p>
                            </td>

                            {/* Author & Role */}
                            <td className="py-3.5 px-4 align-top whitespace-nowrap">
                              <div className="font-semibold text-slate-700 dark:text-slate-200">
                                {post.author}
                              </div>
                              <div className="text-[11px] mu">{post.role}</div>
                            </td>

                            {/* Status */}
                            <td className="py-3.5 px-4 align-top whitespace-nowrap">
                              {post.status === 'Published' ? (
                                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#e6f9ed] text-[#16a34a] dark:bg-emerald-950/50 dark:text-emerald-400">
                                  Published
                                </span>
                              ) : (
                                <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                  Draft
                                </span>
                              )}
                            </td>

                            {/* Tags */}
                            <td className="py-3.5 px-4 align-top">
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
                            <td className="py-3.5 px-4 align-top text-slate-600 dark:text-slate-400 text-[11.5px] whitespace-nowrap">
                              {post.date}
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 align-top text-right whitespace-nowrap">
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
                  if (item.id === 'banners' || item.id === 'gallery' || item.id === 'blogs' || item.id === 'contacts' || item.id === 'client-logos' || item.id === 'websites') {
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

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="card rounded-2xl p-5 max-w-sm w-full shadow-2xl bg-white dark:bg-[#141a25]">
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
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] px-4 py-2.5 rounded-xl bg-slate-900 text-white text-sm shadow-lg pointer-events-none transition-all">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
