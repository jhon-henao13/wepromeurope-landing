import React from 'react';
import logo from '../assets/logo-blanco.png';

export default function Footer() {
  // Manejador interactivo para capturar el movimiento del cursor en el fondo
  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <footer 
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#080E1A] text-white pt-16 pb-8 px-6 sm:px-12 lg:px-16 overflow-hidden font-sans select-none border-t border-white/5 group/footer transition-colors duration-500"
      style={{
        backgroundImage: 'radial-gradient(1200px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(56, 97, 251, 0.08), transparent 45%), linear-gradient(to right, #15294A, #0F1A30, #080E1A)'
      }}
    >
      
      {/* Efecto de fulgor azul detrás del logotipo (Glow Premium) */}
      {/* 1. Línea superior con destello de luz premium (Neon top border) */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent pointer-events-none" />

      {/* 2. Patrón de Red / Cuadrícula técnica institucional */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* 3. Capas de Fulgores Estáticos Ambientales (Glows Izquierdo y Derecho) */}
      <div className="absolute -top-12 left-10 w-96 h-96 rounded-full bg-blue-600/[0.12] blur-[120px] pointer-events-none z-0 transition-transform duration-700 group-hover/footer:scale-110" />
      <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-indigo-500/[0.06] blur-[100px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        
        {/* SECCIÓN PRINCIPAL: Grid de tres columnas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center pb-12 border-b border-white/10">
          
          {/* COLUMNA 1: Identidad Corporativa (Logo de círculos concéntricos) */}
          <div className="md:col-span-5 flex items-center space-x-5 justify-start">
            
            
            {/* Logotipo Tipográfico con espaciado exacto */}
            <div className="flex items-center space-x-3 cursor-pointer group">
              <img 
                src={logo} 
                alt="WeProm Europe Logo" 
                className="h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              />
              
            </div>

          </div>

          {/* COLUMNA 2: Enlaces de Navegación Estructural */}
          <div className="md:col-span-4 flex flex-col space-y-3 text-left">
            <h4 className="text-base font-black tracking-wider text-white uppercase mb-1">
              Explore
            </h4>
            <nav className="flex flex-col space-y-2.5 text-[17px] text-slate-300 font-normal">
              {[
                "Global Capabilities",
                "Local Capabilities",
                "Success Stories",
                "Framework",
                "Request Diagnostic"
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="relative w-fit transition-colors duration-300 hover:text-white group"
                >
                  {link}
                  {/* Subrayado animado premium de izquierda a derecha */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* COLUMNA 3: Redes Sociales */}
          <div className="md:col-span-3 flex items-center md:justify-end space-x-4">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-[#0F1A30] flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-blue-500/20">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-[#0F1A30] flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-blue-500/20">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white text-[#0F1A30] flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-blue-500/20">
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* PIE DE PÁGINA INFERIOR: Copyright y Legales */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-400 font-light">
          
          {/* Derechos de Autor */}
          <div className="text-center lg:text-left">
            <span>© 2026 WeProm Europe — All rights reserved. | Powered by </span>
            <a href="https://grupoweprom.com" target="_blank" rel="noreferrer" className="font-normal text-slate-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
              WeProm Marketing
            </a>
          </div>

          {/* Enlaces Legales Cohesionados */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-slate-400">
            {[
              "Aviso Legal",
              "Política de Privacidad",
              "Política de Cookies",
              "Gestionar Cookies"
            ].map((legal, idx, arr) => (
              <React.Fragment key={idx}>
                <a href={`#${legal.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-white transition-colors duration-200">
                  {legal}
                </a>
                {idx < arr.length - 1 && <span className="text-slate-600 select-none">·</span>}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}