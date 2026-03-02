import { Github, Linkedin, Mail, Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border relative z-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-6">
      {/* Social Links - Increased icon size and spacing */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/Shaheen404"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-7 h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-muzammil-shaheen-924871347/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-7 h-7" />
        </a>
      </div>

      {/* Copyright - Increased font size and weight */}
      <div className="flex items-center gap-3">
        <Shield className="w-6 h-6 text-primary" />
        <span className="font-mono text-base font-bold text-foreground">
          © 2026 Muhammad Muzammil Shaheen. All rights reserved.
        </span>
      </div>

      {/* Tagline - Increased font size */}
      <p className="text-sm text-muted-foreground font-mono font-medium">
        Responsible Disclosure & Ethical Testing Only.
      </p>
    </div>
  </footer>
);

export default Footer;