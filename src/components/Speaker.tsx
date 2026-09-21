import React from 'react';
import { Award, CheckCircle2, MapPin } from 'lucide-react';
import { Language } from '../types';
import { SPEAKER_DATA } from '../data/content';

interface SpeakerProps {
  language: Language;
}

export const Speaker: React.FC<SpeakerProps> = ({ language }) => {
  return (
    <section id="speaker" className="py-10 sm:py-16 lg:py-20 bg-slate-950 relative border-b border-slate-900 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'ta' ? 'உங்கள் பயிற்றுவிப்பாளர்' : 'MEET YOUR INSTRUCTOR'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'ta' ? (
              <span>களத்தில் அனுபவம் வாய்ந்த ஆர்கிடெக்ட் உடன் நேரலை கற்றல்</span>
            ) : (
              <span>Learn Directly From an Industry-Practicing Architect</span>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'ta'
              ? 'வெறும் தியரி அல்ல! நிஜ திட்டங்களில் பயன்படுத்தப்படும் உத்திகளை தமிழ் மற்றும் ஆங்கிலத்தில் சுலபமாக கற்றுத் தருகிறார்.'
              : 'Real production blueprints, client-tested presentation formulas, and zero fluff taught by an authorized visualization mentor.'}
          </p>
        </div>

        {/* Speaker Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 rounded-3xl p-5 sm:p-10 backdrop-blur-sm relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Portrait Column */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl shadow-blue-500/10 group">
                <img
                  src={SPEAKER_DATA.image}
                  alt="Ar. Karthik Sundaram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-center">
                  <span className="text-[11px] font-bold text-blue-400 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Certified BIM Specialist</span>
                  </span>
                </div>
              </div>

              {/* Language Proficiency Badge */}
              <div className="mt-3 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-medium text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{language === 'ta' ? 'பயிற்றுவிப்பு: தமிழ் & English' : 'Language: Tamil & English'}</span>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
                  Lead Instructor
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>Chennai, Tamil Nadu</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                {language === 'ta' ? SPEAKER_DATA.name.ta : SPEAKER_DATA.name.en}
              </h3>

              <p className="text-sm font-semibold text-blue-400 mb-3">
                {language === 'ta' ? SPEAKER_DATA.title.ta : SPEAKER_DATA.title.en}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {language === 'ta' ? SPEAKER_DATA.bio.ta : SPEAKER_DATA.bio.en}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
                {SPEAKER_DATA.stats.map((stat, idx) => (
                  <div key={idx} className="text-center md:text-left">
                    <span className="block text-xl sm:text-2xl font-black text-white font-mono">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium leading-tight line-clamp-2 mt-0.5">
                      {language === 'ta' ? stat.label.ta : stat.label.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
