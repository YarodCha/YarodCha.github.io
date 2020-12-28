import './Footer.css';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
export default function Footer() {
  const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)
  
  function handleChangeDarkMode() {
    !darkMode ?
            document.body.className = 'is-dark-mode' :
            document.body.className = ''
    setDarkMode(!darkMode)
  }

  return (
    <footer>
      <nav>
        <NavLink activeClassName="activeLink" exact={true} to="/">HOME</NavLink>
        <NavLink activeClassName="activeLink" to="/about">ABOUT</NavLink>
        <NavLink activeClassName="activeLink" to="/portfolio">PORTFOLIO</NavLink>
        <NavLink activeClassName="activeLink" to="/contact">CONTACT</NavLink>
      </nav>
      <div className="dark-mode">
        <input type="checkbox" 
          className="checkbox" 
          name="theme" 
          id="theme"
          checked={darkMode}
          onChange={handleChangeDarkMode} />
        <label htmlFor="theme" className="switch"> Dark mode</label>
      </div>
    </footer>
  );
}
