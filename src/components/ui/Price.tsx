import { formatPrice } from '../../lib/utils'

interface PriceProps {
  value: number
  className?: string
}

export function Price({ value, className = '' }: PriceProps) {
  return <span className={`text-lg font-bold text-[#101010] ${className}`}>{formatPrice(value)}</span>
}
