'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface BookCallContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const BookCallContext = createContext<BookCallContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
})

export function BookCallProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BookCallContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </BookCallContext.Provider>
  )
}

export function useBookCall() {
  return useContext(BookCallContext)
}
