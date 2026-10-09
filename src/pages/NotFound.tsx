import { Link } from 'react-router-dom'
import { usePageMetadata } from '../lib/seo'

export function NotFound() {
  usePageMetadata({
    title: '404 | Audiophile',
    description: 'The page you were looking for was not found.',
  })

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1280px] items-center justify-center px-4 py-20 text-center md:px-6 lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#D87D4A]">404</p>
        <h1 className="mt-6 text-5xl font-bold uppercase tracking-[0.08em] text-[#101010]">Page not found</h1>
        <Link to="/" className="mt-8 inline-flex items-center bg-[#D87D4A] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#FBAF85]">
          Back to home
        </Link>
      </div>
    </main>
  )
}
