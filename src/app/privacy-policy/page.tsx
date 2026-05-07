import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy - TNKalviHub',
  description: 'Read the Privacy Policy for TNKalviHub and learn how we collect, use, and protect information.',
};

const sections = [
  {
    title: { en: '1. Scope of This Policy', ta: '1. இந்தக் கொள்கையின் வரம்பு' },
    body: [
      {
        en: 'This Privacy Policy explains how TNKalviHub collects, uses, stores, and discloses information when you use our website, including the home page, class pages, contact page, videos page, and other related pages available through tnkalvihub.vercel.app.',
        ta: 'tnkalvihub.vercel.app வழியாக கிடைக்கும் முகப்பு பக்கம், வகுப்பு பக்கங்கள், தொடர்பு பக்கம், காணொளி பக்கம் மற்றும் தொடர்புடைய பிற பக்கங்கள் உட்பட எங்கள் இணையதளத்தை நீங்கள் பயன்படுத்தும் போது TNKalviHub தகவல்களை எவ்வாறு சேகரிக்கிறது, பயன்படுத்துகிறது, சேமிக்கிறது மற்றும் பகிர்கிறது என்பதை இந்த தனியுரிமைக் கொள்கை விளக்குகிறது.',
      },
      {
        en: 'By accessing or using the website, you acknowledge that you have read this Privacy Policy. If you do not agree with this policy, you should discontinue use of the website.',
        ta: 'இந்த இணையதளத்தை அணுகுவதன் அல்லது பயன்படுத்துவதன் மூலம், இந்த தனியுரிமைக் கொள்கையை நீங்கள் படித்திருப்பதை ஒப்புக்கொள்கிறீர்கள். இந்தக் கொள்கைக்கு நீங்கள் ஒப்புக்கொள்ளாவிட்டால் இணையதள பயன்பாட்டை நிறுத்த வேண்டும்.',
      },
    ],
  },
  {
    title: { en: '2. Information We Collect', ta: '2. நாங்கள் சேகரிக்கும் தகவல்கள்' },
    body: [
      {
        en: 'We may collect limited personal information that you voluntarily provide when you contact us, such as your name, email address, and the contents of your message.',
        ta: 'நீங்கள் எங்களை தொடர்புகொள்ளும் போது தன்னார்வமாக வழங்கும் பெயர், மின்னஞ்சல் முகவரி, செய்தி உள்ளடக்கம் போன்ற வரையறுக்கப்பட்ட தனிப்பட்ட தகவல்களை நாங்கள் சேகரிக்கலாம்.',
      },
      {
        en: 'We may also collect non-personal usage information automatically, including your IP address, browser type, device information, approximate geographic region, referral source, pages viewed, time spent on pages, and interactions with the website.',
        ta: 'மேலும் உங்கள் IP முகவரி, உலாவி வகை, சாதனத் தகவல், அண்மித்த புவியியல் பகுதி, வந்த மூல இணைப்பு, பார்த்த பக்கங்கள், பக்கங்களில் செலவிட்ட நேரம் மற்றும் இணையதள தொடர்புகள் போன்ற தனிப்பட்டதல்லாத பயன்பாட்டு தகவல்களையும் தானாகச் சேகரிக்கலாம்.',
      },
      {
        en: 'Cookies, analytics tags, and similar technologies may be used to understand traffic patterns, remember user preferences, and improve site performance.',
        ta: 'போக்குவரத்து முறைகளைப் புரிந்துகொள்ள, பயனர் விருப்பங்களை நினைவில் வைத்திருக்க மற்றும் தள செயல்திறனை மேம்படுத்த cookies, analytics tags மற்றும் இதர ஒத்த தொழில்நுட்பங்கள் பயன்படுத்தப்படலாம்.',
      },
    ],
  },
  {
    title: { en: '3. How We Use Information', ta: '3. தகவல்களை எவ்வாறு பயன்படுத்துகிறோம்' },
    body: [
      {
        en: 'We use collected information to operate and maintain the website, respond to enquiries, monitor performance, improve navigation, diagnose technical issues, protect against misuse, and understand which educational resources are most useful to visitors.',
        ta: 'சேகரிக்கப்பட்ட தகவல்கள் இணையதளத்தை இயக்கவும் பராமரிக்கவும், உங்கள் கேள்விகளுக்கு பதிலளிக்கவும், செயல்திறனை கண்காணிக்கவும், வழிசெலுத்தலை மேம்படுத்தவும், தொழில்நுட்ப சிக்கல்களை கண்டறியவும், தவறான பயன்பாட்டைத் தடுக்கவும் மற்றும் எந்த கல்வி வளங்கள் பயனுள்ளதாக உள்ளன என்பதைப் புரிந்துகொள்ளவும் பயன்படுத்தப்படுகின்றன.',
      },
      {
        en: 'Where advertising or analytics services are enabled, information may also be used to measure campaign effectiveness, personalise ad delivery, and generate aggregated traffic insights.',
        ta: 'விளம்பர அல்லது பகுப்பாய்வு சேவைகள் செயல்படுத்தப்பட்டிருக்கும் இடங்களில், தகவல்கள் விளம்பர செயல்திறனை மதிப்பிட, விளம்பரத் தற்செயலாக்கத்தை தனிப்பயனாக்க, மற்றும் தொகுக்கப்பட்ட போக்குவரத்து அறிக்கைகளை உருவாக்கவும் பயன்படலாம்.',
      },
    ],
  },
  {
    title: { en: '4. Analytics, Advertising, and Cookies', ta: '4. பகுப்பாய்வு, விளம்பரம் மற்றும் குக்கீகள்' },
    body: [
      {
        en: 'TNKalviHub may use third-party tools such as Google Analytics and Google AdSense. These providers may set cookies or similar technologies to measure traffic, understand usage behaviour, and display advertising.',
        ta: 'TNKalviHub, Google Analytics மற்றும் Google AdSense போன்ற மூன்றாம் தரப்பு கருவிகளைப் பயன்படுத்தலாம். இந்த சேவைகள் போக்குவரத்தை அளவிட, பயன்பாட்டு நடத்தைப் புரிந்துகொள்ள மற்றும் விளம்பரங்களை காட்ட cookies அல்லது ஒத்த தொழில்நுட்பங்களைப் பயன்படுத்தக்கூடும்.',
      },
      {
        en: 'You can usually manage or disable cookies through your browser settings. Disabling cookies may affect some site functionality, analytics accuracy, or advertising personalisation.',
        ta: 'உங்கள் உலாவி அமைப்புகள் மூலம் cookies-ஐ மேலாண்மை செய்யலாம் அல்லது முடக்கலாம். அவற்றை முடக்குவது சில தள அம்சங்கள், பகுப்பாய்வு துல்லியம் அல்லது விளம்பர தனிப்பயனாக்கத்தை பாதிக்கலாம்.',
      },
      {
        en: 'For more information about how Google handles data, please review Google privacy materials and advertising settings available from Google.',
        ta: 'Google தரவை எவ்வாறு கையாளுகிறது என்பதற்கான கூடுதல் தகவலுக்கு, Google வழங்கும் தனியுரிமை ஆதாரங்களையும் விளம்பர அமைப்புகளையும் பார்க்கவும்.',
      },
    ],
  },
  {
    title: { en: '5. How We Share Information', ta: '5. தகவல்களை எவ்வாறு பகிர்கிறோம்' },
    body: [
      {
        en: 'We do not sell your personal information. We may share information with service providers that help us operate the website, such as hosting, analytics, advertising, spam prevention, or email handling providers, but only for legitimate business purposes related to running the site.',
        ta: 'உங்கள் தனிப்பட்ட தகவலை நாங்கள் விற்க மாட்டோம். தளத்தை இயக்க உதவும் hosting, analytics, advertising, spam prevention அல்லது email handling போன்ற சேவை வழங்குநர்களுடன் தேவையான அளவில் தகவலை பகிரலாம்; அது தள இயக்கத்துக்கான நியாயமான நோக்கங்களுக்காக மட்டுமே இருக்கும்.',
      },
      {
        en: 'We may also disclose information if required by law, to respond to legal process, to protect our rights, or to help prevent fraud, abuse, or security incidents.',
        ta: 'சட்டம் அவசியப்படுத்தினால், சட்டநடைமுறைகளுக்கு பதிலளிக்க, எங்கள் உரிமைகளைப் பாதுகாக்க, மோசடி, துஷ்பிரயோகம் அல்லது பாதுகாப்பு சம்பவங்களைத் தடுப்பதற்காகவும் தகவலை வெளியிடலாம்.',
      },
    ],
  },
  {
    title: { en: '6. Data Retention', ta: '6. தரவு சேமிப்பு காலம்' },
    body: [
      {
        en: 'We retain contact submissions only for as long as reasonably necessary to respond to the message, maintain records, resolve disputes, or comply with legal obligations.',
        ta: 'செய்திக்கு பதிலளிக்க, பதிவுகளை பராமரிக்க, சர்ச்சைகளைத் தீர்க்க அல்லது சட்டப் பொறுப்புகளை நிறைவேற்ற தேவையான காலத்திற்கு மட்டுமே தொடர்பு சமர்ப்பிப்புகளை வைத்திருக்கிறோம்.',
      },
      {
        en: 'Usage and analytics data may be retained according to the settings and retention schedules of the third-party services that process that information on our behalf.',
        ta: 'பயன்பாடு மற்றும் பகுப்பாய்வு தரவுகள், எங்களுக்காக அந்த தகவலை செயல்படுத்தும் மூன்றாம் தரப்பு சேவைகளின் அமைப்புகள் மற்றும் சேமிப்பு அட்டவணைகளின்படி வைத்திருக்கப்படலாம்.',
      },
    ],
  },
  {
    title: { en: '7. Data Security', ta: '7. தரவு பாதுகாப்பு' },
    body: [
      {
        en: 'We use reasonable administrative, technical, and organisational measures to protect information under our control. However, no transmission over the internet or electronic storage method can be guaranteed to be completely secure.',
        ta: 'எங்களுடைய கட்டுப்பாட்டில் உள்ள தகவல்களைப் பாதுகாக்க நிர்வாக, தொழில்நுட்ப மற்றும் அமைப்புசார்ந்த நியாயமான பாதுகாப்பு நடவடிக்கைகளைப் பயன்படுத்துகிறோம். இருந்தாலும், இணையம் வழியாக உள்ள அனுப்புதல் அல்லது மின்னணு சேமிப்பு முறைகள் முழுமையாக பாதுகாப்பானவை என்று உத்தரவாதம் அளிக்க முடியாது.',
      },
      {
        en: 'You use the website and submit information to us at your own discretion and risk.',
        ta: 'இந்த இணையதளத்தைப் பயன்படுத்துவதும் எங்களுக்கு தகவல் வழங்குவதும் உங்கள் சொந்த தீர்மானத்திலும் அபாயத்திலும் நடைபெறுகிறது.',
      },
    ],
  },
  {
    title: { en: "8. Children's Privacy", ta: '8. குழந்தைகளின் தனியுரிமை' },
    body: [
      {
        en: 'TNKalviHub is intended as an educational resource for students, parents, and teachers. We do not knowingly collect personal information from children in violation of applicable law.',
        ta: 'TNKalviHub என்பது மாணவர்கள், பெற்றோர் மற்றும் ஆசிரியர்களுக்கான கல்வி வளமாக உருவாக்கப்பட்டுள்ளது. பொருந்தும் சட்டங்களுக்கு முரணாக குழந்தைகளிடமிருந்து தனிப்பட்ட தகவலை நாங்கள் அறிந்தே சேகரிப்பதில்லை.',
      },
      {
        en: 'If you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can review and, where appropriate, delete the information.',
        ta: 'ஒரு குழந்தை தேவையான அனுமதியின்றி எங்களுக்கு தனிப்பட்ட தகவல் வழங்கியிருக்கலாம் என்று நீங்கள் நினைத்தால், அதை ஆய்வு செய்து தேவையெனில் அகற்ற எங்களைத் தொடர்புகொள்ளவும்.',
      },
    ],
  },
  {
    title: { en: '9. Third-Party Links', ta: '9. மூன்றாம் தரப்பு இணைப்புகள்' },
    body: [
      {
        en: 'The website may link to third-party pages, including official Tamil Nadu textbook resources, YouTube, and other external services. We are not responsible for the privacy practices, policies, or content of those external sites.',
        ta: 'இந்த இணையதளத்தில் அதிகாரப்பூர்வ தமிழ்நாடு பாடப்புத்தக வளங்கள், YouTube மற்றும் பிற வெளிப்புற சேவைகள் உட்பட மூன்றாம் தரப்பு பக்கங்களுக்கு இணைப்புகள் இருக்கலாம். அந்த தளங்களின் தனியுரிமை நடைமுறைகள், கொள்கைகள் அல்லது உள்ளடக்கத்திற்குப் பொறுப்பு எங்களிடம் இல்லை.',
      },
      {
        en: 'You should review the privacy policies of any third-party website before providing personal information or relying on their services.',
        ta: 'ஏதேனும் மூன்றாம் தரப்பு தளத்திற்கு தனிப்பட்ட தகவல் வழங்குவதற்கு முன் அல்லது அதன் சேவைகளை நம்புவதற்கு முன் அதன் தனியுரிமைக் கொள்கையைப் பரிசீலிக்க வேண்டும்.',
      },
    ],
  },
  {
    title: { en: '10. Your Choices and Rights', ta: '10. உங்கள் தேர்வுகள் மற்றும் உரிமைகள்' },
    body: [
      {
        en: 'Subject to applicable law, you may request access to, correction of, or deletion of personal information you have provided to us. You may also object to certain processing or withdraw consent where consent is the legal basis for processing.',
        ta: 'பொருந்தும் சட்டங்களுக்கு உட்பட்டு, நீங்கள் எங்களுக்கு வழங்கிய தனிப்பட்ட தகவல்களை அணுக, திருத்த அல்லது நீக்க கோரலாம். செயலாக்கத்திற்கான சட்ட அடிப்படை ஒப்புதல் எனில், சில செயலாக்கங்களுக்கு எதிர்ப்பு தெரிவிக்கவோ ஒப்புதலை வாபஸ் பெறவோ முடியும்.',
      },
      {
        en: 'To make such a request, please contact us through the contact details or contact page provided on the website. We may need to verify your identity before acting on a request.',
        ta: 'இத்தகைய கோரிக்கைக்காக இணையதளத்தில் உள்ள தொடர்பு விவரங்கள் அல்லது தொடர்பு பக்கத்தின் மூலம் எங்களை அணுகவும். கோரிக்கையை நிறைவேற்றுவதற்கு முன் உங்கள் அடையாளத்தை உறுதிப்படுத்த வேண்டியிருக்கும்.',
      },
    ],
  },
  {
    title: { en: '11. Changes to This Policy', ta: '11. இந்தக் கொள்கையில் மாற்றங்கள்' },
    body: [
      {
        en: 'We may revise this Privacy Policy from time to time to reflect operational, legal, or regulatory changes. When we do, we will update the "Last updated" date at the top of this page.',
        ta: 'செயல்பாட்டு, சட்ட அல்லது ஒழுங்குமுறை மாற்றங்களை பிரதிபலிக்க இந்த தனியுரிமைக் கொள்கையை காலம்தோறும் திருத்தலாம். அப்படி செய்தால் இந்தப் பக்கத்தின் மேலுள்ள "கடைசியாக புதுப்பிக்கப்பட்டது" தேதியை மாற்றுவோம்.',
      },
      {
        en: 'Your continued use of the website after changes are posted constitutes acceptance of the revised Privacy Policy.',
        ta: 'மாற்றங்கள் வெளியிடப்பட்ட பிறகும் இணையதளத்தை தொடர்ந்து பயன்படுத்துவது திருத்தப்பட்ட தனியுரிமைக் கொள்கையை ஏற்றுக்கொண்டதாக கருதப்படும்.',
      },
    ],
  },
  {
    title: { en: '12. Contact Us', ta: '12. எங்களை தொடர்புகொள்ள' },
    body: [
      {
        en: 'If you have questions or concerns about this Privacy Policy or our handling of information, please contact us through the contact page on tnkalvihub.vercel.app.',
        ta: 'இந்த தனியுரிமைக் கொள்கை அல்லது தகவல்களை எவ்வாறு கையாள்கிறோம் என்பதில் கேள்விகள் அல்லது கவலைகள் இருந்தால் tnkalvihub.vercel.app இல் உள்ள தொடர்பு பக்கத்தின் மூலம் எங்களை அணுகவும்.',
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title={{ en: 'Privacy Policy', ta: 'தனியுரிமைக் கொள்கை' }}
      lastUpdated="May 7, 2026"
      intro={{
        en: 'TNKalviHub respects your privacy and is committed to being transparent about the limited information we collect in order to operate this educational website.',
        ta: 'இந்த கல்வி இணையதளத்தை இயக்குவதற்காக நாம் சேகரிக்கும் வரையறுக்கப்பட்ட தகவல்கள் குறித்து தெளிவாக இருக்க TNKalviHub உறுதிபூண்டுள்ளது; உங்கள் தனியுரிமையை மதிக்கிறோம்.',
      }}
      sections={sections}
    />
  );
}
