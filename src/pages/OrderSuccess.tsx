import { Link, useParams } from 'react-router-dom'
import { formatPrice } from '../lib/utils'
import { getOrderById } from '../lib/orders'
import { usePageMetadata } from '../lib/seo'

export function OrderSuccess() {
  const { orderId } = useParams()
  const order = orderId ? getOrderById(orderId) : undefined

  usePageMetadata({
    title: order ? `Order confirmed | ${order.id}` : 'Order not found | Audiophile',
    description: 'Your order has been placed and is confirmed.',
  })

  if (!order) {
    return (
      <main className="mx-auto max-w-[1280px] px-4 py-20 text-center md:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold uppercase tracking-[0.08em] text-[#101010]">Order not found</h1>
        <Link to="/products" className="inline-flex items-center bg-[#D87D4A] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#FBAF85]">
          Continue shopping
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-[1280px] px-4 py-12 md:px-6 lg:px-8">
      <div className="rounded-none bg-[#F1F1F1] p-8 md:p-12">
        <h1 className="text-4xl font-bold uppercase tracking-[0.08em] text-[#101010]">Order confirmed</h1>
        <p className="mt-4 text-base text-[#101010]/70">Thank you for your purchase.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#101010]/60">Order number</p>
            <p className="mt-2 text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">{order.id}</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#101010]/60">Email</p>
            <p className="mt-2 text-lg font-medium text-[#101010]">{order.customer.email}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="mb-4 text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">Products</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={`${order.id}-${item.productId}`} className="flex items-center justify-between border-b border-[#D2D2D2] pb-4">
                  <div>
                    <p className="font-bold uppercase tracking-[0.08em] text-[#101010]">{item.name}</p>
                    <p className="text-sm text-[#101010]/60">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-[#101010]">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">Delivery</h2>
            <div className="space-y-2 text-[#101010]/70">
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.city}</p>
              <p>{order.shippingAddress.postalCode}</p>
              <p>{order.shippingAddress.country}</p>
            </div>

            <div className="space-y-3 pt-4 text-sm text-[#101010]/70">
              <div className="flex items-center justify-between"><span>Subtotal</span><span>{formatPrice(order.subtotal)}</span></div>
              <div className="flex items-center justify-between"><span>Shipping</span><span>{formatPrice(order.shipping)}</span></div>
              <div className="flex items-center justify-between"><span>VAT</span><span>{formatPrice(order.vat)}</span></div>
              <div className="flex items-center justify-between border-t border-[#D2D2D2] pt-3 text-base font-bold text-[#101010]"><span>Total</span><span>{formatPrice(order.total)}</span></div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/products" className="inline-flex items-center bg-[#D87D4A] px-6 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#FBAF85]">
            Continue shopping
          </Link>
        </div>
      </div>
    </main>
  )
}
