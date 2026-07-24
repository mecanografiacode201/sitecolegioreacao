
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Balloon {
  id: number;
  x: number;
  color: string;
  delay: number;
}

const APPROVED_IMAGES = [
  {
    id: 1,
    url: 'https://i.imgur.com/N7FOSM6.png',
    name: 'Eduardo Guimarães Barbosa',
    year: 'Química / UnB'
  },
  {
    id: 2,
    url: 'https://i.imgur.com/BifyxoE.png',
    name: 'Izadora Farias',
    year: 'Fisioterapia (UCB)'
  },
  {
    id: 3,
    url: 'https://i.imgur.com/sdrCJN6.png',
    name: 'Giovanna Carlos',
    year: 'Direito (UNIPROCESSUS)'
  },
  {
    id: 4,
    url: 'https://i.imgur.com/Cg6eb1A.png',
    name: 'Carlos Aparecido',
    year: 'Engenharia de Software (UCB)'
  },
  {
    id: 5,
    url: 'https://i.imgur.com/crbCmvk.png',
    name: 'Ana Clara Fernandes',
    year: 'Direito (UNICORP)'
  },
  {
    id: 6,
    url: 'https://i.imgur.com/RsBFCLf.png',
    name: 'Maria Eduarda Soares',
    year: 'Pedagogia (SISU)'
  },
  {
    id: 7,
    url: 'https://i.imgur.com/NATzFhB.png',
    name: 'Márcia Leandra',
    year: 'Fisioterapia (UCB)'
  },
  {
    id: 8,
    url: 'https://i.imgur.com/de7spEr.png',
    name: 'Letícia dos Santos',
    year: 'Direito (UNICEUB)'
  },
  {
    id: 9,
    url: 'https://i.imgur.com/bmHwzgA.png',
    name: 'Rafael Barros',
    year: 'Engenharia Civil (UCB)'
  },
  {
    id: 10,
    url: 'https://i.imgur.com/MklxOkF.png',
    name: 'Ana Clara Félix',
    year: 'Arquitetura (UCB)'
  },
  {
    id: 11,
    url: 'https://i.imgur.com/dw6MSLc.png',
    name: 'Mariana Gonçalves',
    year: 'Engenharia de Software (UCB)'
  },
  {
    id: 12,
    url: 'https://i.imgur.com/Inid42s.png',
    name: 'Ícaro Augusto',
    year: 'Análise de Sistemas (UCB)'
  },
  {
    id: 13,
    url: 'https://i.imgur.com/0um8de8.png',
    name: 'Geovanna Delmondes',
    year: 'Psicologia (UNICEPLAC)'
  },
  {
    id: 14,
    url: 'https://i.imgur.com/zaE8TPr.jpeg',
    name: 'Ana Clara Rabelo Goulart',
    year: 'Matemática - UnB'
  },
  {
    id: 15,
    url: 'https://i.imgur.com/7RRXh9M.jpeg',
    name: 'Maria Eduarda Ribeiro Pinheiro',
    year: 'Ciências Sociais'
  },
  {
    id: 16,
    url: 'https://i.imgur.com/HQENdC9.jpeg',
    name: 'Ryan Vieira Costa',
    year: 'Química Tecnológica'
  },
  {
    id: 17,
    url: 'https://i.imgur.com/kHzjUTu.jpeg',
    name: 'Maria Eduarda Soares dos Santos',
    year: 'Fonoaudiologia'
  },
  {
    id: 18,
    url: 'https://i.imgur.com/5NAx3SL.jpeg',
    name: 'Jorge Henrique Pereira dos Santos',
    year: 'Ciências Contábeis - UnB'
  },
  {
    id: 19,
    url: 'https://i.imgur.com/ZGUfQQg.png',
    name: 'Pedro Henrique Ferreira da Silva',
    year: 'Odontologia - UniLS'
  },
  {
    id: 20,
    url: 'https://i.imgur.com/dtkbvkm.png',
    name: 'Júlio César Alencar',
    year: 'Fisioterapia - UCB'
  },
  {
    id: 21,
    url: 'https://i.imgur.com/9Jml3hF.png',
    name: 'Rodrigo Silvestre',
    year: 'Direito - UNICEUB'
  },
  {
    id: 22,
    url: 'https://i.imgur.com/HHcoCvv.png',
    name: 'Rikaele Neves',
    year: 'Educação física - Estácio'
  },
  {
    id: 23,
    url: 'https://i.imgur.com/1Zy456u.jpeg',
    name: 'Ryanna Beatriz',
    year: 'Ciência Sociais (UFG) / RI (UCB)'
  },
  {
    id: 24,
    url: 'https://i.imgur.com/PpFSO42.jpeg',
    name: 'Maxwell Ribeiro',
    year: 'Farmácia - UCB'
  },
  {
    id: 25,
    url: 'https://i.imgur.com/niBZjOd.png',
    name: 'Matheus Queiroz',
    year: 'Fisioterapia - UCB'
  },
  {
    id: 26,
    url: 'https://i.imgur.com/l4tQUZo.png',
    name: 'Antônia Sergiane Lima',
    year: 'Direito - Estácio'
  },
  {
    id: 27,
    url: 'https://i.imgur.com/gTcnPUu.png',
    name: 'Joara Amorim',
    year: 'Fonoaudiologia - UnB'
  },
  {
    id: 28,
    url: 'https://i.imgur.com/YqEWdpC.png',
    name: 'Victória Emanuelle',
    year: 'Fonoaudiologia - UnB'
  },
  {
    id: 29,
    url: 'https://i.imgur.com/BqieqIx.png',
    name: 'Alexandre Brito',
    year: 'Engenharia - UNICEPLAC'
  },
  {
    id: 30,
    url: 'https://i.imgur.com/DQvaR0B.png',
    name: 'Isac Teixeira',
    year: 'Farmácia - Cruzeiro do Sul'
  },
  {
    id: 31,
    url: 'https://i.imgur.com/O9jE8cK.png',
    name: 'Nicolle Diniz',
    year: 'Direito - UNICEUB'
  }
];

