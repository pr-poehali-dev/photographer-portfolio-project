import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'Обо мне' },
  { id: 'testimonials', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="font-montserrat text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            АП
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="font-sans font-medium"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
