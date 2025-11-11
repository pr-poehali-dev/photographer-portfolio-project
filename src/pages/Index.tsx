import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contacts from '@/components/Contacts';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Testimonials />
      <Contacts />
      
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-sm">
            © 2024 Анна Петрова. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
