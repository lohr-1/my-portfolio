import React, { useEffect, useState } from "react";

type TypewriterProps = {
  lines: string[];
  typingSpeed?: number; // ms per character
  startDelay?: number; // ms before starting
  lineDelay?: number; // ms between lines
  cursorChar?: string;
  loop?: boolean;
};

export default function Typewriter({
  lines,
  typingSpeed = 60,
  startDelay = 300,
  lineDelay = 500,
  cursorChar = "|",
  loop = false,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState<string[]>(() => lines.map(() => ""));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let mounted = true;
    let timer: ReturnType<typeof setTimeout> | null = null;

    if (!running) {
      timer = setTimeout(() => {
        if (mounted) setRunning(true);
      }, startDelay);
      return () => {
        if (timer) clearTimeout(timer);
        mounted = false;
      };
    }

    if (running && lineIndex < lines.length) {
      if (charIndex <= lines[lineIndex].length) {
        timer = setTimeout(() => {
          if (!mounted) return;
          setDisplayed((prev) => {
            const copy = prev.slice();
            copy[lineIndex] = lines[lineIndex].slice(0, charIndex);
            return copy;
          });
          setCharIndex((c) => c + 1);
        }, typingSpeed);
      } else {
        // finished current line
        timer = setTimeout(() => {
          if (!mounted) return;
          setLineIndex((li) => li + 1);
          setCharIndex(0);
        }, lineDelay);
      }
    } else if (running && lineIndex >= lines.length) {
      if (loop) {
        timer = setTimeout(() => {
          if (!mounted) return;
          setDisplayed(lines.map(() => ""));
          setLineIndex(0);
          setCharIndex(0);
        }, 1400);
      }
    }

    return () => {
      mounted = false;
      if (timer) clearTimeout(timer);
    };
  }, [running, lineIndex, charIndex, lines, typingSpeed, lineDelay, startDelay, loop]);

  return (
    <div className="typewriter" aria-hidden={false}>
      {displayed.map((text, i) => {
        // keep the original wallpaper line class so existing typography applies
        const cls = i === 0 ? "wallpaper__aka typewriter__line" : "wallpaper__lohr typewriter__line";
        // Show the cursor only while the current line is actively typing.
        // Hide the cursor during the pause after a line finishes (and when idle).
        let showCursor = false;
        if (running && i === lineIndex && lineIndex < lines.length) {
          const curLineLen = lines[lineIndex].length;
          // charIndex increments from 0 -> 1 when the first char is rendered.
          // show cursor only while 1..curLineLen (i.e. actively typing)
          if (charIndex > 0 && charIndex <= curLineLen) showCursor = true;
        }

        return (
          <div key={i} className={cls}>
            {text}
            <span className={`typewriter__cursor ${showCursor ? "is-visible" : ""}`}>{cursorChar}</span>
          </div>
        );
      })}
    </div>
  );
}
