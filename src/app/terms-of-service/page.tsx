import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service - TNKalviHub',
  description: 'Read the Terms of Service that govern access to and use of TNKalviHub.',
};

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using TNKalviHub, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you must not use the website.',
      'These Terms apply to all visitors, users, and others who access the site.',
    ],
  },
  {
    title: '2. Nature of the Service',
    body: [
      'TNKalviHub is an independent educational website intended to help users discover and access Tamil Nadu school textbook resources more easily.',
      'The website is not an official government website and is not affiliated with, endorsed by, or operated by the Tamil Nadu Textbook and Educational Services Corporation or any government department unless expressly stated otherwise.',
    ],
  },
  {
    title: '3. Educational Use Only',
    body: [
      'The website is provided for lawful, personal, and educational use only. You agree not to use the website for unlawful, misleading, commercial exploitation, or harmful purposes.',
      'You may not use the website in a way that interferes with its normal operation or with the use of the website by others.',
    ],
  },
  {
    title: '4. Intellectual Property and Third-Party Materials',
    body: [
      'Except for third-party materials and official textbook resources, the website design, compilation, layout, branding, text written by TNKalviHub, and related original content are owned by or licensed to TNKalviHub.',
      'Textbook materials, PDFs, and related educational resources referenced through the website remain the property of their respective owners, including the Tamil Nadu Textbook and Educational Services Corporation where applicable.',
      'Nothing in these Terms transfers ownership of those materials to users or to TNKalviHub.',
    ],
  },
  {
    title: '5. Restrictions on Use',
    body: [
      'You agree not to copy, scrape, reproduce, republish, frame, mirror, reverse engineer, or exploit any part of the website except as permitted by law or with prior written permission.',
      'You also agree not to introduce malware, attempt unauthorised access, overload the service, use automated extraction tools, or otherwise disrupt the website or connected systems.',
    ],
  },
  {
    title: '6. Accuracy and Availability',
    body: [
      'We strive to keep the website useful and up to date, but we do not guarantee that all information, links, or textbook references will always be accurate, complete, current, or available.',
      'Official textbook listings, links, formats, and availability may change without notice based on updates made by the relevant publishers, hosting platforms, or government bodies.',
    ],
  },
  {
    title: '7. Third-Party Services and Links',
    body: [
      'TNKalviHub may include links to third-party websites, platforms, videos, or educational resources. Those links are provided for convenience only.',
      'We do not control and are not responsible for third-party content, terms, privacy practices, security, uptime, or accuracy. Your use of third-party websites is at your own risk and subject to their own terms and policies.',
    ],
  },
  {
    title: '8. Disclaimer of Warranties',
    body: [
      'The website is provided on an "as is" and "as available" basis without warranties of any kind, whether express, implied, or statutory.',
      'To the fullest extent permitted by law, TNKalviHub disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, and uninterrupted availability.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    body: [
      'To the fullest extent permitted by law, TNKalviHub and its operators will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages arising out of or related to your use of, or inability to use, the website.',
      'This limitation applies even if we were advised that such damages were possible.',
    ],
  },
  {
    title: '10. Indemnity',
    body: [
      'You agree to indemnify and hold harmless TNKalviHub and its operators from claims, liabilities, damages, losses, and expenses arising out of your misuse of the website, violation of these Terms, or infringement of the rights of any third party.',
    ],
  },
  {
    title: '11. Changes to the Service or Terms',
    body: [
      'We may modify, suspend, or discontinue any part of the website at any time. We may also update these Terms of Service from time to time by posting a revised version on this page.',
      'Your continued use of the website after changes take effect constitutes acceptance of the revised Terms.',
    ],
  },
  {
    title: '12. Governing Law',
    body: [
      'These Terms of Service are governed by the laws of India. Subject to applicable law, disputes arising from or relating to the website shall be subject to the courts having jurisdiction in Tamil Nadu, India.',
    ],
  },
  {
    title: '13. Contact',
    body: [
      'Questions about these Terms of Service may be sent through the contact page available on www.tnkalvihub.com.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="May 7, 2026"
      intro="These Terms of Service set out the rules, responsibilities, and legal conditions that apply when you access or use TNKalviHub."
      sections={sections}
    />
  );
}
