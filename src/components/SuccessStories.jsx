import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Imports de logos (no cambian)
import logoFord from '../assets/brands/ford.jpeg';
import logoLaNuitDesPUBLIVORES from '../assets/brands/publivores.jpeg';
import logoPepsico from '../assets/brands/PEPSICO-min.png';
import logoCocaCola from '../assets/brands/cocacola.png';
import logoProMexico from '../assets/brands/promexico.png';
import logoMcDonalds from '../assets/brands/MACDONALDS-min.png';
import logoAxa from '../assets/brands/axa.jpeg';
import logoTequilaHuizache from '../assets/brands/t-huichaze.jpeg';
import logoComce from '../assets/brands/comce.png';
import logoNissan from '../assets/brands/Nissan.png';
import logoBusinessFrance from '../assets/brands/businessfrance.png';
import logoMercedes from '../assets/brands/mercedes.png';

// Mapeo de logos por nombre de cliente
const logoMap = {
  'PROMÉXICO': logoProMexico,
  'LA NUIT DES PUBLIVORES': logoLaNuitDesPUBLIVORES,
  'COCA-COLA': logoCocaCola,
  'AXA': logoAxa,
  'TEQUILA HUIZACHE': logoTequilaHuizache,
  "MCDONALD'S": logoMcDonalds,
  'MERCEDES-BENZ - EQ': logoMercedes,
  'FORD': logoFord
};

export default function SuccessStories() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const stories = t('successStories.stories');

  const handleTabChange = (index) => {
    if (index === activeTab) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(index);
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section id="success-stories" className="relative w-full bg-[#060B16] py-20 lg:py-28 px-4 sm:px-8 overflow-hidden font-sans border-t border-white/5 select-none">
      {/* Fondos y patrones (sin cambios) */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-sky-500/5 blur-[120px] pointer-events-none z-0" />
      <div 
        className="absolute inset-0 opacity-60 mix-blend-normal pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="relative w-full max-w-6xl mx-auto z-10">
        {/* Encabezado traducido */}
        <div className="space-y-2 mb-12 lg:mb-16 text-left">
          <span className="text-[11px] tracking-[0.25em] text-blue-400 font-bold uppercase block">
            {t('nav.stories')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('successStories.subtitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[6rem] items-start">
          {/* Columna izquierda: grid de logos */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5 w-full">
            {stories.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`relative h-24 sm:h-28 rounded flex items-center justify-center p-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                    isActive
                      ? 'bg-gradient-to-br from-[#3861FB] to-[#254EDB] border border-white/30 shadow-[0_20px_40px_-15px_rgba(56,97,251,0.5)] scale-[1.03] z-20'
                      : 'bg-white/[0.98] backdrop-blur-md border border-white/5 hover:border-white/10 hover:bg-white/[0.06] shadow-2xl hover:-translate-y-1 z-10'
                  }`}
                >
                  <img
                    src={logoMap[item.client]}
                    alt={`${item.client} Logo`}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                      isActive ? 'brightness-0 invert' : 'brightness-100'
                    }`}
                  />
                  {isActive && (
                    <div className="absolute inset-0 border border-white/30 rounded-lg pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Columna derecha: panel de detalles */}
          <div className="w-full lg:col-span-7 relative min-h-[700px] sm:min-h-[450px] lg:min-h-[480px] mt-2 lg:mt-0">
            {stories.map((caseItem, idx) => {
              const isCurrent = activeTab === idx;
              let diff = idx - activeTab;
              if (diff < 0) diff += stories.length;

              let cardStyles = "";
              if (isCurrent) {
                cardStyles = "opacity-100 translate-x-0 translate-y-0 scale-100 z-30 pointer-events-auto rotate-0 shadow-[0_30px_60px_-15px_rgba(4,8,18,0.8)]";
              } else if (diff === 1 || (activeTab === stories.length - 1 && idx === 0)) {
                cardStyles = "opacity-40 translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 scale-[0.97] lg:rotate-1 z-20 pointer-events-none shadow-[0_15px_30px_rgba(0,0,0,0.5)]";
              } else if (diff === 2) {
                cardStyles = "opacity-10 translate-x-6 translate-y-6 lg:translate-x-8 lg:translate-y-8 scale-[0.94] lg:rotate-2 z-10 pointer-events-none";
              } else {
                cardStyles = "opacity-0 translate-x-0 translate-y-10 scale-95 z-0 pointer-events-none";
              }

              return (
                <div
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${cardStyles}`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-[#1A317A]/95 via-[#14245B]/98 to-[#0C153A]/100 border border-white/10 rounded p-6 sm:p-10 flex flex-col justify-between overflow-hidden relative group/card">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent pointer-events-none" />
                    <div className="absolute -inset-y-12 -inset-x-12 bg-radial-gradient from-white/[0.02] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-black text-blue-400 tracking-[0.2em] uppercase block">
                          {caseItem.client}
                        </span>
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-6 leading-snug">
                        {caseItem.metaTitle}
                      </h3>
                      <ul className="space-y-4">
                        {caseItem.body.map((paragraph, i) => (
                          <li key={i} className="flex items-start text-sm sm:text-[15px] leading-relaxed">
                            <span className="text-blue-400 font-bold mr-3 select-none mt-0.5 text-sm">✓</span>
                            <span className="text-slate-300">
                              <strong className="font-extrabold text-white mr-1">{paragraph.highlight}</strong>
                              {paragraph.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

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