import React from 'react';
import logo from '../assets/icon2.jpeg';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="bg-white w-full max-w-[650px] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-100 overflow-hidden p-10 sm:p-14 text-center animate-slideUp text-slate-900">
        
        {/* Logo de la empresa */}
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center overflow-hidden rounded-full border border-slate-100 shadow-sm">
          <img src={logo} alt="Company Logo" className="w-full h-full object-cover" />
        </div>

        {/* Animación Checkmark */}
        <div className="w-20 h-20 mx-auto mb-6 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-[0_10px_25px_rgba(16,185,129,0.15)]">
          <svg className="w-10 h-10 animate-[pulse_2s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="text-[10px] tracking-[0.3em] font-bold text-indigo-600 uppercase block mb-2">
          ¡Confirmación Recibida!
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Tu Sesión de Descubrimiento está Agendada
        </h3>

        <p className="text-sm text-slate-500 max-w-[460px] mx-auto leading-relaxed mb-8">
          Hemos enviado una invitación de calendario con el enlace de acceso a tu correo electrónico. Por favor, asegúrate de revisar tu bandeja de entrada o la carpeta de spam.
        </p>

        <button 
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-4 px-8 rounded-xl tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-[0.99]"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}