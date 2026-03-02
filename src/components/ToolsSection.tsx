import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const tools = [
  {
    name: "Auth-Fusion",
    desc: "Authorization flaw verification automation tool",
    href: "https://github.com/Shaheen404/Auth-Fusion",
  },
  {
    name: "PhishGuard",
    desc: "Intelligent phishing detection engine",
    href: "https://github.com/Muzammil-Shaheen/PhishGuard",
  },
  {
    name: "PTS",
    desc: "Automated web reconnaissance CLI tool",
    href: "https://github.com/Muzammil-Shaheen/Pentest_Scraper",
  },
  {
    name: "DirFuzzer",
    desc: "Multi-threaded directory brute-force tool",
    href: "https://github.com/Muzammil-Shaheen/DirFuzzer",
  },
  {
    name: "VocalClone",
    desc: "Neural TTS terminal for technical briefings",
    href: "https://github.com/Shaheen404/VocalClone",
  },
];

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tools" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary mb-2">Tools</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Security Tools Built from an{" "}
            <span className="text-gradient-neon">Attacker's Perspective</span>
          </h2>
          <p className="text-foreground/80 mt-6 text-lg max-w-3xl mx-auto">
            Custom-built offensive security utilities engineered for precision, automation, and real-world exploitation scenarios.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-8 group hover:neon-border-purple transition-all duration-300 flex flex-col"
            >
              <div className="font-mono text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-secondary">$</span> {tool.name}
              </div>
              <p className="text-foreground/80 text-base mb-8 flex-grow leading-relaxed">
                {tool.desc}
              </p>
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-secondary hover:underline mt-auto"
              >
                <ExternalLink className="w-4 h-4" /> View GitHub Repo
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;