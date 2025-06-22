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
    { number: "10M+", label: "Records Processed" },
    { number: "99.9%", label: "Uptime" },
    { number: "500+", label: "Happy Customers" },
    { number: "24/7", label: "Support" }
  ];

  const benefits = [
    "Reduce data processing time by 80%",
    "Connect to 100+ data sources instantly",
    "Enterprise-grade security & compliance",
    "Real-time monitoring & alerts",
    "Scalable from startup to enterprise",
    "No-code data pipeline builder"
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
            <h2 className="gradient-text">Why Choose Meltano?</h2>
            <p className="about-description">
              We believe data management should be approachable, powerful, and delightful. 
              Our platform transforms complex workflows into elegant solutions that teams love to use.
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
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 