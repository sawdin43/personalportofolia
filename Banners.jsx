import React from "react";
import cutegirl from './images/cutegirl.jpg';
import img from '../Images/p-girl.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// Inside your component


const Banner = () => {
  return (
    <section id="Banners" className="banner-container">
      <div className="banner-content ,text">
        <h1 className="text-4xl">Hello,  I'M <span>sawda</span></h1>
        <h4>Fron-end-developer</h4>
        <p className="p-content">My expertise spans across  the front-end development.</p>
        <p className="p-content">allowing me to tackle projects from the ground up.</p>
        <button className="btn-banner">Read more</button>

      </div>

      <div className="banner-image">
          <img className="banner-image" src={img} alt="reactlogo" />
        
          <div>
            </div>
  
</div>
    </section>
  );
};

export default Banner;