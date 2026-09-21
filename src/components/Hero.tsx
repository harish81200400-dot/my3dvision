import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Language } from '../types';
import { HERO_CONTENT } from '../data/content';

interface HeroProps {
  language: Language;
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onRegisterClick }) => {
  return (
    <section id="overview" className="relative pt-6 pb-8 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-slate-900">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-500/15 via-blue-600/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle architectural grid pattern in background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Hero Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-5 sm:mb-8">
            <span className="block mb-1 sm:mb-2">
              {language === 'ta' ? (
                <span className="inline-flex flex-col">
                  <span className="tracking-tight text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                      Enscape 3D
                    </span>{' '}
                    மாஸ்டரி: நிகழ்நேர கட்டிடக்கலை ரெண்டரிங் & விர்ச்சுவல் ரியாலிட்டி
                  </span>
                </span>
              ) : (
                <span className="inline-flex flex-col">
                  <span className="tracking-tight text-white">
                    Master{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                      Enscape 3D
                    </span>
                    : Real-Time Architectural Rendering & VR{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 font-extrabold ml-1 sm:ml-2">
                      in தமிழ்
                    </span>
                  </span>
                  {(language === 'blend' || language === 'dual') && (
                    <span className="text-base sm:text-2xl lg:text-3xl text-blue-300/80 font-medium tracking-normal block mt-2 sm:mt-3">
                      {HERO_CONTENT.mainTitle.ta}
                    </span>
                  )}
                </span>
              )}
            </span>
          </h1>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
            <button
              id="hero-cta-register-button"
              onClick={onRegisterClick}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-base sm:text-lg font-black rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>
                {language === 'ta' ? HERO_CONTENT.ctaButton.ta : HERO_CONTENT.ctaButton.en}
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#comparison"
              className="w-full sm:w-auto px-6 py-4 bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 hover:text-white text-sm sm:text-base font-bold rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 text-blue-400 fill-blue-400" />
              <span>
                {language === 'ta'
                  ? 'ரெண்டர் ஒப்பீட்டை பார்க்க'
                  : language === 'blend'
                  ? 'See Before & After (ஒப்பீடு)'
                  : 'See Before & After'}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
