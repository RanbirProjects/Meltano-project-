import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiTerminal, FiCopy } from 'react-icons/fi';
import './Demo.css';

const demoTabs = [
  {
    id: 'install',
    title: 'Install',
    code: 'pip install meltano',
    description: 'Install Meltano CLI with pip. Open source, cross-platform.'
  },
  {
    id: 'init',
    title: 'Initialize Project',
    code: 'meltano init my_project',
    description: 'Create a new Meltano project in seconds.'
  },
  {
    id: 'run',
    title: 'Run Pipeline',
    code: 'meltano run tap-gitlab target-postgres',
    description: 'Extract and load data with a single command.'
  }
];

const Demo = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const [activeTab, setActiveTab] = useState('install');
  const [copied, setCopied] = useState(false);

  const currentTab = demoTabs.find(tab => tab.id === activeTab);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="demo" className="demo section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">Try Meltano in Seconds</h2>
          <p>Get started with the CLI. Open source, flexible, and developer-friendly.</p>
        </motion.div>

        <motion.div
          className="demo-container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="demo-tabs">
            {demoTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`demo-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTerminal />
                {tab.title}
              </motion.button>
            ))}
          </div>

          <div className="code-preview">
            <div className="code-header">
              <span className="code-title">$ {currentTab.code}</span>
              <button className="copy-btn" onClick={handleCopy} title="Copy to clipboard">
                {copied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <pre className="code-block">
              <code>{currentTab.code}</code>
            </pre>
            <div className="code-desc">{currentTab.description}</div>
          </div>
        </motion.div>

        <motion.div
          className="demo-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://docs.meltano.com/getting-started/installation/', '_blank')}
          >
            Read Installation Guide
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://github.com/meltano/meltano', '_blank')}
          >
            View on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo; 