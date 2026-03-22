import { PORTFOLIO_DATA } from "@/data/portfolio"
import { Github, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-xl font-bold tracking-tight text-slate-100">
            ALEX<span className="text-violet-500">.</span>
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} - Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex gap-6 items-center">
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-100 transition-colors">
            <Github size={20} />
          </a>
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-100 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={PORTFOLIO_DATA.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-100 transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
