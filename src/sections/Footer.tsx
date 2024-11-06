import React from 'react';
import { Github, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 glass-card mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Sobre Nós</h3>
            <p className="text-sm text-white/70">
              Especialista em transformação digital com mais de 10 anos de experiência criando soluções impactantes para empresas modernas.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Sites Profissionais</li>
              <li>Sistemas Web</li>
              <li>Apps Mobile</li>
              <li>Consultoria Tech</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/elvioscaravelli" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/elviosc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@semcodigobr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Elvio Scaravelli. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}