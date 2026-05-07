import type { Metadata } from 'next';
import ContactClient from '../../contact/ContactClient';
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
    path: '/contact',
    title: {
      en: 'Contact Us - TNKalviHub',
      ta: 'எங்களை தொடர்பு கொள்ளுங்கள் - TNKalviHub',
    },
    description: {
      en: 'Contact TNKalviHub for questions, broken links, or suggestions about Tamil Nadu school textbooks.',
      ta: 'தமிழ்நாடு பள்ளி பாடப்புத்தகங்கள் குறித்த கேள்விகள், உடைந்த இணைப்புகள் அல்லது பரிந்துரைகளுக்கு TNKalviHub-ஐ தொடர்பு கொள்ளுங்கள்.',
    },
  });
}

export default function LocalizedContactPage() {
  return <ContactClient />;
}
