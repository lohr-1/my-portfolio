import { ReactNode, useRef, useEffect } from "react";

type WindowProps = {
  id?: string;
  title: string;
  left?: number;
  top?: number;
  z?: number;
  fullscreen?: boolean;
  onClose: () => void;
  onMove?: (left: number, top: number) => void;
  onFocus?: () => void;
  children: ReactNode;
};

export default function Window({ id, title, left, top, z, fullscreen, onClose, onMove, onFocus, children }: WindowProps) {
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    offsetX: number;
    offsetY: number;
    left: number;
    top: number;
  } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    // if clicking the close button, don't start a drag (let the button handle it)
    const target = e.target as HTMLElement | null;
    if (target?.closest('.win__close')) {
      onFocus?.();
      return;
    }

    // prevent default to avoid touch scrolling while dragging
    (e.nativeEvent as PointerEvent).preventDefault?.();
    onFocus?.();
    const el = (e.currentTarget as HTMLElement).closest('.win') as HTMLElement | null;
    const rect = el?.getBoundingClientRect();

    const initialLeft = rect?.left ?? (left ?? window.innerWidth / 2);
    const initialTop = rect?.top ?? (top ?? window.innerHeight / 2);
    const offsetX = e.clientX - initialLeft;
    const offsetY = e.clientY - initialTop;

    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      offsetX,
      offsetY,
      left: initialLeft,
      top: initialTop,
    };

    const handleMove = (ev: PointerEvent) => {
      if (!dragRef.current) return;
      if (ev.pointerId !== dragRef.current.pointerId) return;
      const newLeft = ev.clientX - dragRef.current.offsetX;
      const newTop = ev.clientY - dragRef.current.offsetY;
      onMove?.(Math.max(8, Math.round(newLeft)), Math.max(8, Math.round(newTop)));
    };

    const handleUp = (ev: PointerEvent) => {
      if (dragRef.current && ev.pointerId !== dragRef.current.pointerId) return;
      dragRef.current = null;
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerup', handleUp);
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleUp);
  };

  const style: React.CSSProperties = {
    left: left != null ? left : undefined,
    top: top != null ? top : undefined,
    zIndex: z ?? undefined,
    transform: !fullscreen && left == null && top == null ? 'translate(-50%, -50%)' : undefined,
  };

  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.classList.add('win--enter');
    const t = window.setTimeout(() => el.classList.remove('win--enter'), 700);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div ref={rootRef} className={`win ${fullscreen ? 'win--fullscreen' : ''}`} style={style} data-win-id={id} onPointerDown={() => onFocus?.()}>
      <div className="win__titlebar" onPointerDown={fullscreen ? undefined : handlePointerDown}>
        <span className="win__title">{title}</span>
        <button className="win__close" onClick={onClose} aria-label="Fechar">
          ×
        </button>
      </div>
      <div className="win__body">{children}</div>
    </div>
  );
}
