'use client';
import Link from 'next/link';
import { Play, Youtube, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  getYoutubeThumbnail,
  getYoutubeUrl,
  videosData,
  YOUTUBE_CHANNEL_URL,
  type Video,
} from '@/data/videos';
import { relatedVideosByVideoId, type RelatedVideoGroups } from '../../data/related-videos';

export default function VideoDetailClient({ videoId }: { videoId: string }) {
  const { t, isTamil, withLanguage } = useLanguage();
  const selectedVideo = videosData.find((video) => video.id === videoId);
  const relatedGroups: RelatedVideoGroups = relatedVideosByVideoId[videoId] ?? {
    tamil: [],
    english: [],
  };
  const classIdForBooks =
    videoId === 'class12'
      ? 12
      : videoId === 'class11'
        ? 11
        : videoId === 'class10'
          ? 10
          : undefined;

  const renderVideoGrid = (videos: Video[]) => {
    if (videos.length === 0) {
      return (
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {isTamil ? 'இங்கே காணொளிகள் இல்லை.' : 'No videos added yet.'}
        </p>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => {
          const youtubeHref = getYoutubeUrl(video.youtubeId, video.youtubeUrl);
          const bookHref =
            classIdForBooks && video.bookId
              ? withLanguage(`/class/${classIdForBooks}/book/${video.bookId}`)
              : null;

          return (
            <div
              key={video.id}
              role="link"
              tabIndex={0}
              onClick={() => window.open(youtubeHref, '_blank', 'noopener,noreferrer')}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  window.open(youtubeHref, '_blank', 'noopener,noreferrer');
                }
              }}
              className="card group/card relative overflow-hidden border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              style={{ borderColor: 'var(--border-color)' }}
            >
            <div
              className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity"
              style={{
                background:
                  'linear-gradient(135deg, rgba(232,80,10,0.12), rgba(30,58,95,0.12))',
              }}
            />
            <div className="relative">
              <div className="relative aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img
                  src={getYoutubeThumbnail(video.youtubeId, video.thumbnailUrl)}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/480x270?text=TNKalviHub+Video';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
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
              <div className="p-4 video-title-area">
                <h2 className="video-title font-semibold text-base leading-snug min-h-[3rem]">
                  {video.title}
                </h2>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <a
                      href={youtubeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="watch-btn inline-flex items-center gap-1.5 text-xs"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      {t('watchVideo')}
                    </a>
                    {bookHref && (
                      <Link
                        href={bookHref}
                        className="watch-btn inline-flex items-center gap-1.5 text-xs"
                        onClick={(event) => event.stopPropagation()}
                      >
                        {isTamil ? 'புத்தக விவரம்' : 'Book Details'}
                      </Link>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="page-container py-10">
      {/* Header */}
      <div className="mb-6">
        <Link
          href={withLanguage('/videos')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
        >
          <ArrowLeft className="w-4 h-4" />
          {isTamil ? 'காணொளிகள் பட்டியலுக்கு' : 'Back to videos'}
        </Link>
      </div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm mb-3">
          <Youtube className="w-5 h-5" />
          <span>YouTube Tutorials</span>
        </div>
        <h1 className="section-title">
          {selectedVideo ? selectedVideo.title : t('videosTitle')}
        </h1>
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

      {/* More Videos */}
      <div className="space-y-4">
        <details className="rounded-2xl overflow-hidden border group" style={{ borderColor: 'var(--border-color)' }} open>
          <summary className="list-none cursor-pointer">
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ background: 'linear-gradient(90deg, #1E3A5F, #2a4f80)' }}
            >
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">🌺</span>
                <span className="text-lg font-bold">{isTamil ? 'தமிழ் வழி' : 'Tamil Medium'}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/80 font-medium">
                <span>
                  {relatedGroups.tamil.length} {isTamil ? 'காணொளிகள்' : 'videos'}
                </span>
                <span
                  className="px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: '#ffffff' }}
                >
                  <span className="group-open:hidden">+ {isTamil ? 'காட்டு' : 'Expand'}</span>
                  <span className="hidden group-open:inline">- {isTamil ? 'மறை' : 'Collapse'}</span>
                </span>
              </div>
            </div>
          </summary>
          <div className="p-5" style={{ backgroundColor: 'var(--bg-card)' }}>
            {renderVideoGrid(relatedGroups.tamil)}
          </div>
        </details>
        <details className="rounded-2xl overflow-hidden border group" style={{ borderColor: 'var(--border-color)' }} open>
          <summary className="list-none cursor-pointer">
            <div
              className="px-5 py-4 flex items-center justify-between"
              style={{ background: 'linear-gradient(90deg, #E8500A, #c44008)' }}
            >
              <div className="flex items-center gap-2 text-white">
                <span className="text-xl">🔤</span>
                <span className="text-lg font-bold">{isTamil ? 'ஆங்கில வழி' : 'English Medium'}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/80 font-medium">
                <span>
                  {relatedGroups.english.length} {isTamil ? 'காணொளிகள்' : 'videos'}
                </span>
                <span
                  className="px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: '#ffffff' }}
                >
                  <span className="group-open:hidden">+ {isTamil ? 'காட்டு' : 'Expand'}</span>
                  <span className="hidden group-open:inline">- {isTamil ? 'மறை' : 'Collapse'}</span>
                </span>
              </div>
            </div>
          </summary>
          <div className="p-5" style={{ backgroundColor: 'var(--bg-card)' }}>
            {renderVideoGrid(relatedGroups.english)}
          </div>
        </details>
      </div>
    </div>
  );
}
