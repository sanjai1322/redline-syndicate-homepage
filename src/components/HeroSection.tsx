import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-porsche.jpg";
import { ChevronDown } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";

const HeroSection = () => {
  const { ref, offset } = useParallax(0.4);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-[-15%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset}px) scale(1.05)`,
        }}
      />
      {/* Layered overlays for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      {/* Subtle vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)"
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Small accent line */}
        <div className="w-12 h-[2px] bg-primary mb-8" />
        
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-foreground leading-[0.9] mb-6">
          ENGINEERED TO<br />
          <span className="text-primary">DOMINATE</span>
        </h1>
        
        <p className="text-metallic/80 text-sm md:text-base tracking-[0.35em] uppercase mb-12 font-light">
          Precision Performance &nbsp;·&nbsp; No Compromise
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          <Button size="lg" className="uppercase tracking-[0.3em] text-xs font-semibold px-12 py-7 rounded-none shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]">
            View Inventory
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="uppercase tracking-[0.3em] text-xs font-semibold px-12 py-7 rounded-none border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/40"
          >
            Book Service
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-muted-foreground text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
