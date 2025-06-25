// CloudIntegrations.tsx
import React from 'react';

const CloudIntegrations = () => (
  <section className="page">
    <div className="container">
      <h2>Cloud & API Integrations</h2>
      <p>
        In today’s connected world, your website needs to communicate seamlessly with other platforms. We help integrate cloud-based services and third-party APIs to expand your website’s power and automation.
      </p>

      <img
        src="https://via.placeholder.com/800x400"
        alt="Cloud and API Integration Illustration"
        style={{ maxWidth: '100%', margin: '2rem 0' }}
      />

      <h3>Cloud Integrations We Offer</h3>
      <ul>
        <li><strong>CRM Systems:</strong> Integration with tools like HubSpot, Zoho, Salesforce, etc.</li>
        <li><strong>Email Marketing:</strong> Automate your marketing using Mailchimp, ConvertKit, and others.</li>
        <li><strong>Storage & CDN:</strong> Use AWS S3, Google Cloud, or Cloudflare for fast and scalable delivery.</li>
        <li><strong>Authentication Services:</strong> Secure logins using Firebase, Auth0, Google, or OTP-based flows.</li>
        <li><strong>Payment Gateways:</strong> Stripe, Razorpay, PayPal, PhonePe, and more.</li>
      </ul>

      <h3>Custom API Integrations</h3>
      <p>We build or integrate custom APIs to connect your website with:</p>
      <ul>
        <li>🛒 Inventory, billing, and shipping platforms</li>
        <li>📦 ERP & warehouse management systems</li>
        <li>🧾 Accounting tools like QuickBooks and Zoho Books</li>
        <li>🧠 AI and chatbot systems for smarter UX</li>
      </ul>

      <h3>Benefits of API-Driven Development</h3>
      <ul>
        <li>⚡ Real-time sync across tools and services</li>
        <li>🔗 Reduced manual work through automation</li>
        <li>📈 Scalable architecture that grows with your business</li>
        <li>🧩 Flexibility to build exactly what your team needs</li>
      </ul>

      <p style={{ marginTop: '2rem' }}>
        Whether you're a startup using Notion and Slack, or an enterprise with complex ERPs, we connect the dots through secure, scalable integrations.
      </p>
    </div>
  </section>
);

export default CloudIntegrations;
