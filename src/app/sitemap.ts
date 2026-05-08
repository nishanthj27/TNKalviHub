import { MetadataRoute } from 'next';
import { classesData } from '@/data/books';
import { videosData } from '@/data/videos';
import { absoluteLocalizedUrl, languages } from '@/lib/i18n';

function localizedAlternates(path: string) {
  return {
    languages: {
      en: absoluteLocalizedUrl('en', path),
      ta: absoluteLocalizedUrl('ta', path),
      'x-default': absoluteLocalizedUrl('en', path),
    },
  };
}

function localizedEntry({
  path,
  priority,
  changeFrequency,
  lastModified,
}: {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  lastModified: Date;
}): MetadataRoute.Sitemap {
  return languages.map((language) => ({
    url: absoluteLocalizedUrl(language, path),
    lastModified,
    changeFrequency,
    priority,
    alternates: localizedAlternates(path),
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...localizedEntry({ path: '/', priority: 1, changeFrequency: 'weekly', lastModified }),
    ...localizedEntry({ path: '/about', priority: 0.6, changeFrequency: 'monthly', lastModified }),
    ...localizedEntry({ path: '/contact', priority: 0.5, changeFrequency: 'monthly', lastModified }),
    ...localizedEntry({ path: '/videos', priority: 0.85, changeFrequency: 'weekly', lastModified }),
    ...localizedEntry({ path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly', lastModified }),
    ...localizedEntry({ path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly', lastModified }),
    ...localizedEntry({ path: '/disclaimer', priority: 0.3, changeFrequency: 'yearly', lastModified }),
    ...classesData.flatMap((cls) =>
      localizedEntry({
        path: `/class/${cls.id}`,
        priority: cls.id <= 7 ? 0.9 : 0.8,
        changeFrequency: 'monthly',
        lastModified,
      })
    ),
    ...classesData.flatMap((cls) =>
      cls.books.flatMap((book) =>
        localizedEntry({
          path: `/class/${cls.id}/book/${book.id}`,
          priority: 0.75,
          changeFrequency: 'monthly',
          lastModified,
        })
      )
    ),
    ...videosData.flatMap((video) =>
      localizedEntry({
        path: `/videos/${video.id}`,
        priority: 0.7,
        changeFrequency: 'monthly',
        lastModified,
      })
    ),
  ];

  return entries;
}
