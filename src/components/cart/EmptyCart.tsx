import { Button } from '../ui/Button'

export function EmptyCart() {
  return (
    <div className="rounded-none border border-[#E5E5E5] bg-[#FAFAFA] p-10 text-center">
      <h2 className="mb-4 text-3xl font-bold uppercase tracking-[0.08em] text-[#101010]">Your cart is empty</h2>
      <p className="mb-8 text-base text-[#101010]/60">Start adding products to your cart.</p>
      <Button to="/products" variant="primary">Continue shopping</Button>
    </div>
  )
}
