import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-porsche.jpg";
import { ChevronDown } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { ref, offset } = useParallax(0.3);

  return (
    <section ref={ref} className="relative h-[110vh] w-full overflow-hidden bg-black">
      {/* Background image with parallax and zoom */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-[-10%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${heroImage})`,
          y: offset,
        }}
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/60" />

      {/* Radial vignette for focus */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 pt-20">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[2px] bg-primary mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] text-white leading-[0.8] mb-8 select-none">
            <span className="block metallic-text opacity-90">ENGINEERED</span>
            <span className="block text-primary text-glow italic font-black">DOMINATE</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/40 text-xs md:text-sm tracking-[0.5em] uppercase mb-16 font-light max-w-2xl px-4"
        >
          Precision Engineering &nbsp;·&nbsp; Unrivaled Performance &nbsp;·&nbsp; Pure Adrenaline
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button size="lg" className="group relative overflow-hidden uppercase tracking-[0.4em] text-[10px] font-black px-14 py-8 rounded-none bg-primary hover:bg-primary/90 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(234,0,30,0.6)]">
            <span className="relative z-10">Inventory</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group uppercase tracking-[0.4em] text-[10px] font-black px-14 py-8 rounded-none border-white/10 text-white hover:bg-white/5 hover:border-white/30 transition-all duration-500"
          >
            Services
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/20 text-[9px] uppercase tracking-[0.6em]">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
