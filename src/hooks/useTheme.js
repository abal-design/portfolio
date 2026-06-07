import { useEffect, useState } from 'react';

const STORAGE_KEY = 'abal-portfolio-theme';

export default function useTheme() {
  const [theme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const savedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'dark') {
      return 'dark';
    }

    return 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    window.localStorage.setItem(STORAGE_KEY, 'dark');
  }, [theme]);

  return { theme: 'dark', isDark: true };
}