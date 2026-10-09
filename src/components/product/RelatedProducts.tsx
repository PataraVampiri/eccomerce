import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { Price } from '../ui/Price'
import type { Product } from '../../types/product'

export function RelatedProducts({ product }: { product: Product }) {
  const related = products
    .filter((entry) => entry.category === product.category && entry.id !== product.id)
    .slice(0, 3)

  if (!related.length) {
    return null
  }

  return (
    <section className="mt-20">
      <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-[0.08em] text-[#101010]">
        You may also like
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {related.map((entry) => (
          <article key={entry.id} className="space-y-4 bg-[#FAFAFA] p-4">
            <img src={entry.thumbnail} alt={entry.name} className="h-64 w-full object-cover" />
            <div className="text-center">
              <h3 className="mb-4 text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">
                {entry.name}
              </h3>
              <Price value={entry.price} className="block text-center" />
            </div>
            <Link
              to={`/products/${entry.slug}`}
              className="inline-flex items-center justify-center bg-[#D87D4A] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#FBAF85]"
            >
              See product
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
