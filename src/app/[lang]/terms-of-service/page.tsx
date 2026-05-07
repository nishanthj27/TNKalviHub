import type { Metadata } from 'next';
import TermsPage from '../../terms-of-service/page';
import { isLanguage, localizedPageMetadata } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const language = isLanguage(lang) ? lang : 'en';
  return localizedPageMetadata({
    language,
    path: '/terms-of-service',
    title: { en: 'Terms of Service - TNKalviHub', ta: 'சேவை விதிமுறைகள் - TNKalviHub' },
    description: {
      en: 'Read the Terms of Service that govern access to and use of TNKalviHub.',
      ta: 'TNKalviHub பயன்பாட்டிற்கான சேவை விதிமுறைகளை படியுங்கள்.',
    },
  });
}

export default TermsPage;
