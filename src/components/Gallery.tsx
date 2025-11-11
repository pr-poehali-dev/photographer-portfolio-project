import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryImages = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/3c1940aa-ec04-4bd1-8aec-dff2225316b8/files/57441729-8c2b-43f4-b7d7-c466ebd531da.jpg',
    title: 'Портретная фотография',
    category: 'Портреты'
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/3c1940aa-ec04-4bd1-8aec-dff2225316b8/files/819852f1-4382-451d-9a7d-dd82cd6b372e.jpg',
    title: 'Свадебная фотосессия',
    category: 'Свадьбы'
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/3c1940aa-ec04-4bd1-8aec-dff2225316b8/files/ec707cc4-05ce-480b-a765-e2a32ce758e9.jpg',
    title: 'Студийная съемка',
    category: 'Студия'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
          Портфолио
        </h2>
        <p className="font-sans text-center text-muted-foreground mb-12 text-lg">
          Избранные работы из моей коллекции
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="font-montserrat text-white text-2xl font-semibold mb-2">
                  {image.title}
                </h3>
                <p className="font-sans text-white/80 text-sm">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          {selectedImage && (
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
