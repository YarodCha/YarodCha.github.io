import './Footer.css';

import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <nav>
        <NavLink activeClassName="activeLink" exact={true} to="/">HOME</NavLink>
        <NavLink activeClassName="activeLink" to="/about">ABOUT</NavLink>
        <NavLink activeClassName="activeLink" to="/portfolio">PORTFOLIO</NavLink>
        <NavLink activeClassName="activeLink" to="/contact">CONTACT</NavLink>
      </nav>
      <a
        target="_blank"
        rel="noreferrer"
        className="agradecimiento"
        href="https://www.freepik.com/photos/background"
      >
        Background photo created by rawpixel.com - www.freepik.com
      </a>
    </footer>
  );
}
