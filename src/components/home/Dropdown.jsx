import React, { useState } from 'react';
import styles from '../../styles/pages/Home.module.css';

const Dropdown = () => {
  const technologies = [
    'C',
    'CPP',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'DevOps',
    'Django',
    'Wordpress',
    'Cloud',
    'AWS',
    'Azure',
  ];
  const branches = [
    'Computer Engineering',
    'IT Engineering',
    'E & TC Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
  ];

  const [openDropdown1, setOpenDropdown1] = useState(false);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);

  const [student, setStudent] = useState('');
  const [alumni, setAlumni] = useState('');
  const [technology, setTechnology] = useState('');

  const handleOpenDropdown1 = () => {
    setOpenDropdown1(!openDropdown1);
  };
  const handleOpenDropdown2 = () => {
    setOpenDropdown2(!openDropdown2);
  };
  const handleOpenDropdown3 = () => {
    setOpenDropdown3(!openDropdown3);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownHeading}>
            <div>
              <h4>Student</h4>
              <p>Which student you are looking for?</p>
            </div>
            {openDropdown1 ? (
              <i
                className="fa-solid fa-angle-up"
                style={{ fontSize: '12px' }}
                onClick={() => setOpenDropdown1(!openDropdown1)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-chevron-down"
                style={{ fontSize: '12px' }}
                onClick={handleOpenDropdown1}
              ></i>
            )}
          </div>

          <div
            className={
              openDropdown1
                ? `${styles.dropdownScrollView} ${styles.show}`
                : `${styles.dropdownScrollView}`
            }
          >
            <div className={styles.dropdownContent}>
              <input
                type="text"
                placeholder="Type to search"
                value={student}
                onChange={(e) => setStudent(e.target.value)}
              />
              {branches
                .filter((branch) =>
                  branch.toLowerCase().includes(student.toLowerCase())
                )
                .map((branch) => (
                  <span key={branch} onClick={() => setStudent(branch)}>
                    {branch}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownHeading}>
            <div>
              <h4>Alumni</h4>
              <p>Which alumni you are looking for?</p>
            </div>
            {openDropdown2 ? (
              <i
                className="fa-solid fa-angle-up"
                style={{ fontSize: '12px' }}
                onClick={() => setOpenDropdown2(!openDropdown2)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-chevron-down"
                style={{ fontSize: '12px' }}
                onClick={handleOpenDropdown2}
              ></i>
            )}
          </div>

          <div
            className={
              openDropdown2
                ? `${styles.dropdownScrollView} ${styles.show}`
                : `${styles.dropdownScrollView}`
            }
          >
            <div className={styles.dropdownContent}>
              <input
                type="text"
                placeholder="Type to search"
                value={alumni}
                onChange={(e) => setAlumni(e.target.value)}
              />
              {branches
                .filter((branch) =>
                  branch.toLowerCase().includes(alumni.toLowerCase())
                )
                .map((branch) => (
                  <span key={branch} onClick={() => setAlumni(branch)}>
                    {branch}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownHeading}>
            <div>
              <h4>Technology</h4>
              <p>Which technology you are looking for?</p>
            </div>
            {openDropdown3 ? (
              <i
                className="fa-solid fa-angle-up"
                style={{ fontSize: '12px' }}
                onClick={() => setOpenDropdown3(!openDropdown3)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-chevron-down"
                style={{ fontSize: '12px' }}
                onClick={handleOpenDropdown3}
              ></i>
            )}
          </div>

          <div
            className={
              openDropdown3
                ? `${styles.dropdownScrollView} ${styles.show}`
                : `${styles.dropdownScrollView}`
            }
          >
            <div className={styles.dropdownContent}>
              <input
                type="text"
                placeholder="Type to search"
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
              />
              {technologies
                .filter((tech) =>
                  tech.toLowerCase().includes(technology.toLowerCase())
                )
                .map((tech) => (
                  <span key={tech} onClick={() => setTechnology(tech)}>
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <button className={styles.search}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
