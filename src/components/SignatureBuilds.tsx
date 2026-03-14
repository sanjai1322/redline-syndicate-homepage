import { Button } from "@/components/ui/button";
import signatureBuild from "@/assets/signature-build.jpg";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "700+", label: "HP OUTPUT" },
  { value: "3.2s", label: "0–100 KM/H" },
  { value: "100%", label: "BESPOKE" },
];

const SignatureBuilds = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="builds" ref={sectionRef} className="relative py-32 md:py-48 bg-background overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="w-16 h-[2px] bg-primary mb-10" />
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.8] mb-10 select-none">
                SYNDICATE<br />
                <span className="text-primary italic font-black text-glow">SIGNATURE</span>
              </h2>
              <p className="text-white/40 text-sm md:text-base leading-relaxed mb-12 max-w-md uppercase tracking-[0.2em] font-light">
                Our in-house performance division delivers bespoke builds with precision ECU tuning,
                custom titanium exhaust systems, and race-spec aerodynamics.
              </p>

              <div className="grid grid-cols-3 gap-10 mb-16 border-t border-white/5 pt-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl text-primary mb-2 italic">{stat.value}</p>
                    <p className="text-white/20 text-[8px] uppercase tracking-[0.4em] font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="group relative overflow-hidden uppercase tracking-[0.4em] text-[10px] font-black px-12 py-8 rounded-none bg-primary hover:bg-primary/90 transition-all duration-500">
                <span className="relative z-10">Explore Project X</span>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="relative group">
              {/* Decorative Corners */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-700" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors duration-700" />

              <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/5">
                <motion.img
                  style={{ y: imgY }}
                  src={signatureBuild}
                  alt="Syndicate signature build"
                  className="w-full h-[120%] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                {/* Overlay Text */}
                <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-primary font-black text-[10px] tracking-[0.4em] block mb-2 uppercase">Project Noir</span>
                  <span className="text-white font-display text-2xl tracking-wider uppercase">Stage 3 Conversion</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SignatureBuilds;
