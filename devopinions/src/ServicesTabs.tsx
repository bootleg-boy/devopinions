import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Service {
  title: string;
  icon: string;
  short: string;
  full: string;
}


const serviceDetails = [
  {
    title: "Web Development",
    icon: "💻",
    short: "Modern, responsive websites and apps.",
    link: "/services/web-development"
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    short: "Elegant, user-focused designs.",
    link: "/services/ui-ux"
  },
  {
    title: "SEO & Optimization",
    icon: "🚀",
    short: "Boost visibility and site speed.",
    link: "/services/seo"
  },
  {
    title: "E-commerce Solutions",
    icon: "🛒",
    short: "Custom online stores that convert.",
    link: "/services/ecommerce"
  },
  {
    title: "Maintenance & Support",
    icon: "🔧",
    short: "Ongoing help post-launch.",
    link: "/services/maintenance"
  },
  {
    title: "Cloud & API Integrations",
    icon: "☁️",
    short: "Connect apps, tools, and automations.",
    link: "/services/integrations"
  },
];

const ServicesTabs: React.FC = () => {
  return (
    <section id="services" className="services-tabs home-section">
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        <div className="tabs-grid">
          {serviceDetails.map((service) => (
            <Link to={service.link} key={service.title} className="tab-card">
              <h3>
                <span className="icon">{service.icon}</span> {service.title}
              </h3>
              <p>{service.short}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;
