import { Input } from '../ui/Input'

export function PaymentForm() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <Input label="Card Number" name="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <Input label="Expiry" name="expiry" placeholder="MM/YY" />
        <Input label="CVV" name="cvv" placeholder="123" />
      </div>
    </div>
  )
}
