import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import logo from '../assets/icon2.jpeg';
import { useLanguage } from '../context/LanguageContext';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ModalContext = createContext();

export const useContactModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Referencia para mantener siempre el estado más reciente accesible en los event listeners
  const formDataRef = useRef(formData);
  useEffect(() => {
    formDataRef.current = formData;
  }, [formData]);


  const notifyN8n = async (leadData) => {
    try {
      await fetch('https://n8n.advantechai.org/webhook/b6d416cc-97e5-4234-8778-7bbd1cd9af19', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });
    } catch (error) {
      console.error('Error notificando n8n:', error);
    }
  };


  useEffect(() => {
    const handleCalendlyEvent = (e) => {
      console.log('📩 Evento postMessage recibido:', e.data);
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        console.log('✅ Evento de agendamiento detectado');
        const payload = e.data.payload;
        const appointmentDate = payload?.event?.start_time || new Date().toISOString();
        formDataRef.current.appointmentDate = appointmentDate;
        formDataRef.current = { ...formData }; // Forzar sincronización
        triggerSuccess();
      }
    };

    const triggerSuccess = async () => {
      console.log('✅ triggerSuccess ejecutado');
      setIsRedirecting(true);
      const currentData = formDataRef.current;
      console.log('📤 Datos a enviar a n8n:', currentData);
        
      // Notificar a n8n (esperar a que termine)
      await notifyN8n({
        name: currentData.name,
        email: currentData.email,
        phone: currentData.phone || '',
        fechaRecibido: new Date().toISOString(),
        appointmentDate: currentData.appointmentDate || new Date().toISOString()
      });
    
      console.log('✅ Datos enviados a n8n, redirigiendo...');

      // Asegurar que el teléfono se tome directamente del estado formData
      const phoneToSend = formData.phone || currentData.phone || '';
      console.log('📞 Teléfono final a enviar:', phoneToSend);

      window.location.href = `/market-research/thank-you?invitee_full_name=${encodeURIComponent(currentData.name)}&invitee_email=${encodeURIComponent(currentData.email)}&phone=${encodeURIComponent(phoneToSend)}`;
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []); // Se ejecuta una sola vez al montar de forma segura

  
  const openModal = () => {
    setIsOpen(true);
    setStep(1);
    setIsRedirecting(false);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        step={step}
        setStep={setStep}
        formData={formData}
        setFormData={setFormData}
        onClose={closeModal}
        isRedirecting={isRedirecting}
      />
    </ModalContext.Provider>
  );
}

function ContactModal({ isOpen, step, setStep, formData, setFormData, onClose, isRedirecting }) {
  
  const { t } = useLanguage();

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
      localStorage.setItem('leadPhone', formData.phone || '');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl transition-opacity duration-500 ease-out animate-fadeIn"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-[700px] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-100 overflow-hidden transform transition-all duration-500 scale-100 z-10 font-sans">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-700 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition-colors z-20"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 && (
          <div className="p-8 sm:p-11 animate-slideUp">
            {/* Logo pequeño a la izquierda */}
            <div className="flex items-center gap-4 mb-8 mr-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 shadow-sm flex-shrink-0">
                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col text-center">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                  {t('modal.title')}
                </h3>
                <p className="text-sm text-slate-800">
                  {t('modal.subtitle')}
                </p>
              </div>
            </div>

            <form onSubmit={handleNextStep} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-slate-900 mb-1.5 uppercase tracking-wider">
                  {t('modal.name')}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('modal.namePlaceholder')}
                  className="w-full bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-[#3861FB] text-black rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-300 outline-none shadow-sm focus:shadow-[0_0_0_4px_rgba(56,97,251,0.1)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 !mb-6">
                
                <div>
                  <label className="block text-xs font-semibold text-slate-900 mb-1.5 uppercase tracking-wider">
                    {t('modal.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('modal.emailPlaceholder')}
                    className="w-full bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-[#3861FB] text-black rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-300 outline-none shadow-sm focus:shadow-[0_0_0_4px_rgba(56,97,251,0.1)]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-black mb-1.5 uppercase tracking-wider">
                    {t('modal.phone')}
                  </label>
                  <PhoneInput
                    international
                    defaultCountry="MX"
                    value={formData.phone}

                    onChange={(phone) => {
                      setFormData({ ...formData, phone });
                      localStorage.setItem('leadPhone', phone || '');
                    }}

                    placeholder={t('modal.phonePlaceholder')}
                    className="w-full bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-[#3861FB] rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-300 outline-none shadow-sm focus:shadow-[0_0_0_4px_rgba(56,97,251,0.1)]"
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
                src={`https://calendly.com/emilia-wepromeurope/30min?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&a3=${encodeURIComponent(formData.phone || '')}&primary_color=4361dd`}
                className="w-full h-full border-0"
                allowFullScreen
              />

            </div>
          </div>
        )}

        {/* Loader de redirección (opcional) */}
        {isRedirecting && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-30">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#3861FB] border-t-transparent rounded-full animate-spin" />
              <p className="text-sm font-medium text-slate-700">Redirigiendo...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}