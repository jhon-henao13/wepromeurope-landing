import React, { createContext, useContext, useState, useEffect } from 'react';
import logo from '../assets/icon2.jpeg';

// Creación del contexto global para controlar el modal de conversión
const ModalContext = createContext();

export const useContactModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

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
            {/* Isotipo/Logo SVG Estilo WeProm */}
            {/* Imagen Logo corporativo */}
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center overflow-hidden rounded-full border border-slate-100 shadow-sm">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight mb-2">
              Schedule Your Discovery Session
            </h3>
            <p className="text-sm text-slate-900 max-w-[500px] mx-auto leading-relaxed mb-8">
              Book an appointment using your company email to speed up the process.
            </p>

            <form onSubmit={handleNextStep} className="space-y-5 text-left">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ismael Lopez"
                  className="w-full bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-[#3861FB] text-slate-900 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 outline-none shadow-sm focus:shadow-[0_0_0_4px_rgba(56,97,251,0.1)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Company Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="contacto@promexico.mx"
                  className="w-full bg-slate-50/50 focus:bg-white border border-slate-200 focus:border-[#3861FB] text-slate-900 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 outline-none shadow-sm focus:shadow-[0_0_0_4px_rgba(56,97,251,0.1)]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">Phone</label>
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
                    placeholder="55 2234 89"
                    className="w-full bg-transparent text-slate-900 rounded-r-xl px-4 py-3.5 text-sm font-medium outline-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#3861FB] hover:bg-[#254EDB] text-white font-semibold text-sm py-4 rounded-xl transition-all duration-300 mt-4 shadow-lg shadow-blue-600/10 active:scale-[0.99]"
              >
                Next Step →
              </button>
            </form>
          </div>
        )}

        {/* PASO 2: Agendamiento Integrado (Calendly Embebido) */}
        {step === 2 && (
          <div className="animate-slideUp flex flex-col h-[620px] max-h-[85vh]">
            {/* Header del Agendador */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <button 
                onClick={() => setStep(1)} 
                className="text-xs font-bold text-slate-500 hover:text-[#3861FB] flex items-center space-x-1 transition-colors"
              >
                <span>← Back</span>
              </button>
              <div className="text-center pr-12">
                <span className="text-[10px] tracking-wider font-bold text-slate-400 uppercase">Work with Us</span>
                <p className="text-xs font-semibold text-slate-700">Schedule a Meeting</p>
              </div>
            </div>

            {/* Iframe Interactivo con Animación de Carga */}
            <div className="w-full flex-1 relative bg-white">
              <iframe
                title="Calendly Scheduler"
                src={`https://calendly.com/YOUR_CALENDLY_URL?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&embed_domain=weprom.europe`}
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}