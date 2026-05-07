'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Download, ArrowLeft, BookOpen, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { ClassInfo, Book } from '@/data/books';
import { buildClassDetailContent } from '@/lib/classDetails';

// ── Single subject row inside a medium card ───────────────────────────────────
function SubjectRow({ book, classId, isTamil }: { book: Book; classId: number; isTamil: boolean }) {
  const isPlaceholder = !book.driveLink || book.driveLink === '#';
  const [isTruncated, setIsTruncated] = useState(false);
  const spanRef = useRef<HTMLSpanElement>(null);

  const subjectName = isTamil ? book.subjectTa : book.subject;

  // Check if text would be truncated by measuring the span
  useEffect(() => {
    if (spanRef.current) {
      const isOverflowing = spanRef.current.scrollWidth > spanRef.current.clientWidth;
      setIsTruncated(isOverflowing);
    }
  }, [subjectName]);

  // Option 4: Vertical stack layout when text would be truncated
  if (isTruncated) {
    return (
      <div
        className="flex flex-col gap-3 px-4 py-3 rounded-xl border"
        style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Subject name and buttons - Flex row for alignment */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          {/* Subject name - Left side */}
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <BookOpen className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
            </div>
            <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
              {subjectName}
            </h3>
          </div>

          {/* Buttons - Right side */}
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            {/* Download button */}
            <a
              href={book.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => isPlaceholder && e.preventDefault()}
              className={`flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-colors ${
                isPlaceholder
                  ? 'cursor-not-allowed'
                  : 'hover:opacity-90'
              }`}
              style={
                isPlaceholder
                  ? { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }
                  : { backgroundColor: '#E8500A', color: '#ffffff' }
              }
              title={isPlaceholder ? 'Link coming soon' : 'Download PDF'}
            >
              <Download className="w-4 h-4" />
              {isPlaceholder
                ? isTamil ? 'விரைவில்' : 'Soon'
                : isTamil ? 'PDF பதிவிறக்கம்' : 'Download PDF'}
            </a>

            <Link
              href={`/class/${classId}/book/${book.id}`}
              className="flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-colors hover:opacity-90"
              style={{ backgroundColor: '#E8500A', color: '#ffffff' }}
              title="Read book details"
            >
              <FileText className="w-4 h-4" />
              {isTamil ? 'புத்தக விவரம்' : 'Book Details'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default layout - original horizontal layout with truncate
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 py-3 rounded-xl border"
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Subject name */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <BookOpen className="w-4 h-4" style={{ color: 'var(--text-secondary)' }} />
        </div>
        <span 
          ref={spanRef}
          className="text-base font-semibold truncate" 
          style={{ color: 'var(--text-primary)' }}
        >
          {subjectName}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
        {/* Download button */}
        <a
          href={book.driveLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => isPlaceholder && e.preventDefault()}
          className={`flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-colors ${
            isPlaceholder
              ? 'cursor-not-allowed'
              : 'hover:opacity-90'
          }`}
          style={
            isPlaceholder
              ? { backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }
              : { backgroundColor: '#E8500A', color: '#ffffff' }
          }
          title={isPlaceholder ? 'Link coming soon' : 'Download PDF'}
        >
          <Download className="w-4 h-4" />
          {isPlaceholder
            ? isTamil ? 'விரைவில்' : 'Soon'
            : isTamil ? 'PDF பதிவிறக்கம்' : 'Download PDF'}
        </a>

        <Link
          href={`/class/${classId}/book/${book.id}`}
          className="flex items-center justify-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-colors hover:opacity-90"
          style={{ backgroundColor: '#E8500A', color: '#ffffff' }}
          title="Read book details"
        >
          <FileText className="w-4 h-4" />
          {isTamil ? 'புத்தக விவரம்' : 'Book Details'}
        </Link>
      </div>
    </div>
  );
}

// ── One medium card (Tamil or English) ───────────────────────────────────────
function MediumCard({
  medium,
  books,
  classId,
  isTamil,
}: {
  medium: 'Tamil Medium' | 'English Medium';
  books: Book[];
  classId: number;
  isTamil: boolean;
}) {
  const isTamilMedium = medium === 'Tamil Medium';
  const label = isTamil
    ? isTamilMedium ? 'தமிழ் வழி' : 'ஆங்கில வழி'
    : medium;

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm border"
      style={{ borderColor: 'var(--border-color)' }}
    >
      {/* Card header */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{
          background: isTamilMedium
            ? 'linear-gradient(90deg, #1E3A5F, #2a4f80)'
            : 'linear-gradient(90deg, #E8500A, #c44008)',
        }}
      >
        <div className="flex items-center gap-2 text-white">
          <span className="text-xl">{isTamilMedium ? '🌺' : '🔤'}</span>
          <span className="text-lg font-bold">{label}</span>
        </div>
        <span className="text-sm text-white/80 font-medium">
          {books.length} {isTamil ? 'பாடங்கள்' : 'subjects'}
        </span>
      </div>

      {/* Subject rows */}
      <div
        className="p-4 space-y-2"
        style={{ backgroundColor: 'var(--bg-card)' }}
      >
        {books.map((book) => (
          <SubjectRow key={book.id} book={book} classId={classId} isTamil={isTamil} />
        ))}
      </div>
    </div>
  );
}

// ── Term section (for Classes 1–7) ───────────────────────────────────────────
function TermSection({
  term,
  tamilBooks,
  englishBooks,
  classId,
  isTamil,
}: {
  term: 1 | 2 | 3;
  tamilBooks: Book[];
  englishBooks: Book[];
  classId: number;
  isTamil: boolean;
}) {
  const [open, setOpen] = useState(true);
  const termLabel = isTamil ? `${term} ஆம் பருவம்` : `Term ${term}`;

  if (tamilBooks.length === 0 && englishBooks.length === 0) return null;

  return (
    <div className="mb-8">
      {/* Term header toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between mb-4 group"
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-base flex-shrink-0"
            style={{ backgroundColor: '#F5A623' }}
          >
            {term}
          </div>
          <span
            className="text-xl font-extrabold"
            style={{ color: 'var(--text-primary)' }}
          >
            {termLabel}
          </span>
        </div>
        <span
          className="text-sm font-medium px-3 py-1 rounded-full"
          style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
        >
          {open
            ? isTamil ? '▲ மறை' : '▲ Collapse'
            : isTamil ? '▼ காட்டு' : '▼ Expand'}
        </span>
      </button>

      {open && (
        /* Side-by-side on md+, stacked on mobile */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MediumCard medium="Tamil Medium" books={tamilBooks} classId={classId} isTamil={isTamil} />
          <MediumCard medium="English Medium" books={englishBooks} classId={classId} isTamil={isTamil} />
        </div>
      )}
    </div>
  );
}

