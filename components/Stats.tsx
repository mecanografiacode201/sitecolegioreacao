
import React, { useState, useEffect, useRef } from 'react';
import { Trophy, History, Star, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const CountUp: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Trophy />,
      target: 1200,
      suffix: "+",
      label: "Alunos Aprovados",
      description: "Nos vestibulares mais concorridos, ENEM e PAS-UnB nos últimos anos."
    },
    {
      icon: <History />,
      target: 28,
      suffix: "+",
      label: "Anos de Tradição",
      description: "Construindo legados e transformando vidas no Recanto das Emas desde 1997."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px] -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-navy/5 rounded-full blur-[120px] -z-0"></div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        .typewriter-text {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          padding-right: 4px; /* Garante que a última letra não seja cortada */
        }
        .reveal.active .typewriter-text {
          animation: typewriter 1.5s steps(40, end) forwards;
          animation-delay: 0.8s;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 200} className="group h-full">
              <div className="relative h-full flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 p-8 md:p-12 lg:p-14 rounded-[3.5rem] bg-brand-offwhite border border-slate-100 hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(13,43,82,0.12)] transition-all duration-700">
                
                {/* Ícone Flutuante */}
                <div className="flex-shrink-0 mt-2">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl shadow-sm border border-slate-50 flex items-center justify-center group-hover:bg-brand-navy group-hover:scale-110 transition-all duration-500 transform group-hover:-rotate-6">
                    {React.cloneElement(stat.icon as React.ReactElement<any>, { 
                      className: "w-8 h-8 md:w-10 md:h-10 text-brand-red group-hover:text-white transition-colors duration-500" 
                    })}
                  </div>
                </div>

                <div className="flex flex-col text-center md:text-left">
                  <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
                    <span className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-brand-navy tracking-tight leading-none whitespace-nowrap">
                      <CountUp end={stat.target} suffix={stat.suffix} />
                    </span>
                  </div>

                  <div className="relative mb-4">
                    <h4 className="text-xl md:text-2xl xl:text-4xl font-black text-brand-navy tracking-tight typewriter-text">
                      {stat.label}
                    </h4>
                    <div className="h-1 w-12 bg-brand-red rounded-full mt-1 group-hover:w-24 transition-all duration-500"></div>
                  </div>

                  <p className="text-slate-500 text-sm md:text-lg xl:text-xl font-light leading-relaxed max-w-sm italic font-serif">
                    {stat.description}
                  </p>
                  
                  <div className="mt-8 flex items-center justify-center md:justify-start gap-2 text-brand-navy/30 group-hover:text-brand-red transition-colors duration-500 font-bold text-[10px] uppercase tracking-widest">
                    <span>Excelência Comprovada</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Badge de Destaque */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                  <Star className="text-yellow-400 fill-yellow-400 animate-spin-slow" size={20} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
