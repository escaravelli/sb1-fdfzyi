import React from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  price: string;
  features: string[];
  special?: boolean;
}

export function ServiceCard({ icon: Icon, title, price, features, special = false }: ServiceCardProps) {
  return (
    <div className={`p-6 rounded-2xl ${special ? 'bg-gradient-to-br from-purple-600 to-indigo-700 text-white transform hover:scale-105' : 'bg-white hover:shadow-xl'} transition-all duration-300 shadow-lg`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-8 h-8 ${special ? 'text-white' : 'text-purple-600'}`} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-3xl font-bold mb-6">
        {price}
        <span className={`text-sm ${special ? 'text-purple-200' : 'text-gray-500'}`}>/projeto</span>
      </p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4" />
            <span className={special ? 'text-purple-100' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${special ? 'bg-white text-purple-600 hover:bg-purple-50' : 'bg-purple-600 text-white hover:bg-purple-700'}`}>
        Solicitar Orçamento
      </button>
    </div>
  );
}