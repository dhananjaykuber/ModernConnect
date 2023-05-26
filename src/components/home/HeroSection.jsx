import React from 'react';
import styles from '../../styles/pages/Home.module.css';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>Connect With Students &amp; Alumnis</span>
        <h2>ModernConnect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          distinctio iusto harum impedit maxime doloribus unde voluptatum ipsum,
          consequuntur est optio et repellendus aut quos.
        </p>

        <div className={styles.buttons}>
          <button className={styles.filled}>Explore Peers</button>
          <button className={styles.outlined}>Create account</button>
        </div>
      </div>
      <img src="/images/hero_image.svg" alt="hero_image" />
    </div>
  );
};

export default HeroSection;
