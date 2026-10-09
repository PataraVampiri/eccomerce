import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email.'),
  phone: z.string().min(7, 'Phone is required'),
  address: z.string().min(5, 'Address is required'),
  zip: z.string().min(3, 'ZIP is required'),
  city: z.string().min(2, 'City is required'),
  country: z.string().min(2, 'Country is required'),
  cardNumber: z.string().min(12, 'Card number is required'),
  expiry: z.string().min(3, 'Expiry is required'),
  cvv: z.string().min(3, 'CVV is required'),
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>

interface CheckoutFormProps {
  onSubmit: (values: CheckoutFormValues) => void
  isSubmitting: boolean
}

export function CheckoutForm({ onSubmit, isSubmitting }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onBlur',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <section className="space-y-5">
        <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">Billing Details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Name" {...register('name')} error={errors.name?.message} />
          <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
          <Input label="Phone" type="tel" {...register('phone')} error={errors.phone?.message} className="md:col-span-2" />
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">Shipping Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Address" {...register('address')} error={errors.address?.message} className="md:col-span-2" />
          <Input label="ZIP" {...register('zip')} error={errors.zip?.message} />
          <Input label="City" {...register('city')} error={errors.city?.message} />
          <Input label="Country" {...register('country')} error={errors.country?.message} className="md:col-span-2" />
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold uppercase tracking-[0.08em] text-[#101010]">Payment Details</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Card Number"
            {...register('cardNumber')}
            error={errors.cardNumber?.message}
            className="md:col-span-2"
          />
          <Input label="Expiry" {...register('expiry')} error={errors.expiry?.message} />
          <Input label="CVV" {...register('cvv')} error={errors.cvv?.message} />
        </div>
      </section>

      <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
        {isSubmitting ? 'Processing payment...' : 'Continue & pay'}
      </Button>
    </form>
  )
}
