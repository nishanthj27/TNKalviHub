import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VideoDetailClient from '../../../videos/VideoDetailClient';
import { videosData } from '@/data/videos';
import { isLanguage } from '@/lib/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; playlistId: string }>;
}): Promise<Metadata> {
  const { lang, playlistId } = await params;
  const language = isLanguage(lang) ? lang : 'en';
  const video = videosData.find((item) => item.id === playlistId);

  if (!video) {
    return {
      title: language === 'ta' ? 'காணொளி கிடைக்கவில்லை - TNKalviHub' : 'Video Not Found - TNKalviHub',
    };
  }

  return {
    title: video.title,
    description:
      language === 'ta'
        ? 'TNKalviHub-இல் இருந்து தமிழ்நாடு பாடப்புத்தக பதிவிறக்க வழிகாட்டிகளை பாருங்கள்.'
        : 'Watch step-by-step TN textbook download tutorials on TNKalviHub.',
  };
}

export default async function LocalizedVideoDetailPage({
  params,
}: {
  params: Promise<{ lang: string; playlistId: string }>;
}) {
  const { playlistId } = await params;
  const video = videosData.find((item) => item.id === playlistId);

  if (!video) {
    notFound();
  }

  return <VideoDetailClient videoId={playlistId} />;
}
