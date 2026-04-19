'use client';
import * as React from 'react';

// Inline SVG icons. Replacement for lucide's auto-replace to avoid
// DOM mutations racing with React commits (was causing a full unmount
// at end of HowItWorks simulation loop).
function Icon({ name, size = 16, color = 'currentColor', strokeWidth = 2, style = {} }) {
  const common: React.SVGProps<SVGSVGElement> = {
    width: size, height: size,
    viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    style: { flexShrink: 0, ...style },
    'aria-hidden': true,
  };
  switch (name) {
    case 'check':        return <svg {...common}><polyline points="20 6 9 17 4 12"/></svg>;
    case 'arrow-right':  return <svg {...common}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
    case 'chevron-down': return <svg {...common}><polyline points="6 9 12 15 18 9"/></svg>;
    case 'chevron-up':   return <svg {...common}><polyline points="18 15 12 9 6 15"/></svg>;
    case 'x':            return <svg {...common}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
    case 'menu':         return <svg {...common}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
    case 'plus':         return <svg {...common}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'minus':        return <svg {...common}><line x1="5" y1="12" x2="19" y2="12"/></svg>;
    case 'shield':       return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'lock':         return <svg {...common}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case 'linkedin':     return <svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
    case 'twitter':      return <svg {...common}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
    case 'github':       return <svg {...common}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
    default:             return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
  }
}

export { Icon };
