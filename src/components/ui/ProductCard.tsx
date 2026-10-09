import { ArrowRight, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getAvailableStock } from '../../lib/storage'
import { formatPrice } from '../../lib/utils'
import { useCartStore } from '../../store/cartStore'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const availableStock = getAvailableStock(product.id)

  return (
    <article className="group flex h-full flex-col overflow-hidden bg-[#FAFAFA] p-6 shadow-sm">
      <div className="mb-6 overflow-hidden bg-[#F1F1F1]">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col">
        {product.isNew ? (
          <span className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#D87D4A]">
            New Product
          </span>
        ) : null}
        <h3 className="mb-3 text-2xl font-bold uppercase tracking-[0.05em] text-[#101010]">
          {product.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-[#101010]/60">{product.shortDescription}</p>
        <div className="mb-5 flex items-center justify-between">
          <span className="text-lg font-bold text-[#101010]">{formatPrice(product.price)}</span>
          <span className="text-xs uppercase tracking-[0.12em] text-[#101010]/60">
            {availableStock > 0 ? 'In stock' : 'Sold out'}
          </span>
        </div>
        <div className="mt-auto flex items-center gap-3">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#101010] transition hover:text-[#D87D4A]"
          >
            View Product <ArrowRight size={16} />
          </Link>
          <button
            type="button"
            onClick={() => addItem(product.id, 1)}
            className="ml-auto inline-flex items-center gap-2 bg-[#D87D4A] px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#FBAF85] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={availableStock <= 0}
          >
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
