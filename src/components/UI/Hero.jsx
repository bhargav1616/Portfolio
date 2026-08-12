import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Hero = () => (
  <>
    <section className="hero">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          {/* <span className="eyebrow hero-eyebrow">AVAILABLE FOR OPPORTUNITIES</span> */}
          <p className="hero-kicker">Hello, I&apos;m Bhargav Jadav</p>
          <h1>Building <span>digital experiences</span> that feel simple.</h1>
          <p className="hero-description">
            I&apos;m a front-end developer who turns ideas into responsive, accessible and
            performance-minded web interfaces using React, JavaScript, HTML and CSS.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/project">Explore my work <FaArrowRight /></Link>
            <Link className="btn btn-ghost" to="/contact">Let&apos;s connect</Link>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/bhargav1616" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/bhargav-jadav-4aba0925b/" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-ring ring-one" />
          <div className="visual-ring ring-two" />
          <div className="hero-image-card">
            <img src="/bhargav.png" alt="Bhargav Jadav" />
            <div className="floating-card stack-card">
              <span>STACK</span>
              <strong>React · JS · CSS</strong>
            </div>
            <div className="floating-card role-card">
              <span>FOCUS</span>
              <strong>Frontend Development</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="stats-strip">
      <div className="container stats-grid">
        <div><strong>13+</strong><span>Projects built</span></div>
        <div><strong>5+</strong><span>Core technologies</span></div>
        <div><strong>100%</strong><span>Responsive mindset</span></div>
        <div><strong>24/7</strong><span>Curiosity to learn</span></div>
      </div>
    </section>

    <section className="home-section process-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">MY PROCESS</span>
          <h2>From idea to a polished interface.</h2>
          <p>I keep the workflow practical: understand the goal, design the experience, build it cleanly, then refine it.</p>
        </div>
        <div className="process-grid">
          {[
            ["01", "Understand", "Clarify the product goal, audience, content and required functionality before writing UI code."],
            ["02", "Design", "Create a visual direction with clear hierarchy, spacing, typography and mobile-first layouts."],
            ["03", "Build", "Turn the design into reusable React components with clean structure and maintainable CSS."],
            ["04", "Refine", "Test interactions, responsiveness and visual details across screen sizes before delivery."],
          ].map(([number, title, text]) => (
            <article className="process-card" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="home-section cta-section">
      <div className="container cta-box">
        <div><span className="eyebrow">HAVE A PROJECT?</span><h2>Let&apos;s make something worth clicking.</h2></div>
        <Link className="btn btn-primary" to="/contact">Start a conversation <FaArrowRight /></Link>
      </div>
    </section>
  </>
);
