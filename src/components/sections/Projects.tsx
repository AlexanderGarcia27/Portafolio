"use client"

import { Section } from "@/components/ui/Section"
import { useLanguage } from "@/context/LanguageContext"
import { Card } from "@/components/ui/Card"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const { data, t } = useLanguage()

  return (
    <Section id="projects" title={t("projects_title")} subtitle={t("projects_subtitle")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project) => (
          <Card key={project.title} className="p-0 overflow-hidden flex flex-col group border-zinc-800/30">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              {/* Desktop Hover Overlay */}
              <div className="absolute inset-0 bg-zinc-950/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center gap-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition-colors">
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Mobile Links - Visible only on mobile */}
              {(project.link || project.github) && (
                <div className="flex gap-4 md:hidden py-1 border-y border-zinc-800/30">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-violet-400 text-xs font-semibold py-2 hover:text-violet-300 transition-colors">
                      <ExternalLink size={14} />
                      {t("view_site")}
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 text-xs font-semibold py-2 hover:text-slate-200 transition-colors">
                      <Github size={14} />
                      {t("view_repo")}
                    </a>
                  )}
                </div>
              )}
              
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-zinc-800/50 text-slate-400 border border-zinc-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
