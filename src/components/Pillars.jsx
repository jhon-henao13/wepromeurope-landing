import React, { useState } from 'react';
import worldGlobe from '../assets/world-globe.webp';
import bgIcon from '../assets/icon.webp';

const PILLARS_DATA = [
  {
    id: 0,
    title: 'Market Research & Deep Intelligence',
    tag: 'Market Research',
    angle: 90, // Ángulo base en el círculo
    tagline: 'Eliminate risk before allocating capital.',
    deliverables: [
      'Strategic Feasibility Studies',
      'Advanced Geomarketing diagnostics',
      'Qualitative & Quantitative Focus Groups',
      'Competitor Benchmarking'
    ],
    footer: 'To validate expansions with zero blind spots.'
  },
  {
    id: 1,
    title: 'Soft-Landing & Expansion Consulting',
    tag: 'Soft-Landing & Expansion',
    angle: 210,
    tagline: 'Navigate complex regulatory, customs, and logistical entryways seamlessly.',
    deliverables: [
      'Custom aduanas compliance & cross-border structural frameworks',
      'Deploying secure franchise networks & legal entities',
      'Mapping critical investment paths with state-level actors',
      'Localization of corporate operations and supply chain'
    ],
    footer: 'To secure operational continuity across jurisdictions.'
  },
  {
    id: 2,
    title: 'Strategic Positioning & Marketing',
    tag: 'Strategic Positioning',
    angle: 330,
    tagline: 'Build and shield your global corporate reputation.',
    deliverables: [
      'Cross-border Public Relations campaigns',
      'Adapt commercial brand identities for foreign markets',
      'Provide elite diplomatic accompaniment at premier international trade forums',
      'Digital authority building & stakeholder alignment'
    ],
    footer: 'To dominate regional market share organically.'
  }
];

