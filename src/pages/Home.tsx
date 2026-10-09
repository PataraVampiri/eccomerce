import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { CategoryCard } from '../components/ui/CategoryCard'
import { Button } from '../components/ui/Button'
import { usePageMetadata } from '../lib/seo'

const featuredProduct = products.find((product) => product.slug === 'xx99-mark-two-headphones')
const secondaryProduct = products.find((product) => product.slug === 'zx7-speaker')
const promoProduct = products.find((product) => product.slug === 'yx1-earphones')

export function Home() {
  usePageMetadata({
    title: 'Audiophile | Premium sound for modern life',
    description: 'Shop premium headphones, speakers, and earphones designed for immersive everyday listening.',
  })

  return (
    <main>
      <section className="bg-[#101010] text-white">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-20 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 text-sm font-medium uppercase tracking-[0.52em] text-white/60">New product</span>
            <h1 className="max-w-lg text-5xl font-bold uppercase leading-none tracking-[-0.04em] md:text-6xl">
              XX99 Mark II Headphones
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/70">
              Experience the next generation of audio with a refined sound signature, elevated comfort, and premium materials built for every detail.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to={`/products/${featuredProduct?.slug ?? 'xx99-mark-two-headphones'}`} variant="primary">
                See product
              </Button>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white/80 transition hover:text-[#D87D4A]">
                Explore catalog <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={featuredProduct?.thumbnail}
              alt={featuredProduct?.name ?? 'Audiophile headphones'}
              className="w-full max-w-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-20 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} item={category} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] space-y-8 px-4 pb-10 md:px-6 lg:px-8">
        <div className="overflow-hidden bg-[#F1F1F1] p-8 md:p-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <img src={featuredProduct?.images[0]} alt={featuredProduct?.name} className="mx-auto max-h-[440px] w-full object-cover" />
          </div>
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D87D4A]">Featured product</span>
            <h2 className="text-4xl font-bold uppercase tracking-[-0.03em] text-[#101010] md:text-5xl">
              {featuredProduct?.name}
            </h2>
            <p className="max-w-md text-base leading-7 text-[#101010]/60">{featuredProduct?.description}</p>
            <Button to={`/products/${featuredProduct?.slug ?? ''}`} variant="primary">See product</Button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-[420px] flex-col justify-between bg-[#EAEAEA] p-8 md:p-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold uppercase tracking-[-0.03em] text-[#101010]">{secondaryProduct?.name}</h2>
              <Button to={`/products/${secondaryProduct?.slug ?? ''}`} variant="secondary">See product</Button>
            </div>
          </div>

          <div className="overflow-hidden bg-[#F1F1F1] p-8 md:p-12">
            <img src={promoProduct?.thumbnail} alt={promoProduct?.name} className="mb-8 h-52 w-full object-cover" />
            <h2 className="text-4xl font-bold uppercase tracking-[-0.03em] text-[#101010]">{promoProduct?.name}</h2>
            <div className="mt-5">
              <Button to={`/products/${promoProduct?.slug ?? ''}`} variant="secondary">See product</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-20 md:px-6 lg:px-8">
        <div className="grid items-center gap-10 bg-[#FAFAFA] p-8 md:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#D87D4A]">Built for life</span>
            <h2 className="mt-6 text-4xl font-bold uppercase leading-tight tracking-[-0.03em] text-[#101010] md:text-5xl">
              Bringing premium sound to every room.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#101010]/65">
              From focused listening at your desk to immersive evenings in the living room, our systems are designed to deliver clarity, warmth, and detail that feels personal.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#101010]/70">
              <Play size={16} className="text-[#D87D4A]" /> Watch Story
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
            alt="Interior listening environment"
            className="h-[420px] w-full object-cover"
          />
        </div>
      </section>
    </main>
  )
}
