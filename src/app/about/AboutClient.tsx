'use client';
import { BookOpen, Target, Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutClient() {
  const { isTamil } = useLanguage();

  return (
    <div className="page-container py-10">
      {/* Hero */}
      <div
        className="rounded-2xl p-8 md:p-12 text-white text-center mb-12"
        style={{ background: 'linear-gradient(135deg, #1E3A5F 0%, #E8500A 100%)' }}
      >
        <BookOpen className="w-14 h-14 mx-auto mb-4 opacity-90" />
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          {isTamil ? 'TNKalviHub பற்றி' : 'About TNKalviHub'}
        </h1>
        <p className="text-white/85 max-w-xl mx-auto">
          {isTamil
            ? 'தமிழ்நாடு மாணவர்களுக்கான இலவச பாடநூல் வளமையக கேந்திரம்'
            : 'Your free textbook resource centre for Tamil Nadu students'}
        </p>
      </div>

      {/* Mission */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            Icon: Target,
            en_title: 'Our Mission',
            ta_title: 'எங்கள் நோக்கம்',
            en_text:
              'To make Tamil Nadu Government school textbooks easily accessible to every student and parent for free, in both Tamil and English mediums.',
            ta_text:
              'தமிழ்நாடு அரசு பள்ளி பாடநூல்களை ஒவ்வொரு மாணவர் மற்றும் பெற்றோருக்கும் தமிழ் மற்றும் ஆங்கில வழியில் இலவசமாக கிடைக்கச் செய்வதே எங்கள் நோக்கம்.',
          },
          {
            Icon: Heart,
            en_title: 'Why We Built This',
            ta_title: 'ஏன் உருவாக்கினோம்',
            en_text:
              'We noticed that many students struggle to find the correct PDF links for their textbooks. TNKalviHub was created to simplify this with a clean, fast, and bilingual interface.',
            ta_text:
              'பல மாணவர்கள் சரியான PDF இணைப்புகளை கண்டுபிடிக்க சிரமப்படுவதை கண்டோம். அதை எளிமையாக்கவே TNKalviHub உருவாக்கப்பட்டது.',
          },
          {
            Icon: Shield,
            en_title: 'Trusted & Official',
            ta_title: 'நம்பகமான & அதிகாரப்பூர்வம்',
            en_text:
              'All PDF download links on TNKalviHub are sourced directly from the official Tamil Nadu Textbook and Educational Services Corporation (TNTB) website.',
            ta_text:
              'TNKalviHub இல் உள்ள அனைத்து PDF இணைப்புகளும் தமிழ்நாடு பாடநூல் மற்றும் கல்வி சேவைகள் கழகத்தின் (TNTB) அதிகாரப்பூர்வ இணையதளத்திலிருந்து பெறப்படுகின்றன.',
          },
        ].map(({ Icon, en_title, ta_title, en_text, ta_text }) => (
          <div key={en_title} className="card p-6">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-brand-primary" />
            </div>
            <h2 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
              {isTamil ? ta_title : en_title}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {isTamil ? ta_text : en_text}
            </p>
          </div>
        ))}
      </div>

      {/* What We Offer */}
      <div className="mb-12">
        <h2 className="section-title mb-6">
          {isTamil ? 'நாங்கள் வழங்குவது' : 'What We Offer'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              en: '📚 Free PDF downloads for Class 1 to Class 12 Tamil Nadu textbooks',
              ta: '📚 1 முதல் 12 ஆம் வகுப்பு வரை TN பாடநூல்களின் இலவச PDF பதிவிறக்கங்கள்',
            },
            {
              en: '🌐 Bilingual website – available in Tamil and English',
              ta: '🌐 இரு மொழி இணையதளம் – தமிழ் மற்றும் ஆங்கிலத்தில் கிடைக்கிறது',
            },
            {
              en: '📱 Mobile-friendly design for easy access on any device',
              ta: '📱 எந்த சாதனத்திலும் எளிதாக பயன்படுத்தக்கூடிய மொபைல்-நட்பு வடிவமைப்பு',
            },
            {
              en: '🌙 Dark mode and Light mode for comfortable reading',
              ta: '🌙 வசதியான வாசிப்புக்காக இரவு பயன்முறை மற்றும் பகல் பயன்முறை',
            },
            {
              en: '🎥 YouTube video guides for downloading books',
              ta: '🎥 புத்தகங்களை பதிவிறக்கம் செய்வதற்கான YouTube காணொளி வழிகாட்டிகள்',
            },
            {
              en: '🔍 Search feature to quickly find any class or subject',
              ta: '🔍 எந்த வகுப்பு அல்லது பாடத்தையும் விரைவாக கண்டுபிடிக்க தேடல் வசதி',
            },
          ].map(({ en, ta }) => (
            <div
              key={en}
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                {isTamil ? ta : en}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div
        className="rounded-xl p-6 text-sm"
        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}
      >
        <strong style={{ color: 'var(--text-primary)' }}>
          {isTamil ? 'மறுப்பு:' : 'Disclaimer:'}
        </strong>{' '}
        {isTamil
          ? 'TNKalviHub தமிழ்நாடு அரசின் அதிகாரப்பூர்வ இணையதளம் அல்ல. இது ஒரு சுயாதீனமான கல்வி ஆதார இணையதளமாகும், இது மாணவர்களுக்கு அரசு வெளியிட்ட பாடநூல் PDF இணைப்புகளை வழிகாட்ட உதவுகிறது.'
          : 'TNKalviHub is not an official Tamil Nadu Government website. It is an independent educational resource website that helps students navigate to government-published textbook PDF links.'}
      </div>
    </div>
  );
}
