import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export function Section({ id, children, className, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}>
      {(title || subtitle) && (
        <div className="mb-12 space-y-2">
          {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{title}</h2>}
          {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
