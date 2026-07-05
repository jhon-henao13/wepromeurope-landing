import React from "react";
import { motion } from "framer-motion";
import { useContactModal } from './ContactModal';

const processSteps = [
  {
    number: "01",
    title: "Market Diagnostics",
    subtitle: "Clarifying opportunities before capital allocation.",
    description:
      "Market Research • Feasibility Studies • Competitor Benchmarking • Stakeholder Mapping.",
  },
  {
    number: "02",
    title: "Strategic Direction",
    subtitle: "Defining project scale and true market potential.",
    description:
      "Positioning Strategy • Value Proposition Design • Risk Mitigation • Market Prioritization.",
  },
  {
    number: "03",
    title: "Go-to-Market Roadmap",
    subtitle: "Structuring the exact pathway for local or cross-border entry.",
    description:
      "Commercial Engineering • Financial Planning • Distribution Models • Logistics Compliance.",
  },
  {
    number: "04",
    title: "Message Engineering",
    subtitle: "Adapting your corporate narrative to local and cultural contexts.",
    description:
      "Brand Storytelling • Executive Pitch Collateral • Digital Footprint • Cultural Alignment.",
  },
  {
    number: "05",
    title: "Market Activation",
    subtitle: "Rendering the strategic opportunity visible and actionable.",
    description:
      "Partner Activation • PR & Media Campaigns • Executive Trade Events • Field Execution.",
  },
  {
    number: "06",
    title: "Continuous Optimization",
    subtitle: "Consolidating sustainable, long-term commercial growth.",
    description:
      "Executive Tracking • KPI Dashboards • Performance Audits • Strategic Scaling.",
  },
];

const HowWeWork = () => {
  const { openModal } = useContactModal();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-24">

      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#2d61e0]/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#dbe4f0_1px,transparent_1px)] [background-size:34px_34px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-5xl mx-auto"
        >
          <p className="text-[#2d61e0] font-montserrat font-extrabold tracking-[0.4em] uppercase text-[14px] mb-4">
            FRAMEWORK
          </p>

          <h2 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight tracking-wide bg-gradient-to-r from-slate-950 via-slate-900 to-[#2d61e0] bg-clip-text text-transparent selective-gradient-animate drop-shadow-[0_2px_10px_rgba(45,97,224,0.03)]">
            Our Phased Execution Architecture
          </h2>

          <p className="mt-4 text-black leading-relaxed text-base md:text-xl max-w-5xl mx-auto">
            A structured way to move EU-LATAM opportunities forward, guided by experts at every step. International expansion is not a single action — it is a clear process.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">

          {/* Premium Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[1px] bg-gradient-to-r from-[#2d61e0]/10 via-[#2d61e0]/30 to-[#2d61e0]/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.215, 0.61, 0.355, 1.0],
                }}
                className="group relative h-full flex flex-col"
              >
                {/* Desktop Indicator Node */}
                <div className="hidden lg:flex absolute -top-[5px] left-8 z-20">
                  <div className="w-[10px] h-[10px] rounded-full bg-slate-200 group-hover:bg-[#2d61e0] group-hover:scale-125 transition-all duration-500 ring-4 ring-white" />
                </div>

                {/* Premium Card Body */}
                <div
                  className="
                    relative
                    flex-1
                    flex
                    flex-col
                    bg-white
                    border
                    border-slate-100
                    rounded-2xl
                    p-8
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-1.5
                    hover:border-[#2d61e0]/20
                    hover:shadow-[0_30px_70px_rgba(15,23,42,0.06)]
                  "
                >
                  {/* Subtle Interactive Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2d61e0]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  {/* Top Row: Institutional Number & Stage Badge */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <span
                      className="
                        font-montserrat
                        text-4xl
                        font-light
                        tracking-tight
                        text-[#2d61e0]/60
                        group-hover:text-[#2d61e0]/90
                        transition-colors
                        duration-500
                      "
                    >
                      {step.number}
                    </span>

                    {/* Technical Stage Badge */}
                    <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 group-hover:border-[#2d61e0]/10 group-hover:bg-[#2d61e0]/5 group-hover:text-[#2d61e0] transition-all duration-500">
                      Phase {step.number}
                    </div>
                  </div>

                  {/* Main Card Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="font-montserrat text-slate-900 font-medium text-xl leading-snug tracking-tight mb-3 group-hover:text-[#2d61e0] transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-[#2d61e0]/90 text-xs font-medium tracking-wide leading-relaxed mb-4 uppercase">
                      {step.subtitle}
                    </p>

                    <p className="text-slate-950 text-sm leading-relaxed font-light mt-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro-interactive Base Progress Line */}
                  <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-slate-100/70 overflow-hidden">
                    <div
                      className="
                        h-full
                        w-0
                        group-hover:w-full
                        transition-all
                        duration-700
                        ease-out
                        bg-[#2d61e0]
                      "
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corporate Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-black">
              ADAPTIVE EXECUTION
            </h3>

            <p className="mt-4 mb-8 text-slate-800 leading-relaxed">
              We evaluate the growth areas of each organization and build the next step to move it forward.
            </p>

            <div className="w-full flex justify-center">
              <button onClick={openModal} className="group relative inline-flex items-center space-x-2.5 bg-[#3861FB] hover:bg-[#254EDB]    text-white font-bold text-sm py-5 px-8 rounded transition-all duration-300 ease-out shadow-   [0_10px_25px_-5px_rgba(56,97,251,0.4)] hover:shadow-[0_15px_35px_rgba(56,97,251,0.6)] hover:-translate-y-0.5   active:translate-y-0">
                <span>Request Market Entry Diagnostic</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-white/90">→</span>
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowWeWork;