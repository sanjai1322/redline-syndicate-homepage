import { Cpu, Flame, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "ECU Remapping",
    description: "Custom calibration for maximum power delivery, throttle response, and fuel efficiency across all driving modes.",
  },
  {
    icon: Flame,
    title: "Turbo & Exhaust Upgrades",
    description: "High-flow turbo kits and titanium exhaust systems engineered for aggressive power gains and unmistakable sound.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Performance Inspection",
    description: "Comprehensive 200-point inspection covering drivetrain, suspension, brakes, and electronics to race-ready standards.",
  },
];

const PerformanceServices = () => {
  return (
    <section id="performance" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            PERFORMANCE <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">
            Precision engineering for every build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-lg p-8 transition-all duration-300 hover:border-primary"
            >
              <service.icon
                className="w-10 h-10 text-muted-foreground mb-6 transition-colors group-hover:text-primary"
                strokeWidth={1.5}
              />
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceServices;
