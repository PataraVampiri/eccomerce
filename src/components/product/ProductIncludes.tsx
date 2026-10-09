import type { Product } from '../../types/product'

export function ProductIncludes({ product }: { product: Product }) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold uppercase tracking-[0.06em] text-[#101010]">In the box</h2>
      <ul className="space-y-3">
        {product.includedItems.map((item) => (
          <li key={`${product.id}-${item.item}`} className="flex items-center gap-4 text-[#101010]/70">
            <span className="font-bold text-[#D87D4A]">{item.quantity}x</span>
            <span>{item.item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
