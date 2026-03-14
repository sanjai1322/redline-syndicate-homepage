import { Cpu, Flame, ClipboardCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: Cpu,
    title: "ECU REMAPPING",
    description: "Multi-stage custom calibration for maximum power delivery, linear throttle response, and refined fuel mapping.",
    number: "01",
  },
  {
    icon: Flame,
    title: "TURBO & EXHAUST",
    description: "High-flow turbocharging solutions and bespoke titanium exhaust systems engineered for peak velocity and acoustics.",
    number: "02",
  },
  {
    icon: ClipboardCheck,
    title: "ADVANCED TELEMETRY",
    description: "Deep-level data analysis and performance diagnostics covering drivetrain, suspension, and race-spec electronics.",
    number: "03",
  },
];

const PerformanceServices = () => {
  return (
    <section id="performance" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-24">
            <div className="w-12 h-[2px] bg-primary mx-auto mb-8" />
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              ENGINEERING <span className="text-primary italic">PRECISION</span>
            </h2>
            <p className="text-white/40 uppercase tracking-[0.5em] text-[10px] font-medium">
              Pushing the boundaries of what's possible
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 150}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative bg-transparent h-full flex flex-col items-center text-center p-8 transition-colors duration-700"
              >
                <div className="relative mb-12">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center border border-white/10 rounded-full group-hover:border-primary/50 group-hover:bg-primary transition-all duration-700">
                    <service.icon
                      className="w-8 h-8 text-white/40 group-hover:text-white transition-colors duration-700"
                      strokeWidth={1}
                    />
                  </div>
                </div>

                <h3 className="font-display text-3xl text-white mb-6 group-hover:text-primary transition-colors duration-500 tracking-wider">
                  {service.title}
                </h3>
                <p className="text-white/30 text-sm leading-relaxed max-w-xs mx-auto mb-10 group-hover:text-white/60 transition-colors duration-500 uppercase tracking-widest text-[10px]">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <span className="font-display text-5xl text-white/5 group-hover:text-primary/10 transition-colors duration-700 select-none">
                    {service.number}
                  </span>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary transition-all duration-700 group-hover:w-20" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceServices;
