# lohr — personal portfolio (desktop metaphors + dither wallpaper)

This repository is a personal portfolio built with React + TypeScript and a desktop-like UI. The visual style intentionally leans into a "hacker" / terminal vibe: a soft green dithered wallpaper, bold stacked heading typography, and a monospace/terminal-style font.

Quick highlights
- Soft green dither background (shader-based via react-three / three.js) for a retro/hacker vibe.
- Desktop metaphor: icons, draggable windows, stacks, and modal behavior on small screens.
- Typing title animation (aka / lohr) with a blinking cursor that appears only while typing.
- Small, reusable components: IconTile, SocialIcon, Window, Desktop, Wallpaper, Typewriter, and a locally included Dither background.

Table of contents
- Project status
- Tech stack & dependencies
- Fonts & visual choices
- React Bits note
- File / component map
- Customization tips
- Development notes

Project status
-- Working dev server (Vite) with hot reload.
-- TypeScript checked and builds via `tsc`.

Tech stack & dependencies
- React 19 + TypeScript
- Vite for dev/build
- three, @react-three/fiber, @react-three/postprocessing, postprocessing — used for the shader-based Dither background
- framer-motion used for small UI/animations

You can inspect the exact dependency versions in `package.json`.

Fonts & visual choices
- Primary font (terminal-style): Google Sans Code (configured as the app font). It's used as the main UI/heading font to reinforce the terminal/retro aesthetic.
- Color / brand: the app uses a soft neon-green palette. The main CSS variables are exposed in `src/styles/global.css` (notably `--brand-green` and `--brand-green-rgb`) so you can tweak hue/saturation easily.

React Bits (registry note)
React Bits is a component collection / registry of UI bits and small visual components. This project references the Dither-style wallpaper concept you can find in that registry and includes a local Dither implementation (shader-backed and a lightweight SVG/CSS fallback) so the effect works offline and without depending on an external CLI at runtime.

How to run
Make sure you have pnpm (recommended) or npm installed. From the repository root:

```powershell
pnpm install
pnpm dev   # starts Vite dev server on http://localhost:0000/
```

Build & preview

```powershell
pnpm build
pnpm preview
```

Type checks

```powershell
npx tsc --noEmit
```

File / component map (key files)
- `src/components/wallpaper/Dither.tsx` — shader-based dither background (three/fiber). Props allow tuning color, speed and interaction.
- `src/components/wallpaper/DitherBackground.tsx` — lightweight SVG/CSS fallback for the dither effect.
- `src/components/wallpaper/Wallpaper.tsx` — container that renders the Dither and the title.
- `src/components/wallpaper/Typewriter.tsx` — small, reusable Typewriter component that types an array of lines (used for the "aka / lohr" heading).
- `src/components/desktop/Desktop.tsx` — desktop layout and window manager (opens/positions windows, manages z-index and fullscreen on mobile).
- `src/components/desktop/Window.tsx` — window chrome (titlebar, close, drag, focus) and window content container.
- `src/components/common/IconTile.tsx` — desktop icons that open windows.
- `src/components/common/SocialIcon.tsx` — social icon renderer (supports Font Awesome classes if used).
- `src/styles/global.css` — global variables (font, brand colors), reset, and base styles.
- `src/styles/wallpaper.css` — wallpaper and title layout styles. Contains the typewriter cursor styles and dither tint.
- `src/styles/Dither.css` — (if present) additional dither-specific styles.

Customization tips
- Change the dither tint color: edit `--brand-green` / `--brand-green-rgb` in `src/styles/global.css` to shift the whole wallpaper tint.
- Tune the Dither shader: `Dither.tsx` exposes props such as `waveColor`, `waveAmplitude`, `waveFrequency`, `waveSpeed`, and mouse interaction toggles.
- Adjust typing behavior: `Typewriter` accepts props `typingSpeed`, `startDelay`, `lineDelay`, `loop`, and `cursorChar`. The current title is instantiated from `src/components/wallpaper/Wallpaper.tsx` as:

```tsx
<Typewriter lines={["aka", "lohr"]} typingSpeed={55} startDelay={200} lineDelay={450} />
```

Change `loop` to `true` if you'd like the heading to repeat forever.

Accessibility & behavior notes
- The wallpaper is `pointer-events: none` so it doesn't intercept desktop icon clicks. Windows are focusable and draggable; on small screens windows open as fullscreen modals with backdrop.
- The Typewriter's cursor is intentionally only visible while the active line is typing (hides during pauses and after completion). You can change that behavior by editing `Typewriter.tsx`.

Development notes and tips
- Linting: `pnpm run lint` (configured via ESLint). Fix lint issues with auto-fixes where appropriate.
- TypeScript: incremental builds are enabled in the build script (`tsc -b`). Use `npx tsc --noEmit` for quick checks.
- Adding backgrounds from external registries: this project can incorporate components from registries (such as React Bits). If using an external CLI to add components, verify registry configuration (e.g., `components.json`) and confirm the CLI supports the registry. This repo includes a local Dither implementation to avoid external dependency issues.

License
- This repository does not currently include an explicit license file.

---

Enjoy the green glow ✨