import React from 'react';
import styles from '../../src/styles/pages/Users.module.css';
import User from '../components/User';

const users = () => {
  const users = [
    {
      image:
        'https://www.teahub.io/photos/full/46-464490_rohit-sharma-hd-wallpaper-rohit-sharma-digital-painting.jpg',
      name: 'Dhananjay Kuber',
      bio: 'Web Developer | React Native Developer | Cloud Engineer',
      branch: 'Information Technology',
      skills: [
        'React',
        'NextJS',
        'CSS',
        'HTML',
        'Python',
        'AWS',
        'Firebase',
        'Azure',
        'DevOps',
        'Mevan',
      ],
      student: false,
    },
    {
      image:
        'https://w0.peakpx.com/wallpaper/166/790/HD-wallpaper-virat-kohli.jpg',
      name: 'Sarvesh Joshi',
      bio: 'Web Developer | Backend Developer',
      branch: 'Information Technology',
      skills: ['Python', 'Django', 'CPP', 'MySQL'],
      student: true,
    },
    {
      image:
        'https://lh3.googleusercontent.com/evg8hy1Eb3ny8mjLscfthIS_OFV84moiQmRe8R03xCVkXCDGPpmBSVSDaAwk4FJAcX9_',
      name: 'Ajay More',
      bio: 'Web Developer | Android Developer',
      branch: 'Computer Engineering',
      skills: ['Android', 'Java', 'Javascript'],
      student: true,
    },
    {
      image:
        'https://lh3.googleusercontent.com/evg8hy1Eb3ny8mjLscfthIS_OFV84moiQmRe8R03xCVkXCDGPpmBSVSDaAwk4FJAcX9_',
      name: 'Pratham Karmalkar',
      bio: 'Web Developer | Testing Engineer',
      branch: 'E & TC Engineering',
      skills: ['React', 'Javascript', 'Maven'],
      student: false,
    },
  ];
  return (
    <div className={styles.users}>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

export default users;
