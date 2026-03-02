import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto" // Increased max-width slightly for better visual balance
        >
          <div className="font-mono text-sm text-primary mb-2">About</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            From Curiosity to{" "}
            <span className="text-gradient-neon">Controlled Exploitation</span>
          </h2>

          <div className="glass-card rounded-xl p-8 lg:p-10">
            <div className="flex flex-col gap-6 items-start">
              {/* Increased text size and line height for readability */}
              <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                <p>
                  I began my cybersecurity journey in 2023 as a penetration tester, driven by a
                  fascination with how systems fail and how they can be fortified before
                  attackers strike.
                </p>
                <p>
                  Inspired by uncovering logic flaws and breaking misconfigurations, I've since
                  executed <span className="text-primary font-semibold">large-scale VAPT engagements</span> across
                  fintech, government, medical, and telecom sectors.
                </p>
                <p className="font-mono text-primary text-xl border-l-4 border-primary pl-6 py-1">
                  "Exploit code, not people."
                </p>
                <p>
                  My focus is protecting digital infrastructure before attackers breach it —
                  combining deep hands-on experience with AI-powered security solutions to serve
                  businesses globally from Pakistan.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;