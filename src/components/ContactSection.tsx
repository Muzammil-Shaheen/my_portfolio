import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // Note: Form submission logic would go here
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
          className="max-w-5xl mx-auto rounded-2xl p-10 md:p-14 neon-border relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, hsl(228 25% 8%) 0%, hsl(228 25% 5%) 100%)",
          }}
        >
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 leading-tight">
              Before Attackers Find the Weakness —{" "}
              <span className="text-gradient-neon">Let's Fix It.</span>
            </h2>
            <p className="text-center text-foreground/80 text-xl max-w-2xl mx-auto mb-12 font-mono">
                Contact me directly to discuss securing your infrastructure.
            </p>

            {/* Direct Email Links */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-6 mb-16">
              <a
                href="mailto:shah33nt3ch@gmail.com?subject=VAPT Strategy Call Request"
                className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base neon-glow hover:opacity-90 transition-all text-center flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" /> Request VAPT Strategy Call
              </a>
              <a
                href="mailto:shah33nt3ch@gmail.com?subject=SEO Optimization Request"
                className="px-8 py-4 rounded-lg neon-border-purple text-secondary font-semibold text-base hover:bg-secondary/10 transition-all text-center flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" /> Start SEO Optimization
              </a>
            </div>

            {/* Contact Form for those who prefer it */}
            <div id="contact-form">
              <h3 className="text-center text-lg font-mono text-primary mb-8">
                Or fill out the form below
              </h3>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="glass-card rounded-lg px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="glass-card rounded-lg px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="glass-card rounded-lg px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary md:col-span-2"
                />
                <select
                  required
                  className="glass-card rounded-lg px-5 py-4 text-base text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary bg-transparent md:col-span-2"
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
                  rows={5}
                  className="glass-card rounded-lg px-5 py-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary md:col-span-2 resize-none"
                />
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base neon-glow hover:opacity-90 transition-all flex items-center justify-center gap-3"
                  >
                    {submitted ? (
                      "Message Sent ✓"
                    ) : (
                      <>
                        <Send className="w-5 h-5" /> Submit Request
                      </>
                    )}
                  </button>
                </div>
                <p className="md:col-span-2 text-center text-sm text-muted-foreground/70 font-mono mt-4">
                  Confidentiality Guaranteed. Responsible Disclosure & Ethical Testing Only.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;