import React, { useState } from 'react';
import {
  Send,
  Sparkles,
  Lock,
} from 'lucide-react';
import { Language, RegistrationData } from '../types';
import { EVENT_DETAILS } from '../data/content';
import { TicketModal } from './TicketModal';

interface RegistrationFormProps {
  language: Language;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ language }) => {
  const [registeredData, setRegisteredData] = useState<RegistrationData | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="register" className="py-10 sm:py-16 lg:py-20 bg-slate-950 relative border-b border-slate-900">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {language === 'ta'
                  ? 'சிறப்பு கட்டணம்: ₹499 (அசல் ₹2,499)'
                  : language === 'blend'
                  ? 'SPECIAL PASS • வெறும் ₹499 (Original ₹2,499)'
                  : 'SPECIAL PASS • JUST ₹499 (ORIGINAL ₹2,499)'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">
              {language === 'ta' ? (
                <span>ரூ.499-ல் உங்கள் இடத்தை இப்போதே பதிவு செய்யுங்கள்</span>
              ) : language === 'blend' ? (
                <span>
                  Reserve Your Seat for Just ₹499
                  <span className="block text-blue-400 text-base sm:text-lg font-normal mt-1">
                    (ரூ.499-ல் உங்கள் இடத்தை இப்போதே பதிவு செய்யுங்கள்)
                  </span>
                </span>
              ) : (
                <span>Reserve Your Seat for Just ₹499</span>
              )}
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              {language === 'ta'
                ? 'நேரலை ஜூம் இணைப்பு, ₹10,997 மதிப்புள்ள 250+ மெட்டீரியல் பேக் மற்றும் சான்றிதழ் விவரங்கள் உங்கள் மின்னஞ்சல் மற்றும் வாட்ஸ்அப்பிற்கு உடனடியாக அனுப்பப்படும்.'
                : language === 'blend'
                ? 'Instant confirmation. Direct Zoom join links and ₹10,997 worth bonus assets will be sent to your WhatsApp & Email (ஜூம் இணைப்பு உடனடியாக அனுப்பப்படும்).'
                : 'Instant confirmation. Direct Zoom join links and ₹10,997 worth bonus assets will be sent to your inbox and WhatsApp.'}
            </p>
          </div>

          {/* Direct 1-Click Pass Claim Action */}
          <div className="flex flex-col items-center justify-center pt-2 sm:pt-4 w-full px-2 sm:px-0">
            <button
              id="submit-registration-btn"
              onClick={() => {
                setRegisteredData({
                  fullName: 'VIP Attendee',
                  email: 'attendee@enscape-webinar.live',
                  phone: '+91 86607 05851',
                  role: 'Architect / Visualizer',
                  software: 'SketchUp & Revit',
                  experience: 'Professional',
                  preferredLanguage: 'both',
                  ticketId: `ENS-VIP-${Math.floor(1000 + Math.random() * 9000)}`,
                  registeredAt: 'October 24, 2026',
                });
                setShowModal(true);
              }}
              className="w-full max-w-sm sm:max-w-none sm:w-auto min-h-[48px] sm:min-h-[56px] px-5 py-3.5 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm sm:text-base md:text-lg font-black rounded-xl sm:rounded-2xl shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 sm:gap-3 touch-manipulation"
            >
              <span className="text-center leading-snug">
                {language === 'ta'
                  ? 'இடத்தை பதிவு செய்க — ₹499'
                  : language === 'blend'
                  ? 'Book VIP Pass at ₹499 • அனுமதி சீட்டு'
                  : 'Book VIP Pass at ₹499'}
              </span>
              <Send className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </button>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-400 pt-3 sm:pt-4 text-center flex-wrap sm:flex-nowrap">
              <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>
                {language === 'ta'
                  ? 'உடனடி உறுதிப்படுத்தல் • பாதுகாப்பான கட்டணம் • ₹499 மட்டுமே'
                  : language === 'blend'
                  ? 'Instant Pass • 100% Secure ₹499 Entry (உடனடி உறுதி)'
                  : 'Instant Pass Generation • 100% Secure ₹499 Entry Guarantee'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Modal */}
      <TicketModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        data={registeredData}
        language={language}
      />
    </section>
  );
};
