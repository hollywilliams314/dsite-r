import React from "react";
import regPic from "../img/harpcorner.jpg";
import build_back_pic from "../img/build_back.jpg";
import build_front_pic from "../img/build_front.jpg";
import build_side_pic from "../img/build_side.jpg";

const Regulation = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="pageColumn">
          {/* <h1 className="page-title">REGULATIONS</h1> */}
          {/* <img
            className="otherPagePic bsticky"
            src={regPic}
            alt="regulation pic"
            style={{
              width: "90%",
            }}
          /> */}
          <h4 className="p-top-space">Danielle building her own harp</h4>
          <img
            className="otherPagePic bsticky"
            src={build_back_pic}
            alt="Danielle builds her harp pic"
            style={{
              width: "90%",
            }}
          />
          <img
            className="otherPagePic bsticky"
            src={build_side_pic}
            alt="Danielle builds her harp pic"
            style={{
              width: "90%",
            }}
          />
          <img
            className="frontPagePic bsticky"
            src={build_front_pic}
            alt="Danielle builds her harp pic"
            style={{
              width: "90%",
            }}
          />
        </div>

        <div className="pageColumn">
          <h1 className="page-title">Regulations</h1>

          <p>
            Danielle began her career as an instrument technician in 2006 at the
            age of 15, specializing in woodwinds, brasswinds, and orchestral
            string instruments. In 2013 she built her own shops and became head
            of the band instrument repair departments in two music stores in St.
            Louis where she had many loyal customers.
          </p>
          <p>
            In 2019 Danielle moved to Chicago to complete the harp regulation
            program at Lyon & Healy. She studied under John Papodolias and
            became a member of the Lyon & Healy and Salvi Technician’s Guild in
            2020. After the apprenticeship ended she was hired on full time at
            the factory. In addition to studying regulation, Danielle has worked
            extensively in final assembly of new production and vintage harps
            and has experience rebuilding and regulating harps of all ages.
          </p>
          <p>
            As a professional harpist, Danielle understands the needs performers
            demand of their instruments. With her 16 years as an instrument
            technician, she has experience serving customers of all skill levels
            - from complete beginners to internationally acclaimed musicians.
          </p>
          <h3>What is a regulation?</h3>
          <p>
            A harp regulation is regular maintenance performed to keep your
            instrument in optimal playing condition.
          </p>
          <h4>A typical pedal harp regulation includes:</h4>
          <p>
            <ul>
              <li>
                Inspecting the overall condition of the harp and noting any
                potential future repairs
              </li>
              <li>Replacing red pedal felts and white slot felts</li>
              <li>Adjusting pedal rod length as necessary </li>
              <li>
                Inspecting and adjusting pedal movement and spring function
              </li>
              <li>Inspecting overall action condition and function</li>
              <li>
                Centering strings in the middle of discs and adjusting grip
              </li>
              <li>Adjusting intonation</li>
              <li>Eliminating or improving unwanted sounds</li>
            </ul>
          </p>
          <h4>A typical lever harp regulation includes:</h4>
          <p>
            <ul>
              <li>
                Inspecting the overall condition of the harp and noting any
                potential future repairs
              </li>
              <li>Aligning strings and levers</li>
              <li>Inspecting and adjusting string nuts</li>
              <li>Replacing any necessary parts</li>
              <li>Adjusting intonation</li>
              <li>Eliminating or improving unwanted sounds</li>
            </ul>
          </p>
          <p>
            Ideally pedal harps should be regulated every 1-2 years. Lever harps
            don’t need to be regulated as often - usually every 3-5 years or if
            there is a problem. Having your harp serviced regularly will keep
            your instrument playing it’s best, keep small issues from turning
            into big problems, and can keep you up to date about the harp’s
            condition to avoid unexpected major repairs.
          </p>
          <h3>Price List:</h3>
          <h4>*All prices subject to change* </h4>
          <div className="row">
            <span className="left">Full Service Regulation</span>
            <span className="right">$380</span>
          </div>
          <div className="row">
            <span className="left">Warranty Regulation</span>
            <span className="right">N/C</span>
          </div>
          <div className="row">
            <span className="left">Lever Harp Regulation</span>
            <span className="right">$175</span>
          </div>
          <div className="row">
            <span className="left">Hourly Labor</span>
            <span className="right">$120</span>
          </div>
          <div className="row">
            <span className="left">Pedal Rod Lubrication</span>
            <span className="right">$120</span>
          </div>
          <div className="row">
            <span className="left">Restring Pedal Harp</span>
            <span className="right">$175</span>
          </div>
          <div className="row">
            <span className="left">Restring Lever Harp</span>
            <span className="right">$125</span>
          </div>
          <div className="row">
            <span className="left">Bass Wires Change</span>
            <span className="right">$75</span>
          </div>
          <div className="row">
            <span className="left">Restringing per octave</span>
            <span className="right">$30</span>
          </div>
          <div className="row">
            <span className="left">Diagnostics/Condition Report</span>
            <span className="right">N/C</span>
          </div>
          <p className="p-top-space">
            House Calls: (2 lever harps = 1 pedal harp) 1 Harp - $100, 2 harps -
            $50, 3 harps - no extra charge
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regulation;
