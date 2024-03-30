import ux from './images/back-end.png';
import android from './images/android.png'
import host from './images/coding.png'
import graphic from './images/vector (1).png'
import uxdesign from './images/ux-interface.png'

import React from "react";
const Skills = () => {
  return (
    <section className="skills" id="myskills">
     <h2 className='heading'> MY <span>Skills</span></h2>
   <div className='skills-container'>
    <div className='skill-box'>
      <img  className='web-image'   src={host} alt="" />
   <h3>web-develpment</h3>
   <p  className='skill-p'>My web development skills encompass languages like HTML, CSS, and JavaScript.</p>
   <button>Hire me</button>
\    </div>
    <div className='skill-box'>
      <img className='web-image'   src={android}alt="" />    
   <h3>App-develpment</h3>

   <p  className='skill-p'> I have Mobile app development Expereince to build innovative and user-friendly applications that empower businesses.</p>
   <button>Hire me</button>
    </div>
    <div className='skill-box'>
   <img   className='web-image'       src={graphic} alt="" />
   <h3>Graphic -design</h3>
     <p className='skill-p'> "Good design is like good conversation - it's clear, impactful, and leaves a lasting impression</p>
     <button>Hire me</button>
    </div>
    <div className='skill-box'>
      <img className='web-image'        src={uxdesign} alt="" />
   <h3>Ux-designing</h3>
   <p  className='skill-p'>bring websites and apps to life visually, using graphic design,user interfaces (UI)</p>
   
   <button>Hire me</button>  
    </div>
   </div>
    </section>
  );
};

export default Skills;