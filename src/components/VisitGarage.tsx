import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import garageImage from "@/assets/garage-interior.jpg";
import { useParallax } from "@/hooks/use-parallax";
import ScrollReveal from "@/components/ScrollReveal";

const VisitGarage = () => {
  const { ref, offset } = useParallax(0.25);

  return (
    <section ref={ref} id="contact" className="relative py-36 md:py-48 overflow-hidden">
      <div
        className="absolute inset-[-20%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${garageImage})`,
          transform: `translateY(${offset}px)`,
        }}
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative z-10 container mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <div className="w-10 h-[2px] bg-primary mx-auto mb-8" />
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-16">
            VISIT THE <span className="text-primary">GARAGE</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            {[
              { icon: MapPin, text: "1200 Industrial Blvd, Stuttgart, TX 75001" },
              { icon: Phone, text: "(512) 555-0199" },
              { icon: Clock, text: "Mon – Sat: 9 AM – 7 PM" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground text-sm tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <Button size="lg" className="uppercase tracking-[0.3em] text-xs font-semibold px-14 py-7 rounded-none shadow-[0_0_40px_-5px_hsl(var(--primary)/0.4)]">
            Schedule an Appointment
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisitGarage;
