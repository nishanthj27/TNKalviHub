import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About TNKalviHub – Tamil Nadu Textbooks Website',
  description:
    'Learn about TNKalviHub – your free resource for Tamil Nadu Government school textbooks from Class 1 to 12 in PDF format.',
};

export default function AboutPage() {
  return <AboutClient />;
}
