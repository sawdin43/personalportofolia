
import React from "react";
import pro1 from './images/original-8be367.jpg'
import pro2 from './images/original-c394ca7cf4cfb87bbd98ae0946f54f39.jpg'
import pro3 from './images/project3.jpg'

const Project =()=>{
    return(
 
        <section id="project">
        
        <h1 className="project-heading">Recent project</h1>
        <div className="conatiner-project">
            <article className="project-item">
                <div className="project-item-image">
                <img className="project-image"      src={pro1} alt="" />
                    
                </div>
                <h3>Responsive  skincare website </h3>
                <button className="btn-banner">Github</button>

            </article>
            <article className="project-item">
                <div className="project-item-image">
                <img   className="project-image"       src={pro3} alt="" />
                </div>
                <h3>Spa-booking website</h3>
                <button className="btn-banner">Github</button>

            </article>
            <article className="project-item">
                <div className="project-item-image">
                <img    className="project-image"         src={pro2} alt="" />
                </div>
                <h3>Hospital booking system</h3>
                <button className="btn-banner">Github</button>

            </article>
         
            
        </div>
    </section>
    )
}
export default Project
    
   