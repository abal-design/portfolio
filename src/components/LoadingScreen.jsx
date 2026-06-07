import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-pulse rounded-3xl bg-gradient-to-br from-[#3B82F6] via-[#06B6D4] to-[#1E293B] shadow-glow" />
        <p className="font-display text-sm tracking-[0.4em] text-[#94A3B8]">LOADING PORTFOLIO</p>
      </div>
    </div>
  );
}