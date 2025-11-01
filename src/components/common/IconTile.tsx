import React from "react";

type Props =
  | { label: string; fa: string; size?: number; onOpen?: (rect?: DOMRect) => void }
  | { label: string; src: string; size?: number; onOpen?: (rect?: DOMRect) => void };

export default function IconTile({ label, size = 88, onOpen, ...props }: Props) {
  const handleClick = () => {
    // Provide bounding rect so Desktop can position the window near the icon
    try {
      // currentTarget is not available here; use element lookup by title
      const el = document.querySelector(`button[title="${label}"]`) as HTMLElement | null;
      const rect = el?.getBoundingClientRect();
      onOpen?.(rect ?? undefined);
    } catch {
      onOpen?.();
    }
  };

  return (
    <button
      type="button"
      className="pixelicon pixelicon--button"
      onClick={handleClick}
      title={label}
    >
      <div
        className="pixelicon__tile"
        style={{ width: size, height: size }}
        aria-hidden
      >
        {"fa" in props ? (
          <i
            className={props.fa}
            aria-hidden
            style={{ fontSize: Math.round(size * 0.55) }}
          />
        ) : (
          <img
            className="pixelicon__img"
            src={(props as { src: string }).src}
            width={Math.round(size * 0.55)}
            height={Math.round(size * 0.55)}
            alt=""
          />
        )}
      </div>
      <span className="pixelicon__label">{label}</span>
    </button>
  );
}
