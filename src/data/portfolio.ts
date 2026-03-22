export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image: string
}

export interface Skill {
  name: string
  icon: string
  category: 'Frontend' | 'Backend & DB' | 'Lenguajes' | 'Herramientas/Otros' | 'Soft Skills'
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export const PORTFOLIO_DATA_ES = {
  name: "ALEXANDER GARCIA RANGEL",
  role: "Desarrollador Fullstack",
  description: "Desarrollador Fullstack con sólida capacidad para resolver problemáticas complejas. Especializado en aplicaciones web y móviles eficientes y escalables.",
  about: "Soy desarrollador Fullstack con una sólida capacidad para resolver problemáticas complejas dentro de la industria tecnológica. Me especializo en la creación de aplicaciones web y el desarrollo de apps móviles, enfocándome siempre en entregar soluciones eficientes y escalables. Me desempeño de manera óptima en entornos de alta presión, donde mi capacidad para priorizar, gestionar proyectos y trabajar en equipo me permite cumplir con los objetivos con éxito. Me caracteriza una mentalidad de aprendizaje continuo, estando siempre dispuesto a dominar nuevas tecnologías según lo requiera el proyecto. Busco una oportunidad para potenciar mi carrera profesional y aportar valor inmediato a través de mi experiencia técnica y mi enfoque en la resolución de problemas.",
  email: "agr270404@gmail.com",
  phone: "7711138128",
  location: "Zaragoza Tlahuiltepa Hidalgo, México",
  socials: {
    github: "https://github.com/AlexanderGarcia27",
    linkedin: "https://linkedin.com/in/alexander-garcia-rangel",
    whatsapp: "https://wa.me/527711138128?text=Hola%20Alexander,%20ví%20tu%20portafolio%20y%20me%20gustaría%20ponerme%20en%20contacto%20contigo."
  },
  skills: [
    { name: "React", category: "Frontend", icon: "Code2" },
    { name: "Next.js", category: "Frontend", icon: "Globe" },
    { name: "React Native", category: "Frontend", icon: "Smartphone" },
    { name: "Tailwind CSS", category: "Frontend", icon: "Palette" },
    { name: "Bootstrap 5", category: "Frontend", icon: "Layout" },
    { name: "Node.js", category: "Backend & DB", icon: "Server" },
    { name: "Python", category: "Backend & DB", icon: "Terminal" },
    { name: "MongoDB", category: "Backend & DB", icon: "Database" },
    { name: "MySQL", category: "Backend & DB", icon: "Table" },
    { name: "Firebase", category: "Backend & DB", icon: "Flame" },
    { name: "JavaScript", category: "Lenguajes", icon: "Cpu" },
    { name: "TypeScript", category: "Lenguajes", icon: "FileJson" },
    { name: "HTML5", category: "Lenguajes", icon: "Code" },
    { name: "CSS3", category: "Lenguajes", icon: "Box" },
    { name: "Git", category: "Herramientas/Otros", icon: "GitBranch" },
    { name: "GitHub", category: "Herramientas/Otros", icon: "Github" },
    { name: "Scrum", category: "Herramientas/Otros", icon: "Users" },
    { name: "Render", category: "Herramientas/Otros", icon: "Cloud" },
    { name: "Vercel", category: "Herramientas/Otros", icon: "Zap" },
    { name: "FlutterFlow", category: "Herramientas/Otros", icon: "Layers" },
  ] as Skill[],
  projects: [
    {
      title: "Sistema de Gestión - Materiales El Balcón",
      description: "Desarrollo integral de un sistema para inventario y ventas con control de stock en tiempo real y gestión de productos y categorías.",
      technologies: ["Fullstack", "Node.js", "MySQL", "Inventory Management"],
      link: "https://inventario-el-balcon.vercel.app/login",
      github: "https://github.com/AlexanderGarcia27/Inventario-El-Balcon",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Landing Page Psicología (Volar Adentro)",
      description: "Diseño e implementación de secciones modulares para servicios de psicología y venta de cursos online, optimizado para UX/UI responsivo.",
      technologies: ["Frontend", "React", "UX/UI", "Responsive"],
      link: "https://volaradentro.com/",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "decorazon.app",
      description: "Módulo especializado para la creación de invitaciones digitales dinámicas con enfoque Mobile-first y generación de accesos dinámicos.",
      technologies: ["Next.js", "Mobile-first", "Dynamic Content"],
      link: "https://decorazon.app/",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Plataforma para Cafetería",
      description: "Implementación de soluciones técnicas para la visualización de productos y servicios con navegación fluida y diseño moderno.",
      technologies: ["Frontend", "UI/UX", "Scrum"],
      link: "https://proyecto-cafeteria-sooty.vercel.app/",
      github: "https://github.com/AlexanderGarcia27/Proyecto-Cafeteria",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sistema de Extracción y Procesamiento de Datos (Scraping)",
      description: "Desarrollo de una herramienta automatizada para la recolección de información web y visualización de datos mediante Node.js, Express y React.",
      technologies: ["Node.js", "Express", "React", "Scraping"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ] as Project[],
  experience: [
    {
      company: "Digitalooza, Pachuca Hidalgo",
      role: "Frontend Developer",
      period: "ene 2026 - abr 2026",
      description: "Colaboración en el desarrollo de productos digitales críticos. Diseño de landing pages modulares (Volar Adentro) y sistemas de eventos dinámicos (decorazon.app) con enfoque Mobile-first y optimización UX."
    },
    {
      company: "Materiales el balcon, Zacualtipán de Ángeles Hidalgo",
      role: "Desarrollador Fullstack",
      period: "ago 2025 - dic 2025",
      description: "Diseño y desarrollo de un sistema integral de inventario y ventas. Gestión de stock en tiempo real, optimización de flujo de datos y resolución de incidencias técnicas en un ciclo de 4 meses."
    },
    {
      company: "Proyecto Independiente / Portafolio Personal",
      role: "Scrum Master & Frontend Developer",
      period: "jun 2025 - dic 2025",
      description: "Liderazgo de proyectos bajo Scrum, gestión de backlog y diseño UI/UX. Desarrollo frontend para plataformas comerciales con enfoque en la experiencia del cliente y navegación fluida."
    }
  ] as Experience[]
}

export const PORTFOLIO_DATA_EN = {
  name: "ALEXANDER GARCIA RANGEL",
  role: "Fullstack Developer",
  description: "Fullstack Developer with a solid ability to solve complex problems within the tech industry. Specialized in efficient and scalable web and mobile applications.",
  about: "I am a Fullstack developer with a solid ability to solve complex problems within the tech industry. I specialize in web application creation and mobile app development, always focusing on delivering efficient and scalable solutions. I perform optimally in high-pressure environments, where my ability to prioritize, manage projects, and work in teams allows me to successfully meet objectives. I am characterized by a continuous learning mindset, always ready to master new technologies as required by the project. I am looking for an opportunity to boost my professional career and provide immediate value through my technical expertise and focus on problem resolution.",
  email: "agr270404@gmail.com",
  phone: "7711138128",
  location: "Zaragoza Tlahuiltepa Hidalgo, Mexico",
  socials: {
    github: "https://github.com/AlexanderGarcia27",
    linkedin: "https://linkedin.com/in/alexander-garcia-rangel",
    whatsapp: "https://wa.me/527711138128?text=Hello%20Alexander,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch."
  },
  skills: [
    { name: "React", category: "Frontend", icon: "Code2" },
    { name: "Next.js", category: "Frontend", icon: "Globe" },
    { name: "React Native", category: "Frontend", icon: "Smartphone" },
    { name: "Tailwind CSS", category: "Frontend", icon: "Palette" },
    { name: "Bootstrap 5", category: "Frontend", icon: "Layout" },
    { name: "Node.js", category: "Backend & DB", icon: "Server" },
    { name: "Python", category: "Backend & DB", icon: "Terminal" },
    { name: "MongoDB", category: "Backend & DB", icon: "Database" },
    { name: "MySQL", category: "Backend & DB", icon: "Table" },
    { name: "Firebase", category: "Backend & DB", icon: "Flame" },
    { name: "JavaScript", category: "Lenguajes", icon: "Cpu" },
    { name: "TypeScript", category: "Lenguajes", icon: "FileJson" },
    { name: "HTML5", category: "Lenguajes", icon: "Code" },
    { name: "CSS3", category: "Lenguajes", icon: "Box" },
    { name: "Git", category: "Herramientas/Otros", icon: "GitBranch" },
    { name: "GitHub", category: "Herramientas/Otros", icon: "Github" },
    { name: "Scrum", category: "Herramientas/Otros", icon: "Users" },
    { name: "Render", category: "Herramientas/Otros", icon: "Cloud" },
    { name: "Vercel", category: "Herramientas/Otros", icon: "Zap" },
    { name: "FlutterFlow", category: "Herramientas/Otros", icon: "Layers" },
  ] as Skill[],
  projects: [
    {
      title: "Management System - El Balcón Materials",
      description: "Integral development of an inventory and sales system with real-time stock control and product/category management.",
      technologies: ["Fullstack", "Node.js", "MySQL", "Inventory Management"],
      link: "https://inventario-el-balcon.vercel.app/login",
      github: "https://github.com/AlexanderGarcia27/Inventario-El-Balcon",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Psychology Landing Page (Volar Adentro)",
      description: "Design and implementation of modular sections for psychology services and online course sales, optimized for responsive UX/UI.",
      technologies: ["Frontend", "React", "UX/UI", "Responsive"],
      link: "https://volaradentro.com/",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "decorazon.app",
      description: "Specialized module for creating dynamic digital invitations with a Mobile-first approach and dynamic access generation.",
      technologies: ["Next.js", "Mobile-first", "Dynamic Content"],
      link: "https://decorazon.app/",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Coffee Shop Platform",
      description: "Implementation of technical solutions for the visualization of products and services with smooth navigation and modern design.",
      technologies: ["Frontend", "UI/UX", "Scrum"],
      link: "https://proyecto-cafeteria-sooty.vercel.app/",
      github: "https://github.com/AlexanderGarcia27/Proyecto-Cafeteria",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Data Extraction and Processing System (Scraping)",
      description: "Development of an automated tool for web information gathering and data visualization using Node.js, Express, and React.",
      technologies: ["Node.js", "Express", "React", "Scraping"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ] as Project[],
  experience: [
    {
      company: "Digitalooza, Pachuca Hidalgo",
      role: "Frontend Developer",
      period: "Jan 2026 - Apr 2026",
      description: "Collaboration in the development of critical digital products. Design of modular landing pages (Volar Adentro) and dynamic event systems (decorazon.app) with Mobile-first focus and UX optimization."
    },
    {
      company: "Materiales el balcon, Zacualtipán de Ángeles Hidalgo",
      role: "Fullstack Developer",
      period: "Aug 2025 - Dec 2025",
      description: "Design and development of a comprehensive inventory and sales system. Real-time stock management, data flow optimization, and technical incident resolution in a 4-month cycle."
    },
    {
      company: "Independent Project / Personal Portfolio",
      role: "Scrum Master & Frontend Developer",
      period: "Jun 2025 - Dec 2025",
      description: "Leadership of projects under Scrum, backlog management, and UI/UX design. Frontend development for commercial platforms focusing on customer experience and smooth navigation."
    }
  ] as Experience[]
}

export const PORTFOLIO_DATA = PORTFOLIO_DATA_ES; // Fallback for now to avoid immediate breakage

