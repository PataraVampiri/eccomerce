import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ProductCard } from '../components/ui/ProductCard'
import { getAvailableStock } from '../lib/storage'
import { usePageMetadata } from '../lib/seo'
import { products } from '../data/products'

export function Products() {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState('all')
  const [availability, setAvailability] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('newest')

  const query = (searchParams.get('search') ?? '').trim().toLowerCase()

  const filteredProducts = useMemo(() => {
    let items = [...products]

    if (query) {
      items = items.filter((product) => {
        const haystack = `${product.name} ${product.category} ${product.description}`.toLowerCase()
        return haystack.includes(query)
      })
    }

    if (category !== 'all') {
      items = items.filter((product) => product.category === category)
    }

    if (availability !== 'all') {
      items = items.filter((product) => {
        const stock = getAvailableStock(product.id)
        return availability === 'in-stock' ? stock > 0 : stock <= 0
      })
    }

    if (priceRange !== 'all') {
      items = items.filter((product) => {
        if (priceRange === 'under-500') return product.price < 500
        if (priceRange === '500-1000') return product.price >= 500 && product.price <= 1000
        if (priceRange === '1000-2000') return product.price > 1000 && product.price <= 2000
        if (priceRange === '2000-plus') return product.price > 2000
        return true
      })
    }

    items.sort((left, right) => {
      if (sortBy === 'price-low') return left.price - right.price
      if (sortBy === 'price-high') return right.price - left.price
      if (sortBy === 'name-az') return left.name.localeCompare(right.name)
      if (sortBy === 'name-za') return right.name.localeCompare(left.name)
      if (sortBy === 'newest') return Number(right.isNew) - Number(left.isNew)
      return 0
    })

    return items
  }, [availability, category, priceRange, query, sortBy])

  usePageMetadata({
    title: 'Our products | Audiophile',
    description: 'Browse premium audio products across headphones, speakers, and earphones.',
  })

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 lg:px-8">
      <section className="mb-10 rounded-none bg-[#F1F1F1] p-8">
        <h1 className="text-4xl font-bold uppercase tracking-[0.08em] text-[#101010]">Products</h1>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-4">
        <select value={category} onChange={(event) => setCategory(event.target.value)} className="border border-[#D6D6D6] bg-white p-3 text-sm uppercase tracking-[0.1em] text-[#101010] outline-none">
          <option value="all">Category</option>
          <option value="headphones">Headphones</option>
          <option value="speakers">Speakers</option>
          <option value="earphones">Earphones</option>
        </select>

        <select value={availability} onChange={(event) => setAvailability(event.target.value)} className="border border-[#D6D6D6] bg-white p-3 text-sm uppercase tracking-[0.1em] text-[#101010] outline-none">
          <option value="all">Availability</option>
          <option value="in-stock">In stock</option>
          <option value="sold-out">Sold out</option>
        </select>

        <select value={priceRange} onChange={(event) => setPriceRange(event.target.value)} className="border border-[#D6D6D6] bg-white p-3 text-sm uppercase tracking-[0.1em] text-[#101010] outline-none">
          <option value="all">Price range</option>
          <option value="under-500">Under $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-2000">$1000 - $2000</option>
          <option value="2000-plus">$2000+</option>
        </select>

        <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} className="border border-[#D6D6D6] bg-white p-3 text-sm uppercase tracking-[0.1em] text-[#101010] outline-none">
          <option value="newest">Newest</option>
          <option value="price-low">Price Low → High</option>
          <option value="price-high">Price High → Low</option>
          <option value="name-az">Name A → Z</option>
          <option value="name-za">Name Z → A</option>
        </select>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <div className="md:col-span-2 xl:col-span-3">
            <p className="text-xl font-medium text-[#101010]/70">No products match your search.</p>
          </div>
        )}
      </section>
    </main>
  )
}
