import { AgendaItem, BonusItem, FaqItem, SpeakerInfo, Testimonial } from '../types';

export const EVENT_DETAILS = {
  date: {
    en: 'Saturday, October 24, 2026',
    ta: 'சனிக்கிழமை, அக்டோபர் 24, 2026',
  },
  time: {
    en: '6:30 PM – 8:30 PM IST (2 Hours Live)',
    ta: 'மாலை 6:30 – 8:30 IST (2 மணி நேர நேரலை)',
  },
  platform: {
    en: 'Live on Zoom + Interactive Q&A',
    ta: 'Zoom நேரலை + நேரடி கலந்துரையாடல்',
  },
  languageBadge: {
    en: 'Bilingual: Tamil & English',
    ta: 'இருமொழி: தமிழ் & ஆங்கிலம்',
  },
  totalSeats: 300,
  registeredSeats: 264,
  priceOriginal: '₹2,499',
  priceDiscounted: '₹499',
};

export const HERO_CONTENT = {
  announcement: {
    en: '🚀 LIVE EXCLUSIVE MASTERCLASS FOR AEC PROFESSIONALS & STUDENTS',
    ta: '🚀 கட்டிடக்கலைஞர்கள் & மாணவர்களுக்கான நேரலை பிரத்யேக மாஸ்டர்கிளாஸ்',
  },
  mainTitle: {
    en: 'Master Enscape 3D: Real-Time Architectural Rendering & VR in தமிழ்',
    ta: 'Enscape 3D மாஸ்டரி: நிகழ்நேர கட்டிடக்கலை ரெண்டரிங் & விர்ச்சுவல் ரியாலிட்டி',
  },
  subtitle: {
    en: 'Stop waiting hours for renders. Learn how to transform SketchUp, Revit, Rhino, and Archicad models into photorealistic presentations and VR walkthroughs in seconds.',
    ta: 'ரெண்டரிங்கிற்காக மணிநேரம் காத்திருக்க வேண்டாம்! SketchUp, Revit, Rhino ஆகியவற்றிலிருந்து வெறும் சில வினாடிகளில் தத்ரூபமான 3D தோற்றங்கள் மற்றும் VR வாக்த்ரூக்களை உருவாக்க கற்றுக்கொள்ளுங்கள்.',
  },
  ctaButton: {
    en: 'Book Your Seat at ₹499',
    ta: 'ரூ.499-க்கு முன்பதிவு செய்க',
  },
  secondaryCta: {
    en: 'Explore Curriculum',
    ta: 'பாடத்திட்டத்தை பார்க்க',
  },
  urgencyText: {
    en: '⚡ 88% Seats Filled • Early Bird Offer ₹499 Ending Soon',
    ta: '⚡ 88% இடங்கள் நிரம்பிவிட்டன • ₹499 சலுகை விரைவில் முடியும்',
  },
  perks: [
    {
      en: '2 Hours Live Hands-on Training',
      ta: '2 மணி நேர நேரடி பயிற்சி',
    },
    {
      en: 'Bilingual (Tamil + English) Explanation',
      ta: 'தமிழ் & ஆங்கிலம் எளிய விளக்கம்',
    },
    {
      en: 'Free 250+ Enscape Materials Pack (₹4,999 Value)',
      ta: 'இலவச 250+ மெட்டீரியல் பேக் (மதிப்பு ₹4,999)',
    },
    {
      en: 'ISO-Compliant Certificate of Attendance',
      ta: 'பங்கேற்புக்கான மின்-சான்றிதழ்',
    },
  ],
};

