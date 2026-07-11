import React, { useState } from 'react';
import worldGlobe from '../assets/world-globe.webp';
import bgIcon from '../assets/icon.webp';
import { useContactModal } from './ContactModal';
import { useLanguage } from '../context/LanguageContext';

const PILLARS_DATA = [
  {
    id: 0,
    title: 'Market Research & Deep Intelligence',
    tag: 'Market Research',
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
  const { openModal } = useContactModal();
  const { t } = useLanguage();
  const wheelLabels = t('pillars.wheelLabels');
  const weDeliver = t('pillars.weDeliver');
  const [activeTab, setActiveTab] = useState(0);

  const pillars = t('pillars.items');

  // Efecto dinámico de rotación del globo central según el pilar seleccionado
  const getWorldRotation = () => {
    if (activeTab === 0) return 'rotate-0 scale-100';
    if (activeTab === 1) return 'rotate-[60deg] scale-105';
    return '-rotate-[60deg] scale-98';
  };

  return (
    <section id="global-capabilities" className="relative w-full min-h-screen bg-gradient-to-br from-[#0B1E43] via-[#071126] to-[#03060F] flex flex-col overflow-hidden font-sans border-t border-white/5 py-16 px-4 sm:px-8 select-none">
      
      {/* 1. CORRECCIÓN DEL SVG GRID PATTERN: Integrado por CSS nativo para evitar fallos de renderizado */}
      <div 
        className="absolute inset-0 opacity-100 mix-blend-normal pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.04)'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Iluminaciones de ambiente (Glows radiales premium inspirados en image_07bb03.png) */}
      <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[50%] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none z-0" />

      {/* Contenedor General Estructurado */}
      <div className="w-full max-w-7xl mx-auto space-y-2 mt-4 mb-2 lg:mb-4 text-center lg:text-left z-10">
        <span className="text-[11px] tracking-[0.3em] text-blue-400 font-bold uppercase block">
          {/* Global Capabilities */}
          {t('nav.global')}
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {/* Three Pillars of Enterprise <br className="hidden sm:inline" /> Market Entry */}
          {t('pillars.title')}
        </h2>
      </div>

      <div className="w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16 lg:gap-8 z-10 grow">
        
        {/* ========================================================================= */}
        {/* PANEL IZQUIERDO: RUEDA INTERACTIVA SEGMENTADA EXACTA (image_07616a.png) */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-[45%] flex items-center justify-center relative z-20">
          
          <div className="relative w-80 h-80 sm:w-[380px] sm:h-[380px] flex items-center justify-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
            
            {/* SVG segmentado en 3 partes iguales con espaciado y textos rotados */}
            <svg 
              viewBox="0 0 200 200" 
              className="absolute inset-0 w-full h-full transform rotate-0 transition-transform duration-700 ease-out"
            >
              {/* SECTOR 1: Soft-Landing & Expansion */}
              <g 
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => setActiveTab(1)}
              >
                <path 
                  d="M 100 100 L 100 0 A 100 100 0 0 0 13.4 150 Z" 
                  fill={activeTab === 1 ? "#3861FB" : "#B0C7FF"} 
                  stroke="#071126" 
                  strokeWidth="2.5"
                />
                <text 
                  x="54" 
                  y="65" 
                  textAnchor="middle" 
                  fill={activeTab === 1 ? "#FFFFFF" : "#1E3B7A"} 
                  fontSize="7.5" 
                  fontWeight="700" 
                  transform="rotate(-60, 54, 82)"
                  className="tracking-wide select-none pointer-events-none transition-colors duration-300"
                >
                  {wheelLabels.softLanding.split(' & ').map((part, idx) => (
                    <tspan key={idx} x="54" dy={idx === 0 ? 0 : 9}>{part}</tspan>
                  ))}
                </text>
              </g>
                
              {/* SECTOR 2: Strategic Positioning */}
              <g 
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => setActiveTab(2)}
              >
                <path 
                  d="M 100 100 L 186.6 150 A 100 100 0 0 0 100 0 Z" 
                  fill={activeTab === 2 ? "#3861FB" : "#B0C7FF"} 
                  stroke="#071126" 
                  strokeWidth="2.5"
                />
                <text 
                  x="146" 
                  y="65" 
                  textAnchor="middle" 
                  fill={activeTab === 2 ? "#FFFFFF" : "#1E3B7A"} 
                  fontSize="7.5" 
                  fontWeight="700" 
                  transform="rotate(60, 146, 82)"
                  className="tracking-wide select-none pointer-events-none transition-colors duration-300"
                >
                  {wheelLabels.strategicPositioning.split(' & ').map((part, idx) => (
                    <tspan key={idx} x="146" dy={idx === 0 ? 0 : 9}>{part}</tspan>
                  ))}
                </text>
              </g>
                
              {/* SECTOR 3: Market Research */}
              <g 
                className="cursor-pointer transition-all duration-300 hover:brightness-110"
                onClick={() => setActiveTab(0)}
              >
                <path 
                  d="M 100 100 L 13.4 150 A 100 100 0 0 0 186.6 150 Z" 
                  fill={activeTab === 0 ? "#3861FB" : "#B0C7FF"} 
                  stroke="#071126" 
                  strokeWidth="2.5"
                />
                <text 
                  x="100" 
                  y="160" 
                  textAnchor="middle" 
                  fill={activeTab === 0 ? "#FFFFFF" : "#1E3B7A"} 
                  fontSize="8" 
                  fontWeight="700" 
                  className="tracking-wide select-none pointer-events-none transition-colors duration-300"
                >
                  {wheelLabels.marketResearch.split(' & ').map((part, idx) => (
                    <tspan key={idx} x="100" dy={idx === 0 ? 0 : 9.5}>{part}</tspan>
                  ))}
                </text>
              </g>
            </svg>

            {/* Globo de la Tierra en el centro (Superpuesto para dar el efecto de anillo perfecto) */}
            <div className="absolute w-[44%] h-[44%] rounded-full overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.6)] z-30 bg-slate-950 flex items-center justify-center border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-white/10 mix-blend-screen z-20 pointer-events-none" />
              <img 
                src={worldGlobe} 
                alt="Interactive Globe" 
                className={`w-[104%] h-[104%] object-cover opacity-95 select-none pointer-events-none transition-all duration-1000 ease-out ${getWorldRotation()}`}
              />
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PANEL DERECHO: TARJETAS EN CASCADA ULTRA PREMIUM (image_07bb03.png) */}
        {/* ========================================================================= */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center relative min-h-[500px] lg:min-h-[580px] bg-transparent z-10">
          
          <div className="relative w-full max-w-xl h-[520px] sm:h-[480px] mx-auto lg:mx-0">
            
            {pillars.map((pillar, index) => {
              const isActive = activeTab === index;
              
              // Estructuración del Stack de capas infinitas tridimensionales
              let diff = pillar.id - activeTab;
              if (diff < -1) diff += 3;
              if (diff > 1) diff -= 3;

              const isPast = diff < 0;
              const isFuture = diff > 0;

              let stackStyles = "";
              if (isActive) {
                stackStyles = "opacity-100 translate-x-0 translate-y-0 scale-100 z-30 pointer-events-auto shadow-[0_40px_80px_-15px_rgba(0,0,0,0.75)]";
              } else if (isFuture) {
                stackStyles = "opacity-40 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 scale-[0.98] z-20 pointer-events-none shadow-[0_15px_30px_rgba(0,0,0,0.4)]";
              } else if (isPast) {
                stackStyles = "opacity-0 -translate-x-20 translate-y-6 scale-95 z-10 pointer-events-none";
              }

              return (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${stackStyles}`}
                >
                  {/* Cuerpo Glassmorphism Premium Claro de la Tarjeta */}
                  <div className="w-full h-full bg-[#1E429F]/20 backdrop-blur-2xl border border-blue-400/25 rounded-xl p-6 sm:p-9 flex flex-col justify-evenly group overflow-hidden">
                    
                    {/* Reflejo lineal de luz superior */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-300/40 to-transparent pointer-events-none" />

                    {/* Isotipo corporativo sutil de fondo */}
                    <div 
                      className="absolute right-[-8%] bottom-[-8%] w-64 h-64 sm:w-[320px] sm:h-[320px] opacity-[0.025] pointer-events-none bg-no-repeat bg-contain bg-center z-0 select-none mix-blend-screen"
                      style={{ backgroundImage: `url(${bgIcon})` }}
                    />

                    {/* Información Superior */}
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mb-3 text-left">
                        {pillar.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-slate-300 font-light mb-6 tracking-wide text-left leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-blue-400 font-bold block mb-1">
                          {weDeliver}
                        </span>
                        {pillar.offerings && pillar.offerings.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-2.5 text-slate-200 text-sm sm:text-[12px]">
                            <span className="text-blue-400 font-bold select-none mt-0.5">✓</span>
                            <span className="font-normal text-slate-200/90 leading-snug text-left">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer e Indicador de Cierre */}
                    <div className="relative z-10 mt-4">
                      <p className="text-xs sm:text-xs text-slate-400/80 italic border-t border-white/10 pt-4 mb-5 text-left tracking-wide">
                        {pillar.footer}
                      </p>
                      
                      <div className="flex justify-start">
                        <button onClick={openModal} className="group inline-flex items-center space-x-2 bg-transparent hover:bg-white/5 text-white border border-white/30 hover:border-white/60 font-semibold text-xs py-2.5 px-5 rounded tracking-wide transition-all duration-300 shadow-sm">

                          {/* <span>Schedule a Discovery Call</span>
                          <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-blue-400">→</span> */}
                          <span>{t('common.scheduleCallArrow')}</span>

                        </button>
                      </div>
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