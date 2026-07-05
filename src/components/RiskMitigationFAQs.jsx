import React, { useState } from 'react';
import { useContactModal } from './ContactModal';

const FAQ_DATA = [
  {
    question: "Why invest in market research, and how are projects budgeted?",
    answer: "Research acts as financial insurance against capital loss; deciding on assumptions is costlier than a targeted study. WeProm Europe rejects template pricing; every project is custom-tailored. Budgets depend strictly on geographic scope, sample complexity, and competitive benchmarking."
  },
  {
    question: "What is your geographic reach, and can you run simultaneous multi-country studies?",
    answer: "Yes. Via our hubs (France, México & United States) and networks, we coordinate simultaneous or standalone studies across Europe and Latin America. A dedicated project coordinator synchronizes global data models into a single timeline to manage time-zone friction seamlessly."
  },
  {
    question: "Do you have experience in our specific sector or highly restricted niches?",
    answer: "Our methodology is sector-agnostic. Having served global leaders across automotive, aerospace, healthcare, agroindustry, and cosmetics, we adapt to local realities. For restricted B2B niches, specialized recruiters and advanced competitive intelligence guarantee access to target segments."
  },
  {
    question: "What methodologies do you utilize to guarantee statistically reliable data?",
    answer: "We deploy customized surveys, executive interviews, focus groups, and secondary source audits. To guarantee statistical reliability, our teams apply strict selection criteria and demographic participation quotas. All data collection undergoes rigorous quality control protocols to deliver boardroom-ready insights."
  },
  {
    question: "How do you ensure legal compliance and data privacy across transborder jurisdictions?",
    answer: "We operate strictly under localized transborder legal frameworks. All data collection fully complies with the European Union’s GDPR and corresponding Latin American privacy regulations. This secure infrastructure completely shields your corporation from regulatory risks and safeguards market reputation."
  },
  {
    question: "What deliverables do we receive, and what support do you offer post-delivery?",
    answer: "Projects conclude in 4–8 weeks with a Strategic Executive Report, a boardroom presentation, and methodological annexes in English, French, or Spanish. Post-delivery, we provide active operational accompaniment through your next lifecycle stages, supporting soft-landing deployment, distribution setup, and localized marketing."
  },
  {
    question: "How do you ensure your research methodologies adapt to regional cultural differences?",
    answer: "Our multicultural team and international alliance network localize every survey, sample, and approach. This guarantees that commercial and cultural nuances unique to each European or Latin American market are accurately captured for precise decision-making."
  },
  {
    question: "Does the final market study include an analysis of our direct competitors?",
    answer: "Yes. We incorporate deep competitive benchmarking, corporate positioning audits, and market-share evaluations. This allows your leadership team to pinpoint competitor vulnerabilities and isolate immediate commercial opportunities within the target territory."
  },
  {
    question: "What does your team require from our organization to initiate the project?",
    answer: "We only require an initial briefing session to define your core information needs, target audience profile, and expansion goals. From there, our council structures the entire technical methodology, operating with total autonomy."
  },
  {
    question: "How do you select and recruit participants for surveys and focus groups?",
    answer: "We collaborate with specialized, region-specific B2B and B2C recruiters. Participants are filtered through strict demographic, professional, and consumption criteria to ensure every data point originates from a verified representative of your target market."
  }
];

export default function RiskMitigationFAQs() {
  const [openIndex, setOpenIndex] = useState(null);
  const { openModal } = useContactModal();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-20 lg:py-28 px-4 sm:px-8 overflow-hidden font-sans select-none">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Encabezado Principal Identificado en image_bd0084.png */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1528] tracking-tight uppercase">
            Mitigating Risk: FAQs
          </h2>
        </div>

        {/* Contenedor de Acordeones */}
        <div className="space-y-4 w-full">
          {FAQ_DATA.map((faq, index) => {
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
                {/* Botón / Disparador del Acordeón */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-semibold tracking-wide pr-4 transition-colors duration-200 ${
                    isOpen ? 'text-[#3861FB]' : 'text-slate-800 group-hover:text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Ícono de Control de Estado (+) con Micro-animación de Morfismo */}
                  <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
                    {/* Línea Horizontal */}
                    <span className={`absolute w-4 h-[2px] rounded-full bg-slate-400 transition-transform duration-300 ease-out ${
                      isOpen ? 'bg-[#3861FB] rotate-180' : ''
                    }`} />
                    {/* Línea Vertical */}
                    <span className={`absolute w-[2px] h-4 rounded-full bg-slate-400 transition-transform duration-300 ease-out ${
                      isOpen ? 'bg-[#3861FB] scale-y-0 rotate-180' : ''
                    }`} />
                  </div>
                </button>

                {/* Contenedor del Contenido con Animación de Altura Nativa Dinámica */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1">
                      <p className="text-xs sm:text-[14px] text-slate-900 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Botón de Llamado a la Acción (CTA) Centralizado Inferior */}
        <div className="mt-12 sm:mt-16 flex justify-center w-full">
          <button onClick={openModal} className="group relative overflow-hidden bg-[#3861FB] hover:bg-[#2b4ec9] active:bg-[#1f3ba3] text-white text-xs sm:text-sm font-bold tracking-wider uppercase px-8 py-4 rounded shadow-[0_8px_20px_-6px_rgba(56,97,251,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-3">
            <span>Schedule a Discovery Call</span>
            {/* Vector de Flecha Indicativa */}
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