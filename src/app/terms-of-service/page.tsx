import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service – TNKalviHub',
  description: 'Read the Terms of Service for TNKalviHub. Understand the rules governing the use of our website.',
};

export default function TermsPage() {
  return (
    <div className="page-container py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
        Terms of Service
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
        Last updated: January 2025
      </p>

      <div className="space-y-8">
        {[
          {
            title: '1. Acceptance of Terms',
            body: `By accessing or using TNKalviHub (www.tnkalvihub.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.`,
          },
          {
            title: '2. About Our Service',
            body: `TNKalviHub is an independent educational resource website that provides easy access to Tamil Nadu Government school textbooks. All textbook PDF links on our website redirect to the official Tamil Nadu Textbook and Educational Services Corporation (TNTB) website. We do not host or distribute any textbook files ourselves.`,
          },
          {
            title: '3. Intellectual Property',
            body: `The textbook PDFs linked on this website are the intellectual property of the Tamil Nadu Government and the Tamil Nadu Textbook and Educational Services Corporation. TNKalviHub does not claim any ownership over these materials. The website design, original content, and code of TNKalviHub are owned by TNKalviHub.`,
          },
          {
            title: '4. Permitted Use',
            body: `You may use TNKalviHub for personal, non-commercial, educational purposes only. You may not:\n\n• Reproduce, redistribute, or resell our website content\n• Attempt to gain unauthorised access to any part of the website\n• Use automated tools (bots, scrapers) to access our website\n• Use the website in any way that violates applicable laws`,
          },
          {
            title: '5. Disclaimer of Warranties',
            body: `TNKalviHub is provided "as is" without any warranties of any kind. We do not guarantee the accuracy, completeness, or availability of the information on this website. External links (including Google Drive links for PDFs) may change without notice and we are not responsible for their availability.`,
          },
          {
            title: '6. Limitation of Liability',
            body: `TNKalviHub and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its linked content.`,
          },
          {
            title: '7. Advertisements',
            body: `Our website displays advertisements through Google AdSense. We are not responsible for the content of these advertisements. Clicking on ads is at your own discretion.`,
          },
          {
            title: '8. External Links',
            body: `Our website links to external websites including tntextbooks.in and YouTube. We are not responsible for the content, privacy practices, or availability of these external websites.`,
          },
          {
            title: '9. Changes to Terms',
            body: `We reserve the right to modify these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the new terms.`,
          },
          {
            title: '10. Governing Law',
            body: `These Terms of Service are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Tamil Nadu, India.`,
          },
          {
            title: '11. Contact',
            body: `For any questions about these Terms, please contact us via www.tnkalvihub.com/contact.`,
          },
        ].map(({ title, body }) => (
          <section key={title}>
            <h2 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {title}
            </h2>
            <p className="text-sm leading-7 whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
              {body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
