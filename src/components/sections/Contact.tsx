"use client"

import { Section } from "@/components/ui/Section"
import { useLanguage } from "@/context/LanguageContext"
import { Button } from "@/components/ui/Button"
import { Mail, MessageSquare, FileDown } from "lucide-react"

export function Contact() {
  const { data, t } = useLanguage()

  return (
    <Section id="contact" title={t("nav_contact")} subtitle={t("contact_section_subtitle")}>
      <div className="max-w-4xl mx-auto glass-effect rounded-[32px] p-8 md:p-16 text-center space-y-10 relative overflow-hidden">
        <div className="space-y-4 relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
            {t("contact_title_h3")}
          </h3>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto">
            {t("contact_subtitle_p")}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 transition-all flex-wrap">
          <a 
            href={`https://mail.google.com/mail/?view=cm&to=${data.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-900/20 transition-all duration-300 active:scale-95 gap-2 select-none"
          >
            <Mail size={20} />
            {t("contact_button")}
          </a>
          <a 
            href={data.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold border border-zinc-700 text-zinc-300 hover:border-violet-500/50 hover:text-violet-400 transition-all duration-300 active:scale-95 gap-2"
          >
            <MessageSquare size={20} />
            {t("contact_whatsapp")}
          </a>
          <a 
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold bg-zinc-800 text-slate-100 hover:bg-zinc-700 transition-all duration-300 active:scale-95 gap-2"
          >
            <FileDown size={20} />
            {t("download_cv")}
          </a>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] -z-0" />
      </div>
    </Section>
  )
}
