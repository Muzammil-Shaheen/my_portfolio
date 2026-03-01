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
          className="max-w-3xl mx-auto"
        >
          <div className="font-mono text-xs text-primary mb-2">About</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            From Curiosity to{" "}
            <span className="text-gradient-neon">Controlled Exploitation</span>
          </h2>

          <div className="glass-card rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img
                src="/assets/profile.jpg"
                alt="Muhammad Muzammil Shaheen"
                className="w-36 h-36 rounded-xl object-cover shrink-0 border border-primary/30 shadow-[0_0_16px_hsl(190_100%_50%/0.15)]"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I began my cybersecurity journey in 2023 as a penetration tester, driven by a
                  fascination with how systems fail — and how they can be fortified before
                  attackers strike.
                </p>
                <p>
                  Inspired by uncovering logic flaws and breaking misconfigurations, I've since
                  executed <span className="text-primary font-semibold">large-scale VAPT engagements</span> across
                  fintech, government, medical, and telecom sectors.
                </p>
                <p className="font-mono text-primary text-sm border-l-2 border-primary pl-4">
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
