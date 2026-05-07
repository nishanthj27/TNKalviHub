import type { Metadata } from 'next';
import type { Language } from '@/data/translations';

export const languages = ['en', 'ta'] as const;
export const defaultLanguage: Language = 'en';
export const languageCookieName = 'tnk-lang';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tnkalvihub.vercel.app';

export function isLanguage(value: string | undefined): value is Language {
  return value === 'en' || value === 'ta';
}

export function localizedPath(language: Language, path = '/') {
  const cleanPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `/${language}${cleanPath}`;
}

export function absoluteLocalizedUrl(language: Language, path = '/') {
  return `${siteUrl}${localizedPath(language, path)}`;
}

export function alternateMetadata(path = '/', canonicalLanguage: Language = defaultLanguage): Metadata['alternates'] {
  return {
    canonical: absoluteLocalizedUrl(canonicalLanguage, path),
    languages: {
      en: absoluteLocalizedUrl('en', path),
      ta: absoluteLocalizedUrl('ta', path),
      'x-default': absoluteLocalizedUrl(defaultLanguage, '/'),
    },
  };
}

export function localizedPageMetadata({
  language,
  path,
  title,
  description,
}: {
  language: Language;
  path?: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
}): Metadata {
  const locale = language === 'ta' ? 'ta_IN' : 'en_IN';
  const url = absoluteLocalizedUrl(language, path);

  return {
    title: title[language],
    description: description[language],
    alternates: alternateMetadata(path, language),
    openGraph: {
      type: 'website',
      locale,
      url,
      siteName: 'TNKalviHub',
      title: title[language],
      description: description[language],
    },
    twitter: {
      card: 'summary_large_image',
      title: title[language],
      description: description[language],
    },
  };
}
