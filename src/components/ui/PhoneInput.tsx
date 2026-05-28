'use client'

import ReactPhoneInput, { type Country } from 'react-phone-number-input/min'
import 'react-phone-number-input/style.css'
import * as flags from 'country-flag-icons/react/3x2'

function SvgFlag({ country }: { country: Country }) {
  const Flag = flags[country as keyof typeof flags]
  if (!Flag) return <span className="w-5 h-auto inline-block" />
  return <Flag className="w-5 h-auto rounded-[2px]" aria-hidden="true" />
}

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export function PhoneInput({ value, onChange, placeholder, className = '' }: PhoneInputProps) {
  return (
    <ReactPhoneInput
      international
      defaultCountry="GR"
      countryOptionsOrder={['GR', 'CY', '|', '...']}
      flagComponent={SvgFlag}
      value={value}
      onChange={(val) => onChange(val ?? '')}
      placeholder={placeholder}
      className={`phone-input-wrapper ${className}`}
    />
  )
}
