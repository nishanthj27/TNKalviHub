'use client';

import Link from 'next/link';
import { Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { classesData } from '@/data/books';

const CLASS_COLORS = [
  'from-orange-400 to-red-500',
  'from-pink-400 to-rose-500',
  'from-purple-400 to-indigo-500',
  'from-blue-400 to-cyan-500',
  'from-teal-400 to-green-500',
  'from-yellow-400 to-orange-500',
  'from-red-400 to-pink-500',
  'from-indigo-400 to-purple-500',
  'from-cyan-400 to-blue-500',
  'from-green-400 to-teal-500',
  'from-orange-500 to-amber-600',
  'from-rose-400 to-red-600',
];

export default function ClassGrid() {
  const { isTamil } = useLanguage();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {classesData.map((cls) => (
        <Link
          key={cls.id}
          href={`/class/${cls.id}`}
          className={`bg-gradient-to-br ${CLASS_COLORS[cls.id - 1]} rounded-2xl p-5 text-white text-center hover:scale-105 transition-transform shadow-md`}
        >
          <div className="text-4xl font-extrabold">{cls.id}</div>
          <div className="text-xs font-semibold mt-1 opacity-90">
            {isTamil ? `${cls.id} ஆம் வகுப்பு` : `Class ${cls.id}`}
          </div>
          <div className="mt-3 text-xs opacity-80 flex items-center justify-center gap-1">
            <Download className="w-3 h-3" />
            {cls.books.length} {isTamil ? 'புத்தகங்கள்' : 'books'}
          </div>
        </Link>
      ))}
    </div>
  );
}
