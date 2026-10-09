import type { InputHTMLAttributes } from 'react'
import { forwardRef } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, error, className = '', ...props },
  ref,
) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex w-full flex-col gap-2">
      {label ? (
        <label htmlFor={inputId} className="text-[0.75rem] font-bold uppercase tracking-[0.08em] text-[#101010]">
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        ref={ref}
        className={`w-full border border-[#CFCFCF] bg-white px-4 py-3 text-sm text-[#101010] outline-none transition focus:border-[#D87D4A] ${error ? 'border-red-500' : ''} ${className}`}
        {...props}
      />
      {error ? <span className="text-xs text-red-500">{error}</span> : null}
    </div>
  )
})
