import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';

export default function App() {
  return (
    <div className="bg-slate-950 w-full min-h-screen text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Header fijo */}
      <Navbar />
      
      {/* Sección Hero */}
      <Hero />
      <Brands />
    </div>
  );
}
