import { Link } from "react-router-dom";
import bioPic from "../img/BigSmileCloseUp.jpg";

const TextBox = ({ display }) => {
  return (
    // <div className="container">
    <div className="textBoxContainer">
      <div className="textBoxTitle">
        <p>{display.title}</p>
      </div>
      <div className="page">
        <div className="textBox">
          <p>{display.text}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TextBox;
