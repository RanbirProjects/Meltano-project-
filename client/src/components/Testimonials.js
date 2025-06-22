import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Engineer",
      company: "TechFlow Inc.",
      avatar: "👩‍💻",
      rating: 5,
      text: "Meltano has completely transformed how we handle data pipelines. The interface is so intuitive that our entire team can now contribute to data workflows without extensive training.",
      color: "#667eea"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      avatar: "👨‍💼",
      rating: 5,
      text: "We've reduced our data processing time by 80% since switching to Meltano. The real-time analytics and beautiful dashboards have made data-driven decisions much easier.",
      color: "#764ba2"
    },
    {
      name: "Emily Rodriguez",
      role: "Analytics Manager",
      company: "DataCorp",
      avatar: "👩‍🔬",
      rating: 5,
      text: "The customer support is exceptional, and the platform's reliability is outstanding. We've had zero downtime in the past 6 months. Highly recommended!",
      color: "#f093fb"
    },
    {
      name: "David Kim",
      role: "Senior Developer",
      company: "InnovateTech",
      avatar: "👨‍💻",
      rating: 5,
      text: "As a developer, I love how extensible the platform is. The API is well-documented and the plugin ecosystem is growing rapidly. It's exactly what we needed.",
      color: "#4facfe"
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "GrowthCo",
      avatar: "👩‍💼",
      rating: 5,
      text: "The visual data pipeline builder is a game-changer. We can now iterate on our data workflows in minutes instead of days. The ROI was immediate.",
      color: "#43e97b"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">What Our Customers Say</h2>
          <p>Join thousands of teams who trust Meltano for their data workflows</p>
        </motion.div>

        <motion.div
          className="testimonials-container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="testimonials-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <div 
                      className="avatar"
                      style={{ backgroundColor: testimonials[currentIndex].color + '20' }}
                    >
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonials[currentIndex].name}</h4>
                      <p>{testimonials[currentIndex].role}</p>
                      <span className="company">{testimonials[currentIndex].company}</span>
                    </div>
                  </div>

                  <div className="rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} className="star filled" />
                    ))}
                  </div>

                  <blockquote>
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="carousel-controls">
              <motion.button
                className="control-btn"
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronLeft />
              </motion.button>

              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                className="control-btn"
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiChevronRight />
              </motion.button>
            </div>
          </div>

          <motion.div
            className="testimonials-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 