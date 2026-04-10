import type { Metadata } from 'next';
import VideosClient from './VideosClient';

export const metadata: Metadata = {
  title: 'Video Tutorials – TN Textbook Download Guides',
  description:
    'Watch step-by-step YouTube video tutorials on how to download Tamil Nadu school textbooks from TNKalviHub.',
};

export default function VideosPage() {
  return <VideosClient />;
}
