import type { Metadata } from 'next';
import AboutClient from '../../about/AboutClient';
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
    path: '/about',
    title: {
      en: 'About TNKalviHub - Tamil Nadu Textbooks Website',
      ta: 'TNKalviHub பற்றி - தமிழ்நாடு பாடப்புத்தக இணையதளம்',
    },
    description: {
      en: 'Learn about TNKalviHub, a free bilingual resource for Tamil Nadu Government school textbooks from Class 1 to 12.',
      ta: '1 முதல் 12ஆம் வகுப்பு வரை தமிழ்நாடு அரசு பாடப்புத்தகங்களுக்கு இலவச இருமொழி வளமாக உள்ள TNKalviHub பற்றி அறியுங்கள்.',
    },
  });
}

export default function LocalizedAboutPage() {
  return <AboutClient />;
}
