import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Globe, ExternalLink, Code2, Briefcase, Building2, GraduationCap, Car, Heart, Flower } from 'lucide-react';

interface Technology {
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
  technologies: Technology[];
  icon: typeof Globe;
}

const projects: Project[] = [
  {
    title: "Ocyan Reef",
    description: "Criação e venda de corais marinhos de maneira sustentável no Brasil",
    url: "https://ocyanreef.com.br",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=800",
    category: "E-commerce",
    icon: Briefcase,
    technologies: [
      { name: "WordPress", color: "bg-blue-600" },
      { name: "WooCommerce", color: "bg-purple-600" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "SEO", color: "bg-green-600" }
    ]
  },
  {
    title: "Dra. Luciana Maluf",
    description: "Site profissional para dermatologista com 21 anos de experiência",
    url: "https://lucianamaluf.com.br",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    category: "Saúde",
    icon: Heart,
    technologies: [
      { name: "WordPress", color: "bg-blue-600" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "Cloudflare", color: "bg-orange-600" },
      { name: "SEO", color: "bg-green-600" }
    ]
  },
  {
    title: "InfoEnem",
    description: "O maior portal do Enem com notícias, simulados e materiais",
    url: "https://infoenem.com.br",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    category: "Educação",
    icon: GraduationCap,
    technologies: [
      { name: "WordPress", color: "bg-blue-600" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "Cloudflare", color: "bg-orange-600" },
      { name: "SEO", color: "bg-green-600" }
    ]
  },
  {
    title: "Ateliê da Flor",
    description: "Arranjos florais únicos e deslumbrantes em Itu, SP",
    url: "https://ateliedaflor.com.br",
    image: "https://images.unsplash.com/photo-1508182314998-3bd49473002f?auto=format&fit=crop&q=80&w=800",
    category: "E-commerce",
    icon: Flower,
    technologies: [
      { name: "React", color: "bg-cyan-600" },
      { name: "Next.js", color: "bg-black" },
      { name: "Tailwind", color: "bg-sky-600" },
      { name: "SEO", color: "bg-green-600" }
    ]
  },
  {
    title: "Instituto Santa Luzia",
    description: "Atendimento especializado para pessoas com deficiência visual",
    url: "https://institutosantaluzia.org.br",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    category: "Institucional",
    icon: Building2,
    technologies: [
      { name: "WordPress", color: "bg-blue-600" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "SEO", color: "bg-green-600" }
    ]
  },
  {
    title: "Itu Motors",
    description: "Loja de veículos novos e seminovos em Itu",
    url: "https://itumotors.com.br",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    category: "Automotivo",
    icon: Car,
    technologies: [
      { name: "Flutter", color: "bg-blue-500" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "SEO", color: "bg-green-600" }
    ]
  },
  {
    title: "ATR Automóveis",
    description: "Plataforma moderna para venda de veículos novos e seminovos",
    url: "https://atrautomoveis.netlify.app",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    category: "Automotivo",
    icon: Car,
    technologies: [
      { name: "Next.js", color: "bg-black" },
      { name: "JavaScript", color: "bg-yellow-500" },
      { name: "SEO", color: "bg-green-600" }
    ]
  },
  {
    title: "Sem Código BR",
    description: "Portal dedicado ao desenvolvimento no-code e low-code",
    url: "https://semcodigobr.com.br",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    category: "Tecnologia",
    icon: Code2,
    technologies: [
      { name: "WordPress", color: "bg-blue-600" },
      { name: "PHP", color: "bg-indigo-600" },
      { name: "VPS", color: "bg-purple-600" },
      { name: "SEO", color: "bg-green-600" }
    ]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Portfólio</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Conheça alguns dos projetos que desenvolvemos e as tecnologias utilizadas em cada um.
          </p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.url} variants={item}>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer glass-card">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 transition-colors z-10" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2 text-white">
                            <Icon className="w-5 h-5 text-primary" />
                            {project.title}
                          </CardTitle>
                          <span className="text-xs font-medium text-white/70 bg-white/10 px-2 py-1 rounded">
                            {project.category}
                          </span>
                        </div>
                        <CardDescription className="text-white/70">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech.name}
                              className={`px-2 py-1 rounded-full text-xs font-medium text-white ${tech.color}`}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 glass-card border-white/20">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">{project.title}</h4>
                      <p className="text-sm text-white/70">{project.description}</p>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80"
                      >
                        Visitar site
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}