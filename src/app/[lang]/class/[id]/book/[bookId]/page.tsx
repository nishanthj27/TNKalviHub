import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { classesData, getBookById } from '@/data/books';
import BookDetailsClient from '../../../../../class/[id]/book/[bookId]/BookDetailsClient';
import { isLanguage, languages, localizedPageMetadata } from '@/lib/i18n';

export async function generateStaticParams() {
  return languages.flatMap((lang) =>
    classesData.flatMap((cls) =>
      cls.books.map((book) => ({
        lang,
        id: String(cls.id),
        bookId: book.id,
      }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string; bookId: string }>;
}): Promise<Metadata> {
  const { lang, id, bookId } = await params;
  const language = isLanguage(lang) ? lang : 'en';
  const result = getBookById(Number(id), bookId);
  if (!result) return {};

  const { cls, book } = result;
  const termEn = book.term ? ` Term ${book.term}` : '';
  const termTa = book.term ? ` ${book.term}ஆம் பருவம்` : '';

  return localizedPageMetadata({
    language,
    path: `/class/${cls.id}/book/${book.id}`,
    title: {
      en: `Class ${cls.id} ${book.subject} ${book.medium}${termEn} Book Details`,
      ta: `${cls.id}ஆம் வகுப்பு ${book.subjectTa}${termTa} பாடப்புத்தக விவரம்`,
    },
    description: {
      en: `Read syllabus highlights, study guidance, exam tips, and download the Tamil Nadu Class ${cls.id} ${book.subject} ${book.medium}${termEn} textbook PDF.`,
      ta: `தமிழ்நாடு ${cls.id}ஆம் வகுப்பு ${book.subjectTa}${termTa} பாடப்புத்தகத்தின் முக்கிய அம்சங்கள், படிப்பு வழிகாட்டி மற்றும் PDF பதிவிறக்க விவரங்களை படியுங்கள்.`,
    },
  });
}

export default async function LocalizedBookDetailsPage({
  params,
}: {
  params: Promise<{ lang: string; id: string; bookId: string }>;
}) {
  const { lang, id, bookId } = await params;
  const language = isLanguage(lang) ? lang : 'en';
  const result = getBookById(Number(id), bookId);
  if (!result) notFound();

  const { cls, book } = result;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: language === 'ta' ? `${cls.id}ஆம் வகுப்பு ${book.subjectTa}` : `Class ${cls.id} ${book.subject} ${book.medium}`,
    educationalLevel: `Class ${cls.id}`,
    learningResourceType: 'Textbook',
    inLanguage: language,
    about: language === 'ta' ? book.subjectTa : book.subject,
    provider: {
      '@type': 'Organization',
      name: 'TNKalviHub',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookDetailsClient cls={cls} book={book} />
    </>
  );
}
