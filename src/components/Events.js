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
            Adding harp music to your event is a unique way to create a classy
            and memorable atmosphere. Hire Danielle to provide harp music for
            your wedding, reception, cocktail hour, tea party, art show, or a
            loved one’s memorial service. Danielle has been playing the harp
            professionally for events of all kinds since 2006. As an experienced
            and versatile musician her repertoire contains many styles of music
            including classical, pop, indie rock, folk, and more. If there is a
            specific song that is not in her repertoire, she can arrange almost
            any special request. Contact her directly for current rates and
            pricing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
