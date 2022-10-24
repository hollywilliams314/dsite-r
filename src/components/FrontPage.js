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
            width: "100%",
          }}
        />
      </div>
      <h1>BIO</h1>
      <p>
        Danielle Williams is a multifaceted harpist and instrumentalist
        currently based in Chicago, Illinois. She began studying the harp in her
        hometown of St. Louis, Missouri in 2005 with harpist extraordinaire
        Terri Langerak and has been playing professionally since 2006. In 2014
        she graduated from University of Missouri - St. Louis with a Bachelors
        of Arts in Music with an emphasis in harp. Danielle has performed with
        many groups and ensembles, playing a wide range of styles including
        orchestral, experimental, musical theatre, and avante garde. She held
        the title of Principal Harpist of the Town & Country Symphony Orchestra
        from 2015-2019 and the Alton Symphony Orchestra from 2016-2019. Some of
        her most memorable performances include Goodall’s Eternal Light: A
        Requiem with the St. Louis Bach Society as well as the Lincoln Center
        Theater’s production of The King and I and My Fair Lady. Danielle also
        enjoys collaborating with artists and writing harp parts for songs and
        recordings. She has worked with artists in many musical genres including
        indie, pop, metal, experimental, and hip-hop. Her work can be heard on
        ÆP by Hushgush, Non-Fiction by The Texas Room, Songs to Feel To by
        Millicent, Kin Ships by C.J. Boyd, and Honeydew by Honeydew to name a
        few. In 2019 Danielle released her debut solo album Why Are We Surprised
        When Seasons Change? featuring her original songs played on the harp
        through effects pedals along with saxophone and vocals.
      </p>
    </div>
  );
};

export default FrontPage;
