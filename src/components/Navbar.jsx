import React, { useState, useEffect } from 'react';
import logo from '../assets/logo-blanco.png';
import { useContactModal } from './ContactModal';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { openModal } = useContactModal();
  const [isOpen, setIsOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll de la página de fondo cuando el menú lateral móvil esté activo
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Definir items de navegación con IDs fijos (en inglés) y etiquetas traducidas
  const navItems = [
    { id: 'global-capabilities', labelKey: 'nav.global' },
    { id: 'local-capabilities', labelKey: 'nav.local' },
    { id: 'success-stories', labelKey: 'nav.stories' },
    { id: 'framework', labelKey: 'nav.framework' }
  ];

  return (
    <header className="w-full flex flex-col fixed top-0 left-0 z-50 transition-all duration-300">
      {/* TOP NOTIFICATION BAR */}
      {/* TOP NOTIFICATION BAR (Optimizado Premium) */}
      <div className={`w-full bg-slate-950/95 border-b border-white/5 text-white text-[11px] md:text-xs px-4 text-center tracking-wide z-50 transition-all duration-500 ease-in-out overflow-hidden relative ${isScrolled ? 'max-h-0 py-0 opacity-0 pointer-events-none' : 'max-h-12 py-2.5 opacity-100'}`}>

        <span className="opacity-90 font-bold tracking-wider inline-flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          {t('topbar')}
          <span className="opacity-70">{t('topbarSubtitle')}</span>
        </span>

        {/* Haz de luz horizontal estático/difuso decorativo inferior */}
        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      </div>

      {/* MAIN NAVIGATION */}
      <div className={`w-full transition-all duration-500 ease-in-out ${isScrolled ? 'bg-slate-950/75 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-white/10'}`}>
        <nav className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ease-in-out ${isScrolled ? 'h-16' : 'h-20'}`}>
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img 
              src={logo} 
              alt="WeProm Europe Logo" 
              className={`w-auto object-contain transition-all duration-500 group-hover:scale-105 ${isScrolled ? 'h-11' : 'h-14'}`} 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-white/90 text-[13px] font-medium tracking-wide">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-white transition-colors duration-300 relative py-2 tracking-wider text-[12px] font-semibold uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button onClick={openModal} className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
              {t('common.requestDiagnostic')}
            </button>
            {/* Language switcher */}
            <div className="text-[11px] font-bold tracking-widest text-white/40 space-x-2">
              <span
                className={`cursor-pointer transition-colors ${locale === 'fr' ? 'text-white' : 'hover:text-white'}`}
                onClick={() => setLocale('fr')}
              >
                FR
              </span>
              <span className="text-white/20 font-normal">|</span>
              <span
                className={`cursor-pointer transition-colors ${locale === 'en' ? 'text-white' : 'hover:text-white'}`}
                onClick={() => setLocale('en')}
              >
                EN
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded hover:bg-white/5 transition-colors"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </nav>
      </div>

      {/* Mobile Menu */}
      {/* MENÚ MÓVIL PREMIUM: Backdrop Translúcido con Cierre de Clic Externo */}
      <div 
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* MENÚ MÓVIL PREMIUM: Panel Deslizable Lateral Derecho (Slide-Over Panel) */}
      <div className={`fixed top-0 right-0 h-full w-[310px] sm:w-[360px] bg-slate-950/95 backdrop-blur-2xl border-l border-white/10 z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.7)] p-6 flex flex-col justify-between transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div>
          {/* Cabecera Interna del Menú Lateral */}
          <div className="flex items-center justify-between pb-5 border-b border-white/5 mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400">Navigation</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cuerpo: Enlaces con Entrada Escalonada Progresiva en Hover */}
          <nav className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                style={{ transitionDelay: `${index * 60}ms` }}
                className={`block text-white/70 hover:text-white text-[15px] font-semibold uppercase tracking-widest text-left transition-all duration-300 transform group/moblink ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
              >
                <span className="text-indigo-400 mr-2.5 font-mono text-xs font-light">0{index + 1}.</span>
                <span className="relative inline-block">
                  {t(item.labelKey)}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover/moblink:w-full" />
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Zona Inferior: CTA y Selector de Idiomas Rediseñado */}
        <div className={`space-y-6 pt-6 border-t border-white/5 transition-all duration-500 delay-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
          <button 
            onClick={() => { setIsOpen(false); openModal(); }}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/20 text-center uppercase tracking-widest transition-all duration-300 active:scale-[0.98]"
          >
            {t('common.requestDiagnostic')}
          </button>

          {/* Switcher de Idioma Móvil de Aspecto Corporativo */}
          <div className="flex items-center justify-between bg-white/[0.03] p-2 rounded-xl border border-white/5">
            <span className="text-[11px] font-medium text-slate-400 pl-2">Select Language</span>
            <div className="flex space-x-1">
              <button
                className={`text-[11px] font-black tracking-wider px-3 py-1.5 rounded-lg transition-all ${locale === 'fr' ? 'bg-indigo-600 text-white' : 'text-white/40 hover:text-white'}`}
                onClick={() => setLocale('fr')}
              >
                FR
              </button>
              <button
                className={`text-[11px] font-black tracking-wider px-3 py-1.5 rounded-lg transition-all ${locale === 'en' ? 'bg-indigo-600 text-white' : 'text-white/40 hover:text-white'}`}
                onClick={() => setLocale('en')}
              >
                EN
              </button>
            </div>
          </div>
        </div>

      </div>

    </header>
  );
}