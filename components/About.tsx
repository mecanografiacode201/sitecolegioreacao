import React from 'react';
import { Target, Eye } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { SidewalkGarland } from './FestaJuninaDecoration';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-40 bg-brand-offwhite overflow-hidden relative" aria-labelledby="sobre-heading">
      <SidewalkGarland side="left" />
      <SidewalkGarland side="right" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          <ScrollReveal className="lg:w-1/2">
            <span className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-4 md:mb-6 block">Legado Colégio Reação</span>
            <h2 id="sobre-heading" className="text-3xl sm:text-4xl md:text-7xl font-black text-brand-navy mb-8 md:mb-12 leading-[1.2] md:leading-[1.1] tracking-tighter">
              Tradição que se <br className="hidden sm:block" /><span className="text-brand-red">reinventa</span> todo dia.
            </h2>
            <div className="space-y-6">
              <p className="text-slate-500 text-lg md:text-xl leading-[1.6] md:leading-[1.8] font-light">
                O <strong>Colégio Reação</strong> é o principal <strong>colégio particular no Recanto das Emas, Brasília – DF</strong>, localizado estrategicamente na Quadra 201, Avenida Buriti. Desde 1997, somos protagonistas na educação brasiliense.
              </p>
              <p className="text-slate-500 text-lg md:text-xl leading-[1.6] md:leading-[1.8] font-light">
                Nossa missão como <strong>escola particular de excelência em Brasília</strong> é equilibrar o rigor acadêmico com a sensibilidade humana, formando as novas lideranças do país através de um ensino de alta performance.
              </p>
            </div>
            
            <div className="grid gap-6 md:gap-8 mt-10 md:mt-16">
              {[
                { icon: <Target className="text-brand-red" size={20} />, title: 'Missão de Impacto', desc: 'Educação de alta performance integrando valores éticos e excelência científica no Distrito Federal.' },
                { icon: <Eye className="text-brand-red" size={20} />, title: 'Visão Futurista', desc: 'Ser o epicentro da inovação educacional e a maior referência em colégio particular no Recanto das Emas.' },
              ].map((item, i) => (
                <article key={i} className="flex gap-5 md:gap-8 group">
                  <div className="bg-brand-navy p-4 md:p-5 rounded-2xl md:rounded-3xl h-fit shadow-xl transition-transform group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-brand-navy text-lg md:text-xl mb-1 md:mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
          
          <ScrollReveal className="lg:w-1/2 relative mt-12 lg:mt-0" delay={200}>
            <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(13,43,82,0.2)] border-[10px] md:border-[16px] border-white">
              <img 
                src="https://i.imgur.com/ynCQi7jh.jpeg" 
                alt="Infraestrutura moderna do Colégio Reação - Melhor Colégio Particular no Recanto das Emas, Brasília DF"
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute -bottom-6 md:-bottom-12 -right-4 md:-right-6 bg-brand-navy p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-3xl border-4 md:border-8 border-white">
              <div className="text-center">
                <span className="block text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">28</span>
                <span className="text-[8px] md:text-[10px] text-brand-red font-black tracking-[0.2em] md:tracking-[0.3em] uppercase mt-1 md:mt-2 block">Anos de Excelência Escolar</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;