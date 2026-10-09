import { products } from '../data/products'

export const CART_STORAGE_KEY = 'ecommerce_cart'
export const ORDER_STORAGE_KEY = 'ecommerce_orders'
export const INVENTORY_STORAGE_KEY = 'ecommerce_inventory'

export function safeReadStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') {
    return fallback
  }

  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) {
      return fallback
    }

    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function safeWriteStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Ignore storage errors in browser-only demo app.
  }
}

export function getInventoryMap(): Record<string, number> {
  const fallback = Object.fromEntries(products.map((product) => [product.id, product.stock]))
  return safeReadStorage<Record<string, number>>(INVENTORY_STORAGE_KEY, fallback)
}

export function setInventoryMap(inventory: Record<string, number>): void {
  safeWriteStorage(INVENTORY_STORAGE_KEY, inventory)
}

export function getAvailableStock(productId: string): number {
  const map = getInventoryMap()
  return map[productId] ?? 0
}

export function updateInventoryForOrder(items: Array<{ productId: string; quantity: number }>): void {
  const map = getInventoryMap()

  for (const item of items) {
    const current = map[item.productId] ?? 0
    map[item.productId] = Math.max(0, current - item.quantity)
  }

  setInventoryMap(map)
}
