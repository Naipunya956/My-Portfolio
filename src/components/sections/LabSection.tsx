import React, { useState } from 'react';
import { Hammer, Grid, FileText, RotateCcw } from 'lucide-react';

type LabTab = 'workbench' | 'sketchpad' | 'notes';

const PALETTE = [
  { name: 'Ink', color: '#1C1B29' },
  { name: 'Crimson', color: '#C93B43' },
  { name: 'Sky', color: '#8FD3F4' },
  { name: 'Meadow', color: '#4B9A4A' },
  { name: 'Gold', color: '#F2B705' },
];

const COLS = 16;
const ROWS = 10;

const createEmptyGrid = () => Array(ROWS * COLS).fill('#FFF8E7');

const createHeartPreset = () => {
  const grid = createEmptyGrid();
  const coords = [
    [2, 5], [2, 6], [2, 9], [2, 10],
    [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11],
    [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10], [4, 11],
    [5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [5, 10],
    [6, 6], [6, 7], [6, 8], [6, 9],
    [7, 7], [7, 8],
  ];
  coords.forEach(([r, c]) => {
    grid[r * COLS + c] = '#C93B43';
  });
  return grid;
};

const createStarPreset = () => {
  const grid = createEmptyGrid();
  const coords = [
    [1, 7], [1, 8],
    [2, 7], [2, 8],
    [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9], [3, 10], [3, 11],
    [4, 5], [4, 6], [4, 7], [4, 8], [4, 9], [4, 10],
    [5, 6], [5, 7], [5, 8], [5, 9],
    [6, 5], [6, 6], [6, 9], [6, 10],
    [7, 4], [7, 5], [7, 10], [7, 11],
  ];
  coords.forEach(([r, c]) => {
    grid[r * COLS + c] = '#F2B705';
  });
  return grid;
};

export const LabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>('workbench');
  const [pixels, setPixels] = useState<string[]>(() => createStarPreset());
  const [selectedColor, setSelectedColor] = useState<string>('#1C1B29');
  const [isDrawing, setIsDrawing] = useState<boolean>(false);

  const paintCell = (index: number) => {
    setPixels((prev) => {
      const next = [...prev];
      next[index] = next[index] === selectedColor ? '#FFF8E7' : selectedColor;
      return next;
    });
  };

  return (
    <section
      id="lab"
      className="world-colourable relative py-20 sm:py-28 px-4 sm:px-8 bg-lab-grid border-b-2 border-[#1C1B29]"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Heading */}
        <div className="reveal-up flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563EB]">
              Experimental Workspace
            </span>
            <h2 className="mt-2 font-serif font-extrabold text-4xl sm:text-5xl text-[#1C1B29] tracking-tight">
              THE LAB
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#4D4C60] max-w-md">
            A dedicated workspace reserved for upcoming projects and experiments.
          </p>
        </div>

        {/* Retro Desktop OS Window */}
        <div className="reveal-up frame-world bg-[#FFF8E7] overflow-hidden">
          {/* Desktop Window Titlebar */}
          <div className="bg-[#8FD3F4] border-b-2 border-[#1C1B29] px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-3.5 h-3.5 bg-[#C93B43] border-2 border-[#1C1B29]" />
                <span className="w-3.5 h-3.5 bg-[#F2B705] border-2 border-[#1C1B29]" />
                <span className="w-3.5 h-3.5 bg-[#4B9A4A] border-2 border-[#1C1B29]" />
              </div>
              <span className="font-mono text-xs sm:text-sm font-bold text-[#1C1B29]">
                lab_workspace.os
              </span>
            </div>

            {/* Working Mode Tabs */}
            <div className="flex items-center gap-1.5 bg-[#FFF8E7] p-1 border-2 border-[#1C1B29]">
              <button
                type="button"
                onClick={() => setActiveTab('workbench')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold cursor-pointer transition-colors whitespace-nowrap ${
                  activeTab === 'workbench'
                    ? 'bg-[#1C1B29] text-[#FFF8E7]'
                    : 'text-[#1C1B29] hover:bg-[#D4F0FC]'
                }`}
              >
                <Hammer size={13} />
                <span>Workbench</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('sketchpad')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold cursor-pointer transition-colors whitespace-nowrap ${
                  activeTab === 'sketchpad'
                    ? 'bg-[#1C1B29] text-[#FFF8E7]'
                    : 'text-[#1C1B29] hover:bg-[#D4F0FC]'
                }`}
              >
                <Grid size={13} />
                <span>Pixel Canvas</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('notes')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold cursor-pointer transition-colors whitespace-nowrap ${
                  activeTab === 'notes'
                    ? 'bg-[#1C1B29] text-[#FFF8E7]'
                    : 'text-[#1C1B29] hover:bg-[#D4F0FC]'
                }`}
              >
                <FileText size={13} />
                <span>Notes.txt</span>
              </button>
            </div>
          </div>

          {/* Window Body */}
          <div className="p-6 sm:p-10">
            {activeTab === 'workbench' && (
              <div className="space-y-8">
                {/* Illustrated "Under Construction" Banner Scene */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-2 border-dashed border-[#1C1B29]/35 bg-[#FAF5E6] p-6 sm:p-8">
                  <div className="lg:col-span-5 flex justify-center">
                    {/* Custom SVG Pixel Construction Sign & Workbench */}
                    <svg
                      viewBox="0 0 220 140"
                      shapeRendering="crispEdges"
                      className="w-56 sm:w-64 h-auto pixel-art"
                      aria-hidden="true"
                    >
                      {/* Shadow */}
                      <rect x="20" y="122" width="180" height="6" fill="#1C1B29" opacity="0.14" />

                      {/* Sawhorse Barricade */}
                      <rect x="28" y="88" width="6" height="34" fill="#1C1B29" />
                      <rect x="186" y="88" width="6" height="34" fill="#1C1B29" />
                      <rect x="22" y="72" width="176" height="20" fill="#F2B705" />
                      <rect x="22" y="70" width="176" height="2" fill="#1C1B29" />
                      <rect x="22" y="92" width="176" height="2" fill="#1C1B29" />
                      <rect x="20" y="72" width="2" height="20" fill="#1C1B29" />
                      <rect x="198" y="72" width="2" height="20" fill="#1C1B29" />

                      {/* Diagonal hazard stripes */}
                      <polygon points="36,72 52,72 40,92 24,92" fill="#1C1B29" />
                      <polygon points="74,72 90,72 78,92 62,92" fill="#1C1B29" />
                      <polygon points="112,72 128,72 116,92 100,92" fill="#1C1B29" />
                      <polygon points="150,72 166,72 154,92 138,92" fill="#1C1B29" />

                      {/* Traffic Cone */}
                      <rect x="148" y="54" width="26" height="4" fill="#C93B43" />
                      <rect x="152" y="42" width="18" height="12" fill="#E3646A" />
                      <rect x="155" y="46" width="12" height="4" fill="#FFF8E7" />
                      <rect x="156" y="34" width="10" height="8" fill="#C93B43" />
                      <rect x="144" y="58" width="34" height="4" fill="#1C1B29" />

                      {/* Pixel Blueprint Scroll & Beacon */}
                      <rect x="52" y="34" width="56" height="30" fill="#D4F0FC" />
                      <rect x="50" y="32" width="60" height="2" fill="#1C1B29" />
                      <rect x="50" y="64" width="60" height="2" fill="#1C1B29" />
                      <rect x="50" y="34" width="2" height="30" fill="#1C1B29" />
                      <rect x="108" y="34" width="2" height="30" fill="#1C1B29" />
                      <rect x="58" y="42" width="24" height="3" fill="#2563EB" />
                      <rect x="58" y="49" width="38" height="3" fill="#1C1B29" />
                      <rect x="58" y="56" width="18" height="3" fill="#C93B43" />

                      {/* Floating pixel sparks */}
                      <rect x="34" y="22" width="6" height="6" fill="#F2B705" />
                      <rect x="128" y="18" width="6" height="6" fill="#8FD3F4" />
                    </svg>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#C93B43]">
                      Under Construction
                    </span>
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1B29]">
                      Future Builds In Progress
                    </h3>
                    <p className="font-sans text-base text-[#4D4C60] leading-relaxed max-w-xl">
                      This workshop is intentionally reserved for upcoming software, AI/ML tools, and experimental web builds worth sharing here.
                    </p>
                  </div>
                </div>

                {/* Intentional Empty Reserved Slots (No Fake Projects) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['01', '02', '03'].map((slot) => (
                    <div
                      key={slot}
                      className="border-2 border-dashed border-[#1C1B29]/30 bg-[#FFF8E7] p-6 flex flex-col justify-between min-h-[168px]"
                    >
                      <div className="flex items-center justify-between font-mono text-xs text-[#4D4C60]">
                        <span className="font-bold text-[#1C1B29]">Slot {slot}</span>
                        <span>Reserved</span>
                      </div>

                      <div className="py-6">
                        <div className="h-2.5 w-2/3 bg-[#1C1B29]/10 mb-2.5" />
                        <div className="h-2.5 w-1/2 bg-[#1C1B29]/10" />
                      </div>

                      <span className="font-mono text-xs text-[#4D4C60]">
                        Space open for upcoming work
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sketchpad' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#1C1B29] mr-1">
                      Color:
                    </span>
                    {PALETTE.map((swatch) => (
                      <button
                        key={swatch.name}
                        type="button"
                        onClick={() => setSelectedColor(swatch.color)}
                        aria-label={`Select ${swatch.name} color`}
                        className={`w-7 h-7 border-2 border-[#1C1B29] cursor-pointer transition-transform ${
                          selectedColor === swatch.color
                            ? 'scale-110 ring-2 ring-[#2563EB] ring-offset-2'
                            : 'hover:scale-105'
                        }`}
                        style={{ backgroundColor: swatch.color }}
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <button
                      type="button"
                      onClick={() => setPixels(createStarPreset())}
                      className="px-3 py-1.5 border-2 border-[#1C1B29] bg-[#FFF8E7] hover:bg-[#F2B705] font-bold cursor-pointer"
                    >
                      Star
                    </button>
                    <button
                      type="button"
                      onClick={() => setPixels(createHeartPreset())}
                      className="px-3 py-1.5 border-2 border-[#1C1B29] bg-[#FFF8E7] hover:bg-[#FDE4DC] font-bold cursor-pointer"
                    >
                      Heart
                    </button>
                    <button
                      type="button"
                      onClick={() => setPixels(createEmptyGrid())}
                      className="inline-flex items-center gap-1 px-3 py-1.5 border-2 border-[#1C1B29] bg-[#FFF8E7] hover:bg-[#D4F0FC] font-bold cursor-pointer"
                    >
                      <RotateCcw size={12} />
                      <span>Clear</span>
                    </button>
                  </div>
                </div>

                {/* Interactive Pixel Grid */}
                <div
                  onMouseLeave={() => setIsDrawing(false)}
                  onMouseUp={() => setIsDrawing(false)}
                  className="grid border-2 border-[#1C1B29] bg-[#FFF8E7] max-w-2xl mx-auto select-none"
                  style={{
                    gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
                  }}
                >
                  {pixels.map((color, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onMouseDown={() => {
                        setIsDrawing(true);
                        paintCell(idx);
                      }}
                      onMouseEnter={() => {
                        if (isDrawing) paintCell(idx);
                      }}
                      aria-label={`Pixel cell ${idx + 1}`}
                      className="aspect-square border border-[#1C1B29]/10 cursor-crosshair transition-colors duration-75"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <p className="text-center font-mono text-xs text-[#4D4C60]">
                  Click or drag tiles to sketch on the lab grid.
                </p>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="max-w-2xl space-y-4 font-mono text-sm text-[#1C1B29] bg-[#FAF5E6] border-2 border-[#1C1B29] p-6">
                <p className="font-bold text-[#2563EB]">Notes.txt</p>
                <p className="font-sans text-base leading-relaxed text-[#1C1B29]">
                  I prefer keeping this section focused on future builds rather than older starter exercises. As new AI/ML and software engineering projects take shape, they will be added here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
