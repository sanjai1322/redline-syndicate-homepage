import ScrollReveal from "@/components/ScrollReveal";

const columns = [
  {
    title: "Inventory",
    links: ["New Arrivals", "Pre-Owned", "Coming Soon", "Sold Archive"],
  },
  {
    title: "Performance",
    links: ["ECU Tuning", "Turbo Upgrades", "Exhaust Systems", "Suspension"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Press"],
  },
  {
    title: "Contact",
    links: ["Visit Us", "Call Us", "Email", "Social"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
            <div className="col-span-2 md:col-span-1">
              <span className="font-display text-2xl tracking-[0.1em] text-foreground">
                REDLINE <span className="text-primary">SYNDICATE</span>
              </span>
              <p className="text-muted-foreground/50 text-xs mt-4 leading-relaxed max-w-[180px]">
                Premium performance vehicles and bespoke tuning solutions since 2018.
              </p>
              <div className="w-8 h-[1px] bg-primary/40 mt-6" />
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-base tracking-[0.15em] text-foreground mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground/50 text-[11px] uppercase tracking-[0.15em] hover:text-foreground transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-20 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/40 text-[10px] uppercase tracking-[0.2em]">
            © 2026 Redline Syndicate. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Instagram", "YouTube", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground/40 text-[10px] uppercase tracking-[0.2em] hover:text-foreground transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
