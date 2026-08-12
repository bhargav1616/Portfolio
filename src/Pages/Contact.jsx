import "../Style/Contact.css";
import { FaArrowRight, FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { PageTitle } from "./About";

const details = [
  { icon: <FaEnvelope />, label: "Email", value: "bhargavjadav2004@gmail.com", href: "mailto:bhargavjadav2004@gmail.com" },
  { icon: <FaPhone />, label: "Phone", value: "+91 94282 11480", href: "tel:+919428211480" },
  { icon: <span>⌖</span>, label: "Location", value: "Ahmedabad, India", href: "https://maps.app.goo.gl/nq8bgbNb5m7pwrJK6" },
];

export const Contact = () => (
  <div className="inner-page contact-page">
    <div className="container">
      <PageTitle eyebrow="CONTACT" title="Have an idea? Let&apos;s talk." />
      <section className="contact-layout">
        <div className="contact-intro">
          <span className="eyebrow">START A CONVERSATION</span>
          <h2>Good work starts with a clear conversation.</h2>
          <p>
            Whether you have a website idea, a front-end task or simply want to discuss an opportunity,
            send me a message. I&apos;ll get back to you as soon as I can.
          </p>
          <div className="contact-details">
            {details.map((item) => <a href={item.href} target={item.label === "Location" ? "_blank" : undefined} rel="noreferrer" key={item.label}><span>{item.icon}</span><div><small>{item.label}</small><strong>{item.value}</strong></div></a>)}
          </div>
        </div>
        <div className="contact-card">
          <span className="eyebrow">DIRECT LINKS</span>
          <h3>Find me online.</h3>
          <div className="direct-links">
            <Social href="https://github.com/bhargav1616" icon={<FaGithub />} title="GitHub" text="Projects & code" />
            <Social href="https://www.linkedin.com/in/bhargav-jadav-4aba0925b/" icon={<FaLinkedinIn />} title="LinkedIn" text="Professional profile" />
            <Social href="https://www.instagram.com/mr_jadav_16/" icon={<FaInstagram />} title="Instagram" text="Personal updates" />
          </div>
          <a className="btn btn-primary full-btn" href="mailto:bhargavjadav2004@gmail.com?subject=Hello Bhargav&body=I would like to discuss a project or opportunity.">Send an email <FaArrowRight /></a>
        </div>
      </section>
    </div>
  </div>
);

function Social({ href, icon, title, text }) {
  return <a className="direct-link" href={href} target="_blank" rel="noreferrer"><span>{icon}</span><div><strong>{title}</strong><small>{text}</small></div><b>↗</b></a>;
}
