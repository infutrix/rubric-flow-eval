import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const notThisList = [
  { label: "Not OCR", detail: "Goes beyond text extraction" },
  { label: "Not essay grading", detail: "Handles all exam formats" },
  { label: "Not workflow software", detail: "Deep evaluation intelligence" },
];

const thisIsList = [
  { label: "Vision + Language + Rubric Intelligence", detail: "Multi-modal understanding of handwritten responses" },
  { label: "Mixed-format exam support", detail: "Code, diagrams, equations, text—all in one pipeline" },
  { label: "Human-assistive design", detail: "Augments faculty judgment, doesn't replace it" },
];

const DefinitionSection = () => {
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
          03 — Definition
        </motion.p>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="heading-section max-w-4xl">
            Gradesmith is an AI evaluation infrastructure—
            <span className="text-accent">not a grading tool.</span>
          </h2>
        </motion.div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Not this */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-border-strong" />
              <h3 className="label-mono">Not This</h3>
            </div>
            <div className="space-y-6">
              {notThisList.map((item, index) => (
                <div key={index} className="border-l-2 border-border pl-6 py-2">
                  <p className="font-display text-lg text-display font-medium">{item.label}</p>
                  <p className="body-small mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Instead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-accent" />
              <h3 className="label-mono-accent">Instead</h3>
            </div>
            <div className="space-y-6">
              {thisIsList.map((item, index) => (
                <div key={index} className="border-l-2 border-accent pl-6 py-2">
                  <p className="font-display text-lg text-display font-medium">{item.label}</p>
                  <p className="body-small mt-1">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DefinitionSection;
