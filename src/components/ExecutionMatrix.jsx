import React from 'react';

const MATRIX_CAPABILITIES = [
  // Fila 1 de la imagen
  { id: 1, label: 'Market Research and Intelligence' },
  { id: 2, label: 'International Marketing and Positioning' },
  { id: 3, label: 'Consulting in Creation, Development, and Expansion' },
  { id: 4, label: 'Institutional Access and Follow-up' },
  { id: 5, label: 'Public Relations' },
  // Fila 2 de la imagen
  { id: 6, label: 'Commercial Strategy and International Logistics' },
  { id: 7, label: 'Media and Communication Strategy' },
  { id: 8, label: 'Strategic Alliances' },
  { id: 9, label: 'Presence and Support at Events' },
  { id: 10, label: 'Project Coordination and Reporting' }
];

export default function ExecutionMatrix() {
  return (
    <section className="relative w-full bg-slate-100 py-20 lg:py-28 px-4 sm:px-8 overflow-hidden font-sans border-t border-white/5 select-none">
      
      {/* Patrón de puntos integrado para mantener la consistencia estética institucional */}
      <div 
        className="absolute inset-0 opacity-100 mix-blend-normal pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Glows de fondo para emular el destello blanco/azul claro central de image_084930.png */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] rounded-full bg-blue-500/[0.04] blur-[140px] pointer-events-none z-0" />

      <div className="relative w-full max-w-6xl mx-auto z-10 text-center flex flex-col items-center">
        
        {/* Encabezados extraídos con precisión de la imagen */}
        <div className="space-y-3 mb-10 sm:mb-14 max-w-3xl">
          <span className="text-[11px] tracking-[0.25em] text-blue-900 font-bold uppercase block">
            Local Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-900 to-[#3861FB] inline-block">Execution Matrix</span>
            </h2>
          <p className="text-sm sm:text-base text-black font-light max-w-2xl mx-auto leading-relaxed">
            Granular tactical capabilities engineered to drive growth and manage complexity, both within local markets and across international borders.
          </p>
        </div>

        {/* Matriz interactiva de píldoras asimétricas */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mb-14">
          {MATRIX_CAPABILITIES.map((capability) => (
            <div
              key={capability.id}
              className="group relative px-5 py-4 sm:px-6 sm:py-4.5 bg-white/[0.02] hover:bg-[#3861FB]/[0.08] border border-[#3861FB]/80 hover:border-[#3861FB]/100 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default text-center flex items-center justify-center transform hover:-translate-y-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_35px_-10px_rgba(56,97,251,0.25)]"
            >
              {/* Resplandor radial interno en hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Texto de la capacidad */}
              <span className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-black tracking-wide transition-colors duration-300 relative z-10 max-w-xs sm:max-w-none">
                {capability.label}
              </span>
            </div>
          ))}
        </div>

        {/* Botón de llamado a la acción principal unificado */}
        <div className="w-full flex justify-center">
          <button className="group relative inline-flex items-center space-x-2.5 bg-[#3861FB] hover:bg-[#254EDB] text-white font-bold text-sm py-4 px-8 rounded transition-all duration-300 ease-out shadow-[0_10px_25px_-5px_rgba(56,97,251,0.4)] hover:shadow-[0_15px_35px_rgba(56,97,251,0.6)] hover:-translate-y-0.5 active:translate-y-0">
            <span>Schedule a Discovery Call</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-white/90">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}