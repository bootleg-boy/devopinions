import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

const Header = () => (
  <header className="main-header">
    <div className="container">
      <h1 className="logo">DevOpinions</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="main-footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} DevOpinions. All rights reserved.</p>
    </div>
  </footer>
);

const Home = () => (
  <section className="home">
    <div className="container">
      <h2>We Build Brands Online</h2>
      <p>Custom websites, branding & SEO to grow your business digitally.</p>
      <Link className="cta" to="/contact">Let's Talk</Link>
    </div>

    {/* Services Summary */}
   <div id="services" className="home-section services-preview">
  <div className="container">
    <h3>What We Do</h3>
    <div className="services-grid">
      <div className="service-card">
        <h4>Website Development</h4>
        <p>Custom-coded, high-performance websites tailored to your brand and business goals.</p>
        <Link to="/services#web-development">Learn more</Link>
      </div>
      <div className="service-card">
        <h4>E-Commerce Solutions</h4>
        <p>We build scalable online stores with cart, checkout, inventory, and payment integrations.</p>
        <Link to="/services#ecommerce">Learn more</Link>
      </div>
      <div className="service-card">
        <h4>Brand Identity</h4>
        <p>From logo design to color palettes, we help create a memorable brand experience.</p>
        <Link to="/services#branding">Learn more</Link>
      </div>
      <div className="service-card">
        <h4>SEO & Analytics</h4>
        <p>Boost your visibility on Google and track performance with custom analytics dashboards.</p>
        <Link to="/services#seo">Learn more</Link>
      </div>
    </div>
  </div>
</div>

    {/* Mini Portfolio */}
    <div className="home-section portfolio-preview">
      <div className="container">
        <h3>Recent Projects</h3>
        <div className="portfolio-grid">
          <div className="project-card">
            <img src="https://via.placeholder.com/400x200" alt="Project 1" />
            <h4>Business Website</h4>
            <p>Elegant design and responsive layout.</p>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/400x200" alt="Project 2" />
            <h4>Online Store</h4>
            <p>Complete e-commerce solution with payment gateway.</p>
          </div>
        </div>
        <Link className="cta" to="/portfolio">View Full Portfolio</Link>
      </div>
    </div>

   <div className="testimonial-carousel">
  <div className="carousel-track">
    <div className="testimonial-card">
      <p>"DevOpinions built our website faster than expected and nailed the design!"</p>
      <h5>- Priya Shah</h5>
    </div>
    <div className="testimonial-card">
      <p>"Professional and highly skilled team. Highly recommend for e-commerce work."</p>
      <h5>- Rajeev Menon</h5>
    </div>
    <div className="testimonial-card">
      <p>"Super responsive and talented group. Our SEO has never been better."</p>
      <h5>- Anjali Verma</h5>
    </div>
    
  </div>
</div>

    {/* Contact CTA */}
    <div className="home-section call-to-action">
      <div className="container">
        <h3>Let’s Work Together</h3>
        <p>Have an idea or project in mind? Let’s build something great.</p>
        <Link className="cta" to="/contact">Get in Touch</Link>
      </div>
    </div>
  </section>
);


const About = () => (
  <section className="page">
    <div className="container">
      <h2>About Us</h2>
      <p>DevOpinions is a creative web development agency focused on crafting beautiful and functional websites.</p>
    </div>
  </section>
);

const Services = () => (
  <section className="page">
    <div className="container">
      <h2>Our Services</h2>
      <ul>
        <li>Responsive Website Development</li>
        <li>E-commerce Solutions</li>
        <li>Branding & Design</li>
        <li>SEO Optimization</li>
      </ul>
    </div>
  </section>
);

const Portfolio = () => (
  <section className="page">
    <div className="container">
      <h2>Our Work</h2>
      <div className="portfolio-grid">
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 1" />
          <h4>Modern Business Website</h4>
          <p>A sleek, mobile-friendly business site for a digital agency.</p>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 2" />
          <h4>E-commerce Store</h4>
          <p>Custom-built online store with cart, checkout, and admin dashboard.</p>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Project 3" />
          <h4>Portfolio Site</h4>
          <p>Personal portfolio with animations and blog integration.</p>
        </div>
      </div>
    </div>
  </section>
);


const Contact = () => (
  <section className="page">
    <div className="container">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

const App = () => (
  <Router>
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;