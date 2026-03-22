"use client"

import { Section } from "@/components/ui/Section"
import { useLanguage } from "@/context/LanguageContext"

export function About() {
  const { data, t } = useLanguage()

  return (
    <Section id="about" title={t("about_title")} subtitle={t("about_subtitle")}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            {data.about}
          </p>
        </div>
        
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden glass-effect border-2 border-zinc-800 group">
             <img 
               src="/images/about_abstract.png" 
               alt="Abstract Development Visual"
               className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-600/20 blur-3xl -z-10" />
        </div>
      </div>
    </Section>
  )
}
