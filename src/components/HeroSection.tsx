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
          className="max-w-6xl mx-auto text-center"
        >
          {/* Main Title Area: Text + Image */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mb-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight flex-1">
              <span className="text-foreground block text-3xl md:text-4xl font-mono mb-3">
                Muhammad Muzammil Shaheen
              </span>
              <span className="text-foreground">Cybersecurity Analyst &</span>
              <br />
              <span className="text-gradient-neon">Penetration Tester</span>
            </h1>

            {/* Profile Image */}
            <img
              src="/profile.jpg"
              alt="Muhammad Muzammil Shaheen"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shrink-0 border-4 border-primary/20 shadow-[0_0_24px_hsl(190_100%_50%/0.2)]"
            />
          </div>

          {/* Subtitle */}
          <span className="text-foreground/90 text-3xl sm:text-4xl md:text-5xl font-medium mt-2 block mb-10 leading-snug">
            Protecting Fintech, Ecommerce & Digital Infrastructure
          </span>

          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-mono leading-relaxed">
            "I simulate real-world attacks so your organization stays resilient against them."
          </p>

          {/* Terminal line */}
          <div className="font-mono text-sm text-primary/70 mb-12 flex items-center justify-center gap-2">
            <span className="text-secondary">root@shaheen-sec:~$</span>{" "}
            <span>securing_infrastructure --mode proactive</span>
            <span className="animate-terminal-blink ml-1">▌</span>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 text-center"
              >
                <badge.icon className="w-8 h-8 text-primary" />
                <span className="text-sm text-foreground/80 font-mono leading-tight">
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
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="#contact"
              className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg neon-glow hover:opacity-90 transition-all glitch-hover"
            >
              Secure Your Business Now
            </a>
            <a
              href="#tools"
              className="px-10 py-4 rounded-lg neon-border text-primary font-semibold text-lg hover:bg-primary/10 transition-all"
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