const fs = require('fs');
const path = 'd:\\priyanga\\codethrive\\client website-20260126T123219Z-3-001\\client website\\src\\pages\\Home.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add import
let cnt1 = 0;
content = content.replace('import "./Home.css";\n', () => {
    cnt1++;
    return 'import "./Home.css";\nimport "./HomePro.css";\n';
});
console.log("Import check:", cnt1);

// 2. Carousel state
const stateStart = content.indexOf('  // Carousel state');
const stateEnd = content.indexOf('  useEffect(() => {\n    const showTimer');
if (stateStart !== -1 && stateEnd !== -1) {
    content = content.slice(0, stateStart) + content.slice(stateEnd);
    console.log("Removed Carousel state successfully.");
}

// 3. Handlers
const handlersStart = content.indexOf('  const CARDS_PER_SLIDE = 4;');
const handlersEnd = content.indexOf('  return (\n    <>\n      <TitleBar />');
if (handlersStart !== -1 && handlersEnd !== -1) {
    content = content.slice(0, handlersStart) + content.slice(handlersEnd);
    console.log("Removed Carousel handlers successfully.");
}

// 4. Sections
const sectionStart = content.indexOf('        {/* VISION SECTION */}');
const sectionEnd = content.indexOf('      </div>\n      <Footer />');

const newSections = `        {/* ABOUT US SECTION */}
        <section className="pro-section bg-light" id="about">
          <div className="pro-container">
            <div className="pro-grid-2">
              <div>
                <span className="pro-label">About CodeThrive</span>
                <h2 className="pro-heading">We build digital solutions that scale your business</h2>
                <p className="pro-desc">
                  Our vision is to create innovative, high-performance software that inspires growth. 
                  We don't just write code; we deliver meaningful impact through smart, secure, and cutting-edge technologies. 
                  When you partner with us, you get absolute transparency, quality execution, and a dedicated team focused on your success.
                </p>
                
                <div className="pro-stats-row">
                  <div className="pro-stat">
                    <h4>200+</h4>
                    <span>Projects Completed</span>
                  </div>
                  <div className="pro-stat">
                    <h4>98%</h4>
                    <span>Satisfaction Rate</span>
                  </div>
                  <div className="pro-stat">
                    <h4>24/7</h4>
                    <span>Support</span>
                  </div>
                </div>
              </div>
              
              <div className="pro-features-grid">
                <div className="pro-feature-card">
                  <span className="pro-icon">⚡</span>
                  <h3>High Performance</h3>
                  <p>Built for speed and optimized for maximum conversions.</p>
                </div>
                <div className="pro-feature-card">
                  <span className="pro-icon">🔒</span>
                  <h3>Secure & Reliable</h3>
                  <p>Enterprise-grade security standards for peace of mind.</p>
                </div>
                <div className="pro-feature-card">
                  <span className="pro-icon">📱</span>
                  <h3>Fully Responsive</h3>
                  <p>Flawless experience across all devices and screen sizes.</p>
                </div>
                <div className="pro-feature-card">
                  <span className="pro-icon">🎯</span>
                  <h3>Built to Scale</h3>
                  <p>Architectures designed to grow with your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTOMER FEEDBACKS - GRID */}
        <section className="pro-section" id="testimonials">
          <div className="pro-container">
            <div className="pro-center-header">
              <span className="pro-label">Client Stories</span>
              <h2 className="pro-heading">What Our Clients Say</h2>
              <p className="pro-desc">We pride ourselves on a 4.5+ star average rating. Discover why businesses trust CodeThrive for their digital transformation.</p>
            </div>
            
            <div className="pro-testimonials-grid">
              {customerFeedbacks.slice(0, 6).map((feedback) => (
                <div className="pro-review-card" key={feedback.id}>
                  <div className="pro-stars">
                    {Array.from({ length: Math.floor(feedback.rating) }).map((_, i) => "★")}
                    {feedback.rating % 1 !== 0 ? "★" : ""}
                  </div>
                  <p className="pro-review-text">"{feedback.text}"</p>
                  <div className="pro-reviewer">
                    <div className="pro-avatar" style={{ background: feedback.color }}>
                      {feedback.avatar}
                    </div>
                    <div className="pro-reviewer-info">
                      <h4>{feedback.name}</h4>
                      <span>{feedback.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="pro-section bg-light" id="faq">
          <div className="pro-container">
            <div className="pro-center-header">
              <span className="pro-label">FAQ</span>
              <h2 className="pro-heading">Frequently Asked Questions</h2>
              <p className="pro-desc">Straight answers to your questions. Transparency is our priority.</p>
            </div>
            
            <div className="pro-faq-list">
              <details className="pro-faq-item">
                <summary className="pro-faq-q">
                  What services do you offer?
                  <span className="pro-faq-plus">+</span>
                </summary>
                <div className="pro-faq-a">
                  We specialize in custom web development, mobile applications, UI/UX design, and SEO optimization. Whether you need a corporate website or a full-scale SaaS platform, we have the expertise to deliver.
                </div>
              </details>
              
              <details className="pro-faq-item">
                <summary className="pro-faq-q">
                  How long does it take to build a website?
                  <span className="pro-faq-plus">+</span>
                </summary>
                <div className="pro-faq-a">
                  A standard corporate website usually takes 2-4 weeks, while complex web applications may take 2-3 months. We provide a detailed timeline during our initial consultation.
                </div>
              </details>

              <details className="pro-faq-item">
                <summary className="pro-faq-q">
                  Do you provide maintenance and support?
                  <span className="pro-faq-plus">+</span>
                </summary>
                <div className="pro-faq-a">
                  Yes, we offer ongoing maintenance, security updates, and performance monitoring to ensure your software runs smoothly long after the initial launch.
                </div>
              </details>
              
              <details className="pro-faq-item">
                <summary className="pro-faq-q">
                  Will my website be mobile-friendly and SEO optimized?
                  <span className="pro-faq-plus">+</span>
                </summary>
                <div className="pro-faq-a">
                  Absolutely. Every project we deliver is 100% responsive and built with technical SEO best practices, ensuring fast load times and optimal search engine visibility.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="pro-section bg-dark text-center" style={{ textAlign: 'center' }}>
          <div className="pro-container">
            <div className="cta-pro-card">
              <h2 className="pro-heading text-white">Ready for your project?</h2>
              <p>Let's create something extraordinary together. We look forward to hearing from you.</p>
              <Link to="/contact" className="pro-cta-btn">Book a Call</Link>
            </div>
          </div>
        </section>\n`;

if (sectionStart !== -1 && sectionEnd !== -1) {
    content = content.slice(0, sectionStart) + newSections + content.slice(sectionEnd);
    console.log("Sections replaced successfully!");
}

fs.writeFileSync(path, content);
console.log("All done.");
