import React from 'react';
import { CheckCircle2, Calendar, Clock, Video, Download, Share2, X, Sparkles, QrCode } from 'lucide-react';
import { Language, RegistrationData } from '../types';
import { EVENT_DETAILS } from '../data/content';
import { generateGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';
import { Logo } from './Logo';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: RegistrationData | null;
  language: Language;
}

export const TicketModal: React.FC<TicketModalProps> = ({
  isOpen,
  onClose,
  data,
  language,
}) => {
  if (!isOpen || !data) return null;

  const googleCalUrl = generateGoogleCalendarUrl();

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      language === 'ta'
        ? `நான் Enscape 3D தமிழ் மற்றும் ஆங்கில நேரலை மாஸ்டர்கிளாஸில் இணைந்துவிட்டேன்! (அக்டோபர் 24, மாலை 6:30 IST). நீங்களும் இணையுங்கள் (₹499): ${window.location.href}`
        : `I just registered for the Enscape 3D Real-Time Rendering Masterclass (Oct 24, 6:30 PM IST)! Reserve your seat at ₹499: ${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-900 border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10 text-white my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close ticket pass"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            {language === 'ta'
              ? 'பதிவு உறுதிசெய்யப்பட்டது!'
              : language === 'blend'
              ? 'REGISTRATION CONFIRMED • பதிவு உறுதியானது'
              : 'REGISTRATION CONFIRMED!'}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
            {language === 'ta'
              ? `வணக்கம், ${data.fullName}!`
              : language === 'blend'
              ? `Welcome, ${data.fullName}! (வணக்கம்)`
              : `Welcome, ${data.fullName}!`}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {language === 'ta'
              ? 'உங்கள் இலவச வெபினார் அனுமதி அட்டை தயாராக உள்ளது. இணைப்பு உங்கள் வாட்ஸ்அப் மற்றும் மின்னஞ்சலுக்கு அனுப்பப்பட்டுள்ளது.'
              : language === 'blend'
              ? 'Your webinar pass is ready! Direct Zoom link and reminder sent to your email & WhatsApp (அனுமதி அட்டை தயாராக உள்ளது).'
              : 'Your webinar pass is ready! The direct Zoom link and reminders have been sent to your email.'}
          </p>
        </div>

        {/* Boarding Pass / Ticket Graphic */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6 relative overflow-hidden">
          {/* Top Notch Cutouts */}
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border-r border-slate-800"></div>
          <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-900 border-l border-slate-800"></div>

          <div className="flex items-center justify-between border-b border-dashed border-slate-800 pb-3 mb-4">
            <div>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pass ID</span>
              <p className="font-mono text-xs font-bold text-blue-400">{data.ticketId}</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Logo size={24} showText={false} />
              <span className="text-xs font-black text-white tracking-tight">
                My<span className="text-blue-400">3D</span>Vision
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Access</span>
              <p className="text-xs font-bold text-blue-400">VIP Pass (₹499)</p>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Event:</span>
              <span className="font-semibold text-white">Enscape 3D Masterclass (40% தமிழ் + 60% EN)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Attendee:</span>
              <span className="font-semibold text-white">{data.fullName} ({data.role})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Date:</span>
              <span className="font-semibold text-blue-300">Saturday, Oct 24, 2026</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Time:</span>
              <span className="font-semibold text-white">6:30 PM – 8:30 PM IST</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Platform:</span>
              <span className="font-semibold text-blue-400 flex items-center gap-1">
                <Video className="w-3.5 h-3.5" />
                Zoom Live
              </span>
            </div>
          </div>

          {/* Barcode & Simulated QR Code */}
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <div className="font-mono text-[10px] text-slate-500 tracking-widest">
              ||| | |||| | ||||| ||| |||| |
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400">
              <QrCode className="w-4 h-4 text-blue-400" />
              <span>SCAN AT ENTRY</span>
            </div>
          </div>
        </div>

        {/* Action Buttons: Calendar & Share */}
        <div className="space-y-2.5">
          <a
            href={googleCalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-blue-600/25"
          >
            <Calendar className="w-4 h-4" />
            <span>
              {language === 'ta'
                ? 'கூகிள் காலெண்டரில் சேர்க்க'
                : language === 'blend'
                ? 'Add to Google Calendar (நாட்காட்டி)'
                : 'Add to Google Calendar'}
            </span>
          </a>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={downloadIcsFile}
              className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'ta' ? 'iCal (.ics) பதிவிறக்கு' : 'Apple/Outlook (.ics)'}</span>
            </button>

            <button
              onClick={handleShareWhatsApp}
              className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>
                {language === 'ta'
                  ? 'வாட்ஸ்அப்பில் பகிர்'
                  : language === 'blend'
                  ? 'Share on WhatsApp (பகிர்)'
                  : 'Invite Colleagues'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
