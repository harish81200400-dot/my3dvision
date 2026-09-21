import React from 'react';
import { BilingualText, Language } from '../types';

export function getBilingualString(text: BilingualText, lang: Language): string {
  if (lang === 'ta') {
    return text.ta;
  }
  if (lang === 'dual') {
    return `${text.ta} (${text.en})`;
  }
  if (lang === 'blend') {
    return `${text.en} (${text.ta})`;
  }
  return text.en;
}

export function RenderBilingual({
  text,
  lang,
  className = '',
  secondaryClassName = 'text-xs text-slate-400 font-normal block mt-0.5',
}: {
  text: BilingualText;
  lang: Language;
  className?: string;
  secondaryClassName?: string;
}): React.ReactElement {
  if (lang === 'en') {
    return <span className={className}>{text.en}</span>;
  }

  if (lang === 'ta') {
    return <span className={className}>{text.ta}</span>;
  }

  if (lang === 'dual') {
    // Dual mode: show primary Tamil with stylish English subtitle/counterpart
    return (
      <span className={`inline-flex flex-col ${className}`}>
        <span>{text.ta}</span>
        <span className={secondaryClassName}>{text.en}</span>
      </span>
    );
  }

  // Blend mode (40% Tamil + 60% English): 
  // Crisp professional English headline (60%) paired with intuitive Tamil subtitle (40%)
  return (
    <span className={`inline-flex flex-col ${className}`}>
      <span>{text.en}</span>
      <span className={`${secondaryClassName} text-blue-300/90 font-medium tracking-normal mt-0.5`}>
        {text.ta}
      </span>
    </span>
  );
}