export const BEFORE_AFTER_DATA = {
  badge: {
    en: 'INTERACTIVE LIVE COMPARISON',
    ta: 'நேரடி ஒப்பீட்டு காட்சி',
  },
  title: {
    en: 'From Raw CAD Geometry to Hyper-Realistic Reality',
    ta: 'வெறும் 3D வரைபடத்திலிருந்து தத்ரூபமான ஒளிக்கலைக்கு',
  },
  description: {
    en: 'Drag the slider below to witness how Enscape turns plain SketchUp / Revit viewport geometry into instant global illumination, physical materials, and atmospheric depth in real-time.',
    ta: 'கீழேயுள்ள ஸ்லைடரை நகர்த்தி, Enscape எவ்வாறு சாதாரண 3D மாடலை நேரலையில் மெய்யான சூரிய ஒளி, பொருட்கள் மற்றும் இயற்கை அமைப்போடு தத்ரூபமாக மாற்றுகிறது என்பதைப் பாருங்கள்.',
  },
  beforeLabel: {
    en: 'Raw 3D CAD Viewport',
    ta: 'சாதாரண 3D வரைவு (CAD)',
  },
  afterLabel: {
    en: 'Enscape Real-Time Render (1.2s)',
    ta: 'Enscape நிகழ்நேர ரெண்டர் (1.2 நொடி)',
  },
  features: [
    {
      en: 'Real-time Ray-traced Sun & Sky Shadows',
      ta: 'நேரடி சூரிய ஒளி மற்றும் நிழல் விளைவுகள்',
    },
    {
      en: 'PBR Physical Material Roughness & Refraction',
      ta: 'தத்ரூபமான கண்ணாடி மற்றும் மர அமைப்பு',
    },
    {
      en: 'Instant 360° VR & Video Flythrough Export',
      ta: 'உடனடி 360° VR மற்றும் வீடியோ நடைபயணம்',
    },
  ],
};

export const HIGHLIGHTS_DATA = [
  {
    icon: 'Zap',
    title: {
      en: 'Zero Wait Times (Live Sync)',
      ta: 'காத்திருப்பு இல்லாத நேரடி இணைப்பு',
    },
    description: {
      en: 'Edit a wall or chair in SketchUp/Revit and see it update instantaneously in Enscape without exporting or reloading.',
      ta: 'SketchUp அல்லது Revit-ல் நீங்கள் செய்யும் ஒவ்வொரு மாற்றமும் உடனுக்குடன் Enscape திரையில் நிகழ்நேரத்தில் பிரதிபலிக்கும்.',
    },
  },
  {
    icon: 'SunMedium',
    title: {
      en: 'Photorealistic Natural Lighting',
      ta: 'தத்ரூபமான இயற்கை & செயற்கை வெளிச்சம்',
    },
    description: {
      en: 'Master realistic solar studies, artificial spotlights, IES lighting profiles, and dusk/night mood visual renders.',
      ta: 'சூரியனின் பாதை, IES விளக்குகள், மாலை மற்றும் இரவு நேர அமைப்புகளை சரியாக கையாண்டு அசத்தலான ரெண்டர்களை எடுங்கள்.',
    },
  },
  {
    icon: 'Layers',
    title: {
      en: 'PBR Material Editor & Textures',
      ta: 'உயர்தர மெட்டீரியல் எடிட்டர்',
    },
    description: {
      en: 'Create realistic glass reflections, brushed gold, polished Italian marble, water ripples, and textured fabrics easily.',
      ta: 'கண்ணாடி பிரதிபலிப்புகள், பளிங்கு கற்கள், மர வேலைப்பாடுகள் மற்றும் தண்ணீர் அலைகளை மிக எளிதாக வடிவமைக்கலாம்.',
    },
  },
  {
    icon: 'Glasses',
    title: {
      en: 'One-Click Virtual Reality (VR)',
      ta: 'ஒரே கிளிக்கில் விர்ச்சுவல் ரியாலிட்டி (VR)',
    },
    description: {
      en: 'Walk your clients through your designs in immersive VR using Meta Quest or standalone browser web-standalone links.',
      ta: 'உங்கள் வாடிக்கையாளர்களை மெய்நிகர் ரியாலிட்டி (VR) ஹெட்செட் மூலம் அவர்கள் கட்டப்போகும் கட்டடத்திற்குள்ளேயே அழைத்துச் செல்லுங்கள்.',
    },
  },
  {
    icon: 'Film',
    title: {
      en: 'Cinematic Camera Walkthroughs',
      ta: 'சினிமா தர வீடியோ வாக்த்ரூ',
    },
    description: {
      en: 'Animate smooth camera paths with depth of field, motion blur, and atmospheric fog for breathtaking client presentations.',
      ta: 'கேமரா பாதைகளை அமைத்து, நேர்த்தியான வீடியோக்கள் மற்றும் 360° பனோரமா காட்சிகளை எளிதாக தயாரித்திடுங்கள்.',
    },
  },
  {
    icon: 'Briefcase',
    title: {
      en: 'Freelancing & Client Pitching',
      ta: 'ஃப்ரீலான்சிங் & கிளையண்ட் அப்ரூவல்',
    },
    description: {
      en: 'How to charge premium rates for 3D visualization services in India, the Middle East, and worldwide freelance platforms.',
      ta: '3D ரெண்டரிங் மூலம் இந்தியா மற்றும் வெளிநாட்டு வாடிக்கையாளர்களிடம் நல்ல வருவாய் ஈட்டுவது எப்படி என்ற வழிகாட்டல்.',
    },
  },
];

