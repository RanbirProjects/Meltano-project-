import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const stats = [
    { number: "7k+", label: "GitHub Stars" },
    { number: "600+", label: "Connectors" },
    { number: "300+", label: "Contributors" },
    { number: "1M+", label: "Downloads" }
  ];

  const benefits = [
    "Open source, forever free",
    "Built for developers & data teams",
    "Community-driven innovation",
    "CLI-first, code-based workflows",
    "Composable, modular pipelines",
    "Transparent, extensible, flexible"
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="gradient-text">Open Source for Data Teams</h2>
            <p className="about-description">
              Meltano is the open source platform for building, running, and orchestrating ELT pipelines. Built for developers, powered by the community, and designed for flexibility.
            </p>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FiCheckCircle className="check-icon" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="stat-number gradient-text">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 