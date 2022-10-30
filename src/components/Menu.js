import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Events";

const Menu = ({ onClick }) => {
  const Menu = () => {
    const onClick = (e) => {
      console.log(e);
    };
  };
  return (
    <div className="menuBox">
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
      <p>
        <a href="/">Home</a>
      </p>
    </div>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
};

export default Menu;
