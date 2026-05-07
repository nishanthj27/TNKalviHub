import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Disclaimer - TNKalviHub',
  description: 'Read the TNKalviHub disclaimer regarding ownership, educational use, and third-party materials.',
};

const sections = [
  {
    title: '1. Independent Educational Website',
    body: [
      'TNKalviHub is an independent educational resource website created to help students, parents, and teachers locate Tamil Nadu textbook materials more easily.',
      'TNKalviHub is not the official website of the Tamil Nadu Government, the School Education Department, or the Tamil Nadu Textbook and Educational Services Corporation, and no official affiliation, sponsorship, or endorsement is claimed.',
    ],
  },
  {
    title: '2. Ownership of Materials',
    body: [
      'All textbook materials, textbook PDFs, covers, subject content, and related educational materials made available through or referenced by this website are the property of the Tamil Nadu Textbook and Educational Services Corporation and/or the applicable government authorities and rights holders.',
      'TNKalviHub does not claim ownership of those materials, does not represent them as its own, and does not assert any copyright or proprietary interest in them.',
    ],
  },
  {
    title: '3. Educational Purpose',
    body: [
      'These materials are presented solely for educational, informational, and reference purposes so that learners can more easily find official Tamil Nadu school textbook resources.',
      'The website is intended to support study and access to public educational materials, not to replace official sources or create any commercial claim over the content.',
    ],
  },
  {
    title: '4. No Guarantee of Accuracy or Availability',
    body: [
      'Although we make reasonable efforts to keep links, class listings, and book information current, we do not guarantee that all content will always be accurate, complete, error-free, or continuously available.',
      'Publishers, hosting providers, and government sources may update or remove materials at any time without notice. Users should verify important information with the relevant official source.',
    ],
  },
  {
    title: '5. External Links and Third-Party Hosting',
    body: [
      'The website may link to external sites, including official textbook portals, video platforms, or other third-party services. Those resources are controlled by their respective operators.',
      'TNKalviHub is not responsible for third-party content, uptime, file integrity, privacy practices, advertisements, or any changes made on those external services.',
    ],
  },
  {
    title: '6. No Professional or Legal Advice',
    body: [
      'Content on TNKalviHub is provided as general educational information only and should not be treated as legal, regulatory, academic accreditation, or professional advice.',
      'If you require official guidance regarding curriculum, publication rights, or regulatory matters, you should consult the relevant government authority or qualified adviser.',
    ],
  },
  {
    title: '7. Limitation of Responsibility',
    body: [
      'Your use of the website is at your own risk. TNKalviHub and its operators are not responsible for losses or damages arising from reliance on information, broken links, unavailable files, third-party actions, or interruptions in service.',
    ],
  },
  {
    title: '8. Advertisements and Monetisation',
    body: [
      'If advertisements appear on the website, they are displayed to support the operation and maintenance of the service. Their presence does not mean that TNKalviHub endorses any advertised product, service, or claim.',
    ],
  },
  {
    title: '9. Contact for Concerns',
    body: [
      'If you are a rights holder, representative, or user with a concern about any listing or reference on the website, please contact us through the contact page so the matter can be reviewed promptly.',
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      lastUpdated="May 7, 2026"
      intro="Please read this disclaimer carefully before relying on information or educational resource links made available through TNKalviHub."
      sections={sections}
    />
  );
}
