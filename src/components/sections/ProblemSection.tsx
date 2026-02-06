import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "25B+",
    label: "Hours spent grading handwritten exams globally each year",
  },
  {
    value: "8 mo",
    label: "Per year lost by Indian faculty to assessment work",
  },
  {
    value: "65%",
    label: "Of faculty report excessive workload from evaluation",
  },
];

const issues = [
  {
    title: "Delayed Feedback",
    description: "Results take weeks to release, breaking the learning cycle and increasing re-evaluation costs.",
  },
  {
    title: "Human Bias",
    description: "Grading is subjective, influenced by fatigue, handwriting legibility, and unconscious patterns.",
  },
  {
    title: "Data Void",
    description: "Institutions lack actionable insights into student performance and learning gaps.",
  },
  {
    title: "Opportunity Cost",
    description: "Countless hours spent grading instead of teaching, researching, or mentoring.",
  },
];

const ProblemSection = () => {
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
          01 — The Problem
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          Academic assessment is structurally broken—not just inconvenient.
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="border-l-2 border-primary pl-6 py-2"
            >
              <p className="stat-value">{stat.value}</p>
              <p className="body-small mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-institutional mb-16" />

        {/* Issues grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {issues.map((issue, index) => (
            <motion.div
              key={issue.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <h3 className="heading-subsection mb-3">{issue.title}</h3>
              <p className="body-regular">{issue.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
