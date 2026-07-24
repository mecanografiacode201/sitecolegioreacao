import React from 'react';
import { ShieldCheck, GraduationCap, MapPin, Search } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SEOContent: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden" aria-labelledby="seo-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="bg-brand-navy p-8 md:p-16 rounded-[3rem] text-white relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Search size={120} aria-hidden="true" />
              </div>
              <h2 id="seo-heading" className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                Por que escolher um <span className="text-brand-red italic">colégio particular</span> no Recanto das Emas?
              </h2>
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                A escolha da escola certa é o investimento mais importante na vida de um estudante. Em Brasília, especialmente no <strong>Recanto das Emas</strong>, o <strong>Colégio Reação</strong> se destaca por oferecer uma estrutura que une segurança, tecnologia e um corpo docente altamente qualificado, sendo referência como <strong>colégio particular no Distrito Federal</strong>.
              </p>
              <div className="flex items-center gap-4 text-brand-red font-bold text-sm tracking-[0.2em] uppercase">
                <ShieldCheck aria-hidden="true" /> Autoridade Educacional Reconhecida no DF
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-10">
              <article className="flex gap-6 items-start">
                <div className="bg-brand-red/10 p-4 rounded-2xl text-brand-red shrink-0">
                  <GraduationCap size={28} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Escola Particular em Brasília – DF com Resultados</h3>
                  <p className="text-slate-500 leading-relaxed font-light text-lg">
                    Diferente de uma escola comum, um <strong>colégio particular</strong> como o Reação oferece acompanhamento personalizado, simulados periódicos para o <strong>PAS UnB e ENEM</strong>, e uma carga horária otimizada para o máximo desempenho acadêmico do seu filho.
                  </p>
                </div>
              </article>

              <article className="flex gap-6 items-start">
                <div className="bg-brand-blue/10 p-4 rounded-2xl text-brand-blue shrink-0">
                  <MapPin size={28} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Localização Privilegiada no Coração do Recanto</h3>
                  <p className="text-slate-500 leading-relaxed font-light text-lg">
                    Situado na <strong>Quadra 201, Avenida Buriti</strong>, no centro do <strong>Recanto das Emas</strong>, facilitamos a logística diária das famílias de Brasília que buscam o melhor ensino particular sem abrir mão da proximidade e segurança.
                  </p>
                </div>
              </article>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="text-brand-navy font-black text-sm uppercase tracking-widest mb-4">Destaques da Nossa Instituição Educacional:</h4>
                <ul className="grid grid-cols-2 gap-4">
                  {[
                    'Educação Infantil Pedagógica DF',
                    'Ensino Fundamental Forte Recanto',
                    'Ensino Médio de Alta Performance',
                    'Foco Especial em PAS e ENEM',
                    'Ambiente Seguro Monitorado 24h',
                    'Formação de Valores Éticos'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-red rounded-full" aria-hidden="true"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;