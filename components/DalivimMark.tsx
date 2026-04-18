export function DalivimMark({ size = 32, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={size} height={size} style={{ color }}>
      <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8 L54 20 L54 44 L32 56 L10 44 L10 20 Z" />
        <path d="M32 8 L32 32 M54 20 L32 32 M54 44 L32 32 M32 56 L32 32 M10 44 L32 32 M10 20 L32 32" />
      </g>
      <g fill="currentColor">
        <circle cx="32" cy="8" r="5" />
        <circle cx="54" cy="20" r="5" />
        <circle cx="54" cy="44" r="5" />
        <circle cx="32" cy="56" r="5" />
        <circle cx="10" cy="44" r="5" />
        <circle cx="10" cy="20" r="5" />
        <circle cx="32" cy="32" r="6" />
      </g>
    </svg>
  );
}
