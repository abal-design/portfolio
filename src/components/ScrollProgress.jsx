import useScrollProgress from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
      <div className="h-full bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#3B82F6] transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}