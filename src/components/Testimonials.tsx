import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    id: 1,
    name: 'Мария Иванова',
    text: 'Анна создала невероятные свадебные фотографии! Каждый кадр — произведение искусства. Профессионализм на высшем уровне.',
    rating: 5
  },
  {
    id: 2,
    name: 'Дмитрий Смирнов',
    text: 'Отличная работа с детьми! Наш малыш обычно не любит фотографироваться, но Анна нашла подход. Результат превзошел ожидания.',
    rating: 5
  },
  {
    id: 3,
    name: 'Елена Волкова',
    text: 'Профессиональная портретная съемка для резюме. Быстро, качественно и по доступной цене. Рекомендую!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-center mb-4">
          Отзывы клиентов
        </h2>
        <p className="font-sans text-center text-muted-foreground mb-12 text-lg">
          Что говорят обо мне мои клиенты
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="font-sans text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-montserrat font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
