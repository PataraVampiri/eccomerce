import type { Product } from '../../types/product'

export function ProductFeatures({ product }: { product: Product }) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold uppercase tracking-[0.06em] text-[#101010]">Features</h2>
      <div className="space-y-4 text-base leading-7 text-[#101010]/70">
        {product.features.map((feature) => (
          <p key={feature}>{feature}</p>
        ))}
      </div>
    </div>
  )
}
