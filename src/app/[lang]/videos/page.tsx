import type { Metadata } from 'next';
import VideosClient from '../../videos/VideosClient';
import { isLanguage, localizedPageMetadata } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const language = isLanguage(lang) ? lang : 'en';

  return localizedPageMetadata({
    language,
    path: '/videos',
    title: {
      en: 'Video Tutorials - TN Textbook Download Guides',
      ta: 'காணொளி வழிகாட்டிகள் - TN பாடப்புத்தக பதிவிறக்கம்',
    },
    description: {
      en: 'Watch step-by-step YouTube video tutorials for downloading Tamil Nadu school textbooks from TNKalviHub.',
      ta: 'TNKalviHub-இல் இருந்து தமிழ்நாடு பள்ளி பாடப்புத்தகங்களை பதிவிறக்கம் செய்வதற்கான YouTube வழிகாட்டி காணொளிகளை பாருங்கள்.',
    },
  });
}

export default function LocalizedVideosPage() {
  return <VideosClient />;
}
