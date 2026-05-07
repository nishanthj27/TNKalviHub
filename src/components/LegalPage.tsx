'use client';

import { useLanguage } from '@/context/LanguageContext';

type LocalizedText = {
  en: string;
  ta: string;
};

type LegalSection = {
  title: LocalizedText;
  body: LocalizedText[];
};

type LegalPageProps = {
  title: LocalizedText;
  lastUpdated: string;
  intro: LocalizedText;
  sections: LegalSection[];
};

export default function LegalPage({ title, lastUpdated, intro, sections }: LegalPageProps) {
  const { isTamil } = useLanguage();

  return (
    <div className="page-container max-w-4xl mx-auto py-10 md:py-14">
      <header className="border-b pb-6" style={{ borderColor: 'var(--border-color)' }}>
        <h1 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
          {isTamil ? title.ta : title.en}
        </h1>
        <p className="mt-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
          {isTamil ? 'கடைசியாக புதுப்பிக்கப்பட்டது:' : 'Last updated:'} {lastUpdated}
        </p>
        <p className="mt-5 text-sm leading-7 md:text-base" style={{ color: 'var(--text-secondary)' }}>
          {isTamil ? intro.ta : intro.en}
        </p>
      </header>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.title.en}>
            <h2 className="text-lg font-bold md:text-xl" style={{ color: 'var(--text-primary)' }}>
              {isTamil ? section.title.ta : section.title.en}
            </h2>
            <div className="mt-3 space-y-3 text-sm leading-7 md:text-base" style={{ color: 'var(--text-secondary)' }}>
              {section.body.map((paragraph) => (
                <p key={paragraph.en}>{isTamil ? paragraph.ta : paragraph.en}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
