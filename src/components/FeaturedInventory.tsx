import { Button } from "@/components/ui/button";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const cars = [
  { image: car1, name: "2023 Porsche 911 GT3 RS", price: "$241,300", spec: "520 HP · PDK · Weissach Pkg", id: 1 },
  { image: car2, name: "2024 Porsche 911 Turbo S", price: "$233,800", spec: "640 HP · AWD · Sport Chrono", id: 2 },
  { image: car3, name: "2023 Porsche 718 Cayman GT4", price: "$105,400", spec: "414 HP · 6-Speed · Buckets", id: 3 },
];

const FeaturedInventory = () => {
  return (
    <section id="inventory" className="py-28 md:py-36 bg-secondary">
      <div className="container mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="w-10 h-[2px] bg-primary mx-auto mb-6" />
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
              FEATURED <span className="text-primary">INVENTORY</span>
            </h2>
            <p className="text-muted-foreground/70 uppercase tracking-[0.3em] text-[11px]">
              Hand-selected performance machines
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cars.map((car, i) => (
            <ScrollReveal key={car.id} delay={i * 150}>
              <div className="group bg-card border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-7">
                  <p className="text-muted-foreground/60 text-[10px] uppercase tracking-[0.3em] mb-2">{car.spec}</p>
                  <h3 className="font-display text-2xl text-foreground mb-1">{car.name}</h3>
                  <p className="text-primary font-display text-3xl mb-6">{car.price}</p>
                  <Button
                    variant="outline"
                    className="w-full uppercase tracking-[0.25em] text-[10px] rounded-none border-border/50 hover:border-primary hover:text-primary group/btn"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
