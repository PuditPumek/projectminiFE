import heroImgA from './assets/A.png'
import heroImgB from './assets/B.png'
import heroImgC from './assets/C.png'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Agenio</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="primary-btn" href="#contact">
          Contact us
        </a>
      </header>

      <main>
        <section className="hero-panel" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Professional service agency</span>
            <h1>We are here to give the best service</h1>
            <p>
              Support your business with tailored operations, growth strategy,
              and reliable outsourcing that helps you scale with confidence.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                Get started
              </a>
              <a className="secondary-btn" href="#services">
                Our services
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>553</strong>
                <span>Success cases</span>
              </div>
              <div className="hero-stat">
                <strong>98%</strong>
                <span>Customer satisfaction</span>
              </div>
              <div className="hero-stat">
                <strong>24/7</strong>
                <span>Support ready</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-frame" />
            <div className="hero-card">
              <div className="hero-card-badge">
                <span>553</span>
                <small>Transactions</small>
              </div>
              <div className="hero-card-image">
                <img src={heroImgA} alt="Service illustration" />
              </div>
              <div className="hero-card-info">
                <p>
                  Fast, reliable service with beautiful design and strong results.
                </p>
                <div className="hero-card-pill">Trusted by modern teams</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-heading">
            <span>Lets Check Our Services</span>
            <h2>We take every task seriously so your business grows faster.</h2>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon service-icon-1">A</div>
              <h3>Accounting Services</h3>
              <p>Professional accounting to keep your finances accurate and compliant.</p>
            </article>
            <article className="service-card">
              <div className="service-icon service-icon-2">B</div>
              <h3>Creative Strategy</h3>
              <p>Marketing and branding solutions that help your business stand out.</p>
            </article>
            <article className="service-card">
              <div className="service-icon service-icon-3">C</div>
              <h3>Payroll Outsourcing</h3>
              <p>Reliable payroll services so your team gets paid on time, every time.</p>
            </article>
            <article className="service-card">
              <div className="service-icon service-icon-4">D</div>
              <h3>Personal Assistance</h3>
              <p>Dedicated support for every step of your daily operations.</p>
            </article>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-grid">
            <div className="about-image-card">
              <div className="about-tag">200+</div>
              <img src={heroImgB} alt="Team in meeting" />
            </div>
            <div className="about-copy">
              <span className="eyebrow">We Take The Work Of Your Hand</span>
              <h2>Get the support that keeps your team moving forward.</h2>
              <p>
                A dedicated operations partner gives you time back for strategy,
                growth, and customer focus so your business can scale without stress.
              </p>
              <a className="primary-btn" href="#contact">
                Discover more
              </a>
            </div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="section-heading">
            <span>No Extra Charges | Choose Your Plan.</span>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card">
              <p className="plan-name">Basic</p>
              <strong className="price">$2,000</strong>
              <ul>
                <li>Free consultation</li>
                <li>24/7 Support</li>
                <li>Strategy session</li>
              </ul>
              <a className="secondary-btn" href="#contact">
                Choose Basic
              </a>
            </article>
            <article className="pricing-card featured">
              <p className="plan-name">Standard</p>
              <strong className="price">$3,500</strong>
              <ul>
                <li>Everything in Basic</li>
                <li>Dedicated account manager</li>
                <li>Performance reports</li>
              </ul>
              <a className="primary-btn" href="#contact">
                Choose Standard
              </a>
            </article>
            <article className="pricing-card">
              <p className="plan-name">Premium</p>
              <strong className="price">$6,500</strong>
              <ul>
                <li>Custom solutions</li>
                <li>Priority delivery</li>
                <li>Advanced reporting</li>
              </ul>
              <a className="secondary-btn" href="#contact">
                Choose Premium
              </a>
            </article>
          </div>
        </section>

        <section className="section testimonial">
          <div className="testimonial-block">
            <div className="testimonial-image">
              <img src={heroImgC} alt="Customer portrait" />
            </div>
            <div className="testimonial-content">
              <span className="eyebrow">Testimonials</span>
              <p className="quote">
                “They delivered everything exactly when we needed it, with quality and speed
                that exceeded our expectations.”
              </p>
              <div className="testimonial-author">
                <div className="avatar">M</div>
                <div>
                  <strong>Maria Scott</strong>
                  <span>Business Owner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section newsletter" id="contact">
          <div className="newsletter-card">
            <h2>Sign up to our newsletter</h2>
            <p>Receive offers, insights, and service news directly to your inbox.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" aria-label="Email" />
              <button type="submit" className="primary-btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">Agenio</div>
          <div className="footer-links">
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Resources</a>
          </div>
          <div className="footer-copy">© 2026 Agenio. All rights reserved.</div>
        </footer>
      </main>
    </div>
  )
}

export default App
