import { Button } from "@/components/ui/button";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const cars = [
  { image: car1, name: "2023 Porsche 911 GT3 RS", price: "$241,300", id: 1 },
  { image: car2, name: "2024 Porsche 911 Turbo S", price: "$233,800", id: 2 },
  { image: car3, name: "2023 Porsche 718 Cayman GT4", price: "$105,400", id: 3 },
];

const FeaturedInventory = () => {
  return (
    <section id="inventory" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            FEATURED <span className="text-primary">INVENTORY</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">
            Hand-selected performance machines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-foreground mb-1">{car.name}</h3>
                <p className="text-primary font-semibold text-lg mb-4">{car.price}</p>
                <Button
                  variant="outline"
                  className="w-full uppercase tracking-widest text-xs border-border hover:border-primary hover:text-primary"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
