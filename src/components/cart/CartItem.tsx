import { Trash2 } from 'lucide-react'
import { getAvailableStock } from '../../lib/storage'
import { formatPrice } from '../../lib/utils'
import { useCartStore } from '../../store/cartStore'
import type { Product } from '../../types/product'
import { QuantitySelector } from '../ui/QuantitySelector'

interface CartItemProps {
  product: Product
  quantity: number
}

export function CartItem({ product, quantity }: CartItemProps) {
  const increaseQuantity = useCartStore((state) => state.increaseQuantity)
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const availableStock = getAvailableStock(product.id)

  return (
    <div className="flex flex-col gap-5 border-b border-[#E5E5E5] py-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-4">
        <img src={product.thumbnail} alt={product.name} className="h-24 w-24 object-cover" />
        <div>
          <h3 className="text-lg font-bold uppercase tracking-[0.08em] text-[#101010]">{product.name}</h3>
          <p className="text-sm font-bold text-[#101010]/70">{formatPrice(product.price)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 md:justify-end">
        <QuantitySelector
          value={quantity}
          min={1}
          max={availableStock}
          onDecrease={() => decreaseQuantity(product.id)}
          onIncrease={() => increaseQuantity(product.id)}
        />
        <button
          type="button"
          onClick={() => removeItem(product.id)}
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#101010]/60 transition hover:text-[#D87D4A]"
          aria-label={`Remove ${product.name} from cart`}
        >
          <Trash2 size={16} /> Remove
        </button>
      </div>
    </div>
  )
}
