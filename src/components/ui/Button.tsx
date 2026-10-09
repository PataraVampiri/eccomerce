import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  children: ReactNode
  to?: string
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-[#D87D4A] text-white hover:bg-[#FBAF85]',
  secondary:
    'border border-[#101010] bg-white text-[#101010] hover:bg-[#101010] hover:text-white',
  ghost: 'bg-transparent text-[#101010] hover:text-[#D87D4A]',
}

export function Button({
  variant = 'primary',
  children,
  to,
  className = '',
  ...rest
}: ButtonProps) {
  const shared = `inline-flex items-center justify-center rounded-none px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D87D4A] focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={shared}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={shared} {...rest}>
      {children}
    </button>
  )
}
