import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center neon-glow hover:scale-110 transition-transform"
      title="Secure Your Business"
    >
      <Shield className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  );
};

export default FloatingCTA;
