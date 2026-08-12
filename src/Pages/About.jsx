import "../Style/About.css";
import { FaArrowUpRightFromSquare, FaCode, FaPalette, FaMobileScreenButton } from "react-icons/fa6";
import { Link } from "react-router-dom";

const skills = [
  ["React.js", 72], ["JavaScript", 68], ["HTML & CSS", 88], ["Bootstrap", 78], ["Git & GitHub", 65]
];

export const About = () => (
  <div className="inner-page about-page">
    <div className="container">
      <PageTitle eyebrow="ABOUT ME" title="A developer who cares about the details." />
      <section className="about-intro">
        <div className="about-photo-wrap">
          <img src="/about.png" alt="Bhargav Jadav" className="about-photo" />
          <span className="photo-badge">Ahmedabad, India</span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">WHO I AM</span>
          <h2>I build interfaces with clarity, not clutter.</h2>
          <p>
            I&apos;m Bhargav, a front-end developer and BCA graduate focused on modern web development.
            I enjoy taking a rough idea and turning it into a responsive interface that is easy to use and
            easy to maintain.
          </p>
          <p>
            My current focus is React and JavaScript. I&apos;m continuously improving my understanding of
            component architecture, responsive design, accessibility, performance and real-world product workflows.
          </p>
          <div className="about-facts">
            <div><span>Name</span><strong>Bhargav Jadav</strong></div>
            <div><span>Role</span><strong>Front-end Developer</strong></div>
            <div><span>Education</span><strong>BCA</strong></div>
            <div><span>Location</span><strong>Ahmedabad, India</strong></div>
          </div>
          <Link className="text-link" to="/contact">Work with me <FaArrowUpRightFromSquare /></Link>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading compact"><span className="eyebrow">TECHNICAL SKILLS</span><h2>Tools I use to ship the work.</h2></div>
        <div className="skills-grid">
          <div className="skill-list">
            {skills.map(([name, value]) => (
              <div className="skill" key={name}>
                <div><span>{name}</span><b>{value}%</b></div>
                <div className="skill-track"><i style={{ width: `${value}%` }} /></div>
              </div>
            ))}
          </div>
          <div className="skill-highlights">
            <Feature icon={<FaCode />} title="Clean code" text="Reusable components and sensible structure instead of duplicated UI." />
            <Feature icon={<FaMobileScreenButton />} title="Responsive UI" text="Layouts designed to work on phones, tablets and desktops." />
            <Feature icon={<FaPalette />} title="Visual polish" text="Typography, spacing, contrast and micro-interactions that feel intentional." />
          </div>
        </div>
      </section>
    </div>
  </div>
);

function Feature({ icon, title, text }) {
  return <article className="feature-card"><span className="feature-icon">{icon}</span><div><h3>{title}</h3><p>{text}</p></div></article>;
}
export function PageTitle({ eyebrow, title }) {
  return <header className="page-title"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1></header>;
}
