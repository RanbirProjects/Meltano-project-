import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiPlay, FiCopy, FiCheck } from 'react-icons/fi';
import './Demo.css';

const Demo = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('pipeline');
  const [copied, setCopied] = useState('');

  const demoTabs = [
    {
      id: 'pipeline',
      title: 'Data Pipeline',
      description: 'Build powerful data pipelines with our visual editor',
      code: `# Meltano Pipeline Configuration
version: 1
name: customer_analytics

extractors:
  - name: tap-postgres
    config:
      host: \${DB_HOST}
      port: 5432
      database: \${DB_NAME}
      user: \${DB_USER}
      password: \${DB_PASSWORD}

loaders:
  - name: target-snowflake
    config:
      account: \${SNOWFLAKE_ACCOUNT}
      warehouse: \${SNOWFLAKE_WAREHOUSE}
      database: \${SNOWFLAKE_DATABASE}
      schema: \${SNOWFLAKE_SCHEMA}

transforms:
  - name: dbt
    config:
      project_dir: ./transform
      profiles_dir: ~/.dbt`,
      language: 'yaml'
    },
    {
      id: 'api',
      title: 'API Integration',
      description: 'Connect to any data source with our REST API',
      code: `// JavaScript API Example
import { MeltanoClient } from '@meltano/sdk';

const client = new MeltanoClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.meltano.com'
});

// Extract data from source
const extraction = await client.extractors.run({
  name: 'tap-postgres',
  config: {
    host: 'localhost',
    database: 'analytics',
    tables: ['users', 'orders']
  }
});

// Transform data
const transformation = await client.transforms.run({
  name: 'dbt',
  models: ['customer_metrics', 'revenue_analysis']
});

// Load to destination
const loading = await client.loaders.run({
  name: 'target-snowflake',
  data: transformation.output
});`,
      language: 'javascript'
    },
    {
      id: 'dashboard',
      title: 'Real-time Dashboard',
      description: 'Monitor your data pipelines in real-time',
      code: `// React Dashboard Component
import React, { useState, useEffect } from 'react';
import { LineChart, BarChart } from '@meltano/charts';

const PipelineDashboard = () => {
  const [metrics, setMetrics] = useState({
    recordsProcessed: 0,
    processingTime: 0,
    successRate: 100
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/api/pipeline/metrics');
      const data = await response.json();
      setMetrics(data);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <div className="metrics-grid">
        <MetricCard
          title="Records Processed"
          value={metrics.recordsProcessed.toLocaleString()}
          trend="+12.5%"
        />
        <MetricCard
          title="Processing Time"
          value={\`\${metrics.processingTime}ms\`}
          trend="-8.2%"
        />
        <MetricCard
          title="Success Rate"
          value={\`\${metrics.successRate}%\`}
          trend="+0.1%"
        />
      </div>
      
      <LineChart
        data={pipelineData}
        title="Pipeline Performance"
        height={300}
      />
    </div>
  );
};`,
      language: 'javascript'
    }
  ];

  const copyToClipboard = async (text, tabId) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(tabId);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const activeDemo = demoTabs.find(tab => tab.id === activeTab);

  return (
    <section id="demo" className="demo section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">See It In Action</h2>
          <p>Explore how easy it is to build and manage data pipelines with Meltano</p>
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
                <FiCode />
                {tab.title}
              </motion.button>
            ))}
          </div>

          <div className="demo-content">
            <motion.div
              key={activeTab}
              className="demo-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{activeDemo.title}</h3>
              <p>{activeDemo.description}</p>
            </motion.div>

            <motion.div
              key={`code-${activeTab}`}
              className="code-preview card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="code-header">
                <div className="code-tabs">
                  <span className="code-tab active">{activeDemo.language}</span>
                </div>
                <div className="code-actions">
                  <motion.button
                    className="action-btn"
                    onClick={() => copyToClipboard(activeDemo.code, activeTab)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Copy code"
                  >
                    {copied === activeTab ? <FiCheck /> : <FiCopy />}
                  </motion.button>
                  <motion.button
                    className="action-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Run demo"
                  >
                    <FiPlay />
                  </motion.button>
                </div>
              </div>
              <pre className="code-block">
                <code>{activeDemo.code}</code>
              </pre>
            </motion.div>

            <motion.div
              className="demo-features"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h4>Lightning Fast</h4>
                <p>Process millions of records in seconds</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <h4>Enterprise Security</h4>
                <p>Bank-level encryption and compliance</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔄</div>
                <h4>Real-time Sync</h4>
                <p>Keep your data fresh and up-to-date</p>
              </div>
            </motion.div>
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
          >
            Start Free Trial
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Documentation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo; 