export interface Video {
  id: string;
  title: string;
  description?: string;
  youtubeUrl: string;
  thumbnailUrl?: string;
  classTag?: string;
  classId?: number;
  bookId?: string;
}

export const getYoutubeUrl = (youtubeUrl: string) => youtubeUrl;

export const videosData: Video[] = [
  {
    id: 'class12',
    title: 'TN 12th std Books 2026-2027',
    description: 'Download TN 12th Standard Samacheer Kalvi textbooks in both Tamil and English medium with easy step by step video guidance. Explore subject wise book download tutorials, PDF resources, and updated study materials for the 2026-2027 academic year. Find quick and simple instructions to access official textbooks for all major subjects in one place.',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLNkahwcIvm95HkagZZ8Q1sJdPuXiynE2x',
    thumbnailUrl: '/12th playlist.png',
    classTag: 'Class 12',
    classId: 12,
  },
  {
    id: 'class11',
    title: 'TN 11th std Books 2026-2027',
    description: 'Download TN 11th Standard Samacheer Kalvi textbooks in both Tamil and English medium with simple step by step video guidance. Explore subject wise book download tutorials, PDF resources, and updated study materials for the 2026-2027 academic year in one place. Access official textbooks for all major subjects quickly and easily through helpful educational videos from TNKalviHub.',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLNkahwcIvm97j28WzmpxNsKDUteUiKC-g',
    thumbnailUrl: '/11th playlist.png',
    classTag: 'Class 11',
    classId: 11,
  },
  {
    id: 'class10',
    title: 'TN 10th std Books 2026-2027',
    description: 'Access TN 10th Standard Samacheer Kalvi textbooks in Tamil and English medium through detailed and easy to follow video tutorials. Discover subject wise PDF download guides, updated learning resources, and important study materials for the 2026-2027 academic year. TNKalviHub helps students quickly find and download official textbooks for all major subjects in one convenient place.',
    youtubeUrl: 'https://www.youtube.com/playlist?list=PLNkahwcIvm959gpbt4oPmsS9QdbqGZ4hj',
    thumbnailUrl: '/10th playlist.png',
    classTag: 'Class 10',
    classId: 10,
  },
];

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@NishanthEducation';
