type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <div className="page-container max-w-4xl mx-auto py-10 md:py-14">
      <header className="border-b pb-6" style={{ borderColor: 'var(--border-color)' }}>
        <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h1>
        <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          Last updated: {lastUpdated}
        </p>
        <p className="mt-5 text-sm leading-7 md:text-base" style={{ color: 'var(--text-secondary)' }}>
          {intro}
        </p>
      </header>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-bold md:text-xl" style={{ color: 'var(--text-primary)' }}>
              {section.title}
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-7 md:text-base" style={{ color: 'var(--text-secondary)' }}>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
