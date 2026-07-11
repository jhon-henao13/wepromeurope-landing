import React, { useState } from 'react';
import { useContactModal } from './ContactModal';
import { useLanguage } from '../context/LanguageContext'; // <-- NUEVA

export default function RiskMitigationFAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openModal } = useContactModal();
  const { t } = useLanguage(); // <-- NUEVA
  const questions = t('faq.questions'); // <-- OBTENER PREGUNTAS

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 px-4 sm:px-8 overflow-hidden font-sans select-none">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Encabezado traducido */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1528] tracking-tight uppercase">
            {t('faq.title')}
          </h2>
        </div>

        {/* Contenedor de Acordeones */}
        <div className="space-y-4 w-full">
          {questions.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`w-full rounded-xl border transition-all duration-300 bg-white ${
                  isOpen
                    ? 'border-[#3861FB] shadow-[0_10px_25px_-5px_rgba(56,97,251,0.1)]'
                    : 'border-slate-200/80 hover:border-slate-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)]'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold tracking-wide pr-4 transition-colors duration-200 ${
                    isOpen ? 'text-[#3861FB]' : 'text-slate-800 group-hover:text-slate-900'
                  }`}>
                    {faq.q}
                  </span>
                  
                  <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <span className={`absolute w-4 h-[2px] rounded-full bg-slate-400 transition-transform duration-300 ease-out ${
                      isOpen ? 'bg-[#3861FB] rotate-180' : ''
                    }`} />
                    <span className={`absolute w-[2px] h-4 rounded-full bg-slate-400 transition-transform duration-300 ease-out ${
                      isOpen ? 'bg-[#3861FB] scale-y-0 rotate-180' : ''
                    }`} />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1">
                      <p className="text-xs sm:text-[14px] text-slate-900 leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA traducido */}
        <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <button onClick={openModal} className="group relative overflow-hidden bg-[#3861FB] hover:bg-[#2b4ec9] active:bg-[#1f3ba3] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-4 rounded shadow-[0_8px_20px_-6px_rgba(56,97,251,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-3">
            <span>{t('common.scheduleCall')}</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}