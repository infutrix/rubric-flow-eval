import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const layers = [
  {
    number: "01",
    title: "Answer Sheet Ingestion & Anonymization",
    function: "Secure upload and identity masking",
    why: "Ensures unbiased evaluation from the start",
  },
  {
    number: "02",
    title: "Osprey© OCR Engine",
    function: "Vision layer for handwriting recognition",
    why: "Handles messy writing, strike-outs, and complex layouts",
    isHighlighted: true,
  },
  {
    number: "03",
    title: "Semantic & Reasoning Engine",
    function: "Understands meaning, not just text",
    why: "Evaluates logic, syntax, and context",
  },
  {
    number: "04",
    title: "Rubric Intelligence Layer",
    function: "Maps responses to faculty-defined criteria",
    why: "Consistent, transparent scoring logic",
  },
  {
    number: "05",
    title: "Grading & Confidence Engine",
    function: "Scores with confidence thresholds",
    why: "Routes uncertain answers for human review",
  },
  {
    number: "06",
    title: "Human Review & Intervention",
    function: "Faculty oversight and correction",
    why: "AI learns from every correction",
  },
  {
    number: "07",
    title: "Results, Insights & Personalization",
    function: "Grades, analytics, and student feedback",
    why: "Actionable data for institutions and learners",
  },
];

const ArchitectureSection = () => {
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
          04 — System Architecture
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          How Gradesmith Works
        </motion.h2>

        {/* Vertical pipeline - NOT horizontal SaaS diagram */}
        <div className="max-w-3xl mx-auto">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.number}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line */}
              {index < layers.length - 1 && (
                <div className="absolute left-6 top-full w-px h-6 bg-border-strong" />
              )}

              <div 
                className={`flex gap-6 py-6 ${
                  layer.isHighlighted 
                    ? "bg-secondary -mx-4 px-4 border-l-2 border-accent" 
                    : ""
                }`}
              >
                {/* Layer number */}
                <div className="shrink-0">
                  <span className="font-mono text-sm text-caption">{layer.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-lg font-medium text-display mb-2">
                    {layer.title}
                  </h3>
                  <p className="body-regular mb-1">{layer.function}</p>
                  <p className="body-small">{layer.why}</p>
                </div>
              </div>

              {/* Divider */}
              {index < layers.length - 1 && !layer.isHighlighted && (
                <div className="h-px bg-border-subtle" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
