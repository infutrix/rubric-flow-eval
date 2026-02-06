import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SemanticRubricSection = () => {
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
          06 — Understanding & Intelligence
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          Beyond keyword matching—true semantic evaluation.
        </motion.h2>

        {/* Two asymmetric columns */}
        <div className="grid-asymmetric">
          {/* Left: Semantic Understanding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="label-mono-accent mb-6">Semantic Understanding</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-border pl-6 py-2">
              <p className="font-display text-lg text-display font-medium mb-2">
                Evaluates meaning, not keywords
              </p>
              <p className="body-regular">
                The system comprehends syntax, semantics, and pragmatics—understanding 
                what the student meant, not just what they wrote.
              </p>
            </div>
            <div className="border-l-2 border-border pl-6 py-2">
              <p className="font-display text-lg text-display font-medium mb-2">
                Recognizes equivalent reasoning paths
              </p>
              <p className="body-regular">
                Multiple correct approaches receive appropriate credit. The model 
                understands that different methods can reach the same valid conclusion.
              </p>
            </div>
            <div className="border-l-2 border-border pl-6 py-2">
              <p className="font-display text-lg text-display font-medium mb-2">
                Awards partial credit intelligently
              </p>
              <p className="body-regular">
                Step-by-step evaluation recognizes partially correct work, 
                giving students credit for demonstrated understanding.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider-institutional my-16" />

        {/* Second asymmetric grid - Rubric Intelligence */}
        <div className="grid-asymmetric">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="label-mono-accent mb-6">Rubric Intelligence</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="border-l-2 border-accent pl-6 py-2">
              <p className="font-display text-lg text-display font-medium mb-2">
                Faculty-defined evaluation criteria
              </p>
              <p className="body-regular">
                Rubrics are created by subject experts. The AI follows their 
                specifications exactly—no independent interpretation.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-6 py-2">
              <p className="font-display text-lg text-display font-medium mb-2">
                Step-wise and method-based grading
              </p>
              <p className="body-regular">
                Complex problems are evaluated at each step, with credit allocated 
                according to the defined rubric structure.
              </p>
            </div>
            <div className="border-l-2 border-accent pl-6 py-2">
              <p className="font-display text-lg text-display font-medium mb-2">
                Full transparency and consistency
              </p>
              <p className="body-regular">
                Every grade includes rubric-aligned justifications. The same answer 
                always receives the same score.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="font-mono text-sm text-caption text-center">
            The model follows the rubric—not its own opinion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SemanticRubricSection;
