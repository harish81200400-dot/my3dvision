import React from 'react';
import {
  Zap,
  SunMedium,
  Layers,
  Glasses,
  Film,
  Briefcase,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { Language } from '../types';
import { HIGHLIGHTS_DATA } from '../data/content';
import { RenderBilingual } from '../utils/lang';

interface HighlightsProps {
  language: Language;
  onRegisterClick: () => void;
}

export const Highlights: React.FC<HighlightsProps> = ({ language, onRegisterClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-blue-400" />;
      case 'SunMedium':
        return <SunMedium className="w-6 h-6 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-blue-400" />;
      case 'Glasses':
        return <Glasses className="w-6 h-6 text-purple-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-emerald-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="highlights" className="py-10 sm:py-16 lg:py-20 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ta' ? 'நீங்கள் கற்கும் முக்கிய நுட்பங்கள்' : 'CORE WEBINAR HIGHLIGHTS'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'ta' ? (
              <span>கட்டிடக்கலை ரெண்டரிங்கில் புதிய புரட்சி</span>
            ) : (
              <span>Why Modern Studios Rely on Enscape Daily</span>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'ta'
              ? 'பாரம்பரிய ரெண்டரிங் சாப்ட்வேர்களில் பல மணிநேரம் காத்திருக்கும் காலத்தை விடைபெறுங்கள். 6 முக்கிய தூண்களின் மூலம் உங்கள் வேலையை 10 மடங்கு வேகப்படுத்துங்கள்.'
              : 'Say goodbye to overnight render queues and complex node setups. Experience instant photorealism directly connected to your favorite CAD software.'}
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {HIGHLIGHTS_DATA.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  <RenderBilingual text={item.title} lang={language} />
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  <RenderBilingual text={item.description} lang={language} />
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs text-slate-500 group-hover:text-blue-400 transition-colors">
                <span className="font-semibold">
                  {language === 'ta' ? 'விரிவான நேரடி செயல்முறை விளக்கம்' : 'Hands-on live demo included'}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
