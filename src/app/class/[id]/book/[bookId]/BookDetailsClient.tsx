'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Download, FileText } from 'lucide-react';
import ClassGrid from '@/components/ClassGrid';
import { useLanguage } from '@/context/LanguageContext';
import type { Book, ClassInfo } from '@/data/books';
import { buildBookDetailArticle } from '@/lib/bookDetails';
import { buildTamilBookDetailArticle } from '@/lib/bookDetailsTa';

function termLabel(book: Book, isTamil: boolean) {
  if (!book.term) return isTamil ? 'முழு ஆண்டு' : 'Full Year';
  return isTamil ? `${book.term} ஆம் பருவம்` : `Term ${book.term}`;
}

function mediumLabel(book: Book, isTamil: boolean) {
  if (!isTamil) return book.medium;
  return book.medium === 'Tamil Medium' ? 'தமிழ் வழி' : 'ஆங்கில வழி';
}

export default function BookDetailsClient({
  cls,
  book,
}: {
  cls: ClassInfo;
  book: Book;
}) {
  const { isTamil, withLanguage } = useLanguage();
  const article = isTamil ? buildTamilBookDetailArticle(cls, book) : buildBookDetailArticle(cls, book);
  const isPlaceholder = !book.driveLink || book.driveLink === '#';
  const termText = termLabel(book, isTamil);

  return (
    <div className="py-8">
      <div className="page-container">
        <Link
          href={withLanguage(`/class/${cls.id}`)}
          className="inline-flex items-center gap-1.5 text-base text-brand-primary hover:underline mb-6 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          {isTamil ? `${cls.nameTa} பக்கத்துக்கு திரும்ப` : `Back to Class ${cls.id}`}
        </Link>

        <section
          className="rounded-2xl p-6 md:p-10 text-white mb-8"
          style={{ background: 'linear-gradient(135deg, #0f1b2d 0%, #1E3A5F 52%, #E8500A 100%)' }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white/75 mb-2">
                {isTamil ? 'தமிழ்நாடு பாடப்புத்தக விவரங்கள்' : 'Tamil Nadu School Textbook Details'}
              </p>
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
                {article.bookName} PDF
              </h1>
              <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold">
                <span className="rounded-lg bg-white/15 px-3 py-1.5">{isTamil ? cls.nameTa : `Class ${cls.id}`}</span>
                <span className="rounded-lg bg-white/15 px-3 py-1.5">{isTamil ? book.subjectTa : book.subject}</span>
                <span className="rounded-lg bg-white/15 px-3 py-1.5">{mediumLabel(book, isTamil)}</span>
                <span className="rounded-lg bg-white/15 px-3 py-1.5">{termText}</span>
              </div>
            </div>
          </div>
        </section>

        <article className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="space-y-7">
            <section className="card p-5 md:p-7">
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                {isTamil ? 'புத்தக அறிமுகம்' : 'Book Introduction'}
              </h2>
              {article.intro.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 mb-4 last:mb-0" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="card p-5 md:p-7">
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                {isTamil ? 'பாடத்திட்ட சிறப்பம்சங்கள்' : 'Syllabus Highlights'}
              </h2>
              {article.syllabusHighlights.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 mb-4 last:mb-0" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
            </section>

            <section className="card p-5 md:p-7">
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                {isTamil ? '2026-2027 படிப்பு வழிகாட்டி' : 'Study Guidance for 2026-2027'}
              </h2>
              {article.studyGuidance.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 mb-4 last:mb-0" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
              {article.internalLinks.length > 0 && (
                <p className="text-base leading-8 mt-4" style={{ color: 'var(--text-secondary)' }}>
                  {article.internalLinkLead}{' '}
                  {article.internalLinks.map((internalLink, index) => (
                    <span key={internalLink.href}>
                      <Link href={withLanguage(internalLink.href)} className="font-semibold text-brand-primary hover:underline">
                        {internalLink.label}
                      </Link>
                      {index === article.internalLinks.length - 2 ? (isTamil ? ' மற்றும் ' : ' and ') : index < article.internalLinks.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  {' '}{article.internalLinkTail}
                </p>
              )}
            </section>

            <section className="card p-5 md:p-7">
              <h2 className="text-xl md:text-2xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
                {isTamil ? 'தேர்வு குறிப்புகள்' : 'Exam Tips'}
              </h2>
              <ul className="space-y-3">
                {article.examTips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-base leading-7" style={{ color: 'var(--text-secondary)' }}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-primary flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 space-y-4">
            <div className="card p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <h2 className="font-extrabold" style={{ color: 'var(--text-primary)' }}>
                    {isTamil ? 'புத்தக சுருக்கம்' : 'Book Summary'}
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {mediumLabel(book, isTamil)} · {termText}
                  </p>
                </div>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>{isTamil ? 'பாடம்' : 'Subject'}</dt>
                  <dd style={{ color: 'var(--text-secondary)' }}>{isTamil ? book.subjectTa : book.subject}</dd>
                </div>
                <div>
                  <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>{isTamil ? 'வகுப்பு' : 'Class'}</dt>
                  <dd style={{ color: 'var(--text-secondary)' }}>{isTamil ? cls.nameTa : `Class ${cls.id}`}</dd>
                </div>
                <div>
                  <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>{isTamil ? 'கல்வியாண்டு' : 'Academic Year'}</dt>
                  <dd style={{ color: 'var(--text-secondary)' }}>2026-2027</dd>
                </div>
              </dl>
            </div>
          </aside>
        </article>
      </div>

      <section className="page-container mt-10">
        <div className="rounded-2xl p-6 md:p-8 text-center border" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: 'var(--text-primary)' }}>
            {isTamil ? `${article.bookName} PDF பதிவிறக்கம்` : `Download ${article.bookName} PDF`}
          </h2>
          <p className="mb-5 text-base" style={{ color: 'var(--text-secondary)' }}>
            {isTamil ? 'இந்த பாடப்புத்தகத்திற்கான அதிகாரப்பூர்வ Google Drive PDF இணைப்பைப் பயன்படுத்துங்கள்.' : 'Use the official Google Drive PDF link for this textbook.'}
          </p>
          {isPlaceholder ? (
            <span className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-extrabold cursor-not-allowed" style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}>
              <Download className="w-5 h-5" />
              {isTamil ? 'பதிவிறக்க இணைப்பு விரைவில் வரும்' : 'Download link coming soon'}
            </span>
          ) : (
            <a
              href={book.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-extrabold text-white shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#E8500A' }}
            >
              <Download className="w-5 h-5" />
              {isTamil ? `${article.bookName} PDF பதிவிறக்கம்` : `Download ${article.bookName} PDF`}
            </a>
          )}
        </div>
      </section>

      <section className="page-container py-14">
        <div className="text-center mb-10">
          <h2 className="section-title">{isTamil ? 'வகுப்பைத் தேர்ந்தெடுக்கவும்' : 'Select Class'}</h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {isTamil ? 'தமிழ்நாடு பள்ளி பாடப்புத்தக வகுப்புகளை முழுவதும் உலாவுங்கள்' : 'Browse all Tamil Nadu school textbook classes'}
          </p>
        </div>
        <ClassGrid />
      </section>
    </div>
  );
}
