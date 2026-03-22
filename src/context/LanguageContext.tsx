"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import { PORTFOLIO_DATA_ES, PORTFOLIO_DATA_EN } from '@/data/portfolio'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  data: typeof PORTFOLIO_DATA_ES
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_experience: "Experiencia",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    contact_title: "¿Tienes un proyecto en mente?",
    contact_subtitle: "Demos el siguiente paso profesional. Estoy disponible para nuevas oportunidades y colaboraciones.",
    contact_button: "Enviar email",
    contact_whatsapp: "Agendar llamada",
    projects_subtitle: "Una selección de mis trabajos más recientes y destacados.",
    skills_subtitle: "Un conjunto de herramientas y tecnologías que utilizo para dar vida a mis proyectos.",
    exp_subtitle: "Mi trayectoria profesional en el desarrollo de software.",
    exp_title: "Experiencia",
    skills_title: "Habilidades",
    hero_badge: "Disponible para nuevos proyectos",
    hero_cta: "Ver mis proyectos",
    about_title: "Sobre mí",
    about_subtitle: "Un vistazo a mi trayectoria y pasión por el desarrollo.",
    projects_title: "Portafolio",
    cat_frontend: "Frontend",
    cat_backend: "Backend & DB",
    cat_languages: "Lenguajes",
    cat_tools: "Herramientas y Otros",
    view_site: "Sitio Web",
    view_repo: "GitHub",
    contact_title_h3: "Empecemos a trabajar juntos",
    contact_subtitle_p: "Actualmente estoy disponible para nuevos proyectos y oportunidades de colaboración.",
    contact_section_subtitle: "¿Tienes un proyecto en mente? Hagámoslo realidad.",
    download_cv: "Descargar CV",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_contact: "Contact",
    contact_title: "Have a project in mind?",
    contact_subtitle: "Let's take the next professional step. I'm available for new opportunities and collaborations.",
    contact_button: "Send email",
    contact_whatsapp: "Schedule call",
    projects_subtitle: "A selection of my most recent and outstanding work.",
    skills_subtitle: "A set of tools and technologies I use to bring my projects to life.",
    exp_subtitle: "My professional journey in software development.",
    exp_title: "Experience",
    skills_title: "Skills",
    hero_badge: "Available for new projects",
    hero_cta: "See my work",
    about_title: "About me",
    about_subtitle: "A professional look at my background and passion for software development.",
    projects_title: "Portfolio",
    cat_frontend: "Frontend",
    cat_backend: "Backend & DB",
    cat_languages: "Languages",
    cat_tools: "Tools & Others",
    view_site: "Visit Site",
    view_repo: "GitHub",
    contact_title_h3: "Let's work together",
    contact_subtitle_p: "I'm currently available for new projects and collaboration opportunities.",
    contact_section_subtitle: "Have an idea in mind? Let's make it happen.",
    download_cv: "Download CV",
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const data = language === 'es' ? PORTFOLIO_DATA_ES : PORTFOLIO_DATA_EN

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['es']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
