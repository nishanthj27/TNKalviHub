'use client';
import Link from 'next/link';
import { BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, withLanguage, isTamil } = useLanguage();

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
            <p className="mt-3 text-xs leading-6" style={{ color: 'var(--text-secondary)' }}>
              Textbook materials referenced on this site remain the property of the Tamil Nadu
              Textbook and Educational Services Corporation and are shared here for educational
              purposes.
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
            <div className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <a href="mailto:tnkalvihub@gmail.com" className="hover:text-brand-primary transition-colors">
                tnkalvihub@gmail.com
              </a>
            </div>
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
                    href={withLanguage(link.href)}
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
                    href={withLanguage(link.href)}
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
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href={withLanguage('/privacy-policy')} className="hover:text-brand-primary transition-colors">
              {t('privacy')}
            </Link>
            <Link href={withLanguage('/terms-of-service')} className="hover:text-brand-primary transition-colors">
              {t('terms')}
            </Link>
            <Link href={withLanguage('/disclaimer')} className="hover:text-brand-primary transition-colors">
              {t('disclaimer')}
            </Link>
            <span>{isTamil ? 'தமிழ்நாடு மாணவர்களுக்காக Nishanth Jayaraman உருவாக்கியது.' : 'Built by Nishanth Jayaraman for Tamil Nadu students.'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
