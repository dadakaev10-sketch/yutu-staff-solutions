type Props = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className = '', showText = true }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/ytlogo.png"
        alt="YuTu Logo"
        className="h-10 w-auto sm:h-12 shrink-0"
      />
      {showText && (
        <div className="leading-tight">
          <div className="font-display text-2xl sm:text-3xl text-white">YuTu</div>
          <div className="text-xs sm:text-sm text-white/80 -mt-1">Staff Solutions</div>
        </div>
      )}
    </div>
  );
}
