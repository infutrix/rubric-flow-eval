import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoGradesmith from "@/assets/logo-gradesmith.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#architecture", label: "How it works" },
    { href: "#proof", label: "Case Study" },
    { href: "#engagement", label: "Engagement" },
  ];

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
        <div className="section-container py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Enhanced presentation */}
            <a href="#" className="flex items-center">
              <img
                src={logoGradesmith}
                alt="Gradesmith"
                className="h-10 md:h-12 w-auto transition-transform hover:scale-105 bg-blue-900 py-2 pb-3 px-4"
              />
            </a>

            {/* Nav links - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-wider text-caption hover:text-display transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://infutrix.com/contact-us?utm_source=gradesmith_website&utm_medium=referral&utm_campaign=request_pilot"
                className="font-mono text-xs uppercase tracking-wider px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
              >
                Request Pilot
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-display"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-6 space-y-4 border-t border-border mt-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block font-mono text-sm uppercase tracking-wider text-caption hover:text-display transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="https://infutrix.com/contact-us?utm_source=gradesmith_website"
                    className="block font-mono text-sm uppercase tracking-wider text-accent py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Pilot →
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navigation;
