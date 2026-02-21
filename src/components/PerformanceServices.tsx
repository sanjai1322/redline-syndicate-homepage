import { Cpu, Flame, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "ECU Remapping",
    description: "Custom calibration for maximum power delivery, throttle response, and fuel efficiency across all driving modes.",
    number: "01",
  },
  {
    icon: Flame,
    title: "Turbo & Exhaust Upgrades",
    description: "High-flow turbo kits and titanium exhaust systems engineered for aggressive power gains and unmistakable sound.",
    number: "02",
  },
  {
    icon: ClipboardCheck,
    title: "Full Performance Inspection",
    description: "Comprehensive 200-point inspection covering drivetrain, suspension, brakes, and electronics to race-ready standards.",
    number: "03",
  },
];

const PerformanceServices = () => {
  return (
    <section id="performance" className="py-28 md:py-36 bg-secondary">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <div className="w-10 h-[2px] bg-primary mx-auto mb-6" />
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            PERFORMANCE <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-muted-foreground/70 uppercase tracking-[0.3em] text-[11px]">
            Precision engineering for every build
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border/50 p-10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.15)]"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-display text-6xl text-foreground/[0.03] select-none">
                {service.number}
              </span>

              <service.icon
                className="w-8 h-8 text-primary/70 mb-8 transition-colors group-hover:text-primary"
                strokeWidth={1.2}
              />
              <h3 className="font-display text-2xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground/70 text-sm leading-relaxed">{service.description}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceServices;
