import { CartItem as CartRow } from '../components/cart/CartItem'
import { CartSummaryCard } from '../components/cart/CartSummary'
import { EmptyCart } from '../components/cart/EmptyCart'
import { Button } from '../components/ui/Button'
import { products } from '../data/products'
import { calculateShipping, calculateSubtotal, calculateTotal, calculateVAT } from '../lib/calculations'
import { usePageMetadata } from '../lib/seo'
import { useCartStore } from '../store/cartStore'

export function Cart() {
  const items = useCartStore((state) => state.items)
  const clearCart = useCartStore((state) => state.clearCart)

  usePageMetadata({
    title: 'Your cart | Audiophile',
    description: 'Review your selected premium audio products and complete checkout.',
  })

  if (!items.length) {
    return (
      <main className="mx-auto max-w-[1280px] px-4 py-20 md:px-6 lg:px-8">
        <EmptyCart />
      </main>
    )
  }

  const subtotal = calculateSubtotal(items, products)
  const shipping = calculateShipping(items, products)
  const vat = calculateVAT(subtotal)
  const total = calculateTotal(subtotal, shipping, vat)

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="bg-[#FAFAFA] p-6 md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold uppercase tracking-[0.08em] text-[#101010]">Cart</h1>
            <button type="button" onClick={clearCart} className="text-sm font-bold uppercase tracking-[0.12em] text-[#101010]/60 transition hover:text-[#D87D4A]">
              Clear cart
            </button>
          </div>

          <div>
            {items.map((item) => {
              const product = products.find((entry) => entry.id === item.productId)
              if (!product) {
                return null
              }

              return <CartRow key={item.productId} product={product} quantity={item.quantity} />
            })}
          </div>
        </section>

        <aside className="space-y-6">
          <CartSummaryCard summary={{ subtotal, shipping, vat, total }} />
          <Button to="/checkout" className="w-full">Checkout</Button>
        </aside>
      </div>
    </main>
  )
}
