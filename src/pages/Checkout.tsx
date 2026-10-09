import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckoutForm, type CheckoutFormValues } from '../components/checkout/CheckoutForm'
import { CheckoutSummary } from '../components/checkout/CheckoutSummary'
import { products } from '../data/products'
import { calculateShipping, calculateSubtotal, calculateTotal, calculateVAT } from '../lib/calculations'
import { generateOrderId, saveOrder } from '../lib/orders'
import { usePageMetadata } from '../lib/seo'
import { updateInventoryForOrder } from '../lib/storage'
import { useCartStore } from '../store/cartStore'
import { useOrderStore } from '../store/orderStore'

export function Checkout() {
  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)
  const saveOrderToStore = useOrderStore((state) => state.saveOrder)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  usePageMetadata({
    title: 'Checkout | Audiophile',
    description: 'Complete your premium audio order with a secure demo checkout.',
  })

  if (!items.length) {
    return (
      <main className="mx-auto max-w-[1280px] px-4 py-20 text-center md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold uppercase tracking-[0.08em] text-[#101010]">Your cart is empty</h1>
      </main>
    )
  }

  const subtotal = calculateSubtotal(items, products)
  const shipping = calculateShipping(items, products)
  const vat = calculateVAT(subtotal)
  const total = calculateTotal(subtotal, shipping, vat)

  const handleSubmit = async (values: CheckoutFormValues) => {
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const orderId = generateOrderId()
    const orderItems = items
      .map((item) => {
        const product = products.find((entry) => entry.id === item.productId)
        if (!product) {
          return null
        }

        return {
          productId: product.id,
          name: product.name,
          quantity: item.quantity,
          price: product.price,
        }
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)

    const order = {
      id: orderId,
      items: orderItems,
      subtotal,
      shipping,
      vat,
      total,
      customer: {
        name: values.name,
        email: values.email,
        phone: values.phone,
      },
      shippingAddress: {
        address: values.address,
        city: values.city,
        postalCode: values.zip,
        country: values.country,
      },
      createdAt: new Date().toISOString(),
    }

    saveOrder(order)
    saveOrderToStore(order)
    updateInventoryForOrder(items)
    clearCart()
    setIsSubmitting(false)
    navigate(`/order-success/${orderId}`)
  }

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-none bg-[#FAFAFA] p-6 md:p-8">
          <h1 className="mb-8 text-4xl font-bold uppercase tracking-[0.08em] text-[#101010]">Checkout</h1>
          <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </section>

        <aside className="space-y-6">
          <CheckoutSummary subtotal={subtotal} shipping={shipping} vat={vat} total={total} />
        </aside>
      </div>
    </main>
  )
}
