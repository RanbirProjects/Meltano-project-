import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiPlay, FiTerminal, FiGitBranch } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const scrollToFeatures = () => {
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Extract & Load
              <span className="gradient-text"> with joy</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              CLI & version control for ELT without limitations
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={scrollToFeatures}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try live demo
              </motion.button>
              
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTerminal />
                Install open source
              </motion.button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="stats-label">Loved by data teams</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="floating-elements">
              <motion.div
                className="floating-card card-1"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card-icon">🔗</div>
                <h4>600+ Connectors</h4>
                <p>Sources & destinations</p>
              </motion.div>

              <motion.div
                className="floating-card card-2"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="card-icon">⚡</div>
                <h4>CLI First</h4>
                <p>Version control ready</p>
              </motion.div>

              <motion.div
                className="floating-card card-3"
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="card-icon">🔧</div>
                <h4>Customizable</h4>
                <p>Build your own connectors</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToFeatures}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero; 