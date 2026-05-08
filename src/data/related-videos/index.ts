import { relatedVideosV1 } from './class12';
import { relatedVideosV2 } from './class11';
import { relatedVideosV3 } from './class10';

export type RelatedVideo = {
  id: string;
  title: string;
  description?: string;
  youtubeId: string;
  youtubeUrl?: string;
  thumbnailUrl?: string;
  classTag?: string;
  classId?: number;
  bookId?: string;
};

export type RelatedVideoGroups = {
  tamil: RelatedVideo[];
  english: RelatedVideo[];
};

export const getRelatedYoutubeUrl = (youtubeId: string, youtubeUrl?: string) =>
  youtubeUrl ?? (youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : '#');

export const relatedVideosByVideoId: Record<string, RelatedVideoGroups> = {
  class12: relatedVideosV1,
  class11: relatedVideosV2,
  class10: relatedVideosV3,
};
