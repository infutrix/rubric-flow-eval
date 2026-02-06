import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    name: "Freemium",
    description: "1-week unlimited grading for evaluation",
    detail: "Full access to core features for institutional pilots",
  },
  {
    name: "Tiered SaaS",
    description: "Teacher, School, District, Enterprise",
    detail: "Scaled pricing with integrations and analytics",
  },
  {
    name: "Enterprise Contracts",
    description: "Long-term institutional partnerships",
    detail: "Custom integrations, dedicated support, volume pricing",
  },
];

const BusinessSection = () => {
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
          12 — Business Model
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          Sustainable infrastructure pricing.
        </motion.h2>

        {/* Tiers - simple list, not SaaS cards */}
        <div className="max-w-2xl">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className={`py-8 ${index < tiers.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-baseline gap-4 mb-2">
                <h3 className="font-display text-xl font-medium text-display">{tier.name}</h3>
                <span className="font-mono text-xs text-caption uppercase tracking-wider">{tier.description}</span>
              </div>
              <p className="body-regular">{tier.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
