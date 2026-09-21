/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Speaker } from './components/Speaker';
import { Bonuses } from './components/Bonuses';
import { RegistrationForm } from './components/RegistrationForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('blend');

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Main App Navigation */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onRegisterClick={scrollToRegister}
      />

      {/* Main Landing Page Content */}
      <main>
        {/* 1. Hero Section with Live Countdown & Highlights */}
        <Hero language={language} onRegisterClick={scrollToRegister} />

        {/* 2. Interactive Before & After Render Slider (CAD Clay Viewport vs Photorealistic Enscape) */}
        <BeforeAfterSlider language={language} />

        {/* 3. Keynote Speaker & Mentor Profile */}
        <Speaker language={language} />

        {/* 6. Exclusive Attendee Free Bonuses worth ₹10,900+ */}
        <Bonuses language={language} onRegisterClick={scrollToRegister} />

        {/* 7. Registration Form & Instant Boarding Pass Generator */}
        <RegistrationForm language={language} />

        {/* 9. FAQ Section in Tamil and English */}
        <FaqSection language={language} />
      </main>

      {/* Global Footer */}
      <Footer language={language} />

      {/* Mobile Sticky Quick Register Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-2xl">
        <button
          onClick={scrollToRegister}
          className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-black rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all touch-manipulation cursor-pointer"
        >
          <span>
            {language === 'ta'
              ? 'இடத்தை பதிவு செய்க — ₹499'
              : language === 'blend'
              ? 'Book Seat at ₹499 • பதிவு'
              : 'Book Seat at ₹499'}
          </span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </button>
      </div>
    </div>
  );
}
