export type Language = 'en' | 'ta';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    home: 'Home',
    classes: 'Classes',
    videos: 'Videos',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    disclaimer: 'Disclaimer',

    // Hero
    heroTitle: 'Tamil Nadu School Textbooks',
    heroSubtitle: 'Download official TN school textbooks (Classes 1–12) for free as PDF. All books are sourced from the official TN Textbooks website.',
    searchPlaceholder: 'Search for a class or subject...',
    searchButton: 'Search',

    // Classes
    selectClass: 'Select Your Class',
    selectClassSub: 'Choose a class below to browse and download textbooks',
    classLabel: 'Class',
    stdLabel: 'Std',

    // Books
    tamilMedium: 'Tamil Medium',
    englishMedium: 'English Medium',
    termLabel: 'Term',
    downloadPDF: 'Download PDF',
    allTerms: 'All Terms',
    booksAvailable: 'Books Available',

    // Videos
    videosTitle: 'Video Tutorials',
    videosSub: 'Watch our YouTube videos for guidance on downloading and using textbooks',
    watchVideo: 'Watch on YouTube',
    visitChannel: 'Visit Our YouTube Channel',

    // About
    aboutTitle: 'About TNKalviHub',

    // Contact
    contactTitle: 'Contact Us',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    sendMessage: 'Send Message',

    // Footer
    footerDesc: 'Your trusted source for Tamil Nadu school textbooks. All PDFs are official resources from the TN Government.',
    quickLinks: 'Quick Links',
    importantLinks: 'Important Links',
    officialSite: 'Official TN Textbooks Site',
    copyright: '© 2026 TNKalviHub. All rights reserved.',
    builtWith: 'Built with ❤️ for Tamil Nadu students',

    // Misc
    loading: 'Loading...',
    noResults: 'No results found.',
    backToHome: 'Back to Home',
    allClasses: 'All Classes',
    theme_light: 'Light',
    theme_dark: 'Dark',
  },
  ta: {
    // Nav
    home: 'முகப்பு',
    classes: 'வகுப்புகள்',
    videos: 'காணொளிகள்',
    about: 'எங்களை பற்றி',
    contact: 'தொடர்பு',
    privacy: 'தனியுரிமை கொள்கை',
    terms: 'சேவை விதிமுறைகள்',
    disclaimer: 'மறுப்பு',

    // Hero
    heroTitle: 'தமிழ்நாடு பள்ளி பாடநூல்கள்',
    heroSubtitle: '1 முதல் 12 ஆம் வகுப்பு வரையிலான அரசு பாடநூல்களை PDF வடிவில் இலவசமாக பதிவிறக்கம் செய்யுங்கள்.',
    searchPlaceholder: 'வகுப்பு அல்லது பாடம் தேடுங்கள்...',
    searchButton: 'தேடு',

    // Classes
    selectClass: 'உங்கள் வகுப்பை தேர்ந்தெடுங்கள்',
    selectClassSub: 'பாடநூல்களை பதிவிறக்க கீழே உள்ள வகுப்பை தேர்ந்தெடுங்கள்',
    classLabel: 'வகுப்பு',
    stdLabel: 'ஆம் வகுப்பு',

    // Books
    tamilMedium: 'தமிழ் வழி',
    englishMedium: 'ஆங்கில வழி',
    termLabel: 'பருவம்',
    downloadPDF: 'PDF பதிவிறக்கம்',
    allTerms: 'அனைத்து பருவங்கள்',
    booksAvailable: 'புத்தகங்கள் கிடைக்கின்றன',

    // Videos
    videosTitle: 'காணொளி பயிற்சிகள்',
    videosSub: 'பாடநூல்களை பதிவிறக்கம் செய்வது குறித்த வழிகாட்டல் காணொளிகளை பாருங்கள்',
    watchVideo: 'YouTube இல் பாருங்கள்',
    visitChannel: 'எங்கள் YouTube சேனலை பாருங்கள்',

    // About
    aboutTitle: 'TNKalviHub பற்றி',

    // Contact
    contactTitle: 'தொடர்பு கொள்ளுங்கள்',
    name: 'உங்கள் பெயர்',
    email: 'உங்கள் மின்னஞ்சல்',
    message: 'உங்கள் செய்தி',
    sendMessage: 'செய்தி அனுப்பு',

    // Footer
    footerDesc: 'தமிழ்நாடு பள்ளி பாடநூல்களுக்கான நம்பகமான தளம். அனைத்து PDF களும் TN அரசின் அதிகாரப்பூர்வ ஆதாரங்கள்.',
    quickLinks: 'விரைவு இணைப்புகள்',
    importantLinks: 'முக்கியமான இணைப்புகள்',
    officialSite: 'TN பாடநூல்கள் அதிகாரப்பூர்வ தளம்',
    copyright: '© 2026 TNKalviHub. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    builtWith: 'தமிழ்நாடு மாணவர்களுக்காக ❤️ உடன் உருவாக்கப்பட்டது',

    // Misc
    loading: 'ஏற்றுகிறது...',
    noResults: 'முடிவுகள் கிடைக்கவில்லை.',
    backToHome: 'முகப்புக்கு திரும்பு',
    allClasses: 'அனைத்து வகுப்புகள்',
    theme_light: 'வெளிர்',
    theme_dark: 'இரவு',
  },
};
