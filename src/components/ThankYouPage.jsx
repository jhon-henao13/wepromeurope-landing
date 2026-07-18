import React, { useEffect, useState } from 'react';
import logo from '../assets/icon2.jpeg';
import { useLanguage } from '../context/LanguageContext';

export default function ThankYouPage() {
  const { t } = useLanguage();
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('invitee_full_name') || urlParams.get('name') || '';
    const email = urlParams.get('invitee_email') || urlParams.get('email') || '';
    const date = urlParams.get('event_start_time') || '';
    const phoneParam = urlParams.get('phone') || '';

    setGuestName(name);
    setGuestEmail(email);
    setAppointmentDate(date);
    setPhone(phoneParam);

    // Enviar datos a n8n
    if (name && email) {
      fetch('https://n8n.advantechai.org/webhook/b6d416cc-97e5-4234-8778-7bbd1cd9af19', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phoneParam,
          fechaRecibido: new Date().toISOString(),
          appointmentDate: date || new Date().toISOString()
        })
      }).catch(err => console.error('Error enviando a n8n:', err));
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'calendly_booking_success',
        leadName: name,
        leadEmail: email
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4 font-sans selection:bg-indigo-500 selection:text-white">
      <div className="bg-white w-full max-w-[650px] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-100 overflow-hidden p-10 sm:p-14 text-center animate-slideUp text-slate-900">
        
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center overflow-hidden rounded-full border border-slate-100 shadow-sm">
          <img src={logo} alt="Company Logo" className="w-full h-full object-cover" />
        </div>

        <div className="w-20 h-20 mx-auto mb-6 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center border border-emerald-100 shadow-[0_10px_25px_rgba(16,185,129,0.15)]">
          <svg className="w-10 h-10 animate-[pulse_2s_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="text-[10px] tracking-[0.3em] font-bold text-indigo-600 uppercase block mb-2">
          {t('thankYou.subtitle')}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          {t('thankYou.title')}
        </h3>

        <p className="text-sm text-slate-500 max-w-[460px] mx-auto leading-relaxed mb-8">
          {t('thankYou.description')}
        </p>

        <div className="bg-slate-100/80 border border-slate-200/60 rounded-xl p-4 max-w-md mx-auto mb-8 text-left space-y-1">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Details</p>
          <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">{t('thankYou.consultant')}</span></p>
          <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">{t('thankYou.guest')}</span> {guestName}</p>
          <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">{t('thankYou.email')}</span> {guestEmail}</p>
          <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">{t('thankYou.phone')}</span> {phone}</p>
          <p className="text-sm font-bold text-slate-800"><span className="font-medium text-slate-500">Fecha de cita:</span> {appointmentDate ? new Date(appointmentDate).toLocaleString() : ''}</p>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-4 px-8 rounded-xl tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-[0.99]"
        >
          {t('thankYou.backButton')}
        </button>
      </div>
    </div>
  );
}