import { ShoppingCart } from 'lucide-react'
import { useMemo, useState } from 'react'
import { getAvailableStock } from '../../lib/storage'
import { Price } from '../ui/Price'
import { QuantitySelector } from '../ui/QuantitySelector'
import { Button } from '../ui/Button'
import type { Product } from '../../types/product'
import { useCartStore } from '../../store/cartStore'

export function ProductInfo({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)
  const [quantity, setQuantity] = useState(1)
  const availableStock = useMemo(() => getAvailableStock(product.id), [product.id])

  const handleIncrease = () => setQuantity((current) => Math.min(current + 1, availableStock))
  const handleDecrease = () => setQuantity((current) => Math.max(1, current - 1))

  return (
    <div className="space-y-6">
      {product.isNew ? (
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#D87D4A]">New product</span>
      ) : null}
      <h1 className="text-4xl font-bold uppercase tracking-[0.05em] text-[#101010] md:text-5xl">
        {product.name}
      </h1>
      <p className="text-base leading-7 text-[#101010]/70">{product.description}</p>
      <Price value={product.price} />
      <div className="flex flex-wrap items-center gap-4">
        <QuantitySelector
          value={quantity}
          min={1}
          max={availableStock}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
        <Button onClick={() => addItem(product.id, quantity)} disabled={availableStock <= 0}>
          <span className="inline-flex items-center gap-2">
            <ShoppingCart size={16} /> Add to cart
          </span>
        </Button>
      </div>
      <p className="text-sm font-medium uppercase tracking-[0.1em] text-[#101010]/60">
        {availableStock > 0 ? `${availableStock} in stock` : 'Sold out'}
      </p>
    </div>
  )
}
