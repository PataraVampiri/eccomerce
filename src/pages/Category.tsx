import { useParams } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { usePageMetadata } from '../lib/seo'

export function Category() {
  const { category } = useParams()
  const categoryInfo = categories.find((entry) => entry.slug === category)
  const items = products.filter((product) => product.category === category)

  usePageMetadata({
    title: `${categoryInfo?.name ?? 'Category'} | Audiophile`,
    description: `Browse ${categoryInfo?.name ?? 'audio'} products from Audiophile.`,
  })

  if (!categoryInfo) {
    return (
      <main className="mx-auto max-w-[1280px] px-4 py-20 text-center md:px-6 lg:px-8">
        <h1 className="text-4xl font-bold uppercase tracking-[0.08em] text-[#101010]">Category not found</h1>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 lg:px-8">
      <section className="mb-10 rounded-none bg-[#F1F1F1] p-8 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-[0.08em] text-[#101010]">{categoryInfo.name}</h1>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}
