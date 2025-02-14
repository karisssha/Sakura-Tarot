import React from "react";
import styles from "./Date.module.css";
import calendarIcon from "../assets/img/calendar.png";

const DateDisplay = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <div className={styles.dateContainer}>
      <img src={calendarIcon} alt="Calendar Icon" className={styles.icon} />
      <span className={styles.dateText}>{formattedDate}</span>
    </div>
  );
};

export default DateDisplay;