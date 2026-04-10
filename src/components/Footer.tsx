'use client';
import Link from 'next/link';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('home') },
    { href: '/videos', label: t('videos') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: t('privacy') },
    { href: '/terms-of-service', label: t('terms') },
    { href: '/disclaimer', label: t('disclaimer') },
  ];

  return (
    <footer
      className="mt-16 border-t"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <div className="page-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-xl text-brand-primary mb-3">
              <BookOpen className="w-6 h-6" />
              <span>TNKalviHub</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('footerDesc')}
            </p>
            <a
              href="https://www.tntextbooks.in/p/school-books.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm text-brand-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              {t('officialSite')}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-primary transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('importantLinks')}
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-primary transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-sm"
          style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
        >
          <p>{t('copyright')}</p>
          <p>{t('builtWith')}</p>
        </div>
      </div>
    </footer>
  );
}
