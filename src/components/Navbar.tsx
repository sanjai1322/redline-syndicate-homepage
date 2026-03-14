import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Inventory", "Builds", "Performance", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 50);

      // Hide navbar during hero sequence (approx 300vh)
      // Re-show it once we approach the first content section
      const heroThreshold = window.innerHeight * 2;
      setIsVisible(scrollPos < 50 || scrollPos > heroThreshold);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? "h-16 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-2xl"
        : "h-24 bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-6 lg:px-12">
        {/* Logo */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#"
          className="font-display text-xl sm:text-2xl tracking-[0.2em] text-white flex items-center gap-2 group"
        >
          <span className="relative">
            REDLINE
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </span>
          <span className="text-primary font-black italic metallic-text">SYNDICATE</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-all duration-300"
            >
              <span className="relative z-10">{link}</span>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <Button className="uppercase tracking-[0.3em] text-[9px] font-black px-8 h-10 rounded-none bg-primary hover:bg-primary/90 transition-all duration-500 hover:shadow-[0_0_25px_rgba(234,0,30,0.5)]">
            Explore
          </Button>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 z-[-1]"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-display tracking-[0.3em] text-white/70 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </motion.a>
            ))}
            <Button className="mt-4 uppercase tracking-[0.3em] text-xs font-black px-12 py-6 h-auto rounded-none">
              Explore
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
