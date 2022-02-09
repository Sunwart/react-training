import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.navLink}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="/pokemon"
      className={styles.navLink}
      activeClassName={styles.activeLink}
    >
      Pokemon
    </NavLink>
    <NavLink
      to="/videos"
      className={styles.navLink}
      activeClassName={styles.activeLink}
    >
      Videos
    </NavLink>
    <NavLink
      to="/colors"
      className={styles.navLink}
      activeClassName={styles.activeLink}
    >
      Color Picker
    </NavLink>
  </nav>
);

export default Navigation;
