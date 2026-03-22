"use client"

import { Section } from "@/components/ui/Section"
import { useLanguage } from "@/context/LanguageContext"
import { Skill } from "@/data/portfolio"
import { Card } from "@/components/ui/Card"
import * as Icons from "lucide-react"

export function Skills() {
  const { data, t } = useLanguage()

  const groupedSkills = data.skills.reduce((acc, skill) => {
    const category = skill.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const categoryOrder: Skill['category'][] = [
    'Frontend',
    'Backend & DB',
    'Lenguajes',
    'Herramientas/Otros'
  ]

  const categoryTranslations: Record<string, string> = {
    'Frontend': t("cat_frontend"),
    'Backend & DB': t("cat_backend"),
    'Lenguajes': t("cat_languages"),
    'Herramientas/Otros': t("cat_tools")
  }

  return (
    <Section title={t("skills_title")} subtitle={t("skills_subtitle")}>
      <div className="space-y-12">
        {categoryOrder.filter(cat => groupedSkills[cat]).map((category) => (
          <div key={category} className="space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-3">
              <span className="w-8 h-1 bg-violet-600 rounded-full" />
              {categoryTranslations[category] || category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {groupedSkills[category].map((skill) => {
                const Icon = (Icons as any)[skill.icon] || Icons.Code
                return (
                  <Card key={skill.name} className="flex flex-col items-center justify-center p-6 gap-3 hover:scale-105 group border-zinc-900 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300">
                    <div className="p-2 rounded-xl bg-zinc-800/50 text-slate-400 group-hover:text-violet-400 group-hover:bg-violet-500/10 transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors text-center">
                      {skill.name}
                    </span>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

