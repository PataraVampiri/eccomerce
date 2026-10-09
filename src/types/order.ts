export interface CustomerDetails {
  name: string
  email: string
  phone: string
}

export interface ShippingAddress {
  address: string
  city: string
  postalCode: string
  country: string
}

export interface OrderItem {
  productId: string
  name: string
  quantity: number
  price: number
}

export interface OrderRecord {
  id: string
  items: OrderItem[]
  subtotal: number
  shipping: number
  vat: number
  total: number
  customer: CustomerDetails
  shippingAddress: ShippingAddress
  createdAt: string
}
