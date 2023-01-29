import React from "react";
import contactPic from "../img/playingAtWedding.jpg";
// import contactPic from "../img/DHuggingHarp.jpg";

const ContactMe = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="pageColumn">
          <img
            className="otherPagePic"
            // className="frontPagePic"
            src={contactPic}
            alt="contact page pic"
            style={{
              width: "90%",
            }}
          />
        </div>

        <div className="pageColumn">
          <h1 className="page-title">Contact Me</h1>

          <h3 class="sm-heading">How to reach me...</h3>

          <div class="boxes">
            <div>
              <h3 className="emailAndPhone">Email:</h3>harpwolfstl@yahoo.com
            </div>
            <div>
              <h3 className="emailAndPhone">Phone/Text:</h3>314-717-8703
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
