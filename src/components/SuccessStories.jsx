import React, { useState } from 'react';

// Importación limpia de los logos de marcas disponibles según tu estructura de assets
import logoFord from '../assets/brands/ford.jpeg';
import logoLaNuitDesPUBLIVORES from '../assets/brands/publivores.jpeg'; // Disponible para expansiones futuras
import logoPepsico from '../assets/brands/PEPSICO-min.png'; // Disponible para expansiones futuras
import logoCocaCola from '../assets/brands/cocacola.png';
import logoProMexico from '../assets/brands/promexico.png';
import logoMcDonalds from '../assets/brands/MACDONALDS-min.png';
import logoAxa from '../assets/brands/axa.jpeg';
import logoTequilaHuizache from '../assets/brands/t-huichaze.jpeg'; // Disponible para expansiones futuras
import logoComce from '../assets/brands/comce.png'; // Disponible para expansiones futuras
import logoNissan from '../assets/brands/Nissan.png'; // Disponible para expansiones futuras
import logoBusinessFrance from '../assets/brands/businessfrance.png'; // Disponible para expansiones futuras
import logoMercedes from '../assets/brands/mercedes.png';

const SUCCESS_CASES = [
  {
    id: 0,
    client: 'PROMÉXICO',
    metaTitle: 'Global Market Intelligence & Sovereign Capital Attraction',
    logoType: 'image',
    logoAsset: logoProMexico,
    body: [
      { highlight: 'Designed', text: ' global brand-country positioning and multi-continent public relations frameworks.' },
      { highlight: 'Conducted', text: ' extensive market intelligence across five continents to identify industrial innovation corridors.' },
      { highlight: 'Attracted', text: ' hundreds of millions of dollars in Foreign Direct Investment (FDI) for automotive, aerospace, and energy sectors.' }
    ]
  },
  {
    id: 1,
    client: 'LA NUIT DES PUBLIVORES',
    metaTitle: 'Multicultural Adaptation & Global Event Internationalization',
    logoType: 'image',
    logoAsset: logoLaNuitDesPUBLIVORES,
    body: [
      { highlight: 'Produced and directed', text: ' the multicultural adaptation of the legendary French cultural event.' },
      { highlight: 'Scaled', text: ' international public image strategies across the United States, Mexico, and Central America.' },
      { highlight: 'Secured', text: ' high-value corporate sponsor alignment and consecutive arena sold-outs for multi-market equity.' }
    ]
  },
  {
    id: 2,
    client: 'COCA-COLA',
    metaTitle: 'Consumer Behavioral Auditing & Regional Commercial Acceleration',
    logoType: 'image',
    logoAsset: logoCocaCola,
    body: [
      { highlight: 'Engineered', text: ' regional commercial marketing and specialized event architectures across Latin America.' },
      { highlight: 'Executed', text: ' target consumer audits to map consumption habits and preferences in Mexico and the Caribbean.' },
      { highlight: 'Unlocked', text: ' product line optimization opportunities, breaking historical sales records across the territory.' }
    ]
  },
  {
    id: 3,
    client: 'AXA',
    metaTitle: 'Competitiveness Optimization & Technological Growth Roadmap',
    logoType: 'image',
    logoAsset: logoAxa,
    body: [
      { highlight: 'Executed', text: ' advanced market research to reinforce core competitiveness in high-stakes environments.' },
      { highlight: 'Audited', text: ' market dynamics to optimize the brand\'s strategic commercial portfolio offering.' },
      { highlight: 'Defined', text: ' a scalable technological roadmap to accelerate long-term market growth in Mexico.' }
    ]
  },
  {
    id: 4,
    client: 'TEQUILA HUIZACHE',
    metaTitle: 'Cross-Border Positioning & Unexploited Corridor Identification',
    logoType: 'image',
    logoAsset: logoTequilaHuizache,
    body: [
      { highlight: 'Developed', text: ' premium brand identity and structured international commercialization strategies.' },
      { highlight: 'Executed', text: ' expansion feasibility studies for North American and Eastern European corridors.' },
      { highlight: 'Identified', text: ' high-potential distribution channels to optimize market entry and export routes.' }
    ]
  },
  {
    id: 5,
    client: 'MCDONALD\'S',
    metaTitle: 'Operational Localization & Transborder Franchise Architecture',
    logoType: 'image',
    logoAsset: logoMcDonalds,
    body: [
      { highlight: 'Optimized', text: ' operational and marketing frameworks to consolidate the Latin American franchise model.' },
      { highlight: 'Identified', text: ' critical market requirements during the high-growth Central American expansion phase.' },
      { highlight: 'Successfully tropicalized', text: ' the brand matrix to ensure rapid localized consumer adoption.' }
    ]
  },
  {
    id: 6,
    client: 'MERCEDES-BENZ - EQ',
    metaTitle: 'Premium Line Deployment & Strategic Retail Merger Feasibility',
    logoType: 'image',
    logoAsset: logoMercedes,
    body: [
      { highlight: 'Developed', text: ' comprehensive brand positioning for the launch of the EQ electric line in Mexico.' },
      { highlight: 'Conducted', text: ' national feasibility and consumer perception audits for a strategic point-of-sale merger with Chrysler.' },
      { highlight: 'Mapped', text: ' exact customer niches and behavioral habits to validate cross-brand commercial viability.' }
    ]
  },
  {
    id: 7,
    client: 'FORD',
    metaTitle: 'Light Cargo Market Feasibility & Niche Validation Architecture',
    logoType: 'image',
    logoAsset: logoFord,
    body: [
      { highlight: 'Conducted', text: ' market feasibility studies and communication guidelines for a new cargo line entry in Mexico.' },
      { highlight: 'Identified and validated', text: ' five unexploited customer niches and purchasing intent parameters.' },
      { highlight: 'Mapped', text: ' deep consumer habits to guarantee a flawless, de-risked commercial activation.' }
    ]
  }
];

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeData = SUCCESS_CASES[activeTab];

  // Manejador interactivo con micro-animación controlada de entrada y salida
  const handleTabChange = (index) => {
    if (index === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section className="relative w-full bg-[#060B16] py-20 lg:py-28 px-4 sm:px-8 overflow-hidden font-sans border-t border-white/5 select-none">
      
      {/* Luces de ambiente premium de fondo */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Copia exacta del patrón de rejilla institucional premium */}
      <div 
        className="absolute inset-0 opacity-60 mix-blend-normal pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="relative w-full max-w-6xl mx-auto z-10">
        
        {/* Encabezado Principal (Replicado de image_499902.png) */}
        <div className="space-y-2 mb-12 lg:mb-16 text-left">
          <span className="text-[11px] tracking-[0.25em] text-blue-400 font-bold uppercase block">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Proven Cross-Border Results
          </h2>
        </div>

        {/* Estructura de Doble Columna Optimizada */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[6rem] items-start">
          
          {/* COLUMNA IZQUIERDA: Selector Grid de Logotipos Corporativos (2 Columnas x 4 Filas) */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5 w-full">
            
            {SUCCESS_CASES.map((item, index) => {
              const isActive = activeTab === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(index)}
                  className={`relative h-24 sm:h-28 rounded flex items-center justify-center p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#3861FB] to-[#254EDB] border border-white/30 shadow-[0_20px_40px_-15px_rgba(56,97,251,0.5)] scale-[1.03] z-20' 
                      : 'bg-white/[0.98] backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-white/[0.06] shadow-2xl hover:-translate-y-1 z-10'
                  }`}
                >
                    
                  {item.logoType === 'image' ? (
                    <img
                      src={item.logoAsset}
                      alt={`${item.client} Logo`}
                      className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                        isActive ? 'brightness-0 invert' : 'brightness-100'
                      }`}
                    />
                  ) : (
                    <div className={`${item.textClass} ${isActive ? 'text-white' : ''}`}>
                      {item.logoText}
                    </div>
                  )}

                  {/* Capa de borde iluminado sutil para el estado activo */}
                  {isActive && (
                    <div className="absolute inset-0 border border-white/30 rounded-lg pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* COLUMNA DERECHA: Panel Desplegable de Casos de Éxito con Sombra de Desfase */}
          <div className="w-full lg:col-span-7 relative min-h-[480px] sm:min-h-[420px] lg:min-h-[450px] mt-2 lg:mt-0">
            
            {SUCCESS_CASES.map((caseItem) => {
              const isCurrent = activeTab === caseItem.id;
              
              // Lógica de cálculo matemático para las posiciones relativas del stack circular
              let diff = caseItem.id - activeTab;
              if (diff < 0) diff += SUCCESS_CASES.length;

              // Estilos cinemáticos responsivos calculados según la distancia al elemento activo
              let cardStyles = "";
              if (isCurrent) {
                cardStyles = "opacity-100 translate-x-0 translate-y-0 scale-100 z-30 pointer-events-auto rotate-0 shadow-[0_30px_60px_-15px_rgba(4,8,18,0.8)]";
              } else if (diff === 1 || (activeTab === SUCCESS_CASES.length - 1 && caseItem.id === 0)) {
                // Siguiente tarjeta lista en el mazo trasero (Sutil desfase hacia la derecha, abajo y rotación leve)
                cardStyles = "opacity-40 translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 scale-[0.97] lg:rotate-1 z-20 pointer-events-none shadow-[0_15px_30px_rgba(0,0,0,0.5)]";
              } else if (diff === 2) {
                // Segunda tarjeta trasera profunda
                cardStyles = "opacity-10 translate-x-6 translate-y-6 lg:translate-x-8 lg:translate-y-8 scale-[0.94] lg:rotate-2 z-10 pointer-events-none";
              } else {
                // Tarjetas restantes ocultas suavemente detrás de escena
                cardStyles = "opacity-0 translate-x-0 translate-y-10 scale-95 z-0 pointer-events-none";
              }

              return (
                <div
                  key={caseItem.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${cardStyles}`}
                >
                  {/* Estructura del Contenedor de la Tarjeta con Iluminación Interna Avanzada */}
                  <div className="w-full h-full bg-gradient-to-br from-[#1A317A]/95 via-[#14245B]/98 to-[#0C153A]/100 border border-white/10 rounded p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative group/card">
                    
                    {/* Resplandor superior lineal */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent pointer-events-none" />
                    
                    {/* Destello de luz interna que reacciona indirectamente */}
                    <div className="absolute -inset-y-12 -inset-x-12 bg-radial-gradient from-white/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div>
                      {/* Cabecera del Caso */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-black text-blue-400 tracking-[0.2em] uppercase block">
                          {caseItem.client}
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-6 leading-snug">
                        {caseItem.metaTitle}
                      </h3>

                      {/* Listado de Viñetas Técnicas con Negritas Dinámicas */}
                      <ul className="space-y-4">
                        {caseItem.body.map((paragraph, idx) => (
                          <li key={idx} className="flex items-start text-sm sm:text-[15px] leading-relaxed">
                            <span className="text-blue-400 font-bold mr-3 select-none mt-0.5 text-sm">✓</span>
                            <span className="text-slate-300">
                              <strong className="font-extrabold text-white mr-1">{paragraph.highlight}</strong>
                              {paragraph.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer corporativo de adorno estético en la tarjeta activa */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-medium tracking-wider uppercase">
                      <span>WeProm Europe Matrix</span>
                      <span className="text-blue-500 font-bold">Verified Result</span>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}