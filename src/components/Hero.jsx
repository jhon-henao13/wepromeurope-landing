import React, { useRef, useState } from 'react';
import heroVideo from '../assets/hero-bg.mp4';
import { useContactModal } from './ContactModal';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { openModal } = useContactModal();
  const { t } = useLanguage()
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);

  // Efecto de bucle suavizado por código
  const handleVideoEnd = () => {
    setIsFading(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(err => console.log("Video play interrupted:", err));
      }
      setIsFading(false);
    }, 400); // Sincronizado con la duración de la transición CSS transition-opacity
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-28">
      
      {/* 1. BACKGROUND VIDEO CON TRUCO DE TRANSICIÓN EN BUCLE */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`w-full h-full object-cover object-[68%] md:object-center scale-105 transition-opacity duration-500 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* 2. CAPAS DE GRADIENTES PREMIUM UI/UX */}
      {/* Gradiente oscuro superior e inferior para mejorar contraste de texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/20 to-slate-950/75 z-10 pointer-events-none" />
      {/* Viñeta radial para enfocar la vista en el centro */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.45)_80%)] z-10 pointer-events-none" />

      {/* 3. HERO CONTENT CONTAINER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-start justify-center">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          
          {/* Título Principal Tipográfico Impactante */}
          
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold !tracking-[1.2] !leading-[1.15] text-white">
            {/* Command Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-[#3861FB]">
              Cross-Border
            </span> <br />
            Expansion. */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-[#3861FB]">
              {t('hero.title')}
            </span>
          </h1>

          {/* Subtítulo de alta legibilidad */}
          <p className="text-base sm:text-base md:text-lg lg:text-xl text-slate-100 tracking-wide leading-relaxed max-w-lg font-light text-balance">
            {/* We deliver precise Europe-Latin America market-entry diagnostics for capitalized ventures, 
            safeguarding critical investments through <span className="font-bold text-indigo-400 whitespace-nowrap">35+ years of expertise.</span> */}
            {t('hero.subtitle')}
          </p>

          {/* Botón Call to Action Interactivo */}
          <div className="pt-2">
            <button onClick={openModal} className="group relative inline-flex items-center justify-center space-x-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs md:text-sm px-6 py-4 rounded shadow-xl shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden">
              {/* Brillo dinámico en hover */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:animate-[shimmer_0.75s_ease-in-out]" />
              
              <span>{t('hero.cta')}</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}
