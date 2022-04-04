import React from 'react';
import Profile from './Profile';

const Ourteam = () => {
  const profiles = [
    {
      name: 'Dhananjay Kuber',
      role: 'Frontend Developer',
      image: '/images/profile_image.JPG',
    },
    {
      name: 'Dhananjay Kuber',
      role: 'Frontend Developer',
      image: '/images/profile_image.JPG',
    },
    {
      name: 'Dhananjay Kuber',
      role: 'Frontend Developer',
      image: '/images/profile_image.JPG',
    },
  ];
  return (
    <div className="team">
      <h2>Our team</h2>
      <div className="profileContainer">
        {profiles.map((profile) => (
          <Profile profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Ourteam;
