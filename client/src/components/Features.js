import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGitBranch, FiLink, FiTerminal, FiSettings, FiCloud, FiUsers } from 'react-icons/fi';
import './Features.css';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const features = [
    {
      icon: <FiGitBranch />,
      title: "Open Source ELT",
      description: "Free, flexible, and extensible. Own your pipelines and data.",
      color: "#667eea"
    },
    {
      icon: <FiLink />,
      title: "600+ Connectors",
      description: "Connect to any data source or destination with ease.",
      color: "#764ba2"
    },
    {
      icon: <FiTerminal />,
      title: "CLI & Version Control",
      description: "Manage ELT with code, not clicks. Git-friendly workflows.",
      color: "#f093fb"
    },
    {
      icon: <FiSettings />,
      title: "Customizable Pipelines",
      description: "Mix, match, and extend. Build exactly what you need.",
      color: "#4facfe"
    },
    {
      icon: <FiCloud />,
      title: "Orchestrate Anywhere",
      description: "Run locally, in the cloud, or on your own infrastructure.",
      color: "#43e97b"
    },
    {
      icon: <FiUsers />,
      title: "Community Driven",
      description: "Backed by a passionate open source community.",
      color: "#fa709a"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="features" className="features section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">Why Meltano?</h2>
          <p>Open source ELT that fits your workflow, not the other way around.</p>
        </motion.div>

        <motion.div
          className="features-grid grid grid-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card card"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="feature-icon"
                style={{ color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="features-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Docs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 