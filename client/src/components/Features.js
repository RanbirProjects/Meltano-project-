import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDatabase, FiZap, FiShield, FiTrendingUp, FiUsers, FiCode } from 'react-icons/fi';
import './Features.css';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const features = [
    {
      icon: <FiDatabase />,
      title: "Smart Data Integration",
      description: "Connect to any data source with our intuitive interface. No complex configurations needed.",
      color: "#667eea"
    },
    {
      icon: <FiZap />,
      title: "Lightning Fast Processing",
      description: "Process millions of records in seconds with our optimized data pipeline engine.",
      color: "#764ba2"
    },
    {
      icon: <FiShield />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications.",
      color: "#f093fb"
    },
    {
      icon: <FiTrendingUp />,
      title: "Real-time Analytics",
      description: "Get instant insights with live dashboards and automated reporting.",
      color: "#4facfe"
    },
    {
      icon: <FiUsers />,
      title: "Team Collaboration",
      description: "Work together seamlessly with role-based access and real-time updates.",
      color: "#43e97b"
    },
    {
      icon: <FiCode />,
      title: "Developer Friendly",
      description: "Extend functionality with our comprehensive API and plugin ecosystem.",
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
          <h2 className="gradient-text">Powerful Features</h2>
          <p>Everything you need to transform your data workflows</p>
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
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 