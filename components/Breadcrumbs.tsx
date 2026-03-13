import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
        <li>
          <a href="/" className="flex items-center gap-1 hover:text-[#cc0033] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-gray-400" />
            {item.href ? (
              <a href={item.href} className="hover:text-[#cc0033] transition-colors">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
