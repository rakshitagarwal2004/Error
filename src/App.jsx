import React from 'react'
import './App.css'
import Header from './Header.jsx'
import DoctorC from './DoctorCat.jsx';
import DoctorD from './DoctorDog.jsx'
import AppointmentDetails from './Appointment.jsx';
import Cards from './DoctorCardGoto.jsx';
import PetAd from './PetAdvice.jsx';
import EssentialsPet  from './PetEssential.jsx';
import Footer from './Footer.jsx';

function App() {
  

  return (
    <>
    <div className='app-container'>
      <Header/>
      <DoctorC/>
      <DoctorD/>
      <AppointmentDetails/>
      <Cards/>
      <PetAd/>
      <EssentialsPet/>
      <Footer/>
    </div>
    </>
  );
}

export default App;

