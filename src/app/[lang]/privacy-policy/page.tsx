import type { Metadata } from 'next';
import PrivacyPolicyPage from '../../privacy-policy/page';
import { isLanguage, localizedPageMetadata } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const language = isLanguage(lang) ? lang : 'en';
  return localizedPageMetadata({
    language,
    path: '/privacy-policy',
    title: { en: 'Privacy Policy - TNKalviHub', ta: 'தனியுரிமைக் கொள்கை - TNKalviHub' },
    description: {
      en: 'Read the Privacy Policy for TNKalviHub and learn how we collect, use, and protect information.',
      ta: 'TNKalviHub தகவல்களை எவ்வாறு சேகரித்து, பயன்படுத்தி, பாதுகாக்கிறது என்பதை விளக்கும் தனியுரிமைக் கொள்கையை படியுங்கள்.',
    },
  });
}

export default PrivacyPolicyPage;
