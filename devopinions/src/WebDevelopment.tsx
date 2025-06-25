// WebDevelopment.tsx
import React from 'react';

const WebDevelopment = () => (
  <section className="page">
    <div className="container">
      <h2>Web Development Services</h2>
      <p>
        DevOpinions specializes in building modern, scalable, and high-performance websites tailored to your business goals.
        We combine cutting-edge technologies with custom design and clean code to deliver seamless user experiences.
      </p>

      <img
        src="https://via.placeholder.com/800x400"
        alt="Web Development Showcase"
        style={{ maxWidth: '100%', margin: '2rem 0' }}
      />

      <h3>Types of Websites We Build</h3>
      <ul>
        <li><strong>Business Websites:</strong> Corporate and startup sites that build credibility and showcase services.</li>
        <li><strong>Landing Pages:</strong> High-converting pages for ads, products, and marketing campaigns.</li>
        <li><strong>E-commerce Platforms:</strong> Custom online stores with payment gateway, inventory, and admin panels.</li>
        <li><strong>Portfolio Sites:</strong> Creative portfolio websites for designers, photographers, and agencies.</li>
        <li><strong>Blogs & Content Sites:</strong> SEO-ready, easy-to-manage platforms for publishing content.</li>
        <li><strong>Custom Web Applications:</strong> Tools and dashboards tailored to your workflow or idea.</li>
      </ul>

      <h3>Our Development Process</h3>
      <ol>
        <li><strong>Consultation:</strong> We understand your goals, audience, and technical needs.</li>
        <li><strong>Planning:</strong> Define scope, wireframes, and timelines clearly before development.</li>
        <li><strong>Design + Build:</strong> UI/UX design followed by pixel-perfect front-end and robust back-end code.</li>
        <li><strong>Testing & Optimization:</strong> Mobile, SEO, and performance tests ensure launch-ready quality.</li>
        <li><strong>Launch & Support:</strong> We deploy to production, monitor, and offer post-launch maintenance.</li>
      </ol>

      <h3>Tech Stack</h3>
      <p>
        We work with technologies like <strong>React.js, Next.js, Node.js, Firebase, MongoDB, WordPress, and Shopify</strong> depending on your requirements.
      </p>

      <h3>What Makes Us Different?</h3>
      <ul>
        <li>✅ Clean, maintainable code with performance-first mindset</li>
        <li>✅ Fully responsive and mobile-optimized layouts</li>
        <li>✅ SEO-optimized structure from day one</li>
        <li>✅ Admin dashboards or CMS options based on your need</li>
        <li>✅ Security and scalability baked in</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        Whether you need a simple website or a full-featured application, our team is ready to bring your vision to life with speed, clarity, and quality.
      </p>
    </div>
  </section>
);

export default WebDevelopment;
