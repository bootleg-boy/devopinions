import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import WebDevelopment from './WebDevelopment';
import UiUxDesign from './UiUxDesign';
import SeoOptimization from './SeoOptimization';
import EcommerceSolutions from './EcommerceSolutions';
import Maintenance from './Maintenance';
import CloudIntegrations from './CloudIntegrations';
import ServicesOverview from './ServicesOverview';
<>
// Inside Home component:
<ServicesOverview />


// ...import other service pages...

<Routes>
  <Route path="/services/web-development" element={<WebDevelopment />} />
  <Route path="/services/ui-ux" element={<UiUxDesign />} />
  {/* Add other service routes similarly */}
</Routes>
</>

const Header = () => (
  <header className="main-header">
    <div className="container">
      <h1 className="logo">DevOpinions</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        {/*<Link to="/portfolio">Portfolio</Link> */}
        {/*<Link to="/contact">Contact</Link>*/}
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
  


 <Services />



    {/* Mini Portfolio */}
   
{/* <div className="home-section portfolio-preview">
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
    </div> */}


 <section className="why-choose-us">
  <div className="container">
    <h2 className="section-title">Why Choose DevOpinions?</h2>
    <ul className="bullet-list">
      <li><span>⚡</span> Agile and modern development practices for faster delivery.</li>
      <li><span>💬</span> Transparent and proactive communication throughout the project.</li>
      <li><span>🎯</span> Pixel-perfect, performance-first approach to every design.</li>
      <li><span>🤝</span> Long-term partnership mentality — we grow as you grow.</li>
      <li><span>🔍</span> Deep focus on SEO, accessibility, and scalability.</li>
      <li><span>🛠️</span> Post-launch support, training, and on-demand maintenance.</li>
      <li><span>🌐</span> API, cloud, and third-party service integrations made seamless.</li>
      <li><span>📈</span> Proven success with eCommerce, portfolio, and enterprise clients.</li>
    </ul>
  </div>
</section>




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
    <div className="testimonial-card">
      <p>"Talented and committed team."</p>
      <h5>- Sushant Vaidya</h5>
    </div>
    <div className="testimonial-card">
      <p>"Our business grew 10x after joining DevOpinions"</p>
      <h5>- Vishal Rajput</h5>
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
  <section className="services-section page">
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {[
          {
            title: "Web Development",
            desc: "Modern, responsive custom websites and web apps for your business.",
            icon: "💻",
            link: "/services/web-development",
          },
          {
            title: "UI/UX Design",
            desc: "Elegant, user-focused designs for web and mobile interfaces.",
            icon: "🎨",
            link: "/services/ui-ux",
          },
          {
            title: "SEO & Optimization",
            desc: "Optimize for speed, accessibility, and discoverability on Google.",
            icon: "🚀",
            link: "/services/seo",
          },
          {
            title: "E-commerce Solutions",
            desc: "Custom online stores and integrations that convert.",
            icon: "🛒",
            link: "/services/ecommerce",
          },
          {
            title: "Maintenance & Support",
            desc: "Ongoing updates, monitoring, and help as you grow.",
            icon: "🔧",
            link: "/services/maintenance",
          },
          {
            title: "Cloud & API Integrations",
            desc: "Connect your website to modern SaaS, APIs, and automation.",
            icon: "☁️",
            link: "/services/cloud",
          },
        ].map((service) => (
          <Link to={service.link} key={service.title} className="service-card">
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

{/*
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
*/}

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
          <Route path="contact" element={<Contact/>}/>
         {/* <Route path="/portfolio" element={<Portfolio />} />*/} 
          <Route path="/services/web-development" element={<WebDevelopment />} />
           <Route path="/services/ui-ux" element={<UiUxDesign />} />
            <Route path="/services/seo" element={<SeoOptimization />} />
             <Route path="/services/ecommerce" element={<EcommerceSolutions />} />
             <Route path="/services/maintenance" element={<Maintenance />} />
             <Route path="/services/cloud" element={<CloudIntegrations />} />

        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;   