import React from "react";
import eventsPic from "../img/CloseupBack.jpg";

const Events = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="pageColumn">
          <img
            className="frontPagePic"
            src={eventsPic}
            alt="events pic"
            style={{
              width: "90%",
            }}
          />
        </div>
        <div className="pageColumn">
          <h1>Weddings and EVENTS</h1>
          <p>
            Danielle is a fantastic harpist and you should definately hire her
          </p>
        </div>
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default Events;
