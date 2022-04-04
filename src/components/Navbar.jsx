import React from 'react';
import styles from '../styles/components/Layout.module.css';

const Navbar = () => {
  return (
    <nav
      className={styles.navbar}
      style={{ background: window.location.pathname !== '/' && '#fdfdfd' }}
    >
      <a href="/">ModernConnect</a>

      <div>
        <a href="/signup">
          <button className={styles.signup}>Signup</button>
        </a>
        <a href="/login">
          <button className={styles.login}>Login</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
