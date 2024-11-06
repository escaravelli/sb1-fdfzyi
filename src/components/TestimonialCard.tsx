import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  index: number;
}

export function TestimonialCard({ index }: TestimonialCardProps) {
  return (
    <div className="glass-card p-6 rounded-xl">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-white/80 mb-4">
        "Excellent work! The website exceeded all our expectations. Professionalism and quality from start to finish."
      </p>
      <div className="flex items-center gap-3">
        <img
          src={`https://source.unsplash.com/100x100/?portrait&${index}`}
          alt="Client"
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <p className="font-semibold text-white">Client {index}</p>
          <p className="text-sm text-white/60">Company {index}</p>
        </div>
      </div>
    </div>
  );
}