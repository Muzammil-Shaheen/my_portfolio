import { Github, Linkedin, Mail, Shield } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border relative z-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Shaheen404"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="#contact"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Shield className="w-4 h-4 text-primary" />
        <span className="font-mono text-sm text-muted-foreground">
          © 2023–2026 Muhammad Muzammil Shaheen. All rights reserved.
        </span>
      </div>
      <p className="text-xs text-muted-foreground/50 font-mono">
        Responsible Disclosure & Ethical Testing Only.
      </p>
    </div>
  </footer>
);

export default Footer;
