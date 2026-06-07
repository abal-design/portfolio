import useCustomCursor from '@/hooks/useCustomCursor';

export default function CustomCursor() {
  const cursor = useCustomCursor();

  return (
    <div
      className={`pointer-events-none fixed z-[70] hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/70 bg-sky-400/20 backdrop-blur-sm transition-opacity duration-200 md:block ${cursor.active ? 'opacity-100' : 'opacity-0'}`}
      style={{ left: cursor.x, top: cursor.y }}
      aria-hidden="true"
    />
  );
}