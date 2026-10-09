import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

const items = [
  { label: 'Home', to: '/' },
  { label: 'Headphones', to: '/category/headphones' },
  { label: 'Speakers', to: '/category/speakers' },
  { label: 'Earphones', to: '/category/earphones' },
  { label: 'Products', to: '/products' },
]

export function MobileMenu({ isOpen, onToggle, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#101010]"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen ? (
        <div className="absolute inset-x-0 top-full z-50 border-t border-[#E5E5E5] bg-white px-4 py-5 shadow-lg">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-4">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className="text-sm font-bold uppercase tracking-[0.12em] text-[#101010]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  )
}
