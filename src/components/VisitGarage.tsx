import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import garageImage from "@/assets/garage-interior.jpg";

const VisitGarage = () => {
  return (
    <section id="contact" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${garageImage})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">
          VISIT THE <span className="text-primary">GARAGE</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12 text-muted-foreground">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm tracking-wide">1200 Industrial Blvd, Stuttgart, TX 75001</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm tracking-wide">(512) 555-0199</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm tracking-wide">Mon – Sat: 9 AM – 7 PM</span>
          </div>
        </div>

        <Button size="lg" className="uppercase tracking-widest text-sm font-semibold px-10 py-6">
          Schedule an Appointment
        </Button>
      </div>
    </section>
  );
};

export default VisitGarage;
