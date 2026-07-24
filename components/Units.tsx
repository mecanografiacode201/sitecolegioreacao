import React from 'react';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { UNITS } from '../constants';
import ScrollReveal from './ScrollReveal';

interface UnitsProps {
  onOpenUnitSelector?: () => void;
}

const Units: React.FC<UnitsProps> = ({ onOpenUnitSelector }) => {
  return (
    <section id="unidades" className="py-20 md:py-32 bg-brand-offwhite" aria-labelledby="unidades-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 id="unidades-heading" className="text-brand-navy text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-6">Nossas Unidades no Recanto das Emas</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-brand-navy">Infraestrutura de Excelência em Brasília</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {UNITS.map((unit, idx) => (
            <ScrollReveal key={unit.id} delay={idx * 150}>
              <article 
                className="bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden card-elevation border border-slate-100 flex flex-col h-full group/card transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10"
                itemScope 
                itemType="https://schema.org/EducationalOrganization"
              >
                <div className="h-60 sm:h-80 overflow-hidden relative">
                  <img 
                    src={unit.image} 
                    alt={`Fachada da ${unit.name} do Colégio Reação - Escola Particular de Qualidade`} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110" 
                    width="600"
                    height="400"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                    decoding="async"
                    itemProp="image"
                  />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-brand-red text-white px-5 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-2xl transition-transform duration-500 group-hover/card:translate-x-2">
                    <span itemProp="name">{unit.name}</span>
                  </div>
                </div>
                <div className="p-6 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-start gap-4 md:gap-6 mb-6 md:mb-8 group/item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <div className="bg-brand-navy/5 p-2.5 md:p-3 rounded-xl md:rounded-2xl transition-colors group-hover/item:bg-brand-blue group-hover/item:text-white shrink-0">
                      <MapPin className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
                    </div>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed pt-0.5" itemProp="streetAddress">{unit.address}</p>
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 group/item">
                    <div className="bg-brand-navy/5 p-2.5 md:p-3 rounded-xl md:rounded-2xl transition-colors group-hover/item:bg-brand-red group-hover/item:text-white shrink-0">
                      <Phone className="w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
                    </div>
                    <a 
                      id={`link-unit-phone-${unit.id}`}
                      href={`tel:${unit.phone.replace(/\D/g, '')}`} 
                      className="text-brand-navy text-lg md:text-xl font-bold pt-0.5 hover:text-brand-red transition-all transform hover:translate-x-1"
                      itemProp="telephone"
                      aria-label={`Ligar para ${unit.name}`}
                    >
                      {unit.phone}
                    </a>
                  </div>
                  
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-[10px] md:text-xs font-bold uppercase text-slate-400 tracking-[0.2em] mb-3 md:mb-4">Segmentos atendidos no DF</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {unit.levels.map(level => (
                        <span key={level} className="flex items-center gap-1.5 md:gap-2 bg-brand-navy/5 text-brand-navy px-3 md:px-5 py-1.5 md:py-2 rounded-xl md:rounded-2xl text-[10px] md:text-xs font-bold tracking-wide transition-all hover:bg-brand-navy hover:text-white">
                          <CheckCircle className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand-red" aria-hidden="true" />
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8 md:mb-10 w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-slate-100 h-40 md:h-48 relative shadow-inner bg-slate-100">
                    <iframe
                      src={unit.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      title={`Mapa de localização da ${unit.name} - Colégio Reação DF`}
                      className="grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                  </div>

                  <a
                    id={`btn-unit-visit-whatsapp-${unit.id}`}
                    href={unit.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto relative overflow-hidden flex items-center justify-center gap-2 md:gap-3 w-full bg-brand-navy text-white py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-blue-900/10 group hover:bg-brand-red hover:scale-[1.02] active:scale-95 btn-shimmer"
                    aria-label={`Agendar visita via WhatsApp para ${unit.name}`}
                  >
                    <span className="relative z-10 flex items-center gap-2 md:gap-3">
                      Agendar Visita 2026 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Units;