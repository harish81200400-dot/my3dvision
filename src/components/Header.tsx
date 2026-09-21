import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, Calendar, Clock, ArrowRight, Menu, X, Check } from 'lucide-react';
import { Language } from '../types';
import { EVENT_DETAILS } from '../data/content';
import { Logo } from './Logo';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onRegisterClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#overview', label: { en: 'Overview', ta: 'கண்ணோட்டம்' } },
    { href: '#comparison', label: { en: 'Before & After', ta: 'ஒப்பீடு' } },
    { href: '#speaker', label: { en: 'Trainer', ta: 'பயிற்றுவிப்பாளர்' } },
    { href: '#bonuses', label: { en: 'Free Bonuses', ta: 'இலவச பரிசுகள்' } },
  ];

  return (
    <>
      {/* Main Navigation */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl'
            : 'bg-slate-950/50 backdrop-blur-sm border-b border-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 p-1 flex items-center justify-center group-hover:border-blue-500/50 transition-colors shadow-lg shadow-blue-500/10">
              <Logo size={32} showText={false} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  My<span className="text-blue-400">3D</span>Vision
                </span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Enscape
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-normal">
                {language === 'ta'
                  ? 'நிகழ்நேர 3D ரெண்டரிங் வெபினார்'
                  : language === 'blend'
                  ? 'Real-Time 3D Rendering & VR • நேரலை பயிற்சி'
                  : 'Real-Time 3D Rendering & VR Masterclass'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-400 transition-colors py-1"
              >
                {language === 'ta'
                  ? link.label.ta
                  : language === 'blend'
                  ? `${link.label.en}`
                  : link.label.en}
              </a>
            ))}
          </nav>

          {/* Header Action & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* CTA Button */}
            <button
              id="header-register-button"
              onClick={onRegisterClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>
                {language === 'ta'
                  ? 'பதிவு — ₹499'
                  : language === 'blend'
                  ? 'Book Seat • ₹499'
                  : 'Book Seat • ₹499'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg bg-slate-900/60 text-slate-300 hover:text-blue-400 hover:bg-slate-900"
                >
                  {language === 'ta' ? link.label.ta : link.label.en}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span>{language === 'ta' ? 'தேர்ந்தெடுக்கப்பட்ட மொழி:' : 'Language:'}</span>
                <span className="font-bold text-blue-400">
                  {language === 'ta'
                    ? 'தமிழ் (100%)'
                    : language === 'blend'
                    ? '40% தமிழ் + 60% Eng'
                    : language === 'dual'
                    ? 'Dual (இருமொழி)'
                    : 'English (100%)'}
                </span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-blue-600/25"
              >
                <span>
                  {language === 'ta'
                    ? 'பதிவு செய்க — ₹499'
                    : language === 'blend'
                    ? 'Book Pass • ₹499'
                    : 'Book Pass at ₹499'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
