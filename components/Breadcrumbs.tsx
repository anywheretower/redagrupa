import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumbs({ items, currentPath }: { items: BreadcrumbItem[]; currentPath?: string }) {
  const baseUrl = "https://www.redagrupa.cl"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: baseUrl,
      },
      ...items.map((item, index) => {
        const isLast = index === items.length - 1
        const url = item.href
          ? `${baseUrl}${item.href}`
          : isLast && currentPath
            ? `${baseUrl}${currentPath}`
            : undefined
        return {
          "@type": "ListItem",
          position: index + 2,
          name: item.label,
          ...(url ? { item: url } : {}),
        }
      }),
    ],
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
        <li>
          <Link href="/" className="flex items-center gap-1 hover:text-[#cc0033] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-gray-400" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#cc0033] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
