import { MetadataRoute } from 'next';
import { classesData } from '@/data/books';
import { absoluteLocalizedUrl, languages, siteUrl } from '@/lib/i18n';

function localizedEntry(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) {
  return languages.map((language) => ({
    url: absoluteLocalizedUrl(language, path),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages: {
        en: absoluteLocalizedUrl('en', path),
        ta: absoluteLocalizedUrl('ta', path),
        'x-default': absoluteLocalizedUrl('en', '/'),
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    ...localizedEntry('/', 1, 'weekly'),
    ...localizedEntry('/videos', 0.8, 'weekly'),
    ...localizedEntry('/about', 0.6, 'monthly'),
    ...localizedEntry('/contact', 0.5, 'monthly'),
    ...localizedEntry('/privacy-policy', 0.3, 'yearly'),
    ...localizedEntry('/terms-of-service', 0.3, 'yearly'),
    ...localizedEntry('/disclaimer', 0.3, 'yearly'),
  ];

  const classPages = classesData.flatMap((cls) => localizedEntry(`/class/${cls.id}`, 0.9, 'monthly'));

  const bookPages = classesData.flatMap((cls) =>
    cls.books.flatMap((book) => localizedEntry(`/class/${cls.id}/book/${book.id}`, 0.8, 'monthly'))
  );

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.2 },
    ...staticPages,
    ...classPages,
    ...bookPages,
  ];
}
