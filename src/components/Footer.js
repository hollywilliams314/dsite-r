// import React from 'react'
import { FaBandcamp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer>
      <div className="socialLinks">
        <IconContext.Provider value={{ className: "shared-class", size: 30 }}>
          <a href="https://www.facebook.com/harpwolfstl">
            <FaFacebook className="socialIcon" />
          </a>
          {/* <FaFacebook className="socialIcon" /> */}
          <a href="http://instagram.com/harpwolf">
            <FaInstagram className="socialIcon" />
          </a>
          {/* <FaInstagram className="socialIcon" /> */}
          <a href="https://danielletaylorharp.bandcamp.com/releases">
            <FaBandcamp className="socialIcon" />
          </a>
        </IconContext.Provider>
      </div>
      <p>Copyright &copy; 2023</p>
    </footer>
  );
};

export default Footer;
