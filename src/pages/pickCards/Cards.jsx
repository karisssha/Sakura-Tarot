import React from "react";
import RandomCards from "../../components/randomCards/RandomCards";
import style from "./Cards.module.css";
import DateDisplay from "../../components/date/DateDisplay";
function Cards() {
  return (
    <>
    <div className={style.DateDisplay}>
      <DateDisplay/>
    </div>
      <div className={style.TextBubble}>
        <img
          src="src/assets/img/cloud.png"
          alt="Text Cloud"
          className={style.Cloud}
        />
        <p className={style.Text}>
          Select 3 cards! one for past, then for present and another <br/>one for future.
        </p>
        <img
          src="src/assets/img/flyingKero.png"
          alt="Kero"
          className={style.Kero}
        />
      </div>

      <RandomCards />
  
    </>
  );
}

export default Cards;
