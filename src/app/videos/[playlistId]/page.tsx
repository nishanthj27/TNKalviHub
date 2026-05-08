import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import VideoDetailClient from '../VideoDetailClient';
import { videosData } from '@/data/videos';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ playlistId: string }>;
}): Promise<Metadata> {
  const { playlistId } = await params;
  const video = videosData.find((item) => item.id === playlistId);

  if (!video) {
    return {
      title: 'Video Not Found - TNKalviHub',
    };
  }

  return {
    title: video.title,
    description: 'Watch step-by-step TN textbook download tutorials on TNKalviHub.',
  };
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ playlistId: string }>;
}) {
  const { playlistId } = await params;
  const video = videosData.find((item) => item.id === playlistId);

  if (!video) {
    notFound();
  }

  return <VideoDetailClient videoId={playlistId} />;
}
