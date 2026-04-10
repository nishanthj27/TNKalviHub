import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tnkalvihub.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TNKalviHub – Tamil Nadu School Textbooks PDF Download',
    template: '%s | TNKalviHub',
  },
  description:
    'Download official Tamil Nadu school textbooks (Class 1 to 12) for free in PDF format. Tamil Medium and English Medium books available for all subjects and terms.',
  keywords: [
    'Tamil Nadu textbooks', 'TN school books PDF', 'Samacheer Kalvi books',
    'TN textbooks download', 'Class 1 to 12 books', 'Tamil medium textbooks',
    'English medium textbooks', 'SSLC books', 'HSC books', 'TN government textbooks',
    'தமிழ்நாடு பாடநூல்கள்', 'சமச்சீர் கல்வி',
  ],
  authors: [{ name: 'TNKalviHub' }],
  creator: 'TNKalviHub',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'TNKalviHub',
    title: 'TNKalviHub – Tamil Nadu School Textbooks PDF Download',
    description: 'Free PDF download of official Tamil Nadu school textbooks for Classes 1 to 12.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNKalviHub – Tamil Nadu School Textbooks PDF Download',
    description: 'Free PDF download of official Tamil Nadu school textbooks for Classes 1 to 12.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <GoogleAnalytics />
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
