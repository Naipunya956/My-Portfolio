import React from 'react';

interface SpriteProps {
  className?: string;
}

/**
 * User's signature pixel-art protagonist with transparent backdrop.
 * Supports Hero standing pose (holding laptop) and Footer cozy campfire goodbye pose.
 * Automatically transitions from grayscale in monochrome state to full colour via .world-colourable.
 */
export const PixelCharacter: React.FC<SpriteProps & { waving?: boolean }> = ({
  className = '',
  waving = false,
}) => (
  <img
    src={waving ? '/assets/aistudio/pixel_character_footer.png' : '/assets/aistudio/pixel_character.png'}
    alt={
      waving
        ? 'Naipunya Addula pixel character sitting on a log holding a warm mug and waving goodbye with her sleeping cat'
        : 'Naipunya Addula pixel character holding a laptop with cat and coding stars'
    }
    referrerPolicy="no-referrer"
    className={`pixel-art object-contain select-none world-colourable ${className}`}
  />
);

/**
 * Crisp retro stepped pixel cloud with sky shading
 */
export const PixelCloud: React.FC<SpriteProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 32 16"
    shapeRendering="crispEdges"
    className={`pixel-art ${className}`}
    aria-hidden="true"
  >
    <rect x="8" y="2" width="10" height="2" fill="#FFFFFF" />
    <rect x="5" y="4" width="18" height="2" fill="#FFFFFF" />
    <rect x="2" y="6" width="26" height="4" fill="#FFFFFF" />
    <rect x="0" y="10" width="32" height="4" fill="#FFFFFF" />
    <rect x="2" y="13" width="28" height="2" fill="#D4F0FC" />
    <rect x="8" y="1" width="10" height="1" fill="#1C1B29" opacity="0.22" />
    <rect x="2" y="15" width="28" height="1" fill="#1C1B29" opacity="0.22" />
  </svg>
);

/**
 * Pixel flower that blooms with crimson/pink/gold petals when colour enters the world
 */
export const PixelFlower: React.FC<
  SpriteProps & { petalColor?: string; centerColor?: string }
> = ({
  className = '',
  petalColor = '#E3646A',
  centerColor = '#F2B705',
}) => (
  <svg
    viewBox="0 0 12 16"
    shapeRendering="crispEdges"
    className={`pixel-art world-colourable ${className}`}
    aria-hidden="true"
  >
    {/* Stem & leaves */}
    <rect x="5" y="7" width="2" height="9" fill="#2B6134" />
    <rect x="2" y="11" width="3" height="2" fill="#4B9A4A" />
    <rect x="7" y="10" width="3" height="2" fill="#4B9A4A" />
    {/* Petals */}
    <rect x="4" y="1" width="4" height="2" fill={petalColor} />
    <rect x="4" y="6" width="4" height="2" fill={petalColor} />
    <rect x="2" y="3" width="2" height="3" fill={petalColor} />
    <rect x="8" y="3" width="2" height="3" fill={petalColor} />
    {/* Center */}
    <rect x="4" y="3" width="4" height="3" fill={centerColor} />
  </svg>
);

/**
 * Mario-inspired interactive pixel Question Block
 */
export const PixelQuestionBlock: React.FC<{
  active?: boolean;
  className?: string;
}> = ({ active = false, className = '' }) => (
  <svg
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    className={`pixel-art world-colourable ${className}`}
    aria-hidden="true"
  >
    <rect x="1" y="0" width="14" height="1" fill="#1C1B29" />
    <rect x="1" y="15" width="14" height="1" fill="#1C1B29" />
    <rect x="0" y="1" width="1" height="14" fill="#1C1B29" />
    <rect x="15" y="1" width="1" height="14" fill="#1C1B29" />

    <rect
      x="1"
      y="1"
      width="14"
      height="14"
      fill={active ? '#D4B483' : '#F2B705'}
    />
    <rect
      x="1"
      y="1"
      width="13"
      height="1"
      fill={active ? '#EFE0C4' : '#FFE066'}
    />
    <rect
      x="1"
      y="1"
      width="1"
      height="13"
      fill={active ? '#EFE0C4' : '#FFE066'}
    />
    <rect
      x="2"
      y="14"
      width="13"
      height="1"
      fill={active ? '#9C7E54' : '#C98A00'}
    />
    <rect
      x="14"
      y="2"
      width="1"
      height="13"
      fill={active ? '#9C7E54' : '#C98A00'}
    />

    <rect x="2" y="2" width="1" height="1" fill="#1C1B29" />
    <rect x="13" y="2" width="1" height="1" fill="#1C1B29" />
    <rect x="2" y="13" width="1" height="1" fill="#1C1B29" />
    <rect x="13" y="13" width="1" height="1" fill="#1C1B29" />

    {!active ? (
      <>
        <rect x="6" y="4" width="4" height="1" fill="#FFF8E7" />
        <rect x="5" y="5" width="2" height="2" fill="#FFF8E7" />
        <rect x="9" y="5" width="2" height="2" fill="#FFF8E7" />
        <rect x="7" y="7" width="3" height="2" fill="#FFF8E7" />
        <rect x="7" y="9" width="2" height="1" fill="#FFF8E7" />
        <rect x="7" y="11" width="2" height="2" fill="#FFF8E7" />
      </>
    ) : (
      <>
        <rect x="7" y="4" width="2" height="8" fill="#FFF8E7" />
        <rect x="4" y="7" width="8" height="2" fill="#FFF8E7" />
      </>
    )}
  </svg>
);

