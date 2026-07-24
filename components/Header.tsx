
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao' | 'privacidade' | 'termos') => void;
  currentPage?: 'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao' | 'privacidade' | 'termos';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    if (href.startsWith('http')) {
      setIsOpen(false);
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
    
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-header shadow-sm py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <button 
              id="btn-header-logo-home"
              onClick={() => onNavigate?.('home')} 
              className={`block h-12 md:h-16 transition-all duration-500 hover:scale-105 ${!scrolled ? 'bg-white/90 p-2 rounded-xl shadow-lg' : ''}`}
            >
              <img 
                src="https://i.imgur.com/LESvkxT.png" 
                alt="Logotipo oficial do Colégio Reação" 
                className="h-full w-auto object-contain"
                width="200"
                height="80"
              />
            </button>
          </div>
          
          <nav className="hidden lg:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                id={`nav-desktop-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={item.href}
                onClick={(e) => handleNavItemClick(e, item.label, item.href)}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`text-sm font-semibold transition-all duration-300 relative group ${
                  item.isButton 
                    ? 'bg-brand-red text-white px-8 py-3 rounded-full shadow-lg shadow-brand-red/20 hover:scale-105 active:scale-95 btn-shimmer' 
                    : `${scrolled ? 'text-brand-navy' : 'text-white'} ${
                        (currentPage === 'infantil' && item.label === 'Infantil') || 
                        (currentPage === 'fundamental' && item.label === 'Anos Iniciais e Finais') ||
                        (currentPage === 'highschool' && item.label === 'Ensino Médio') ||
                        (currentPage === 'unidades' && item.label === 'Unidades') ||
                        (currentPage === 'seja-reacao' && item.label === 'Matrículas 2026')
                        ? 'text-brand-red underline underline-offset-8 decoration-2' 
                        : ''
                      }`
                }`}
              >
                {!item.isButton && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full"></span>
                )}
                <span className={!item.isButton ? 'group-hover:text-brand-red transition-colors' : ''}>
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="lg:hidden">
            <button
              id="btn-header-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-all duration-300 active:scale-90 ${scrolled ? 'text-brand-navy bg-slate-100' : 'text-white bg-white/10'}`}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute w-full bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pt-4 pb-12 space-y-2">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              id={`nav-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              href={item.href}
              onClick={(e) => handleNavItemClick(e, item.label, item.href)}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`block px-4 py-4 text-base font-semibold rounded-2xl transition-all duration-300 transform ${
                isOpen ? 'translate-x-0' : '-translate-x-4'
              } ${
                item.isButton 
                  ? 'bg-brand-red text-white text-center mt-4 active:scale-95' 
                  : 'text-slate-700 hover:bg-slate-50 hover:pl-6'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
