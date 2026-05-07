import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ClassPageClient from '../../../class/[id]/ClassPageClient';
import { classesData, getClassById } from '@/data/books';
import { isLanguage, languages, localizedPageMetadata } from '@/lib/i18n';

export async function generateStaticParams() {
  return languages.flatMap((lang) =>
    classesData.map((cls) => ({
      lang,
      id: String(cls.id),
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const language = isLanguage(lang) ? lang : 'en';
  const cls = getClassById(Number(id));
  if (!cls) return {};

  return localizedPageMetadata({
    language,
    path: `/class/${cls.id}`,
    title: {
      en: `${cls.name} Tamil Nadu Textbooks PDF Download`,
      ta: `${cls.id}ஆம் வகுப்பு தமிழ்நாடு பாடப்புத்தகங்கள் PDF பதிவிறக்கம்`,
    },
    description: {
      en: cls.description,
      ta: cls.descriptionTa,
    },
  });
}

export default async function LocalizedClassPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cls = getClassById(Number(id));
  if (!cls) notFound();
  return <ClassPageClient cls={cls} />;
}
