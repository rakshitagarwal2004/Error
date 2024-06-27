import React from 'react';
import './PetAdvice.css';
import generalCheckupIcon from './icons/general-Checkup.jpeg';
import newPetParentIcon from './icons/new-Pet-Parent.jpeg';
import skinIssuesIcon from './icons/skin-issues.jpeg';
import digestiveIssuesIcon from './icons/digestive-issues.jpeg';
import pawsLimbsIcon from './icons/paws-limbs.jpeg';
import dentalIssuesIcon from './icons/dental-issues.jpeg';
import earsIssuesIcon from './icons/ears-issues.jpeg';
import eyesIssuesIcon from './icons/eyes-issues.png';
import reproductionIcon from './icons/reproduction.jpeg';
import nutritionIcon from './icons/nutrition.jpeg';

const icons = [
  { src: generalCheckupIcon, label: 'General Checkup' },
  { src: newPetParentIcon, label: 'New Pet Parent' },
  { src: skinIssuesIcon, label: 'Skin Issues' },
  { src: digestiveIssuesIcon, label: 'Digestive Issues' },
  { src: pawsLimbsIcon, label: 'Paws & Limbs' },
  { src: dentalIssuesIcon, label: 'Dental Issues' },
  { src: earsIssuesIcon, label: 'Ears Issues' },
  { src: eyesIssuesIcon, label: 'Eyes Issues' },
  { src: reproductionIcon, label: 'Reproduction' },
  { src: nutritionIcon, label: 'Nutrition' },
];

function Advice() {
  return (
   <div className='full'>
    <div className="container">
      <div className="header">
        <p>Get trusted advice on your pet’s health</p>
      </div>
      <div className="icon-grid">
        {icons.map((icon, index) => (
          <div className="icon-item" key={index}>
            <img src={icon.src} alt={icon.label} />
            <p>{icon.label}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Advice;
