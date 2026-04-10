import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ClassPageClient from './ClassPageClient';
import { classesData, getClassById } from '@/data/books';

// Generate static paths for all 12 classes
export async function generateStaticParams() {
  return classesData.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const cls = getClassById(Number(id));
  if (!cls) return {};
  return {
    title: `${cls.name} Textbooks PDF Download`,
    description: cls.description,
    keywords: [
      `Class ${cls.id} TN textbooks`,
      `Class ${cls.id} PDF download`,
      `Samacheer Kalvi Class ${cls.id}`,
      `TN Class ${cls.id} Tamil medium`,
      `TN Class ${cls.id} English medium`,
    ],
  };
}

export default async function ClassPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cls = getClassById(Number(id));
  if (!cls) notFound();
  return <ClassPageClient cls={cls} />;
}
