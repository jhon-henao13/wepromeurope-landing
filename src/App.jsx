import React from 'react';
import { ModalProvider } from './components/ContactModal';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Pillars from './components/Pillars';
import Stats from './components/Stats';
import ExecutionMatrix from './components/ExecutionMatrix';
import SuccessStories from './components/SuccessStories';
import GlobalFootprint from './components/GlobalFootprint';
import Team from './components/Team';
import HowWeWork from './components/HowWeWork';
import RiskMitigationFAQs from './components/RiskMitigationFAQs';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <LanguageProvider>  {/* ← LanguageProvider PRIMERO */}
      <ModalProvider>   {/* ← ModalProvider DENTRO */}
        <div className="bg-slate-950 w-full min-h-screen text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
          <Navbar />
          <Hero />
          <ScrollReveal><Brands /></ScrollReveal>
          <ScrollReveal><Pillars /></ScrollReveal>
          <ScrollReveal><Stats /></ScrollReveal>
          <ScrollReveal><ExecutionMatrix /></ScrollReveal>
          <ScrollReveal><SuccessStories /></ScrollReveal>
          <ScrollReveal><GlobalFootprint /></ScrollReveal>
          <ScrollReveal><Team /></ScrollReveal>
          <ScrollReveal><HowWeWork /></ScrollReveal>
          <ScrollReveal><RiskMitigationFAQs /></ScrollReveal>
          <Footer />
        </div>
      </ModalProvider>
    </LanguageProvider>
  );
}