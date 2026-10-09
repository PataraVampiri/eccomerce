import type { Product } from '../../types/product'

export function ProductGallery({ product }: { product: Product }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="overflow-hidden bg-[#F1F1F1] md:col-span-2">
        <img src={product.images[0]} alt={product.name} className="h-[420px] w-full object-cover md:h-[620px]" />
      </div>
      {product.images.slice(1, 3).map((image, index) => (
        <div key={`${product.id}-${index}`} className="overflow-hidden bg-[#F1F1F1]">
          <img src={image} alt={`${product.name} view ${index + 1}`} className="h-[220px] w-full object-cover md:h-[300px]" />
        </div>
      ))}
    </div>
  )
}
