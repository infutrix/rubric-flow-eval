import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Messy Handwriting Recognition",
    description: "Trained on thousands of real exam papers with diverse handwriting styles, from neat cursive to barely legible scrawl.",
  },
  {
    title: "Strike-out & Correction Detection",
    description: "Identifies crossed-out content and corrections, focusing evaluation on the intended final answer.",
  },
  {
    title: "Multilingual Script Support",
    description: "Handles mixed-language responses common in Indian exams—Hindi, English, regional languages, and code-switching.",
  },
  {
    title: "Layout Understanding",
    description: "Parses diagrams, flowcharts, tables, and mathematical notation in their spatial context.",
  },
  {
    title: "Segment-level Confidence",
    description: "Each recognized segment carries a confidence score, enabling intelligent routing for human review.",
  },
];

const OspreySection = () => {
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
          05 — Osprey© OCR Engine
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-6"
        >
          The Vision Layer
        </motion.h2>

        {/* Research-grade intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="body-large max-w-2xl mb-16"
        >
          Powered by fine-tuned Vision-Language Models including Qwen and PaddleOCR 
          in a hybrid router architecture. Trained on 10,000+ question papers and 
          45,000+ answer sheets.
        </motion.p>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
            >
              <h3 className="font-display text-lg font-medium text-display mb-3">
                {cap.title}
              </h3>
              <p className="body-regular">{cap.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <p className="font-mono text-sm text-accent text-center">
            This is where most systems fail—before intelligence even begins.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OspreySection;
