import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import garageImage from "@/assets/garage-interior.jpg";
import { useParallax } from "@/hooks/use-parallax";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const VisitGarage = () => {
  const { ref, offset } = useParallax(0.25);

  return (
    <section ref={ref} id="contact" className="relative py-48 overflow-hidden bg-black">
      {/* Cinematic Background */}
      <motion.div
        className="absolute inset-[-10%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${garageImage})`,
          y: offset,
        }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-background/60" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <ScrollReveal>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-10" />
          <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-white mb-20 leading-none">
            EXPERIENCE THE <span className="text-primary italic font-black text-glow">STUDIO</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mb-20">
          {[
            { icon: MapPin, text: "1200 INDUSTRIAL BLVD, STUTTGART", label: "LOCATION" },
            { icon: Phone, text: "+1 (512) 555-0199", label: "ENQUIRIES" },
            { icon: Clock, text: "MON – SAT: 9 AM – 7 PM", label: "HOURS" },
          ].map(({ icon: Icon, text, label }, i) => (
            <ScrollReveal key={text} delay={i * 100}>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary group-hover:bg-primary transition-all duration-700">
                  <Icon className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-primary font-bold text-[8px] tracking-[0.4em] mb-2 uppercase">{label}</span>
                  <span className="text-white/60 group-hover:text-white transition-colors text-xs tracking-[0.2em] font-medium uppercase">{text}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <Button size="lg" className="group relative overflow-hidden uppercase tracking-[0.4em] text-[10px] font-black px-16 py-8 rounded-none bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_50px_-5px_hsl(var(--primary)/0.5)]">
            <span className="relative z-10">Private Consultation</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisitGarage;
