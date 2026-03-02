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
        <div className="text-center mb-16">
          <div className="font-mono text-sm text-primary mb-2">Experience</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient-neon">Experience</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto glass-card rounded-xl p-8 lg:p-10 neon-border"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Penetration Tester</h3>
              <p className="text-primary font-mono text-lg">Zerox Innovation Pvt Ltd</p>
              <p className="text-muted-foreground text-sm font-mono mt-1">
                July 2024 – Present
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-4 text-base text-foreground/80 leading-relaxed">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground/60 font-mono mt-8 italic">
            * Confidential client names are not disclosed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;