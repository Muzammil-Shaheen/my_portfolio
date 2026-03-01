import { motion } from "framer-motion";
import { Shield, Globe, Smartphone, Terminal } from "lucide-react";

const badges = [
  { icon: Shield, label: "150+ VAPT Engagements" },
  { icon: Globe, label: "Fintech | Govt | Medical | Telecom" },
  { icon: Smartphone, label: "Web • API • Android • Network" },
  { icon: Terminal, label: "AI-Powered Security Tool Builder" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(190 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Terminal tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neon-border mb-8 font-mono text-xs text-primary"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-neon" />
            Muhammad Muzammil Shaheen
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Cybersecurity Analyst &</span>
            <br />
            <span className="text-gradient-neon">Penetration Tester</span>
            <br />
            <span className="text-foreground text-2xl sm:text-3xl md:text-4xl font-medium mt-2 block">
              Securing Fintech, SaaS & Enterprise Infrastructure
            </span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-mono">
            "I think like an attacker so your business doesn't suffer like a victim."
          </p>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-3xl mx-auto">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-lg px-3 py-3 flex flex-col items-center gap-2 text-center"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground font-mono leading-tight">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-base neon-glow hover:opacity-90 transition-all glitch-hover"
            >
              Secure Your Business Now
            </a>
            <a
              href="#tools"
              className="px-8 py-3.5 rounded-lg neon-border text-primary font-semibold text-base hover:bg-primary/10 transition-all"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[2]" />
    </section>
  );
};

export default HeroSection;
