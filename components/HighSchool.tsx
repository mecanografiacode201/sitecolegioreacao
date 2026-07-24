import React from 'react';
import { 
  Target, Rocket, GraduationCap, BookOpen, ArrowRight, CheckCircle, 
  Brain, Microscope, Laptop, Globe, Star, Award, Zap, 
  Users, BarChart3, ShieldCheck, Compass, Briefcase, Pencil, Heart,
  Lightbulb, Library, FileText, ClipboardCheck, TrendingUp, Medal,
  Layers, UserCheck, Search, Info
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { HangingGarland } from './FestaJuninaDecoration';

interface HighSchoolProps {
  onOpenUnitSelector?: () => void;
}

const HighSchool: React.FC<HighSchoolProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section Ensino Médio */}
      <section className="relative min-h-[550px] sm:min-h-[650px] md:h-[95vh] md:min-h-[700px] flex items-center overflow-hidden bg-brand-navy py-12 sm:py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/EUksldX.jpeg" 
            alt="Estudantes do Ensino Médio do Colégio Reação em ambiente de aprendizado avançado"
            className="w-full h-full object-cover opacity-40 scale-105 animate-soft-pulse"
            width="1920"
            height="1080"
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <span className="bg-brand-red text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] inline-block shadow-lg">
                High Performance
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-brand-red fill-brand-red" />
                ))}
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-tight md:leading-[0.85]">
              Ensino Médio <br />
              <span className="text-brand-red italic underline decoration-white/10">Formação para o Futuro.</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-light mb-6 sm:mb-10 md:mb-12 leading-relaxed">
              Preparação completa para vestibulares, ENEM, PAS e desenvolvimento crítico e intelectual para os desafios do mundo contemporâneo.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onOpenUnitSelector}
                className="w-full sm:w-auto bg-brand-red text-white px-6 sm:px-12 py-3.5 sm:py-5 md:py-6 rounded-full font-black text-sm sm:text-lg md:text-xl hover:scale-115 transition-all shadow-3xl shadow-brand-red/30 flex items-center justify-center gap-3 btn-shimmer"
              >
                Matrículas 2026 <ArrowRight className="w-5 h-5" />
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
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-brand-navy text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                Formação integral para os grandes <span className="text-brand-red">desafios acadêmicos</span> e da vida.
              </h2>
              <div className="w-20 h-2 bg-brand-red mb-8 rounded-full"></div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6 text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                <p>
                  No Ensino Médio do Colégio Reação, combinamos excelência acadêmica com formação humana, preparando estudantes para os vestibulares mais concorridos, ENEM, PAS e para a vida universitária. Nossa metodologia integra aprofundamento disciplinar, orientação vocacional e desenvolvimento de autonomia intelectual.
                </p>
                <p>
                  Acompanhamos cada aluno de perto, oferecendo suporte pedagógico individualizado, simulados periódicos e incentivo à maturidade acadêmica, formando bases sólidas para o futuro profissional e pessoal.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Nossos Pilares Educacionais */}
      <section id="pilares" className="py-24 md:py-40 bg-brand-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 md:mb-32">
            <ScrollReveal>
              <h2 className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-6">Nossa Essência</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 tracking-tighter">Nossos Pilares Educacionais.</h3>
              <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-light">
                Uma abordagem completa que desenvolve potencialidades acadêmicas, humanas e prepara para o futuro.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: GraduationCap, 
                title: 'Formação Acadêmica Avançada', 
                text: 'Aprofundamento em Física, Química, Biologia, Matemática, Redação e Ciências Humanas com foco crítico e científico.' 
              },
              { 
                icon: BookOpen, 
                title: 'Preparação para Vestibulares', 
                text: 'Preparação completa para ENEM, PAS e principais vestibulares com simulados, revisões e técnicas de estudo eficazes.' 
              },
              { 
                icon: Brain, 
                title: 'Orientação Vocacional', 
                text: 'Apoio na escolha de áreas profissionais, atividades de descoberta vocacional e informação sobre universidades e cursos.' 
              },
              { 
                icon: Rocket, 
                title: 'Autonomia e Maturidade', 
                text: 'Estímulo à responsabilidade, organização e independência nos estudos, preparando para a vida acadêmica e profissional.' 
              },
              { 
                icon: UserCheck, 
                title: 'Acompanhamento Individualizado', 
                text: 'Monitoramento personalizado do desenvolvimento, reforço direcionado e comunicação constante com as famílias.' 
              },
              { 
                icon: Microscope, 
                title: 'Ciência e Pensamento Crítico', 
                text: 'Desenvolvimento do pensamento científico, filosófico e crítico para análise e resolução de problemas complexos.' 
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="bg-white p-10 md:p-12 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full">
                <div className="bg-brand-navy text-brand-red w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-red group-hover:text-white transition-all shadow-lg">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais do Nosso Ensino Médio */}
      <section id="diferenciais" className="py-24 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24 md:mb-32">
            <ScrollReveal>
              <h2 className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-6">Exclusividade Reação</h2>
              <h3 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 tracking-tighter">Diferenciais do Nosso Ensino Médio.</h3>
            </ScrollReveal>
          </div>

          <div className="space-y-32 md:space-y-48">
            {/* Diferencial 1: ENEM/Vestibulares */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <ScrollReveal className="relative">
                <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                  <img src="https://i.imgur.com/f8gfneM.jpeg" alt="Estudantes do Ensino Médio em simulado ENEM" className="w-full aspect-square object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand-red p-10 rounded-[3rem] shadow-2xl text-white">
                  <Award size={40} className="mb-4" />
                  <p className="text-2xl font-black">ENEM & <br /> PAS</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-brand-red/10 text-brand-red p-3 rounded-2xl">
                    <Library size={28} />
                  </span>
                  <h4 className="text-3xl md:text-4xl font-black text-brand-navy">Preparação para ENEM e Vestibulares</h4>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                  Programa intensivo de preparação com simulados periódicos no formato ENEM e principais vestibulares, acompanhamento detalhado de desempenho, aulas de revisão estratégicas e ensino de técnicas de estudo eficazes.
                </p>
                <ul className="space-y-4">
                  {[
                    'Simulados bimestrais: Com correção TRI e análise de desempenho individualizada.',
                    'Revisões intensivas: Aulas focadas em conteúdos mais cobrados e temas recorrentes.',
                    'Técnicas de redação: Produção e correção de textos com base nas competências do ENEM.',
                    'Plantão de dúvidas: Atendimento individualizado para resolução de questões específicas.'
                  ].map((check, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="bg-brand-red/10 text-brand-red p-1 rounded-lg shrink-0 mt-1 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-slate-600 font-medium">{check}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Diferencial 2: Orientação Vocacional */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <ScrollReveal className="order-2 lg:order-1" delay={200}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-brand-navy/10 text-brand-navy p-3 rounded-2xl">
                    <Briefcase size={28} />
                  </span>
                  <h4 className="text-3xl md:text-4xl font-black text-brand-navy">Orientação de Carreira e Vocacional</h4>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                  Programa de orientação vocacional que auxilia o estudante na descoberta de suas aptidões, interesses e potencialidades, oferecendo informações sobre o mercado de trabalho, cursos superiores e universidades.
                </p>
                <ul className="space-y-4">
                  {[
                    'Testes vocacionais: Instrumentos validados para identificação de perfis e interesses profissionais.',
                    'Palestras com profissionais: Contato com diferentes áreas de atuação e realidades do mercado.',
                    'Visitas a universidades: Conhecimento in loco de instituições de ensino superior.',
                    'Informação sobre cursos: Dados atualizados sobre graduações e tendências do mercado.'
                  ].map((check, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="bg-brand-navy/10 text-brand-navy p-1 rounded-lg shrink-0 mt-1 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-slate-600 font-medium">{check}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal className="relative order-1 lg:order-2">
                <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                  <img src="https://i.imgur.com/IAsRF6S.jpeg" alt="Orientação vocacional com estudantes do Ensino Médio" className="w-full aspect-square object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-brand-navy p-10 rounded-[3rem] shadow-2xl text-white">
                  <Compass size={40} className="mb-4" />
                  <p className="text-2xl font-black">Projeto <br /> de Vida</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Diferencial 3: Formação Humana */}
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <ScrollReveal className="relative">
                <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                  <img src="https://i.imgur.com/4Ib4hnp.jpeg" alt="Formação Humana e Cidadania no Reação" className="w-full aspect-square object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand-red p-10 rounded-[3rem] shadow-2xl text-white">
                  <Heart size={40} className="mb-4" />
                  <p className="text-2xl font-black">Valores <br /> Humanos</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="flex items-center gap-4 mb-8">
                  <span className="bg-brand-red/10 text-brand-red p-3 rounded-2xl">
                    <ShieldCheck size={28} />
                  </span>
                  <h4 className="text-3xl md:text-4xl font-black text-brand-navy">Formação Humana e Cidadania</h4>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                  Desenvolvimento integral que vai além dos conteúdos acadêmicos, formando jovens éticos, responsáveis e conscientes de seu papel na sociedade, com habilidades socioemocionais essenciais para a vida adulta.
                </p>
                <ul className="space-y-4">
                  {[
                    'Ética e valores humanos: Discussões sobre moral, justiça e responsabilidade social.',
                    'Inteligência emocional: Desenvolvimento de autoconhecimento, empatia e resiliência.',
                    'Projetos sociais: Engajamento em ações comunitárias e voluntariado.',
                    'Debates contemporâneos: Discussão de temas atuais e relevantes para a formação cidadã.'
                  ].map((check, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="bg-brand-red/10 text-brand-red p-1 rounded-lg shrink-0 mt-1 group-hover:bg-brand-red group-hover:text-white transition-colors">
                        <CheckCircle size={18} />
                      </div>
                      <span className="text-slate-600 font-medium">{check}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada Acadêmica por Série */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-blue opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-6">Progressão Estratégica</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">A Jornada do Vestibulando.</h3>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                step: "1ª Série", 
                title: "Base de Alta Performance", 
                focus: "Início do PAS UnB (Subprograma 1) e nivelamento rigoroso em todas as competências do ENEM.",
                icon: Layers
              },
              { 
                step: "2ª Série", 
                title: "Consolidação e Expansão", 
                focus: "Aprofundamento do PAS 2 e intensificação da produção textual focada em notas 1000.",
                icon: TrendingUp
              },
              { 
                step: "3ª Série", 
                title: "Foco Total e Revisão", 
                focus: "Conclusão do PAS 3, maratonas de simulados ENEM e revisão final estratégica para UnB e federais.",
                icon: Rocket
              }
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 150} className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 hover:border-brand-red/50 hover:bg-white/10 transition-all duration-500 group flex flex-col h-full">
                <div className="bg-brand-red/10 text-brand-red w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-red group-hover:text-white transition-all shadow-xl">
                   <card.icon size={28} />
                </div>
                <span className="text-brand-red font-black text-xs uppercase tracking-widest mb-2">{card.step}</span>
                <h4 className="text-2xl font-black text-white mb-4 leading-tight">{card.title}</h4>
                <p className="text-white/40 font-medium leading-relaxed group-hover:text-white/60 transition-colors">{card.focus}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[120px] -z-0"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="bg-brand-navy p-20 md:p-32 rounded-[6rem] text-white relative overflow-hidden border-[16px] border-brand-offwhite shadow-[0_60px_100px_-20px_rgba(13,43,82,0.4)]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tighter leading-none">
                  Sua aprovação <br/><span className="text-brand-red">começa aqui</span>.
                </h2>
                <p className="text-white/40 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                  Junte-se ao colégio que é referência em resultados no Recanto das Emas. Venha ser Reação em 2026.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={onOpenUnitSelector}
                    className="bg-brand-red text-white px-14 py-8 rounded-full font-black text-xl md:text-2xl hover:scale-110 transition-all shadow-3xl shadow-brand-red/30 btn-shimmer flex items-center justify-center gap-4"
                  >
                    MATRICULAR AGORA <ArrowRight size={28} />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HighSchool;