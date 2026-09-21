import React from 'react';
import { Sparkles, MessageCircle, Mail, Globe, Heart, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-8 pb-24 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-slate-900">
          {/* Brand Info */}
          <div className="text-center md:text-left max-w-sm">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Logo size={32} showText={true} />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mt-2">
              {language === 'ta'
                ? 'தமிழ்நாடு மற்றும் உலகம் முழுவதுமுள்ள கட்டிடக்கலை வல்லுநர்கள் & மாணவர்களுக்கான பிரத்யேக நிகழ்நேர 3D ரெண்டரிங் கல்வித்தளம்.'
                : 'Dedicated community learning initiative for architects, interior designers, and visualization specialists across Tamil Nadu & worldwide.'}
            </p>
          </div>

          {/* Quick Support & Contacts */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                {language === 'ta' ? 'உதவி மற்றும் வினவல்கள்' : 'Webinar Support'}
              </span>
              <a
                href="mailto:customer.my3dvision@gmail.com"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5 justify-center sm:justify-start"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>customer.my3dvision@gmail.com</span>
              </a>
              <span className="text-[11px] text-slate-500 block">
                Mon - Sat: 9:30 AM - 6:30 PM IST
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                {language === 'ta' ? 'வாட்ஸ்அப் உதவி' : 'WhatsApp Support'}
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=918660705851&text=Enscape%20Webinar%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 justify-center sm:justify-start font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>+91 86607 05851</span>
              </a>
              <span className="text-[11px] text-slate-500 block">
                {language === 'ta' ? 'உடனடி வாட்ஸ்அப் பதில்' : 'Instant Chat Support'}
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Legal */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} DesignCraft Studio. {language === 'ta' ? 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' : 'All rights reserved.'}
          </p>

          <p className="max-w-xl text-center md:text-right">
            {language === 'ta'
              ? 'மறுப்பு: Enscape™ என்பது Chaos Software GmbH-ன் பதிவுசெய்யப்பட்ட வர்த்தக முத்திரையாகும். இந்த வெபினார் ஒரு சுயாதீனமான கல்வி பயிற்சி நிகழ்வாகும்.'
              : 'Disclaimer: Enscape™ is a registered trademark of Chaos Software GmbH. This masterclass is an independent educational training workshop.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
