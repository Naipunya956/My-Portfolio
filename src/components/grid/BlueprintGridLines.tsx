import React from 'react';

export const BlueprintGridLines: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16"
    >
      {/* 4 Architectural Vertical Hairline Columns across the screen */}
      <div className="w-full h-full grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-0 border-x border-[#111111]/10">
        <div className="border-r border-[#111111]/8 h-full relative">
          <span className="absolute top-4 left-1 text-[9px] font-mono text-[#111111]/25 select-none hidden lg:block">
            X:00
          </span>
        </div>
        <div className="border-r border-[#111111]/8 h-full hidden sm:block" />
        <div className="border-r border-[#111111]/8 h-full" />
        <div className="border-r border-[#111111]/8 h-full relative">
          <span className="absolute top-4 left-1 text-[9px] font-mono text-[#111111]/25 select-none hidden lg:block">
            X:33
          </span>
        </div>
        <div className="border-r border-[#111111]/8 h-full hidden sm:block" />
        <div className="border-r border-[#111111]/8 h-full hidden lg:block" />
        <div className="border-r border-[#0047AB]/20 h-full relative">
          {/* Subtle cobalt grid line interrupt */}
          <span className="absolute top-4 left-1 text-[9px] font-mono text-[#0047AB]/40 select-none hidden lg:block">
            AXIS::01
          </span>
        </div>
        <div className="border-r border-[#111111]/8 h-full hidden lg:block" />
        <div className="border-r border-[#111111]/8 h-full relative">
          <span className="absolute top-4 left-1 text-[9px] font-mono text-[#111111]/25 select-none hidden lg:block">
            X:75
          </span>
        </div>
        <div className="border-r border-[#111111]/8 h-full hidden sm:block" />
        <div className="border-r border-[#111111]/8 h-full" />
        <div className="h-full relative">
          <span className="absolute top-4 right-1 text-[9px] font-mono text-[#111111]/25 select-none hidden lg:block">
            X:100
          </span>
        </div>
      </div>
    </div>
  );
};
