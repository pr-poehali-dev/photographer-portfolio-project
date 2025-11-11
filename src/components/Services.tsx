import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    icon: 'Users',
    title: 'Портретная съемка',
    description: 'Индивидуальные и семейные фотосессии в студии или на природе',
    price: 'от 5000 ₽'
  },
  {
    id: 2,
    icon: 'Heart',
    title: 'Свадебная фотография',
    description: 'Полное сопровождение вашего особенного дня с профессиональной ретушью',
    price: 'от 30000 ₽'
  },
  {
    id: 3,
    icon: 'Camera',
    title: 'Коммерческая съемка',
    description: 'Фотосессии для бизнеса, каталогов и рекламных материалов',
    price: 'от 10000 ₽'
  },
  {
    id: 4,
    icon: 'Baby',
    title: 'Детская фотография',
    description: 'Трогательные моменты детства в профессиональном исполнении',
    price: 'от 4000 ₽'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-center mb-4">
          Услуги
        </h2>
        <p className="font-sans text-center text-muted-foreground mb-12 text-lg">
          Профессиональная фотосъемка для любых целей
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="hover:shadow-xl transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <CardTitle className="font-montserrat text-2xl">{service.title}</CardTitle>
                <CardDescription className="font-sans text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-montserrat text-primary font-semibold text-xl">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
