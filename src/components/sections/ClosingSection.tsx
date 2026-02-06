import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ClosingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing-lg surface-sunken">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Final statement */}
          <h2 className="heading-section mb-8">
            Gradesmith is building the evaluation backbone for modern education.
          </h2>

          <p className="body-large mb-16">
            From handwritten answer sheets to fair, fast, transparent grades—
            at institutional scale.
          </p>

          {/* Understated CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="mailto:pilot@gradesmith.ai"
              className="inline-flex items-center gap-3 font-mono text-sm text-display hover:text-accent transition-colors group"
            >
              <span className="border-b border-current pb-1">Request an institutional pilot</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
