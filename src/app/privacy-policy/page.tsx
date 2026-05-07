import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy - TNKalviHub',
  description: 'Read the Privacy Policy for TNKalviHub and learn how we collect, use, and protect information.',
};

const sections = [
  {
    title: '1. Scope of This Policy',
    body: [
      'This Privacy Policy explains how TNKalviHub collects, uses, stores, and discloses information when you use our website, including the home page, class pages, contact page, videos page, and other related pages available through www.tnkalvihub.com.',
      'By accessing or using the website, you acknowledge that you have read this Privacy Policy. If you do not agree with this policy, you should discontinue use of the website.',
    ],
  },
  {
    title: '2. Information We Collect',
    body: [
      'We may collect limited personal information that you voluntarily provide when you contact us, such as your name, email address, and the contents of your message.',
      'We may also collect non-personal usage information automatically, including your IP address, browser type, device information, approximate geographic region, referral source, pages viewed, time spent on pages, and interactions with the website.',
      'Cookies, analytics tags, and similar technologies may be used to understand traffic patterns, remember user preferences, and improve site performance.',
    ],
  },
  {
    title: '3. How We Use Information',
    body: [
      'We use collected information to operate and maintain the website, respond to enquiries, monitor performance, improve navigation, diagnose technical issues, protect against misuse, and understand which educational resources are most useful to visitors.',
      'Where advertising or analytics services are enabled, information may also be used to measure campaign effectiveness, personalise ad delivery, and generate aggregated traffic insights.',
    ],
  },
  {
    title: '4. Analytics, Advertising, and Cookies',
    body: [
      'TNKalviHub may use third-party tools such as Google Analytics and Google AdSense. These providers may set cookies or similar technologies to measure traffic, understand usage behaviour, and display advertising.',
      'You can usually manage or disable cookies through your browser settings. Disabling cookies may affect some site functionality, analytics accuracy, or advertising personalisation.',
      'For more information about how Google handles data, please review Google privacy materials and advertising settings available from Google.',
    ],
  },
  {
    title: '5. How We Share Information',
    body: [
      'We do not sell your personal information. We may share information with service providers that help us operate the website, such as hosting, analytics, advertising, spam prevention, or email handling providers, but only for legitimate business purposes related to running the site.',
      'We may also disclose information if required by law, to respond to legal process, to protect our rights, or to help prevent fraud, abuse, or security incidents.',
    ],
  },
  {
    title: '6. Data Retention',
    body: [
      'We retain contact submissions only for as long as reasonably necessary to respond to the message, maintain records, resolve disputes, or comply with legal obligations.',
      'Usage and analytics data may be retained according to the settings and retention schedules of the third-party services that process that information on our behalf.',
    ],
  },
  {
    title: '7. Data Security',
    body: [
      'We use reasonable administrative, technical, and organisational measures to protect information under our control. However, no transmission over the internet or electronic storage method can be guaranteed to be completely secure.',
      'You use the website and submit information to us at your own discretion and risk.',
    ],
  },
  {
    title: '8. Children\'s Privacy',
    body: [
      'TNKalviHub is intended as an educational resource for students, parents, and teachers. We do not knowingly collect personal information from children in violation of applicable law.',
      'If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can review and, where appropriate, delete the information.',
    ],
  },
  {
    title: '9. Third-Party Links',
    body: [
      'The website may link to third-party pages, including official Tamil Nadu textbook resources, YouTube, and other external services. We are not responsible for the privacy practices, policies, or content of those external sites.',
      'You should review the privacy policies of any third-party website before providing personal information or relying on their services.',
    ],
  },
  {
    title: '10. Your Choices and Rights',
    body: [
      'Subject to applicable law, you may request access to, correction of, or deletion of personal information you have provided to us. You may also object to certain processing or withdraw consent where consent is the legal basis for processing.',
      'To make such a request, please contact us through the contact details or contact page provided on the website. We may need to verify your identity before acting on a request.',
    ],
  },
  {
    title: '11. Changes to This Policy',
    body: [
      'We may revise this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. When we do, we will update the "Last updated" date at the top of this page.',
      'Your continued use of the website after changes are posted constitutes acceptance of the revised Privacy Policy.',
    ],
  },
  {
    title: '12. Contact Us',
    body: [
      'If you have questions or concerns about this Privacy Policy or our handling of information, please contact us through the contact page on www.tnkalvihub.com.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="May 7, 2026"
      intro="TNKalviHub respects your privacy and is committed to being transparent about the limited information we collect in order to operate this educational website."
      sections={sections}
    />
  );
}
