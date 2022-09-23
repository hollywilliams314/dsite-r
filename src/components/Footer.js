// import React from 'react'
import { FaBandcamp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer>
      <div className="socialLinks">
        <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
          <FaFacebook className="socialIcon" />
          <FaInstagram className="socialIcon" />
          <FaBandcamp className="socialIcon" />
        </IconContext.Provider>
      </div>
      <p>Copyright &copy; 2022</p>
      <p>
        <a href="/bio">Bio</a>
      </p>
      <p>
        <a href="/events">Weddings and Events </a>
      </p>
      <p>
        <a href="/lessons">Lessons</a>
      </p>
      <p>
        <a href="/regulation">Harp Regulation</a>
      </p>
      <p>
        <a href="/contactMe">Contact Me</a>
      </p>
    </footer>
  );
};

export default Footer;
