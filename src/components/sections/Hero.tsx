"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight, Github, Linkedin, MessageCircle } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Hero() {
  const { language, data, t } = useLanguage()

  return (
    <section className="relative pt-32 pb-20 px-6 md:pt-48 md:pb-32 overflow-hidden radial-gradient-bg">
      <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          {t("hero_badge")}
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
          {language === 'es' ? 'Hola, soy' : "Hi, I'm"} <span className="gradient-text">{data.name}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {data.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <Button size="lg" className="gap-2 group">
            {t("hero_cta")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
          <div className="flex gap-4 items-center px-4">
            <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors">
              <Github size={24} />
            </a>
            <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={data.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  )
}
