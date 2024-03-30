import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <h1 className="logo" onClick={scrollToTop}>
          Sawda's portfolio
        </h1>
        <ul>
          <li>  
          <Link
       to="Home"
       spy={true}
         smooth={true}
           offset={-150} // Increase the offset value, e.g., -150
        duration={500}
         className="menu-item"
>
  Home
</Link>
           
          
            <Link
              to="myskills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="menu-item"
            >
              Skills
            </Link>
            <Link
              to="Bio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="menu-item"
            >
              Bio
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="menu-item"
            >
              Projects
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="menu-item"
            >
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;