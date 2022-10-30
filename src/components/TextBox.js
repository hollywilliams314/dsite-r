import { Link } from "react-router-dom";
import bioPic from "../img/BigSmileCloseUp.jpg";

const TextBox = ({ display }) => {
  return (
    <div className="container">
      <p>{display.title}</p>
      <div className="page">
        <div className="textBox">
          {/* <p>{display.title}</p> */}
          <p>{display.text}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TextBox;
