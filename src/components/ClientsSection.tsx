import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Building2, ShoppingCart, Landmark, Building, Globe } from "lucide-react";

const clients = [
  { icon: Rocket, label: "Startups" },
  { icon: Building2, label: "SaaS Companies" },
  { icon: ShoppingCart, label: "E-commerce" },
  { icon: Landmark, label: "Fintech & Banks" },
  { icon: Building, label: "Government Contractors" },
  { icon: Globe, label: "International Agencies" },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="font-mono text-xs text-primary mb-2">// clients</div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Who I <span className="text-gradient-neon">Work With</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          {clients.map((client, i) => (
            <motion.div
              key={client.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 text-center group hover:neon-border transition-all duration-300"
            >
              <client.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-foreground">{client.label}</span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm font-mono">
          "Flexible pricing for startups. Scalable security for enterprises."
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
