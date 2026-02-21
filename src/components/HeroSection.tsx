import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-porsche.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4">
          ENGINEERED TO <span className="text-primary">DOMINATE</span>
        </h1>
        <p className="text-metallic text-lg md:text-xl tracking-widest uppercase mb-10">
          Precision Performance. No Compromise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="uppercase tracking-widest text-sm font-semibold px-10 py-6">
            View Inventory
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="uppercase tracking-widest text-sm font-semibold px-10 py-6 border-foreground/30 text-foreground hover:bg-foreground/10"
          >
            Book Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
