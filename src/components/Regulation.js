import React from "react";
import regPic from "../img/harpcorner.jpg";

const Regulation = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="pageColumn">
          <h1>REGULATIONS</h1>
          <img
            className="frontPagePic"
            src={regPic}
            alt="regulation pic"
            style={{
              width: "90%",
            }}
          />
        </div>

        <div className="pageColumn">
          <p>
            Since the age of 15 Danielle has been in instrument repair. She
            began her career in 2006 working on woodwinds, brasswinds, and
            string instruments. In 2013 she became head of the repair department
            in two music stores in St. Louis and built her own shops where she
            had many loyal customers.
          </p>
          <p>
            In 2019 Danielle moved to Chicago to complete the harp regulation
            program at Lyon & Healy. She completed her apprenticeship in the
            summer of 2020 and is an approved member of the Lyon & Healy and
            Salvi Technicians Guild. When her apprenticeship ended she was hired
            on full time at the factory. In addition to studying regulation,
            Danielle has worked extensively in assembly of new production and
            vintage harps and has experience rebuilding and regulating harps of
            all ages. As a professional harpist, Danielle understands the needs
            performers demand of their instruments. With her 15 years as an
            instrument technician, she has experience serving customers of all
            skill levels - from complete beginners to nationally acclaimed
            musicians
          </p>
        </div>
      </div>
      <a href="/">go home</a>
    </div>
  );
};

export default Regulation;
