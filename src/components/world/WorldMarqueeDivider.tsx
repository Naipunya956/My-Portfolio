import React from 'react';
import { PixelStar } from './PixelSprites';

interface WorldMarqueeDividerProps {
  items: string[];
  variant?: 'crimson' | 'meadow';
}

export const WorldMarqueeDivider: React.FC<WorldMarqueeDividerProps> = ({
  items,
  variant = 'crimson',
}) => {
  const borderBg =
    variant === 'crimson'
      ? 'bg-[#C93B43] border-y-2 border-[#1C1B29]'
      : 'bg-[#2B6134] border-y-2 border-[#1C1B29]';

  const bandBg = variant === 'crimson' ? 'bg-[#FFF8E7]' : 'bg-[#FAF5E6]';
  const textColor = variant === 'crimson' ? 'text-[#C93B43]' : 'text-[#2B6134]';

  // Repeat items enough times for seamless infinite loop
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`${borderBg} world-colourable py-2 overflow-hidden select-none`} aria-hidden="true">
      <div className={`${bandBg} border-y-2 border-[#1C1B29] py-2 overflow-hidden`}>
        <div className="animate-marquee flex items-center gap-6">
          {loopItems.map((label, idx) => (
            <div key={`${label}-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className={`font-mono text-xs sm:text-sm font-bold tracking-wider uppercase ${textColor}`}>
                {label}
              </span>
              <PixelStar className="w-3.5 h-3.5 shrink-0" color={variant === 'crimson' ? '#C93B43' : '#2B6134'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
