
import React from "react";
import cutegirl1 from './images/aboutmejpg.jpg';
import cutegirl from './images/cutegirl.jpg';

const Bio = () => {
  return (
    
    <section className="about" id="Bio">
        <div className="about-image">
            <img src={cutegirl} alt="hhh" />

        </div>
        <div className="about-content">
            <h2 className=" about-heading"> About <span>Me</span> </h2>
            <div class="about-container">
           <h3 class="job-title">Front-end Developer</h3>
           <p class="description">I'm a passionate front-end developer"</p>
           <p class="description">With expertise in HTML, CSS, and JavaScript,</p>
            <p class="description">React.js, Typoscriptand JSON for creating responsive web interfaces.</p>
              </div>
                        <button className="btn-bio">Read more</button>

        </div>
       
    </section>
  );
};

export default Bio;
