
import React from 'react';
import { X, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { UNITS } from '../constants';

interface UnitSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnitSelectorModal: React.FC<UnitSelectorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
      <div 
        className="absolute inset-0 bg-brand-navy/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-[2rem] md:rounded-[3rem] shadow-3xl overflow-hidden animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col">
        <button 
          id="btn-unit-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-slate-100 rounded-xl md:rounded-2xl text-slate-400 hover:text-brand-navy hover:bg-slate-200 transition-all z-10"
        >
          <X size={20} className="md:w-6 md:h-6" />
        </button>

        <div className="p-6 md:p-16 text-center overflow-y-auto">
          <span className="inline-block bg-brand-red/10 text-brand-red px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-6">
            Agendamento 2026
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-brand-navy mb-2 md:mb-4 tracking-tighter">
            Escolha sua unidade
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-light mb-8 md:mb-12">
            Selecione a unidade mais próxima para falar com nossa equipe via WhatsApp.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {UNITS.map((unit) => (
              <a
                key={unit.id}
                id={`btn-modal-unit-select-${unit.id}`}
                href={unit.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row md:flex-col items-center text-left md:text-center p-4 md:p-8 bg-brand-offwhite rounded-[1.5rem] md:rounded-[2.5rem] border-2 border-transparent hover:border-brand-red hover:bg-white hover:scale-[1.02] transition-all duration-500"
                onClick={onClose}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center mb-0 md:mb-6 mr-4 md:mr-0 group-hover:bg-brand-red group-hover:text-white transition-all shrink-0">
                  <MapPin size={22} className="md:w-7 md:h-7" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg md:text-2xl font-black text-brand-navy mb-0.5 md:mb-2">{unit.name}</h4>
                  <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-6">
                    {unit.id === 1 ? 'Recanto 206' : 'Recanto 201'}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 md:text-green-500 font-black text-[10px] md:text-sm group-hover:translate-x-1 transition-transform">
                    WHATSAPP <ArrowRight size={14} className="md:w-4 md:h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitSelectorModal;
