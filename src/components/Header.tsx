'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

/**
 * ╔══════════════════════════════════════════════════════╗
 * ║  LOGO SETUP — READ BEFORE RUNNING                   ║
 * ║  1. Copy your "channel_logo.png" into /public/      ║
 * ║     Full path: tnkalvihub/public/channel_logo.png   ║
 * ║  2. The logo will appear automatically in the nav.  ║
 * ╚══════════════════════════════════════════════════════╝
 */

function BrandName() {
  return (
    <span className="text-xl font-extrabold tracking-tight leading-none select-none">
      <span style={{ color: '#3B8BEB' }}>TN</span>
      <span style={{ color: '#F5A623' }}>Kalvi</span>
      <span style={{ color: '#3B8BEB' }}>Hub</span>
    </span>
  );
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/videos', label: t('videos') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: 'var(--nav-bg)', borderBottom: '1px solid var(--border-color)' }}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-orange-400 bg-[#0f1b2d]">
              <Image
                src="/channel_logo.png"
                alt="TNKalviHub Logo"
                width={40}
                height={40}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <BrandName />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-brand-primary transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-sm font-semibold px-3 py-1.5 rounded-full border transition-colors hover:text-white"
              style={{
                color: '#F5A623',
                borderColor: '#F5A623',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#F5A623';
                (e.currentTarget as HTMLButtonElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLButtonElement).style.color = '#F5A623';
              }}
              title="Toggle Language"
            >
              {language === 'en' ? 'தமிழ்' : 'EN'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              style={{ color: 'var(--text-primary)' }}
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              style={{ color: 'var(--text-primary)' }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t space-y-1" style={{ borderColor: 'var(--border-color)' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 px-2 text-base font-medium hover:text-brand-primary transition-colors rounded-lg"
                style={{ color: 'var(--text-secondary)' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
