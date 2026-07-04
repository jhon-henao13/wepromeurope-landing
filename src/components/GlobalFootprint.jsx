import React from 'react';
import grupowepromAzul from '../assets/grupoweprom-azul.png';


// Íconos SVG Premium personalizados en línea para garantizar rendimiento sin dependencias externas
const Icons = {
  Hubs: () => (
    <svg className="w-6 h-6 text-[#3861FB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Team: () => (
    <svg className="w-6 h-6 text-[#3861FB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.113-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  Advisors: () => (
    <svg className="w-6 h-6 text-[#3861FB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  GlobeLatam: () => (
    <svg className="w-5 h-5 text-[#3861FB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a3 3 0 013 3l.354.354M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  GlobeEurope: () => (
    <svg className="w-5 h-5 text-[#3861FB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      {/* Geometría de círculos concéntricos representativa de WeProm Europe */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  GlobeNorthAmerica: () => (
    <svg className="w-5 h-5 text-[#3861FB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
};

export default function GlobalFootprint() {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28 px-4 sm:px-8 overflow-hidden font-sans border-t border-white/5 select-none">
      
      {/* Patrón de puntos institucionales idéntico para cohesión total */}
      <div 
        className="absolute inset-0 opacity-100 mix-blend-normal pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Iluminaciones de ambiente sutiles en los costados */}
      <div className="absolute top-1/4 left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/[0.03] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/[0.03] blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto z-10 text-center flex flex-col items-center">
        
        {/* Título de la sección extraído de image_67a148.png */}
        <div className="space-y-2 mb-16 max-w-3xl">
          <span className="text-[13px] tracking-[0.3em] text-blue-400 font-bold uppercase block mb-4">
            Global Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight uppercase">
            Institutional Leadership
          </h2>
        </div>

        {/* 1. SECCIÓN SUPERIOR: Bloques de Métricas / Contadores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mb-12">
          
          {/* Card: Hubs */}
          <div className="group relative bg-slate-100 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-xl p-5 flex items-center space-x-4 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#3861FB]/10 flex items-center justify-center group-hover:bg-[#3861FB]/20 transition-colors duration-300">
              <Icons.Hubs />
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-[#3861FB] tracking-tight">3</div>
              <div className="text-[10px] tracking-widest font-bold text-black uppercase">Hubs</div>
            </div>
          </div>

          {/* Card: Team Members */}
          <div className="group relative bg-slate-100 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-xl p-5 flex items-center space-x-4 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#3861FB]/10 flex items-center justify-center group-hover:bg-[#3861FB]/20 transition-colors duration-300">
              <Icons.Team />
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-[#3861FB] tracking-tight">40+</div>
              <div className="text-[10px] tracking-widest font-bold text-black uppercase">Team Members</div>
            </div>
          </div>

          {/* Card: Associate Advisors */}
          <div className="group relative bg-slate-100 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 rounded-xl p-5 flex items-center space-x-4 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-[#3861FB]/10 flex items-center justify-center group-hover:bg-[#3861FB]/20 transition-colors duration-300">
              <Icons.Advisors />
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-[#3861FB] tracking-tight">50</div>
              <div className="text-[10px] tracking-widest font-bold text-black uppercase">Associate Advisors</div>
            </div>
          </div>

        </div>

        {/* 2. NODO CENTRAL: Corporativo Grupo WeProm */}
        {/* 2. NODO CENTRAL: Corporativo Grupo WeProm */}
        <div className="relative z-20 mb-10">
          <div className="bg-white border border-white/15 px-8 py-2 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.4)] flex items-center justify-center transition-all duration-300 hover:border-blue-400/50">

            {/* Logo PNG que actúa como ícono e identificador */}
            <div className="relative flex items-center justify-center">
              {/* Efecto de pulso (ping) opcional de fondo para mantener el dinamismo previo */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping opacity-25 scale-75" />
              <img 
                src={grupowepromAzul} 
                alt="Grupo WeProm" 
                className="relative h-14 w-auto object-contain"
              />
            </div>
            
          </div>
        </div>

        {/* 3. SISTEMA DE LÍNEAS DE CONEXIÓN (Esquema estructural de la imagen en Desktop) */}
        <div className="hidden lg:block relative w-full max-w-4xl h-16 pointer-events-none z-0">
          {/* Línea vertical que baja del logo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-gradient-to-b from-[#3861FB] to-[#3861FB]" />
          {/* Línea horizontal expansiva con nodos */}
          <div className="absolute top-6 left-[16.6%] right-[16.6%] h-[2px] bg-[#3861FB]/60" />
          
          {/* Nodo Izquierdo (Latam) */}
          <div className="absolute top-[21px] left-[16.6%] -translate-x-1/2 w-3 h-3 rounded-full bg-[#3861FB] shadow-[0_0_8px_#3861FB]" />
          <div className="absolute top-6 left-[16.6%] -translate-x-1/2 w-[2px] h-10 bg-gradient-to-b from-[#3861FB]/60 to-[#3861FB]" />

          {/* Nodo Central (Europe) */}
          <div className="absolute top-[21px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#3861FB] shadow-[0_0_8px_#3861FB]" />
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-gradient-to-b from-[#3861FB]/60 to-[#3861FB]" />

          {/* Nodo Derecho (North America) */}
          <div className="absolute top-[21px] right-[16.6%] translate-x-1/2 w-3 h-3 rounded-full bg-[#3861FB] shadow-[0_0_8px_#3861FB]" />
          <div className="absolute top-6 right-[16.6%] translate-x-1/2 w-[2px] h-10 bg-gradient-to-b from-[#3861FB]/60 to-[#3861FB]" />
        </div>

        {/* 4. SECCIÓN INFERIOR: Grid de Sedes Regionales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-4 lg:mt-0 relative z-10">
          
          {/* Sede: WeProm LATAM */}
          <div className="group relative bg-slate-100 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-slate-300 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icons.GlobeLatam />
            </div>
            <h3 className="text-lg font-bold text-black tracking-wide mb-5">WeProm LATAM</h3>
            
            {/* Sub-caja de locación específica */}
            <div className="w-full bg-slate-200 border border-white/5 rounded-xl p-4 text-left space-y-2">
              <div className="flex items-center space-x-2 text-[11px] font-black text-[#3861FB] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3861FB] shadow-[0_0_6px_#3861FB]" />
                <span>Guadalajara, Mexico</span>
              </div>
              <div className="text-xs font-bold text-black pt-1">Latin America</div>
              <div className="text-xs text-slate-900 font-normal leading-relaxed">
                Regional market strategy and infrastructure.
              </div>
            </div>
          </div>

          {/* Sede: WeProm Europe */}
          <div className="group relative bg-slate-100 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-center flex flex-col items-center">
            {/* Incorpora visualmente los círculos concéntricos de WeProm Europe en el contenedor de ícono */}
            <div className="w-10 h-10 rounded-full bg-slate-300 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icons.GlobeEurope />
            </div>
            <h3 className="text-lg font-bold text-black tracking-wide mb-5">WeProm Europe</h3>
            
            {/* Sub-caja de locación específica */}
            <div className="w-full bg-slate-200 border border-white/5 rounded-xl p-4 text-left space-y-2">
              <div className="flex items-center space-x-2 text-[11px] font-black text-[#3861FB] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3861FB] shadow-[0_0_6px_#3861FB]" />
                <span>Paris, France</span>
              </div>
              <div className="text-xs font-bold text-slate-900 pt-1">European Headquarters</div>
              <div className="text-xs text-slate-900 font-normal leading-relaxed">
                Transatlantic intelligence and bilateral development.
              </div>
            </div>
          </div>

          {/* Sede: WeProm North America */}
          <div className="group relative bg-slate-100 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-slate-300 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Icons.GlobeNorthAmerica />
            </div>
            <h3 className="text-lg font-bold text-black tracking-wide mb-5">WeProm North America</h3>
            
            {/* Sub-caja de locación específica */}
            <div className="w-full bg-slate-200 border border-white/5 rounded-xl p-4 text-left space-y-2">
              <div className="flex items-center space-x-2 text-[11px] font-black text-[#3861FB] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3861FB] shadow-[0_0_6px_#3861FB]" />
                <span>Austin, Texas</span>
              </div>
              <div className="text-xs font-bold text-slate-900 pt-1">United States</div>
              <div className="text-xs text-slate-900 font-normal leading-relaxed">
                Commercial connection to the North American market.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}