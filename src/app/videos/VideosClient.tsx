'use client';
import { useRouter } from 'next/navigation';
import { Play, Youtube, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getYoutubeUrl, videosData, YOUTUBE_CHANNEL_URL } from '@/data/videos';
import { relatedVideosByVideoId } from '@/data/related-videos';

export default function VideosClient() {
  const { t, isTamil, withLanguage } = useLanguage();
  const router = useRouter();
  const getPlaylistLabel = (count?: number) => {
    if (typeof count !== 'number') return null;
    return `${count} ${isTamil ? 'காணொளிகள்' : 'Videos'}`;
  };
  const getPlaylistCount = (videoId: string) => {
    const groups = relatedVideosByVideoId[videoId];
    if (!groups) return undefined;
    return groups.tamil.length + groups.english.length;
  };

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

      {/* Video List */}
      <div className="flex flex-col gap-6">
        {videosData.map((video) => (
          <div
            key={video.id}
            role="link"
            tabIndex={0}
            onClick={() => router.push(withLanguage(`/videos/${video.id}`))}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                router.push(withLanguage(`/videos/${video.id}`));
              }
            }}
            className="card overflow-hidden group flex flex-col sm:flex-row sm:min-h-[220px] cursor-pointer transition-all duration-200 hover:-translate-y-1"
            style={{ borderColor: 'var(--border-color)' }}
            onMouseEnter={(event) => {
              (event.currentTarget as HTMLDivElement).style.borderColor = '#F8500A';
              (event.currentTarget as HTMLDivElement).style.boxShadow =
                '0 12px 30px rgba(0,0,0,0.35)';
            }}
            onMouseLeave={(event) => {
              (event.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-color)';
              (event.currentTarget as HTMLDivElement).style.boxShadow = '';
            }}
          >
            <div className="relative w-full sm:w-96 lg:w-[26rem] aspect-video bg-gray-200 dark:bg-gray-700 shrink-0">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://via.placeholder.com/480x270?text=TNKalviHub+Video';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/45 transition-colors">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="px-4 py-2 text-sm font-semibold rounded-full bg-black/60 text-white">
                  {isTamil ? 'காணொளிகளை பார்க்கவும்' : 'View Playlist'}
                </span>
              </div>
              {video.classTag && (
                <span className="absolute top-3 left-3 bg-brand-primary text-white text-xs px-2.5 py-1 rounded-full font-medium">
                  {video.classTag}
                </span>
              )}
            </div>
            <div className="p-6 flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-semibold" style={{ color: '#F5A623' }}>
                  {isTamil ? '▶ காணொளி தொகுப்பு' : '▶ Playlist'}
                </span>
                {getPlaylistLabel(getPlaylistCount(video.id)) && (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(245,166,35,0.18)', color: '#F5A623' }}
                  >
                    {getPlaylistLabel(getPlaylistCount(video.id))}
                  </span>
                )}
                <ArrowRight className="w-4 h-4 text-brand-primary" />
              </div>
              <h2 className="font-bold text-lg leading-snug mb-2" style={{ color: 'var(--text-primary)' }}>
                {video.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {video.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={getYoutubeUrl(video.youtubeUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex text-sm w-fit"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Youtube className="w-4 h-4" />
                  {isTamil ? 'YouTube-ல் பார்க்கவும்' : 'Watch on YouTube'}
                </a>
                {video.classId && (
                  <a
                    href={withLanguage(`/class/${video.classId}`)}
                    className="btn-primary inline-flex text-sm w-fit"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {isTamil ? 'புத்தகங்களை பார்க்கவும்' : 'Explore Books'}
                  </a>
                )}
              </div>
            </div>
          </div>
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
