
import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle, ClipboardList, Calendar, MapPin, Star, Sparkles } from 'lucide-react';
import { UNITS, ENROLLMENT_STEPS, DOCUMENTATION } from '../constants';
import ScrollReveal from './ScrollReveal';
import { HangingGarland } from './FestaJuninaDecoration';

const SejaReacao2026: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Escala restaurada para Desktop */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-40 overflow-hidden bg-brand-navy">
        <HangingGarland className="absolute top-20 sm:top-24 left-0 w-full z-40 opacity-95" flagCount={16} flagSize={28} />
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050337458-5bd55f95f938?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Ambiente educacional premium"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-brand-navy"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <ScrollReveal>
            <span className="bg-brand-red text-white px-4 md:px-10 py-1.5 md:py-4 rounded-full text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.6em] inline-block mb-6 md:mb-12 shadow-2xl animate-pulse">
              Matrículas Abertas 2026
            </span>
            <h1 className="text-2xl sm:text-5xl md:text-8xl xl:text-9xl font-black text-white mb-4 sm:mb-6 md:mb-10 tracking-tighter leading-tight">
              Garanta o lugar do <br/><span className="text-brand-red italic font-serif">seu filho no topo.</span>
            </h1>
            <p className="text-white/60 text-xs sm:text-lg md:text-2xl xl:text-3xl max-w-4xl mx-auto font-light leading-relaxed mb-6 sm:mb-8 md:mb-16">
              O Colégio Reação prepara seu filho para os desafios do futuro com excelência acadêmica e valores sólidos. A jornada de sucesso começa hoje.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Central - Otimizado para Grid de PC */}
      <section className="py-10 md:py-32 -mt-10 md:-mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {UNITS.map((unit, idx) => (
              <ScrollReveal key={unit.id} delay={idx * 200}>
                <div className="bg-white rounded-[1.5rem] md:rounded-[4rem] p-6 md:p-16 shadow-2xl border-2 border-brand-offwhite group hover:border-brand-red transition-all duration-700">
                  <div className="flex justify-between items-center mb-6 md:mb-12">
                    <div className="bg-green-500/10 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                      <MessageCircle size={24} className="md:w-12 md:h-12" />
                    </div>
                    <span className="text-[7px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-slate-100">
                      ATENDIMENTO IMEDIATO
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-5xl font-black text-brand-navy mb-2 md:mb-6">{unit.name}</h3>
                  <p className="text-slate-500 mb-6 md:mb-12 text-xs md:text-xl font-medium">
                    Fale com nossa consultora especializada da Unidade {unit.id === 1 ? '206' : '201'}.
                  </p>
                  
                  <div className="space-y-3 md:space-y-6 mb-8 md:mb-16 text-[10px] md:text-lg">
                    <div className="flex items-center gap-3 text-brand-navy font-bold">
                      <MapPin size={14} className="text-brand-red md:w-6 md:h-6 shrink-0" />
                      <span className="truncate">{unit.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-navy font-bold">
                      <Sparkles size={14} className="text-brand-red md:w-6 md:h-6 shrink-0" />
                      <span>{unit.levels.join(' • ')}</span>
                    </div>
                  </div>

                  <a 
                    href={unit.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 bg-green-500 text-white py-4 md:py-10 rounded-xl md:rounded-[3rem] font-black text-sm md:text-3xl hover:bg-green-600 hover:scale-[1.03] transition-all shadow-xl shadow-green-500/20 btn-shimmer w-full uppercase tracking-tight"
                  >
                    INICIAR CONVERSA <ArrowRight size={18} className="md:w-10 md:h-10" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Simplificado - PC */}
      <section className="py-16 md:py-48 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-32">
            <div className="lg:w-1/2">
              <ScrollReveal>
                <h2 className="text-brand-red text-[8px] md:text-sm font-black tracking-[0.4em] md:tracking-[0.6em] uppercase mb-4 md:mb-10">Agendamento</h2>
                <h3 className="text-2xl md:text-7xl font-black text-brand-navy mb-6 md:mb-16 tracking-tighter leading-none">Como ingressar <br/>em 2026?</h3>
                <p className="text-slate-500 text-sm md:text-2xl font-light leading-relaxed mb-8 md:mb-16">
                  Nosso processo de admissão é criterioso e focado em alinhar os valores da sua família com a nossa proposta pedagógica de excelência.
                </p>
                <div className="bg-brand-navy p-6 md:p-16 rounded-2xl md:rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                    <Calendar size={120} />
                  </div>
                  <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
                    <div className="bg-brand-red p-3 md:p-6 rounded-xl md:rounded-[2rem] shrink-0">
                      <Calendar size={20} className="md:w-10 md:h-10" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-3xl">Agende sua Visita</h4>
                      <p className="text-white/40 text-[8px] md:text-lg">Vagas limitadas por turma e segmento.</p>
                    </div>
                  </div>
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full bg-white text-brand-navy py-4 md:py-8 rounded-xl md:rounded-[2rem] font-black text-sm md:text-xl hover:bg-brand-red hover:text-white transition-all shadow-xl">
                    SELECIONAR UNIDADE NO TOPO
                  </button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 space-y-4 md:space-y-12">
              {ENROLLMENT_STEPS.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 150}>
                  <div className="flex gap-4 md:gap-12 group">
                    <div className="w-10 h-10 md:w-24 md:h-24 shrink-0 bg-white rounded-xl md:rounded-[2.5rem] flex items-center justify-center font-black text-brand-red text-base md:text-4xl shadow-sm border-2 border-slate-100 group-hover:bg-brand-red group-hover:text-white group-hover:scale-105 transition-all">
                      0{idx + 1}
                    </div>
                    <div className="pt-1 md:pt-4">
                      <h4 className="text-base md:text-3xl font-black text-brand-navy mb-1 md:mb-4">{step.title}</h4>
                      <p className="text-slate-500 text-[10px] md:text-xl font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist de Documentos - PC */}
      <section className="py-16 md:py-48 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <ScrollReveal className="bg-brand-navy rounded-[2rem] md:rounded-[5rem] p-8 md:p-24 text-white relative overflow-hidden border-[8px] md:border-[24px] border-brand-offwhite shadow-3xl">
            <h3 className="text-xl md:text-6xl font-black mb-10 md:mb-20 flex items-center gap-4 md:gap-10">
              <ClipboardList size={32} className="text-brand-red md:w-16 md:h-16" /> Documentação
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
              {DOCUMENTATION.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 md:gap-6 group">
                  <div className="bg-brand-red/20 p-2 md:p-3 rounded-full group-hover:bg-brand-red transition-all">
                    <CheckCircle size={14} className="text-brand-red md:w-6 md:h-6 group-hover:text-white" />
                  </div>
                  <span className="font-bold text-xs md:text-xl text-white/80 group-hover:text-white transition-colors">{doc}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 md:mt-24 text-white/20 text-[8px] md:text-sm font-black uppercase tracking-[0.5em] text-center italic">
              * Todos os documentos originais devem ser apresentados fisicamente na secretaria
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final - PC */}
      <section className="py-20 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-8xl font-black mb-10 md:mb-24 tracking-tighter leading-none">
              Não espere o <span className="text-brand-red italic">amanhã</span> chegar.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 max-w-lg mx-auto md:max-w-none">
              <a href={UNITS[0].whatsapp} className="inline-flex items-center justify-center gap-4 bg-brand-navy text-white px-10 md:px-20 py-5 md:py-10 rounded-full font-black text-base md:text-3xl hover:scale-110 transition-all shadow-2xl hover:shadow-brand-navy/30">
                 Unidade I <ArrowRight size={24} className="md:w-10 md:h-10" />
              </a>
              <a href={UNITS[1].whatsapp} className="inline-flex items-center justify-center gap-4 bg-brand-red text-white px-10 md:px-20 py-5 md:py-10 rounded-full font-black text-base md:text-3xl hover:scale-110 transition-all shadow-2xl shadow-brand-red/30">
                 Unidade II <ArrowRight size={24} className="md:w-10 md:h-10" />
              </a>
            </div>
            <p className="mt-12 md:mt-24 text-slate-300 font-black text-[10px] md:text-sm uppercase tracking-[0.5em]">
              Vagas limitadas • Início das aulas: 29/Janeiro/2026
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SejaReacao2026;
