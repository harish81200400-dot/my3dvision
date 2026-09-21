export type Language = 'blend' | 'en' | 'ta' | 'dual';

export interface BilingualText {
  en: string;
  ta: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  duration: string;
  title: BilingualText;
  description: BilingualText;
  keyPoints: {
    en: string[];
    ta: string[];
  };
  badge?: BilingualText;
}

export interface SpeakerInfo {
  name: BilingualText;
  title: BilingualText;
  organization: BilingualText;
  experience: BilingualText;
  bio: BilingualText;
  stats: Array<{
    label: BilingualText;
    value: string;
  }>;
  image: string;
}

export interface BonusItem {
  id: string;
  value: string;
  title: BilingualText;
  description: BilingualText;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: BilingualText;
  firmOrCollege: string;
  location: BilingualText;
  quote: BilingualText;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: BilingualText;
  answer: BilingualText;
  category: 'general' | 'technical' | 'certification';
}

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  software: string;
  experience: string;
  questions?: string;
  preferredLanguage: 'en' | 'ta' | 'both';
  registeredAt: string;
  ticketId: string;
}
