import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Gavel, Globe, UserCheck, AlertCircle } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-navy/10 p-3 rounded-2xl text-brand-navy">
              <Gavel size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter">Termos de <span className="text-brand-red">Uso</span></h1>
          </div>
          <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed">
            Ao acessar o portal do Colégio Reação, você concorda com os seguintes termos e condições de uso. Por favor, leia com atenção.
          </p>
        </ScrollReveal>

        <div className="grid gap-12">
          <ScrollReveal delay={100}>
            <section className="border-l-4 border-brand-red pl-8 md:pl-12 py-4">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <Globe className="text-brand-navy" size={24} /> 1. Propriedade Intelectual
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Todo o conteúdo deste site, incluindo logotipos, textos, fotografias de infraestrutura, vídeos institucionais e designs, são de propriedade exclusiva do Colégio Reação ou de seus licenciadores, protegidos pelas leis de direitos autorais. O uso não autorizado é estritamente proibido.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="border-l-4 border-brand-navy pl-8 md:pl-12 py-4">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <UserCheck className="text-brand-navy" size={24} /> 2. Responsabilidades do Usuário
              </h2>
              <p className="text-slate-600 leading-relaxed">
                O usuário compromete-se a utilizar o site para fins lícitos, não sendo permitido o envio de informações falsas através dos formulários de matrícula, nem o uso de robôs ou scripts para extração de dados do portal.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="bg-brand-offwhite p-8 md:p-12 rounded-[3rem]">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                <AlertCircle className="text-brand-red" size={24} /> 3. Isenção de Garantias
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Embora façamos o máximo para manter as informações de vagas e calendários atualizados, o preenchimento de formulários de interesse não garante a efetivação da matrícula, que depende de disponibilidade e cumprimento do processo seletivo presencial nas unidades.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="border-l-4 border-brand-red pl-8 md:pl-12 py-4">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Foro e Legislação</h2>
              <p className="text-slate-600 leading-relaxed">
                Estes termos são regidos pelas leis da República Federativa do Brasil. Eventuais controvérsias serão dirimidas no foro da Comarca de Brasília, Distrito Federal.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-400 text-sm italic">O Colégio Reação reserva-se o direito de atualizar estes termos sem aviso prévio.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;