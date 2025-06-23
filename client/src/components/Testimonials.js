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
      name: "Alex P.",
      role: "Data Engineer & OSS Contributor",
      company: "Open Source Community",
      avatar: "👨‍💻",
      rating: 5,
      text: "Meltano's open source approach lets me build exactly what my team needs. The CLI-first workflow is a game changer for data engineering.",
      color: "#667eea"
    },
    {
      name: "Priya S.",
      role: "Analytics Lead",
      company: "Tech Startup",
      avatar: "👩‍🔬",
      rating: 5,
      text: "We love that Meltano is free, open source, and backed by a passionate community. The 600+ connectors make integration a breeze!",
      color: "#764ba2"
    },
    {
      name: "Chris T.",
      role: "Meltano Maintainer",
      company: "GitHub",
      avatar: "🧑‍💻",
      rating: 5,
      text: "Contributing to Meltano has been incredibly rewarding. The project is transparent, welcoming, and always improving.",
      color: "#f093fb"
    },
    {
      name: "Maria G.",
      role: "Data Ops Engineer",
      company: "Enterprise User",
      avatar: "👩‍💼",
      rating: 5,
      text: "Meltano's modular pipelines and version control support fit perfectly into our DevOps workflow. Highly recommended for any data team!",
      color: "#4facfe"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
          <h2 className="gradient-text">Loved by Data Teams & Contributors</h2>
          <p>Join the open source community building the future of ELT</p>
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
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <div className="testimonial-avatar" style={{ background: testimonials[currentIndex].color }}>
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="testimonial-content">
                  <p className="testimonial-text">“{testimonials[currentIndex].text}”</p>
                  <div className="testimonial-meta">
                    <span className="testimonial-name">{testimonials[currentIndex].name}</span>
                    <span className="testimonial-role">{testimonials[currentIndex].role}</span>
                    <span className="testimonial-company">{testimonials[currentIndex].company}</span>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FiStar key={i} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous testimonial">
              <FiChevronLeft />
            </button>
            <button className="carousel-btn next" onClick={handleNext} aria-label="Next testimonial">
              <FiChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 