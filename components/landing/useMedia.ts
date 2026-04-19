'use client';
import * as React from 'react';

// Viewport hook — returns true when viewport is below the given px breakpoint.
// SSR-safe: returns false on server, updates on mount.
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    if (mql.addEventListener) mql.addEventListener('change', update);
    else mql.addListener(update);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', update);
      else mql.removeListener(update);
    };
  }, [query]);
  return matches;
}

// Common breakpoints.
export const useIsMobile  = () => useMediaQuery('(max-width: 640px)');
export const useIsTablet  = () => useMediaQuery('(max-width: 960px)');
