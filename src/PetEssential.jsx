import React from 'react';
import './PetEssential.css';
import PetFood from './EssentialImages/img3.jpg';
import PetShelter from './EssentialImages/img6.jpg';
import PetUtensils from './EssentialImages/img4.jpg';
import RestrainItem from './EssentialImages/img1.jpg';
import Toys from './EssentialImages/img2.jpg';
import Groomingequi from './EssentialImages/img5.jpg';

const Essentials = () => {
  return (
    <div className="pet-essentials">
      <h1>Pet Essentials</h1>
      <p className="welcome-message">
        Welcome to PawsVeda, your one-stop destination for all your pet's needs! We offer a wide range of products to keep your furry, feathered, or scaly friends happy and healthy. From nutritious food and comfy beds to fun toys and essential grooming supplies, we've got everything to make your pet's life more enjoyable. Shop with us for high-quality items at great prices and enjoy the convenience of having everything delivered right to your doorstep. At PawsVeda, your pet's happiness is our priority!
      </p>
      <div className='strip-background'>
        <div className="essentials-grid">
          <div className="essential-item">
            <img src={PetFood} alt="Pet Food" />
            <h2>Pet Food</h2>
            <p>Our experienced vets provide top-notch medicinal care to keep your pets healthy.</p>
          </div>
          <div className="essential-item">
            <img src={PetShelter} alt="Pet Shelter" />
            <h2>Pet Shelter</h2>
            <p>PawsVeda has brought joy and well-being to over 10,000 pets, enriching their lives with love and care.</p>
          </div>
          <div className="essential-item">
            <img src={PetUtensils} alt="Pet Utensils" />
            <h2>Pet Utensils</h2>
            <p>Many consider PawsVeda their first choice for pet care, making us a trusted name in the community.</p>
          </div>
          <div className="essential-item">
            <img src={RestrainItem} alt="Restraint Items" />
            <h2>Restraint Items</h2>
            <p>Our 24/7 customer service team is ready to assist with orders and questions. Shop confidently with our dedicated support.</p>
          </div>
          <div className="essential-item">
            <img src={Toys} alt="Toys" />
            <h2>Toys</h2>
            <p>We take pride in our 99% customer satisfaction rate, a testament to our commitment to excellence.</p>
          </div>
          <div className="essential-item">
            <img src={Groomingequi} alt="Grooming Equipments" />
            <h2>Grooming Equipments</h2>
            <p>Your security is our priority. We ensure safe transactions so you can shop confidently, knowing your information is protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
