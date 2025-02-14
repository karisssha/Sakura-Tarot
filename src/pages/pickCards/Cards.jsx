import React from "react";
import RandomCards from "../../components/randomCards/RandomCards";
import style from "./Cards.module.css";
import ButtonSeeHistory from '../../components/buttons/history/ButtonSeeHistory'
import ButtonRestart from "../../components/buttons/restart/ButtonRestart";
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

      <div className= {style.buttonContainer}>
      <ButtonSeeHistory/>
      <ButtonRestart/>
      </div>
    </>
  );
}

export default Cards;
