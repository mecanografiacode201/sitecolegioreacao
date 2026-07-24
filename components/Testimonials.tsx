
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { SidewalkGarland } from './FestaJuninaDecoration';

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-white overflow-hidden relative">
      <SidewalkGarland side="left" />
      <SidewalkGarland side="right" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal className="text-center mb-16 md:mb-24">
          <h2 className="text-brand-red text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">Depoimentos</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4 md:mb-6 leading-tight">O que diz nossa comunidade</h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light px-2">
            A confiança de pais e o brilho nos olhos de nossos alunos são nosso maior combustível.
          </p>
        </ScrollReveal>

        <div className="relative">
          <div className="flex transition-all duration-700 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="w-full shrink-0 px-2 sm:px-4">
                <div className="max-w-4xl mx-auto bg-brand-offwhite rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 relative border border-slate-100 shadow-xl shadow-slate-100/50 min-h-[400px] flex items-center">
                  <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-red/5 w-40 h-40 md:w-64 md:h-64 -z-0" />
                  
                  <div className="relative z-10 text-center flex flex-col items-center w-full">
                    <p className="text-lg sm:text-2xl md:text-4xl font-medium text-brand-navy leading-relaxed mb-8 md:mb-12 italic max-w-3xl">
                      "{t.text}"
                    </p>
                    <div className="w-12 md:w-16 h-1 bg-brand-red mb-6 md:mb-8 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-xl md:text-2xl text-brand-navy">{t.name}</h4>
                      <p className="text-brand-red font-bold text-xs md:text-sm uppercase tracking-widest mt-1 md:mt-2">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mt-10 md:mt-16">
            <button 
              id="btn-testimonial-prev"
              onClick={prev}
              className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-90"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            
            <div className="flex gap-2 md:gap-3">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  id={`btn-testimonial-dot-${i}`}
                  onClick={() => setActive(i)}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${i === active ? 'bg-brand-red w-8 md:w-10' : 'bg-slate-200 w-1.5 md:w-2'}`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button 
              id="btn-testimonial-next"
              onClick={next}
              className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-slate-200 flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm active:scale-90"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
