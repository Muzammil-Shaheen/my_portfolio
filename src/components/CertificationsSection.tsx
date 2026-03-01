import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Loader } from "lucide-react";

const completed = [
  "Google Cybersecurity Course",
  "Cybrary – Ethical Hacking: System Hacking Phases",
  "Security Blue Team – Intro to Digital Forensics",
  "20+ TryHackMe Rooms",
  "Cyber Siege CTF – MCS, NUST",
  "Google Business Profile Specialist (Localo)",
];

const inProgress = ["CPTS", "ISC2 Certification"];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="font-mono text-xs text-primary mb-2">// certifications</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & <span className="text-gradient-neon">Training</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {completed.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-lg px-4 py-3 flex items-center gap-3"
              >
                <Award className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {inProgress.map((cert) => (
              <div
                key={cert}
                className="glass-card rounded-lg px-4 py-3 flex items-center gap-3 neon-border-purple"
              >
                <Loader className="w-4 h-4 text-secondary animate-spin" />
                <span className="text-sm text-foreground">{cert}</span>
                <span className="text-xs text-secondary font-mono">In Progress</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
