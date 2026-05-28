'use client'

import ReactPhoneInput from 'react-phone-number-input/min'
import 'react-phone-number-input/style.css'

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
      value={value}
      onChange={(val) => onChange(val ?? '')}
      placeholder={placeholder}
      className={`phone-input-wrapper ${className}`}
    />
  )
}
