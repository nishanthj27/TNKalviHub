import type { Metadata } from 'next';
import HomePage from '../page';
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
    path: '/',
    title: {
      en: 'TNKalviHub - Tamil Nadu School Textbooks PDF Download',
      ta: 'TNKalviHub - தமிழ்நாடு பள்ளி பாடப்புத்தகங்கள் PDF பதிவிறக்கம்',
    },
    description: {
      en: 'Download official Tamil Nadu school textbooks for Classes 1 to 12 in PDF format. Tamil Medium and English Medium books are available for free.',
      ta: '1 முதல் 12ஆம் வகுப்பு வரை தமிழ்நாடு அரசு பள்ளி பாடப்புத்தகங்களை PDF வடிவில் இலவசமாக பதிவிறக்கம் செய்யுங்கள்.',
    },
  });
}

export default function LocalizedHomePage() {
  return <HomePage />;
}
