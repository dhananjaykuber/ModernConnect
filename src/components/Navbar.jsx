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
        <ul>
          <li>
            <a href="/">Search Students</a>
          </li>
          <li>
            <a href="/">Search Alumni</a>
          </li>
        </ul>

        <a href="/signup">
          <button className={styles.signup}>Signup</button>
        </a>
        <a href="/login">
          <button className={styles.login}>Login</button>
        </a>

        {/* <a href="/login">
          <button className={styles.logout}>
            Logout <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </a> */}

        {/* <img
          src="/images/profile_image.JPG"
          alt="profile_image"
          className={styles.profileImage}
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
