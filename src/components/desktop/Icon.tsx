import { ReactNode } from "react";

type IconProps = {
  label: string;
  onOpen?: () => void;
  icon: ReactNode;
};

export default function Icon({ label, icon, onOpen }: IconProps) {
  return (
    <button className="desktop-icon" onClick={onOpen} title={label}>
      <span className="desktop-icon__glyph">{icon}</span>
      <span className="desktop-icon__label">{label}</span>
    </button>
  );
}
