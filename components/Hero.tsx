
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Sparkles, Timer } from 'lucide-react';
import { HangingGarland } from './FestaJuninaDecoration';

const slides = [
  {
    tag: "VAGAS LIMITADAS PARA 2026",
    title: "Colégio Particular no Recanto das Emas – DF",
    displayTitle: "A excelência que o futuro do seu filho exige",
    subtitle: "O Colégio Reação é referência em aprovações e infraestrutura premium no Recanto das Emas. Onde o potencial se transforma em conquista.",
    cta: "Garantir Matrícula 2026",
    secondaryCta: "Agendar Visita Guiada",
    image: "https://i.imgur.com/a8KWrIa.jpeg", 
    alt: "Estudantes em ambiente moderno e tecnológico de aprendizado no Colégio Reação - Escola Particular no Recanto das Emas"
  },
  {
    tag: "MATRÍCULAS ABERTAS",
    title: "Melhor Escola Particular em Brasília – Recanto das Emas",
    displayTitle: "Ambientes modernos para o aprendizado real",
    subtitle: "Laboratórios de ponta, espaços integrados e o melhor corpo docente da região. A jornada de sucesso no Colégio Reação começa aqui.",
    cta: "Quero matricular agora",
    secondaryCta: "Ver Unidades",
    image: "https://i.imgur.com/jc4po2M.jpeg",
    webp: "https://i.imgur.com/jc4po2M.webp",
    alt: "Arquitetura do Colégio Reação, escola tradicional no Recanto das Emas, DF"
  }
];

interface HeroProps {
  onOpenUnitSelector?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenUnitSelector }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] md:h-screen min-h-[580px] md:min-h-[700px] overflow-hidden bg-brand-navy">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/60 to-transparent z-10"></div>
          
          {/* Background Image with Ken Burns Effect */}
          <div className={`w-full h-full transition-transform duration-[10000ms] ease-linear ${index === current ? 'scale-110' : 'scale-100'}`}>
            <picture>
              {/* @ts-ignore */}
              {slide.webp && <source srcSet={slide.webp} type="image/webp" />}
              <img 
                src={slide.image} 
                className="w-full h-full object-cover" 
                alt={slide.alt}
                width="1920"
                height="1080"
                loading={index === 0 ? "eager" : "lazy"}
                // @ts-ignore
                fetchPriority={index === 0 ? "high" : "low"}
              />
            </picture>
          </div>
          
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-4 sm:px-6 lg:px-32 max-w-7xl mx-auto pt-20 sm:pt-28 md:pt-36 pb-8 sm:pb-12">
            <div className="max-w-4xl mt-4 sm:mt-8 md:mt-10">
              {/* Conversion Badge */}
              <div className={`inline-flex items-center gap-2 bg-brand-red/90 backdrop-blur-md text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-3 sm:mb-4 transition-all duration-1000 delay-200 shadow-xl ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Timer size={13} className="animate-pulse shrink-0" />
                {slide.tag}
              </div>
 
              {/* H1 Otimizado para SEO (O texto visível é displayTitle, mas o H1 contém as keywords) */}
              <h1 className={`text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-5 leading-tight sm:leading-[1.05] tracking-tighter transition-all duration-1000 delay-300 text-balance ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="sr-only">{slide.title}</span>
                {slide.displayTitle}
              </h1>
              <p className={`text-xs sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-6 sm:mb-8 font-light leading-relaxed max-w-2xl transition-all duration-1000 delay-500 text-balance ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {slide.subtitle}
              </p>
              
              <div className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 transition-all duration-1000 delay-700 w-full sm:w-auto ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex flex-col w-full sm:w-auto items-center sm:items-start gap-2">
                  <button
                    id={`btn-hero-cta-main-slide-${index}`}
                    onClick={onOpenUnitSelector}
                    className="group w-full sm:w-auto relative bg-brand-red text-white px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-black text-sm sm:text-lg shadow-[0_20px_50px_-10px_rgba(230,57,70,0.6)] transition-all hover:scale-105 active:scale-95 btn-shimmer flex items-center justify-center gap-3 animate-soft-pulse"
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      {slide.cta}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                  <p className="text-white/40 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] mt-1 text-center sm:text-left">
                    <Sparkles size={11} className="inline mr-1 text-yellow-400" /> Atendimento imediato via WhatsApp
                  </p>
                </div>
                
                <button
                  id={`btn-hero-cta-secondary-slide-${index}`}
                  onClick={onOpenUnitSelector}
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border-2 border-white/20 px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-white hover:text-brand-navy transition-all duration-500 transform hover:scale-105 active:scale-95 text-center h-fit shrink-0"
                >
                  {slide.secondaryCta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Navigation */}
      <div className="absolute bottom-10 md:bottom-16 left-6 md:left-auto md:right-16 z-30 flex space-x-6 items-center">
        <div className="flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              id={`btn-hero-indicator-slide-${i}`}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-700 ${i === current ? 'bg-brand-red w-12' : 'bg-white/20 w-4 hover:bg-white/40'}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative Blur Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-navy to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
