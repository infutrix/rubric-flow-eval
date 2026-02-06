import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const triageItems = [
  {
    level: "High Confidence",
    percentage: "~70%",
    action: "Auto-graded with full audit trail",
    variant: "high" as const,
  },
  {
    level: "Medium Confidence",
    percentage: "~20%",
    action: "Flagged for quick faculty verification",
    variant: "medium" as const,
  },
  {
    level: "Low Confidence",
    percentage: "~10%",
    action: "Mandatory human review required",
    variant: "low" as const,
  },
];

const features = [
  {
    title: "Faculty Override",
    description: "Teachers can adjust any grade with full control. The system records corrections for continuous improvement.",
  },
  {
    title: "Rubric Tuning",
    description: "Faculty refine rubrics based on edge cases encountered. The model adapts to institutional standards.",
  },
  {
    title: "Learning from Corrections",
    description: "Every human intervention improves the model. Institutional knowledge compounds over time.",
  },
];

const HumanLoopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getVariantClasses = (variant: "high" | "medium" | "low") => {
    switch (variant) {
      case "high":
        return "border-l-emerald-500 bg-emerald-50/50";
      case "medium":
        return "border-l-amber-500 bg-amber-50/50";
      case "low":
        return "border-l-red-500 bg-red-50/50";
    }
  };

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
          07 — Human-in-the-Loop
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-6"
        >
          Designed for human oversight, not replacement.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="body-large max-w-2xl mb-16"
        >
          Gradesmith assists academic judgment. Every evaluation is transparent, 
          auditable, and subject to faculty review.
        </motion.p>

        {/* Confidence-based triage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="label-mono-accent mb-6">Confidence-Based Triage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {triageItems.map((item, index) => (
              <div
                key={item.level}
                className={`border-l-4 pl-6 py-4 ${getVariantClasses(item.variant)}`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-display font-medium text-display">{item.level}</span>
                  <span className="font-mono text-sm text-caption">{item.percentage}</span>
                </div>
                <p className="body-small">{item.action}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider-institutional mb-16" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <h3 className="font-display text-lg font-medium text-display mb-3">
                {feature.title}
              </h3>
              <p className="body-regular">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HumanLoopSection;
