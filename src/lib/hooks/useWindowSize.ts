import { readable } from 'svelte/store';

export type WindowSize = { width: number; height: number };

export function useWindowSize() {
  const initial: WindowSize = { width: 0, height: 0 };
  return readable<WindowSize>(initial, (set) => {
    if (typeof window === 'undefined') return () => { };
    const update = () => set({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });
}

