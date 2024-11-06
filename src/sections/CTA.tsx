import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

export function CTA() {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    service: '',
    hasWebsite: true,
    website: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `*Novo Contato do Site*
👤 Nome: ${formData.name}
📱 Telefone: ${formData.phone}
🛠️ Serviço: ${formData.service}
${formData.hasWebsite ? `🌐 Website: ${formData.website}` : '🌐 Não possui website'}
📝 Descrição: ${formData.description}`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL with your number
    const whatsappUrl = `https://wa.me/5511941565335?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Comece Hoje</h2>
          <p className="text-white/70">
            Preencha o formulário abaixo e retornaremos em até 24 horas úteis.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 glass-card p-8 rounded-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Nome</Label>
              <Input 
                id="name" 
                placeholder="Seu nome completo" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Telefone</Label>
              <Input 
                id="phone" 
                placeholder="(11) 99999-9999" 
                required 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white">Serviço de Interesse</Label>
            <Select onValueChange={(value) => handleChange('service', value)}>
              <SelectTrigger className="bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Sites Profissionais">Sites Profissionais</SelectItem>
                <SelectItem value="Sistemas Web">Sistemas Web</SelectItem>
                <SelectItem value="Aplicativos Mobile">Aplicativos Mobile</SelectItem>
                <SelectItem value="Consultoria Tech">Consultoria Tech</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="hasWebsite"
                checked={formData.hasWebsite}
                onCheckedChange={(checked) => handleChange('hasWebsite', checked as boolean)}
                className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor="hasWebsite" className="text-white">Já possui um website?</Label>
            </div>
            {formData.hasWebsite && (
              <Input 
                id="website" 
                placeholder="https://seusite.com.br" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                value={formData.website}
                onChange={(e) => handleChange('website', e.target.value)}
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description" className="text-white">Descrição do Projeto</Label>
            <Textarea
              id="description"
              placeholder="Descreva seu projeto e objetivos..."
              className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary/20 hover:bg-primary/30 text-primary backdrop-blur-sm border border-primary/30"
          >
            Enviar Mensagem via WhatsApp
          </Button>
        </motion.form>
      </div>
    </section>
  );
}