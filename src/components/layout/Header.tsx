import { Search, ShoppingCart } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { useCartStore } from '../../store/cartStore'
import { MobileMenu } from './MobileMenu'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Headphones', to: '/category/headphones' },
  { label: 'Speakers', to: '/category/speakers' },
  { label: 'Earphones', to: '/category/earphones' },
  { label: 'Products', to: '/products' },
]

export function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get('search') ?? '')
  const [menuOpen, setMenuOpen] = useState(false)
  const itemCount = useCartStore((state) => state.getItemCount())

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const normalized = query.trim()
    navigate(`/products${normalized ? `?search=${encodeURIComponent(normalized)}` : ''}`)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-5 md:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <Link to="/" className="text-2xl font-bold uppercase tracking-[0.1em] text-[#101010]">
            Audiophile
          </Link>
        </div>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-[0.12em] transition ${isActive ? 'text-[#D87D4A]' : 'text-[#101010]/70 hover:text-[#D87D4A]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <form onSubmit={handleSearchSubmit} className="hidden items-center gap-2 rounded-none border border-[#E5E5E5] bg-[#FAFAFA] px-3 py-2 md:flex">
            <Search size={16} className="text-[#101010]/50" />
            <input
              aria-label="Search products"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="w-28 bg-transparent text-sm text-[#101010] outline-none placeholder:text-[#101010]/40"
            />
          </form>

          <Link to="/cart" aria-label="Cart" className="relative inline-flex h-11 w-11 items-center justify-center border border-[#E5E5E5] bg-[#FAFAFA] text-[#101010]">
            <ShoppingCart size={18} />
            {itemCount > 0 ? (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D87D4A] px-1 text-[10px] font-bold text-white">
                {itemCount}
              </span>
            ) : null}
          </Link>

          <MobileMenu
            isOpen={menuOpen}
            onToggle={() => setMenuOpen((prev) => !prev)}
            onClose={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  )
}
