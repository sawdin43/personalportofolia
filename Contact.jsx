import React from "react";
import github from './images/github.png';
import linked from './images/linkedin.png';
import email from './images/email.png';
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import girl from './images/girl-modified.png'

const Contact = () => {
  return (
    <section>
        <div className="title"><h2 className="contact-title">Contact Me</h2>
                    </div>
      <div className="contact-container">
        <div className="contact-info">
          <img src={girl} alt="Profile Image" className="profile-image" />
          <h3 className="name">Sawda</h3>
          <p className="position">Front-end Developer</p>
        </div>
      
        <div className="contact-form">
          <form>
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Your Email" required />
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      
        <div className="contact-links">
          <a href="sawdahassan4@gmail.com">Email</a>
          <a href="tel:+6299393939">Phone</a>
          <a href="https://www.linkedin.com/in/sawda">LinkedIn</a>
          <a href="https://github.com/sawdin">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;