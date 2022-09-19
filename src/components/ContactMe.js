import React from "react";
import contactPic from "../img/DHuggingHarp.jpg";

const ContactMe = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="pageColumn">
          <h1>CONTACT ME</h1>
          <img
            className="frontPagePic"
            src={contactPic}
            alt="front page pic"
            style={{
              width: "90%",
            }}
          />
        </div>

        <div className="pageColumn">
          <h2 class="sm-heading">How to reach me...</h2>

          <div class="boxes">
            <div>
              <span class="text-secondary">Email:</span>harpwolfstl@yahoo.com
            </div>
            <div>
              <span class="text-secondary">Phone/Text:</span>314-717-8703
            </div>
          </div>
        </div>
      </div>
      <a href="/">Home</a>
    </div>
  );
};

export default ContactMe;
