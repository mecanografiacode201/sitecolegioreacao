
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, ChevronRight, Sparkles } from 'lucide-react';
import { UNITS } from '../constants';
import { usePostHog } from 'posthog-js/react';

const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const posthog = usePostHog();

  useEffect(() => {
    // Mostra o balão de texto após 3 segundos para chamar atenção
    const timer = setTimeout(() => {
      setShowTeaser(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    const newState = !open;
    setOpen(newState);
    if (newState) {
      setShowTeaser(false); // Esconde o teaser ao abrir
      posthog.capture('support_hub_opened');
    }
  };

  const handleUnitClick = (unitName: string) => {
    posthog.capture('whatsapp_contact_click', { 
      unit: unitName,
      location: 'floating_widget'
    });
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
        {/* Balão de Mensagem (Teaser) para aumentar CTR */}
        {!open && showTeaser && (
          <div className="mb-4 mr-2 relative animate-in fade-in slide-in-from-right-8 duration-700">
            <div 
              id="btn-whatsapp-teaser-bubble"
              className="bg-white px-6 py-4 rounded-[1.5rem] shadow-[0_15px_30px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-3 max-w-[240px] md:max-w-xs group cursor-pointer" 
              onClick={handleToggle}
            >
              <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Sparkles size={18} className="animate-pulse" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] font-black text-brand-red uppercase tracking-widest mb-0.5">Matrículas 2026</p>
                <p className="text-brand-navy text-xs md:text-sm font-bold leading-tight">
                  Dúvidas sobre vagas? <span className="text-green-600">Fale com a gente!</span>
                </p>
              </div>
              <button 
                id="btn-whatsapp-teaser-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTeaser(false);
                }}
                className="absolute -top-2 -left-2 bg-white text-slate-300 hover:text-brand-red rounded-full p-1 shadow-md border border-slate-100 transition-colors"
              >
                <X size={12} />
              </button>
              {/* Triângulo do balão */}
              <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45"></div>
            </div>
          </div>
        )}

        {open && (
          <div className="mb-6 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden w-80 animate-in fade-in slide-in-from-bottom-8 duration-500 border border-slate-100">
            <div className="bg-brand-navy p-8 pb-10 flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                  <MessageCircle className="text-white" size={28} />
                </div>
                <div>
                  <p className="text-white text-lg font-bold">Atendimento</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <p className="text-white/60 text-[10px] uppercase font-black tracking-[0.2em]">Online agora</p>
                  </div>
                </div>
              </div>
              <button id="btn-whatsapp-modal-close" onClick={() => setOpen(false)} className="text-white/30 hover:text-white transition-colors bg-white/10 p-2 rounded-xl">
                <X size={18} />
              </button>
            </div>
            
            <div className="p-6 -mt-6 bg-white rounded-t-[2rem] space-y-3">
              <p className="text-slate-400 text-[10px] px-2 font-black uppercase tracking-widest mb-1">Falar com Consultora</p>
              
              {UNITS.map(unit => (
                <a
                  key={unit.id}
                  id={`btn-whatsapp-floating-unit-${unit.id}`}
                  href={unit.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleUnitClick(unit.name)}
                  className="flex items-center justify-between p-4 rounded-3xl border border-slate-100 hover:bg-slate-50 hover:border-brand-red/30 transition-all group"
                >
                  <div>
                    <p className="text-sm font-black text-brand-navy uppercase tracking-wide">{unit.name}</p>
                    <p className="text-xs text-slate-400 mt-1">{unit.id === 1 ? 'Infantil e Fundamental' : 'Infantil ao Ensino Médio'}</p>
                  </div>
                  <div className="bg-slate-100 p-2 rounded-full group-hover:bg-brand-red transition-colors">
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-white" />
                  </div>
                </a>
              ))}
            </div>
            
            <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Matrículas 2026 Abertas</p>
            </div>
          </div>
        )}

        <button
          id="btn-whatsapp-main-trigger"
          onClick={handleToggle}
          className={`bg-green-500 text-white p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all group relative overflow-visible ${!open ? 'animate-vibrate' : ''}`}
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-[2rem]"></div>
          <MessageCircle size={32} fill="white" className="relative z-10" />
          
          {!open && (
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-red-600 text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
              1
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
