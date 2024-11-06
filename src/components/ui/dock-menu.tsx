import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  Users,
  Phone,
  BookOpen,
  Code2,
  LucideIcon,
} from "lucide-react";

interface DockItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick: () => void;
  href?: string;
}

const DockItem = ({ icon: Icon, label, active, onClick, href }: DockItemProps) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "flex flex-col items-center justify-center w-10 h-10 rounded-lg",
        "transition-all duration-300",
        active 
          ? "bg-primary/20 text-primary shadow-lg backdrop-blur-sm" 
          : "text-white/70 hover:text-white hover:bg-white/10"
      )}
      onClick={onClick}
    >
      <Icon className="w-4 h-4" />
      <span className="text-[8px] font-medium mt-0.5">{label}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export function DockMenu() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  const menuItems = [
    { id: "home", icon: Home, label: "Início" },
    { id: "services", icon: Briefcase, label: "Serviços" },
    { id: "clients", icon: Users, label: "Projetos" },
    { id: "contact", icon: Phone, label: "Contato" },
    { id: "blog", icon: BookOpen, label: "Blog", href: "https://blog.elvio.com.br" },
    { id: "nocode", icon: Code2, label: "No-Code", href: "https://semcodigobr.com.br" }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Find current section
      const sections = menuItems
        .filter(item => !item.href) // Only consider local sections
        .map(item => ({
          id: item.id,
          element: document.getElementById(item.id)
        }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      // Check if we're near the footer
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isNearFooter = footerRect.top <= window.innerHeight - 80;
        setIsVisible(!isNearFooter);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 glass-card rounded-xl px-2 py-1.5 shadow-2xl flex items-center gap-1.5 z-50 scale-90"
    >
      {menuItems.map((item) => (
        <DockItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          active={activeSection === item.id}
          onClick={() => item.href ? null : scrollToSection(item.id)}
          href={item.href}
        />
      ))}
    </motion.div>
  );
}