"use client"

import { Section } from "@/components/ui/Section"
import { useLanguage } from "@/context/LanguageContext"
import { Card } from "@/components/ui/Card"

export function Experience() {
  const { data, t } = useLanguage()

  return (
    <Section id="experience" title={t("exp_title")} subtitle={t("exp_subtitle")}>
      <div className="space-y-6 max-w-4xl">
        {data.experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 border-l border-zinc-800 pb-12 last:pb-0">
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-violet-600 border-4 border-zinc-950 shadow-lg shadow-violet-900/50" />
            
            <div className="space-y-4">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                  <span className="text-sm font-medium text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20 inline-block w-fit">
                    {exp.period}
                  </span>
               </div>
               
               <p className="text-lg font-medium text-slate-300 italic">{exp.company}</p>
               
               <Card className="p-6 border-zinc-800/30">
                  <p className="text-slate-400 leading-relaxed italic">
                    {exp.description}
                  </p>
               </Card>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
