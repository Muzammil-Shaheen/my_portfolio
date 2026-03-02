import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

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
      // Increased vertical padding overall
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          {/* Increased Logo Icon Size */}
          <Shield className="w-8 h-8 text-primary transition-all group-hover:drop-shadow-[0_0_8px_hsl(190,100%,50%)]" />
          {/* Increased Logo Text Size */}
          <span className="font-mono text-xl font-bold text-foreground">
            MMS<span className="neon-text-blue">.</span>sec
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // Increased font size for nav links
              className="text-base text-foreground/80 hover:text-primary transition-colors font-mono font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            // Increased CTA Button Size and Padding
            className="ml-3 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-base neon-glow hover:opacity-90 transition-all"
          >
            Secure Your Business
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {/* Increased Mobile Menu Icon Size */}
          {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            // Increased padding inside mobile menu
            className="lg:hidden glass mt-3 mx-4 rounded-xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                // Increased font size for mobile links
                className="text-lg text-foreground/80 hover:text-primary transition-colors font-mono font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              // Increased CTA Button Size in mobile menu
              className="mt-4 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-base text-center neon-glow"
            >
              Secure Your Business
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;