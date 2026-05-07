import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { classesData, getBookById } from '@/data/books';
import BookDetailsClient from './BookDetailsClient';

export async function generateStaticParams() {
  return classesData.flatMap((cls) =>
    cls.books.map((book) => ({
      id: String(cls.id),
      bookId: book.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; bookId: string }>;
}): Promise<Metadata> {
  const { id, bookId } = await params;
  const result = getBookById(Number(id), bookId);
  if (!result) return {};

  const { cls, book } = result;
  const title = `Class ${cls.id} ${book.subject} ${book.medium}${book.term ? ` Term ${book.term}` : ''} Book Details`;

  return {
    title,
    description: `Read syllabus highlights, study guidance, exam tips, and download the Tamil Nadu Class ${cls.id} ${book.subject} ${book.medium}${book.term ? ` Term ${book.term}` : ''} textbook PDF.`,
    keywords: [
      title,
      `Class ${cls.id} ${book.subject} PDF`,
      `Tamil Nadu Class ${cls.id} ${book.subject}`,
      `Samacheer Kalvi Class ${cls.id} ${book.subject}`,
      `${book.medium} textbook`,
      book.term ? `Term ${book.term} textbook` : 'full year textbook',
    ],
    alternates: {
      canonical: `/class/${cls.id}/book/${book.id}`,
    },
  };
}

export default async function BookDetailsPage({
  params,
}: {
  params: Promise<{ id: string; bookId: string }>;
}) {
  const { id, bookId } = await params;
  const result = getBookById(Number(id), bookId);
  if (!result) notFound();

  const { cls, book } = result;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: `Class ${cls.id} ${book.subject} ${book.medium}${book.term ? ` Term ${book.term}` : ''}`,
    educationalLevel: `Class ${cls.id}`,
    learningResourceType: 'Textbook',
    inLanguage: book.medium === 'Tamil Medium' ? 'ta' : 'en',
    about: book.subject,
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
