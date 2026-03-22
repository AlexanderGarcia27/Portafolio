import { cn } from "@/lib/utils"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-900/20",
      secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
      ghost: "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50",
      outline: "bg-transparent border border-zinc-700 text-zinc-300 hover:border-violet-500/50 hover:text-violet-400"
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-medium",
      lg: "px-8 py-4 text-lg font-semibold"
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
