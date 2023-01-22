import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import Events from "./Events";

const Menu = ({ onClick }) => {
  const Menu = () => {
    const onClick = (e) => {
      console.log(e);
    };
  };
  return (
    <div className="menuBox">
      <p>
        <Link to="/bio">Bio</Link>
      </p>
      <p>
        <Link to="/events">Weddings and Events</Link>
      </p>
      <p>
        <Link to="/lessons">Lessons</Link>
      </p>
      <p>
        <Link to="/regulation">Harp Regulation</Link>
      </p>
      <p>
        <Link to="/contactMe">Contact Me</Link>
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
};

export default Menu;
