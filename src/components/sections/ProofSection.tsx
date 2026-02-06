import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProofSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing surface-sunken">
      <div className="section-container">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="label-mono mb-4"
        >
          09 — Proof
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          Real-world validation in production.
        </motion.h2>

        {/* Case study */}
        <div className="grid-asymmetric-reverse">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="font-display text-xl font-medium text-display mb-2">
                Engineering University Pilot
              </h3>
              <p className="body-small">Programming Examination Evaluation</p>
            </div>

            <div className="space-y-6 mb-12">
              <p className="body-large">
                By leveraging Gradesmith, the institution achieved an 80% reduction in grading time 
                for their programming examinations—processing answer sheets in hours 
                instead of weeks.
              </p>
              <p className="body-regular">
                Current grading accuracy stands at approximately 85%, with continuous 
                improvement through faculty feedback and model updates. The system 
                successfully handles code evaluation, syntax analysis, and logic 
                assessment while maintaining rubric compliance.
              </p>
            </div>

            {/* Process flow - text-based */}
            <div className="border border-border p-6">
              <h4 className="label-mono mb-6">Evaluation Pipeline</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-caption shrink-0 w-16">Input</span>
                  <p className="body-small">Scanned handwritten C programming answer sheets</p>
                </div>
                <div className="h-px bg-border-subtle" />
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-caption shrink-0 w-16">OCR</span>
                  <p className="body-small">Code extracted with syntax highlighting and structure preservation</p>
                </div>
                <div className="h-px bg-border-subtle" />
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-caption shrink-0 w-16">Grading</span>
                  <p className="body-small">
                    Rubric-based scoring: program structure, algorithm, I/O handling, code quality
                  </p>
                </div>
                <div className="h-px bg-border-subtle" />
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-caption shrink-0 w-16">Output</span>
                  <p className="body-small">Itemized scores with justifications aligned to faculty rubric</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-8"
          >
            <div className="border-l-2 border-accent pl-6 py-2">
              <p className="stat-value">80%</p>
              <p className="stat-label">Reduction in grading time</p>
            </div>
            <div className="border-l-2 border-border pl-6 py-2">
              <p className="stat-value">~85%</p>
              <p className="stat-label">Current accuracy</p>
            </div>
            <div className="border-l-2 border-border pl-6 py-2">
              <p className="stat-value">&gt;95%</p>
              <p className="stat-label">Target within 12-18 months</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
