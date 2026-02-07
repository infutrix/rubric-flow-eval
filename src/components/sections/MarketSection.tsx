import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const markets = [
  {
    segment: "K-12 Schools",
    detail: "Public and private school systems worldwide",
  },
  {
    segment: "Test Prep & Coaching",
    detail: "Competitive exam and standardized test preparation",
  },
  {
    segment: "Higher Education",
    detail: "Universities, colleges, and professional schools",
  },
  {
    segment: "Examination Boards",
    detail: "National and regional certification bodies",
  },
];

const drivers = [
  "Teacher shortages across institutions",
  "Increasing compliance and audit requirements",
  "Scale requirements beyond manual capacity",
  "Demand for faster feedback cycles",
];

const MarketSection = () => {
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
          11 — Market & Deployment
        </motion.p>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="heading-section max-w-3xl mb-16"
        >
          Built for institutional scale.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Target markets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="label-mono-accent mb-8">Target Markets</h3>
            <div className="space-y-6">
              {markets.map((market, index) => (
                <div key={index} className="border-l-2 border-border pl-6 py-2">
                  <p className="font-display text-lg font-medium text-display">{market.segment}</p>
                  <p className="body-small mt-1">{market.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Market drivers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="label-mono-accent mb-8">Market Drivers</h3>
            <ul className="space-y-4">
              {drivers.map((driver, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <span className="body-regular">{driver}</span>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
