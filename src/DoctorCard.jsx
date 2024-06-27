import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ image, name, rating, reviews, description }) => {
  return (
    <div className="doctor-card">
      <div className="doctor-image">
        <img src={image} alt={`${name}`} />
      </div>
      <div className="doctor-info">
        <h2>{name}</h2>
        <div className="doctor-rating">
          <span>{rating}</span>
          <span className="stars">{"⭐".repeat(Math.floor(rating))}</span>
          <span>({reviews} reviews)</span>
        </div>
        <p>{description}</p>
      </div>
      <div className="doctor-actions">
        <button className="know-your-vet">Know Your Vet</button>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
};

export default DoctorCard;
