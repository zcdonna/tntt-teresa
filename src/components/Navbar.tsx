import { type JSX } from "react"; //useContext
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
// import { ThemeContext } from "../contexts/ThemeContext";

// import lightModeIcon from "../images/sun.png";
// import darkModeIcon from "../images/moon.png";
import facebookIcon from "../images/facebook.png";
import instagramIcon from "../images/instagram.png";

const Navbar = (): JSX.Element => {
  const navigate = useNavigate();
//   const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logoContainer} onClick={() => navigate("/")}>
        <img 
          src="src/images/YouthGroupLogo.png" 
          alt="Youth Group Logo" 
          className={styles.logo} 
        />
      </div>

      {/* Navigation Links */}
      <nav className={styles.navBarContainer}>
        <ul className={styles.navBar}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Home</NavLink></li>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Events</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : undefined}>About</NavLink></li>
          <li><NavLink to="/resources" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Resources</NavLink></li>
          <li><NavLink to="/photos" className={({ isActive }) => isActive ? styles.activeLink : undefined}>Photos</NavLink></li>
        </ul>
      </nav>

      {/* Social + Theme */}
      <div className={styles.socialIcons}>
        {/* Dark/Light Mode Toggle
        <button onClick={toggleTheme} className={styles.iconButton}>
          <img
            src={theme === "light-mode" ? lightModeIcon : darkModeIcon}
            alt={`Switch to ${theme === "light-mode" ? "dark" : "light"} mode`}
            className={styles.icon}
          />
        </button> */}

        {/* Facebook */}
        <a
          href="https://www.facebook.com/DoanTNTTTeresaHDGBptCT/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" className={styles.icon} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/tntt.teresa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" className={styles.icon} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
