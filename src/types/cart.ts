export interface CartItem {
  productId: string
  quantity: number
}

export interface CartSummary {
  subtotal: number
  shipping: number
  vat: number
  total: number
}
