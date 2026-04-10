'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Download, BookOpen, Play, ArrowRight, Search, FileText, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { classesData } from '@/data/books';
import { videosData, YOUTUBE_CHANNEL_URL } from '@/data/videos';

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

function BrandName() {
  return (
    <span className="font-extrabold">
      <span style={{ color: '#3B8BEB' }}>TN</span>
      <span style={{ color: '#F5A623' }}>Kalvi</span>
      <span style={{ color: '#3B8BEB' }}>Hub</span>
    </span>
  );
}

function QuickSearch() {
  const { isTamil } = useLanguage();
  const router = useRouter();
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedMedium, setSelectedMedium] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    if (!selectedClass || !selectedMedium) {
      setError(
        isTamil
          ? 'வகுப்பு மற்றும் வழி இரண்டையும் தேர்ந்தெடுக்கவும்'
          : 'Please select both Class and Medium before searching.'
      );
      return;
    }
    setError('');
    // Both mediums are on the same page — navigate to the class page
    router.push(`/class/${selectedClass}`);
  };

  const selectClass =
    'w-full sm:flex-1 px-4 py-3 rounded-xl border text-base font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none cursor-pointer';
  const selectStyle = {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderColor: 'rgba(255,255,255,0.35)',
    color: '#fff',
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Box 1: Select Class */}
        <select
          value={selectedClass}
          onChange={(e) => { setSelectedClass(e.target.value); setError(''); }}
          className={selectClass}
          style={selectStyle}
        >
          <option value="" disabled style={{ color: '#333' }}>
            {isTamil ? 'வகுப்பு தேர்ந்தெடு' : 'Select Class'}
          </option>
          {classesData.map((c) => (
            <option key={c.id} value={c.id} style={{ color: '#333' }}>
              {isTamil ? `${c.id} ஆம் வகுப்பு` : `Class ${c.id}`}
            </option>
          ))}
        </select>

        {/* Box 2: Select Medium */}
        <select
          value={selectedMedium}
          onChange={(e) => { setSelectedMedium(e.target.value); setError(''); }}
          className={selectClass}
          style={selectStyle}
        >
          <option value="" disabled style={{ color: '#333' }}>
            {isTamil ? 'வழி தேர்ந்தெடு' : 'Select Medium'}
          </option>
          <option value="tamil" style={{ color: '#333' }}>
            {isTamil ? 'தமிழ் வழி' : 'Tamil Medium'}
          </option>
          <option value="english" style={{ color: '#333' }}>
            {isTamil ? 'ஆங்கில வழி' : 'English Medium'}
          </option>
        </select>

        {/* Box 3: Search Button */}
        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-base transition-all shadow-lg whitespace-nowrap"
          style={{ backgroundColor: '#F5A623', color: '#0f1b2d' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#e09310')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F5A623')}
        >
          <Search className="w-5 h-5" />
          {isTamil ? 'தேடு' : 'Search'}
        </button>
      </div>

      {error && (
        <p className="mt-2 text-sm text-yellow-200 text-center">{error}</p>
      )}
    </div>
  );
}

