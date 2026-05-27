'use client'

import { useState } from 'react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  /** Index of initially open item (default: 0 = first) */
  defaultOpen?: number
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set(defaultOpen >= 0 ? [defaultOpen] : []))

  function toggle(index: number) {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <div className="divide-y divide-nc-border border-t border-nc-border">
      {items.map((item, i) => {
        const isOpen = openSet.has(i)
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => toggle(i)}
              className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-nc-accent"
              aria-expanded={isOpen}
            >
              <h3 className={`text-[16px] font-medium transition-colors duration-200 group-hover:text-nc-accent ${isOpen ? 'text-nc-accent' : 'text-nc-text'}`}>
                {item.question}
              </h3>
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-nc-border transition-all duration-300 group-hover:border-nc-accent">
                {/* Horizontal line (always visible) */}
                <span className="absolute h-[1.5px] w-3 rounded-full bg-nc-text transition-colors duration-200 group-hover:bg-nc-accent" />
                {/* Vertical line (rotates away when open) */}
                <span
                  className={`absolute h-3 w-[1.5px] rounded-full bg-nc-text transition-all duration-300 group-hover:bg-nc-accent ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-[14px] leading-relaxed text-nc-muted-dark max-w-[700px]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
