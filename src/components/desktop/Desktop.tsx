import { useState } from "react";
import Icon from "./Icon";
import Window from "./Window";
import SocialIcon from "../common/SocialIcon";
import IconTile from "../common/IconTile";

import TechStackWindow from "../../windows/TechStackWindow";
import ProjectWindow   from "../../windows/ProjectWindow";
import AboutWindow     from "../../windows/AboutWindow";

import "../../styles/desktop.css";


/* ====== Inline SVGs simples (placeholders) ====== */
const FolderSVG = (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 4H4a2 2 0 0 0-2 2v2h20V8a2 2 0 0 0-2-2h-8l-2-2z" />
    <path d="M22 10H2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8z" />
  </svg>
);

const FileTxtSVG = (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GithubSVG = (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.59-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.23-3.23-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.29 1.23a11.44 11.44 0 0 1 6 0C18.03 3.7 19.03 4 19.03 4c.65 1.65.24 2.87.12 3.17.76.85 1.23 1.92 1.23 3.23 0 4.6-2.81 5.61-5.49 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5z"/>
  </svg>
);

const LinkedinSVG = (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.74V21H9z"/>
  </svg>
);

const InstagramSVG = (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.42.4.61.24 1.04.53 1.5.99.46.46.75.89.99 1.5.16.46.35 1.25.4 2.42.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.96-.4 2.42a3.6 3.6 0 0 1-.99 1.5 3.6 3.6 0 0 1-1.5.99c-.46.16-1.25.35-2.42.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.96-.24-2.42-.4a3.6 3.6 0 0 1-1.5-.99 3.6 3.6 0 0 1-.99-1.5c-.16-.46-.35-1.25-.4-2.42C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.96.4-2.42.24-.61.53-1.04.99-1.5.46-.46.89-.75 1.5-.99.46-.16 1.25-.35 2.42-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.98.05-1.51.21-1.86.34-.47.18-.8.38-1.15.72-.34.34-.54.68-.72 1.15-.13.35-.29.88-.34 1.86-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05.98.21 1.51.34 1.86.18.47.38.8.72 1.15.34.34.68.54 1.15.72.35.13.88.29 1.86.34 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.98-.05 1.51-.21 1.86-.34.47-.18.8-.38 1.15-.72.34-.34.54-.68.72-1.15.13-.35.29-.88.34-1.86.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-.98-.21-1.51-.34-1.86a2.03 2.03 0 0 0-.72-1.15 2.03 2.03 0 0 0-1.15-.72c-.35-.13-.88-.29-1.86-.34-1.24-.06-1.61-.07-4.76-.07Zm0 3.2a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6Zm0 1.8a4 4 0 1 0 0 8.0 4 4 0 0 0 0-8Zm5.9-2.5a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7Z"/>
  </svg>
);

/* ====== Tipos de janela ====== */
type WinType = "tech" | "projects" | "about";

export default function Desktop() {
  const [open, setOpen] = useState<WinType[]>([]);

  const openWin = (t: WinType) => {
    setOpen((prev) => (prev.includes(t) ? prev : [...prev, t]));
  };

  const closeWin = (t: WinType) => {
    setOpen((prev) => prev.filter((x) => x !== t));
  };

  return (
    <div className="desktop">
      {/* Ícones à esquerda */}
<div className="dock-left">
  <IconTile
    src="/folder-pixel.svg"
    label="Tech Stacks"
    onOpen={TechStackWindow}  // sua função que abre a janela de stacks
  />
  <IconTile
    src="/folder-pixel.svg"
    label="Projetos"
    onOpen={ProjectWindow}    // sua função que abre a janela de projetos
  />
  <IconTile
    src="/file-pixel.svg"
    label="about.txt"
    onOpen={AboutWindow}       // sua função que abre o “sobre mim”
  />
</div>

<div className="dock-right">
  <SocialIcon
    kind="github"
    href="https://github.com/seu-usuario"
    label="GitHub"
  />
  <SocialIcon
    src="/linkedin-svgrepo-com.svg"     /* coloque o arquivo em /public */
    href="https://www.linkedin.com/in/seu-usuario/"
    label="LinkedIn"
  />
  <SocialIcon
    src="/instagram-svgrepo-com.svg"     /* coloque o arquivo em /public */
    href="https://www.instagram.com/seu-usuario/"
    label="Instagram"
  />
</div>

      {/* Janelas abertas */}
      <div className="desktop__windows">
{open.includes("tech") && (
  <Window title="Tech Stack" onClose={() => closeWin("tech")}>
    <TechStackWindow />
  </Window>
)}

{open.includes("projects") && (
  <Window title="Projetos" onClose={() => closeWin("projects")}>
    <ProjectWindow />
  </Window>
)}

{open.includes("about") && (
  <Window title="Sobre mim" onClose={() => closeWin("about")}>
    <AboutWindow />
  </Window>
)}

      </div>
    </div>
  );
}
