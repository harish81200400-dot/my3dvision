import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TESTIMONIALS_DATA } from '../data/content';
import { RenderBilingual } from '../utils/lang';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  return (
    <section id="testimonials" className="py-10 sm:py-16 lg:py-20 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">
            <Star className="w-3.5 h-3.5 fill-blue-400" />
            <span>{language === 'ta' ? 'முந்தைய பங்கேற்பாளர்களின் கருத்துக்கள்' : 'VERIFIED ATTENDEE EXPERIENCES'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'ta' ? (
              <span>தமிழகத்தின் முன்னணி ஆர்கிடெக்ட்கள் & மாணவர்கள் பகிர்ந்த அனுபவம்</span>
            ) : (
              <span>What Designers Across Tamil Nadu Say About Our Masterclasses</span>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'ta'
              ? 'சென்னை, கோவை, மதுரை மற்றும் திருச்சி நகரங்களில் உள்ள பல ஸ்டுடியோக்கள் இந்த நுட்பங்களை செயல்படுத்தி நேரத்தையும் உழைப்பையும் மிச்சப்படுத்தியுள்ளனர்.'
              : 'Real outcomes from studio principals, freelance 3D visualizers, and university jury toppers.'}
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 flex flex-col justify-between transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-blue-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "<RenderBilingual text={item.quote} lang={language} />"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-blue-400/90 font-medium">
                    <RenderBilingual text={item.role} lang={language} />
                  </p>
                  <p className="text-[11px] text-slate-500">{item.firmOrCollege}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    <RenderBilingual text={item.location} lang={language} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
