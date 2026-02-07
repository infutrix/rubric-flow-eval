import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const tiers = [
  {
    phase: "01",
    name: "Pilot",
    duration: "2–4 weeks",
    description: "Evaluate Gradesmith with a controlled sample of answer sheets from your institution.",
    activities: [
      "Initial rubric calibration with faculty",
      "Sample batch processing (500–1000 sheets)",
      "Accuracy benchmarking against manual grading",
      "Faculty feedback integration",
    ],
    outcome: "Validated proof-of-concept with your actual exam formats",
  },
  {
    phase: "02",
    name: "Integration",
    duration: "4–8 weeks",
    description: "Connect Gradesmith to your existing evaluation infrastructure and workflows.",
    activities: [
      "ERP/LMS integration setup",
      "Custom rubric templates for departments",
      "Human review workflow configuration",
      "Staff training and onboarding",
    ],
    outcome: "Production-ready deployment with your institutional systems",
  },
  {
    phase: "03",
    name: "Scale",
    duration: "Ongoing",
    description: "Full institutional deployment with continuous improvement and support.",
    activities: [
      "High-volume examination processing",
      "Continuous model improvement from feedback",
      "Analytics and reporting dashboards",
      "Dedicated support and SLA guarantees",
    ],
    outcome: "Sustained operational efficiency at institutional scale",
  },
];

const EngagementSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="engagement" className="section-spacing surface-sunken">
      <div className="section-container">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="label-mono mb-4"
        >
          12 — Engagement Model
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-6"
        >
          How we work with institutions.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="body-large max-w-2xl mb-16"
        >
          A structured, phased approach that prioritizes validation before commitment.
        </motion.p>

        {/* Tiers - Timeline style */}
        <div className="space-y-0">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.phase}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < tiers.length - 1 && (
                <div className="absolute left-4 md:left-6 top-16 bottom-0 w-px bg-border hidden md:block" />
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-12 border-b border-border last:border-b-0">
                {/* Phase indicator */}
                <div className="md:col-span-1 flex items-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 border-accent flex items-center justify-center bg-background relative z-10">
                    <span className="font-mono text-xs md:text-sm font-medium text-accent">{tier.phase}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-11 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
                  {/* Header */}
                  <div className="lg:col-span-1">
                    <h3 className="font-display text-xl md:text-2xl font-medium text-display mb-1">
                      {tier.name}
                    </h3>
                    <p className="font-mono text-xs text-caption uppercase tracking-wider">
                      {tier.duration}
                    </p>
                    <p className="body-regular mt-4">{tier.description}</p>
                  </div>

                  {/* Activities */}
                  <div className="lg:col-span-1">
                    <p className="font-mono text-xs text-caption uppercase tracking-wider mb-4">Activities</p>
                    <ul className="space-y-3">
                      {tier.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="body-small text-body">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="lg:col-span-1">
                    <p className="font-mono text-xs text-caption uppercase tracking-wider mb-4">Outcome</p>
                    <p className="body-regular font-medium text-display">{tier.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="body-small text-center max-w-2xl mx-auto">
            Every engagement begins with a pilot. No long-term commitment required until you've validated the results with your own examinations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EngagementSection;
