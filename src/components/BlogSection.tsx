import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ArrowRight } from "lucide-react";

const categories = [
  {
    title: "OWASP & Vulnerability Writeups",
    desc: "Deep dives into real-world vulnerabilities and their exploitation techniques.",
  },
  {
    title: "AI + Cybersecurity Research",
    desc: "Exploring the intersection of artificial intelligence and offensive security.",
  },
  {
    title: "SEO Case Studies",
    desc: "Data-driven insights on search optimization and technical SEO strategies.",
  },
  {
    title: "Bug Bounty Insights",
    desc: "Lessons learned and methodologies from bug bounty programs.",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="font-mono text-xs text-primary mb-2">// blog</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Knowledge <span className="text-gradient-neon">Base</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">
            Technical insights, case studies, and research drawn from real-world offensive security experience.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card rounded-xl p-6 group hover:neon-border transition-all duration-300 cursor-pointer"
            >
              <FileText className="w-5 h-5 text-primary mb-3" />
              <h3 className="font-bold text-foreground mb-1">{cat.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cat.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-primary group-hover:gap-2 transition-all">
                Read Articles <ArrowRight className="w-3 h-3" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
