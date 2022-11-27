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
        {/* <a href="/bio">Bio</a> */}
        <Link to="/bio">Bio</Link>
      </p>
      <p>
        {/* <a href="/events">Weddings and Events </a> */}
        <Link to="/events">Weddings and Events</Link>
      </p>
      <p>
        {/* <a href="/lessons">Lessons</a> */}
        <Link to="/lessons">Lessons</Link>
      </p>
      <p>
        {/* <a href="/regulation">Harp Regulation</a> */}
        <Link to="/regulation">Harp Regulation</Link>
      </p>
      <p>
        {/* <a href="/contactMe">Contact Me</a> */}
        <Link to="/contactMe">Contact Me</Link>
      </p>
      <p>
        {/* <a href="/">Home</a> */}
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
};

export default Menu;
