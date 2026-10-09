import { Camera, Globe, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#101010] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 border-b border-white/20 pb-10 md:flex-row md:items-center md:justify-between">
          <Link to="/" className="text-2xl font-bold uppercase tracking-[0.1em]">
            Audiophile
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-[0.12em] text-white/70">
            <Link to="/" className="hover:text-[#D87D4A]">Home</Link>
            <Link to="/category/headphones" className="hover:text-[#D87D4A]">Headphones</Link>
            <Link to="/category/speakers" className="hover:text-[#D87D4A]">Speakers</Link>
            <Link to="/category/earphones" className="hover:text-[#D87D4A]">Earphones</Link>
          </nav>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr]">
          <p className="max-w-xl text-base leading-7 text-white/60">
            Audiophile is a premium sound brand dedicated to crafting immersive listening products designed for the way you live.
          </p>
          <div className="flex items-center justify-start gap-4 md:justify-end">
            <a href="https://facebook.com" aria-label="Facebook" className="text-white transition hover:text-[#D87D4A]">
              <Globe size={20} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-white transition hover:text-[#D87D4A]">
              <MessageCircle size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-white transition hover:text-[#D87D4A]">
              <Camera size={20} />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">Copyright 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
