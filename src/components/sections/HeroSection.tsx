import { motion } from "framer-motion";
import heroAbstract from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background image - subtle */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroAbstract}
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="section-container relative z-10 py-24 pt-32 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Institutional label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="label-mono-accent mb-4 md:mb-6"
          >
            Academic Evaluation Infrastructure
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="heading-hero mb-6 md:mb-8"
          >
            From Pen to Grade
          </motion.h1>

          {/* Subtext - confident, minimal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="body-large max-w-2xl mb-4 md:mb-6"
          >
            AI that reads handwriting, understands context, and delivers fast, 
            fair academic evaluation.
          </motion.p>

          {/* Supporting micro-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="body-small"
          >
            Built for real exams. Designed for real institutions.
          </motion.p>
        </motion.div>

        {/* Scroll indicator - hidden on small mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 md:bottom-12 left-6 lg:left-8 hidden sm:block"
        >
          <div className="flex items-center gap-3">
            <div className="w-px h-12 bg-border-strong" />
            <span className="label-mono">Scroll to explore</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
