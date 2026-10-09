import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CategoryItem } from '../../data/categories'

export function CategoryCard({ item }: { item: CategoryItem }) {
  return (
    <div className="group relative overflow-hidden bg-[#F1F1F1] px-6 pb-8 pt-20 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#F1F1F1]">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-40 object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-bold uppercase tracking-[0.08em] text-[#101010]">{item.name}</h3>
        <Link
          to={`/category/${item.slug}`}
          className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.15em] text-[#101010]/70 transition group-hover:text-[#D87D4A]"
        >
          Shop <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