// ── Full-year section (for Classes 8–12) ──────────────────────────────────────
function FullYearSection({
  tamilBooks,
  englishBooks,
  classId,
  isTamil,
}: {
  tamilBooks: Book[];
  englishBooks: Book[];
  classId: number;
  isTamil: boolean;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
          style={{ backgroundColor: '#1E3A5F' }}
        >
          <BookOpen className="w-5 h-5" />
        </div>
        <span
          className="text-xl font-extrabold"
          style={{ color: 'var(--text-primary)' }}
        >
          {isTamil ? 'முழு ஆண்டு' : 'Full Year'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <MediumCard medium="Tamil Medium" books={tamilBooks} classId={classId} isTamil={isTamil} />
        <MediumCard medium="English Medium" books={englishBooks} classId={classId} isTamil={isTamil} />
      </div>
    </div>
  );
}

// ── Main exported component ───────────────────────────────────────────────────
export default function ClassPageClient({ cls }: { cls: ClassInfo }) {
  const { t, isTamil } = useLanguage();
  const classDetail = buildClassDetailContent(cls);

  const tamilBooks = cls.books.filter((b) => b.medium === 'Tamil Medium');
  const englishBooks = cls.books.filter((b) => b.medium === 'English Medium');

  return (
    <div className="page-container py-8">
      {/* Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-base text-brand-primary hover:underline mb-6 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        {t('backToHome')}
      </Link>

      {/* Class Hero Banner */}
      <div
        className="rounded-2xl p-6 md:p-10 text-white mb-8"
        style={{ background: 'linear-gradient(135deg, #0f1b2d 0%, #1E3A5F 50%, #E8500A 100%)' }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-extrabold flex-shrink-0"
            style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
          >
            {cls.id}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-1">
              {isTamil ? cls.nameTa : cls.name}
            </h1>
            <p className="text-white/80 text-base leading-relaxed max-w-2xl">
              {isTamil ? cls.descriptionTa : cls.description}
            </p>
          </div>
        </div>

        {/* Meta pills */}
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="bg-white/15 rounded-lg px-4 py-2 text-sm font-medium">
            📚 {cls.books.length} {isTamil ? 'புத்தகங்கள்' : 'Books'}
          </span>
          <span className="bg-white/15 rounded-lg px-4 py-2 text-sm font-medium">
            🌐 {isTamil ? '2 வழிகள்' : '2 Mediums'}
          </span>
          {cls.hasTerm ? (
            <span className="bg-white/15 rounded-lg px-4 py-2 text-sm font-medium">
              📅 {isTamil ? '3 பருவங்கள்' : '3 Terms'}
            </span>
          ) : (
            <span className="bg-white/15 rounded-lg px-4 py-2 text-sm font-medium">
              📅 {isTamil ? 'முழு ஆண்டு' : 'Full Year'}
            </span>
          )}
        </div>
      </div>

      {/* Layout hint */}
      <div
        className="flex items-center gap-2 text-sm mb-6 px-4 py-3 rounded-xl"
        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
      >
        <span>💡</span>
        <span>
          {isTamil
            ? 'தமிழ் வழி மற்றும் ஆங்கில வழி புத்தகங்கள் பக்கவாட்டில் காட்டப்படுகின்றன — எளிதாக ஒப்பிட்டு பதிவிறக்கவும்.'
            : 'Tamil Medium and English Medium are shown side by side — easily compare and download.'}
        </span>
      </div>

      {/* ── Books: term-based (Classes 1–7) ── */}
      {cls.hasTerm ? (
        <>
          {([1, 2, 3] as const).map((term) => (
            <TermSection
              key={term}
              term={term}
              tamilBooks={tamilBooks.filter((b) => b.term === term)}
              englishBooks={englishBooks.filter((b) => b.term === term)}
              classId={cls.id}
              isTamil={isTamil}
            />
          ))}
        </>
      ) : (
        /* ── Books: full year (Classes 8–12) ── */
        <FullYearSection
          tamilBooks={tamilBooks}
          englishBooks={englishBooks}
          classId={cls.id}
          isTamil={isTamil}
        />
      )}

      <section className="card p-5 md:p-8 mt-8">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-5" style={{ color: 'var(--text-primary)' }}>
          {classDetail.title}
        </h2>

        <div className="space-y-5">
          {[...classDetail.intro, ...classDetail.highlights, ...classDetail.guidance, ...classDetail.deepDive].map((paragraph) => (
            <p key={paragraph} className="text-base leading-8" style={{ color: 'var(--text-secondary)' }}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Official source note */}
      <div
        className="mt-6 rounded-xl p-5 text-base"
        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
      >
        <strong style={{ color: 'var(--text-primary)' }}>
          {isTamil ? '📌 குறிப்பு:' : '📌 Note:'}
        </strong>{' '}
        {isTamil
          ? 'அனைத்து PDF இணைப்புகளும் தமிழ்நாடு அரசின் அதிகாரப்பூர்வ இணையதளமான tntextbooks.in இலிருந்து பெறப்படுகின்றன.'
          : 'All PDF links are sourced directly from the official Tamil Nadu Government website (tntextbooks.in).'}
      </div>
    </div>
  );
}
