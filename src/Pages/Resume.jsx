import "../Style/Resume.css";
import { FaArrowDown, FaBriefcase, FaGraduationCap } from "react-icons/fa6";
import { PageTitle } from "./About";

export const Resume = () => (
  <div className="inner-page resume-page">
    <div className="container">
      <PageTitle eyebrow="RESUME" title="A quick look at my background." />
      <section className="resume-summary">
        <div><span className="eyebrow">PROFILE</span><h2>Front-end developer focused on practical, production-minded web interfaces.</h2></div>
        <p>
          BCA graduate with hands-on project experience building responsive websites and React applications.
          Comfortable with HTML, CSS, JavaScript, React, Bootstrap and Git, with a strong interest in improving
          UI quality, component architecture and real-world development practices.
        </p>
      </section>

      <Timeline title="Education" icon={<FaGraduationCap />}>
        <TimelineItem period="2022 — 2025" title="Bachelor of Computer Application" place="Silver Oak University" text="Focused on computer science fundamentals, web development and application development." />
        <TimelineItem period="2020 — 2021" title="Higher Secondary Education" place="Shree Ambica Vidhyalaya" text="Completed higher secondary education with a strong interest in technology." />
      </Timeline>

      <Timeline title="What I bring" icon={<FaBriefcase />}>
        <TimelineItem period="Frontend" title="React & Component Development" place="Practical project experience" text="Building reusable UI components, routing, responsive layouts and interactive experiences." />
        <TimelineItem period="Web" title="HTML, CSS & JavaScript" place="Core foundation" text="Semantic markup, modern CSS layouts, responsive design and browser-side interactions." />
      </Timeline>

      <div className="resume-download">
        <a className="btn btn-primary" href="/BHARGAV_JADAV.pdf" download="BHARGAV_JADAV.pdf">Download CV <FaArrowDown /></a>
      </div>
    </div>
  </div>
);

function Timeline({ title, icon, children }) {
  return <section className="timeline-section"><div className="timeline-heading"><span>{icon}</span><h2>{title}</h2></div><div className="timeline">{children}</div></section>;
}
function TimelineItem({ period, title, place, text }) {
  return <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta">{period}</div><div><h3>{title}</h3><strong>{place}</strong><p>{text}</p></div></article>;
}
