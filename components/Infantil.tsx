
import React from 'react';
import { 
  Sparkles, Heart, Baby, Music, Palette, BookOpen, 
  ArrowRight, CheckCircle, Coffee, Cloud, Sun, 
  Star, MessageSquare, Camera, Brain, Users, Pencil, Clock, Smile,
  Gamepad2, Rocket, Zap
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { HangingGarland } from './FestaJuninaDecoration';

interface InfantilProps {
  onOpenUnitSelector?: () => void;
}

const Infantil: React.FC<InfantilProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section Infantil - Mais colorido com gradiente lúdico */}
      <section className="relative min-h-[550px] sm:min-h-[650px] md:h-[95vh] md:min-h-[650px] flex items-center overflow-hidden bg-brand-navy py-12 sm:py-20 md:py-0">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/bNLzGFF.jpeg" 
            alt="Crianças na Education Infantil do Colégio Reação"
            className="w-full h-full object-cover opacity-60 scale-105 animate-soft-pulse"
          />
          {/* Adicionado gradiente mais colorido para quebrar a sobriedade do navy */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/60 to-purple-500/20"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-48 h-48 bg-brand-red/20 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
              <span className="bg-yellow-400 text-brand-navy px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] inline-block shadow-lg">
                Reação Kids
              </span>
              <div className="flex gap-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <Star size={12} className="text-green-400 fill-green-400" />
                <Star size={12} className="text-purple-400 fill-purple-400" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tighter leading-tight md:leading-[0.9]">
              O início de uma <br />
              <span className="text-yellow-400 italic underline decoration-white/10">grande jornada.</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-light mb-6 sm:mb-10 md:mb-12 leading-relaxed">
              Cuidamos com carinho e profissionalismo dos primeiros anos de aprendizado, respeitando a individualidade e estimulando o desenvolvimento integral.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <button 
                onClick={onOpenUnitSelector}
                className="w-full sm:w-auto bg-brand-red text-white px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-black text-sm sm:text-lg hover:scale-110 transition-all shadow-[0_20px_40px_-10px_rgba(230,57,70,0.5)] flex items-center justify-center gap-3 btn-shimmer"
              >
                Matricular Agora <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onOpenUnitSelector}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-bold text-sm sm:text-lg hover:bg-white hover:text-brand-navy transition-all text-center justify-center"
              >
                Conhecer Unidades
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hanging Garland placed in the body flow */}
      <div className="relative z-20 bg-brand-navy pb-6 -mt-1">
        <HangingGarland flagCount={18} flagSize={32} />
      </div>

      {/* Introdução Textual - Cores vibrantes nos detalhes */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
           <Cloud className="absolute top-10 left-10 text-brand-blue" size={100} />
           <Sun className="absolute bottom-10 right-10 text-yellow-500" size={120} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-brand-navy text-3xl md:text-4xl font-black mb-8 leading-tight">
              Acreditamos que os primeiros anos são fundamentais para a formação da <span className="text-purple-600">personalidade</span> e <span className="text-green-600">valores</span>.
            </h2>
            <div className="w-20 h-1.5 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-slate-500 text-xl leading-[1.8] font-light">
              Oferecemos um ambiente seguro, afetivo e rico em estímulos. Nossa proposta pedagógica é baseada em experiências significativas que acompanham a criança por toda a vida.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Nossa Proposta Pedagógica - Cards com cores únicas */}
      <section id="proposta" className="py-32 bg-brand-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-purple-600 text-xs font-black tracking-[0.4em] uppercase mb-6">Nossa Proposta</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">Uma abordagem <span className="text-green-500">completa</span>.</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Desenvolvemos potencialidades e formamos cidadãos desde os primeiros passos.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: 'Socioemocional', text: 'Estimulamos a inteligência emocional, autoestima e empatia essenciais para o convívio.', color: 'bg-purple-100', iconColor: 'text-purple-600' },
              { icon: Heart, title: 'Formação de Valores', text: 'Respeito, honestidade e solidariedade através de atividades cotidianas.', color: 'bg-red-100', iconColor: 'text-red-600' },
              { icon: Smile, title: 'Acolhimento', text: 'Cada criança recebe atenção individualizada para se sentir segura e amada.', color: 'bg-orange-100', iconColor: 'text-orange-600' },
              { icon: Sparkles, title: 'Aprendizagem Lúdica', text: 'Brincadeiras e jogos tornam o aprendizado natural e prazeroso.', color: 'bg-blue-100', iconColor: 'text-blue-600' },
              { icon: Baby, title: 'Ensino Personalizado', text: 'Respeitamos o ritmo de desenvolvimento com desafios adequados à fase.', color: 'bg-green-100', iconColor: 'text-green-600' },
              { icon: Palette, title: 'Atividades Criativas', text: 'Arte, música e teatro estimulam a criatividade e a livre expressão.', color: 'bg-yellow-100', iconColor: 'text-yellow-600' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className={`${item.color} p-10 rounded-[3rem] border-2 border-transparent hover:border-white hover:shadow-2xl transition-all duration-500 group h-full flex flex-col`}>
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon size={28} className={item.iconColor} />
                </div>
                <h4 className={`text-2xl font-black mb-4 ${item.iconColor}`}>{item.title}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rotina do Aluno - Borda colorida na foto */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-yellow-400">
                <img 
                  src="https://i.imgur.com/nJSvTZQ.jpeg" 
                  alt="Rotina escolar no Colégio Reação" 
                  className="w-full h-full object-cover aspect-square" 
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-green-500 p-10 rounded-[3rem] shadow-2xl text-white">
                <Clock size={40} className="mb-4" />
                <p className="text-2xl font-black">Rotina <br /> Feliz</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-green-600 text-xs font-black tracking-[0.4em] uppercase mb-6">Dia a Dia Reação</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy mb-12 tracking-tight">O que seu <span className="text-brand-red">pequeno</span> vive aqui.</h3>
              
              <div className="space-y-6">
                {[
                  { title: 'Chegada e Acolhimento', desc: 'Recebimento individualizado para promover o vínculo afetivo.', dotColor: 'bg-purple-400' },
                  { title: 'Atividades Pedagógicas', desc: 'Projetos temáticos e raciocínio lógico em contextos significativos.', dotColor: 'bg-blue-400' },
                  { title: 'Higiene e Alimentação', desc: 'Formação de hábitos saudáveis e autonomia nas refeições.', dotColor: 'bg-orange-400' },
                  { title: 'Artísticas e Culturais', desc: 'Expressão corporal, musicalização e sensibilidade artística.', dotColor: 'bg-green-400' },
                  { title: 'Brincadeiras Dirigidas', desc: 'Espaços para o desenvolvimento psicomotor e social.', dotColor: 'bg-yellow-400' },
                  { title: 'Descanso e Despedida', desc: 'Momento de repouso e retorno afetivo para a família.', dotColor: 'bg-brand-red' }
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group items-start">
                    <div className={`${step.dotColor} text-white p-2 rounded-2xl h-fit group-hover:scale-110 transition-transform shadow-md`}>
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy text-lg">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Faixas Etárias - Cores distintas por idade */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <ScrollReveal className="text-center mb-20">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Fases do Desenvolvimento.</h3>
            <p className="text-white/40 text-xl font-light">Propostas específicas para cada estágio da primeira infância.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { age: 'Infantil III', range: '3 a 4 anos', focus: 'Foco no desenvolvimento psicomotor, linguagem e formação de hábitos.', color: 'bg-yellow-400', textColor: 'text-brand-navy', icon: Gamepad2 },
              { age: 'Infantil IV', range: '4 anos', focus: 'Ampliação social, iniciação à leitura/escrita e desenvolvimento da autonomia.', color: 'bg-green-500', textColor: 'text-white', icon: Rocket },
              { age: 'Infantil V', range: '5 anos', focus: 'Preparação para o Fundamental, alfabetização e pensamento crítico.', color: 'bg-purple-600', textColor: 'text-white', icon: Zap }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150} className={`${item.color} p-12 rounded-[4rem] shadow-2xl hover:-translate-y-4 transition-all duration-500 group border-b-8 border-black/20`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
                  <item.icon size={32} className={item.textColor} />
                </div>
                <h4 className="text-3xl font-black mb-2">{item.age}</h4>
                <p className="opacity-60 font-bold text-xs uppercase tracking-widest mb-6">{item.range}</p>
                <p className="opacity-90 leading-relaxed font-medium">{item.focus}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Mais vibrante */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-50 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="bg-brand-red p-16 md:p-32 rounded-[6rem] shadow-3xl border-[16px] border-brand-navy relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red to-orange-600 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-none">
                  Agende sua <br/><span className="text-yellow-400 underline decoration-white/20">Visita Kids</span> hoje.
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={onOpenUnitSelector}
                    className="bg-white text-brand-red px-12 py-8 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-3xl flex items-center justify-center gap-4 btn-shimmer"
                  >
                    Matricular Agora <ArrowRight />
                  </button>
                </div>
                <p className="mt-12 text-white/50 uppercase text-[10px] font-black tracking-[0.4em]">
                  <Camera size={14} className="inline mr-2" /> Monitoramento 24h para sua tranquilidade
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Infantil;
