import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiTwitter, FiMail, FiBookOpen, FiUsers } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/meltano/meltano", label: "GitHub" },
    { icon: <FiTwitter />, href: "https://twitter.com/meltanodata", label: "Twitter" },
    { icon: <FiBookOpen />, href: "https://docs.meltano.com/", label: "Docs" },
    { icon: <FiUsers />, href: "https://discourse.meltano.com/", label: "Community" },
    { icon: <FiMail />, href: "mailto:hello@meltano.com", label: "Email" }
  ];

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Demo", href: "#demo" },
      { name: "Docs", href: "https://docs.meltano.com/" },
      { name: "GitHub", href: "https://github.com/meltano/meltano" }
    ],
    Community: [
      { name: "Forum", href: "https://discourse.meltano.com/" },
      { name: "Slack", href: "https://meltano.com/slack" },
      { name: "Twitter", href: "https://twitter.com/meltanodata" },
      { name: "Contribute", href: "https://github.com/meltano/meltano/blob/main/CONTRIBUTING.md" }
    ],
    Company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "https://meltano.com/blog/" },
      { name: "Contact", href: "#contact" }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="gradient-text">Meltano</span>
            <p className="footer-tagline">Open source ELT for data teams</p>
          </div>
          <div className="footer-links">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div className="footer-section" key={section}>
                <h4>{section}</h4>
                <ul>
                  {links.map(link => (
                    <li key={link.name}>
                      <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-social">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer-social-link"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Meltano. Open source, community-driven. Not affiliated with GitLab.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 