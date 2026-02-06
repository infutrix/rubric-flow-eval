import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Personalized Learning Paths",
    description: "AI-generated study recommendations based on actual exam performance, not generic content.",
  },
  {
    title: "Gap Analysis",
    description: "Identify specific knowledge gaps from evaluation data. Target weaknesses with precision.",
  },
  {
    title: "Competency-Based Learning",
    description: "Supports modern educational frameworks focused on mastery and personalized progression.",
  },
];

const MentorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing">
      <div className="section-container">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="label-mono mb-4"
        >
          10 — Future Expansion
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-6"
        >
          Personal AI Mentor
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="body-large max-w-2xl mb-16"
        >
          Evaluation data becomes the foundation for personalized learning—
          recommendations built on actual performance, not assumptions.
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="border-l-2 border-border-subtle pl-6 py-2"
            >
              <h3 className="font-display text-lg font-medium text-display mb-3">
                {feature.title}
              </h3>
              <p className="body-regular">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Subtle indicator this is expansion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16"
        >
          <span className="layer-indicator">Roadmap • 2025–2026</span>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorSection;
