import { formatPrice } from '../../lib/utils'

interface CheckoutSummaryProps {
  subtotal: number
  shipping: number
  vat: number
  total: number
}

export function CheckoutSummary({ subtotal, shipping, vat, total }: CheckoutSummaryProps) {
  return (
    <div className="rounded-none bg-[#F1F1F1] p-8">
      <h2 className="mb-6 text-2xl font-bold uppercase tracking-[0.1em] text-[#101010]">Summary</h2>
      <div className="space-y-4 text-sm text-[#101010]/70">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span className="font-bold text-[#101010]">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span className="font-bold text-[#101010]">{formatPrice(shipping)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>VAT</span>
          <span className="font-bold text-[#101010]">{formatPrice(vat)}</span>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[#D1D1D1] pt-5">
        <span className="text-lg font-bold uppercase tracking-[0.08em] text-[#101010]">Total</span>
        <span className="text-lg font-bold text-[#101010]">{formatPrice(total)}</span>
      </div>
    </div>
  )
}
