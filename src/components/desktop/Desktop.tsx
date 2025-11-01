import { useState, useEffect } from "react";
import Window from "./Window";
import SocialIcon from "../common/SocialIcon";
import IconTile from "../common/IconTile";

import TechStackWindow from "../../windows/TechStackWindow";
import ProjectWindow   from "../../windows/ProjectWindow";
import AboutWindow     from "../../windows/AboutWindow";

import "../../styles/desktop.css";



// Search/Glass icon removed per request

/* ====== Tipos de janela ====== */
type WinType = "tech" | "projects" | "about";

type OpenWin = {
  id: string;
  type: WinType;
  left?: number;
  top?: number;
  z: number;
  fullscreen?: boolean;
};

export default function Desktop() {
  const [open, setOpen] = useState<OpenWin[]>([]);
  const [zCounter, setZCounter] = useState(40);

  const openWin = (t: WinType /* _rect optional but unused - windows spawn randomly */) => {
    setOpen((prev) => {
      // allow multiple windows of same type; create unique id
      const id = `${t}-${Date.now()}`;
      // place in a random area around the center of the screen
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const h = typeof window !== 'undefined' ? window.innerHeight : 800;
      // on small screens, open windows fullscreen for better UX
      const fullscreen = w <= 720;
      const left = fullscreen ? undefined : Math.round(w * (0.25 + Math.random() * 0.5));
      const top = fullscreen ? undefined : Math.round(h * (0.2 + Math.random() * 0.5));
      const z = zCounter + 1;
      setZCounter(z);
      // if fullscreen (mobile) open as a modal — replace existing windows
      if (fullscreen) return [{ id, type: t, left, top, z, fullscreen }];
      return [...prev, { id, type: t, left, top, z, fullscreen }];
    });
  };

  const closeWin = (id: string) => {
    setOpen((prev) => prev.filter((w) => w.id !== id));
  };

  // close modal on Escape when a fullscreen window is open
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const modal = open.find(w => w.fullscreen);
        if (modal) closeWin(modal.id);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  const bringToFront = (id: string) => {
    setOpen((prev) => {
      const z = zCounter + 1;
      setZCounter(z);
      return prev.map((w) => (w.id === id ? { ...w, z } : w));
    });
  };

  const moveWin = (id: string, left: number, top: number) => {
    setOpen((prev) => prev.map((w) => (w.id === id ? { ...w, left, top } : w)));
  };

  const hasModal = open.some((w) => w.fullscreen);

  return (
    <div className={`desktop ${hasModal ? 'modal-open' : ''}`}>
      {/* Ícones à esquerda */}
<div className="dock-left">
  <IconTile
    fa="fa-solid fa-folder"
    label="Tech Stacks"
    onOpen={() => openWin('tech')}
  />
  <IconTile
    fa="fa-solid fa-folder"
    label="Projetos"
    onOpen={() => openWin('projects')}
  />
  <IconTile
    fa="fa-solid fa-file-lines"
    label="about.txt"
    onOpen={() => openWin('about')}
  />
</div>

  <div className="dock-right">
  <SocialIcon
    fa="fa-brands fa-github"
    href="https://github.com/seu-usuario"
    label="GitHub"
  />
  <SocialIcon
    fa="fa-brands fa-linkedin"
    href="https://www.linkedin.com/in/seu-usuario/"
    label="LinkedIn"
  />
  <SocialIcon
    fa="fa-brands fa-instagram"
    href="https://www.instagram.com/seu-usuario/"
    label="Instagram"
  />
</div>

      {/* Janelas abertas */}
      <div className="desktop__windows">
        {open.map((w) => (
          <Window
            key={w.id}
            id={w.id}
            title={w.type === 'tech' ? 'Tech Stack' : w.type === 'projects' ? 'Projetos' : 'Sobre mim'}
            left={w.left}
            top={w.top}
            z={w.z}
            fullscreen={w.fullscreen}
            onClose={() => closeWin(w.id)}
            onFocus={() => bringToFront(w.id)}
            onMove={(l, t) => moveWin(w.id, l, t)}
          >
            {w.type === 'tech' ? <TechStackWindow /> : w.type === 'projects' ? <ProjectWindow /> : <AboutWindow />}
          </Window>
        ))}

        {/* Backdrop for modal fullscreen windows (mobile) */}
        {(() => {
          const modal = open.find((x) => x.fullscreen);
          if (!modal) return null;
          return <div className="win-backdrop" onClick={() => closeWin(modal.id)} />;
        })()}

      </div>
    </div>
  );
}
