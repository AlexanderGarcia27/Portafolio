import { cn } from "@/lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "p-6 rounded-2xl glass-effect hover:border-zinc-700/80 transition-all duration-500",
      className
    )}>
      {children}
    </div>
  )
}
