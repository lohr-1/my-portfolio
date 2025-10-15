import React from "react";

type Props = {
  label: string;
  src: string;        // caminho no /public (ex: "/folder-pixel.svg")
  size?: number;      // lado do tile
  onOpen?: () => void; // abrir janela (duplo clique)
};

export default function IconTile({ label, src, size = 88, onOpen }: Props) {
  const handleDoubleClick = () => {
    onOpen?.();
  };

  return (
    <button
      type="button"
      className="pixelicon pixelicon--button"
      onDoubleClick={handleDoubleClick}
      title={label}
    >
      <div
        className="pixelicon__tile"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <img
          className="pixelicon__img"
          src={src}
          width={Math.round(size * 0.55)}
          height={Math.round(size * 0.55)}
          alt=""
        />
      </div>
      <span className="pixelicon__label">{label}</span>
    </button>
  );
}
