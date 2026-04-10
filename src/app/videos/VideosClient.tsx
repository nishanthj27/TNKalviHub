'use client';
import { Play, Youtube, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { videosData, YOUTUBE_CHANNEL_URL } from '@/data/videos';

export default function VideosClient() {
  const { t, isTamil } = useLanguage();

  return (
    <div className="page-container py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm mb-3">
          <Youtube className="w-5 h-5" />
          <span>YouTube Tutorials</span>
        </div>
        <h1 className="section-title">{t('videosTitle')}</h1>
        <p className="mt-2 max-w-xl mx-auto text-sm" style={{ color: 'var(--text-secondary)' }}>
          {t('videosSub')}
        </p>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex mt-6 text-sm"
        >
          <Play className="w-4 h-4" />
          {t('visitChannel')}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videosData.map((video) => (
          <a
            key={video.id}
            href={video.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card overflow-hidden group"
          >
            <div className="relative aspect-video bg-gray-200 dark:bg-gray-700">
              <img
                src={video.thumbnail}
                alt={isTamil ? video.titleTa : video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://via.placeholder.com/480x270?text=TNKalviHub+Video';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              {video.classTag && (
                <span className="absolute top-3 left-3 bg-brand-primary text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  {video.classTag}
                </span>
              )}
            </div>
            <div className="p-5">
              <h2 className="font-bold text-base leading-snug mb-2" style={{ color: 'var(--text-primary)' }}>
                {isTamil ? video.titleTa : video.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {isTamil ? video.descriptionTa : video.description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-sm text-red-500 font-medium">
                <Youtube className="w-4 h-4" />
                {t('watchVideo')}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Embed note */}
      <div
        className="mt-12 rounded-2xl p-6 text-center"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <Youtube className="w-10 h-10 text-red-500 mx-auto mb-3" />
        <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
          {isTamil ? 'தினமும் புதிய காணொளிகள்!' : 'New Videos Added Daily!'}
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
          {isTamil
            ? 'சேனலை சந்தா செய்து எந்த புத்தகமும் தவறவிடாதீர்கள்.'
            : "Subscribe to our channel so you don't miss any new book download guides."}
        </p>
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          <Youtube className="w-4 h-4" />
          {isTamil ? 'சேனலை சந்தா செய்யுங்கள்' : 'Subscribe to Channel'}
        </a>
      </div>
    </div>
  );
}
