import { formatPrice } from '../../lib/utils'
import type { CartSummary } from '../../types/cart'

export function CartSummaryCard({ summary }: { summary: CartSummary }) {
  return (
    <div className="rounded-none bg-[#F1F1F1] p-8">
      <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">Summary</h2>
      <div className="space-y-4 text-sm text-[#101010]/70">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-bold text-[#101010]">{formatPrice(summary.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="font-bold text-[#101010]">{formatPrice(summary.shipping)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>VAT</span>
          <span className="font-bold text-[#101010]">{formatPrice(summary.vat)}</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[#D2D2D2] pt-5">
        <span className="text-lg font-bold uppercase tracking-[0.08em] text-[#101010]">Total</span>
        <span className="text-lg font-bold text-[#101010]">{formatPrice(summary.total)}</span>
      </div>
    </div>
  )
}
