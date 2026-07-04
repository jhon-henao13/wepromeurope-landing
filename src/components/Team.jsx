import React, { useState, useRef, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────
// Migrated Team Image Imports (Europe Route)
// ─────────────────────────────────────────────────────────────
import joseMiguelImg from '../assets/team/mike3.png';
import juanCarlosPImg from '../assets/team/juancarlosvsr3.png';
import juanCarlosMImg from '../assets/team/JUANCARLOS3.png';
import emiliaImg from '../assets/team/emiliaLopez.png';
import pabloGarza from '../assets/team/pabloGarza.png';
import gustavoCuellar from '../assets/team/gustavoCuellar.png';
import oscarSantamaria from '../assets/team/oscarSantamaria.png';
import joshBinner from '../assets/team/joshBinner.png';
import joeKaram from '../assets/team/joeKaram.png';
import carlosMartinez from '../assets/team/carlosMartinez.png';
import LisaLenselle from '../assets/team/LisaLenselle.png';

// ─────────────────────────────────────────────────────────────
// WeProm Europe Official Data Structure
// ─────────────────────────────────────────────────────────────
const TEAM_DATA = [
  {
    id: 1,
    name: "José Miguel Ventura Michel",
    role: "Managing Director, WeProm Europe",
    desc: "Trilingual Publicist, Communicator, and Marketing Specialist. More than ten years of experience in strategic marketing, market research, and international business development.",
    initials: "JM",
    image: joseMiguelImg
  },
  {
    id: 2,
    name: "Juan Carlos Ventura Pimentel",
    role: "Strategic Advisor / General Advisor, Grupo WeProm",
    desc: "Over 35 years in international marketing and commercial development. Extensive public and private experience working with governments, embassies, and multilateral organizations across the Americas, Europe, Africa, and Asia.",
    initials: "JC",
    image: juanCarlosPImg
  },
  {
    id: 3,
    name: "Juan Carlos Ventura Michel",
    role: "Strategic Advisor / Managing Director, WeProm LATAM",
    desc: "Entrepreneur and consultant with more than 15 years of international experience in marketing, market research, brand positioning, and commercial expansion.",
    initials: "JV",
    image: juanCarlosMImg
  },
  {
    id: 4,
    name: "Oscar Santamaría Casas",
    role: "Associate International Consultant, WeProm Europe",
    desc: "More than 35 years of experience in international cooperation, foreign investment attraction, and business development between Mexico and the European Union across both public and private sectors.",
    initials: "OS",
    image: oscarSantamaria
  },
  {
    id: 5,
    name: "Lisa Lenselle",
    role: "Commercial Direction & Key Account Relations",
    desc: "International marketing and commercial opportunities development, with solid experience in public and private sectors throughout Europe and LATAM.",
    initials: "LL",
    image: LisaLenselle
  },
  {
    id: 6,
    name: "Emilia López Matute",
    role: "Director of Institutional, Political & Corporate Communication",
    desc: "Specialization in political, corporate, and digital communication, focused on developing multi-channel strategies for brand and institutional promotion and positioning.",
    initials: "EL",
    image: emiliaImg
  },
  {
    id: 7,
    name: "Joe Karam",
    role: "Process Management & Financial Risks",
    desc: "Engineer specializing in international financial environments, advising global clients on functional analysis and financial risk management.",
    initials: "JK",
    image: joeKaram
  },
  {
    id: 8,
    name: "Josh Biner",
    role: "Operations & International Expansion",
    desc: "International advisor for strategic planning, innovation, sustainability, and expansion projects, specializing in mergers, acquisitions, and commercial transformation within multinational corporations.",
    initials: "JB",
    image: joshBinner
  },
  {
    id: 9,
    name: "Pablo De la Garza",
    role: "Creativity & Communication Europe-LATAM",
    desc: "Creative department development and localization of communication strategies, backed by a profound multicultural understanding.",
    initials: "PG",
    image: pabloGarza
  },
  {
    id: 10,
    name: "Gustavo Cuéllar",
    role: "Internationalization & Business Culture",
    desc: "Business internationalization specialist, focused on designing business models and workflows for startups and global enterprises adapting to new markets.",
    initials: "GC",
    image: gustavoCuellar
  },
  {
    id: 11,
    name: "Carlos Martínez",
    role: "Diplomatic Relations & International Legal Affairs",
    desc: "International lawyer specializing in foreign relations, new market implementations, and global legal counsel.",
    initials: "CM",
    image: carlosMartinez
  }
];

// ─────────────────────────────────────────────────────────────
// Premium Animation Styles (Centered around the new 292px scale)
// ─────────────────────────────────────────────────────────────
const STYLES = `
  @keyframes arc-spin-cw {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes arc-spin-ccw {
    from { transform: rotate(180deg); }
    to   { transform: rotate(540deg); }
  }
  @keyframes ring-draw-240 {
    from { stroke-dashoffset: 704; }
    to   { stroke-dashoffset: 0; }
  }

  .arc-cw-europe {
    transform-origin: 120px 120px;
    animation: arc-spin-cw 6s linear infinite;
  }
  .arc-ccw-europe {
    transform-origin: 120px 120px;
    animation: arc-spin-ccw 6s linear infinite;
  }
  .ring-draw-europe {
    animation: ring-draw-240 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
`;

let stylesInjected = false;
function injectEuropeStyles() {
  if (stylesInjected) return;
  const tag = document.createElement('style');
  tag.textContent = STYLES;
  document.head.appendChild(tag);
  stylesInjected = true;
}

// ─────────────────────────────────────────────────────────────
// Subcomponent: Animated Rings Recalculated for viewBox 292
// ─────────────────────────────────────────────────────────────
function AnimatedRings({ active }) {
  useEffect(() => { injectEuropeStyles(); }, []);

  // Exact recalculation for 240x240 container (Inner image frame = 212x212, margin = 14)
  const r = 112;
  const cx = 120;
  const cy = 120;
  const circ = 2 * Math.PI * r; // ≈ 703.7

  const arcLen = circ * 0.30;
  const gap = circ - arcLen;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 240 240" fill="none">
      {/* Arc 1 — Clockwise */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke="#2d61e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={`${arcLen} ${gap}`}
        className="arc-cw-europe"
        style={{
          opacity: active ? 0 : 0.8,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Arc 2 — Counter-clockwise (180 deg offset) */}
      <circle
        cx={cx} cy={cy} r={r}
        stroke="#2d61e0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray={`${arcLen} ${gap}`}
        className="arc-ccw-europe"
        style={{
          opacity: active ? 0 : 0.8,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Full circle interactive focus ring */}
      {active && (
        <circle
          key="ring-active-europe"
          cx={cx} cy={cy} r={r}
          stroke="#2d61e0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={`${circ}`}
          strokeDashoffset={circ}
          className="ring-draw-europe"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(45,97,224,0.6))',
          }}
        />
      )}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Subcomponent: Round & Interactive Team Card (292px)
// ─────────────────────────────────────────────────────────────
function TeamCard({ name, role, image, initials, isActive, onClick }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center cursor-pointer select-none group"
      style={{ width: 240 }}
      onClick={onClick}
    >
      <div className="relative" style={{ width: 240, height: 240 }}>
        <AnimatedRings active={isActive} />

        <div
          className="absolute overflow-hidden bg-slate-50 border border-slate-100"
          style={{
            top: 14,
            left: 14,
            width: 212,
            height: 212,
            borderRadius: '50%',
          }}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-top transition-all duration-500 ease-out"
              style={{
                filter: isActive
                  ? 'grayscale(100%) brightness(0.25)'
                  : 'grayscale(60%)',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.filter = 'grayscale(60%)';
              }}
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100/80 text-slate-700 transition-all duration-500"
              style={{
                filter: isActive ? 'brightness(0.3)' : 'none'
              }}
            >
              <span className="font-montserrat text-xl font-medium tracking-wider uppercase opacity-80 group-hover:text-[#2d61e0] transition-colors duration-300">
                {initials}
              </span>
            </div>
          )}

          {/* Dark overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'rgba(15, 23, 42, 0.75)',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Active state text overlay */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{
              padding: '0 20px',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s',
            }}
          >
            <p className="text-white font-montserrat text-[12px] font-bold text-center leading-snug">
              {name.split(' ').slice(0, 2).join(' ')}
            </p>
            <div
              style={{
                width: 28,
                height: 1,
                background: '#2d61e0',
                margin: '8px auto',
                borderRadius: 99,
              }}
            />
            <p className="text-slate-300 font-montserrat text-[9px] sm:text-[10px] text-center uppercase tracking-wide leading-normal px-1 break-words whitespace-normal">
              {role.replace('WeProm Europe', '').replace(/,\s*/g, ' — ')}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Section Component
// ─────────────────────────────────────────────────────────────
const Team = () => {
  const [activeId, setActiveId] = useState(1);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Duplicate data array to achieve a smooth infinite scroll illusion
  const duplicatedTeam = [...TEAM_DATA, ...TEAM_DATA];
  const activeMember = TEAM_DATA.find(m => m.id === activeId) || TEAM_DATA[0];

  useEffect(() => {
    let lastTime = 0;
    const SPEED = 0.45;

    const step = (now) => {
      if (!lastTime) lastTime = now;
      const dt = now - lastTime;
      lastTime = now;

      const el = trackRef.current;
      if (el && !isDragging.current && !isUserInteracting) {
        const halfScrollWidth = el.scrollWidth / 2;
        
        if (el.scrollLeft >= halfScrollWidth) {
          el.scrollLeft = el.scrollLeft - halfScrollWidth;
        } else {
          el.scrollLeft += SPEED * (dt / 16.67);
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isUserInteracting]);

  const onMouseDown = (e) => {
    isDragging.current = true;
    setIsUserInteracting(true);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const dist = (x - startX.current) * 1.25;
    trackRef.current.scrollLeft = scrollStart.current - dist;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    setTimeout(() => {
      if (!isDragging.current) setIsUserInteracting(false);
    }, 1200);
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    setIsUserInteracting(true);
    startX.current = e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollStart.current = trackRef.current?.scrollLeft ?? 0;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const dist = (x - startX.current) * 1.25;
    trackRef.current.scrollLeft = scrollStart.current - dist;
  };

  return (
    <section className="w-full py-24 md:py-32 overflow-hidden bg-slate-100 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* HEADER */}
        <div className="max-w-3xl mb-16 reveal">
          <p className="text-[#2d61e0] font-montserrat font-bold tracking-[0.4em] uppercase text-[11px] mb-4">
            Our Team
          </p>
          <h2 className="text-slate-900 font-montserrat text-3xl md:text-[35px] font-semibold uppercase leading-tight tracking-wide mb-6">
            We are a multicultural, multidisciplinary, and multigenerational team.
          </h2>
          <p className="text-black font-montserrat text-sm md:text-base font-normal leading-relaxed tracking-wide">
            We combine decades of international experience with the vision and agility of the newer generations. 
            Our team brings together profiles from diverse backgrounds — marketing, foreign trade, finance, economics, 
            communication, international relations, and more — because internationalizing a business requires exactly that: 
            a comprehensive vision, rather than isolated specialization.
          </p>
        </div>

        {/* INFINITE SLIDING CAROUSEL */}
        <div className="relative mb-14">
          <div
            ref={trackRef}
            className="flex gap-4 pb-4 overflow-x-auto scrollbar-none touch-pan-x"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              cursor: isUserInteracting ? 'grabbing' : 'grab',
            }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onMouseUp}
          >
            {duplicatedTeam.map((member, index) => (
              <TeamCard
                key={`${member.id}-${index}`}
                name={member.name}
                role={member.role}
                image={member.image}
                initials={member.initials}
                isActive={activeId === member.id}
                onClick={() => setActiveId(member.id)}
              />
            ))}
          </div>
          
          {/* Adjusted Optical Side Gradients */}
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none hidden md:block" />
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none hidden md:block" />
        </div>

        {/* EXECUTIVE DETAIL DRAWER */}
        <div className="bg-slate-50 border border-slate-200/60 p-8 md:p-10 rounded-sm transition-all duration-300 min-h-[180px] flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          <div className="flex-shrink-0 bg-[#2d61e0]/10 text-[#2d61e0] w-12 h-12 flex items-center justify-center border border-[#2d61e0]/20 rounded-xs font-montserrat font-bold text-sm">
            {activeMember.initials}
          </div>
          <div className="flex-1">

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 w-full">
              <h4 className="text-slate-900 font-montserrat text-base font-bold uppercase tracking-wide inline-block whitespace-normal">
                {activeMember.name}
              </h4>
              <span className="hidden md:inline text-slate-300">|</span>
              <span className="text-[#2d61e0] font-montserrat text-xs font-semibold uppercase tracking-wide inline-block whitespace-normal leading-relaxed">
                {String(activeMember.role)}
              </span>
            </div>

            <p className="text-slate-700 font-montserrat text-sm md:text-[15px] font-light leading-relaxed tracking-wide max-w-5xl transition-all duration-300 animate-fadeIn">
              {activeMember.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;