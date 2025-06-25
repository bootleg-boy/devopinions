// Maintenance.tsx
import React from 'react';

const Maintenance = () => (
  <section className="page">
    <div className="container">
      <h2>Maintenance & Support</h2>
      <p>
        Our job doesn’t end after launch. At DevOpinions, we provide comprehensive website maintenance and technical support to ensure your platform remains fast, secure, and up-to-date — every day.
      </p>

      <img
        src="https://via.placeholder.com/800x400"
        alt="Website Maintenance Support"
        style={{ maxWidth: '100%', margin: '2rem 0' }}
      />

      <h3>Included in Our Maintenance Plans</h3>
      <ul>
        <li><strong>Regular Backups:</strong> Automated daily/weekly backups so your data is never lost.</li>
        <li><strong>Security Monitoring:</strong> Continuous malware scans, firewall management, and vulnerability patching.</li>
        <li><strong>Software & Plugin Updates:</strong> Keep your site running on the latest secure version of CMS, plugins, and libraries.</li>
        <li><strong>Performance Optimization:</strong> Regular speed tests and tuning to keep your site fast and responsive.</li>
        <li><strong>Content Updates:</strong> On-demand edits to text, images, blogs, or banners by our team.</li>
        <li><strong>Error Fixes & Debugging:</strong> We fix any broken links, bugs, layout issues, or mobile responsiveness problems.</li>
      </ul>

      <h3>Support Options</h3>
      <p>We offer multiple support models based on your needs:</p>
      <ul>
        <li>🕒 <strong>Monthly Retainer:</strong> Perfect for ongoing support with fixed hours per month.</li>
        <li>🔧 <strong>On-Demand Support:</strong> Pay-as-you-go support for small, quick fixes or updates.</li>
        <li>📞 <strong>Priority Support:</strong> Get a dedicated contact and guaranteed response time for urgent matters.</li>
      </ul>

      <h3>Why You Need Website Maintenance</h3>
      <ul>
        <li>🛡️ Prevent downtime and security breaches</li>
        <li>⚙️ Keep your tech stack updated and stable</li>
        <li>📊 Ensure analytics, forms, and tracking keep working</li>
        <li>🎯 Keep your content fresh and SEO-optimized</li>
        <li>📱 Avoid layout issues on newer devices and browsers</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        Let DevOpinions handle the tech while you focus on your business. Our maintenance plans are affordable, scalable, and reliable.
      </p>
    </div>
  </section>
);

export default Maintenance;
