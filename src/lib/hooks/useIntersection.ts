import { readable } from 'svelte/store';

export function useIntersection(target: Element | null, options?: IntersectionObserverInit) {
  return readable<boolean>(false, (set) => {
    if (typeof window === 'undefined' || !target) return () => { };
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      set(entry.isIntersecting);
    }, options);
    observer.observe(target);
    return () => observer.disconnect();
  });
}

