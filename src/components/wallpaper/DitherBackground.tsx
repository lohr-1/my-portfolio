import React from "react";

export default function DitherBackground() {
  return (
    <div className="dither-background" aria-hidden>
      {/* SVG noise layer */}
      <svg
        className="dither-background__svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 600"
      >
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise-filter)" opacity="0.08" />
      </svg>

      {/* soft green tint to colorize the noise */}
      <div className="dither-background__tint" />
    </div>
  );
}
