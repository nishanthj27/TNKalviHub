import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – TNKalviHub',
  description: 'Read the Privacy Policy for TNKalviHub. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-container py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
        Privacy Policy
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
        Last updated: January 2025
      </p>

      <div className="prose-like space-y-8" style={{ color: 'var(--text-primary)' }}>
        {[
          {
            title: '1. Introduction',
            body: `Welcome to TNKalviHub ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it. By using our website (www.tnkalvihub.com), you agree to the terms of this Privacy Policy.`,
          },
          {
            title: '2. Information We Collect',
            body: `We may collect the following types of information:\n\n• Usage Data: We automatically collect certain information when you visit our website, including your IP address, browser type, pages visited, and time spent. This is collected via Google Analytics.\n\n• Contact Form Data: If you submit our contact form, we collect your name, email address, and the message content.\n\n• Cookies: We use cookies to understand how you use our site and to serve relevant advertisements through Google AdSense.`,
          },
          {
            title: '3. How We Use Your Information',
            body: `We use the information we collect to:\n\n• Analyse website traffic and user behaviour to improve our service (Google Analytics)\n• Respond to contact form messages\n• Display personalised advertisements (Google AdSense)\n• Improve the user experience of our website`,
          },
          {
            title: '4. Google Analytics',
            body: `We use Google Analytics to monitor and analyse web traffic. Google Analytics collects standard internet log information and visitor behaviour in an anonymous form. This information is processed in a way that does not identify anyone. For more information on Google Analytics privacy, visit: https://policies.google.com/privacy`,
          },
          {
            title: '5. Google AdSense',
            body: `We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to collect data and serve ads based on a user's prior visits to our website or other websites. Users can opt out of personalised advertising by visiting: https://www.google.com/settings/ads`,
          },
          {
            title: '6. Third-Party Links',
            body: `Our website contains links to third-party websites, including the official Tamil Nadu Textbooks website (tntextbooks.in) and YouTube. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before submitting any personal information.`,
          },
          {
            title: '7. Data Retention',
            body: `Contact form data is retained only as long as necessary to respond to your query. Analytics data is retained in accordance with Google's data retention policies.`,
          },
          {
            title: '8. Your Rights',
            body: `You have the right to access, correct, or delete any personal information we hold about you. You may also withdraw consent to cookies at any time via your browser settings. To exercise these rights, contact us via our Contact page.`,
          },
          {
            title: '9. Children\'s Privacy',
            body: `Our website is intended to be used by students and their parents. We do not knowingly collect personal information from children under the age of 13 without parental consent.`,
          },
          {
            title: '10. Changes to This Policy',
            body: `We may update this Privacy Policy from time to time. We will notify users of any significant changes by updating the "Last updated" date at the top of this page.`,
          },
          {
            title: '11. Contact Us',
            body: `If you have any questions about this Privacy Policy, please contact us via our Contact page at www.tnkalvihub.com/contact.`,
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
