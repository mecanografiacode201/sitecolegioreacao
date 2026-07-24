import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Stats from './components/Stats';
import ApprovedStudents from './components/ApprovedStudents';
import { EventCalendar } from './components/EventCalendar';
import About from './components/About';
import Differentials from './components/Differentials';
import Units from './components/Units';
import Enrollment from './components/Enrollment';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollReveal from './components/ScrollReveal';
import Infantil from './components/Infantil';
import Fundamental from './components/Fundamental';
import HighSchool from './components/HighSchool';
import UnitsPage from './components/UnitsPage';
import SejaReacao2026 from './components/SejaReacao2026';
import UnitSelectorModal from './components/UnitSelectorModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';
import SEOContent from './components/SEOContent';
import { FestaJuninaGlobalDecorations, HangingGarland } from './components/FestaJuninaDecoration';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao' | 'privacidade' | 'termos' | 'seo-especial'>('home');
  const [isUnitModalOpen, setIsUnitModalOpen] = useState(false);

  // Scroll to top and SEO Metadata Update
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO: Otimização de Títulos e Meta Descriptions para Google 1ª Página
    const baseTitle = "Colégio Reação";
    const metaDescription = document.querySelector('meta[name="description"]');
    
    const pageMetadata: Record<string, { title: string, desc: string }> = {
      home: { 
        title: `Colégio Reação | Melhor Colégio Particular no Recanto das Emas – DF`, 
        desc: "O Colégio Reação é a melhor escola particular no Recanto das Emas, Brasília - DF. Localizado na Quadra 201, oferece ensino de alta performance, foco em PAS e ENEM. Matrículas 2026 abertas." 
      },
      infantil: { 
        title: `Educação Infantil no Recanto das Emas | Colégio Reação Kids`, 
        desc: "A melhor Educação Infantil em colégio particular no Recanto das Emas. Ambiente seguro, afetivo e pedagógico focado no desenvolvimento integral. Conheça o Reação Kids." 
      },
      fundamental: { 
        title: `Ensino Fundamental I e II no Recanto das Emas | Colégio Reação`, 
        desc: "Ensino Fundamental de excelência em Brasília – DF. O Colégio Reação oferece base acadêmica sólida e formação de valores para o futuro do seu filho no Recanto das Emas." 
      },
      highschool: { 
        title: `Ensino Médio de Alta Performance no Recanto das Emas | Reação`, 
        desc: "Preparação intensiva para ENEM, PAS e vestibulares no Recanto das Emas, DF. O melhor Ensino Médio particular com tradição em aprovações e suporte pedagógico." 
      },
      unidades: { 
        title: `Nossas Unidades no Recanto das Emas DF | Colégio Reação`, 
        desc: "Conheça as unidades I e II do Colégio Reação no Recanto das Emas. Infraestrutura premium, laboratórios modernos e segurança total na Quadra 201 e 206." 
      },
      'seja-reacao': { 
        title: `Matrículas 2026 Abertas | Colégio Particular Recanto das Emas`, 
        desc: "Garanta a vaga do seu filho no Colégio Reação para 2026. Processo de matrícula aberto para todos os segmentos no Recanto das Emas. Excelência que transforma." 
      },
      'seo-especial': {
        title: `Escola Particular em Brasília - Recanto das Emas | Colégio Reação`,
        desc: "Procurando escola particular no Recanto das Emas ou Brasília? O Colégio Reação é referência em educação de qualidade, infraestrutura moderna e resultados acadêmicos."
      },
      privacidade: {
        title: `Política de Privacidade | ${baseTitle} - DF`,
        desc: "Saiba como o Colégio Reação protege seus dados e respeita a LGPD no Distrito Federal."
      },
      termos: {
        title: `Termos de Uso | ${baseTitle} Institucional`,
        desc: "Regras e condições de uso do portal institucional do Colégio Reação no DF."
      }
    };

    const currentMeta = pageMetadata[currentPage] || pageMetadata.home;
    document.title = currentMeta.title;
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.desc);
    }
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao' | 'privacidade' | 'termos' | 'seo-especial') => {
    setCurrentPage(page);
  };

  const openUnitSelector = () => setIsUnitModalOpen(true);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FestaJuninaGlobalDecorations />
      <Header onNavigate={navigateTo as any} currentPage={currentPage as any} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onOpenUnitSelector={openUnitSelector} />
            <div className="relative z-20 bg-brand-navy pb-4">
              <HangingGarland flagCount={18} flagSize={32} />
            </div>
            <Pillars />
            <Stats />
            <EventCalendar />
            <ApprovedStudents />
            <About />
            <Differentials />
            <Units onOpenUnitSelector={openUnitSelector} />
            <Enrollment onOpenUnitSelector={openUnitSelector} />
            <SEOContent />
            <Testimonials />
            
            <section id="contato" className="py-20 md:py-32 bg-brand-offwhite" aria-labelledby="contato-heading">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <ScrollReveal>
                  <h2 id="contato-heading" className="text-brand-navy text-[10px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">Atendimento Local</h2>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-12 md:mb-20 leading-tight">Canais de Relacionamento no DF</h3>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
                  <ScrollReveal delay={100}>
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] card-elevation border border-slate-100 group h-full">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-navy text-brand-red rounded-2xl md:rounded-[2rem] flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-xl shadow-blue-900/10 group-hover:rotate-6 transition-transform shrink-0">
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <h4 className="font-bold text-xl md:text-2xl text-brand-navy mb-4">Telefones e WhatsApp</h4>
                      <div className="text-slate-500 text-base md:text-lg leading-relaxed flex flex-col items-center gap-1">
                        <a href="tel:6133331434" className="hover:text-brand-red transition-colors font-bold" aria-label="Telefone Unidade I">(61) 3333-1434</a>
                        <a href="tel:6133333332" className="hover:text-brand-red transition-colors font-bold" aria-label="Telefone Unidade II">(61) 3333-3332</a>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={200}>
                    <div className="bg-brand-navy p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] card-elevation relative z-10 border-4 border-white shadow-3xl group h-full">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red text-white rounded-2xl md:rounded-[2rem] flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl shadow-brand-red/20 group-hover:-rotate-6 transition-transform shrink-0">
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <h4 className="font-bold text-xl md:text-2xl text-white mb-4">Secretaria Presencial</h4>
                      <p className="text-white/60 text-base md:text-lg leading-relaxed">Segunda a Sexta<br/><span className="text-brand-red font-bold">07:30 às 18:00</span></p>
                      <p className="text-white/30 text-[10px] uppercase mt-4">Recanto das Emas, Brasília, DF</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </>
        ) : currentPage === 'infantil' ? (
          <Infantil onOpenUnitSelector={openUnitSelector} />
        ) : currentPage === 'fundamental' ? (
          <Fundamental onOpenUnitSelector={openUnitSelector} />
        ) : currentPage === 'unidades' ? (
          <UnitsPage onOpenUnitSelector={openUnitSelector} />
        ) : currentPage === 'seja-reacao' ? (
          <SejaReacao2026 />
        ) : currentPage === 'privacidade' ? (
          <PrivacyPolicy />
        ) : currentPage === 'termos' ? (
          <TermsOfUse />
        ) : (
          <HighSchool onOpenUnitSelector={openUnitSelector} />
        )}
      </main>
      <Footer onNavigate={navigateTo as any} />
      
      <FloatingWhatsApp />
      <UnitSelectorModal 
        isOpen={isUnitModalOpen} 
        onClose={() => setIsUnitModalOpen(false)} 
      />
    </div>
  );
};

export default App;