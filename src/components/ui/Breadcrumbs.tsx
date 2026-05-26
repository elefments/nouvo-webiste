import Link from 'next/link'

type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-nc-muted-mid mb-8">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && (
            <span className="text-nc-muted-mid/50 select-none">/</span>
          )}
          {item.href && i < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-nc-text transition-colors duration-150"
            >
              {item.label}
            </Link>
          ) : (
            <span className={i === items.length - 1 ? 'text-nc-text font-medium' : ''}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
