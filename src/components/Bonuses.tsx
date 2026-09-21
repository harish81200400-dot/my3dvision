import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface BonusesProps {
  language: Language;
  onRegisterClick: () => void;
}

export const Bonuses: React.FC<BonusesProps> = ({ language, onRegisterClick }) => {
  return (
    <section id="bonuses" className="py-8 sm:py-14 lg:py-16 bg-slate-950 relative border-b border-slate-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Total Value Banner */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 lg:p-7 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-2xl shadow-blue-500/20 border border-blue-400/40">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mb-1">
              <span className="font-black text-lg sm:text-xl tracking-tight">
                {language === 'ta'
                  ? 'மொத்த மதிப்பு: ₹10,997'
                  : language === 'blend'
                  ? 'Total Value • மொத்த மதிப்பு: ₹10,997'
                  : 'Total Package Value: ₹10,997'}
              </span>
              <span className="inline-flex items-center gap-1 bg-slate-950 text-blue-400 text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3 h-3 text-blue-400" />
                {language === 'ta' ? 'விலை: ₹499' : 'ONLY ₹499'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-blue-100 font-medium leading-relaxed max-w-md mx-auto sm:mx-0">
              {language === 'ta'
                ? 'அசல் மதிப்பு ₹2,499. இன்று வெறும் ₹499 மட்டுமே (300 பேருக்கு மட்டும்)!'
                : language === 'blend'
                ? 'Original price ₹2,499 • Today only ₹499 (300 பேருக்கு மட்டுமே)'
                : 'Original price ₹2,499 • Today only ₹499 for registered attendees!'}
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-blue-400 hover:text-blue-300 font-extrabold text-sm rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer touch-manipulation border border-blue-500/30"
          >
            <span>
              {language === 'ta'
                ? 'இடத்தை பதிவு செய் — ₹499'
                : language === 'blend'
                ? 'Book Seat • ₹499 பதிவு'
                : 'Book Seat at ₹499'}
            </span>
            <ArrowRight className="w-4 h-4 text-blue-400 shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
