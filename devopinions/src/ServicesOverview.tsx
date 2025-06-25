import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Web Development',
    desc: 'Modern, responsive websites.',
    path: '/services/web-development',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    desc: 'Elegant interfaces for web and mobile.',
    path: '/services/ui-ux',
    icon: '🎨',
  },
 {
    title: 'UI/UX Design',
    desc: 'Elegant interfaces for web and mobile.',
    path: '/services/ui-ux',
    icon: '🎨',
  },

];

const ServicesOverview = () => (
  <section className="services-overview">
    <div className="container">
      <h2>What We Offer</h2>
      <div className="services-grid">
        {services.map((service) => (
          <Link to={service.path} className="service-card" key={service.title}>
            <span>{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
