import PropTypes from "prop-types";
import Popup from "reactjs-popup";

const Menu = ({ onClick }) => {
  const Menu = () => {
    const onClick = (e) => {
      console.log(e);
    };
  };
  return (
    <div>
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
    </div>
  );
};

Menu.propTypes = {
  onClick: PropTypes.func,
};

export default Menu;
