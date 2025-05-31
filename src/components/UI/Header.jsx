import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import '../../App.css';

export const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          {/* Logo */}
          <div className="Logo">
            <h1>I'M JADAV</h1>
          </div>

          {/* Navigation */}
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li><NavLink to="/" onClick={() => setShow(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setShow(false)}>About</NavLink></li>
              <li><NavLink to="/resume" onClick={() => setShow(false)}>Resume</NavLink></li>
              <li><NavLink to="/project" onClick={() => setShow(false)}>Project</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setShow(false)}>Contact</NavLink></li>
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <FaBarsStaggered />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
