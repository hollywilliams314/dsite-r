import { Link } from "react-router-dom";
import bioPic from "../img/BigSmileCloseUp.jpg";

const Bio = () => {
  return (
    <div className="container">
      <div className="page">
        <div className="pageColumn">
          <h1>BIO</h1>
          <img
            className="frontPagePic"
            src={bioPic}
            alt="front page pic"
            style={{
              width: "90%",
            }}
          />
        </div>

        <div className="pageColumn">
          <p>
            Danielle Williams is a multifaceted harpist and instrumentalist
            currently based in Chicago, Illinois. She began studying the harp in
            her hometown of St. Louis, Missouri in 2005 with harpist
            extraordinaire Terri Langerak. She has been playing the harp
            professionally for weddings, events, and ensembles since 2006. In
            2014 she graduated from University of Missouri - St. Louis with a
            Bachelors of Arts in Music with an emphasis in harp. Danielle has
            performed with many groups and ensembles playing a wide range of
            styles including orchestral, experimental, musical theatre, and
            avante garde. She held the title of Principal Harpist of the Town &
            Country Symphony Orchestra from 2015-2019 and the Alton Symphony
            Orchestra from 2016-2019. A couple of her most memorable
            performances include Goodall’s Eternal Light: A Requiem with the St.
            Louis Bach Society as well as the Lincoln Center Theater’s
            production of The King and I.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
