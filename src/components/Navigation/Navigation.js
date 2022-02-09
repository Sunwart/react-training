import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>{' '}
      <li>
        <NavLink
          to="/pokemon"
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >
          Pokemon
        </NavLink>{' '}
      </li>{' '}
      <li>
        <NavLink
          to="/videos"
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >
          Videos
        </NavLink>{' '}
      </li>{' '}
      <li>
        <NavLink
          to="/colors"
          className={styles.navLink}
          activeClassName={styles.activeLink}
        >
          Color Picker
        </NavLink>{' '}
      </li>
    </ul>
  </nav>
);

export default Navigation;
