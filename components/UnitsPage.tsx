
import React from 'react';
import { MapPin, Phone, CheckCircle, ArrowRight, Home, Building2, ShieldCheck, Microscope, Laptop, Users } from 'lucide-react';
import { UNITS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { HangingGarland } from './FestaJuninaDecoration';

interface UnitsPageProps {
  onOpenUnitSelector?: () => void;
}

const UnitsPage: React.FC<UnitsPageProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[350px] h-[50vh] md:h-[60vh] flex items-center overflow-hidden bg-brand-navy py-12 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2000&auto=format&fit=crop" 
            alt="Infraestrutura Colégio Reação"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 sm:mb-6 tracking-tighter">Nossos <span className="text-brand-red">Campi.</span></h1>
            <p className="text-white/60 text-sm sm:text-base md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Dois endereços planejados para oferecer segurança, tecnologia e o ambiente perfeito para o florescer de grandes talentos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Hanging Garland placed in the body flow */}
      <div className="relative z-20 bg-brand-navy pb-6 -mt-1">
        <HangingGarland flagCount={18} flagSize={32} />
      </div>

      {/* Detailed Units List */}
      <section className="py-32 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-6">Localizações Estratégicas</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy mb-8 leading-tight tracking-tight">Onde a <span className="text-brand-red">excelência</span> acontece.</h3>
            </ScrollReveal>
          </div>
          
          <div className="space-y-32">
            {UNITS.map((unit, idx) => (
              <ScrollReveal key={unit.id} delay={idx * 100}>
                <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}>
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer">
                      <img 
                        src={unit.image} 
                        alt={unit.name} 
                        className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                    <div className={`absolute -bottom-10 ${idx % 2 !== 0 ? '-left-10' : '-right-10'} bg-brand-red text-white p-12 rounded-[3rem] shadow-3xl hidden xl:block`}>
                      <Building2 size={40} className="mb-4" />
                      <p className="text-2xl font-black">{unit.name}</p>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="w-full lg:w-1/2 pt-10">
                    <h3 className="text-4xl font-black text-brand-navy mb-8 flex items-center gap-4">
                      {unit.name} 
                      <span className="text-xs font-bold uppercase tracking-widest bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full">Recanto das Emas</span>
                    </h3>
                    
                    <div className="space-y-8 mb-12">
                      <div className="flex gap-6 items-start">
                        <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-red shrink-0">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Localização</p>
                          <p className="text-brand-navy text-xl font-medium leading-relaxed">{unit.address}</p>
                        </div>
                      </div>

                      <div className="flex gap-6 items-start">
                        <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-red shrink-0">
                          <Phone size={24} />
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Contato Direto</p>
                          <a href={`tel:${unit.phone.replace(/\D/g, '')}`} className="text-brand-navy text-2xl font-black hover:text-brand-red transition-colors">{unit.phone}</a>
                        </div>
                      </div>

                      <div className="flex gap-6 items-start">
                        <div className="bg-white p-4 rounded-2xl shadow-sm text-brand-red shrink-0">
                          <CheckCircle size={24} />
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Segmentos Atendidos</p>
                          <div className="flex flex-wrap gap-2">
                            {unit.levels.map(level => (
                              <span key={level} className="bg-brand-navy text-white px-4 py-1.5 rounded-xl text-xs font-bold shadow-sm">{level}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[3rem] overflow-hidden border-8 border-white shadow-xl h-64 mb-10">
                      <iframe
                        src={unit.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa ${unit.name}`}
                        className="grayscale-[0.4] hover:grayscale-0 transition-all duration-700"
                      ></iframe>
                    </div>

                    <a 
                      href={unit.whatsapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-brand-navy text-white px-12 py-6 rounded-full font-black text-xl hover:bg-brand-red hover:scale-105 transition-all shadow-xl btn-shimmer"
                    >
                      Agendar Visita Guiada <ArrowRight />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="bg-brand-navy p-16 md:p-32 rounded-[5rem] text-white relative overflow-hidden border-[16px] border-brand-offwhite">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-none">Venha sentir <br/>a <span className="text-brand-red">experiência</span>.</h2>
                <p className="text-white/40 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                  Nada substitui a presença. Conheça de perto o lugar onde o futuro do seu filho será construído com excelência.
                </p>
                <button 
                  onClick={onOpenUnitSelector}
                  className="bg-brand-red text-white px-12 py-6 rounded-full font-black text-xl hover:scale-110 transition-all shadow-3xl shadow-brand-red/20 btn-shimmer"
                >
                  CONHECER CAMPUS 2026
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default UnitsPage;
