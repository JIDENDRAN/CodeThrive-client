import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      {/* Background elements */}
      <div className="privacy-bg-glow"></div>
      <div className="privacy-blob blob-top-left"></div>
      <div className="privacy-blob blob-bottom-right"></div>

      <div className="privacy-header-section">
        <h1 className="privacy-title">
          Privacy <span className="highlight-text">Policy</span>
        </h1>
        <p className="privacy-subtitle">
          Your privacy is important to us. Learn how we protect your data.
        </p>
      </div>

      <div className="privacy-content-wrapper">
        <div className="privacy-card">
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to CodeThrive. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="privacy-section">
            <h2>1. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="privacy-list">
              <li>
                <span className="check-icon">✓</span>
                <strong>Identity Data:</strong> includes first name, last name, username or similar identifier.
              </li>
              <li>
                <span className="check-icon">✓</span>
                <strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.
              </li>
              <li>
                <span className="check-icon">✓</span>
                <strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
              </li>
              <li>
                <span className="check-icon">✓</span>
                <strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>2. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="privacy-list">
              <li>
                <span className="check-icon">✓</span>
                Where we need to perform the contract we are about to enter into or have entered into with you.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Where we need to comply with a legal obligation.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="privacy-list">
              <li>
                <span className="check-icon">✓</span>
                Request access to your personal data.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Request correction of your personal data.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Request erasure of your personal data.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Object to processing of your personal data.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Request restriction of processing your personal data.
              </li>
              <li>
                <span className="check-icon">✓</span>
                Request transfer of your personal data.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
              <br />
              <strong>Email:</strong> <a href="mailto:info@codethriveinfotech.in" style={{ color: '#3b82f6', textDecoration: 'none' }}>info@codethriveinfotech.in</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
