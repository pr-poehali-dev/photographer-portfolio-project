import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="font-montserrat text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground">
          Анна Петрова
        </h1>
        <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Профессиональный фотограф с 10-летним опытом работы
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="font-montserrat font-semibold"
          >
            Посмотреть работы
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contacts')}
            className="font-montserrat font-semibold"
          >
            Связаться со мной
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
