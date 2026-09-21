import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, ChevronDown, ChevronUp, BookOpen, Layers } from 'lucide-react';
import { Language } from '../types';
import { AGENDA_DATA, EVENT_DETAILS } from '../data/content';
import { RenderBilingual } from '../utils/lang';

interface AgendaProps {
  language: Language;
}

export const Agenda: React.FC<AgendaProps> = ({ language }) => {
  const [expandedId, setExpandedId] = useState<string>('session-1');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="curriculum" className="py-10 sm:py-16 lg:py-20 bg-slate-950 relative border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'ta' ? '2 மணி நேர நேரலை பாடத்திட்டம்' : 'STEP-BY-STEP LIVE CURRICULUM'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {language === 'ta' ? (
              <span>வெபினார் அட்டவணை & விரிவான தலைப்புகள்</span>
            ) : (
              <span>What You Will Master in 2 Action-Packed Hours</span>
            )}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'ta'
              ? 'அடிப்படை அமைப்பு முதல் கிளையண்ட் பிரசன்டேஷன் மற்றும் ஃப்ரீலான்சிங் வரை, ஒவ்வொரு நிமிடமும் பயனுள்ள நடைமுறை பயிற்சிகளால் நிரப்பப்பட்டுள்ளது.'
              : 'A structured blueprint taking you from blank SketchUp/Revit screens to hyper-realistic VR walkthroughs and high-paying freelance visualization contracts.'}
          </p>
        </div>

        {/* Timeline Modules Stack */}
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {AGENDA_DATA.map((module, index) => {
            const isExpanded = expandedId === module.id;

            return (
              <div
                key={module.id}
                id={`module-card-${module.id}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-slate-900/90 border-blue-500/50 shadow-xl shadow-blue-500/5'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                {/* Module Header / Bar */}
                <button
                  onClick={() => toggleExpand(module.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 flex-1">
                    {/* Time pill */}
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{module.time}</span>
                      <span className="text-slate-500">({module.duration})</span>
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {module.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                            <RenderBilingual text={module.badge} lang={language} />
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400">
                        <RenderBilingual text={module.title} lang={language} />
                      </h3>
                    </div>
                  </div>

                  {/* Expand / Collapse Icon */}
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-1 sm:mt-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content Body */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/60 bg-slate-950/40">
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      <RenderBilingual text={module.description} lang={language} />
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs uppercase font-bold tracking-wider text-blue-400">
                        {language === 'ta' ? 'முக்கிய கற்கும் புள்ளிகள்:' : 'Key Practical Takeaways:'}
                      </p>
                      <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-300">
                        {(language === 'ta' ? module.keyPoints.ta : module.keyPoints.en).map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
