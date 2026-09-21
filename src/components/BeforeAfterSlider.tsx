import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Eye, Layers, Sparkles, SlidersHorizontal, Sun, ZoomIn, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { BEFORE_AFTER_DATA } from '../data/content';
import { RenderBilingual } from '../utils/lang';

interface BeforeAfterSliderProps {
  language: Language;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ language }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <section id="comparison" className="py-10 sm:py-16 lg:py-20 bg-slate-950 relative overflow-hidden border-b border-slate-900">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-bold tracking-wider uppercase mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <RenderBilingual text={BEFORE_AFTER_DATA.badge} lang={language} />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            <RenderBilingual text={BEFORE_AFTER_DATA.title} lang={language} />
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            <RenderBilingual text={BEFORE_AFTER_DATA.description} lang={language} />
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-5xl mx-auto">
          {/* Quick Presets */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span>
                {language === 'ta'
                  ? 'ஸ்லைடரை இடது/வலதுபுறம் இழுத்துப் பார்க்கவும்:'
                  : language === 'blend'
                  ? 'Drag slider to compare real-time viewport (காட்சியை மாற்றுக):'
                  : 'Drag slider to compare real-time viewport:'}
              </span>
            </div>
          </div>

          {/* Image Container with Custom Handle */}
          <div
            ref={containerRef}
            id="before-after-viewport"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              if (e.touches[0]) handleMove(e.touches[0].clientX);
            }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-slate-800 select-none cursor-ew-resize group bg-slate-900"
          >
            {/* Base Image (AFTER: User's Attached Architectural House Enscape Render) */}
            <img
              src="/assets/after.jpg"
              alt="Enscape Real-Time Photorealistic Render of Modern Architectural Villa"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />

            {/* Top Layer (BEFORE: Raw Clay CAD Viewport of the drawing) clipped by sliderPosition */}
            <div
              className="absolute inset-0 select-none pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/assets/before.jpg"
                alt="Raw CAD Viewport Clay Model of the drawing"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              />
            </div>

            {/* Divider Line & Glow */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)] pointer-events-none z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Circular Draggable Thumb */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-blue-400 shadow-xl flex items-center justify-center text-blue-400 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-4 h-4 rotate-90" />
              </div>
            </div>

            {/* Labels overlay */}
            <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-white text-xs font-semibold shadow-lg">
                <RenderBilingual text={BEFORE_AFTER_DATA.beforeLabel} lang={language} />
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
              <span className="px-3 py-1.5 rounded-lg bg-blue-600/90 backdrop-blur-md border border-blue-400/80 text-white text-xs font-bold shadow-lg">
                <RenderBilingual text={BEFORE_AFTER_DATA.afterLabel} lang={language} />
              </span>
            </div>

            {/* Speed Benchmark Pill */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none hidden sm:block">
              <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-slate-700 text-xs text-slate-200 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>
                  {language === 'ta'
                    ? 'நேரடி ஒத்திசைவு (0 வினாடி காத்திருப்பு)'
                    : language === 'blend'
                    ? 'Live Sync Active • நேரடி ஒத்திசைவு'
                    : 'Live Sync Active (Instant Raytracing)'}
                </span>
              </div>
            </div>
          </div>

          {/* Under-slider Feature Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {BEFORE_AFTER_DATA.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-medium">
                  <RenderBilingual text={feature} lang={language} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
