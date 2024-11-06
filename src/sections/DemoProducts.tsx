import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react';

const demoProducts = [
  {
    title: "Catálogo de Flores Digital",
    description: "Plataforma digital moderna para visualização e venda de arranjos florais. Perfeita para floristas e decoradores que desejam uma presença online profissional.",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://catalogoflores.netlify.app/",
    features: [
      "Catálogo digital responsivo",
      "Gestão de produtos",
      "Integração com WhatsApp",
      "Galeria de imagens",
      "SEO otimizado"
    ],
    gradient: "from-rose-500/20 via-pink-500/20 to-purple-500/20"
  },
  {
    title: "Aprenda FlutterFlow",
    description: "Plataforma educacional completa para desenvolvimento no-code com FlutterFlow. Ideal para desenvolvedores que querem acelerar a criação de apps.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://aprendaflutterflow.netlify.app/",
    features: [
      "Curso completo em vídeo",
      "Projetos práticos",
      "Suporte via Discord",
      "Certificado digital",
      "Updates frequentes"
    ],
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
  }
];

export function DemoProducts() {
  return (
    <section className="py-20 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-60" />

      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Produtos em Destaque
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight mt-6 mb-4"
          >
            Soluções Prontas para Uso
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            Explore nossas soluções em produção e veja na prática a qualidade do nosso trabalho
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {demoProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`overflow-hidden glass-card border-primary/30 h-full relative bg-gradient-to-br ${product.gradient}`}>
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                <CardHeader className="relative -mt-20">
                  <CardTitle className="text-2xl font-bold text-white">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-white/90 text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className="text-white/80 flex items-center gap-3 group/item"
                      >
                        <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                          <Sparkles className="w-4 h-4 text-primary group-hover/item:text-white transition-colors" />
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Button 
                    asChild
                    className="w-full bg-primary/20 hover:bg-primary/30 text-primary backdrop-blur-sm border border-primary/30 h-12 text-base group/button"
                  >
                    <a 
                      href={product.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      Ver Demonstração
                      <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}