export const AGENDA_DATA: AgendaItem[] = [
  {
    id: 'session-1',
    time: '6:30 PM - 6:45 PM',
    duration: '15 Mins',
    badge: {
      en: 'FOUNDATION',
      ta: 'அடிப்படை',
    },
    title: {
      en: 'Module 1: Real-Time Rendering Revolution & Setup',
      ta: 'பகுதி 1: நிகழ்நேர ரெண்டரிங் புரட்சி & தொடக்க அமைப்பு',
    },
    description: {
      en: 'Why Enscape is replacing traditional slow renderers (V-Ray/Lumion) for daily architectural workflow. Setup, GPU optimization, and UI walkthrough.',
      ta: 'கட்டிடக்கலை உலகில் Enscape ஏன் முதலிடம் வகிக்கிறது? கணினி கிராபிக்ஸ் கார்டு தேர்வு, சாப்ட்வேர் அமைப்பு மற்றும் அடிப்படை கருவிகள்.',
    },
    keyPoints: {
      en: [
        'Hardware requirements (NVIDIA RTX / AMD specs for lag-free performance)',
        'Connecting SketchUp, Revit, Rhino, or Archicad with 1-click live-sync',
        'Navigating the viewport using gaming controls (WASD & Mouse)',
      ],
      ta: [
        'கம்ப்யூட்டர் தேவைகள் (RTX கிராபிக்ஸ் அமைப்புகள்)',
        'SketchUp, Revit-உடன் ஒரு கிளிக்கில் இணைக்கும் முறை',
        'எளிதான கேமிங் நேவிகேஷன் கண்ட்ரோல்ஸ்',
      ],
    },
  },
  {
    id: 'session-2',
    time: '6:45 PM - 7:15 PM',
    duration: '30 Mins',
    badge: {
      en: 'CORE SKILLS',
      ta: 'முக்கிய நுட்பங்கள்',
    },
    title: {
      en: 'Module 2: Lighting Mastery & Material Perfection',
      ta: 'பகுதி 2: ஒளி அமைப்புகள் மற்றும் மெட்டீரியல் எடிட்டிங்',
    },
    description: {
      en: 'Mastering realistic daylight simulations, HDRI skies, interior warm downlights, strip LEDs, and realistic PBR textures (bump, normal, roughness).',
      ta: 'இயற்கையான பகல் வெளிச்சம், HDRI வான அமைப்புகள், உட்புற ஸ்பாட்லைட்கள், ஸ்ட்ரிப் லைட்கள் மற்றும் இயல்பான மேட்/பளபளப்பான மெட்டீரியல்கள் தயாரித்தல்.',
    },
    keyPoints: {
      en: [
        'Sun position, north orientation, and latitude/longitude accurate daylighting',
        'Creating realistic materials: Glass tint, frosted glass, timber gloss, and metals',
        'Using Chaos Cosmos: 4,000+ curated render-ready trees, furniture, and people',
      ],
      ta: [
        'துல்லியமான சூரிய ஒளி மற்றும் திசை அமைப்புகள்',
        'கண்ணாடி, மரம் மற்றும் மார்பிள் தயாரிக்கும் ரகசியங்கள்',
        'Chaos Cosmos லைப்ரரி: இலவச மரங்கள், பர்னிச்சர் மற்றும் மனித உருவங்கள்',
      ],
    },
  },
  {
    id: 'session-3',
    time: '7:15 PM - 7:45 PM',
    duration: '30 Mins',
    badge: {
      en: 'ADVANCED OUTPUT',
      ta: 'உயர்தர அவுட்புட்',
    },
    title: {
      en: 'Module 3: Video Animation, 360° Panoramas & VR',
      ta: 'பகுதி 3: வீடியோ அனிமேஷன், 360° பனோரமா & VR',
    },
    description: {
      en: 'Creating cinematic walkthrough videos, exporting interactive QR-code panos for clients smartphones, and launching 1-click immersive VR.',
      ta: 'அசத்தலான வாக்த்ரூ வீடியோக்கள், வாடிக்கையாளர்கள் மொபைலிலேயே பார்க்கும் 360° QR கோட் பனோரமாக்கள் மற்றும் விர்ச்சுவல் ரியாலிட்டி அனுபவம்.',
    },
    keyPoints: {
      en: [
        'Smooth keyframe camera path editing without jitter or jerks',
        'Exporting standalone web links (clients can explore without installing Enscape!)',
        'Custom visual styles: White mode, outline drafting style, and sunset renders',
      ],
      ta: [
        'அதிர்வு இல்லாத நேர்த்தியான சினிமா வீடியோ கேமரா நகர்வுகள்',
        'கிளையண்ட் தங்கள் லேப்டாப்பில் மென்பொருள் இல்லாமலேயே பார்க்கும் வெப்-லிங்க்',
        'வெள்ளை மாடல் (White Mode) மற்றும் கோட்டுப் பட பாணிகள்',
      ],
    },
  },
  {
    id: 'session-4',
    time: '7:45 PM - 8:15 PM',
    duration: '30 Mins',
    badge: {
      en: 'BUSINESS & CAREER',
      ta: 'தொழில் & வருவாய்',
    },
    title: {
      en: 'Module 4: Professional Workflow & Monetization Strategies',
      ta: 'பகுதி 4: தொழில்முறை உத்திகள் & ஃப்ரீலான்ஸ் வழிகாட்டல்',
    },
    description: {
      en: 'Practical workflow tips for architecture firms and freelancers. How to bid on 3D visualization projects in Chennai, Bangalore, Gulf countries, and Upwork.',
      ta: 'கட்டிடக்கலை நிறுவனங்களில் பணிபுரிய அல்லது சொந்தமாக 3D ரெண்டரிங் ஃப்ரீலான்சிங் செய்து கைநிறைய சம்பாதிக்க சிறந்த வழிகள்.',
    },
    keyPoints: {
      en: [
        'Batch rendering 20+ camera angles in under 3 minutes',
        'How to price 3D exterior and interior rendering packages',
        'Building an irresistible architecture visualization portfolio',
      ],
      ta: [
        '3 நிமிடங்களில் 20 கோணங்களில் படங்களை எடுக்கும் Batch Render முறை',
        'ப்ராஜெக்ட்களுக்கு கட்டணம் நிர்ணயிக்கும் கணக்கீடுகள்',
        'கவர்ச்சிகரமான போர்ட்ஃபோலியோ உருவாக்கும் வழிமுறைகள்',
      ],
    },
  },
  {
    id: 'session-5',
    time: '8:15 PM - 8:30 PM',
    duration: '15 Mins',
    badge: {
      en: 'INTERACTIVE',
      ta: 'கலந்துரையாடல்',
    },
    title: {
      en: 'Module 5: Live Q&A, Certificate & Bonus Pack Access',
      ta: 'பகுதி 5: நேரடி கேள்வி-பதில் & இலவச பரிசுப் பொதி வழங்கல்',
    },
    description: {
      en: 'Direct open microphone and chat Q&A with Ar. Karthik. Instant claim links for the 250+ Enscape Materials Pack and Certificate verification.',
      ta: 'வழிகாட்டியுடன் நேரடி கலந்துரையாடல். இலவச 250+ மெட்டீரியல் பேக் பதிவிறக்கம் மற்றும் பங்கேற்பு மின்-சான்றிதழ் வழங்கல்.',
    },
    keyPoints: {
      en: [
        'Personal troubleshooting for your specific model lag or lighting queries',
        'Download access for high-res PBR textures and Enscape project templates',
        'Claiming your verified e-Certificate for LinkedIn and resume',
      ],
      ta: [
        'உங்கள் சந்தேகங்களுக்கு உடனடி நேரலை பதில்கள்',
        'உயர்தர மெட்டீரியல் பேக் & ரெண்டர் டெம்ப்ளேட் பதிவிறக்கம்',
        'ரெஸ்யூம் மற்றும் லிங்க்ட்இன்-க்கான அதிகாரப்பூர்வ மின்-சான்றிதழ்',
      ],
    },
  },
];