export default function HomePage() {
  const { t, isTamil } = useLanguage();

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{ background: 'linear-gradient(135deg, #0f1b2d 0%, #1E3A5F 50%, #1a3a6b 100%)' }}
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-10" style={{ background: '#3B8BEB' }} />
          <div className="absolute -bottom-20 -right-10 w-96 h-96 rounded-full opacity-10" style={{ background: '#F5A623' }} />
        </div>

        <div className="page-container relative text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 border border-white/20 bg-white/10">
            <BookOpen className="w-4 h-4 text-yellow-300" />
            <span>Classes 1–12 &nbsp;·&nbsp; Tamil Nadu Government Books</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            {isTamil ? (
              <>
                <span style={{ color: '#F5A623' }}>இலவச கல்வி தளம்</span>
                <br />
                <span className="text-white">தமிழ்நாடு மாணவர்களுக்காக</span>
              </>
            ) : (
              <>
                Your Free <span style={{ color: '#F5A623' }}>Study Hub</span>
                <br />
                for Tamil Nadu Students
              </>
            )}
          </h1>

          {/* Sub-headline in the other language */}
          <p className="text-base md:text-lg font-medium mb-3" style={{ color: '#93C5FD' }}>
            {isTamil
              ? 'Your Free Study Hub for Tamil Nadu Students'
              : 'தமிழ்நாடு மாணவர்களுக்கான இலவச கல்வி தளம்'}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {isTamil
              ? 'பாடநூல்கள், அத்தியாய குறிப்புகள், கடந்த கால வினாத்தாள்கள் — அனைத்தும் 1 முதல் 12 ஆம் வகுப்பு வரை தமிழ் மற்றும் ஆங்கில வழியில் இலவசமாக கிடைக்கும்.'
              : 'Access Tamil Nadu textbooks, chapter notes & past question papers — all completely free for Classes 1–12 in both Tamil & English medium.'}
          </p>

          {/* Quick Search */}
          <QuickSearch />

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm">
            {[
              { icon: '📚', en: 'Official Textbooks', ta: 'அதிகாரப்பூர்வ பாடநூல்கள்' },
              { icon: '📝', en: 'Chapter Notes', ta: 'அத்தியாய குறிப்புகள்' },
              { icon: '📄', en: 'Past Question Papers', ta: 'கடந்த கால வினாத்தாள்கள்' },
              { icon: '🆓', en: '100% Free', ta: '100% இலவசம்' },
            ].map((f) => (
              <span
                key={f.en}
                className="px-3 py-1.5 rounded-full text-white/90 border border-white/20 bg-white/10 font-medium"
              >
                {f.icon} {isTamil ? f.ta : f.en}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-center">
            {[
              { num: '12', en: 'Classes', ta: 'வகுப்புகள்' },
              { num: '200+', en: 'Books', ta: 'புத்தகங்கள்' },
              { num: '2', en: 'Mediums', ta: 'வழிகள்' },
              { num: '100%', en: 'Free', ta: 'இலவசம்' },
            ].map((s) => (
              <div key={s.en}>
                <div className="text-3xl font-extrabold" style={{ color: '#F5A623' }}>{s.num}</div>
                <div className="text-sm text-white/70">{isTamil ? s.ta : s.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Classes Grid ── */}
      <section className="py-14 page-container">
        <div className="text-center mb-10">
          <h2 className="section-title">{t('selectClass')}</h2>
          <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {t('selectClassSub')}
          </p>
        </div>

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
      </section>

      {/* ── What We Offer ── */}
      <section className="py-14" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="page-container">
          <h2 className="section-title text-center mb-10">
            {isTamil ? 'நாங்கள் வழங்குவது' : 'What You Get at TNKalviHub'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="w-7 h-7 text-brand-primary" />,
                en_t: 'Official Textbooks', ta_t: 'அதிகாரப்பூர்வ பாடநூல்கள்',
                en_d: 'All TN Government textbooks for Classes 1–12, in Tamil and English medium, available as free PDF downloads.',
                ta_d: '1 முதல் 12 ஆம் வகுப்பு வரையிலான அனைத்து TN அரசு பாடநூல்களும் இலவச PDF வடிவில் கிடைக்கும்.',
              },
              {
                icon: <FileText className="w-7 h-7 text-brand-primary" />,
                en_t: 'Chapter Notes & Materials', ta_t: 'அத்தியாய குறிப்புகள்',
                en_d: 'Concise chapter-wise notes and study materials to help students prepare faster and smarter for exams.',
                ta_d: 'விரைவான தேர்வு தயாரிப்புக்கு அத்தியாயம் வாரியான குறிப்புகளும் படிப்பு பொருட்களும் கிடைக்கும்.',
              },
              {
                icon: <HelpCircle className="w-7 h-7 text-brand-primary" />,
                en_t: 'Past Question Papers', ta_t: 'கடந்த கால வினாத்தாள்கள்',
                en_d: 'Access previous year question papers to understand the exam pattern and practise effectively.',
                ta_d: 'தேர்வு முறையை புரிந்துகொள்ள மற்றும் திறம்பட பயிற்சி செய்ய கடந்த கால வினாத்தாள்களை பெறுங்கள்.',
              },
            ].map(({ icon, en_t, ta_t, en_d, ta_d }) => (
              <div key={en_t} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                  {isTamil ? ta_t : en_t}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {isTamil ? ta_d : en_d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-14 page-container">
        <h2 className="section-title text-center mb-10">
          {isTamil ? 'எப்படி பதிவிறக்கம் செய்வது?' : 'How to Download?'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '1', icon: '📚', en: 'Select Your Class', ta: 'உங்கள் வகுப்பை தேர்ந்தெடுங்கள்', d_en: 'Choose from Class 1 to Class 12', d_ta: '1 முதல் 12 வகுப்பு வரை தேர்வு செய்யுங்கள்' },
            { step: '2', icon: '🔍', en: 'Choose Your Subject', ta: 'பாடத்தை தேர்ந்தெடுங்கள்', d_en: 'Pick your subject from Tamil or English medium', d_ta: 'தமிழ் வழி அல்லது ஆங்கில வழியில் பாடத்தை தேர்வு செய்யுங்கள்' },
            { step: '3', icon: '⬇️', en: 'Download PDF', ta: 'PDF பதிவிறக்கம் செய்யுங்கள்', d_en: 'Click download and get the official TN book PDF instantly', d_ta: 'பதிவிறக்கம் பொத்தானை கிளிக் செய்து உடனடியாக PDF பெறுங்கள்' },
          ].map((item) => (
            <div key={item.step} className="card p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="w-8 h-8 rounded-full bg-brand-primary text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                {isTamil ? item.ta : item.en}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {isTamil ? item.d_ta : item.d_en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Videos ── */}
      <section className="py-14" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="page-container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="section-title">{t('videosTitle')}</h2>
              <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>{t('videosSub')}</p>
            </div>
            <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm whitespace-nowrap">
              <Play className="w-4 h-4" />
              {t('visitChannel')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videosData.map((video) => (
              <a key={video.id} href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="card overflow-hidden group">
                <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
                  <img
                    src={video.thumbnail}
                    alt={isTamil ? video.titleTa : video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/480x270?text=Video'; }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                  {video.classTag && (
                    <span className="absolute top-2 left-2 bg-brand-primary text-white text-xs px-2 py-0.5 rounded-full">{video.classTag}</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {isTamil ? video.titleTa : video.title}
                  </h3>
                  <p className="text-xs mt-1 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                    {isTamil ? video.descriptionTa : video.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-12 page-container text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
          {isTamil ? 'ஒவ்வொரு நாளும் புதிய காணொளிகள்!' : 'New Videos & Resources Added Daily!'}
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          {isTamil
            ? 'எங்கள் YouTube சேனலை சந்தா செய்து அனைத்து புதிய வளங்கள் பற்றிய அறிவிப்புகளை பெறுங்கள்.'
            : 'Subscribe to our YouTube channel to stay updated on new textbooks, notes, and guides.'}
        </p>
        <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex text-base px-8 py-3">
          <Play className="w-5 h-5" />
          {isTamil ? 'YouTube சேனல் சந்தா செய்யுங்கள்' : 'Subscribe on YouTube'}
        </a>
      </section>
    </>
  );
}
