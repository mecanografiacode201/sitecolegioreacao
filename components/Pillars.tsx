
import React from 'react';
import { PILLARS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { SidewalkGarland } from './FestaJuninaDecoration';

const Pillars: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative">
      <SidewalkGarland side="left" />
      <SidewalkGarland side="right" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PILLARS.map((pillar, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div 
                className="bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] card-elevation group hover:bg-[#0a2342] transition-all duration-500 h-full border border-slate-100"
              >
                <div className="mb-6 md:mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                  {pillar.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-[#0a2342] group-hover:text-white mb-4 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-slate-500 group-hover:text-white/70 leading-relaxed transition-colors text-base md:text-lg">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
