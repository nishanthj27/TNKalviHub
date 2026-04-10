import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us – TNKalviHub',
  description: 'Get in touch with TNKalviHub for any questions, broken links, or suggestions about Tamil Nadu school textbooks.',
};

export default function ContactPage() {
  return <ContactClient />;
}
