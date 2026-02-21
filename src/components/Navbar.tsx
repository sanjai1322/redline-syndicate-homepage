import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = ["Inventory", "Builds", "Performance", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--primary)/0.15)]"
          : "bg-gradient-to-b from-background/60 to-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="font-display text-2xl tracking-[0.15em] text-foreground">
          REDLINE <span className="text-primary">SYNDICATE</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button className="uppercase tracking-[0.25em] text-[10px] font-semibold px-7 h-9 rounded-none">
            Explore Cars
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border/50 px-6 pb-8 pt-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button className="w-full mt-6 uppercase tracking-[0.25em] text-[10px] font-semibold rounded-none">
            Explore Cars
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
