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
          to="/projects"
        >
          Projets
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navItem
          }
          to="/labos"
        >
          Labos
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
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
