import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Lock,
  Smartphone,
  Server,
  Bot,
  Search,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Penetration Testing",
    desc: "Manual testing beyond automated scanners. OWASP Top 10, IDOR, business logic flaws — uncovered and remediated.",
    cta: "Request Web Security Audit",
  },
  {
    icon: Lock,
    title: "API Security Testing",
    desc: "Authentication bypass, rate limit weaknesses, privilege escalation — exposing what scanners miss.",
    cta: "Request API Assessment",
  },
  {
    icon: Smartphone,
    title: "Android Application Security",
    desc: "SAST/DAST, reverse engineering, traffic interception, and insecure storage analysis.",
    cta: "Request Mobile Security Review",
  },
  {
    icon: Server,
    title: "Network Security Assessment",
    desc: "Internal & external infrastructure testing with controlled exploitation and detailed reporting.",
    cta: "Request Infrastructure Audit",
  },
  {
    icon: Bot,
    title: "AI Security Tool Development",
    desc: "Custom Python & AI-based security automation solutions built for real-world attack scenarios.",
    cta: "Discuss Custom Solution",
  },
  {
    icon: Search,
    title: "SEO & Technical Security Hardening",
    desc: "Search-optimized and security-hardened websites that rank and resist attacks simultaneously.",
    cta: "Start SEO Optimization",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary mb-2">Services</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Offensive Security <span className="text-gradient-neon">Services</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-8 group hover:neon-border transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:neon-glow transition-all">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              {/* Increased font size for titles */}
              <h3 className="text-xl font-bold text-foreground mb-3 font-mono">
                {service.title}
              </h3>
              {/* Increased font size and spacing for descriptions */}
              <p className="text-foreground/80 text-base leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-mono text-primary hover:underline mt-auto"
              >
                {service.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;