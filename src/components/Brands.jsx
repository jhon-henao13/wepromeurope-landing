import React from 'react';

// Importación ordenada de tus assets de marcas
import axa from '../assets/brands/axa.png';
/* import businessfrance from '../assets/brands/businessfrance.png'; */
import bpifrance from '../assets/brands/bpifrance.webp';
import cocacola from '../assets/brands/cocacola.png';
// import comce from '../assets/brands/comce.png';
import LogoFord from '../assets/brands/LogoFord.png';
import MACDONALDSMin from '../assets/brands/MACDONALDS-min.png';
import mercedes from '../assets/brands/mercedes.png';
import Nissan from '../assets/brands/Nissan.png';
import PEPSICOMin from '../assets/brands/PEPSICO-min.png';
import promexico from '../assets/brands/promexico.png';

const brandsList = [
  { name: 'AXA', src: axa },
  // { name: 'Business France', src: businessfrance },
  { name: 'BPI France', src: bpifrance },
  { name: 'Coca Cola', src: cocacola },
  // { name: 'COMCE', src: comce },
  { name: 'Ford', src: LogoFord },
  { name: 'McDonalds', src: MACDONALDSMin },
  { name: 'Mercedes Benz', src: mercedes },
  { name: 'Nissan', src: Nissan },
  { name: 'Pepsico', src: PEPSICOMin },
  { name: 'ProMéxico', src: promexico }
];

export default function Brands() {
  // Duplicamos el array para el efecto espejo infinito perfecto
  const doubleBrands = [...brandsList, ...brandsList];

  return (
    <section className="w-full bg-white py-14 md:py-18 border-b border-slate-100 overflow-hidden select-none">
      

      {/* Contenedor del Carrusel con Máscara de Desvanecimiento Lateral Premium */}
      <div className="relative w-full flex overflow-x-hidden [mask-image:_linear-gradient(to_right,_transparent_0%,_white_15%,_white_85%,_transparent_100%)]">
        
        {/* Fila animada */}
        <div className="flex space-x-16 md:space-x-24 min-w-full shrink-0 animate-marquee items-center justify-around hover:[animation-play-state:paused]">
          {doubleBrands.map((brand, idx) => (
            <div 
              key={`${brand.name}-${idx}`} 
              className="flex items-center justify-center w-32 md:w-36 h-16 shrink-0 transition-all duration-300"
            >
              <img
                src={brand.src}
                alt={`${brand.name} logo`}
                className="max-w-full max-h-full object-contain opacity-90 contrast-125 hover:opacity-100 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}