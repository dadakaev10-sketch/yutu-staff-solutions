type Props = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className = '', showText = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 64 64" className="h-10 w-10 sm:h-12 sm:w-12 shrink-0" aria-hidden>
        <g fill="#ffffff">
          <path d="M14 18c0-4 3-7 7-7s7 3 7 7v10h-7c-4 0-7-3-7-7v-3z" opacity="0.95" />
          <path d="M36 36c0 4 3 7 7 7s7-3 7-7V26h-7c-4 0-7 3-7 7v3z" opacity="0.95" />
          <path d="M22 36h10v10H22z" opacity="0.85" />
          <path d="M32 18h10v10H32z" opacity="0.85" />
        </g>
      </svg>
      {showText && (
        <div className="leading-tight">
          <div className="font-display text-2xl sm:text-3xl text-white">YuTu</div>
          <div className="text-xs sm:text-sm text-white/80 -mt-1">Staff Solutions</div>
        </div>
      )}
    </div>
  );
}
