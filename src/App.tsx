import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Services } from './sections/Services';
import { DemoProducts } from './sections/DemoProducts';
import { Clients } from './sections/Clients';
import { Testimonials } from './sections/Testimonials';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';
import { DockMenu } from './components/ui/dock-menu';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <html lang="pt-BR" />
          <meta charSet="utf-8" />
          <title>Elvio Scaravelli - Desenvolvimento Web & Mobile Profissional</title>
          <meta name="description" content="Desenvolvimento profissional de sites, sistemas web e aplicativos mobile. Mais de 10 anos de experiência em soluções digitais de alto impacto." />
          <link rel="canonical" href="https://elvio.com.br/" />
        </Helmet>
        <div className="fixed inset-0 bg-grid-white pointer-events-none" />
        <div className="relative">
          <Hero />
          <Features />
          <Services />
          <DemoProducts />
          <Clients />
          <Testimonials />
          <CTA />
          <Footer />
          <DockMenu />
        </div>
      </div>
    </HelmetProvider>
  );
}