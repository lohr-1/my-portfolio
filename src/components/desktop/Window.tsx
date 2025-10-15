import { ReactNode } from "react";

type WindowProps = {
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export default function Window({ title, onClose, children }: WindowProps) {
  return (
    <div className="win">
      <div className="win__titlebar">
        <span className="win__title">{title}</span>
        <button className="win__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>
      </div>
      <div className="win__body">{children}</div>
    </div>
  );
}
