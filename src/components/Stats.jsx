import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Hook personalizado premium para animar los números con desaceleración (Ease-Out)
function useCountUp(target, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Función de desaceleración cúbica (easeOutCubic) para un efecto fluido y de alta gama
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
}

export default function Stats() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  // Intersection Observer para disparar la animación solo cuando el usuario haga scroll hasta la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      { threshold: 0.2 } // Se dispara cuando el 20% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Valores objetivo extraídos de image_082ba4.png
  const projectsCount = useCountUp(10000, 2500, isIntersecting);
  const yearsCount = useCountUp(35, 2000, isIntersecting);
  const clientsCount = useCountUp(1000, 2200, isIntersecting);

  // Formateador para añadir el separador de miles dinámicamente sin romper la animación
  const formatNum = (num) => new Intl.NumberFormat('de-DE').format(num);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white py-20 lg:py-14 px-4 sm:px-8 overflow-hidden font-sans border-t border-white/5 select-none"
    >
      {/* Patrón Grid de Puntos Premium alineado estéticamente con Pillars */}
      <div 
        className="absolute inset-0 opacity-100 mix-blend-normal pointer-events-none z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Iluminación de ambiente sutil (Glow central difuminado) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative w-full max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center text-center">
          
          {/* Métrica 1: Executed Projects */}
          <div className="group flex flex-col items-center space-y-2 transition-transform duration-500 hover:scale-[1.02]">
            <div className="text-4xl sm:text-5xl font-black text-[#3861FB] tracking-tight tabular-nums flex items-center justify-center drop-shadow-[0_2px_20px_rgba(56,97,251,0.2)]">
              <span>{formatNum(projectsCount)}</span>
              <span className="text-blue-400 font-extrabold ml-1 transform group-hover:rotate-12 transition-transform duration-300">+</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-800 tracking-wide">
              {t('stats.projects')}
            </p>
          </div>

          {/* Métrica 2: Years */}
          <div className="group flex flex-col items-center space-y-2 transition-transform duration-500 hover:scale-[1.02] border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0">
            <div className="text-4xl sm:text-5xl font-black text-[#3861FB] tracking-tight tabular-nums flex items-center justify-center drop-shadow-[0_2px_20px_rgba(56,97,251,0.2)]">
              <span>{yearsCount}</span>
              <span className="text-blue-400 font-extrabold ml-1 transform group-hover:rotate-12 transition-transform duration-300">+</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-800 tracking-wide">
              {t('stats.years')}
            </p>
          </div>

          {/* Métrica 3: Enterprise Clients */}
          <div className="group flex flex-col items-center space-y-2 transition-transform duration-500 hover:scale-[1.02]">
            <div className="text-4xl sm:text-5xl font-black text-[#3861FB] tracking-tight tabular-nums flex items-center justify-center drop-shadow-[0_2px_20px_rgba(56,97,251,0.2)]">
              <span>{formatNum(clientsCount)}</span>
              <span className="text-blue-400 font-extrabold ml-1 transform group-hover:rotate-12 transition-transform duration-300">+</span>
            </div>
            <p className="text-sm sm:text-base font-medium text-slate-800 tracking-wide">
              {t('stats.clients')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}