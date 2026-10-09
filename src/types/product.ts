export type ProductCategory = 'headphones' | 'speakers' | 'earphones'

export interface IncludedItem {
  quantity: number
  item: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  description: string
  shortDescription: string
  price: number
  images: string[]
  thumbnail: string
  features: string[]
  includedItems: IncludedItem[]
  isNew: boolean
  stock: number
}
