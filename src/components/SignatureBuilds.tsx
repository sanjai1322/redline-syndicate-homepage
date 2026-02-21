import { Button } from "@/components/ui/button";
import signatureBuild from "@/assets/signature-build.jpg";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "700+", label: "Horsepower" },
  { value: "3.2s", label: "0–100 km/h" },
  { value: "100%", label: "Bespoke" },
];

const SignatureBuilds = () => {
  return (
    <section id="builds" className="relative py-28 md:py-40 bg-background overflow-hidden">
      {/* Carbon fiber texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 1px, hsl(var(--foreground)) 1px, hsl(var(--foreground)) 2px)`
      }} />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Text */}
          <div>
            <div className="w-10 h-[2px] bg-primary mb-8" />
            <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground leading-[0.9] mb-8">
              SYNDICATE<br />
              <span className="text-primary">SIGNATURE BUILD</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
              Our in-house performance division delivers bespoke builds with precision ECU tuning,
              custom titanium exhaust systems, and race-spec aerodynamics.
              Every build is a statement of uncompromising power.
            </p>

            {/* Stats row */}
            <div className="flex gap-10 mb-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl text-primary">{stat.value}</p>
                  <p className="text-muted-foreground/60 text-[10px] uppercase tracking-[0.3em] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button size="lg" className="uppercase tracking-[0.3em] text-xs font-semibold px-12 py-7 rounded-none shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)] group">
              Explore Builds
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right — Image */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src={signatureBuild}
                alt="Syndicate signature build in performance garage"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Red accent corner */}
            <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-primary" />
            <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureBuilds;
