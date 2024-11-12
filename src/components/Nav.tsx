import styles from "../App.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <a href="/">
        <p className={styles.headerp}>
          Portfolio de <span className={styles.specialWord}>Hamza</span>
        </p>
      </a>

      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navItem
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navItem
          }
          to="/page1"
        >
          Projets
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navItem
          }
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navItem
          }
          to="/page2"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
