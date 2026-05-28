'use client'

import ReactPhoneInput, { type Country } from 'react-phone-number-input/min'
import 'react-phone-number-input/style.css'

function EmojiFlag({ country }: { country: Country }) {
  const emoji = country
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
  return (
    <span className="text-[18px] leading-none" aria-hidden="true">
      {emoji}
    </span>
  )
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
      flagComponent={EmojiFlag}
      value={value}
      onChange={(val) => onChange(val ?? '')}
      placeholder={placeholder}
      className={`phone-input-wrapper ${className}`}
    />
  )
}