export default function Pillars() {
  const [activeTab, setActiveTab] = useState(0);

  // Cálculo de rotación del anillo exterior para que el pilar activo se mueva arriba/centro
  const getRingRotation = () => {
    if (activeTab === 0) return 'rotate-0';
    if (activeTab === 1) return '-rotate-[120deg]';
    return 'rotate-[120deg]';
  };

  // Efecto sutil de rotación en el mundo (cambia según la pestaña elegida)
  const getWorldRotation = () => {
    if (activeTab === 0) return 'rotate-0 scale-100';
    if (activeTab === 1) return 'rotate-[45deg] scale-105';
    return '-rotate-[45deg] scale-95';
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0B1528] via-[#0D1B3E] to-[#070A13] flex flex-col lg:flex-row overflow-hidden font-sans border-t border-white/5 py-12 lg:py-0">
      
      {/* ========================================================================= */}
      {/* PANEL IZQUIERDO: RENDERIZADO DEL GRÁFICO CIRCULAR INTERACTIVO (45% Ancho) */}
      {/* ========================================================================= */}
      <div className="w-full lg:w-[50%] p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-20 bg-transparent">

        <div className="space-y-2 mb-12 lg:mb-16">
          <span className="text-[10px] tracking-[0.25em] text-indigo-400 font-bold uppercase block">
            Global Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Three Pillars of Enterprise <br /> Market Entry
          </h2>
        </div>

        {/* Contenedor del Engranaje/Mundo Interactivo */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center select-none">
          
          {/* Anillo de Segmentos Externo (Gira dinámicamente con transiciones fluidas) */}
          <div className={`absolute inset-0 rounded-full border-4 border-white/5 transition-transform duration-700 ease-out z-10 ${getRingRotation()}`}>
            {PILLARS_DATA.map((pillar) => {
              const isActive = activeTab === pillar.id;
              // Distribución radial matemática de los botones del arco
              const positions = [
                'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2', // Pilar 0
                'bottom-10 left-6', // Pilar 1
                'bottom-10 right-6' // Pilar 2
              ];

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`absolute ${positions[pillar.id]} w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-3 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-500 shadow-2xl backdrop-blur-md cursor-pointer ${
                    isActive 
                      ? 'bg-indigo-600 text-white border-2 border-indigo-400 scale-110 z-30' 
                      : 'bg-slate-900/80 text-slate-400 border border-white/10 hover:border-indigo-500/40 hover:text-slate-200 z-20'
                  }`}
                  style={{ transform: `rotate(${-getRingRotation()}deg)` }} // Contrarresta la rotación del padre para mantener texto derecho
                >
                  <span className="leading-tight">{pillar.tag}</span>
                </button>
              );
            })}
          </div>

          {/* El Planeta Tierra en el Centro con efecto de profundidad tridimensional */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.3)] z-0 bg-slate-950 flex items-center justify-center">
            {/* Atmósfera translúcida */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/60 via-transparent to-sky-400/20 mix-blend-screen z-20 pointer-events-none" />
            <img 
              src={worldGlobe} 
              alt="Interactive Globe" 
              className={`w-[105%] h-[105%] object-cover opacity-90 select-none pointer-events-none transition-all duration-1000 ease-out ${getWorldRotation()}`}
            />
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* PANEL DERECHO: TARJETAS APILADAS CON EFECTO CINEMÁTICO DE TRASLACIÓN */}
      {/* ========================================================================= */}
      <div className="w-full lg:w-[55%] p-6 sm:p-12 lg:p-16 flex flex-col justify-center relative min-h-[520px] lg:min-h-0 bg-transparent z-10 pr-0">
        
        {/* Contenedor Fijo con Altura Explícita para mantener la estructura de capas absolutas */}
        <div className="relative w-full max-w-xl h-[500px] sm:h-[520px] mx-auto lg:mx-0">
          
          {PILLARS_DATA.map((pillar) => {
            const isActive = activeTab === pillar.id;
            
            // Cálculo matemático de distancias para simular las tarjetas que se asoman detrás
            let diff = pillar.id - activeTab;
            
            // Lógica para comportamiento circular/infinito del stack
            if (diff < -1) diff += 3;
            if (diff > 1) diff -= 3;

            const isPast = diff < 0;
            const isFuture = diff > 0;

            // Estilos dinámicos premium basados en la posición del stack de la imagen
            let stackStyles = "";
            if (isActive) {
              stackStyles = "opacity-100 translate-x-0 translate-y-0 scale-100 z-30 pointer-events-auto";
            } else if (isFuture) {
              // Se asoma hacia la derecha y abajo simulando profundidad física de interfaz
              stackStyles = "opacity-40 translate-x-4 translate-y-4 scale-[0.98] z-20 pointer-events-none";
            } else if (isPast) {
              // Tarjeta que ya pasó: se desplaza hacia la izquierda con desvanecimiento controlado
              stackStyles = "opacity-0 -translate-x-32 translate-y-2 scale-95 z-10 pointer-events-none";
            }

            return (
              <div
                key={pillar.id}
                className={`absolute inset-0 w-full h-full transition-all duration-600 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${stackStyles}`}
              >
                {/* Cuerpo de la Tarjeta Premium de la imagen */}
                <div className="w-full h-full bg-[#162954]/50 backdrop-blur-xl border border-indigo-400/20 rounded-lg p-4 sm:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between">
                  
                  {/* Isotipo/Icon con opacidad y posición idéntica a la imagen de referencia */}
                  <div 
                    className="absolute right-4 bottom-4 w-56 h-56 sm:w-72 sm:h-72 opacity-[0.04] pointer-events-none bg-no-repeat bg-contain bg-center z-0 select-none"
                    style={{ backgroundImage: `url(${bgIcon})` }}
                  />

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 font-normal mb-6 tracking-wide">
                      {pillar.tagline}
                    </p>

                    {/* Listado de Entregables */}
                    <div className="space-y-3">
                      <span className="text-[11px] tracking-[0.15em] uppercase text-slate-400 font-bold block">
                        We deliver:
                      </span>
                      {pillar.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-slate-200 text-sm sm:text-[15px]">
                          <span className="text-indigo-400 font-semibold select-none">✓</span>
                          <span className="font-normal text-slate-200/90 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer e Indicador de Cierre */}
                  <div className="relative z-10 mt-4">
                    <p className="text-xs sm:text-sm text-slate-400/80 italic border-t border-white/5 pt-4 mb-4">
                      {pillar.footer}
                    </p>
                    
                    {/* Botón Call to Action Premium Estilo Outline exacto al diseño */}
                    <button className="group inline-flex items-center space-x-2 bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white/60 font-semibold text-xs py-2.5 px-5 rounded tracking-wide transition-all duration-300">
                      <span>Schedule a Discovery Call</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-indigo-400">→</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}