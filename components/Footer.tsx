
import React from 'react';
import { Instagram, Facebook, Youtube, ArrowUp, MapPin, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface FooterProps {
  onNavigate?: (page: 'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao' | 'privacidade' | 'termos') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { 
      id: 'instagram',
      icon: Instagram, 
      url: 'https://www.instagram.com/colegioreacao/', 
      name: 'Instagram' 
    },
    { 
      id: 'facebook',
      icon: Facebook, 
      url: 'https://web.facebook.com/profile.php?id=61586276754461', 
      name: 'Facebook' 
    },
    { 
      id: 'youtube',
      icon: Youtube, 
      url: 'https://www.youtube.com/@COLÉGIOREAÇÃO', 
      name: 'YouTube' 
    }
  ];

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    if (href.startsWith('http')) {
      return;
    }

    e.preventDefault();

    if (label === 'Infantil' && onNavigate) {
      onNavigate('infantil');
    } else if (label === 'Anos Iniciais e Finais' && onNavigate) {
      onNavigate('fundamental');
    } else if (label === 'Ensino Médio' && onNavigate) {
      onNavigate('highschool');
    } else if (label === 'Unidades' && onNavigate) {
      onNavigate('unidades');
    } else if (label === 'Matrículas 2026' && onNavigate) {
      onNavigate('seja-reacao');
    } else if (onNavigate) {
      onNavigate('home');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const devWhatsappLink = "https://wa.me/556196507712";

  return (
    <footer className="bg-brand-navy text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="space-y-8">
            <button 
              id="btn-footer-logo-home"
              onClick={() => onNavigate?.('home')} 
              className="block h-20 mb-8 bg-white p-3 rounded-2xl shadow-xl w-fit transition-transform hover:scale-105"
            >
              <img 
                src="https://i.imgur.com/LESvkxT.png" 
                alt="Logotipo Colégio Reação - Escola Particular Recanto das Emas" 
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </button>
            <p className="text-white/50 leading-relaxed text-lg font-light">
              O Colégio Reação é o principal <strong>colégio particular no Recanto das Emas, Brasília – DF</strong>. Transformando potencial em conquistas extraordinárias desde 1997.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  id={`social-link-footer-${link.id}`}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 p-4 rounded-2xl hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:-translate-y-1" 
                  aria-label={`Link para nosso ${link.name}`}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-10 text-brand-red">Nossas Unidades no DF</h4>
            <div className="space-y-8 text-white/60 text-base">
              <div className="group">
                <p className="font-bold text-white mb-2 text-lg flex items-center gap-2">
                  <MapPin size={18} className="text-brand-red" /> Unidade I - Infantil e Fundamental
                </p>
                <p>Quadra 206 - Recanto das Emas, Brasília - DF</p>
                <a id="link-footer-phone-unit-1" href="tel:6133331434" className="text-brand-red mt-1 font-semibold hover:underline flex items-center gap-2">
                  <Phone size={14} /> (61) 3333-1434
                </a>
              </div>
              <div className="group">
                <p className="font-bold text-white mb-2 text-lg flex items-center gap-2">
                  <MapPin size={18} className="text-brand-red" /> Unidade II - Sede Principal
                </p>
                <p>Quadra 201, Lote 07, Av. Buriti - Recanto das Emas, Brasília - DF</p>
                <a id="link-footer-phone-unit-2" href="tel:6133333332" className="text-brand-red mt-1 font-semibold hover:underline flex items-center gap-2">
                  <Phone size={14} /> (61) 3333-3332
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-10 text-brand-red">Mapa do Site</h4>
            <nav className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  id={`footer-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href} 
                  onClick={(e) => handleNavItemClick(e, item.label, item.href)}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-white/60 hover:text-white transition-colors text-lg flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-brand-red mr-0 group-hover:mr-3 transition-all"></span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center text-white/30 text-sm gap-8">
          <div className="flex flex-col gap-2">
            <p>© 2026 Colégio Reação. A melhor <strong>escola particular no Recanto das Emas</strong>.</p>
            <p className="text-white/20 text-xs tracking-wider">
              desenvolvido por <a id="link-footer-developer" href={devWhatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-red transition-colors font-bold decoration-brand-red/30 underline-offset-4 hover:underline">Weskley Gomes</a>
            </p>
          </div>
          <div className="flex space-x-12">
            <button 
              id="btn-footer-privacy"
              onClick={() => onNavigate?.('privacidade')}
              className="hover:text-white transition-colors tracking-widest uppercase text-xs font-bold"
            >
              Privacidade
            </button>
            <button 
              id="btn-footer-terms"
              onClick={() => onNavigate?.('termos')}
              className="hover:text-white transition-colors tracking-widest uppercase text-xs font-bold"
            >
              Termos
            </button>
            <button 
              id="btn-footer-scroll-top"
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="flex items-center gap-2 hover:text-brand-red transition-colors tracking-widest uppercase text-xs font-bold"
            >
              Topo <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
