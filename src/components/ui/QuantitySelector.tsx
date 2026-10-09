import { Minus, Plus } from 'lucide-react'

interface QuantitySelectorProps {
  value: number
  min?: number
  max?: number
  onDecrease: () => void
  onIncrease: () => void
}

export function QuantitySelector({
  value,
  min = 1,
  max,
  onDecrease,
  onIncrease,
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center bg-[#F1F1F1]">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={onDecrease}
        className="flex h-12 w-12 items-center justify-center text-xl text-[#101010] transition hover:text-[#D87D4A] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Minus size={18} />
      </button>
      <span className="min-w-[52px] text-center text-sm font-bold uppercase tracking-[0.1em] text-[#101010]">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={max !== undefined && value >= max}
        onClick={onIncrease}
        className="flex h-12 w-12 items-center justify-center text-xl text-[#101010] transition hover:text-[#D87D4A] disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus size={18} />
      </button>
    </div>
  )
}
