import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Gem, Target, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Carregamento rápido e experiência otimizada"
  },
  {
    icon: Shield,
    title: "Segurança Empresarial",
    description: "Medidas avançadas de proteção de dados"
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Desenvolvimento ágil e transparente"
  },
  {
    icon: Gem,
    title: "Qualidade Premium",
    description: "Desenvolvimento de alto padrão"
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Soluções orientadas aos seus objetivos"
  },
  {
    icon: Users,
    title: "Suporte Dedicado",
    description: "Atendimento 24/7 para seus projetos"
  }
];

export function Features() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Por que Nos Escolher?</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Entregamos excelência através de nossa abordagem abrangente em soluções digitais
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}