const ApprovedStudents: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handlePhotoClick = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    
    const colors = ['#E31E24', '#FFFFFF', '#002B5B']; // Red, White, Blue
    const newBalloons: Balloon[] = [];
    
    for (let i = 0; i < 12; i++) {
      newBalloons.push({
        id: Date.now() + i,
        x: centerX + (Math.random() * 100 - 50),
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5
      });
    }
    
    setBalloons(prev => [...prev, ...newBalloons]);
    
    // Cleanup balloons after animation
    setTimeout(() => {
      setBalloons(prev => prev.filter(b => !newBalloons.find(nb => nb.id === b.id)));
    }, 4000);
  };

  return (
    <section className="py-20 bg-brand-offwhite relative overflow-hidden">
      {/* Balloon Layer */}
      <div className="fixed inset-0 pointer-events-none z-[9999]">
        <AnimatePresence>
          {balloons.map((balloon) => (
            <motion.div
              key={balloon.id}
              initial={{ y: '100vh', x: balloon.x, opacity: 1, scale: 0.8 }}
              animate={{ 
                y: '-20vh', 
                x: balloon.x + (Math.random() * 200 - 100),
                opacity: 0,
                rotate: Math.random() * 45 - 22.5,
                scale: 1.2
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 3 + Math.random() * 2, 
                delay: balloon.delay,
                ease: "easeOut"
              }}
              className="absolute w-12 h-16 rounded-[50%_50%_50%_50%/40%_40%_60%_60%] shadow-lg flex flex-col items-center"
              style={{ 
                backgroundColor: balloon.color,
                border: balloon.color === '#FFFFFF' ? '1px solid #ddd' : 'none'
              }}
            >
              {/* Balloon String */}
              <div className="absolute top-full w-0.5 h-12 bg-gray-400/30 origin-top"></div>
              {/* Balloon Knot */}
              <div className="absolute -bottom-1 w-3 h-2 rounded-full" style={{ backgroundColor: balloon.color }}></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-red/10 rounded-lg">
                <Trophy className="text-brand-red w-6 h-6" />
              </div>
              <span className="text-brand-red font-black text-xs uppercase tracking-[0.3em]">Resultados Reais</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter leading-none">
              Nossos <span className="text-brand-red">Aprovados</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-lg font-light">
              Orgulho que transborda! Conheça alguns dos nossos alunos que conquistaram suas vagas nas melhores universidades do país.
            </p>
          </ScrollReveal>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full bg-white border border-slate-200 text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm"
              aria-label="Anterior"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full bg-brand-navy text-white hover:bg-brand-red transition-all shadow-lg"
              aria-label="Próximo"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {APPROVED_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={handlePhotoClick}
              className="min-w-[280px] md:min-w-[350px] aspect-[4/5] relative rounded-[2.5rem] overflow-hidden snap-start group shadow-xl cursor-pointer active:scale-95 transition-transform"
            >
              <img 
                src={item.url} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{item.year}</span>
                </div>
                <h4 className="text-white text-2xl font-black tracking-tight leading-tight">
                  {item.name}
                </h4>
              </div>

              {/* Decorative Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <Trophy className="text-white w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em]">
            Deslize para ver mais conquistas
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default ApprovedStudents;
