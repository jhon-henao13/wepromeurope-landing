import React from 'react';
import { ModalProvider } from './components/ContactModal';
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

export default function App() {
  return (
    <ModalProvider>
      <div className="bg-slate-950 w-full min-h-screen text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <Hero />
        <Brands />
        <Pillars />
        <Stats />
        <ExecutionMatrix />
        <SuccessStories />
        <GlobalFootprint />
        <Team />
        <HowWeWork />
        <RiskMitigationFAQs />
        <Footer />
      </div>
    </ModalProvider>
  );
}