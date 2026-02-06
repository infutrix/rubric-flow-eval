import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoGradesmith from "@/assets/logo-gradesmith.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-sm border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <img 
                src={logoGradesmith} 
                alt="Gradesmith" 
                className="h-8 w-auto"
              />
            </a>

            {/* Nav links - minimal */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#architecture" className="font-mono text-xs uppercase tracking-wider text-caption hover:text-display transition-colors">
                How it works
              </a>
              <a href="#proof" className="font-mono text-xs uppercase tracking-wider text-caption hover:text-display transition-colors">
                Case Study
              </a>
              <a 
                href="mailto:pilot@gradesmith.ai" 
                className="font-mono text-xs uppercase tracking-wider text-accent hover:text-display transition-colors"
              >
                Request Pilot
              </a>
            </nav>

            {/* Mobile - just CTA */}
            <div className="md:hidden">
              <a 
                href="mailto:pilot@gradesmith.ai" 
                className="font-mono text-xs uppercase tracking-wider text-accent"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navigation;
