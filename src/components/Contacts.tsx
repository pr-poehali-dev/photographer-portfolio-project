import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Я свяжусь с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacts" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-center mb-4">
          Контакты
        </h2>
        <p className="font-sans text-center text-muted-foreground mb-12 text-lg">
          Свяжитесь со мной для обсуждения фотосессии
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="font-montserrat text-2xl">Напишите мне</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="font-sans"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="font-sans"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="font-sans min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full font-montserrat font-semibold">
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-1">Телефон</h3>
                    <p className="font-sans text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-1">Email</h3>
                    <p className="font-sans text-muted-foreground">anna@photographer.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold mb-1">Адрес</h3>
                    <p className="font-sans text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-montserrat font-semibold mb-4">Социальные сети</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Facebook" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Icon name="Mail" size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
