import { cn } from "@/lib/cn";

/**
 * Hand-drawn botanical line-art motifs — the recurring decorative signature.
 * Stroke = currentColor, so every instance is token-driven by its text color.
 */

export function Sprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      aria-hidden
      className={cn("text-current", className)}
    >
      <path
        d="M60 196V36"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* leaf pairs climbing the stem */}
      {[
        { y: 150, s: 1 },
        { y: 116, s: -1 },
        { y: 84, s: 1 },
        { y: 56, s: -1 },
      ].map((l, i) => (
        <g key={i}>
          <path
            d={`M60 ${l.y} C ${60 + l.s * 30} ${l.y - 6}, ${60 + l.s * 40} ${l.y - 30}, 60 ${l.y - 34}`}
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d={`M60 ${l.y - 2} C ${60 + l.s * 22} ${l.y - 10}, ${60 + l.s * 30} ${l.y - 26}, 60 ${l.y - 30}`}
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
            strokeLinecap="round"
          />
        </g>
      ))}
      {/* bloom at the top */}
      <circle cx="60" cy="30" r="6" stroke="currentColor" strokeWidth="1.3" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse
          key={a}
          cx="60"
          cy="16"
          rx="4.4"
          ry="9"
          stroke="currentColor"
          strokeWidth="1.2"
          transform={`rotate(${a} 60 30)`}
        />
      ))}
    </svg>
  );
}

/** A small leaf glyph for inline markers / list bullets. */
export function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn("text-current", className)}
    >
      <path
        d="M4 20C4 11 11 4 20 4C20 13 13 20 4 20Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 19C9 15 13 11 18 7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/** Thin botanical divider — a stem with a couple of leaves, full-width. */
export function StemRule({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 16"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
      className={cn("text-current", className)}
    >
      <path d="M0 8H240" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path
        d="M120 8c6-4 12-4 18 0M120 8c-6 4-12 4-18 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <circle cx="120" cy="8" r="2.4" fill="currentColor" />
    </svg>
  );
}
