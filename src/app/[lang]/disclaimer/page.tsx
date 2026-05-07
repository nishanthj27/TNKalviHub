import type { Metadata } from 'next';
import DisclaimerPage from '../../disclaimer/page';
import { isLanguage, localizedPageMetadata } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const language = isLanguage(lang) ? lang : 'en';
  return localizedPageMetadata({
    language,
    path: '/disclaimer',
    title: { en: 'Disclaimer - TNKalviHub', ta: 'மறுப்பு - TNKalviHub' },
    description: {
      en: 'Read the TNKalviHub disclaimer regarding ownership, educational use, and third-party materials.',
      ta: 'உரிமை, கல்விப் பயன்பாடு மற்றும் மூன்றாம் தரப்பு உள்ளடக்கம் குறித்த TNKalviHub மறுப்பை படியுங்கள்.',
    },
  });
}

export default DisclaimerPage;
