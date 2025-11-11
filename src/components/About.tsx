const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-center mb-12">
          Обо мне
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/3c1940aa-ec04-4bd1-8aec-dff2225316b8/files/57441729-8c2b-43f4-b7d7-c466ebd531da.jpg"
              alt="Анна Петрова"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <p className="font-sans text-lg text-foreground leading-relaxed">
              Привет! Я Анна, профессиональный фотограф с 10-летним опытом работы. 
              Моя страсть — запечатлевать искренние эмоции и создавать уникальные истории 
              через объектив камеры.
            </p>
            
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Я специализируюсь на портретной, свадебной и коммерческой фотографии. 
              За годы работы я провела более 500 фотосессий и помогла сохранить 
              самые важные моменты в жизни моих клиентов.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="font-sans text-foreground">10+ лет опыта</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="font-sans text-foreground">500+ счастливых клиентов</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="font-sans text-foreground">Международные награды</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
