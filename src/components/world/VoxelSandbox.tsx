import React, { useState } from 'react';
import { Box, RefreshCcw, Github, Plus, Trash2 } from 'lucide-react';

interface VoxelBlock {
  id: string;
  x: number;
  y: number;
  z: number;
  type: 'slate' | 'cobalt' | 'pale' | 'dark';
}

export const VoxelSandbox: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'slate' | 'cobalt' | 'pale' | 'dark'>('cobalt');
  const [mode, setMode] = useState<'build' | 'destroy'>('build');
  const [blocks, setBlocks] = useState<VoxelBlock[]>([
    { id: '1', x: 0, y: 0, z: 0, type: 'dark' },
    { id: '2', x: 1, y: 0, z: 0, type: 'dark' },
    { id: '3', x: 2, y: 0, z: 0, type: 'dark' },
    { id: '4', x: 0, y: 0, z: 1, type: 'dark' },
    { id: '5', x: 1, y: 0, z: 1, type: 'pale' },
    { id: '6', x: 2, y: 0, z: 1, type: 'pale' },
    { id: '7', x: 0, y: 0, z: 2, type: 'dark' },
    { id: '8', x: 1, y: 0, z: 2, type: 'pale' },
    { id: '9', x: 2, y: 0, z: 2, type: 'cobalt' },
    // Upper layer
    { id: '10', x: 1, y: 1, z: 1, type: 'slate' },
    { id: '11', x: 1, y: 2, z: 1, type: 'cobalt' },
    { id: '12', x: 2, y: 1, z: 2, type: 'slate' },
  ]);

  const blockColors = {
    slate: { top: '#CCCCCC', left: '#AAAAAA', right: '#888888', border: '#111111', label: 'Concrete' },
    cobalt: { top: '#0047AB', left: '#003380', right: '#002255', border: '#111111', label: 'Cobalt' },
    pale: { top: '#DCE7F5', left: '#BFD4EE', right: '#9BBDE2', border: '#111111', label: 'Pale' },
    dark: { top: '#333333', left: '#222222', right: '#111111', border: '#000000', label: 'Obsidian' },
  };

  const handleGridClick = (gx: number, gz: number) => {
    if (mode === 'destroy') {
      const atPos = blocks.filter((b) => b.x === gx && b.z === gz);
      if (atPos.length > 0) {
        const maxY = Math.max(...atPos.map((b) => b.y));
        setBlocks(blocks.filter((b) => !(b.x === gx && b.z === gz && b.y === maxY)));
      }
    } else {
      const atPos = blocks.filter((b) => b.x === gx && b.z === gz);
      const newY = atPos.length > 0 ? Math.max(...atPos.map((b) => b.y)) + 1 : 0;
      if (newY < 4) {
        setBlocks([
          ...blocks,
          {
            id: `${Date.now()}-${Math.random()}`,
            x: gx,
            y: newY,
            z: gz,
            type: selectedType,
          },
        ]);
      }
    }
  };

  const resetWorld = () => {
    setBlocks([
      { id: '1', x: 0, y: 0, z: 0, type: 'dark' },
      { id: '2', x: 1, y: 0, z: 0, type: 'dark' },
      { id: '3', x: 2, y: 0, z: 0, type: 'dark' },
      { id: '4', x: 0, y: 0, z: 1, type: 'dark' },
      { id: '5', x: 1, y: 0, z: 1, type: 'pale' },
      { id: '6', x: 2, y: 0, z: 1, type: 'pale' },
      { id: '7', x: 0, y: 0, z: 2, type: 'dark' },
      { id: '8', x: 1, y: 0, z: 2, type: 'pale' },
      { id: '9', x: 2, y: 0, z: 2, type: 'cobalt' },
      { id: '10', x: 1, y: 1, z: 1, type: 'slate' },
      { id: '11', x: 1, y: 2, z: 1, type: 'cobalt' },
      { id: '12', x: 2, y: 1, z: 2, type: 'slate' },
    ]);
  };

  const sortedBlocks = [...blocks].sort((a, b) => {
    const depthA = a.x + a.z + a.y * 0.1;
    const depthB = b.x + b.z + b.y * 0.1;
    return depthA - depthB;
  });

  return (
    <div className="w-full bg-[#F5F1E8] border border-[#111111]/25 text-[#111111] font-mono text-xs">
      {/* Voxel Header */}
      <div className="bg-[#111111] text-[#F5F1E8] px-4 py-2.5 flex items-center justify-between border-b border-[#111111]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#0047AB] inline-block" />
          <span className="font-bold tracking-wider text-[11px]">
            PYCRAFT // URSINA_ENGINE_SIMULATOR
          </span>
        </div>
        <a
          href="https://github.com/Naipunya956/PyCraft"
          target="_blank"
          rel="noreferrer"
          className="text-[#F5F1E8]/70 hover:text-white transition-colors"
          title="View PyCraft on GitHub"
        >
          <Github size={13} />
        </a>
      </div>

      {/* Isometric Stage */}
      <div className="p-5 sm:p-6 space-y-4">
        <div className="relative h-56 sm:h-64 bg-white/60 border border-[#111111]/20 flex items-center justify-center overflow-hidden">
          <svg className="w-full h-full" viewBox="-120 -80 240 180">
            {/* Grid Floor */}
            {[0, 1, 2].map((x) =>
              [0, 1, 2].map((z) => {
                const isoX = (x - z) * 28;
                const isoY = (x + z) * 14 + 20;
                return (
                  <polygon
                    key={`grid-${x}-${z}`}
                    points={`${isoX},${isoY - 14} ${isoX + 28},${isoY} ${isoX},${isoY + 14} ${isoX - 28},${isoY}`}
                    fill="none"
                    stroke="#111111"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    className="cursor-pointer hover:fill-[#DCE7F5] transition-colors"
                    onClick={() => handleGridClick(x, z)}
                  />
                );
              })
            )}

            {/* Voxel Cubes */}
            {sortedBlocks.map((b) => {
              const c = blockColors[b.type];
              const isoX = (b.x - b.z) * 28;
              const isoY = (b.x + b.z) * 14 - b.y * 22 + 20;
              const s = 28;
              const h = 22;

              return (
                <g
                  key={b.id}
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => handleGridClick(b.x, b.z)}
                >
                  <polygon
                    points={`${isoX},${isoY - h / 2 - 4} ${isoX + s},${isoY - h / 2 + 10} ${isoX},${isoY - h / 2 + 24} ${isoX - s},${isoY - h / 2 + 10}`}
                    fill={c.top}
                    stroke={c.border}
                    strokeWidth="1"
                  />
                  <polygon
                    points={`${isoX - s},${isoY - h / 2 + 10} ${isoX},${isoY - h / 2 + 24} ${isoX},${isoY + h / 2 + 24} ${isoX - s},${isoY + h / 2 + 10}`}
                    fill={c.left}
                    stroke={c.border}
                    strokeWidth="1"
                  />
                  <polygon
                    points={`${isoX},${isoY - h / 2 + 24} ${isoX + s},${isoY - h / 2 + 10} ${isoX + s},${isoY + h / 2 + 10} ${isoX},${isoY + h / 2 + 24}`}
                    fill={c.right}
                    stroke={c.border}
                    strokeWidth="1"
                  />
                </g>
              );
            })}
          </svg>

          <div className="absolute top-2 left-2 bg-[#111111] text-[#F5F1E8] px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider">
            {mode === 'build' ? 'CLICK GRID TO PLACE' : 'CLICK TOWER TO DESTROY'}
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-[#111111]/50 uppercase tracking-wider mr-1">MATERIAL:</span>
            {(['cobalt', 'dark', 'pale', 'slate'] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setSelectedType(t);
                  setMode('build');
                }}
                className={`px-2.5 py-1 text-xs uppercase tracking-wider font-mono border transition-all ${
                  selectedType === t && mode === 'build'
                    ? 'bg-[#111111] text-[#F5F1E8] border-[#111111] font-bold'
                    : 'bg-transparent text-[#111111] border-[#111111]/25 hover:border-[#0047AB]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMode(mode === 'build' ? 'destroy' : 'build')}
              className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider border flex items-center gap-1 transition-all ${
                mode === 'destroy'
                  ? 'bg-[#0047AB] text-white border-[#0047AB] font-bold'
                  : 'bg-transparent text-[#111111] border-[#111111]/25'
              }`}
            >
              {mode === 'destroy' ? <Trash2 size={11} /> : <Plus size={11} />}
              <span>{mode === 'destroy' ? 'DESTROY' : 'BUILD'}</span>
            </button>

            <button
              onClick={resetWorld}
              className="p-1 border border-[#111111]/25 text-[#111111]/60 hover:text-[#0047AB] transition-colors"
              title="Reset Sandbox"
            >
              <RefreshCcw size={12} />
            </button>
          </div>
        </div>

        {/* Specs */}
        <div className="pt-2 border-t border-[#111111]/10 flex items-center justify-between text-[11px] text-[#111111]/60">
          <span>RAYCAST PHYSICS · VOXEL PIPELINE</span>
          <span className="text-[#0047AB] font-bold">{blocks.length} VOXELS RENDERED</span>
        </div>
      </div>
    </div>
  );
};
