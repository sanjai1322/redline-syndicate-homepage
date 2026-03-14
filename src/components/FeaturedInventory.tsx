import { Button } from "@/components/ui/button";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const cars = [
  { image: car1, name: "911 GT3 RS", brand: "PORSCHE", price: "$241,300", spec: "520 HP · PDK · WEISSACH", id: 1 },
  { image: car2, name: "911 TURBO S", brand: "PORSCHE", price: "$233,800", spec: "640 HP · AWD · CHRONO", id: 2 },
  { image: car3, name: "718 CAYMAN GT4", brand: "PORSCHE", price: "$105,400", spec: "414 HP · 6-SPEED · BUCKETS", id: 3 },
];

const FeaturedInventory = () => {
  return (
    <section id="inventory" className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <div className="w-12 h-[2px] bg-primary mb-8" />
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-none">
                CURATED <span className="text-primary italic">COLLECTION</span>
              </h2>
              <p className="text-white/40 uppercase tracking-[0.4em] text-[10px] font-medium leading-relaxed">
                Hand-selected performance machines for the absolute enthusiast.
              </p>
            </div>
            <Button variant="link" className="text-primary uppercase tracking-[0.3em] text-[10px] font-black p-0 h-auto group">
              View All Inventory
              <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cars.map((car, i) => (
            <ScrollReveal key={car.id} delay={i * 150}>
              <motion.div
                whileHover={{ y: -15 }}
                className="group relative bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-700"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

                  {/* Floating Spec Badge */}
                  <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[8px] text-white/70 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Active Listing
                  </div>
                </div>

                <div className="p-10 pt-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-primary font-bold text-[9px] tracking-[0.3em] uppercase mb-2 block">{car.brand}</span>
                      <h3 className="font-display text-3xl text-white group-hover:text-primary transition-colors duration-500">{car.name}</h3>
                    </div>
                    <div className="h-10 w-10 flex items-center justify-center border border-white/10 rounded-full group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>

                  <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] mb-8 border-l border-primary/30 pl-4">{car.spec}</p>

                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <span className="text-white font-display text-4xl">{car.price}</span>
                    <span className="text-white/20 text-[9px] uppercase tracking-[0.2em]">Reserve Now</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
