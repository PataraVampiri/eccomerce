import type { CartItem } from '../types/cart'
import type { Product } from '../types/product'

export function calculateSubtotal(cart: CartItem[], products: Product[]): number {
  return cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.productId)
    if (!product) {
      return total
    }

    return total + product.price * item.quantity
  }, 0)
}

export function calculateShipping(cart: CartItem[], products: Product[]): number {
  if (!cart.length || calculateSubtotal(cart, products) === 0) {
    return 0
  }

  return 50
}

export function calculateVAT(subtotal: number): number {
  return subtotal * 0.2
}

export function calculateTotal(
  subtotal: number,
  shipping: number,
  vat: number,
): number {
  return subtotal + shipping + vat
}
