import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Laptop, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      </div>
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
              Serviços Profissionais
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Transforme seu Negócio com{' '}
            <span className="gradient-text">
              Excelência Digital
            </span>
          </h1>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Criamos soluções digitais de ponta que ajudam empresas a prosperar no mundo moderno. 
            De aplicações web a apps mobile, entregamos excelência.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="group h-12 px-8 bg-primary/20 hover:bg-primary/30 backdrop-blur-sm text-primary border border-primary/30"
              onClick={() => document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Projetos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Fale Conosco
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Desenvolvimento Web",
                description: "Sites modernos e otimizados para seu negócio"
              },
              {
                icon: Laptop,
                title: "Aplicações Web",
                description: "Sistemas web personalizados para suas necessidades"
              },
              {
                icon: Rocket,
                title: "Apps Mobile",
                description: "Aplicativos nativos para iOS e Android"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 rounded-xl group hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-4 p-2.5 rounded-lg bg-primary/20 w-fit group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}