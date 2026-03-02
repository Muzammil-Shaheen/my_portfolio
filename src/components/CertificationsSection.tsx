import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Loader } from "lucide-react";

const completed = [
  "Google Cybersecurity Course",
  "Cybrary – Ethical Hacking: System Hacking Phases",
  "Security Blue Team – Intro to Digital Forensics",
  "20+ TryHackMe Rooms",
  "Cyber Siege CTF – Military College of Signals",
  "Google Business Profile Specialist (Localo)",
];

const inProgress = [
  "Certified Penetration Testing Specialist (CPTS)",
  "ISC2 Certification",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary mb-2">Certifications & Badges</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications & <span className="text-gradient-neon">Badges</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          {/* Completed */}
          <div>
            <h3 className="text-lg font-mono text-primary mb-6 flex items-center gap-3">
              <Award className="w-5 h-5" /> Completed Certifications
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {completed.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 hover:neon-border transition-all duration-300"
                >
                  <Award className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-base text-foreground font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* In Progress */}
          <div>
            <h3 className="text-lg font-mono text-secondary mb-6 flex items-center gap-3">
              <Loader className="w-5 h-5 animate-spin" /> Currently Pursuing
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {inProgress.map((cert) => (
                <div
                  key={cert}
                  className="glass-card rounded-xl p-6 flex items-center gap-4 neon-border-purple"
                >
                  <Loader className="w-6 h-6 text-secondary animate-spin flex-shrink-0" />
                  <span className="text-base text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;