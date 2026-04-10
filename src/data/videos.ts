export interface Video {
  id: string;
  title: string;
  titleTa: string;
  description: string;
  descriptionTa: string;
  youtubeId: string; // YouTube video ID e.g. "dQw4w9WgXcQ"
  youtubeUrl: string;
  thumbnail: string;
  classTag?: string;
}

// Replace youtubeId and youtubeUrl with your actual video details
export const videosData: Video[] = [
  {
    id: 'v1',
    title: 'How to Download Class 10 Tamil Nadu Textbooks',
    titleTa: '10 ஆம் வகுப்பு TN பாடநூல்களை எப்படி பதிவிறக்கம் செய்வது',
    description: 'Step-by-step guide to downloading Class 10 Tamil Nadu textbooks as PDF from our website.',
    descriptionTa: 'TNKalviHub இணையதளத்திலிருந்து 10 ஆம் வகுப்பு பாடநூல்களை PDF வடிவில் பதிவிறக்கம் செய்வது எப்படி என்பதற்கான படிப்படியான வழிகாட்டி.',
    youtubeId: 'REPLACE_WITH_YOUR_VIDEO_ID',
    youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_WITH_YOUR_VIDEO_ID',
    thumbnail: 'https://img.youtube.com/vi/REPLACE_WITH_YOUR_VIDEO_ID/hqdefault.jpg',
    classTag: 'Class 10',
  },
  {
    id: 'v2',
    title: 'Class 12 Physics & Chemistry Books PDF Download',
    titleTa: '12 ஆம் வகுப்பு இயற்பியல் & வேதியியல் புத்தகங்கள் PDF பதிவிறக்கம்',
    description: 'Download Class 12 Physics and Chemistry textbooks easily from TNKalviHub.',
    descriptionTa: 'TNKalviHub இல் 12 ஆம் வகுப்பு இயற்பியல் மற்றும் வேதியியல் பாடநூல்களை எளிதாக பதிவிறக்கம் செய்யுங்கள்.',
    youtubeId: 'REPLACE_WITH_YOUR_VIDEO_ID_2',
    youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_WITH_YOUR_VIDEO_ID_2',
    thumbnail: 'https://img.youtube.com/vi/REPLACE_WITH_YOUR_VIDEO_ID_2/hqdefault.jpg',
    classTag: 'Class 12',
  },
  {
    id: 'v3',
    title: 'All Classes 1 to 7 Term Books Download Guide',
    titleTa: '1 முதல் 7 ஆம் வகுப்பு வரை அனைத்து பருவ புத்தகங்கள் பதிவிறக்கம்',
    description: 'Complete guide to download Term 1, 2, and 3 books for Classes 1 to 7.',
    descriptionTa: '1 முதல் 7 ஆம் வகுப்பு வரையிலான 1, 2, 3 பருவ புத்தகங்களை பதிவிறக்கம் செய்வதற்கான முழுமையான வழிகாட்டி.',
    youtubeId: 'REPLACE_WITH_YOUR_VIDEO_ID_3',
    youtubeUrl: 'https://www.youtube.com/watch?v=REPLACE_WITH_YOUR_VIDEO_ID_3',
    thumbnail: 'https://img.youtube.com/vi/REPLACE_WITH_YOUR_VIDEO_ID_3/hqdefault.jpg',
    classTag: 'Classes 1-7',
  },
];

// Replace with your actual YouTube channel URL
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@NishanthEducation';
