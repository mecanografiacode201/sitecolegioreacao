
import React from 'react';
import { ArrowRight, MapPin, Star, GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { UNITS } from '../constants';

interface PreLanding2026Props {
  onEnterSite: () => void;
  onOpenEnrollment: () => void;
}

const PreLanding2026: React.FC<PreLanding2026Props> = ({ onEnterSite, onOpenEnrollment }) => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col md:flex-row bg-brand-blue overflow-y-auto md:overflow-hidden">
      
      {/* Mobile View - Otimizada para não bugar em telas pequenas */}
      <div className="flex md:hidden w-full min-h-[100dvh] flex-col relative p-6 sm:p-10 justify-center bg-brand-blue">
        <div className="relative z-10 flex flex-col items-start text-left w-full max-w-sm mx-auto">
          <div className="flex gap-1 mb-4">
            <Star size={12} fill="#e63946" className="text-brand-red" />
            <Star size={12} fill="#e63946" className="text-brand-red" />
            <Star size={12} fill="#e63946" className="text-brand-red" />
          </div>
          
          <h1 className="text-[2.5rem] sm:text-5xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            O futuro <br /> tem nome: <br /> <span className="text-brand-red italic inline-block mt-1">Reação</span>
          </h1>
          
          <div className="border-l-4 border-brand-red pl-5 mb-8">
            <p className="text-white/90 text-lg sm:text-xl font-medium leading-tight mb-3">
              Tradição que prepara, inovação que transforma e valores que ficam para sempre.
            </p>
            <div className="flex items-center gap-2 text-white/60 font-black text-[9px] uppercase tracking-[0.2em]">
              <CheckCircle2 size={14} className="text-brand-red" />
              Matrículas 2026 Abertas
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3.5 w-full">
            <button 
              onClick={onOpenEnrollment}
              className="group relative w-full bg-brand-red text-white py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-[0_15px_30px_rgba(230,57,70,0.4)] active:scale-95 transition-all flex items-center justify-center gap-3 btn-shimmer overflow-hidden"
            >
              GARANTIR VAGA
              <ArrowRight size={20} />
            </button>

            <button 
              onClick={() => window.open('https://forms.gle/xhuCn5E8t4KABRDr9', '_blank')}
              className="group relative w-full bg-brand-navy/60 backdrop-blur-sm text-white py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-white/10"
            >
              CURSINHO PREPARATÓRIO
              <BookOpen size={18} />
            </button>

            <button 
              onClick={onEnterSite}
              className="w-full bg-white text-brand-navy py-3.5 sm:py-4 rounded-2xl font-black text-sm sm:text-base active:scale-95 transition-all uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg mt-2"
            >
              Explorar Site <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View (Original Side-by-Side) */}
      <div className="hidden md:flex w-full md:w-[40%] lg:w-[42%] bg-brand-blue p-6 sm:p-12 lg:p-12 xl:p-16 flex-col justify-center relative overflow-hidden min-h-screen shrink-0 border-r-2 border-white/10">
        {/* Elementos de fundo decorativos */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.08] pointer-events-none">
          <div className="absolute top-10 -right-10 rotate-12 scale-75 lg:scale-110 xl:scale-125">
            <GraduationCap size={150} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-10 -rotate-12 scale-75 lg:scale-90 xl:scale-110">
            <BookOpen size={100} className="text-white" />
          </div>
        </div>
        
        {/* Wrapper com escala para telas curtas */}
        <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left max-w-lg mx-auto md:mx-0 
                      md:scale-[0.8] lg:scale-[0.9] xl:scale-100 origin-center md:origin-left transition-transform">
          <div className="flex gap-2 mb-6 lg:mb-8 animate-bounce-slow">
            <Star size={16} fill="#e63946" className="text-brand-red" />
            <Star size={16} fill="#e63946" className="text-brand-red" />
            <Star size={16} fill="#e63946" className="text-brand-red" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-black text-white mb-6 lg:mb-8 tracking-tighter leading-[0.85] drop-shadow-2xl">
            O futuro <br className="hidden md:block" /> tem nome: <br /> <span className="text-brand-red italic inline-block mt-2">Reação</span>
          </h1>
          
          <div className="space-y-4 mb-8 lg:mb-12 border-l-0 md:border-l-4 border-brand-red md:pl-8">
            <p className="text-white/90 text-lg sm:text-xl lg:text-xl xl:text-2xl font-medium leading-tight max-w-[280px] sm:max-w-xs lg:max-w-none mx-auto md:mx-0">
              Tradição que prepara, inovação que transforma e valores que ficam para sempre.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 text-white/60 font-black text-[10px] xl:text-sm uppercase tracking-[0.2em] lg:tracking-[0.4em]">
              <CheckCircle2 size={16} className="text-brand-red shrink-0" />
              Matrículas 2026 Abertas
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full max-w-[320px] sm:max-w-sm">
            <button 
              onClick={onOpenEnrollment}
              className="group relative w-full bg-brand-red text-white px-6 lg:px-10 py-5 lg:py-6 rounded-2xl lg:rounded-[1.5rem] font-black text-xl lg:text-2xl xl:text-3xl shadow-[0_20px_40px_rgba(230,57,70,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 btn-shimmer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 lg:gap-4 uppercase tracking-tighter">
                Garantir Vaga
                <ArrowRight size={24} className="lg:w-8 lg:h-8 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            <button 
              onClick={() => window.open('https://forms.gle/xhuCn5E8t4KABRDr9', '_blank')}
              className="group relative w-full bg-brand-navy/50 backdrop-blur-sm text-white px-6 lg:px-10 py-4 lg:py-6 rounded-2xl lg:rounded-[1.5rem] font-black text-lg lg:text-xl xl:text-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 border-2 border-white/20"
            >
              <span className="relative z-10 flex items-center gap-3 lg:gap-4 uppercase tracking-tighter">
                Cursinho Preparatório
                <BookOpen size={20} className="lg:w-6 lg:h-6" />
              </span>
            </button>
          </div>
          
          <p className="mt-8 lg:mt-10 text-white/30 font-black text-[9px] xl:text-xs uppercase tracking-[0.3em] lg:tracking-[0.4em]">
            Condições exclusivas • Recanto das Emas
          </p>

          {/* Mobile Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden animate-bounce opacity-50">
            <div className="w-1 h-8 bg-white/30 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - TELA INICIAL (Otimizado para Notebooks e Ultra-Wide) */}
      <div className="w-full md:w-[60%] lg:w-[58%] bg-[#f0f4f8] p-4 sm:p-10 md:p-4 lg:p-12 xl:p-16 flex flex-col items-center justify-center relative min-h-screen shrink-0 overflow-hidden">
        
        {/* PREMIUM BLUE DESIGNER BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[70%] h-[70%] bg-brand-blue/10 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-brand-red/5 rounded-full blur-[120px]"></div>
          
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 20 Q 25 10 50 20 T 100 20" fill="none" stroke="#1b4a9a" strokeWidth="0.4" />
            <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="#1b4a9a" strokeWidth="0.2" />
            <path d="M0 80 Q 25 70 50 80 T 100 80" fill="none" stroke="#1b4a9a" strokeWidth="0.4" />
          </svg>
        </div>
        
        {/* Container Central com Escala Inteligente baseada na altura da tela (VH) */}
        {/* MD:Scale reduz o conteúdo se a altura da tela for pequena, comum em laptops 768p */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center 
                      scale-[0.85] sm:scale-100 md:scale-[0.75] lg:scale-[0.85] xl:scale-[0.95] 2xl:scale-110
                      origin-center transition-all duration-700 ease-out py-12 md:py-0">
          
          {/* Stickers Section - Layout Altamente Adaptável */}
          <div className="flex flex-col gap-3 lg:gap-4 mb-10 lg:mb-12 rotate-[-1deg] w-full items-center">
             <div className="bg-brand-blue text-white px-6 py-3 lg:px-10 lg:py-5 rounded-xl text-xl lg:text-3xl xl:text-4xl font-black w-fit shadow-[6px_6px_0px_#0d2b52] lg:shadow-[10px_10px_0px_#0d2b52] border-2 lg:border-4 border-white transform hover:rotate-1 hover:scale-105 transition-all cursor-default uppercase tracking-tight whitespace-nowrap">
               A jornada de
             </div>
             <div className="bg-white text-brand-blue px-8 py-4 lg:px-14 lg:py-7 rounded-xl text-3xl lg:text-5xl xl:text-6xl font-black w-fit shadow-[6px_6px_0px_#e63946] lg:shadow-[10px_10px_0px_#e63946] border-2 lg:border-4 border-brand-blue -mt-2 lg:-mt-4 italic transform hover:-rotate-2 hover:scale-105 transition-all cursor-default uppercase tracking-tighter whitespace-nowrap">
               EXCELÊNCIA
             </div>
             <div className="bg-brand-red text-white px-6 py-3 lg:px-10 lg:py-5 rounded-xl text-xl lg:text-3xl xl:text-4xl font-black w-fit shadow-[6px_6px_0px_#0d2b52] lg:shadow-[10px_10px_0px_#0d2b52] border-2 lg:border-4 border-white -mt-2 lg:-mt-4 transform hover:rotate-2 hover:scale-105 transition-all cursor-default uppercase tracking-tight whitespace-nowrap">
               começa
             </div>
             <div className="bg-brand-navy text-white px-10 py-6 lg:px-16 lg:py-10 rounded-[2rem] lg:rounded-[3.5rem] text-4xl lg:text-6xl xl:text-7xl font-black w-full text-center shadow-[8px_8px_0px_#e63946] lg:shadow-[20px_20px_0px_#e63946] border-2 lg:border-4 border-white -mt-2 lg:-mt-4 uppercase tracking-tighter transform hover:scale-[1.03] transition-all cursor-default leading-none">
               AQUI.
             </div>
          </div>

          {/* Unidades e Acesso ao Site */}
          <div className="w-full max-w-md space-y-4 lg:space-y-6 px-4 sm:px-0">
            <div className="bg-brand-blue/90 backdrop-blur-md rounded-[1.5rem] lg:rounded-[2.5rem] p-5 lg:p-8 border-2 border-white/20 shadow-2xl flex flex-col items-center gap-4 w-full">
              <p className="text-white/60 text-[9px] lg:text-[11px] font-black uppercase tracking-[0.2em] lg:tracking-[0.4em] text-center">Matrículas em Ambas Unidades</p>
              <div className="flex justify-center gap-6 sm:gap-8 lg:gap-12 w-full">
                <a 
                  href={UNITS[0].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white group transition-all"
                >
                  <div className="bg-brand-red p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/10 group-hover:bg-white group-hover:text-brand-red transition-all">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest">Unidade I</span>
                </a>
                <a 
                  href={UNITS[1].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white group transition-all"
                >
                  <div className="bg-brand-red p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg border border-white/10 group-hover:bg-white group-hover:text-brand-red transition-all">
                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest">Unidade II</span>
                </a>
              </div>
            </div>

            <button 
              onClick={onEnterSite}
              className="w-full bg-white text-brand-navy border-2 border-brand-blue/10 py-5 lg:py-7 rounded-[1.5rem] lg:rounded-[2rem] font-black text-xl lg:text-2xl shadow-xl hover:bg-brand-blue hover:text-white transition-all duration-500 active:scale-95 uppercase tracking-tight flex items-center justify-center gap-3 group"
            >
              Explorar Site 
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLanding2026;
