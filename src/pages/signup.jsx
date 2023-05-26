import React, { useState, useEffect } from 'react';
import styles from '../styles/pages/Forms.module.css';

const Signup = () => {
  const branches = [
    'Computer Engineering',
    'IT Engineering',
    'E & TC Engineering',
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
  ];

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

  const [openDropdown, setOpenDropdown] = useState(false);
  const [technology, setTechnology] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [accountType, setAccounType] = useState('Student');

  const [skills, setSkills] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    for (let i = 2000; i < currentYear; i++) {
      setYears((years) => [...years, i]);
    }
  }, []);

  const handleAccountTypeChange = (e) => {
    setAccounType(e.target.value);
  };

  return (
    <div id={styles.formContainer}>
      <div className={styles.heroSection}>
        <h3>Create your account.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          modi! Dolorem sequi quia fuga nulla.
        </p>
        <img src="/images/create_profile.svg" alt="create_profile" />
      </div>

      <div className={styles.profileForm}>
        <div className={styles.form}>
          <div className={styles.profilePicker}>
            <img src="/images/profile_picker.svg" alt="profile_picker" />

            <input
              type="file"
              name="image-picker"
              id="picker"
              accept="image/*"
            />
            <label htmlFor="picker">Upload Profile Picture</label>
          </div>

          <div className={styles.section}>
            <div className={styles.divider}>
              <div></div>
              <h4>Personal Details</h4>
              <div></div>
            </div>

            <div className={styles.field}>
              <p>Name *</p>
              <input type="text" placeholder="Name" />
            </div>

            <div className={styles.row1}>
              <div className={styles.field}>
                <p>Gender *</p>
                <span>
                  Male
                  <input type="radio" value="Male" name="gender" />
                </span>
                <span>
                  Female
                  <input type="radio" value="Female" name="gender" />
                </span>
              </div>

              <div className={styles.field}>
                <p>Select account type *</p>
                <select onChange={(e) => handleAccountTypeChange(e)}>
                  <option value="Student">Student</option>
                  <option value="Alumni">Alumni</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <p>PRN Number *</p>
              <input type="text" placeholder="Ex. 14785236K" />
            </div>

            <div className={styles.field}>
              <p>Personal email *</p>
              <input type="email" placeholder="Personal email" />
            </div>

            <div className={styles.field}>
              <p>Contact number *</p>
              <input type="text" placeholder="Contact number" />
            </div>

            <div className={styles.field}>
              <p>Write something about you</p>
              <textarea type="text" rows={4} placeholder="About yourself" />
            </div>
          </div>

          {accountType === 'Alumni' && (
            <>
              <div className={styles.section}>
                <div className={styles.divider}>
                  <div></div>
                  <h4>Location</h4>
                  <div></div>
                </div>
                <div className={styles.field}>
                  <p>City where you are working *</p>
                  <input
                    type="email"
                    placeholder="Ex. Pune, Mumbai, Hyderabad"
                  />
                </div>
              </div>

              <div className={styles.section}>
                <div className={styles.divider}>
                  <div></div>
                  <h4>Other Information</h4>
                  <div></div>
                </div>
                <div className={styles.field}>
                  <p>Company where you are working *</p>
                  <input type="text" placeholder="Ex. Accenture, TCS" />
                </div>
                <div className={styles.field}>
                  <p>Current position in company *</p>
                  <input
                    type="text"
                    placeholder="Ex. Software Developer, Cloud Developer, Tester"
                  />
                </div>
                <div className={styles.field}>
                  <p>Experience *</p>
                  <input type="text" placeholder="Ex. 7 years " />
                </div>
                <div className={styles.row1}>
                  <div className={styles.field}>
                    <p>Branch *</p>
                    <select name="" id="">
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <p>Year of Graduation *</p>
                    <select name="" id="">
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          {accountType === 'Student' && (
            <>
              <div className={styles.section}>
                <div className={styles.divider}>
                  <div></div>
                  <h4>Academic Details</h4>
                  <div></div>
                </div>

                <div className={styles.row1}>
                  <div className={styles.field}>
                    <p>Branch *</p>
                    <select name="" id="">
                      {branches.map((branch) => (
                        <option key={branch} value={branch}>
                          {branch}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <p>Current year *</p>
                    <select name="" id="">
                      <option value="1st Year (FY)">1st Year (FY)</option>
                      <option value="2nd Year (SE)">2nd Year (SE)</option>
                      <option value="3rd Year (TE)">3rd Year (TE)</option>
                      <option value="4th Year (BE)">4th Year (BE)</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className={styles.section}>
            <div className={styles.divider}>
              <div></div>
              <h4>Skills and Experties</h4>
              <div></div>
            </div>

            <div className={styles.field}>
              <p>Select Skills *</p>
              <div className={styles.skills}>
                {skills.length > 0
                  ? skills.map((skill) => (
                      <span key={skill} id={skill}>
                        {skill}
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() => {
                            skills.splice(skills.indexOf(skill), 1);
                            document.getElementById(skill).remove();
                            console.log(skills);
                          }}
                        ></i>
                      </span>
                    ))
                  : (document.getElementsByClassName('skills').textContent =
                      'Ex. C, Java, AWS (Max 10)')}
                <i
                  className="fa-solid fa-chevron-down"
                  onClick={() => setOpenDropdown(!openDropdown)}
                  style={{
                    position: 'absolute',
                    right: 6,
                    cursor: 'pointer',
                  }}
                ></i>
              </div>
            </div>
          </div>

          <div
            className={
              openDropdown
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
                  tech.toLowerCase().includes(technology?.toLowerCase())
                )
                .map((technology) => (
                  <span
                    key={technology}
                    onClick={() => {
                      if (!skills.includes(technology)) {
                        setSkills((skills) => [...skills, technology]);
                      }
                    }}
                  >
                    {technology}
                  </span>
                ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.divider}>
              <div></div>
              <h4>Social Links</h4>
              <div></div>
            </div>

            <div className={styles.socialLinks}>
              <div className={styles.linkRow1}>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-brands fa-github"></i>
                    <p>Github</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
              </div>
              <div className={styles.linkRow2}>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-brands fa-twitter"></i>
                    <p>Twitter</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
                <div className={styles.link}>
                  <div className={styles.linkHeader}>
                    <i className="fa-solid fa-link"></i>
                    <p>Portfolio</p>
                  </div>
                  <input type="text" placeholder="Ex. username" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.field}>
              <p>Password *</p>
              <div className={styles.password}>
                <input
                  type={showPassword ? `text` : `password`}
                  placeholder="Password"
                />
                {showPassword ? (
                  <i
                    class="fa-solid fa-eye-slash"
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                ) : (
                  <i
                    class="fa-solid fa-eye"
                    onClick={() => setShowPassword(!showPassword)}
                  ></i>
                )}
              </div>
            </div>
            <button>Signup</button>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>
            Already have an account! <a href="/login">Click here</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
