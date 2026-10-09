import { create } from 'zustand'
import { CART_STORAGE_KEY, safeReadStorage, safeWriteStorage } from '../lib/storage'
import type { CartItem } from '../types/cart'

interface CartState {
  items: CartItem[]
  addItem: (productId: string, quantity?: number) => void
  removeItem: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  clearCart: () => void
  getItemCount: () => number
  getSubtotal: (products: Array<{ id: string; price: number }>) => number
}

const initialItems = safeReadStorage<CartItem[]>(CART_STORAGE_KEY, [])

export const useCartStore = create<CartState>((set, get) => ({
  items: initialItems,
  addItem: (productId: string, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((item) => item.productId === productId)
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        }
      }

      return { items: [...state.items, { productId, quantity }] }
    })
  },
  removeItem: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    }))
  },
  increaseQuantity: (productId: string) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    }))
  },
  decreaseQuantity: (productId: string) => {
    set((state) => ({
      items: state.items
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    }))
  },
  clearCart: () => set({ items: [] }),
  getItemCount: () => get().items.reduce((count, item) => count + item.quantity, 0),
  getSubtotal: (products) =>
    get().items.reduce((total, item) => {
      const product = products.find((entry) => entry.id === item.productId)
      if (!product) {
        return total
      }

      return total + product.price * item.quantity
    }, 0),
}))

useCartStore.subscribe((state) => {
  safeWriteStorage(CART_STORAGE_KEY, state.items)
})
