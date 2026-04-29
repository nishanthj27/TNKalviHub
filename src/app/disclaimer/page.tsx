import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer – TNKalviHub',
  description: 'Read the Disclaimer for TNKalviHub. Important information about the nature of our website and its content.',
};

export default function DisclaimerPage() {
  return (
    <div className="page-container py-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
        Disclaimer
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--text-secondary)' }}>
        Last updated: May 2026
      </p>

      <div className="space-y-8">
        {[
          {
            title: 'No Official Affiliation',
            body: `TNKalviHub (www.tnkalvihub.com) is an independent, privately operated educational resource website. It is NOT affiliated with, endorsed by, or connected to the Tamil Nadu Government, the Tamil Nadu Textbook and Educational Services Corporation (TNTB), the School Education Department of Tamil Nadu, or any other government body.`,
          },
          {
            title: 'External Links',
            body: `All textbook PDF links on TNKalviHub redirect to files hosted on external platforms (including Google Drive), which are provided by the official Tamil Nadu Textbooks website (www.tntextbooks.in). We do not host, modify, store, or distribute any government-published textbook files. We are not responsible for the availability, accuracy, or content of these external files.`,
          },
          {
            title: 'Accuracy of Information',
            body: `While we make every effort to ensure that the information on TNKalviHub is current and correct, we make no warranties or representations of any kind about the completeness, accuracy, reliability, or availability of the website or its content. Subject and book information may be updated or changed by the Tamil Nadu Government. Always verify with the official website for the most up-to-date information.`,
          },
          {
            title: 'Educational Purpose',
            body: `This website is created purely for educational purposes to help Tamil Nadu students and parents easily find and access government-published textbooks. No financial gain is claimed from the distribution of textbook content.`,
          },
          {
            title: 'Copyright',
            body: `The textbooks linked on this website are copyrighted materials of the Tamil Nadu Government. They are made available by the government for free educational use. TNKalviHub does not claim ownership of any of these materials.`,
          },
          {
            title: 'Advertisement Disclaimer',
            body: `TNKalviHub displays advertisements through Google AdSense to support the running costs of the website. These advertisements are selected by Google's algorithms. TNKalviHub does not endorse the products or services advertised.`,
          },
          {
            title: 'Contact',
            body: `If you believe any content on this website infringes your rights or contains inaccurate information, please contact us via www.tnkalvihub.com/contact and we will address your concern promptly.`,
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
