import React from 'react';
import styles from '../../styles/pages/Home.module.css';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span>Find a Perfect</span>
        <h2>Match</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          distinctio iusto harum impedit maxime doloribus unde voluptatum ipsum,
          consequuntur est optio et repellendus aut quos.
        </p>

        <div className={styles.buttons}>
          <button className={styles.filled}>Explore Developer</button>
          <button className={styles.outlined}>Search Opportunity</button>
        </div>
      </div>
      <img src="/images/hero_image.svg" alt="hero_image" />
    </div>
  );
};

export default HeroSection;
