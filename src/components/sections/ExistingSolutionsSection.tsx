import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const westernIssues = [
  "Fail with Indian handwriting nuances",
  "Assume clean, structured layouts",
  "Essay- or MCQ-centric models",
  "Black-box grading without transparency",
  "Expensive without local context",
];

const indianIssues = [
  "Limited to K–12 assessment",
  "Break on flowcharts, diagrams, strike-outs",
  "Rigid, rule-based evaluation",
  "Cannot handle mixed-format exams",
  "Lack semantic understanding",
];

const ExistingSolutionsSection = () => {
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
          02 — Existing Solutions
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          Why current tools fail at real-world evaluation.
        </motion.h2>

        {/* Two columns - not cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Western platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="label-mono-accent mb-6">Western Platforms</h3>
            <ul className="space-y-4">
              {westernIssues.map((issue, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-border-strong mt-2.5 shrink-0" />
                  <span className="body-regular">{issue}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Indian solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="label-mono-accent mb-6">Indian Solutions</h3>
            <ul className="space-y-4">
              {indianIssues.map((issue, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-border-strong mt-2.5 shrink-0" />
                  <span className="body-regular">{issue}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="heading-subsection text-center max-w-2xl mx-auto">
            Grading real exams is harder than grading ideal inputs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExistingSolutionsSection;
