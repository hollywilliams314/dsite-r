import React from "react";
import TextBox from "./TextBox";
import Menu from "./Menu";
import frontPagePic from "../img/Dleaningonharp2.jpg";

const FrontPage = ({ title }) => {
  return (
    <div className="container">
      <div className="page">
        <img className="frontPagePic" src={frontPagePic} alt="front page pic" />
      </div>

      <div className="textBoxesContainer">
        <TextBox
          display={{
            title: "Weddings & Events",
            text: "Since 2006, Danielle has been playing the harp professionally for events of all kinds. To add a unique and memorable element to your event, hire Danielle to play harp for your wedding, cocktail hour, or any special occasion. ",
          }}
        />
        <TextBox
          display={{
            title: "Lessons",
            text: "Danielle is a passionate teacher that loves to share her excitement for music with students. With over 15 years of teaching experience, she tailors to the individual needs of students of all ages and musical backgrounds. ",
          }}
        />
        <TextBox
          display={{
            title: "Harp Regulation",
            text: "Danielle is a certified Lyon & Healy and Salvi harp technician and guild member. Current areas of service include the United States (all regions), Mexico, and Australia. Contact directly for a service request.",
          }}
        />
      </div>
    </div>
  );
};

export default FrontPage;
