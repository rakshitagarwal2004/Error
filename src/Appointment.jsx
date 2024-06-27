import React from 'react';
import './Appointment.css';
import DoctorImage from './assets/DoctorPuppy.jpeg';
import Desc from './assets/Description.jpeg';


const AppointmentDetails = () => {
  return (
    <>
    <div className="appointment-container">
      <div className="left-side">
      <div className="image-container">
          <img src={DoctorImage} alt="Doctor with Dog" />
        </div>
        <div className="price-info">
          <h1><span>Just At</span></h1>
          <div className="price-info1">
          <h2><span>Rs. 199</span> </h2>
          </div>
          <h3> <img  src={Desc} alt="Description"className='desc' />Per Appointment</h3>
        </div>
        <button className="cancel-button">CANCEL ANYTIME</button>
      </div>
      <div className="right-side">
        <ul className="services-list">
          <li>On Demand Consultations</li>
          <li>Digestive Problems</li>
          <li>Wellness and Prevention</li>
          <li>Anxiety Management</li>
          <li>Skin Health</li>
          <li>Mobility Improvement</li>
          <li>Dental Health</li>
          <li>Parenting Advice</li>
          <li>Paws and Limbs Health</li>
          <li>Ear Health</li>
          <li>Eyes Health</li>
          <li>Reproduction</li>
          <li>Nutrition</li>
        </ul>
      </div>
    </div>
    <div className='priority'>
      <h5>"Your Pet's Health, Our Priority: </h5><br></br>
      <h6>Schedule Your Consultation Today!"</h6>
    </div>
    <div className='expert'>
      <p>Let’s Find Expert Veterinary Doctor For Your Pet</p>
      < hr />
    </div>
    </>
  );
}

export default AppointmentDetails;
