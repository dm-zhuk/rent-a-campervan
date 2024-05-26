import { NavLink } from 'react-router-dom';

import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Catalog
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
        }
      >
        Favorites
      </NavLink>
    </header>
  );
};

export default Header;
