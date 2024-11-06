import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Rocket, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigateToContact } from '@/hooks/useNavigateToContact';

const services = [
  {
    icon: Globe,
    title: "Sites Profissionais",
    description: "Sites modernos e otimizados para resultados",
    features: [
      "Design responsivo personalizado",
      "Otimização para SEO",
      "Integração com Analytics",
      "Painel administrativo",
      "Hospedagem inclusa",
      "Suporte técnico"
    ]
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description: "Aplicações web sob medida para seu negócio",
    features: [
      "Análise de requisitos",
      "Desenvolvimento personalizado",
      "API RESTful",
      "Banco de dados otimizado",
      "Painel administrativo completo",
      "Documentação técnica"
    ]
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos para iOS e Android",
    features: [
      "Design de interface nativo",
      "Desenvolvimento Flutter",
      "Notificações push",
      "Integração com APIs",
      "Publicação nas lojas",
      "Manutenção contínua"
    ],
    featured: true
  },
  {
    icon: Rocket,
    title: "Consultoria Tech",
    description: "Orientação especializada para seu projeto",
    features: [
      "Análise de viabilidade",
      "Escolha de tecnologias",
      "Arquitetura de software",
      "Revisão de código",
      "Otimização de performance",
      "Mentoria técnica"
    ]
  }
];

export function Services() {
  const navigateToContact = useNavigateToContact();

  return (
    <section id="services" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Nossos Serviços</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Soluções completas em desenvolvimento de software para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`relative h-full glass-card hover:bg-white/20 transition-all duration-300 ${service.featured ? 'border-primary shadow-lg' : ''}`}>
                  {service.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full border border-primary/30">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <CardTitle className="text-white">{service.title}</CardTitle>
                    <CardDescription className="text-white/70">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-lg font-medium text-primary">
                      Consulte valores
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-4 bg-primary/20 hover:bg-primary/30 text-primary backdrop-blur-sm border border-primary/30"
                      onClick={() => navigateToContact(service.title)}
                    >
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}