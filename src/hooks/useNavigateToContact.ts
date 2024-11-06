import { useCallback } from 'react';

export const useNavigateToContact = () => {
  return useCallback((service?: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // If a service was selected, pre-fill the subject field
      const subjectField = document.getElementById('subject') as HTMLSelectElement;
      if (subjectField && service) {
        subjectField.value = service;
      }
    }
  }, []);
};