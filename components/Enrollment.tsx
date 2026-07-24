
import React from 'react';
import { Check, ClipboardList, CalendarCheck, Sparkles, ArrowRight } from 'lucide-react';
import { ENROLLMENT_STEPS, DOCUMENTATION } from '../constants';
import ScrollReveal from './ScrollReveal';
import { HangingGarland } from './FestaJuninaDecoration';

interface EnrollmentProps {
  onOpenUnitSelector?: () => void;
}

const Enrollment: React.FC<EnrollmentProps> = ({ onOpenUnitSelector }) => {
  return (
    <section id="matriculas" className="py-20 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-brand-navy rounded-[2.5rem] md:rounded-[5rem] p-6 sm:p-12 md:p-32 text-white overflow-hidden relative border-[6px] md:border-[16px] border-brand-offwhite shadow-3xl">
          <HangingGarland className="absolute top-0 left-0 w-full z-20 opacity-80" flagCount={14} flagSize={24} />
          <div className="absolute top-0 right-0 w-[600px] md:w-[1000px] h-[600px] md:h-[1000px] bg-brand-red/5 rounded-full blur-[150px] md:blur-[200px] -mr-[300px] md:-mr-[500px] -mt-[300px] md:-mt-[500px]"></div>
          
          <div className="relative z-10">
            <ScrollReveal className="text-center mb-16 md:mb-32">
              <span className="text-brand-red text-[10px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.5em] uppercase mb-6 md:mb-8 block">Processo Seletivo 2026</span>
              <h2 className="text-2xl sm:text-4xl md:text-[5rem] font-black mb-6 md:mb-10 tracking-tighter leading-tight md:leading-none break-words text-balance">
                A jornada de excelência começa aqui.
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto text-sm sm:text-base md:text-xl font-light leading-relaxed px-2 text-balance">
                Cada vaga é uma oportunidade de transformar o amanhã. Nosso processo é desenhado para acolher talentos e famílias que buscam o extraordinário.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-32 items-start">
              <ScrollReveal>
                <h4 className="text-lg md:text-2xl font-black mb-10 md:mb-16 flex items-center gap-3 md:gap-4 text-brand-red tracking-tight uppercase">
                  <CalendarCheck className="w-5 h-5 md:w-7 md:h-7" /> Etapas de Admissão
                </h4>
                <div className="space-y-10 md:space-y-12">
                  {ENROLLMENT_STEPS.map((step, idx) => (
                    <div key={idx} className="flex gap-4 md:gap-10 group">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[2rem] border-2 border-brand-red/30 flex items-center justify-center font-black text-base md:text-xl text-brand-red shrink-0 group-hover:bg-brand-red group-hover:text-white group-hover:scale-110 transition-all duration-500">
                          {idx + 1}
                        </div>
                        {idx !== ENROLLMENT_STEPS.length - 1 && (
                          <div className="w-px h-full bg-white/10 mt-6 group-hover:bg-brand-red/50 transition-colors"></div>
                        )}
                      </div>
                      <div className="pb-8 md:pb-10 transition-transform duration-500 group-hover:translate-x-2">
                        <h5 className="font-bold text-base md:text-2xl mb-1 md:mb-3 text-white tracking-tight group-hover:text-brand-red transition-colors">{step.title}</h5>
                        <p className="text-white/40 text-xs md:text-lg leading-relaxed font-light">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300} className="lg:sticky lg:top-40 mt-12 lg:mt-0">
                <div className="bg-white/5 backdrop-blur-3xl rounded-[2rem] md:rounded-[4rem] p-6 md:p-16 border border-white/10 shadow-3xl transform transition-transform duration-500 hover:scale-[1.02]">
                  <h4 className="text-lg md:text-2xl font-black mb-8 md:mb-12 flex items-center gap-3 md:gap-4 text-brand-red tracking-tight uppercase">
                    <ClipboardList className="w-5 h-5 md:w-7 md:h-7" /> Documentação
                  </h4>
                  <div className="grid gap-3 md:gap-6 mb-8 md:mb-20">
                    {DOCUMENTATION.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-3 md:gap-5 text-white/60 group cursor-default">
                        <div className="bg-brand-red/20 p-1 rounded-full shrink-0 group-hover:bg-brand-red group-hover:scale-125 transition-all">
                          <Check className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-brand-red group-hover:text-white" />
                        </div>
                        <span className="text-sm md:text-lg font-medium tracking-wide group-hover:text-white transition-colors">{doc}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <button 
                      id="btn-enrollment-reserve-now"
                      onClick={onOpenUnitSelector}
                      className="group relative w-full bg-brand-red text-white py-4 md:py-8 rounded-full font-black text-sm md:text-2xl shadow-[0_20px_40px_-10px_rgba(230,57,70,0.5)] transition-all hover:scale-105 active:scale-95 mb-6 md:mb-8 btn-shimmer flex items-center justify-center gap-2 md:gap-3"
                    >
                      RESERVAR MATRÍCULA
                      <ArrowRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="text-white/20 text-[8px] md:text-[10px] uppercase font-black tracking-[0.3em] md:tracking-[0.4em] animate-pulse">
                      Atendimento exclusivo sob agendamento
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;
