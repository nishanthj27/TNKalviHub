import type { Video } from '../videos';
import { relatedVideosV1 } from './class12';
import { relatedVideosV2 } from './class11';
import { relatedVideosV3 } from './class10';

export type RelatedVideoGroups = {
  tamil: Video[];
  english: Video[];
};

export const relatedVideosByVideoId: Record<string, RelatedVideoGroups> = {
  class12: relatedVideosV1,
  class11: relatedVideosV2,
  class10: relatedVideosV3,
};