export const SPEAKER_DATA: SpeakerInfo = {
  name: {
    en: 'Ar. Karthik Sundaram, B.Arch',
    ta: 'ஆர்கிடெக்ட் கார்த்திக் சுந்தரம், B.Arch',
  },
  title: {
    en: 'Principal Visualization Lead & Authorized BIM Specialist',
    ta: 'தலைமை விசுவலைசேஷன் நிபுணர் & BIM ஆலோசகர்',
  },
  organization: {
    en: 'DesignCraft Studio • Ex-Cadence Architects',
    ta: 'டிசைன்கிராஃப்ட் ஸ்டுடியோ • முன்னாள் கேடன்ஸ் ஆர்கிடெக்ட்ஸ்',
  },
  experience: {
    en: '11+ Years AEC Experience • 4,500+ Designers Trained Across TN & Middle East',
    ta: '11+ வருட அனுபவம் • தமிழகம் & வளைகுடா நாடுகளில் 4,500+ வடிவமைப்பாளர்களுக்கு பயிற்சி',
  },
  bio: {
    en: 'Karthik is a practicing architect and visualization evangelist who has transformed how leading studios in Chennai, Coimbatore, and Dubai pitch to high-net-worth clients. Known for his practical, no-nonsense teaching style in both Tamil and English, he demystifies real-time rendering so anyone can achieve studio-grade renders in minutes.',
    ta: 'கார்த்திக் அவர்கள் பல முன்னணி கட்டடக்கலை நிறுவனங்களின் பிரதான திட்டங்களை நேர்த்தியாக காட்சிப்படுத்திய அனுபவமிக்க கட்டிடக்கலைஞர். தொழில்நுட்ப வார்த்தைகளில் சிக்காமல், தமிழ் மற்றும் ஆங்கிலத்தில் எளிய முறையில் புரிய வைக்கும் கற்பித்தல் முறைக்காக தமிழகம் முழுவதும் பிரசித்தி பெற்றவர்.',
  },
  stats: [
    {
      value: '4,500+',
      label: {
        en: 'Students & Architects Mentored',
        ta: 'பயிற்சி பெற்ற மாணவர்கள் & ஆர்கிடெக்ட்கள்',
      },
    },
    {
      value: '180+',
      label: {
        en: 'Commercial & Luxury Villa Renders',
        ta: 'நிறைவு செய்த பிரம்மாண்ட திட்டங்கள்',
      },
    },
    {
      value: '4.9/5',
      label: {
        en: 'Average Workshop Rating',
        ta: 'பயிற்சியாளர்களின் சராசரி மதிப்பீடு',
      },
    },
  ],
  image: '/assets/speaker.jpg',
};

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 'bonus-1',
    value: '₹4,999',
    iconName: 'Package',
    title: {
      en: '250+ Pro Enscape PBR Material Library',
      ta: '250+ பிரீமியம் PBR மெட்டீரியல் பேக்',
    },
    description: {
      en: 'Ready-to-use seamless materials: Italian terrazzo, weathered teakwood, fluted glass, brass, and Indian granite with seamless bump and roughness maps.',
      ta: 'உடனடியாக பயன்படுத்தக்கூடிய மார்பிள், தேக்கு மரம், பித்தளை, கிரானைட் மற்றும் கண்ணாடி அமைப்புகள் கொண்ட அரிய தொகுப்பு.',
    },
  },
  {
    id: 'bonus-2',
    value: '₹2,499',
    iconName: 'Award',
    title: {
      en: 'Verifiable Digital Certificate of Attendance',
      ta: 'அங்கீகரிக்கப்பட்ட மின்-சான்றிதழ்',
    },
    description: {
      en: 'Digital credential with unique QR code verification to bolster your resume, LinkedIn profile, and job portfolio.',
      ta: 'உங்கள் வேலைவாய்ப்பு மற்றும் லிங்க்ட்இன் சுயவிவரத்திற்கு கூடுதல் மதிப்பு சேர்க்கும் அங்கீகார சான்றிதழ்.',
    },
  },
  {
    id: 'bonus-4',
    value: 'Priceless',
    iconName: 'MessageSquareShare',
    title: {
      en: 'Exclusive Tamil AEC Designers WhatsApp Community',
      ta: 'தமிழக வடிவமைப்பு கலைஞர்கள் பிரத்யேக சமூகம்',
    },
    description: {
      en: 'Join 1,200+ architects, interior designers, and visualizers for daily job openings, freelance leads, and peer critiques.',
      ta: 'வேலைவாய்ப்பு தகவல்கள், ஃப்ரீலான்ஸ் ப்ராஜெக்ட்கள் மற்றும் சந்தேகங்களை உடனுக்குடன் பகிர உதவும் வாட்ஸ்அப் குழு.',
    },
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Ar. Vignesh Ramachandran',
    role: {
      en: 'Senior Architect',
      ta: 'முதன்மை கட்டிடக்கலைஞர்',
    },
    firmOrCollege: 'VR Architects, Chennai',
    location: {
      en: 'Chennai, TN',
      ta: 'சென்னை',
    },
    quote: {
      en: 'We switched our whole office workflow from V-Ray to Enscape after Karthik’s session. Client approvals that used to take 2 weeks now happen during the live meeting itself! Teaching in Tamil made every tricky concept crystal clear.',
      ta: 'கார்த்திக் சாரின் அமர்வுக்குப் பிறகு எங்கள் அலுவலகத்தின் அனைத்து ரெண்டரிங் வேலைகளையும் Enscape-க்கு மாற்றினோம். வாடிக்கையாளர் அப்ரூவல் இப்போது சந்திப்பிலேயே முடிந்துவிடுகிறது! தமிழில் எளிமையாக விளக்கிய விதம் அற்புதம்.',
    },
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Priyadharshini M.',
    role: {
      en: 'Interior Design Consultant',
      ta: 'உள்துறை வடிவமைப்பு ஆலோசகர்',
    },
    firmOrCollege: 'Studio Ananya',
    location: {
      en: 'Coimbatore, TN',
      ta: 'கோயம்புத்தூர்',
    },
    quote: {
      en: 'The lighting secrets section alone is worth thousands. Learning how to properly dial in warm ambient lights and spot IES profiles has completely elevated my portfolio. Highly recommended for every design student and professional!',
      ta: 'லைட்டிங் நுட்பங்கள் பற்றிய பகுதி மட்டும் அளப்பரிய மதிப்புடையது. உட்புற விளக்குகள் மற்றும் நிழல்களை எப்படி கையாள்வது என்பதை மிக அழகாக சொல்லிக் கொடுத்தார். ஒவ்வொரு ஆர்கிடெக்ட் மற்றும் மாணவரும் தவறவிடக்கூடாத ஒன்று!',
    },
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Sivakumar Balaji',
    role: {
      en: 'B.Arch Final Year Student',
      ta: 'கட்டிடக்கலை இறுதி ஆண்டு மாணவர்',
    },
    firmOrCollege: 'SAP Anna University',
    location: {
      en: 'Chennai, TN',
      ta: 'சென்னை',
    },
    quote: {
      en: 'For our thesis jury, render times used to give us sleepless nights. Enscape walkthrough video made our jury examiners give a standing ovation! The material pack bonus is a goldmine.',
      ta: 'தீசிஸ் ஜூரிக்கு ரெண்டர் எடுப்பது எப்போதும் பயமாக இருக்கும். Enscape வீடியோ வாக்த்ரூ எங்கள் ஜூரியில் பெரும் வரவேற்பை பெற்றது! இலவசமாக வழங்கிய மெட்டீரியல் பேக் மிகவும் பயனுள்ளதாக உள்ளது.',
    },
    rating: 5,
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      en: 'What is the fee for this masterclass?',
      ta: 'இந்த மாஸ்டர்கிளாஸ்க்கான கட்டணம் என்ன?',
    },
    answer: {
      en: 'The special pass is just ₹499 (Originally ₹2,499 with ₹10,997 worth bonuses included free). Seats are strictly limited to 300 attendees to ensure quality live Q&A and support.',
      ta: 'சிறப்பு கட்டணம் வெறும் ₹499 மட்டுமே (அசல் மதிப்பு ₹2,499 மற்றும் ₹10,997 மதிப்புள்ள மெட்டீரியல் பேக் & போனஸ்கள் இலவசம்). 300 பேருக்கு மட்டுமே அனுமதி.',
    },
  },
  {
    id: 'faq-2',
    category: 'general',
    question: {
      en: 'What language will the webinar be conducted in?',
      ta: 'வெபினார் எந்த மொழியில் நடத்தப்படும்?',
    },
    answer: {
      en: 'It is a bilingual masterclass! Core concepts, industry workflows, and technical demonstrations will be explained smoothly in conversational Tamil and English, so everyone can follow along comfortably without language barriers.',
      ta: 'இது தமிழ் மற்றும் ஆங்கிலம் ஆகிய இரு மொழிகளிலும் கலந்த எளிமையான முறையில் நடத்தப்படும். தொழில்நுட்ப சொற்களை ஆங்கிலத்திலும், புரிதலை தமிழிலும் அழகாக விளக்குவோம்.',
    },
  },
  {
    id: 'faq-3',
    category: 'technical',
    question: {
      en: 'Which 3D software is supported with Enscape?',
      ta: 'Enscape எந்தெந்த 3D சாப்ட்வேர்களுடன் வேலை செய்யும்?',
    },
    answer: {
      en: 'Enscape seamlessly integrates directly as a live-sync plugin inside SketchUp (all versions), Autodesk Revit, Rhino, Archicad, and Vectorworks. Even if you use only one of these, you can apply everything directly.',
      ta: 'Enscape நேரடியாக SketchUp, Autodesk Revit, Rhino, Archicad மற்றும் Vectorworks ஆகிய அனைத்து மென்பொருட்களுடனும் நேரடியாக இணையும். இதில் ஏதேனும் ஒன்று தெரிந்திருந்தாலும் நீங்கள் எளிதாக கற்றுக்கொள்ளலாம்.',
    },
  },
  {
    id: 'faq-4',
    category: 'technical',
    question: {
      en: 'Do I need a high-end supercomputer to run Enscape?',
      ta: 'Enscape பயன்படுத்த அதிக விலை கொண்ட கணினி தேவையா?',
    },
    answer: {
      en: 'Enscape is remarkably lightweight compared to offline renderers! An NVIDIA GTX 1060 / RTX 2060 or higher with 4GB-6GB VRAM on Windows is plenty to start. We will also demonstrate how to optimize scenes on modest laptops.',
      ta: 'மற்ற ரெண்டரிங் மென்பொருட்களை விட Enscape மிக வேகமானது மற்றும் லேசானது. 4GB கிராபிக்ஸ் கார்டு (NVIDIA GTX/RTX) இருந்தாலே போதுமானது. குறைவான வசதியுள்ள லேப்டாப்பிலும் வேகமாக வேலை செய்வது எப்படி என்பதை நேரலையில் விளக்குவோம்.',
    },
  },
  {
    id: 'faq-5',
    category: 'certification',
    question: {
      en: 'Will I receive a certificate and webinar recording?',
      ta: 'சான்றிதழ் மற்றும் ரெக்கார்டிங் கிடைக்குமா?',
    },
    answer: {
      en: 'Yes! All registered attendees who join the live session will receive a verifiable Certificate of Attendance via email, plus 60 days of full HD replay access to review the techniques at home.',
      ta: 'ஆம்! நேரலையில் கலந்துகொள்ளும் அனைவருக்கும் அவர்களின் மின்னஞ்சலில் அதிகாரப்பூர்வ மின்-சான்றிதழ் மற்றும் 60 நாட்களுக்கு பார்க்கக்கூடிய முழு HD ரெக்கார்டிங் அணுகல் வழங்கப்படும்.',
    },
  },
  {
    id: 'faq-6',
    category: 'general',
    question: {
      en: 'I am a beginner in 3D. Can I still attend and benefit?',
      ta: 'நான் 3D-ல் ஒரு தொடக்கநிலை மாணவன். நான் கலந்துகொள்ளலாமா?',
    },
    answer: {
      en: 'Absolutely! The masterclass is designed from foundational zero-setup right up to advanced lighting and VR walkthroughs. Students, draftsmen, junior designers, and senior architects will all gain immediate practical value.',
      ta: 'தாராளமாக! அடிப்படை அமைப்பில் தொடங்கி, உயர்தர வெளிச்சம் மற்றும் VR வீடியோ வரை படிப்படியாக எளிய உதாரணங்களுடன் கற்றுக்கொடுக்கப்படும். மாணவர்கள் முதல் மூத்த கலைஞர்கள் வரை அனைவருக்கும் இது பயனுள்ளதாக இருக்கும்.',
    },
  },
];
