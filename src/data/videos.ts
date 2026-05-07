export interface Video {
  id: string;
  title: string;
  titleTa: string;
  // description: string;
  // descriptionTa: string;
  youtubeId: string; // YouTube video ID e.g. "dQw4w9WgXcQ"
  youtubeUrl: string;
  thumbnail: string;
  // classTag?: string;
}

// Replace youtubeId and youtubeUrl with your actual video details
export const videosData: Video[] = [
  {
    id: 'v1',
    title: '12th Tamil Book PDF Download 2026-2027 | Tamil Medium | TN Samacheer Kalvi Books Free Download | PDF',
    titleTa: '12th Tamil Book PDF Download 2026-2027 | Tamil Medium | TN Samacheer Kalvi Books Free Download | PDF',
    // description: 'Step-by-step guide to downloading Class 10 Tamil Nadu textbooks as PDF from our website.',
    // descriptionTa: 'TNKalviHub இணையதளத்திலிருந்து 10 ஆம் வகுப்பு பாடநூல்களை PDF வடிவில் பதிவிறக்கம் செய்வது எப்படி என்பதற்கான படிப்படியான வழிகாட்டி.',
    youtubeId: 'wkreU8eyQlw',
    youtubeUrl: 'https://www.youtube.com/watch?v=wkreU8eyQlw',
    thumbnail: 'https://img.youtube.com/vi/wkreU8eyQlw/hqdefault.jpg',
    // classTag: 'Class 10',
  },
  {
    id: 'v2',
    title: 'TN 12th English Book 2026–27 PDF Download | Samacheer Kalvi 12th English Book Free (English Medium)',
    titleTa: 'TN 12th English Book 2026–27 PDF Download | Samacheer Kalvi 12th English Book Free (English Medium)',
    // description: 'Download Class 12 Physics and Chemistry textbooks easily from TNKalviHub.',
    // descriptionTa: 'TNKalviHub இல் 12 ஆம் வகுப்பு இயற்பியல் மற்றும் வேதியியல் பாடநூல்களை எளிதாக பதிவிறக்கம் செய்யுங்கள்.',
    youtubeId: 'bLZoAcfSaVg',
    youtubeUrl: 'https://www.youtube.com/watch?v=bLZoAcfSaVg',
    thumbnail: 'https://img.youtube.com/vi/bLZoAcfSaVg/hqdefault.jpg',
    // classTag: 'Class 12',
  },
  {
    id: 'v3',
    title: 'TN 12th Mathematics Volume 1 Book 2026–27 PDF Download | Samacheer Kalvi English Medium Free | 12th',
    titleTa: 'TN 12th Mathematics Volume 1 Book 2026–27 PDF Download | Samacheer Kalvi English Medium Free | 12th',
    // description: 'Complete guide to download Term 1, 2, and 3 books for Classes 1 to 7.',
    // descriptionTa: '1 முதல் 7 ஆம் வகுப்பு வரையிலான 1, 2, 3 பருவ புத்தகங்களை பதிவிறக்கம் செய்வதற்கான முழுமையான வழிகாட்டி.',
    youtubeId: 'PpZ_JMko5-4',
    youtubeUrl: 'https://www.youtube.com/watch?v=PpZ_JMko5-4',
    thumbnail: 'https://img.youtube.com/vi/PpZ_JMko5-4/hqdefault.jpg',
    // classTag: 'Classes 1-7',
  },
];

// Replace with your actual YouTube channel URL
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@NishanthEducation';
