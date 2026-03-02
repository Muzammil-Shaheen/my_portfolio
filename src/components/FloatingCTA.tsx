import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        // Continuous subtle pulsing animation
        boxShadow: [
          "0 0 0 0 rgba(0, 255, 255, 0.4)",
          "0 0 0 10px rgba(0, 255, 255, 0)",
          "0 0 0 0 rgba(0, 255, 255, 0)"
        ]
      }}
      transition={{
        scale: { delay: 2, type: "spring", stiffness: 200 },
        // Infinite pulse loop
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      // Increased size from w-14/h-14 to w-16/h-16
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-primary flex items-center justify-center neon-glow hover:scale-110 transition-transform"
      title="Secure Your Business"
    >
      {/* Increased icon size from w-6/h-6 to w-8/h-8 */}
      <Shield className="w-8 h-8 text-primary-foreground" />
    </motion.a>
  );
};

export default FloatingCTA;