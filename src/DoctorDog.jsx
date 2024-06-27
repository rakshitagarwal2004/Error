import React from 'react';
import './DoctorDog.css';
import Dog from './assets/doctorDog.jpeg';
import DogReq from './assets/DogRequire.png';

const DoctorD = () => {
  return (
    <div className='component'>
      <div className='veterani-care'>
        <div className='veterani-img'>
          <div className='DogDiv'>
            <img src={Dog} alt="DoctorDog" className='Dog' />
          </div>
          <div className='doctor-description'>
            <h2><span>Veterinary Care</span></h2>
            <h4>"Professional Pet Health Guidance from Top Veterinary Doctors"</h4>
            <img src={DogReq} alt="DogReq" className='DogReq' />
            <p>"Our experienced vets provide top-notch medical care and expert advice, ensuring your furry friend enjoys a long, healthy life. We are your trusted partner in pet wellness, offering guidance to help your beloved companion thrive."</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorD;
