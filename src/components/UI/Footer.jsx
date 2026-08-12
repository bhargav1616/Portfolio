import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <Link to="/" className="brand footer-brand">
          {/* <span className="brand-mark">B</span> */}
          <span><strong>BHARGAV</strong><small>JADAV</small></span>
        </Link>
        <p className="footer-copy">
          Front-end developer focused on building clean, responsive and useful digital experiences.
        </p>
      </div>
      <div className="footer-nav">
        <span className="eyebrow">Navigation</span>
        <Link to="/about">About</Link>
        <Link to="/project">Projects</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <span className="eyebrow">Connect</span>
        <div className="social-row">
          <a href="https://github.com/bhargav1616" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/bhargav-jadav-4aba0925b/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/mr_jadav_16/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </div>
    <div className="container footer-bottom">
      <span>© {new Date().getFullYear()} Bhargav Jadav. All rights reserved.</span>
      <span>Designed & built with React.</span>
    </div>
  </footer>
);
