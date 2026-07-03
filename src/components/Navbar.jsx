import React, { useState } from 'react';
import logo from '../assets/logo-blanco.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex flex-col fixed top-0 left-0 z-50 transition-all duration-300">
      {/* 1. TOP NOTIFICATION BAR */}
      <div className="w-full bg-slate-950/90 border-b border-white/5 text-white text-[11px] md:text-xs py-2 px-4 text-center tracking-wide z-50">
        <span className="opacity-75">Looking for local market insights?</span>{' '}
        <strong className="font-medium text-indigo-400">We deliver both local market research and cross-border expansion solutions.</strong>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="w-full border-b border-white/10">
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <div className="flex items-center space-x-3 cursor-pointer group">
            <img 
              src={logo} 
              alt="WeProm Europe Logo" 
              className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />
            
          </div>

          {/* Menú de Escritorio (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8 text-white/90 text-[13px] font-medium tracking-wide">
            {['Global Capabilities', 'Local Capabilities', 'Success Stories', 'Framework'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="hover:text-white transition-colors duration-300 relative py-2 tracking-wider text-[12px] font-semibold uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Acciones de Escritorio */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
              Request Diagnostic
            </button>
            {/* Reemplazar el contenedor div de idiomas por este */}
            <div className="text-[11px] font-bold tracking-widest text-white/40 space-x-2">
              <span className="hover:text-white cursor-pointer transition-colors">FR</span>
              <span className="text-white/20 font-normal">|</span>
              <span className="text-white cursor-pointer">EN</span>
            </div>
          </div>

          {/* Botón de Menú Móvil (Hamburguesa) */}
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

      {/* Menú Desplegable Móvil con Animación */}
      <div className={`lg:hidden w-full bg-slate-950/95 border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-3">
          {['Global Capabilities', 'Local Capabilities', 'Success Stories', 'Framework'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              onClick={() => setIsOpen(false)}
              className="block text-white/80 hover:text-white text-sm py-2 font-medium border-b border-white/5"
            >
              {item}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <button className="w-full bg-indigo-600 text-white text-xs font-semibold py-3 rounded text-center">
              Request Diagnostic
            </button>
            <div className="text-xs font-bold text-white/60 space-x-2 text-center">
              <span className="text-white">EN</span>
              <span className="text-white/20">|</span>
              <span className="hover:text-white cursor-pointer">FR</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
