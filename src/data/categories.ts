import type { ProductCategory } from '../types/product'

export interface CategoryItem {
  name: string
  slug: ProductCategory
  description: string
  image: string
}

export const categories: CategoryItem[] = [
  {
    name: 'Headphones',
    slug: 'headphones',
    description: 'Immersive sound crafted for everyday listening.',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Speakers',
    slug: 'speakers',
    description: 'Room-filling audio designed for your space.',
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Earphones',
    slug: 'earphones',
    description: 'Portable precision for commuting and working out.',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  },
]
