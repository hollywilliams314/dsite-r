import React from "react";
import lessonsPic from "../img/CloseUp.jpg";

const Lessons = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="pageColumn">
          {/* <h1>Lessons</h1> */}
          <img
            className="frontPagePic"
            src={lessonsPic}
            alt="front page pic"
            style={{
              width: "80%",
            }}
          />
        </div>

        <div className="pageColumn">
          <h1 className="page-title">Lessons</h1>

          <p>
            Since 2008, Danielle has been sharing her passion for music with
            students of all backgrounds and ages. She firmly believes that
            everyone has different strengths and styles of learning and creates
            unique lesson plans to suit the individual needs of each student.
            Because students learn best when they are happy, Danielle does
            everything she can to create a nurturing environment and encourages
            students to pursue their own musical interests and dreams. It is her
            goal to give students an arsenal of tools they can use to become
            self-sufficient musicians with a deep understanding of the
            technical, theoretical, and expressive elements of music. Danielle
            currently teaches piano and harp out of her home studio, in
            student’s homes in the City of Chicago, and online.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
