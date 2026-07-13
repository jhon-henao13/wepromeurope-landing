import React, { createContext, useContext, useState, useEffect } from 'react';
import logo from '../assets/icon2.jpeg';
import { useLanguage } from '../context/LanguageContext';

// Creación del contexto global para controlar el modal de conversión
const ModalContext = createContext();

export const useContactModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  // Escuchar el evento postMessage de Calendly para saber cuando agendan con éxito
  useEffect(() => {
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        setStep(3); // Pasar automáticamente a la página de gracias premium
        
        // Disparar evento a Google Tag Manager para trackeo de conversiones exactas
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'calendly_booking_success',
            leadEmail: formData.email
          });
        }
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [formData]);
  

  const openModal = () => {
    setIsOpen(true);
    setStep(1); // Reiniciar al primer paso siempre
  };
  
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} step={step} setStep={setStep} formData={formData} setFormData={setFormData} onClose={closeModal} />
    </ModalContext.Provider>
  );
}

function ContactModal({ isOpen, step, setStep, formData, setFormData, onClose }) {
  const [countryCode, setCountryCode] = useState('+52');
  const { t } = useLanguage();

  // Bloquear scroll de la página de fondo cuando el modal esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setStep(2);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
      {/* Backdrop con Blur e Interrupción de clic exterior */}
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl transition-opacity duration-500 ease-out animate-fadeIn"
        onClick={onClose}
      />

      {/* Contenedor del Modal */}
      <div className="relative bg-white w-full max-w-[700px] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden transform transition-all duration-500 scale-100 z-10 font-sans">
        
        {/* Botón Cerrar (X) Estilo Minimalista */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition-colors z-20"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* PASO 1: Formulario de Calificación */}
        {step === 1 && (
          <div className="p-8 sm:p-11 text-center animate-slideUp">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-full border border-slate-100 shadow-sm">
              <img src={logo} alt="Company Logo" className="w-full h-full object-cover" />
            </div>
                
            <h3 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight mb-2">
              {t('modal.title')}
            </h3>
            <p className="text-sm text-slate-900 max-w-[500px] mx-auto leading-relaxed mb-8">
              {t('modal.subtitle')}
            </p>
                
            <form onSubmit={handleNextStep} className="space-y-5 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                  {t('modal.name')}
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('modal.namePlaceholder')}
                  className="w-full bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-[#3861FB] text-slate-900 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 outline-none shadow-sm focus:shadow-[0_0_0_4px_rgba(56,97,251,0.1)]"
                />
              </div>
                
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                  {t('modal.email')}
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('modal.emailPlaceholder')}
                  className="w-full bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-[#3861FB] text-slate-900 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 outline-none shadow-sm focus:shadow-[0_0_0_4px_rgba(56,97,251,0.1)]"
                />
              </div>
                
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                  {t('modal.phone')}
                </label>
                <div className="flex rounded-xl shadow-sm bg-slate-50/50 border border-slate-200 focus-within:border-[#3861FB] focus-within:bg-white focus-within:shadow-[0_0_0_4px_rgba(56,97,251,0.1)] transition-all duration-300 overflow-hidden">
                  <div className="flex items-center space-x-1.5 px-3 border-r border-slate-200 bg-slate-50">
                    <span className="text-sm">🇲🇽</span>
                    <select 
                      value={countryCode} 
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-transparent text-slate-700 text-xs font-bold focus:outline-none cursor-pointer"
                    >
                      <option value="+52">+52</option>
                      <option value="+34">+34</option>
                      <option value="+1">+1</option>
                      <option value="+57">+57</option>
                    </select>
                  </div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('modal.phonePlaceholder')}
                    className="w-full bg-transparent text-slate-900 rounded-r-xl px-4 py-3.5 text-sm font-medium outline-none"
                  />
                </div>
              </div>
                
              <button 
                type="submit"
                className="w-full bg-[#3861FB] hover:bg-[#254EDB] text-white font-semibold text-sm py-4 rounded-xl transition-all duration-300 mt-4 shadow-lg shadow-blue-600/10 active:scale-[0.99]"
              >
                {t('modal.nextStep')}
              </button>
            </form>
          </div>
        )}

        {/* PASO 2: Agendamiento Integrado (Calendly Embebido) */}
        {step === 2 && (
          <div className="animate-slideUp flex flex-col h-[620px] max-h-[85vh]">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <button 
                onClick={() => setStep(1)} 
                className="text-xs font-bold text-slate-500 hover:text-[#3861FB] flex items-center space-x-1 transition-colors"
              >
                <span>{t('modal.back')}</span>
              </button>
              <div className="text-center pr-12">
                <span className="text-[10px] tracking-wider font-bold text-slate-400 uppercase">{t('modal.workWithUs')}</span>
                <p className="text-xs font-semibold text-slate-700">{t('modal.scheduleMeeting')}</p>
              </div>
            </div>

            <div className="w-full flex-1 relative bg-white">
              <iframe
                title="Calendly Scheduler"
                src={`https://calendly.com/lisa-lenselle-wepromeurope/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&primary_color=4361dd`}
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* PASO 3: PÁGINA DE GRACIAS INTERNA PREMIUM */}
        {step === 3 && (
          <div className="p-10 sm:p-14 text-center animate-slideUp bg-gradient-to-b from-slate-50 to-white text-slate-900">
            {/* Animación Checkmark Premium */}
            <div className="w-20 h-20 mx-auto mb-6 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-[0_10px_25px_rgba(16,185,129,0.15)]">
              <svg className="w-10 h-10 animate-[pulse_2s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <span className="text-[10px] tracking-[0.3em] font-bold text-indigo-600 uppercase block mb-2">
              ¡Confirmación Recibida!
            </span>
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Tu Sesión de Descubrimiento está Agendada
            </h3>
            
            <div className="bg-slate-100/80 border border-slate-200/60 rounded-xl p-4 max-w-md mx-auto mb-8 text-left space-y-1">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Detalles del Lead</p>
              <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">Consultor:</span> Lisa Lenselle</p>
              <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">Invitado:</span> {formData.name}</p>
              <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">Email:</span> {formData.email}</p>
            </div>

            <p className="text-sm text-slate-500 max-w-[460px] mx-auto leading-relaxed mb-8">
              Hemos enviado una invitación de calendario con el enlace de acceso a tu correo electrónico. Por favor, asegúrate de revisar tu bandeja de entrada o spam.
            </p>

            <button 
              onClick={onClose}
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-4 px-8 rounded-xl tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-[0.99]"
            >
              Volver a la Landing
            </button>
          </div>
        )}

      </div>
    </div>
  );
}