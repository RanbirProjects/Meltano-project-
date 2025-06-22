import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheck, FiStar } from 'react-icons/fi';
import './Pricing.css';

const Pricing = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 5 team members",
        "10GB data storage",
        "Basic integrations",
        "Email support",
        "Standard analytics"
      ],
      popular: false,
      color: "#667eea"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Up to 25 team members",
        "100GB data storage",
        "Advanced integrations",
        "Priority support",
        "Advanced analytics",
        "Custom dashboards",
        "API access"
      ],
      popular: true,
      color: "#764ba2"
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 299,
      yearlyPrice: 2990,
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "All integrations",
        "24/7 phone support",
        "Custom analytics",
        "White-label options",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      popular: false,
      color: "#f093fb"
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
    <section id="pricing" className="pricing section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your needs. No hidden fees, no surprises.</p>
        </motion.div>

        <motion.div
          className="pricing-toggle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={!isYearly ? 'active' : ''}>Monthly</span>
          <motion.button
            className="toggle-button"
            onClick={() => setIsYearly(!isYearly)}
            animate={{ x: isYearly ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <div className="toggle-slider" />
          </motion.button>
          <span className={isYearly ? 'active' : ''}>
            Yearly
            <span className="save-badge">Save 20%</span>
          </span>
        </motion.div>

        <motion.div
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            {plans.map((plan, index) => (
              <motion.div
                key={`${plan.name}-${isYearly}`}
                className={`pricing-card card ${plan.popular ? 'popular' : ''}`}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                layout
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <FiStar />
                    Most Popular
                  </div>
                )}
                
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="price">
                    <span className="currency">$</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={isYearly ? 'yearly' : 'monthly'}
                        className="amount"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className="period">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                </div>

                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <FiCheck className="check-icon" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ '--accent-color': plan.color }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="pricing-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <a href="#contact" className="contact-link">Need a custom plan? Contact us</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing; 