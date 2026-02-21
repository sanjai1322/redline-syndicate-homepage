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
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl text-foreground">
              REDLINE <span className="text-primary">SYNDICATE</span>
            </span>
            <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
              Premium performance. No compromise.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-lg text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground text-xs uppercase tracking-wider hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Redline Syndicate. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "YouTube", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-muted-foreground text-xs uppercase tracking-wider hover:text-foreground transition-colors"
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
