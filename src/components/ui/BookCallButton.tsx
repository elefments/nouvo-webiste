'use client'

import { useBookCall } from '@/components/providers/BookCallProvider'

interface BookCallButtonProps {
  label: string
  variant?: 'primary' | 'ghost' | 'accent'
  className?: string
}

export function BookCallButton({ label, variant = 'primary', className = '' }: BookCallButtonProps) {
  const { open } = useBookCall()

  const base = 'inline-flex items-center gap-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'px-6 py-3.5 bg-nc-text text-white hover:bg-nc-accent',
    accent: 'px-6 py-3.5 bg-nc-accent text-white hover:bg-nc-text',
    ghost: 'px-6 py-3.5 border border-nc-border text-nc-muted-dark hover:border-nc-text hover:text-nc-text',
  }

  return (
    <button
      type="button"
      onClick={open}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  )
}
