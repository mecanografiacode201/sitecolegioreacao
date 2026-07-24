import React from 'react';
import ScrollReveal from './ScrollReveal';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-red/10 p-3 rounded-2xl text-brand-red">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter">Política de <span className="text-brand-red">Privacidade</span></h1>
          </div>
          <p className="text-slate-500 text-lg mb-12 font-light leading-relaxed">
            Sua privacidade é fundamental para nós. Esta política detalha como o Colégio Reação coleta, utiliza e protege suas informações pessoais em conformidade com a LGPD.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          <ScrollReveal delay={100}>
            <section className="bg-brand-offwhite p-8 md:p-12 rounded-[3rem] border border-slate-100">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                <Lock className="text-brand-red" size={24} /> 1. Coleta de Dados
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente ao preencher formulários em nosso site, como nome, e-mail e telefone para contato comercial ou agendamento de visitas.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Dados de identificação (Nome, CPF dos responsáveis);</li>
                <li>Informações de contato (Telefone, WhatsApp, E-mail);</li>
                <li>Dados do estudante (Ano escolar pretendido).</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <section className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                <Eye className="text-brand-red" size={24} /> 2. Finalidade do Tratamento
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Os dados coletados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-4 ml-4">
                <li>Processar solicitações de reserva de matrícula;</li>
                <li>Enviar informações acadêmicas e promocionais (newsletter);</li>
                <li>Melhorar a experiência do usuário em nosso portal;</li>
                <li>Cumprir obrigações legais perante órgãos de educação.</li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <section className="bg-brand-navy p-8 md:p-12 rounded-[3rem] text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-brand-red" size={24} /> 3. Segurança e Proteção
              </h2>
              <p className="text-white/70 leading-relaxed">
                Implementamos medidas técnicas e organizacionais avançadas para proteger seus dados contra acessos não autorizados, perda, destruição ou alteração. O acesso às informações é restrito a funcionários autorizados da nossa secretaria e coordenação.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <section className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-3">
                <FileText className="text-brand-red" size={24} /> 4. Seus Direitos
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Conforme a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, correção, anonimização ou exclusão de seus dados pessoais a qualquer momento através de nossos canais oficiais de atendimento.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">Última atualização: Outubro de 2024. Colégio Reação.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;