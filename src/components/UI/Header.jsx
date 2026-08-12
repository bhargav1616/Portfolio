import { NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/project", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const Headers = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink className="brand" to="/" onClick={() => setShow(false)}>
          {/* <span className="brand-mark">B</span> */}
          <span>
            <strong>BHARGAV</strong>
            <small>JADAV</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={show ? "Close navigation" : "Open navigation"}
          aria-expanded={show}
          onClick={() => setShow((value) => !value)}
        >
          {show ? <FaXmark /> : <FaBarsStaggered />}
        </button>

        <nav className={`main-nav ${show ? "is-open" : ""}`}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setShow(false)}
              className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            >
              {label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/contact" onClick={() => setShow(false)}>
            Let&apos;s talk <span>↗</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
