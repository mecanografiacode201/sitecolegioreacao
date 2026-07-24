
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DIFFERENTIALS } from '../constants';
import ScrollReveal from './ScrollReveal';

const Differentials: React.FC = () => {
  return (
    <section className="py-32 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] -mr-[300px] -mt-[300px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] -ml-[200px] -mb-[200px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 mb-8">
              <h2 className="text-brand-red text-sm font-bold tracking-[0.3em] uppercase">Nossos Diferenciais</h2>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-extrabold mb-12 leading-tight tracking-tighter">
              Metodologia <span className="text-brand-red">viva</span> e <br className="hidden md:block" /> conectada com o futuro.
            </h3>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((diff, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-5 bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-brand-red/50 transition-all duration-500 group hover:scale-[1.03] cursor-default"
              >
                <div className="bg-brand-red/20 p-3 rounded-2xl group-hover:scale-110 group-hover:bg-brand-red transition-all duration-500">
                  <CheckCircle2 className="text-brand-red group-hover:text-white" size={24} />
                </div>
                <span className="font-bold text-sm tracking-wide uppercase leading-snug">{diff}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="mt-24 text-center">
          <p className="text-white/40 text-lg font-light max-w-3xl mx-auto leading-relaxed italic">
            "A educação não é preparação para a vida; a educação é a própria vida." — No Colégio Reação, traduzimos essa filosofia em cada pilar de nossa metodologia.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Differentials;
