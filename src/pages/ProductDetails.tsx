import { Link, useParams } from 'react-router-dom'
import { ProductFeatures } from '../components/product/ProductFeatures'
import { ProductGallery } from '../components/product/ProductGallery'
import { ProductIncludes } from '../components/product/ProductIncludes'
import { ProductInfo } from '../components/product/ProductInfo'
import { RelatedProducts } from '../components/product/RelatedProducts'
import { products } from '../data/products'
import { usePageMetadata } from '../lib/seo'

export function ProductDetails() {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug)

  usePageMetadata({
    title: product ? `${product.name} | Audiophile` : 'Product not found | Audiophile',
    description: product ? product.shortDescription : 'The requested product could not be found.',
  })

  if (!product) {
    return (
      <main className="mx-auto max-w-[1280px] px-4 py-20 text-center md:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold uppercase tracking-[0.08em] text-[#101010]">Product not found</h1>
        <Link to="/products" className="inline-flex items-center bg-[#D87D4A] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#FBAF85]">
          Back to products
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 lg:px-8">
      <Link to="/products" className="mb-8 inline-flex items-center text-sm font-bold uppercase tracking-[0.12em] text-[#101010]/70 transition hover:text-[#D87D4A]">
        Go back
      </Link>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
      </section>

      <section className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <ProductFeatures product={product} />
        <ProductIncludes product={product} />
      </section>

      <RelatedProducts product={product} />
    </main>
  )
}
