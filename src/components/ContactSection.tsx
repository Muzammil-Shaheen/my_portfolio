import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 neon-border relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(228 25% 8%) 0%, hsl(228 25% 5%) 100%)",
          }}
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/5 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-3">
              Before Attackers Find the Weakness —{" "}
              <span className="text-gradient-neon">Let's Fix It.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 mb-12">
              <a
                href="#contact-form"
                className="px-7 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm neon-glow hover:opacity-90 transition-all text-center"
              >
                Request VAPT Strategy Call
              </a>
              <a
                href="#contact-form"
                className="px-7 py-3 rounded-lg neon-border-purple text-secondary font-semibold text-sm hover:bg-secondary/10 transition-all text-center"
              >
                Start SEO Optimization
              </a>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <select
                  required
                  className="glass-card rounded-lg px-4 py-3 text-sm text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary bg-transparent"
                >
                  <option value="" className="bg-card">Service Needed</option>
                  <option value="vapt" className="bg-card">Web App Penetration Testing</option>
                  <option value="api" className="bg-card">API Security Testing</option>
                  <option value="android" className="bg-card">Android App Security</option>
                  <option value="network" className="bg-card">Network Security</option>
                  <option value="ai" className="bg-card">AI Security Tools</option>
                  <option value="seo" className="bg-card">SEO Optimization</option>
                </select>
                <textarea
                  placeholder="Brief description of your security needs..."
                  rows={4}
                  className="glass-card rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary md:col-span-2 resize-none"
                />
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold text-sm neon-glow hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      "Message Sent ✓"
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Submit
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
