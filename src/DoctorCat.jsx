import React from 'react';
import './DoctorCat.css';
import Cat from './assets/doctorCat.png';
import Logo from './assets/logo.jpg';

const DoctorC = () => {
  return (
      <div className='doctor-wrapper'>
        <div className='doctor-text-box'>
          <h2>
            <img className='Logo' src={Logo} alt="logo" />
            PawsVeda
          </h2>
        </div>
        <div className='Safegaurd'><h4>"Safeguarding Every Snuggle: Premium Health Solutions for Pets"</h4></div>
        <div className='image-cat'><img src={Cat} alt="DoctorCat" className='Cat' /></div>
      </div>
  );
}

export default DoctorC;
