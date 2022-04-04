import React from 'react';
import Card from './Card';
import styles from '../../styles/pages/Home.module.css';

const Technologies = () => {
  const technologies = [
    {
      name: 'React',
      link: 'https://www.findcoder.io/static/e9d53e1d4d6c02dc6e42a7a2bbbebc85/0be6e/react-icon.webp',
    },
    {
      name: 'Angular',
      link: 'https://www.findcoder.io/static/7a9fd891f956ab12a3ea749e6d89e940/0be6e/angular-icon.webp',
    },
    {
      name: 'Python',
      link: 'https://www.findcoder.io/static/3e0a100cec7b2be7ec1a6d2b0f9e9378/0be6e/python-icon.webp',
    },
    {
      name: 'Flutter',
      link: 'https://www.findcoder.io/static/13d9b67ae70056223355bc394abb4b7c/0be6e/flutter-icon.webp',
    },
    {
      name: 'Android',
      link: 'https://www.findcoder.io/static/059337d1c15537217f5d7e0e655313b7/0be6e/android-icon.webp',
    },
  ];

  return (
    <div className={styles.technologies}>
      <div className={styles.heading}>
        <h2>Which technology your are looking?</h2>
        <a href="/">View all</a>
      </div>

      <div className={styles.cardsContainer}>
        {technologies.map((technology) => (
          <Card technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
