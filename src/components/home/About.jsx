import React from 'react';
import styles from '../../styles/pages/Home.module.css';

const About = () => {
  return (
    <>
      <div className={styles.about}>
        <img src="/images/about_image.svg" alt="about_image" />
        <div className={styles.aboutContent}>
          <h3>What is ModernConnect?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            consequatur obcaecati saepe doloribus! Ipsam a voluptatibus
            asperiores expedita dignissimos officia quas minima iusto sequi?
            Corrupti quis eius laborum ex fugiat? Sed officia libero suscipit,
            cum beatae numquam tempora repudiandae aperiam odit, saepe tenetur
            corrupti minus quia voluptatibus iste culpa. Culpa.
          </p>
          <button>Expolre more</button>
        </div>
      </div>
      <div className={`${styles.about} ${styles.goal}`}>
        <div className={styles.aboutContent}>
          <h3>Our goal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            consequatur obcaecati saepe doloribus! Ipsam a voluptatibus
            asperiores expedita dignissimos officia quas minima iusto sequi?
            Corrupti quis eius laborum ex fugiat?
          </p>
          <p>
            Sed officia libero suscipit, cum beatae numquam tempora repudiandae
            aperiam odit, saepe tenetur corrupti minus quia voluptatibus iste
            culpa. Culpa.
          </p>
          <button>Expolre more</button>
        </div>
        <img src="/images/goal_image.svg" alt="goal_image" />
      </div>
    </>
  );
};

export default About;
