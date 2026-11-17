import React from 'react';

interface CoverProps {
  variant: 'context' | 'constraints' | 'reflection';
  number: string;
}

/**
 * Art-directed SVG editorial journal cover illustrations.
 * Each publication receives a distinct visual composition and palette.
 */
export const PublicationCover: React.FC<CoverProps> = ({ variant, number }) => {
  if (variant === 'context') {
    // Paper 01: How AI Chatbots Remember Context?
    return (
      <div className="relative w-full aspect-[4/3] bg-[#D4F0FC] border-2 border-[#1C1B29] overflow-hidden select-none">
        <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
          {/* Background paper grid */}
          <defs>
            <pattern id="grid-01" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1C1B29" strokeOpacity="0.08" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="320" height="240" fill="#D4F0FC" />
          <rect width="320" height="240" fill="url(#grid-01)" />

          {/* Stacked memory window frames */}
          <rect x="36" y="42" width="160" height="106" fill="#FFF8E7" stroke="#1C1B29" strokeWidth="2.5" />
          <rect x="36" y="42" width="160" height="20" fill="#8FD3F4" stroke="#1C1B29" strokeWidth="2.5" />
          <rect x="64" y="68" width="160" height="106" fill="#FFF8E7" stroke="#1C1B29" strokeWidth="2.5" />
          <rect x="64" y="68" width="160" height="20" fill="#2563EB" stroke="#1C1B29" strokeWidth="2.5" />
          <rect x="96" y="96" width="184" height="112" fill="#FFF8E7" stroke="#1C1B29" strokeWidth="2.5" />
          <rect x="96" y="96" width="184" height="22" fill="#1C1B29" />

          {/* Connected memory nodes inside front frame */}
          <circle cx="136" cy="148" r="10" fill="#8FD3F4" stroke="#1C1B29" strokeWidth="2" />
          <circle cx="188" cy="136" r="12" fill="#F2B705" stroke="#1C1B29" strokeWidth="2" />
          <circle cx="242" cy="158" r="10" fill="#C93B43" stroke="#1C1B29" strokeWidth="2" />
          <circle cx="172" cy="182" r="8" fill="#4B9A4A" stroke="#1C1B29" strokeWidth="2" />

          <line x1="145" y1="145" x2="177" y2="138" stroke="#1C1B29" strokeWidth="2" strokeDasharray="4 3" />
          <line x1="199" y1="140" x2="233" y2="154" stroke="#1C1B29" strokeWidth="2" />
          <line x1="183" y1="147" x2="174" y2="174" stroke="#1C1B29" strokeWidth="2" />
          <line x1="144" y1="154" x2="165" y2="177" stroke="#1C1B29" strokeWidth="2" strokeDasharray="3 3" />

          {/* Pixel header dots */}
          <rect x="104" y="104" width="6" height="6" fill="#F2B705" />
          <rect x="114" y="104" width="6" height="6" fill="#8FD3F4" />
          <rect x="124" y="104" width="6" height="6" fill="#C93B43" />

          {/* Journal Issue Stamp */}
          <rect x="24" y="182" width="54" height="28" fill="#1C1B29" />
          <text
            x="51"
            y="201"
            textAnchor="middle"
            fill="#FFF8E7"
            fontFamily="Space Mono, monospace"
            fontSize="13"
            fontWeight="700"
          >
            NO.{number}
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'constraints') {
    // Paper 02: Do Constraints Increase Creativity More Than Freedom?
    return (
      <div className="relative w-full aspect-[4/3] bg-[#FDE4DC] border-2 border-[#1C1B29] overflow-hidden select-none">
        <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
          <rect width="320" height="240" fill="#FDE4DC" />
          {/* Architectural drafting lines */}
          <line x1="40" y1="0" x2="40" y2="240" stroke="#1C1B29" strokeOpacity="0.14" strokeDasharray="4 4" />
          <line x1="280" y1="0" x2="280" y2="240" stroke="#1C1B29" strokeOpacity="0.14" strokeDasharray="4 4" />
          <line x1="0" y1="40" x2="320" y2="40" stroke="#1C1B29" strokeOpacity="0.14" strokeDasharray="4 4" />
          <line x1="0" y1="200" x2="320" y2="200" stroke="#1C1B29" strokeOpacity="0.14" strokeDasharray="4 4" />

          {/* Strict bounding box with corner crop handles */}
          <rect x="86" y="54" width="148" height="132" fill="#FFF8E7" stroke="#1C1B29" strokeWidth="2.5" />
          <rect x="80" y="48" width="12" height="12" fill="#C93B43" stroke="#1C1B29" strokeWidth="2" />
          <rect x="228" y="48" width="12" height="12" fill="#C93B43" stroke="#1C1B29" strokeWidth="2" />
          <rect x="80" y="180" width="12" height="12" fill="#C93B43" stroke="#1C1B29" strokeWidth="2" />
          <rect x="228" y="180" width="12" height="12" fill="#C93B43" stroke="#1C1B29" strokeWidth="2" />

          {/* Dynamic sculptural form emerging inside and slightly crossing the boundary */}
          <circle cx="160" cy="120" r="42" fill="#F2B705" stroke="#1C1B29" strokeWidth="2.5" />
          <polygon points="160,44 196,120 124,120" fill="#C93B43" stroke="#1C1B29" strokeWidth="2.5" />
          <rect x="136" y="120" width="48" height="48" fill="#8FD3F4" stroke="#1C1B29" strokeWidth="2.5" />
          <circle cx="160" cy="120" r="10" fill="#FFF8E7" stroke="#1C1B29" strokeWidth="2" />

          {/* Journal Issue Stamp */}
          <rect x="24" y="182" width="54" height="28" fill="#1C1B29" />
          <text
            x="51"
            y="201"
            textAnchor="middle"
            fill="#FFF8E7"
            fontFamily="Space Mono, monospace"
            fontSize="13"
            fontWeight="700"
          >
            NO.{number}
          </text>
        </svg>
      </div>
    );
  }

  // Paper 03: Reflection on A Few Useful Things to Know About Machine Learning
  return (
    <div className="relative w-full aspect-[4/3] bg-[#DFEFD8] border-2 border-[#1C1B29] overflow-hidden select-none">
      <svg viewBox="0 0 320 240" className="w-full h-full" aria-hidden="true">
        <rect width="320" height="240" fill="#DFEFD8" />
        {/* Notebook margin rule */}
        <line x1="60" y1="0" x2="60" y2="240" stroke="#C93B43" strokeOpacity="0.45" strokeWidth="1.5" />
        {[40, 68, 96, 124, 152, 180, 208].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#1C1B29" strokeOpacity="0.09" strokeWidth="1" />
        ))}

        {/* Coordinate axes & curved decision boundary illustration */}
        <rect x="84" y="38" width="196" height="154" fill="#FFF8E7" stroke="#1C1B29" strokeWidth="2.5" />
        <line x1="106" y1="170" x2="262" y2="170" stroke="#1C1B29" strokeWidth="2" />
        <line x1="106" y1="54" x2="106" y2="170" stroke="#1C1B29" strokeWidth="2" />

        {/* Non-linear decision curve */}
        <path
          d="M 110 156 Q 152 140 176 110 T 256 66"
          fill="none"
          stroke="#2B6134"
          strokeWidth="3.5"
        />

        {/* Sample data points */}
        <circle cx="132" cy="84" r="6" fill="#2563EB" stroke="#1C1B29" strokeWidth="1.8" />
        <circle cx="156" cy="74" r="6" fill="#2563EB" stroke="#1C1B29" strokeWidth="1.8" />
        <circle cx="138" cy="112" r="6" fill="#2563EB" stroke="#1C1B29" strokeWidth="1.8" />

        <rect x="202" y="132" width="11" height="11" fill="#F2B705" stroke="#1C1B29" strokeWidth="1.8" />
        <rect x="226" y="114" width="11" height="11" fill="#F2B705" stroke="#1C1B29" strokeWidth="1.8" />
        <rect x="182" y="146" width="11" height="11" fill="#F2B705" stroke="#1C1B29" strokeWidth="1.8" />

        {/* Journal Issue Stamp */}
        <rect x="24" y="182" width="54" height="28" fill="#1C1B29" />
        <text
          x="51"
          y="201"
          textAnchor="middle"
          fill="#FFF8E7"
          fontFamily="Space Mono, monospace"
          fontSize="13"
          fontWeight="700"
        >
          NO.{number}
        </text>
      </svg>
    </div>
  );
};
