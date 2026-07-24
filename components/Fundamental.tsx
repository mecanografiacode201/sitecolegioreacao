
import React from 'react';
import { 
  BookOpen, Brain, Target, Users, ArrowRight, CheckCircle, 
  Lightbulb, Microscope, Laptop, Globe, Star, 
  GraduationCap, Award, Zap, Layers, UserCheck, BarChart3, Rocket, Heart
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { HangingGarland } from './FestaJuninaDecoration';

interface FundamentalProps {
  onOpenUnitSelector?: () => void;
}

const Fundamental: React.FC<FundamentalProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section Anos Iniciais e Finais */}
      <section className="relative min-h-[550px] sm:min-h-[650px] md:h-[90vh] md:min-h-[650px] flex items-center overflow-hidden bg-brand-navy py-12 sm:py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/zEWb9RC.jpeg" 
            alt="Estudantes dos Anos Iniciais e Finais do Colégio Reação"
            className="w-full h-full object-cover opacity-50 scale-105 animate-soft-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <span className="bg-brand-blue text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] inline-block shadow-lg">
                1º ao 9º ano
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-brand-blue fill-brand-blue" />
                ))}
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[6.5rem] font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-tight md:leading-[0.9]">
              Anos Iniciais <br />
              <span className="text-brand-red">& Finais.</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-light mb-6 sm:mb-10 md:mb-12 leading-relaxed">
              Excelência acadêmica, formação humana e suporte pedagógico contínuo para uma base educacional sólida.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <button 
                onClick={onOpenUnitSelector}
                className="w-full sm:w-auto bg-brand-red text-white px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-black text-sm sm:text-lg hover:scale-110 transition-all shadow-3xl shadow-brand-red/30 flex items-center justify-center gap-3 btn-shimmer"
              >
                Matrículas 2026 <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onOpenUnitSelector}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-white hover:text-brand-navy transition-all text-center justify-center"
              >
                Conhecer a Jornada
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hanging Garland placed in the body flow */}
      <div className="relative z-20 bg-brand-navy pb-6 -mt-1">
        <HangingGarland flagCount={18} flagSize={32} />
      </div>

      {/* Introdução Textual */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-brand-navy text-4xl md:text-5xl font-black mb-10 leading-tight">
              Formando mentes brilhantes e <br/><span className="text-brand-red">cidadãos conscientes</span>.
            </h2>
            <div className="w-24 h-2 bg-brand-red mx-auto mb-12 rounded-full"></div>
            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-slate-500 text-xl leading-[1.8] font-light">
                No Ensino Fundamental do Colégio Reação, combinamos excelência acadêmica com formação humana, preparando estudantes para os desafios do mundo contemporâneo. Nossa metodologia integra knowledge, valores e habilidades essenciais para o desenvolvimento integral.
              </p>
              <p className="text-slate-500 text-xl leading-[1.8] font-light">
                Acompanhamos cada aluno de perto, oferecendo suporte pedagógico contínuo, avaliações periódicas e incentivo à autonomia e responsabilidade, formando bases sólidas para o futuro acadêmico e pessoal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nossa Metodologia e Pilares Educacionais */}
      <section id="proposta" className="py-32 bg-brand-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-brand-blue text-xs font-black tracking-[0.4em] uppercase mb-6">Metodologia Reação</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">Pilares Educacionais</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Uma abordagem completa que desenvolve potencialidades acadêmicas e humanas.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: 'Formação Intelectual e Humana', 
                text: 'Desenvolvimento do pensamento crítico, valores éticos e cidadania ativa, formando indivíduos completos e conscientes.' 
              },
              { 
                icon: Layers, 
                title: 'Ensino Estruturado', 
                text: 'Currículo organizado e progressivo, adequado às fases de desenvolvimento, com ênfase na alfabetização e conhecimentos fundamentais.' 
              },
              { 
                icon: UserCheck, 
                title: 'Acompanhamento Pedagógico', 
                text: 'Monitoramento individual do desenvolvimento, reforço quando necessário e comunicação constante com as famílias.' 
              },
              { 
                icon: BarChart3, 
                title: 'Avaliações Periódicas', 
                text: 'Sistema de avaliação formativa que identifica conquistas e áreas de melhoria, guiando o planejamento pedagógico.' 
              },
              { 
                icon: Rocket, 
                title: 'Incentivo à Autonomia', 
                text: 'Estímulo à responsabilidade, organization e independência nos estudos, preparando para desafios acadêmicos futuros.' 
              },
              { 
                icon: Laptop, 
                title: 'Tecnologia Educacional', 
                text: 'Uso de ferramentas digitais e recursos tecnológicos para enriquecer a aprendizagem e preparar para o mundo digital.' 
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:border-brand-blue/30 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <div className="bg-brand-offwhite w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Do 1º ao 9º Ano: A Jornada */}
      <section id="segmentos" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-6">Crescimento Gradual</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter">Do 1º ao 9º Ano: Uma Jornada.</h3>
            <p className="text-slate-400 text-xl font-light">Cada fase com objetivos específicos e acompanhamento especializado.</p>
          </ScrollReveal>

          {/* Anos Iniciais Segment */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
            <ScrollReveal className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                <img 
                  src="https://i.imgur.com/coECbuS.jpeg" 
                  alt="Estudantes dos Anos Iniciais em atividade pedagógica" 
                  className="w-full h-full object-cover aspect-square" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-blue p-10 rounded-[3rem] shadow-2xl text-white">
                <BookOpen size={40} className="mb-4" />
                <p className="text-2xl font-black">Anos <br /> Iniciais</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-brand-blue/10 text-brand-blue p-3 rounded-2xl">
                   <Layers size={24} />
                </span>
                <h4 className="text-3xl font-black text-brand-navy">1º ao 5º Ano</h4>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                Fase crucial para a alfabetização plena e construção das bases do conhecimento. Desenvolvemos as competências essenciais em linguagem e matemática, enquanto introduzimos princípios de história, geografia e ciências de forma contextualizada.
              </p>
              
              <div className="grid gap-5">
                {[
                  { title: 'Alfabetização Plena', desc: 'Leitura, escrita e interpretação textual consolidados.' },
                  { title: 'Base Matemática', desc: 'Operações, raciocínio lógico e resolução de problemas.' },
                  { title: 'Curiosidade Ativa', desc: 'Descoberta do mundo através de ciências, história e geografia.' },
                  { title: 'Socioemocional', desc: 'Habilidades de convívio, empatia e autoconhecimento.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="bg-brand-blue/5 text-brand-blue p-2 rounded-full h-fit group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg">{item.title}</h5>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Anos Finais Segment */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-brand-red/10 text-brand-red p-3 rounded-2xl">
                   <Microscope size={24} />
                </span>
                <h4 className="text-3xl font-black text-brand-navy">6º ao 9º Ano</h4>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                Período de aprofundamento acadêmico e preparação para o Ensino Médio. Introduzimos o pensamento crítico, conhecimentos científicos mais complexos e desenvolvemos habilidades de argumentação e autonomia nos estudos.
              </p>
              
              <div className="grid gap-5">
                {[
                  { title: 'Aprofundamento Disciplinar', desc: 'Ciências, matemática, línguas e humanidades com maior complexidade.' },
                  { title: 'Pensamento Crítico', desc: 'Capacidade de análise, argumentação e tomada de decisões fundamentadas.' },
                  { title: 'Autonomia Acadêmica', desc: 'Organização de estudos, pesquisas e projetos independentes.' },
                  { title: 'Preparação Estruturada', desc: 'Base sólida para os desafios do Ensino Médio e vestibulares.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="bg-brand-red/5 text-brand-red p-2 rounded-full h-fit group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg">{item.title}</h5>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative order-1 lg:order-2">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                <img 
                  src="https://i.imgur.com/Ebi4DUE.jpeg" 
                  alt="Estudantes dos Anos Finais em aula de laboratório" 
                  className="w-full h-full object-cover aspect-square" 
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-red p-10 rounded-[3rem] shadow-2xl text-white">
                <Target size={40} className="mb-4" />
                <p className="text-2xl font-black">Anos <br /> Finais</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-blue opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-tight">
              A base sólida para um <br/><span className="text-brand-red underline decoration-white/20">futuro extraordinário</span>.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={onOpenUnitSelector}
                className="bg-brand-red text-white px-12 py-8 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-3xl shadow-brand-red/40 flex items-center justify-center gap-4 btn-shimmer"
              >
                Solicitar Matrícula <ArrowRight />
              </button>
            </div>
            <p className="mt-12 text-white/30 uppercase text-[10px] font-black tracking-[0.4em]">
              Vagas limitadas para o ano letivo de 2026
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Fundamental;
