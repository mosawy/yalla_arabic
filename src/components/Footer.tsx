import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Yalla Arabic</h3>
            <p>Learn Arabic the way it's actually spoken</p>
            <p className="location">Based in Cairo, Egypt - Teaching students worldwide</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/programs">Programs</Link>
              <Link to="/book">Book a Lesson</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:contact@yallaarabic.com" aria-label="Email">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="https://instagram.com/yallaarabic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Yalla Arabic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
