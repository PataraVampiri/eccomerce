interface BadgeProps {
  text: string
  className?: string
}

export function Badge({ text, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center bg-[#D87D4A] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white ${className}`}
    >
      {text}
    </span>
  )
}
