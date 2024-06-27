import React from 'react';
import './App.css';
import DoctorCard from './DoctorCard.jsx';
import doctorImage1 from './assets/doctor1.jpeg';
import doctorImage2 from './assets/doctor2.jpeg';
import doctorImage3 from './assets/doctor3.jpeg';
import doctorImage4 from './assets/doctor4.jpeg';

function Card() {
  const doctors = [
    {
      image: doctorImage1,
      name: "Dr. Shweta Agarwal",
      rating: 4.5,
      reviews: 89,
      description: "Dr. Shweta, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic 'Petz & Vetz'. Our paradise is situated in the heart of the town with a pleasant environment. We are ready to treat your beloved doggos & puppers with love and involvement. Book the appointment now!"
    },
    {
      image: doctorImage2,
      name: "Dr. Kartik Singh",
      rating: 5.0,
      reviews: 100,
      description: "Dr. Kartik, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic 'Petz & Vetz'. Our paradise is situated in the heart of the town with a pleasant environment. We are ready to treat your beloved doggos & puppers with love and involvement. Book the appointment now!"
    },
    {
      image: doctorImage3,
      name: "Dr. Amit Tiwari",
      rating: 4.5,
      reviews: 89,
      description: "Dr. Amit, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic 'Petz & Vetz'. Our paradise is situated in the heart of the town with a pleasant environment. We are ready to treat your beloved doggos & puppers with love and involvement. Book the appointment now!"
    },
    {
      image: doctorImage4,
      name: "Dr. Priya Mehrotra",
      rating: 5.0,
      reviews: 100,
      description: "Dr. Priya, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic 'Petz & Vetz'. Our paradise is situated in the heart of the town with a pleasant environment. We are ready to treat your beloved doggos & puppers with love and involvement. Book the appointment now!"
    },
  ];

  return (
    <div className="app-container">
      {doctors.map((doctor, index) => (
        <DoctorCard 
          key={index}
          image={doctor.image}
          name={doctor.name}
          rating={doctor.rating}
          reviews={doctor.reviews}
          description={doctor.description}
        />
      ))}
    </div>
  );
}

export default Card;