/**
 * Pixel star collectible
 */
export const PixelStar: React.FC<SpriteProps & { color?: string }> = ({
  className = '',
  color = '#F2B705',
}) => (
  <svg
    viewBox="0 0 12 12"
    shapeRendering="crispEdges"
    className={`pixel-art world-colourable ${className}`}
    aria-hidden="true"
  >
    <rect x="5" y="1" width="2" height="10" fill={color} />
    <rect x="1" y="5" width="10" height="2" fill={color} />
    <rect x="3" y="3" width="6" height="6" fill={color} />
    <rect x="4" y="4" width="4" height="4" fill="#FFF8E7" />
  </svg>
);

/**
 * Pixel pine tree for meadow and dusk horizon landscapes
 */
export const PixelPineTree: React.FC<SpriteProps & { dark?: boolean }> = ({
  className = '',
  dark = false,
}) => {
  const leafLight = dark ? '#243B32' : '#6BBF59';
  const leafMid = dark ? '#1A2B26' : '#4B9A4A';
  const leafDeep = dark ? '#111C1A' : '#2B6134';
  return (
    <svg
      viewBox="0 0 16 24"
      shapeRendering="crispEdges"
      className={`pixel-art world-colourable ${className}`}
      aria-hidden="true"
    >
      <rect x="7" y="1" width="2" height="3" fill={leafLight} />
      <rect x="5" y="4" width="6" height="3" fill={leafLight} />
      <rect x="3" y="7" width="10" height="4" fill={leafMid} />
      <rect x="2" y="11" width="12" height="4" fill={leafMid} />
      <rect x="1" y="15" width="14" height="4" fill={leafDeep} />
      <rect x="6" y="19" width="4" height="5" fill="#5C3D2E" />
    </svg>
  );
};

/**
 * Pixel campfire for twilight ending horizon
 */
export const PixelCampfire: React.FC<SpriteProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    className={`pixel-art world-colourable ${className}`}
    aria-hidden="true"
  >
    <rect x="7" y="2" width="2" height="3" fill="#F2B705" />
    <rect x="5" y="5" width="6" height="3" fill="#E3646A" />
    <rect x="6" y="4" width="4" height="5" fill="#F2B705" />
    <rect x="7" y="7" width="2" height="3" fill="#FFF8E7" />
    <rect x="3" y="11" width="10" height="2" fill="#5C3D2E" />
    <rect x="2" y="13" width="12" height="2" fill="#3B241A" />
    <rect x="4" y="3" width="1" height="1" fill="#F2B705" />
    <rect x="11" y="4" width="1" height="1" fill="#E3646A" />
  </svg>
);

/**
 * Crisp pixel retro desk with monitor & lamp for About / Lab
 */
export const PixelDeskSetup: React.FC<SpriteProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 36 28"
    shapeRendering="crispEdges"
    className={`pixel-art world-colourable ${className}`}
    aria-hidden="true"
  >
    <rect x="10" y="4" width="16" height="11" fill="#1C1B29" />
    <rect x="11" y="5" width="14" height="9" fill="#8FD3F4" />
    <rect x="12" y="7" width="6" height="1" fill="#1C1B29" />
    <rect x="12" y="9" width="10" height="1" fill="#1C1B29" />
    <rect x="12" y="11" width="5" height="1" fill="#C93B43" />
    <rect x="16" y="15" width="4" height="2" fill="#1C1B29" />
    <rect x="14" y="17" width="8" height="1" fill="#1C1B29" />

    <rect x="4" y="9" width="4" height="3" fill="#F2B705" />
    <rect x="5" y="12" width="1" height="6" fill="#1C1B29" />
    <rect x="3" y="17" width="5" height="1" fill="#1C1B29" />

    <rect x="28" y="14" width="4" height="4" fill="#C93B43" />
    <rect x="32" y="15" width="1" height="2" fill="#C93B43" />
    <rect x="29" y="11" width="1" height="2" fill="#FFFFFF" opacity="0.8" />

    <rect x="2" y="18" width="32" height="2" fill="#1C1B29" />
    <rect x="3" y="19" width="30" height="2" fill="#D9A066" />
    <rect x="4" y="21" width="2" height="6" fill="#1C1B29" />
    <rect x="30" y="21" width="2" height="6" fill="#1C1B29" />
  </svg>
);
