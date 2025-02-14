import React from 'react'
import styles from './ButtonSeeHistory.module.css'


const ButtonSeeHistory = () => {
  const handleClick = () => {
    console.log("History button clicked");
  };

  return (
    <button className={styles.SeeHistory} onClick={handleClick}> 
      <p className= {styles.Text}>see history</p>
      <img className= {styles.SmallKero} src="/src/assets/img/keroIcon.png" alt="Button History" />
    </button>
  );
};


export default ButtonSeeHistory