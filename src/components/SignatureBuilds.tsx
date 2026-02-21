import { Button } from "@/components/ui/button";
import signatureBuild from "@/assets/signature-build.jpg";

const SignatureBuilds = () => {
  return (
    <section id="builds" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle carbon fiber texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 2px,
          hsl(var(--foreground) / 0.03) 2px,
          hsl(var(--foreground) / 0.03) 4px
        )`
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none mb-6">
              SYNDICATE<br />
              <span className="text-primary">SIGNATURE BUILD</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Our in-house performance division delivers 700+ HP builds with precision ECU tuning,
              custom titanium exhaust systems, and race-spec aerodynamics.
              Every build is a statement of uncompromising power.
            </p>
            <Button size="lg" className="uppercase tracking-widest text-sm font-semibold px-10 py-6">
              Explore Builds
            </Button>
          </div>

          {/* Right — Image */}
          <div className="rounded-lg overflow-hidden">
            <img
              src={signatureBuild}
              alt="Syndicate signature build in performance garage"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureBuilds;
