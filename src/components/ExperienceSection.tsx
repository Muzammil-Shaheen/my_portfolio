import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle } from "lucide-react";

const highlights = [
  "Led 150+ VAPT engagements across diverse sectors",
  "Identified complex vulnerabilities: IDOR, SQLi, authentication bypass",
  "Delivered structured remediation reports to stakeholders",
  "Served fintech, medical, e-commerce, government, telecom & real estate",
  "Assisted in improving internal testing methodologies",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="font-mono text-xs text-primary mb-2">// experience</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="text-gradient-neon">Experience</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto glass-card rounded-xl p-6 md:p-8 neon-border"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Penetration Tester</h3>
              <p className="text-primary font-mono text-sm">Zerox Innovation Pvt Ltd</p>
              <p className="text-muted-foreground text-xs font-mono mt-1">
                July 2024 – Present
              </p>
            </div>
          </div>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground/50 font-mono mt-6 italic">
            * Confidential client names are not disclosed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
