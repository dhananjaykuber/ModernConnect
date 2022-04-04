import React from 'react';
import About from '../components/home/About';
import Dropdown from '../components/home/Dropdown';
import HeroSection from '../components/home/HeroSection';
import Ourteam from '../components/home/Ourteam';
import Technologies from '../components/home/Technologies';
import styles from '../styles/pages/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <HeroSection />
      <Dropdown />
      <Technologies />
      <About />
      {/* <Ourteam /> */}
    </div>
  );
};

export default Home;
