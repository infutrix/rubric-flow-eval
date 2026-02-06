import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stakeholders = [
  {
    label: "For Institutions",
    benefits: [
      { title: "Faster Result Cycles", detail: "Weeks reduced to hours. Meet deadlines consistently." },
      { title: "60–70% Cost Reduction", detail: "Lower evaluation costs at scale without quality compromise." },
      { title: "Audit-Ready Grading", detail: "Full transparency and documentation for compliance and appeals." },
    ],
  },
  {
    label: "For Teachers",
    benefits: [
      { title: "200+ Hours Saved Per Year", detail: "Reclaim time for teaching, research, and mentoring." },
      { title: "Reduced Burnout", detail: "Eliminate the repetitive strain of high-volume grading." },
      { title: "Focus on Pedagogy", detail: "Spend energy on instruction, not administration." },
    ],
  },
  {
    label: "For Students",
    benefits: [
      { title: "Faster Results", detail: "Receive grades in days, not weeks. Timely feedback accelerates learning." },
      { title: "Fair Evaluation", detail: "Consistent scoring without bias from fatigue or handwriting prejudice." },
      { title: "Actionable Feedback", detail: "Understand exactly where marks were lost and why." },
    ],
  },
];

const OutputsSection = () => {
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
          08 — Outputs That Matter
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          Value delivered to every stakeholder.
        </motion.h2>

        {/* Three columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {stakeholders.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + groupIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="label-mono-accent mb-8">{group.label}</h3>
              <div className="space-y-8">
                {group.benefits.map((benefit, index) => (
                  <div key={index}>
                    <h4 className="font-display text-lg font-medium text-display mb-2">
                      {benefit.title}
                    </h4>
                    <p className="body-regular">{benefit.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutputsSection;
