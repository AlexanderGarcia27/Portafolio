"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Languages } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const NAV_ITEMS = [
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_projects"), href: "#projects" },
    { label: t("nav_experience"), href: "#experience" },
    { label: t("nav_contact"), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-100 hover:text-violet-400 transition-colors">
          ALEX<span className="text-violet-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-slate-400 hover:text-slate-100 hover:border-zinc-700 transition-all text-xs font-semibold uppercase tracking-wider"
          >
            <Languages size={14} className="text-violet-500" />
            {language}
          </button>
        </div>

        {/* Mobile menu and Language Toggle Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-slate-400 text-[10px] font-bold uppercase"
          >
            {language}
          </button>
          <button
            className="text-slate-300 hover:text-slate-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium text-slate-300 hover:text-slate-100"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
