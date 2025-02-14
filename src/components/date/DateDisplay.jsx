import React from "react";
import styles from "./DateDisplay.module.css";


const DateDisplay = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <div className={styles.dateContainer}>
      <img src="src/assets/img/calendar.png"alt="Calendar Icon" className={styles.icon} />
      <span className={styles.dateText}>{formattedDate}</span>
    </div>
  );
};

export default DateDisplay;