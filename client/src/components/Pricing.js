import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiTerminal, FiGithub } from 'react-icons/fi';
import './Pricing.css';

const Pricing = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="pricing" className="pricing section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">Open Source. Free Forever.</h2>
          <p>Meltano is 100% open source and free to use. No hidden fees, no paywalls, no surprises.</p>
        </motion.div>

        <motion.div
          className="pricing-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="pricing-card card popular"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="popular-badge">
              <FiGithub />
              Open Source
            </div>
            <div className="plan-header">
              <h3>Free Forever</h3>
              <p>All features. No credit card required.</p>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">0</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="features-list">
              <li><FiTerminal className="check-icon" /> Unlimited projects & pipelines</li>
              <li><FiTerminal className="check-icon" /> 600+ connectors</li>
              <li><FiTerminal className="check-icon" /> Community support</li>
              <li><FiTerminal className="check-icon" /> Self-host or run anywhere</li>
              <li><FiTerminal className="check-icon" /> Forever free & open source</li>
            </ul>
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiTerminal style={{ marginRight: 8 }} /> Install with pip
            </motion.button>
            <a href="https://github.com/meltano/meltano" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: 12 }}>
              <FiGithub style={{ marginRight: 8 }} /> View on GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="pricing-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Meltano is maintained by the community and always will be free and open source.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 