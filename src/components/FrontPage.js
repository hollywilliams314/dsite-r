import React from "react";
import frontPagePic from "../img/Dleaningonharp2.jpg";

const FrontPage = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <img
          className="frontPagePic"
          src={frontPagePic}
          alt="front page pic"
          style={{
            width: "90%",
          }}
        />
      </div>
    </div>
  );
};

export default FrontPage;
